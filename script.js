// =============================================
// YAPAY ZEKA KİTAP YORUMLAYICI
// Google Gemini API Entegrasyonu
// =============================================

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

// DOM
const apiKeyInput    = document.getElementById("apiKeyInput");
const saveApiBtn     = document.getElementById("saveApiBtn");
const apiStatus      = document.getElementById("apiStatus");
const bookTitle      = document.getElementById("bookTitle");
const bookAuthor     = document.getElementById("bookAuthor");
const reviewBtn      = document.getElementById("reviewBtn");
const loadingCard    = document.getElementById("loadingCard");
const loaderSub      = document.getElementById("loaderSub");
const errorCard      = document.getElementById("errorCard");
const errorText      = document.getElementById("errorText");
const resultCard     = document.getElementById("resultCard");

// Sayfa yüklendiğinde kayıtlı API key kontrol et
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("gemini_api_key");
    if (saved) {
        apiKeyInput.value = saved;
        showApiOk("✅ API anahtarı kayıtlı.");
    }
});

// API KEY KAYDET
saveApiBtn.addEventListener("click", () => {
    const key = apiKeyInput.value.trim();
    if (!key) {
        showApiErr("Lütfen bir API anahtarı girin.");
        return;
    }
    localStorage.setItem("gemini_api_key", key);
    showApiOk("✅ API anahtarı kaydedildi!");
});

// ENTER İLE GEÇİŞ
bookTitle.addEventListener("keypress", e => {
    if (e.key === "Enter") bookAuthor.focus();
});
bookAuthor.addEventListener("keypress", e => {
    if (e.key === "Enter") handleReview();
});

// YORUM BUTONU
reviewBtn.addEventListener("click", handleReview);

// =============================================
// ANA FONKSİYON
// =============================================
async function handleReview() {
    const title  = bookTitle.value.trim();
    const author = bookAuthor.value.trim();
    const apiKey = localStorage.getItem("gemini_api_key") || apiKeyInput.value.trim();

    // Doğrulamalar
    if (!apiKey) {
        showError("Lütfen önce API anahtarınızı girin ve kaydedin.");
        return;
    }
    if (!title || !author) {
        showError("Lütfen kitap adı ve yazar bilgisini girin.");
        return;
    }

    // UI güncelle
    hide(errorCard);
    hide(resultCard);
    show(loadingCard);
    reviewBtn.disabled = true;
    animateLoader();

    try {
        // Prompt oluştur
        const prompt = buildPrompt(title, author);

        // Gemini API çağrısı
        const raw = await callGemini(apiKey, prompt);

        // JSON parse et
        const data = parseResponse(raw);

        // Göster
        renderResult(title, author, data);

    } catch (err) {
        console.error(err);
        showError(err.message || "Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
        hide(loadingCard);
        reviewBtn.disabled = false;
    }
}

// =============================================
// PROMPT OLUŞTUR
// =============================================
function buildPrompt(title, author) {
    return `Sen bir edebiyat eleştirmeni ve kitap uzmanısın.

Aşağıdaki kitap hakkında detaylı bir yorum hazırla:

📖 Kitap Adı: ${title}
✍️ Yazar: ${author}

Yanıtını MUTLAKA aşağıdaki JSON formatında ver. Başka hiçbir şey yazma, sadece JSON döndür:

{
  "summary": "Kitabın içeriğini ve konusunu anlatan 3-5 cümlelik detaylı bir özet. Kitapta neler anlatılıyor, ana tema nedir, hangi olaylar yaşanıyor gibi bilgileri içersin.",
  "genres": ["Tür1", "Tür2", "Tür3"],
  "education_level": 3,
  "education_text": "Bu kitabın hangi eğitim seviyesine uygun olduğunu ve nedenini açıkla.",
  "rating": 4,
  "rating_text": "Kitabın neden bu puanı hak ettiğini açıkla.",
  "comment": "Kitap hakkında 3-5 cümlelik derinlemesine bir genel yorum. Güçlü yönleri, zayıf yönleri, okuyucuya neler kattığı gibi bilgileri içersin."
}

KURALLAR:
- "genres" alanına kitabın edebiyat türlerini Türkçe olarak yaz (örn: Roman, Psikolojik Roman, Distopya, Şiir, Deneme, Tarih, Bilim Kurgu vb.)
- "education_level" alanına 1 ile 5 arasında bir sayı yaz: 1=İlkokul, 2=Ortaokul, 3=Lise, 4=Üniversite, 5=Akademik
- "rating" alanına 1 ile 5 arasında bir puan ver
- Tüm metinleri TÜRKÇE yaz
- SADECE JSON döndür, açıklama veya markdown ekleme`;
}

// =============================================
// GEMİNİ API ÇAĞRISI
// =============================================
async function callGemini(apiKey, prompt) {
    const url = `${GEMINI_URL}?key=${apiKey}`;

    const body = {
        contents: [{
            parts: [{ text: prompt }]
        }],
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048
        }
    };

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });

    if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        if (res.status === 400) {
            throw new Error("Geçersiz API anahtarı. Lütfen kontrol edin.");
        }
        if (res.status === 403) {
            throw new Error("API anahtarınızın erişim izni yok. Google AI Studio'dan yeni anahtar alın.");
        }
        if (res.status === 429) {
            throw new Error("Çok fazla istek gönderildi. Lütfen birkaç saniye bekleyip tekrar deneyin.");
        }
        throw new Error(errData?.error?.message || `API hatası: ${res.status}`);
    }

    const data = await res.json();

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
        throw new Error("Yapay zekadan boş yanıt geldi. Lütfen tekrar deneyin.");
    }

    return text;
}

