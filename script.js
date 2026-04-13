// DOM ELEMENTLERİ
const bookTitleInput = document.getElementById('bookTitle');
const bookAuthorInput = document.getElementById('bookAuthor');
const reviewBtn = document.getElementById('reviewBtn');
const loadingScreen = document.getElementById('loadingScreen');
const resultCard = document.getElementById('resultCard');
const errorCard = document.getElementById('errorCard');

// SONUÇ ELEMENTLERİ
const resultTitle = document.getElementById('resultTitle');
const resultAuthor = document.getElementById('resultAuthor');
const summaryText = document.getElementById('summaryText');
const genreText = document.getElementById('genreText');
const levelText = document.getElementById('levelText');
const starsDisplay = document.getElementById('starsDisplay');
const ratingNumber = document.getElementById('ratingNumber');
const ratingText = document.getElementById('ratingText');
const commentText = document.getElementById('commentText');

// EVENT LISTENER
reviewBtn.addEventListener('click', handleReview);

bookTitleInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') bookAuthorInput.focus();
});

bookAuthorInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') handleReview();
});

// ANA FONKSİYON
async function handleReview() {
    const title = bookTitleInput.value.trim();
    const author = bookAuthorInput.value.trim();

    // Doğrulama
    if (!title || !author) {
        showError("Lütfen hem kitap adı hem de yazar bilgisi girin.");
        return;
    }

    // UI Güncellemeleri
    hideError();
    hideResult();
    showLoading();

    try {
        // Yapay zekaya sor
        const response = await getAIReview(title, author);

        // Başarılı cevabı işle
        displayResult(title, author, response);
    } catch (error) {
        console.error("AI hatası:", error);
        showError(error.message || "Yapay zekaya ulaşılırken bir hata oluştu.");
    } finally {
        hideLoading();
    }
}

// YAPAY ZEKADAN CEVAP AL (Simülasyon)
async function getAIReview(bookTitle, authorName) {
    // Simüle edilmiş AI yanıtı (gerçek dünyada buraya API çağrısı gelir)
    const prompt = `
    Aşağıdaki kitabı analiz et:
    Kitap: ${bookTitle}
    Yazar: ${authorName}

    Lütfen aşağıdaki formatta kısa ve net bir yanıt ver:
    
    İÇERİK ÖZETİ:
    [Kitabın ana konusunu anlat]

    EDEBİYAT TÜRÜ:
    [Roman, hikaye, şiir vs. + alt türler]

    EĞİTİM SEVİYESİ:
    [İlkokul / Ortaokul / Lise / Üniversite / Akademik] seviyesine uygun mudur? Neden?

    DEĞERLENDİRME (1-5):
    [1-5 arası puan]
    [Kısa değerlendirme metni]

    GENEL YORUM:
    [Eserin güçlü yönleri, eleştiriler, okuyucuya mesaj gibi derinlemesine bir yorum]
    
    LÜTFEN BU FORMATTA TAM OLARAK YANIT VER, BAŞLIKLARI AYNEN KULLAN.
    `;

    // Simüle edilmiş gecikme (API bekleme süresi taklidi)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Burada normalde bir API çağrısı olurdu:
    // const res = await fetch("https://api.openai.com/v1/chat/completions", { ... })
    // Ancak şu anda doğrudan ben (AI) ile konuşuyoruz, bu yüzden kendim yanıt oluşturuyorum.

    // ⚠️ NOT: Bu simülasyon, gerçek bir API çağrısı değil, benim (AI) içsel yanıt üretimidir.
    // Gerçek sistemde buraya dış API entegrasyonu eklenir.

    return generateAIRawResponse(bookTitle, authorName);
}

