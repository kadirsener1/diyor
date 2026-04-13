const GEMINI_MODELS = [
    "gemini-2.0-flash",
    "gemini-1.5-flash",
    "gemini-1.5-flash-latest",
    "gemini-pro"
];

let currentModelIndex = 0;

// DOM
const apiKeyInput = document.getElementById("apiKeyInput");
const saveApiBtn = document.getElementById("saveApiBtn");
const apiStatus = document.getElementById("apiStatus");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const reviewBtn = document.getElementById("reviewBtn");
const loadingCard = document.getElementById("loadingCard");
const loaderSub = document.getElementById("loaderSub");
const errorCard = document.getElementById("errorCard");
const errorText = document.getElementById("errorText");
const resultCard = document.getElementById("resultCard");

// Sayfa yüklenince
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("gemini_api_key");
    if (saved) {
        apiKeyInput.value = saved;
        showApiOk("✅ API anahtarı kayıtlı.");
    }
});

// API Key kaydet
saveApiBtn.addEventListener("click", () => {
    const key = apiKeyInput.value.trim();
    if (!key) {
        showApiErr("Lütfen bir API anahtarı girin.");
        return;
    }
    localStorage.setItem("gemini_api_key", key);
    showApiOk("✅ API anahtarı kaydedildi!");
});

// Enter ile geçiş
bookTitle.addEventListener("keypress", e => {
    if (e.key === "Enter") bookAuthor.focus();
});
bookAuthor.addEventListener("keypress", e => {
    if (e.key === "Enter") handleReview();
});

// Buton
reviewBtn.addEventListener("click", handleReview);

// ==================
// ANA FONKSİYON
// ==================
async function handleReview() {
    const title = bookTitle.value.trim();
    const author = bookAuthor.value.trim();
    const apiKey = localStorage.getItem("gemini_api_key") || apiKeyInput.value.trim();

    if (!apiKey) {
        showError("Lütfen önce API anahtarınızı girin ve kaydedin.");
        return;
    }
    if (!title || !author) {
        showError("Lütfen kitap adı ve yazar bilgisini girin.");
        return;
    }

    hide(errorCard);
    hide(resultCard);
    show(loadingCard);
    reviewBtn.disabled = true;
    animateLoader();

    // Tüm modelleri sırayla dene
    currentModelIndex = 0;
    let lastError = null;

    while (currentModelIndex < GEMINI_MODELS.length) {
        try {
            const model = GEMINI_MODELS[currentModelIndex];
            loaderSub.textContent = `${model} modeli deneniyor...`;

            const prompt = buildPrompt(title, author);
            const raw = await callGemini(apiKey, prompt, model);
            const data = parseResponse(raw);

            renderResult(title, author, data);
            hide(loadingCard);
            reviewBtn.disabled = false;
            return; // Başarılı, çık

        } catch (err) {
            console.warn(`Model ${GEMINI_MODELS[currentModelIndex]} başarısız:`, err.message);
            lastError = err;
            currentModelIndex++;

            if (currentModelIndex < GEMINI_MODELS.length) {
                loaderSub.textContent = "Alternatif model deneniyor...";
                await delay(1000);
            }
        }
    }

    // Hiçbir model çalışmadıysa
    hide(loadingCard);
    reviewBtn.disabled = false;
    showError(lastError?.message || "Tüm modeller başarısız oldu. Lütfen birkaç dakika bekleyip tekrar deneyin.");
}

// ==================
// PROMPT
// ==================
function buildPrompt(title, author) {
    return `Sen deneyimli bir edebiyat eleştirmenisin.

Kitap: "${title}"
Yazar: ${author}

Bu kitap hakkında detaylı analiz yap. Yanıtını SADECE aşağıdaki JSON formatında ver, başka hiçbir şey yazma:

{
  "summary": "Kitabın konusunu ve içeriğini anlatan detaylı bir özet. Ana karakterler, olay örgüsü ve temel temalar hakkında 3-5 cümle yaz.",
  "genres": ["Tür1", "Tür2"],
  "education_level": 3,
  "education_text": "Hangi eğitim seviyesine uygun olduğunu ve nedenini açıkla.",
  "rating": 4,
  "rating_text": "Bu puanı neden verdiğini açıkla.",
  "comment": "Kitabın güçlü ve zayıf yönleri, edebiyat dünyasındaki yeri, okuyucuya neler kattığı hakkında 3-5 cümlelik kapsamlı yorum."
}

Kurallar:
- genres Türkçe olsun (Roman, Şiir, Deneme, Psikolojik Roman, Distopya, Bilim Kurgu, Tarih vb.)
- education_level: 1=İlkokul, 2=Ortaokul, 3=Lise, 4=Üniversite, 5=Akademik
- rating: 1-5 arası tam sayı
- Her şey Türkçe olsun
- YALNIZCA JSON döndür`;
}