// =============================================
// YANITYI PARSE ET
// =============================================
function parseResponse(raw) {
    // JSON bloğunu bul (```json ... ``` veya düz JSON)
    let jsonStr = raw;

    // Markdown code block varsa temizle
    const codeBlockMatch = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (codeBlockMatch) {
        jsonStr = codeBlockMatch[1];
    }

    // Trim
    jsonStr = jsonStr.trim();

    try {
        const obj = JSON.parse(jsonStr);

        return {
            summary:        obj.summary         || "Bilgi bulunamadı.",
            genres:         obj.genres           || ["Bilinmiyor"],
            educationLevel: clamp(obj.education_level || 3, 1, 5),
            educationText:  obj.education_text   || "Bilgi yok.",
            rating:         clamp(obj.rating || 3, 1, 5),
            ratingText:     obj.rating_text      || "Değerlendirme yok.",
            comment:        obj.comment          || "Yorum bulunamadı."
        };

    } catch (e) {
        console.error("JSON parse hatası:", e, "\nHam yanıt:", raw);
        throw new Error("Yapay zekanın yanıtı işlenemedi. Lütfen tekrar deneyin.");
    }
}

// =============================================
// SONUCU RENDER ET
// =============================================
function renderResult(title, author, data) {

    // Başlık
    document.getElementById("resTitle").textContent  = `📖 ${title}`;
    document.getElementById("resAuthor").textContent = `✍️ ${author}`;

    // Özet
    document.getElementById("resSummary").textContent = data.summary;

    // Türler
    const tagsEl = document.getElementById("resTags");
    tagsEl.innerHTML = "";
    data.genres.forEach(g => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = g;
        tagsEl.appendChild(span);
    });

    // Seviye
    const levelNames = ["İlkokul", "Ortaokul", "Lise", "Üniversite", "Akademik"];
    const barsEl = document.getElementById("resLevelBars");
    barsEl.innerHTML = "";
    levelNames.forEach((name, i) => {
        const bar = document.createElement("div");
        bar.className = "level-bar" + (i < data.educationLevel ? " active" : "");
        bar.textContent = name;
        barsEl.appendChild(bar);
    });
    document.getElementById("resLevelText").textContent = data.educationText;

    // Puan
    const starsEl = document.getElementById("resStars");
    starsEl.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        const s = document.createElement("span");
        s.className = i <= data.rating ? "star-filled" : "star-empty";
        s.textContent = "★";
        starsEl.appendChild(s);
    }
    document.getElementById("resScore").textContent   = `${data.rating}/5`;
    document.getElementById("resRatingText").textContent = data.ratingText;

    // Yorum
    document.getElementById("resComment").textContent = data.comment;

    // Göster
    show(resultCard);

    setTimeout(() => {
        resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
}

// =============================================
// LOADING ANİMASYONU
// =============================================
function animateLoader() {
    const msgs = [
        "Kitap analiz ediliyor...",
        "İçerik inceleniyor...",
        "Edebiyat türü belirleniyor...",
        "Değerlendirme hazırlanıyor...",
        "Yorum yazılıyor...",
        "Son rötuşlar yapılıyor..."
    ];
    let i = 0;
    const interval = setInterval(() => {
        if (loadingCard.classList.contains("hidden")) {
            clearInterval(interval);
            return;
        }
        i = (i + 1) % msgs.length;
        loaderSub.textContent = msgs[i];
    }, 2000);
}

// =============================================
// YARDIMCI FONKSİYONLAR
// =============================================
function show(el) { el.classList.remove("hidden"); }
function hide(el) { el.classList.add("hidden"); }

function showError(msg) {
    errorText.textContent = msg;
    show(errorCard);
}

function showApiOk(msg) {
    apiStatus.textContent = msg;
    apiStatus.className = "api-status ok";
}

function showApiErr(msg) {
    apiStatus.textContent = msg;
    apiStatus.className = "api-status err";
}

function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
}
