// ===== DOM ELEMENTLERİ =====
const bookTitleInput = document.getElementById('bookTitle');
const bookAuthorInput = document.getElementById('bookAuthor');
const apiKeyInput = document.getElementById('apiKey');
const reviewBtn = document.getElementById('reviewBtn');
const resultCard = document.getElementById('resultCard');
const errorCard = document.getElementById('errorCard');
const toggleApiBtn = document.getElementById('toggleApiBtn');
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');

// ===== API KEY YÖNETİMİ =====
// Sayfa yüklendiğinde localStorage'dan API key'i çek
const savedApiKey = localStorage.getItem('gemini_api_key');
if (savedApiKey) {
    apiKeyInput.value = savedApiKey;
    updateApiStatus(true);
}

apiKeyInput.addEventListener('input', () => {
    const key = apiKeyInput.value.trim();
    if (key.length > 10) {
        localStorage.setItem('gemini_api_key', key);
        updateApiStatus(true);
    } else {
        updateApiStatus(false);
    }
});

toggleApiBtn.addEventListener('click', () => {
    const isPassword = apiKeyInput.type === 'password';
    apiKeyInput.type = isPassword ? 'text' : 'password';
    toggleApiBtn.textContent = isPassword ? '🙈' : '👁️';
});

function updateApiStatus(active) {
    if (active) {
        statusDot.classList.add('active');
        statusText.textContent = 'API anahtarı kaydedildi ✓';
        statusText.style.color = 'var(--success)';
    } else {
        statusDot.classList.remove('active');
        statusText.textContent = 'API anahtarı bekleniyor';
        statusText.style.color = 'var(--text-muted)';
    }
}

// ===== EVENT LISTENERS =====
reviewBtn.addEventListener('click', handleReview);

bookTitleInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') bookAuthorInput.focus();
});

bookAuthorInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleReview();
});

// ===== ANA FONKSİYON =====
async function handleReview() {
    const title = bookTitleInput.value.trim();
    const author = bookAuthorInput.value.trim();
    const apiKey = apiKeyInput.value.trim();

    // Validasyon
    if (!apiKey || apiKey.length < 10) {
        showError('Lütfen geçerli bir Gemini API anahtarı girin.');
        return;
    }

    if (!title || !author) {
        showError('Lütfen kitap adını ve yazarı girin.');
        return;
    }

    // Loading durumu
    reviewBtn.classList.add('loading');
    reviewBtn.querySelector('.btn-text').textContent = 'Yapay zeka düşünüyor...';
    hideError();
    hideResult();

    try {
        // Gemini API'ye istek gönder
        const response = await fetchGeminiResponse(apiKey, title, author);
        
        // Yanıtı parse et
        const parsed = parseAIResponse(response);
        
        if (parsed) {
            displayResult(title, author, parsed);
        } else {
            showError('Yapay zekadan gelen yanıt işlenemedi. Lütfen tekrar deneyin.');
        }

    } catch (error) {
        console.error('API Hatası:', error);
        if (error.message.includes('400') || error.message.includes('API_KEY')) {
            showError('API anahtarı geçersiz. Lütfen doğru bir Gemini API key girin.');
        } else if (error.message.includes('429')) {
            showError('Çok fazla istek gönderildi. Birkaç dakika bekleyip tekrar deneyin.');
        } else if (error.message.includes('fetch')) {
            showError('İnternet bağlantınızı kontrol edin.');
        } else {
            showError('Bir hata oluştu: ' + error.message);
        }
    }

    reviewBtn.classList.remove('loading');
    reviewBtn.querySelector('.btn-text').textContent = 'Yapay Zekaya Sor';
}

// ===== GEMINI API ÇAĞRISI =====
async function fetchGeminiResponse(apiKey, title, author) {
    const prompt = buildPrompt(title, author);

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: prompt }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 2048,
                }
            })
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
    }

    throw new Error('Gemini\'den geçerli yanıt alınamadı.');
}

// ===== PROMPT OLUŞTURUCU =====
function buildPrompt(title, author) {
    return `Sen uzman bir edebiyat eleştirmeni ve kitap yorumcususun. "${title}" adlı kitap hakkında detaylı bir yorum yap. Yazar: ${author}.

Lütfen cevabını SADECE aşağıdaki formatta ver. Başka hiçbir açıklama, giriş veya kapanış cümlesi yazma. Sadece bu bloğu doldur:

İÇERİK: [Kitap ne anlatıyor? Konusu nedir? Ana karakterler kimler? Ana temalar nelerdir? Spoiler vermeden detaylı özet.]

TÜR: [Edebiyat türleri - virgülle ayırarak yaz. Örn: Roman, Psikolojik Roman, Klasik]

EĞİTİM_SEVİYESİ: [Sadece 1-5 arası bir rakam yaz. 1=İlkokul, 2=Ortaokul, 3=Lise, 4=Üniversite, 5=Akademik/İhtisas]

PUAN: [Sadece 1-5 arası bir rakam yaz]

DEĞERLENDİRME: [Puanın kısa açıklaması - 1-2 cümle]

YORUM: [Genel edebi yorum. Eserin edebiyat tarihindeki yeri, güçlü yönleri, neden okunmalı, kime hitap eder? 3-5 cümle.]`;
}