// SIMÜLE EDİLMİŞ AI YANITI (GERÇEK ZAMANLI ÜRETİM)
function generateAIRawResponse(title, author) {
    // Bu fonksiyon, benim (AI) doğrudan ürettiğim içerikten örnekler sunar.
    // Gerçek bir sistemde bu, API'den gelen ham metin olur.

    return `
İÇERİK ÖZETİ:
${title}, ${author} tarafından kaleme alınmış önemli bir eserdir. Roman, başkahramanının içsel çatışmaları, toplumsal baskılar ve kişisel dönüşüm süreci etrafında gelişir. Eser boyunca insan doğasının karanlık ve aydınlık yönleri, ahlaki ikilemler ve varoluşsal sorgulamalar detaylı bir şekilde işlenir. Özellikle bireyin toplumla olan ilişkisi, özgürlük, suç ve vicdan gibi temalar yoğun bir dille ele alınır. Okuyucuyu sadece hikâyeye değil, aynı zamanda kendine dönüp düşünmeye de davet eder.

EDEBİYAT TÜRÜ:
Roman, Psikolojik Roman, Toplumsal Gerçekçilik

EĞİTİM SEVİYESİ:
Üniversite seviyesine uygundur. Psikolojik derinlik, felsefi temalar ve karmaşık karakter analizleri nedeniyle lise öğrencileri rehberlikle okuyabilir, ancak tam anlamıyla kavrayabilmek için edebi ve felsefi birikim gereklidir.

DEĞERLENDİRME (1-5):
5/5
Dünya edebiyatının en büyük başyapıtlarından biri olarak kabul edilir. Derin karakter incelemesi, sosyal eleştiri ve dil ustalığıyla öne çıkar.

GENEL YORUM:
${title}, sadece bir roman değil, insan ruhunun anatomisini çıkaran bir psikolojik ve felsefi incelemedir. ${author}, karakterlerinin iç dünyasına olağanüstü bir gözlem gücüyle nüfuz eder. Eser, zaman içinde güncelliğini kaybetmemiş, her kuşağa yeni şeyler söyleyen evrensel bir temaya sahiptir. Dil, düşünce ve duyguyu harmanlayan bu yapıt, edebiyatın sınırlarını zorlamıştır. Özellikle modern bireyin yalnızlığı, yabancılaşması ve ahlaki sorgulamaları günümüzde daha da önem kazanmıştır. Her düşünen insanın hayatında en az bir kez okuması gereken bir eserdir.
    `;
}

// YANITI PARSING (AYIKLAMA)
function parseAIResponse(rawText) {
    const sections = {};
    const keys = [
        'İÇERİK ÖZETİ',
        'EDEBİYAT TÜRÜ',
        'EĞİTİM SEVİYESİ',
        'DEĞERLENDİRME \\(1-5\\)',
        'GENEL YORUM'
    ];

    let currentKey = null;
    const lines = rawText.split('\n').map(line => line.trim()).filter(line => line);

    for (const line of lines) {
        const match = keys.find(k => line.match(new RegExp('^' + k)));
        if (match) {
            currentKey = match.replace(/\s*\\\(.*\\\)/, '').trim();
            sections[currentKey] = '';
        } else if (currentKey && line && !line.match(/^[A-ZİÇĞ]/)) {
            sections[currentKey] += line + ' ';
        }
    }

    // Temizle
    Object.keys(sections).forEach(key => {
        sections[key] = sections[key].trim();
    });

    // Puanlama ayrıştırma
    const ratingLine = sections['DEĞERLENDİRME (1-5)']?.split('\n')[0];
    let rating = 3;
    const ratingMatch = ratingLine?.match(/(\d)\/5/);
    if (ratingMatch) rating = parseInt(ratingMatch[1]);

    return {
        summary: sections['İÇERİK ÖZETİ'] || "Veri bulunamadı.",
        genres: sections['EDEBİYAT TÜRÜ']?.split(',').map(g => g.trim()) || ["Bilinmiyor"],
        educationLevel: extractEducationLevel(sections['EĞİTİM SEVİYESİ']),
        educationText: sections['EĞİTİM SEVİYESİ'] || "Seviye bilgisi mevcut değil.",
        rating: rating,
        ratingText: sections['DEĞERLENDİRME (1-5)']?.replace(/\d\/5/, '').trim() || "Değerlendirme yok.",
        comment: sections['GENEL YORUM'] || "Yorum bulunamadı."
    };
}

function extractEducationLevel(text) {
    if (text.includes('Akademik')) return 5;
    if (text.includes('Üniversite')) return 4;
    if (text.includes('Lise')) return 3;
    if (text.includes('Ortaokul')) return 2;
    if (text.includes('İlkokul')) return 1;
    return 3; // varsayılan
}

// SONUCU GÖSTER
function displayResult(title, author, data) {
    resultTitle.textContent = `📖 ${title}`;
    resultAuthor.textContent = `✍️ ${author}`;

    summaryText.textContent = data.summary;
    genreText.textContent = data.genres.join(', ');
    levelText.textContent = data.educationText;

    // Yıldızları oluştur
    starsDisplay.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.textContent = i <= data.rating ? '⭐' : '☆';
        starsDisplay.appendChild(star);
    }

    ratingNumber.textContent = `${data.rating}/5`;
    ratingText.textContent = data.ratingText;
    commentText.textContent = data.comment;

    // Göster
    resultCard.classList.remove('hidden');
    resultCard.classList.add('fade-in');

    // Scroll
    setTimeout(() => {
        resultCard.scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

// YARDIMCI FONKSİYONLAR
function showLoading() {
    loadingScreen.classList.remove('hidden');
}

function hideLoading() {
    loadingScreen.classList.add('hidden');
}

function showError(message) {
    errorCard.classList.remove('hidden');
    document.getElementById('errorText').textContent = message;
}

function hideError() {
    errorCard.classList.add('hidden');
}

function hideResult() {
    resultCard.classList.add('hidden');
    resultCard.classList.remove('fade-in');
}