// ==================
// API ÇAĞRISI
// ==================
async function callGemini(apiKey, prompt, model) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const body = {
        contents: [
            {
                parts: [{ text: prompt }]
            }
        ],
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048
        }
    };

    let res;
    try {
        res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
    } catch (networkErr) {
        throw new Error("İnternet bağlantınızı kontrol edin. Sunucuya ulaşılamadı.");
    }

    // Hata durumları
    if (!res.ok) {
        let errMsg = `HTTP ${res.status}`;

        try {
            const errData = await res.json();
            errMsg = errData?.error?.message || errMsg;
        } catch (_) {}

        if (res.status === 429) {
            throw new Error("RATE_LIMIT"); // Özel işaret, sonraki modeli dene
        }
        if (res.status === 400) {
            if (errMsg.toLowerCase().includes("api key")) {
                throw new Error("API anahtarı geçersiz. Google AI Studio'dan yeni anahtar alın.");
            }
            throw new Error("RATE_LIMIT"); // Model desteklenmiyor olabilir
        }
        if (res.status === 403) {
            throw new Error("API anahtarınızın erişim izni yok. Google AI Studio'dan kontrol edin.");
        }
        if (res.status === 404) {
            throw new Error("RATE_LIMIT"); // Model bulunamadı, sonrakini dene
        }
        if (res.status === 500 || res.status === 503) {
            throw new Error("RATE_LIMIT"); // Sunucu hatası, sonrakini dene
        }

        throw new Error(errMsg);
    }

    // Başarılı yanıt
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
        // Safety filter veya boş yanıt
        const reason = data?.candidates?.[0]?.finishReason;
        if (reason === "SAFETY") {
            throw new Error("Yapay zeka güvenlik filtresine takıldı. Farklı bir kitap deneyin.");
        }
        throw new Error("RATE_LIMIT"); // Boş yanıt, sonraki modeli dene
    }

    return text;
}

// ==================
// PARSE
// ==================
function parseResponse(raw) {
    let jsonStr = raw.trim();

    // Markdown code block temizle
    const match = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (match) {
        jsonStr = match[1].trim();
    }

    // Bazen başında/sonunda fazladan karakter olabiliyor
    const firstBrace = jsonStr.indexOf("{");
    const lastBrace = jsonStr.lastIndexOf("}");
    if (firstBrace !== -1 && lastBrace !== -1) {
        jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
    }

    try {
        const obj = JSON.parse(jsonStr);

        return {
            summary: obj.summary || "Özet bilgisi alınamadı.",
            genres: Array.isArray(obj.genres) ? obj.genres : ["Bilinmiyor"],
            educationLevel: clamp(parseInt(obj.education_level) || 3, 1, 5),
            educationText: obj.education_text || "Seviye bilgisi alınamadı.",
            rating: clamp(parseInt(obj.rating) || 3, 1, 5),
            ratingText: obj.rating_text || "Değerlendirme bilgisi alınamadı.",
            comment: obj.comment || "Yorum bilgisi alınamadı."
        };
    } catch (e) {
        console.error("Parse hatası:", e, "\nHam:", raw);
        throw new Error("Yapay zekanın yanıtı işlenemedi. Lütfen tekrar deneyin.");
    }
}

// ==================
// RENDER
// ==================
function renderResult(title, author, data) {
    document.getElementById("resTitle").textContent = `📖 ${title}`;
    document.getElementById("resAuthor").textContent = `✍️ ${author}`;
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
    document.getElementById("resScore").textContent = `${data.rating}/5`;
    document.getElementById("resRatingText").textContent = data.ratingText;
    document.getElementById("resComment").textContent = data.comment;

    show(resultCard);

    setTimeout(() => {
        resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
}

// ==================
// LOADING ANİMASYONU
// ==================
function animateLoader() {
    const msgs = [
        "Kitap analiz ediliyor...",
        "İçerik inceleniyor...",
        "Edebiyat türü belirleniyor...",
        "Değerlendirme hazırlanıyor...",
        "Yorum yazılıyor..."
    ];
    let i = 0;
    const interval = setInterval(() => {
        if (loadingCard.classList.contains("hidden")) {
            clearInterval(interval);
            return;
        }
        i = (i + 1) % msgs.length;
        loaderSub.textContent = msgs[i];
    }, 2500);
}

// ==================
// YARDIMCILAR
// ==================
function show(el) { el.classList.remove("hidden"); }
function hide(el) { el.classList.add("hidden"); }
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

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