// ===== YANIT PARSE EDİCİ =====
function parseAIResponse(text) {
    if (!text) return null;

    const result = {
        summary: '',
        genres: [],
        educationLevel: 3,
        educationText: '',
        rating: 3,
        ratingText: '',
        comment: ''
    };

    // İÇERİK
    const icerikMatch = text.match(/İÇERİK:\s*([\s\S]*?)(?=TÜR:|$)/i);
    if (icerikMatch) {
        result.summary = icerikMatch[1].trim();
    }

    // TÜR
    const turMatch = text.match(/TÜR:\s*(.*?)(?=\n|$)/i);
    if (turMatch) {
        const genresRaw = turMatch[1].trim();
        result.genres = genresRaw
            .split(/[,،،]/)
            .map(g => g.trim())
            .filter(g => g.length > 0);
    }

    // EĞİTİM_SEVİYESİ
    const egitimMatch = text.match(/EĞİTİM_SEVİYESİ:\s*(\d)/i);
    if (egitimMatch) {
        result.educationLevel = parseInt(egitimMatch[1]);
        result.educationLevel = Math.max(1, Math.min(5, result.educationLevel));
    }

    // Puan
    const puanMatch = text.match(/PUAN:\s*(\d)/i);
    if (puanMatch) {
        result.rating = parseInt(puanMatch[1]);
        result.rating = Math.max(1, Math.min(5, result.rating));
    }

    // DEĞERLENDİRME
    const degerMatch = text.match(/DEĞERLENDİRME:\s*([\s\S]*?)(?=YORUM:|$)/i);
    if (degerMatch) {
        result.ratingText = degerMatch[1].trim();
    }

    // YORUM
    const yorumMatch = text.match(/YORUM:\s*([\s\S]*?)$/i);
    if (yorumMatch) {
        result.comment = yorumMatch[1].trim();
    }

    // Eğitim seviyesi metni
    const levelLabels = {
        1: 'İlkokul',
        2: 'Ortaokul',
        3: 'Lise',
        4: 'Üniversite',
        5: 'Akademik/İhtisas'
    };
    result.educationText = `Bu eser genel olarak ${levelLabels[result.educationLevel] || 'Lise'} seviyesine uygun görülmektedir. İçerik, dil ve tematik derinlik bu seviyeye göre değerlendirilmiştir.`;

    // Eğer parse edilemediyse, tüm metni yorum olarak kullan
    if (!result.summary && !result.comment) {
        result.summary = text;
        result.comment = text;
    }

    return result;
}

// ===== SONUÇ GÖSTERME =====
function displayResult(title, author, review) {
    resultCard.classList.add('show');

    document.getElementById('resultTitle').textContent = `📖 ${title}`;
    document.getElementById('resultAuthor').textContent = `✍️ ${author}`;

    // İçerik Özeti
    document.getElementById('summaryText').textContent = review.summary || 'Bilgi alınamadı.';

    // Edebiyat Türü
    const genreTagsContainer = document.getElementById('genreTags');
    genreTagsContainer.innerHTML = '';
    if (review.genres.length > 0) {
        review.genres.forEach(genre => {
            const tag = document.createElement('span');
            tag.className = 'genre-tag';
            tag.textContent = genre;
            genreTagsContainer.appendChild(tag);
        });
        document.getElementById('genreDescription').textContent = 
            `Bu eser ${review.genres.join(', ')} türlerinde değerlendirilmektedir.`;
    } else {
        genreTagsContainer.innerHTML = '<span class="genre-tag">Genel Edebiyat</span>';
        document.getElementById('genreDescription').textContent = '';
    }

    // Eğitim Seviyesi
    const levelIndicator = document.getElementById('levelIndicator');
    levelIndicator.innerHTML = '';
    const levels = ['İlkokul', 'Ortaokul', 'Lise', 'Üniversite', 'Akademik'];
    levels.forEach((level, index) => {
        const bar = document.createElement('div');
        bar.className = `level-bar ${index + 1 <= review.educationLevel ? 'active' : ''}`;
        bar.textContent = level;
        levelIndicator.appendChild(bar);
    });
    document.getElementById('levelText').textContent = review.educationText;

    // Değerlendirme
    const starsDisplay = document.getElementById('starsDisplay');
    starsDisplay.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = `star ${i <= review.rating ? 'filled' : ''}`;
        star.textContent = i <= review.rating ? '⭐' : '☆';
        star.style.animationDelay = `${i * 0.1}s`;
        starsDisplay.appendChild(star);
    }
    document.getElementById('ratingNumber').textContent = `${review.rating}/5`;
    document.getElementById('ratingText').textContent = review.ratingText || 'Yapay zeka tarafından değerlendirildi.';

    // Genel Yorum
    document.getElementById('commentText').textContent = review.comment || 'Yorum alınamadı.';

    // Animasyonlu gösterim
    const sections = document.querySelectorAll('.result-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('show');
        }, 200 * (index + 1));
    });

    // Sonuca scroll
    setTimeout(() => {
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

// ===== YARDIMCI FONKSİYONLAR =====
function showError(message) {
    errorCard.classList.add('show');
    document.getElementById('errorText').textContent = message;
}

function hideError() {
    errorCard.classList.remove('show');
}

function hideResult() {
    resultCard.classList.remove('show');
    document.querySelectorAll('.result-section').forEach(s => s.classList.remove('show'));
}
