// ===== KİTAP VERİTABANI =====
const bookDatabase = {
    // --- TÜRK EDEBİYATI ---
    "çalıkuşu|reşat nuri güntekin": {
        summary: "Çalıkuşu, İstanbul'da yetişmiş genç ve idealist bir öğretmen olan Feride'nin hikâyesini anlatır. Feride, nişanlısı Kâmran'ın ihaneti üzerine İstanbul'u terk eder ve Anadolu'nun çeşitli köy ve kasabalarında öğretmenlik yapmaya başlar. Roman boyunca Feride'nin Anadolu'daki zorlukları, toplumsal gerçeklerle yüzleşmesi ve kişisel olgunlaşma süreci anlatılır. Aşk, fedakârlık, eğitim ve kadının toplumdaki yeri gibi temaları derinlemesine işleyen eser, Cumhuriyet dönemi Türk edebiyatının en sevilen romanlarından biridir.",
        genres: ["Roman", "Romantik", "Toplumsal Gerçekçilik"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Dili akıcı ve anlaşılırdır ancak toplumsal temaları kavramak için belirli bir olgunluk gerektirir. Ortaokul öğrencileri de rehberlik eşliğinde okuyabilir.",
        rating: 5,
        ratingText: "Türk edebiyatının tartışmasız başyapıtlarından biri. Feride karakteri, Türk okurların kalbinde özel bir yer edinmiş, nesiller boyu sevilen bir eserdir.",
        comment: "Reşat Nuri Güntekin, bu eseriyle Anadolu gerçeklerini bir aşk hikâyesi etrafında ustaca örüyor. Feride'nin güçlü kişiliği, bağımsız ruhu ve idealizmi bugün hâlâ ilham vericidir. Romanın hem duygusal derinliği hem de toplumsal eleştirisi onu zamansız kılmaktadır."
    },

    "ince memed|yaşar kemal": {
        summary: "İnce Memed, Çukurova'nın Değirmenoluk köyünde yaşayan, zalim ağa Abdi'nin zulmü altında ezilen İnce Memed'in eşkıya olma sürecini anlatır. Memed, sevdiği Hatçe ile birlikte olmak ve köyünü ağanın zulmünden kurtarmak için dağlara çıkar. Roman, bir halk kahramanının doğuşunu, adalet arayışını ve köylü halkın umudunu güçlü bir dille aktarır.",
        genres: ["Roman", "Toplumsal Gerçekçilik", "Destansı Anlatı"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Toplumsal yapı, sınıf mücadelesi ve adalet kavramlarını anlamak için olgunluk gerektirir. Üniversite düzeyinde derin analiz yapılabilir.",
        rating: 5,
        ratingText: "Dünya edebiyatında da tanınan, Nobel'e aday gösterilmiş bir yazarın başyapıtı. Evrensel adalet temasını yerel renklerle buluşturan muhteşem bir eser.",
        comment: "Yaşar Kemal'in dili doğanın kendisi gibi güçlü ve canlıdır. Çukurova'nın kokusu, sıcağı ve insanlarının acıları satırlara sinmiştir. İnce Memed sadece bir eşkıya hikâyesi değil, ezilen insanın evrensel direniş destanıdır."
    },

    "kürk mantolu madonna|sabahattin ali": {
        summary: "Ankara'da bir çeviri bürosunda çalışan Raif Efendi'nin, gençlik yıllarında Berlin'de yaşadığı büyük aşkın hikâyesidir. Raif, bir müzede gördüğü 'Kürk Mantolu Madonna' tablosunun modeli olan ressam Maria Puder'e âşık olur. İki farklı kültürden iki insanın aşkı, toplumsal baskılar, yalnızlık, içe kapanıklık ve duygusal derinlik temaları etrafında şekillenir.",
        genres: ["Roman", "Psikolojik Roman", "Romantik"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Psikolojik derinliği ve duygusal karmaşıklığı nedeniyle olgun okurlar tarafından daha iyi anlaşılır.",
        rating: 5,
        ratingText: "Son yıllarda yeniden keşfedilen ve hak ettiği değeri bulan bir başyapıt. Sabahattin Ali'nin en etkileyici ve evrensel romanıdır.",
        comment: "Bu roman, sevmenin ve sevilemememenin acısını derinden hissettirir. Raif Efendi'nin sessiz çaresizliği, okuyucuyu derinden etkiler. Sabahattin Ali, sade ama güçlü diliyle unutulmaz bir aşk anlatısı yaratmıştır."
    },

    "tutunamayanlar|oğuz atay": {
        summary: "Selim Işık'ın intiharının ardından arkadaşı Turgut Özben'in onun hayatını ve ölüm nedenini anlamaya çalışma sürecini anlatan roman, aynı zamanda Türk toplumundaki 'tutunamayan' aydınların trajedisini işler. Bilinç akışı, iç monolog, mektup, günlük gibi farklı anlatım teknikleriyle modern Türk romanının dönüm noktası kabul edilir.",
        genres: ["Roman", "Postmodern", "Psikolojik Roman", "Deneysel"],
        educationLevel: 5,
        educationText: "Üniversite ve üzeri seviyeye uygundur. Postmodern anlatım teknikleri, felsefi derinlik ve karmaşık yapısı nedeniyle edebiyat birikimi gerektirir.",
        rating: 5,
        ratingText: "Türk edebiyatının en önemli ve özgün romanlarından biri. Postmodern Türk romanının başlangıç noktası olarak kabul edilir.",
        comment: "Oğuz Atay, Türk edebiyatını bu eserle bambaşka bir boyuta taşımıştır. Topluma uyum sağlayamayan, var oluşunu sorgulayan bireyin iç dünyasını benzersiz bir dille aktarır. Zorlu ama ödüllendirici bir okuma deneyimidir."
    },

    "sultanın korsanları|emrah safa gürkan": {
        summary: "Osmanlı İmparatorluğu'nun Akdeniz'deki deniz gücünü ve korsanlık faaliyetlerini anlatan tarihsel bir çalışmadır. Barbaros Hayrettin Paşa başta olmak üzere Osmanlı korsanlarının stratejileri, deniz savaşları ve Akdeniz'deki güç dengelerini detaylı biçimde ele alır. Osmanlı'nın denizcilik tarihine farklı bir perspektif sunar.",
        genres: ["Tarih", "Akademik", "Araştırma"],
        educationLevel: 4,
        educationText: "Üniversite seviyesine uygundur. Akademik bir dil kullanılmakla birlikte, tarih meraklıları için erişilebilir bir anlatıma sahiptir.",
        rating: 4,
        ratingText: "Osmanlı denizcilik tarihine kapsamlı ve akademik bir bakış sunan değerli bir eser. Araştırma derinliği ve anlatım kalitesi yüksektir.",
        comment: "Emrah Safa Gürkan, akademik bilgiyi popüler bir dille sunmayı başarıyor. Osmanlı'nın deniz gücünü anlamak isteyenler için vazgeçilmez bir kaynak."
    },

    "aşk|elif şafak": {
        summary: "Roman, iki paralel zaman diliminde ilerler: Günümüzde ABD'de yaşayan Ella Rubinstein'ın hayat hikâyesi ile 13. yüzyılda Mevlana ve Şems-i Tebrizi'nin dostluğu. Ella, bir romanı değerlendirirken kendi hayatını da sorgulamaya başlar. Aşkın kırk kuralı etrafında örülen hikâye, tasavvuf, aşk ve dönüşüm temalarını işler.",
        genres: ["Roman", "Tarihsel Roman", "Tasavvuf", "Romantik"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Tasavvuf kavramlarına giriş niteliğinde olup, geniş bir okuyucu kitlesine hitap eder.",
        rating: 4,
        ratingText: "Dünya çapında popülerlik kazanmış, tasavvufu geniş kitlelere tanıtan başarılı bir roman. Akıcı ve etkileyici.",
        comment: "Elif Şafak, Doğu ile Batı'yı, geçmiş ile bugünü ustaca buluşturuyor. Mevlana ve Şems arasındaki ilişki, modern okurun aşk anlayışını sorgulatan derin bir anlatıyla sunuluyor."
    },

    "beyaz diş|jack london": {
        summary: "Kanada'nın vahşi kuzey topraklarında geçen roman, yarı kurt yarı köpek olan Beyaz Diş'in hikâyesini anlatır. Doğanın acımasız kurallarıyla büyüyen Beyaz Diş, önce Kızılderililer, ardından beyaz insanlar tarafından evcilleştirilir. Roman, hayatta kalma içgüdüsü, doğa ile uygarlık arasındaki çatışma ve sevginin dönüştürücü gücünü işler.",
        genres: ["Roman", "Macera", "Doğa Edebiyatı", "Natüralizm"],
        educationLevel: 2,
        educationText: "Ortaokul ve üzeri seviyeye uygundur. Akıcı dili ve macera dolu anlatımıyla genç okurlar için idealdir.",
        rating: 4,
        ratingText: "Doğa edebiyatının klasiklerinden biri. Jack London'ın en sevilen eserlerinden olup her yaştan okuyucuyu etkiler.",
        comment: "Jack London, doğanın vahşi güzelliğini ve hayvanların iç dünyasını etkileyici bir gerçekçilikle aktarır. Beyaz Diş'in dönüşüm hikâyesi, insanlık üzerine de derin sorular sordurur."
    },

    "suç ve ceza|fyodor dostoyevski": {
        summary: "Petersburg'da yaşayan fakir üniversite öğrencisi Raskolnikov, 'üstün insan' teorisini kanıtlamak için tefeci yaşlı kadını öldürür. Ancak cinayetin ardından derin bir vicdan azabı ve psikolojik çöküş yaşar. Sonya adlı genç kadının sevgisi ve inancıyla yüzleşen Raskolnikov'un iç dünyasını, suç-ceza kavramlarını ve insanın ahlaki sınırlarını sorgulayan derin bir psikolojik roman.",
        genres: ["Roman", "Psikolojik Roman", "Felsefi Roman", "Klasik"],
        educationLevel: 4,
        educationText: "Üniversite seviyesine uygundur. Felsefi ve psikolojik derinliği nedeniyle olgun okurlar tarafından daha iyi kavranır. Lise son sınıf öğrencileri de rehberlik eşliğinde okuyabilir.",
        rating: 5,
        ratingText: "Dünya edebiyatının tartışmasız en büyük romanlarından biri. Dostoyevski'nin insan psikolojisine nüfuz eden dehası bu eserde doruk noktasına ulaşır.",
        comment: "Dostoyevski, insan ruhunun en karanlık köşelerine inen bir ustalıkla, okurun kendi vicdanını da sorgulamasını sağlar. Raskolnikov'un iç çatışması, yüzyıllar sonra bile güncelliğini korumaktadır. Her okurun hayatında en az bir kez okuması gereken bir başyapıt."
    },

    "sefiller|victor hugo": {
        summary: "19. yüzyıl Fransa'sında geçen bu destansı roman, bir somun ekmek çaldığı için 19 yıl kürek cezası çeken Jean Valjean'ın hayat hikâyesini anlatır. Hapisten çıktıktan sonra yeni bir hayat kurmaya çalışan Valjean, dedektif Javert tarafından amansızca takip edilir. Roman; adalet, merhamet, yoksulluk, devrim ve insanlık temaları etrafında Fransız toplumunun panoramik bir tablosunu çizer.",
        genres: ["Roman", "Tarihsel Roman", "Toplumsal Gerçekçilik", "Klasik"],
        educationLevel: 4,
        educationText: "Üniversite seviyesine uygundur. Hacimli yapısı ve derin toplumsal analizleri nedeniyle sabırlı ve birikimli okurlar için idealdir.",
        rating: 5,
        ratingText: "Dünya edebiyatının en büyük başyapıtlarından biri. Victor Hugo'nun insanlığa armağan ettiği evrensel bir şaheser.",
        comment: "Victor Hugo, toplumsal adaletsizliği, insanın iyilik potansiyelini ve merhametin gücünü unutulmaz karakterlerle anlatır. Jean Valjean'ın dönüşüm hikâyesi, her çağda insanlığa umut veren bir şaheserdir."
    },

    "1984|george orwell": {
        summary: "Totaliter bir rejimin hüküm sürdüğü distopik bir gelecekte, Büyük Birader'in her an izlediği Okyanusya devletinde yaşayan Winston Smith'in hikâyesini anlatır. Düşünce polisi, çift düşünce, yenisöylem gibi kavramlarla baskıcı rejimlerin bireyler üzerindeki etkisini ele alır. Winston'ın sisteme karşı başlattığı sessiz isyan ve Julia ile yaşadığı yasak aşk, totalitarizmin karşısında bireyin çaresizliğini gözler önüne serer.",
        genres: ["Roman", "Distopya", "Politik Kurgu", "Bilim Kurgu", "Klasik"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Politik kavramları anlamak için belirli bir bilinç düzeyi gerektirir ancak anlatımı akıcıdır.",
        rating: 5,
        ratingText: "20. yüzyılın en etkili ve öngörücü romanlarından biri. Günümüzde bile tartışılan kavramları yıllar öncesinden ortaya koymuştur.",
        comment: "Orwell, bu romanla totalitarizmin anatomisini çıkarmıştır. 'Büyük Birader seni izliyor' ifadesi günlük dile yerleşmiş, eser bir uyarı niteliği taşımaya devam etmektedir. Özgürlük ve hakikat kavramlarını sorgulatan zamansız bir başyapıt."
    },

    "küçük prens|antoine de saint-exupéry": {
        summary: "Bir pilot, Sahra Çölü'nde küçük bir gezegenin prensiyle karşılaşır. Küçük Prens, gezegenindeki gülünü, yolculuğunda uğradığı farklı gezegenlerdeki garip yetişkinleri ve Dünya'da edindiği deneyimleri anlatır. Tilkinin 'evcilleştirme' felsefesi ve 'önemli olan gözle görülmez' mesajıyla sevgi, dostluk ve hayatın anlamı üzerine derin mesajlar verir.",
        genres: ["Novella", "Felsefe", "Fantastik", "Çocuk Edebiyatı", "Klasik"],
        educationLevel: 1,
        educationText: "Her yaş grubuna uygundur. İlkokul çocukları masalsı yönünü, yetişkinler felsefi derinliğini keşfeder. Gerçek bir 'her yaşa hitap eden' eser.",
        rating: 5,
        ratingText: "Dünya edebiyatının en çok okunan ve sevilen eserlerinden biri. Basitliği içinde derin bilgelik barındıran eşsiz bir başyapıt.",
        comment: "Saint-Exupéry, bir çocuğun gözünden yetişkinlerin dünyasının absürtlüğünü gösterir. Her okuyuşta yeni bir anlam katmanı keşfedilen bu kısa ama sonsuz derinlikteki eser, insanlığın ortak hazinesidir."
    },

    "harry potter ve felsefe taşı|j.k. rowling": {
        summary: "Yetim Harry Potter, 11. doğum gününde bir büyücü olduğunu öğrenir ve Hogwarts Büyücülük Okulu'na kabul edilir. Okulda Ron ve Hermione ile arkadaş olan Harry, ailesi hakkındaki gerçekleri keşfeder ve karanlık büyücü Lord Voldemort'un geri dönüşünü engellemeye çalışır. Dostluk, cesaret ve iyilik ile kötülük arasındaki mücadeleyi fantastik bir dünyada anlatır.",
        genres: ["Roman", "Fantastik", "Macera", "Gençlik Edebiyatı"],
        educationLevel: 2,
        educationText: "İlkokul üst sınıflar ve ortaokul seviyesine uygundur. Akıcı dili ve sürükleyici hikâyesiyle genç okurları kitap okumaya teşvik eden mükemmel bir eser.",
        rating: 5,
        ratingText: "Dünya çapında milyonlarca okuyucuyu büyüleyen, bir neslin edebiyat sevgisini şekillendiren fenomen eser.",
        comment: "J.K. Rowling, hayal gücünün sınırsızlığını kanıtlayan bir dünya yaratmıştır. Harry Potter serisi sadece bir çocuk kitabı değil, her yaştan okurun kendinden bir parça bulabileceği evrensel bir hikâyedir."
    },

    "dönüşüm|franz kafka": {
        summary: "Bir sabah yatağında dev bir böceğe dönüşmüş olarak uyanan seyyar satıcı Gregor Samsa'nın ve ailesinin bu duruma tepkisini anlatan novella. Kafka, Gregor'un fiziksel dönüşümü üzerinden yabancılaşma, ailenin koşullu sevgisi, modern insanın varoluşsal krizi ve toplumsal baskıları metaforik bir dille işler.",
        genres: ["Novella", "Absürt", "Varoluşçu", "Klasik"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Metaforik anlatımı ve felsefi derinliği nedeniyle edebiyat bilgisi faydalı olacaktır.",
        rating: 5,
        ratingText: "Dünya edebiyatının en etkileyici kısa metinlerinden biri. Kafka'nın dehası bu eserde yoğun biçimde hissedilir.",
        comment: "Kafka, kısa bir metinde insanın yalnızlığını, toplumdan dışlanmayı ve varoluşsal bunaltıyı benzersiz bir yoğunlukla aktarır. 'Kafkaesk' kavramını yaratan bu eser, edebiyat tarihinin dönüm noktalarından biridir."
    },

    "simyacı|paulo coelho": {
        summary: "İspanyol çoban Santiago, tekrarlayan bir rüyanın peşinden Mısır piramitlerindeki hazineyi bulmak için yola çıkar. Yolculuğu boyunca farklı insanlarla tanışır, aşkı keşfeder ve 'kişisel efsanesi'ni gerçekleştirmeyi öğrenir. Kâinatın dili, Ruhun Ruhu ve 'bir şeyi gerçekten istediğinde tüm evren sana yardım eder' mesajıyla kişisel gelişim ve ruhani arayış temalarını işler.",
        genres: ["Roman", "Felsefe", "Alegorik", "Kişisel Gelişim"],
        educationLevel: 2,
        educationText: "Ortaokul ve üzeri seviyeye uygundur. Basit ve akıcı diliyle her seviyeden okurun rahatlıkla okuyabileceği bir eserdir.",
        rating: 4,
        ratingText: "Dünya genelinde en çok satan kitaplardan biri. İlham verici mesajlarıyla milyonlarca insanı etkilemiş popüler bir eser.",
        comment: "Paulo Coelho, basit ama etkili bir anlatımla evrensel mesajlar veriyor. Hayallerin peşinden gitme cesaretini aşılayan bu roman, özellikle genç okurlar için motivasyon kaynağıdır."
    },

    "yüzüklerin efendisi|j.r.r. tolkien": {
        summary: "Orta Dünya'da geçen destansı fantastik roman, hobbit Frodo Baggins'in Tek Yüzük'ü yok etmek için çıktığı tehlikeli yolculuğu anlatır. Karanlık Lord Sauron'un gücünü simgeleyen yüzüğü Kıyamet Dağı'na götürmek için kurulan Yüzük Kardeşliği'nin mücadelesi, dostluk, cesaret, fedakârlık ve umut temalarını işler.",
        genres: ["Roman", "Yüksek Fantastik", "Destan", "Macera"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Detaylı dünya inşası ve epik anlatımı nedeniyle sabırlı okurlar için idealdir. Gençler de rahatlıkla okuyabilir.",
        rating: 5,
        ratingText: "Fantastik edebiyatın tartışmasız en büyük başyapıtı. Tolkien, modern fantazi türünün temellerini bu eserle atmıştır.",
        comment: "Tolkien'in yarattığı Orta Dünya, tarih, dil ve mitolojinin iç içe geçtiği benzersiz bir evrendir. Yüzüklerin Efendisi, edebiyatın ve hayal gücünün sınırlarını zorlayan bir şaheserdir."
    },

    "savaş ve barış|lev tolstoy": {
        summary: "Napolyon Savaşları döneminde Rusya'da geçen roman, Bolkonski, Rostov ve Bezuhov ailelerinin hayatları üzerinden savaşın ve barışın insan üzerindeki etkilerini anlatır. Prens Andrey'in idealizmi, Pierre Bezuhov'un anlam arayışı ve Nataşa Rostova'nın gençlik enerjisi etrafında Rus toplumunun kapsamlı bir panoramasını sunar.",
        genres: ["Roman", "Tarihsel Roman", "Epik", "Savaş Edebiyatı", "Klasik"],
        educationLevel: 5,
        educationText: "Üniversite ve üzeri seviyeye uygundur. Hacimli yapısı, çok sayıda karakteri ve tarihsel-felsefi derinliği nedeniyle edebiyat birikimi gerektirir.",
        rating: 5,
        ratingText: "Dünya edebiyatının en büyük romanı olarak kabul edilen eşsiz bir başyapıt. Tolstoy'un dehası her sayfada hissedilir.",
        comment: "Tolstoy, insanlık tarihinin en büyük romanlarından birini yaratmıştır. Savaş ve Barış, sadece bir roman değil, yaşamın kendisidir. Yüzlerce karakter, tarihsel olaylar ve felsefi düşünceler muhteşem bir bütünlük içinde sunulur."
    },

    "yaban|yakup kadri karaosmanoğlu": {
        summary: "Birinci Dünya Savaşı ve Kurtuluş Savaşı döneminde İstanbul aydını Ahmet Celal'in Anadolu'ya sürülmesi ve orada yaşadığı yabancılaşmayı anlatan roman. Ahmet Celal'in köylülerle kuramadığı iletişim, aydın-halk kopukluğu ve Anadolu gerçekleri çarpıcı biçimde ortaya konur.",
        genres: ["Roman", "Toplumsal Gerçekçilik", "Psikolojik Roman"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Cumhuriyet dönemi Türk toplum yapısını anlamak için önemli bir eserdir.",
        rating: 4,
        ratingText: "Türk edebiyatının en önemli toplumsal romanlarından biri. Aydın-halk çatışmasını cesurca ele alan bir eser.",
        comment: "Yakup Kadri, aydının Anadolu karşısındaki çaresizliğini ve yalnızlığını acımasız bir gerçekçilikle anlatır. Yaban, bugün bile güncelliğini koruyan toplumsal bir ayna niteliğindedir."
    },

    "saatleri ayarlama enstitüsü|ahmet hamdi tanpınar": {
        summary: "Hayri İrdal'ın gözünden, Osmanlı'dan Cumhuriyet'e geçiş sürecindeki toplumsal dönüşümü mizahi ve alegorik bir dille anlatan roman. Saatleri Ayarlama Enstitüsü'nün kurulması etrafında modernleşme sancıları, bürokrasi eleştirisi, Doğu-Batı çatışması ve zaman kavramı işlenir.",
        genres: ["Roman", "Satirik", "Alegorik", "Postmodern"],
        educationLevel: 4,
        educationText: "Üniversite seviyesine uygundur. Alegorik yapısı ve çok katmanlı anlatımı nedeniyle edebiyat bilgisi gerektirir.",
        rating: 5,
        ratingText: "Türk edebiyatının en özgün ve çok katmanlı romanlarından biri. Tanpınar'ın entelektüel derinliği her satırda kendini gösterir.",
        comment: "Tanpınar, Türk modernleşmesini absürt bir hikâyeyle anlatarak hem güldürür hem düşündürür. Saatleri Ayarlama Enstitüsü, zaman ve medeniyetin ne olduğunu sorgulatan, her okuyuşta yeni katmanlar keşfedilen bir şaheserdir."
    },

    "hayvan çiftliği|george orwell": {
        summary: "Manor Çiftliği'ndeki hayvanlar, zalim çiftçi Jones'a karşı ayaklanarak kendi yönetimlerini kurar. Ancak domuzların liderliğinde kurulan yeni düzen, zamanla eski tiranlıktan farklı olmayan bir diktatörlüğe dönüşür. 'Bütün hayvanlar eşittir ama bazıları daha eşittir' sloganıyla totalitarizm, propaganda, iktidar yozlaşması ve devrimlerin ihanete uğraması alegorik biçimde anlatılır.",
        genres: ["Novella", "Alegori", "Politik Hiciv", "Distopya"],
        educationLevel: 2,
        educationText: "Ortaokul ve üzeri seviyeye uygundur. Basit anlatımla derin politik mesajlar verir. Genç okurlar için mükemmel bir giriş eseridir.",
        rating: 5,
        ratingText: "20. yüzyılın en etkili politik alegorilerinden biri. Kısa ama son derece güçlü bir başyapıt.",
        comment: "Orwell, bir çocuk masalı formatında totalitarizmin anatomisini çıkarır. Hayvan Çiftliği, iktidarın nasıl yozlaşabildiğini en sade ve etkileyici biçimde gösteren zamansız bir uyarıdır."
    },

    "fareler ve insanlar|john steinbeck": {
        summary: "Büyük Buhran döneminde Kaliforniya'da çiftlik işçisi olarak çalışan George Milton ve zihinsel engelli dev yapılı arkadaşı Lennie Small'un hikâyesi. İkisi de kendi küçük çiftliklerine sahip olma hayali kurar. Dostluk, yalnızlık, Amerikan rüyasının çöküşü ve toplumsal dışlanma temalarını işleyen trajik bir başyapıt.",
        genres: ["Novella", "Toplumsal Gerçekçilik", "Trajedi", "Klasik"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Kısa ve yoğun yapısıyla ergenlik çağı okurları için idealdir.",
        rating: 5,
        ratingText: "Amerikan edebiyatının en dokunaklı ve güçlü eserlerinden biri. Steinbeck'in Nobel Ödülü'ne giden yolda önemli bir adımı.",
        comment: "Steinbeck, çok kısa bir metinde dostluğun, umudun ve kaybın ne demek olduğunu yürek burkan bir sadelikle anlatır. Finalinin yarattığı duygusal etki, okurun hafızasından kolay kolay silinmez."
    },

    "bülbülü öldürmek|harper lee": {
        summary: "1930'ların Alabama'sında, avukat Atticus Finch'in ırk ayrımcılığına karşı savaşını küçük kızı Scout'un gözünden anlatan roman. Atticus, yanlış yere suçlanan siyahi Tom Robinson'u savunur. Irkçılık, adalet, masumiyet, empati ve ahlaki cesaret temaları Amerikan Güney'inin toplumsal yapısı içinde işlenir.",
        genres: ["Roman", "Toplumsal Gerçekçilik", "Bildungsroman", "Klasik"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Toplumsal adalet kavramlarını genç okurlara anlatmak için ideal bir eserdir.",
        rating: 5,
        ratingText: "Amerikan edebiyatının en sevilen ve en etkili romanlarından biri. Pulitzer Ödüllü bu eser, nesiller boyu vicdanları aydınlatmıştır.",
        comment: "Harper Lee, bir çocuğun gözünden ırkçılığın ve adaletsizliğin portresini çizer. Atticus Finch, edebiyat tarihinin en saygın karakterlerinden biri olmuştur. Empatiyi ve ahlaki duruşu öğreten zamansız bir başyapıt."
    },

    "olasılıksız|adam fawer": {
        summary: "Columbia Üniversitesi'nde istatistik doktorası yapan kumar bağımlısı David Caine, bir deney sonucunda geleceği görme yeteneği kazanır. Kuantum fiziği, olasılık teorisi ve nörobilim kavramları etrafında şekillenen aksiyon dolu bir bilim-kurgu gerilim romanı. CIA, gizli deneyler ve bilimsel komplolar hikâyenin gerilimini artırır.",
        genres: ["Roman", "Bilim Kurgu", "Gerilim", "Aksiyon"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Bilimsel kavramlar popüler bir dille açıklandığı için erişilebilirdir.",
        rating: 4,
        ratingText: "Bilim ve gerilimi ustaca birleştiren sürükleyici bir roman. Popüler bilim kurgunun başarılı örneklerinden.",
        comment: "Adam Fawer, karmaşık bilimsel teorileri heyecan verici bir maceraya dönüştürüyor. Sayfa çevirme isteği uyandıran akıcı bir anlatıma sahip, düşündüren bir gerilim."
    },

    "dokuzuncu hariciye koğuşu|peyami safa": {
        summary: "Kemik veremi tedavisi gören genç bir hastanın hastanede yaşadıkları anlatılır. Hasta yatağında geçen günlerde tanıştığı hemşire Nüzhet'e duyduğu aşk ve hastalığın getirdiği varoluşsal sorgulamalar romanın ana eksenini oluşturur. Ruh-beden çatışması, hastalık psikolojisi ve aşk temaları derinlemesine işlenir.",
        genres: ["Roman", "Psikolojik Roman", "Otobiyografik"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Peyami Safa'nın psikolojik anlatım tarzını tanımak için güzel bir giriş eseridir.",
        rating: 4,
        ratingText: "Türk edebiyatının en başarılı psikolojik romanlarından biri. Hastalık ve aşk temasını eşsiz bir duyarlılıkla işler.",
        comment: "Peyami Safa, kendi hastalık deneyiminden beslenen bu romanda, bir hastanın iç dünyasını büyüleyici bir derinlikle aktarır. İnce ve duyarlı anlatımıyla Türk edebiyatında özel bir yere sahiptir."
    },

    "sokağın çocukları|necip mahfuz": {
        summary: "Kahire'nin bir mahallesinde geçen alegorik roman, insanlık tarihini ve dinlerin gelişimini bir aile hikâyesi üzerinden anlatır. Cebelâvi ve soyundan gelenler, Adem'den Hz. Muhammed'e kadar peygamberlerin alegorik karşılıklarıdır. Din, bilim, adalet ve toplumsal düzen temaları mistik bir dille işlenir.",
        genres: ["Roman", "Alegori", "Felsefi Roman", "Toplumsal"],
        educationLevel: 4,
        educationText: "Üniversite seviyesine uygundur. Alegorik yapısı ve dini-felsefi derinliği nedeniyle arka plan bilgisi gerektirir.",
        rating: 5,
        ratingText: "Nobel Ödüllü yazarın en cesur ve tartışmalı eseri. Arap edebiyatının dünya sahnesindeki en önemli romanlarından biri.",
        comment: "Necip Mahfuz, insanlık tarihini bir mahalle hikâyesine sığdırarak edebiyat tarihinde benzersiz bir eser yaratmıştır. Cesaret isteyen bir konu olan din alegorisi, olağanüstü bir ustalıkla işlenmiştir."
    },

    "şeker portakalı|josé mauro de vasconcelos": {
        summary: "Beş yaşındaki Zezé, Brezilya'nın yoksul bir mahallesinde büyüyen, hayal gücü geniş ve zeki bir çocuktur. Ailesi tarafından anlaşılamayan Zezé, portakal ağacı Minguinho ile konuşur ve yaşlı Portuga ile özel bir dostluk kurar. Yoksulluk içinde büyümenin acıları, çocuk masumiyeti, sevgi arayışı ve kaybın acısı dokunaklı bir dille anlatılır.",
        genres: ["Roman", "Otobiyografik", "Çocuk/Gençlik Edebiyatı", "Dramatik"],
        educationLevel: 2,
        educationText: "Ortaokul ve üzeri seviyeye uygundur. Çocuk bakış açısıyla yazılmış olması onu erişilebilir kılar ancak duygusal yoğunluğu yetişkinleri de derinden etkiler.",
        rating: 5,
        ratingText: "Dünya edebiyatının en dokunaklı çocukluk romanlarından biri. Nesiller boyu okurları ağlatan ve düşündüren bir başyapıt.",
        comment: "Vasconcelos, kendi çocukluğundan ilham alarak edebiyatın en dokunaklı çocuk karakterlerinden birini yaratmıştır. Zezé'nin masumiyeti ve acıları okuyucuyu derinden sarsar. Gözyaşı dökmeden bitirmek neredeyse imkânsız bir eser."
    },

    "anna karenina|lev tolstoy": {
        summary: "19. yüzyıl Rusya'sının yüksek sosyetesinde geçen roman, evli Anna Karenina'nın yakışıklı subay Vronski ile yaşadığı yasak aşkı ve bu ilişkinin toplumsal ve kişisel yıkımını anlatır. Paralel olarak Levin'in aşk ve anlam arayışı da işlenir. Aşk, ihanet, toplumsal baskı, aile ve varoluşsal arayış temaları derinlemesine ele alınır.",
        genres: ["Roman", "Toplumsal Roman", "Psikolojik Roman", "Klasik"],
        educationLevel: 4,
        educationText: "Üniversite seviyesine uygundur. Karmaşık karakter psikolojileri ve toplumsal analiz birikimli okurlar için idealdir.",
        rating: 5,
        ratingText: "Dünya edebiyatının en mükemmel romanlarından biri olarak kabul edilir. Tolstoy'un karakter yaratma dehası bu eserde zirvededir.",
        comment: "Tolstoy, 'Mutlu aileler birbirine benzer, mutsuz ailelerin her birinin mutsuzluğu kendine özgüdür' cümlesiyle başlayan bu romanda, insan ilişkilerinin en karmaşık hallerini eşsiz bir ustalıkla yansıtır."
    },

    "yeraltından notlar|fyodor dostoyevski": {
        summary: "Petersburg'da yaşayan isimsiz, emekli bir memurun iç monologlarından oluşan roman, modern insanın yabancılaşması, bilinç sancıları ve toplumdan kopuşu üzerine derin bir psikolojik analiz sunar. Anlatıcı, hem toplumu hem kendini acımasızca eleştirir. Varoluşçuluk akımının öncü metinlerinden kabul edilir.",
        genres: ["Novella", "Psikolojik", "Felsefi", "Varoluşçu", "Klasik"],
        educationLevel: 4,
        educationText: "Üniversite seviyesine uygundur. Felsefi derinliği ve deneysel anlatım yapısı nedeniyle edebiyat ve felsefe bilgisi gerektirir.",
        rating: 5,
        ratingText: "Varoluşçu edebiyatın temel taşlarından biri. Dostoyevski'nin en radikal ve düşündürücü eseri.",
        comment: "Dostoyevski, bu kısa ama yoğun metinde modern insanın ruhsal bunalımını öngörücü bir dehayla ortaya koymuştur. Varoluşçuluktan postmodernizme kadar birçok akımı etkilemiş, 20. yüzyıl edebiyatının öncüsü bir eser."
    },

    "oblomov|ivan gonçarov": {
        summary: "Rus soylularından İlya İlyiç Oblomov'un aşırı tembelliği ve ataleti üzerine kurulmuş roman. Oblomov, günlerini yatağında geçirir, hayal kurar ama hiçbir şeyi eyleme dönüştüremez. Arkadaşı Stolz'un ve sevgilisi Olga'nın onu harekete geçirme çabaları sonuçsuz kalır. 'Oblomovculuk' kavramı edebiyata bu romanla girmiştir.",
        genres: ["Roman", "Toplumsal Gerçekçilik", "Psikolojik Roman", "Klasik"],
        educationLevel: 4,
        educationText: "Üniversite seviyesine uygundur. 19. yüzyıl Rus toplum yapısını anlamak için tarihsel bağlam bilgisi faydalıdır.",
        rating: 4,
        ratingText: "Rus edebiyatının en özgün karakterlerinden birini yaratan önemli bir klasik. 'Oblomovculuk' kavramı dünya edebiyatına mal olmuştur.",
        comment: "Gonçarov, insanın ataleti ve konfor alanından çıkamama halini olağanüstü bir gözlem gücüyle anlatır. Oblomov, çağımızın 'erteleme' kültürünü yüzyıl öncesinden öngörmüş bir karakter."
    },

    "sapiens|yuval noah harari": {
        summary: "İnsanlık tarihini 70.000 yıl öncesinden günümüze kadar izleyen popüler bilim kitabı. Bilişsel Devrim, Tarım Devrimi, insanlığın birleşmesi ve Bilimsel Devrim olmak üzere dört ana bölümde Homo sapiens'in nasıl dünyaya egemen olduğunu anlatır. Dil, din, para, imparatorluklar ve kapitalizm gibi kavramları yeni perspektiflerle ele alır.",
        genres: ["Popüler Bilim", "Tarih", "Antropoloji", "Felsefe"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Popüler bilim diliyle yazıldığı için akademik olmayan okurlar da rahatlıkla okuyabilir.",
        rating: 5,
        ratingText: "21. yüzyılın en çok okunan ve tartışılan kitaplarından biri. İnsanlık tarihine bakışımızı değiştiren çığır açan bir eser.",
        comment: "Harari, devasa bir konuyu akıcı ve sürükleyici bir dille anlatmayı başarıyor. Bildiklerimizi sorgulatıyor ve yeni bakış açıları sunuyor. Her okurun dünya görüşünü genişletecek bir kitap."
    },

    "beyoğlu'nun en güzel abisi|İnan oktay anar": {
        summary: "İstanbul Beyoğlu'nun renkli atmosferinde geçen, fantastik ve mizahi öğelerin iç içe geçtiği postmodern bir roman. Tarihsel gerçeklik ile hayal gücü arasında gidip gelen anlatı, Beyoğlu'nun kayıp karakterlerini ve efsanelerini canlandırır.",
        genres: ["Roman", "Postmodern", "Fantastik", "Mizahi"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Postmodern anlatım tekniklerine aşinalık okuma deneyimini zenginleştirir.",
        rating: 4,
        ratingText: "İhsan Oktay Anar'ın benzersiz anlatım dünyasının başarılı bir örneği.",
        comment: "Anar, tarih ile fantaziyi harmanlayan özgün üslubuyla okurunu büyülüyor. Beyoğlu'nun kayıp ruhunu edebiyata taşıyan keyifli bir eser."
    },

    "benim adım kırmızı|orhan pamuk": {
        summary: "16. yüzyıl Osmanlı İstanbul'unda geçen roman, Sultan'ın gizli bir kitap projesi için görevlendirdiği minyatürcülerin arasında işlenen bir cinayeti anlatır. Doğu ve Batı sanat anlayışları arasındaki çatışma, İslam'da resim yasağı, aşk ve cinayet temaları çoklu bakış açısıyla işlenir. Her bölüm farklı bir karakterin ağzından anlatılır.",
        genres: ["Roman", "Tarihsel Roman", "Postmodern", "Polisiye"],
        educationLevel: 4,
        educationText: "Üniversite seviyesine uygundur. Osmanlı sanat tarihi bilgisi ve postmodern anlatım tekniklerine aşinalık gerektirir.",
        rating: 5,
        ratingText: "Orhan Pamuk'un Nobel Ödülü'ne giden yolda en önemli eseri. Dünya edebiyatında Türk romanının en güçlü temsilcisi.",
        comment: "Pamuk, Osmanlı minyatür sanatını bir cinayet romanıyla buluşturarak eşsiz bir eser yaratmıştır. Doğu-Batı arasındaki sanat ve medeniyet çatışması, bugün hâlâ güncel bir tema olarak eserin değerini artırmaktadır."
    },

    "nutuk|mustafa kemal atatürk": {
        summary: "Mustafa Kemal Atatürk'ün 1919-1927 yılları arasındaki olayları anlattığı tarihi söylev. Kurtuluş Savaşı'nın planlama ve yürütme sürecini, Cumhuriyet'in kuruluşunu ve yapılan devrimleri bizzat yaşayan ve yöneten liderin ağzından aktarır. Türk milletine ve gençliğe hitaben yazılmış tarihi bir belge niteliğindedir.",
        genres: ["Söylev", "Tarih", "Otobiyografi", "Politik"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Türk tarihini birincil kaynaktan öğrenmek isteyenler için vazgeçilmez bir eserdir.",
        rating: 5,
        ratingText: "Türk tarihinin en önemli birincil kaynaklarından biri. Bir ulusun kuruluş hikâyesini kurucusunun ağzından dinlemek paha biçilmezdir.",
        comment: "Atatürk, bu eseriyle sadece tarihi değil, bir milletin kaderini değiştiren kararları ve bunların arkasındaki düşünce sürecini aktarır. Her Türk vatandaşının okuması gereken temel bir eser."
    },

    "monte kristo kontu|alexandre dumas": {
        summary: "Genç denizci Edmond Dantès, kıskançlık ve entrikalar sonucu haksız yere hapsedilir. Yıllar süren hapisten kaçtıktan sonra Monte Kristo Kontu kimliğiyle geri döner ve kendisine ihanet edenlere karşı muhteşem bir intikam planı uygular. İntikam, adalet, af, sabır ve umut temalarını işleyen macera dolu bir klasik.",
        genres: ["Roman", "Macera", "Tarihsel Roman", "Klasik"],
        educationLevel: 2,
        educationText: "Ortaokul ve üzeri seviyeye uygundur. Macera dolu anlatımı her yaştan okuru cezbeder. Hacmi geniş olsa da akıcı dili kolay okuma sağlar.",
        rating: 5,
        ratingText: "Dünya edebiyatının en heyecanlı ve en sevilen macera romanlarından biri. Alexandre Dumas'nın şaheseri.",
        comment: "Dumas, intikam temasını muhteşem bir kurguyla işleyerek edebiyat tarihinin en sürükleyici romanlarından birini yaratmıştır. Monte Kristo Kontu'nun sabırlı ve stratejik intikamı, okuyucuyu nefessiz bırakır."
    },

    "gazap üzümleri|john steinbeck": {
        summary: "1930'ların Büyük Buhran döneminde Oklahoma'dan Kaliforniya'ya göç eden Joad ailesinin hikâyesini anlatan epik roman. Kuraklık ve ekonomik çöküş nedeniyle topraklarını kaybeden binlerce ailenin trajedisini, göçmen işçilerin sömürülmesini ve insanın hayatta kalma mücadelesini anlatır.",
        genres: ["Roman", "Toplumsal Gerçekçilik", "Epik", "Klasik"],
        educationLevel: 4,
        educationText: "Üniversite seviyesine uygundur. Amerikan tarihini ve toplumsal yapıyı anlamak için arka plan bilgisi gerektirir.",
        rating: 5,
        ratingText: "Steinbeck'in Nobel Ödülü gerekçesinde özellikle anılan başyapıtı. Amerikan edebiyatının en güçlü toplumsal romanlarından biri.",
        comment: "Steinbeck, kapitalizmin acımasız yüzünü bir ailenin trajedisi üzerinden anlatarak edebiyat tarihine silinmez bir iz bırakmıştır. İnsanın dayanıklılığı ve dayanışma ruhu, romanın karanlığında bir umut ışığı olarak parlar."
    },

    "İstanbul hatırası|ahmet ümit": {
        summary: "İstanbul'un tarihi semtlerinde işlenen seri cinayetleri araştıran Başkomiser Nevzat'ın hikâyesini anlatan polisiye roman. Cinayetler, İstanbul'un tarihsel katmanlarıyla iç içe geçerken, şehrin kültürel zenginliği ve gizemli atmosferi gerilimi artırır.",
        genres: ["Roman", "Polisiye", "Gerilim", "Tarihsel"],
        educationLevel: 2,
        educationText: "Ortaokul ve üzeri seviyeye uygundur. Akıcı polisiye anlatımı her seviyeden okura hitap eder.",
        rating: 4,
        ratingText: "Türk polisiye edebiyatının en başarılı örneklerinden biri. İstanbul'un tarihini gerilimle harmanlayan keyifli bir okuma.",
        comment: "Ahmet Ümit, İstanbul'u bir polisiye romanın dekoru olarak ustalıkla kullanıyor. Tarih bilgisi ve gerilim unsurları dengeli biçimde sunulmuş, sürükleyici bir eser."
    },

    "yüzyıllık yalnızlık|gabriel garcia marquez": {
        summary: "Kolombiya'nın kurgusal Macondo kasabasında yedi nesil boyunca Buendía ailesinin hikâyesini anlatan büyülü gerçekçilik başyapıtı. Doğum, ölüm, aşk, savaş, yalnızlık ve kader temaları, olağanüstü olaylarla iç içe geçerek Latin Amerika'nın tarihsel ve kültürel panoramasını çizer.",
        genres: ["Roman", "Büyülü Gerçekçilik", "Epik", "Klasik"],
        educationLevel: 4,
        educationText: "Üniversite seviyesine uygundur. Karmaşık aile ağacı ve büyülü gerçekçilik tekniği dikkatli okuma gerektirir.",
        rating: 5,
        ratingText: "20. yüzyıl edebiyatının en büyük başyapıtlarından biri. Nobel Ödüllü eserin her sayfası edebi bir şölen.",
        comment: "Garcia Marquez, gerçek ile fantaziyi birleştirerek edebiyatın sınırlarını genişleten bir anlatım yaratmıştır. Macondo, her okurun hafızasına kazınan büyülü bir yer olarak kalır. Yalnızlığın evrensel hikâyesi."
    },

    "karamazov kardeşler|fyodor dostoyevski": {
        summary: "Karamazov ailesinin üç oğlu — entelektüel Ivan, tutkulu Dmitri ve ruhani Alyoşa — arasındaki çatışmayı ve babalarının gizemli ölümünü anlatan roman. İnanç ve kuşku, özgür irade, ahlak, baba-oğul ilişkisi ve Rusya'nın geleceği gibi derin felsefi temaları işler. 'Büyük Engizisyoncu' bölümü, edebiyat tarihinin en ünlü felsefi tartışmalarından biridir.",
        genres: ["Roman", "Felsefi Roman", "Psikolojik Roman", "Klasik"],
        educationLevel: 5,
        educationText: "Üniversite ve üzeri seviyeye uygundur. Felsefi derinliği, teolojik tartışmaları ve karmaşık karakter psikolojileri ciddi bir entelektüel birikim gerektirir.",
        rating: 5,
        ratingText: "Dostoyevski'nin son ve en büyük romanı. Dünya edebiyatının zirvesindeki eserlerden biri olarak kabul edilir.",
        comment: "Dostoyevski, bu dev eserde insanlığın en temel sorularını — Tanrı var mı, ahlak mümkün mü, özgür irade nedir — unutulmaz karakterler aracılığıyla sorar. Edebiyat tarihinin en derin ve en zengin romanlarından biri."
    },

    "beyaz geceler|fyodor dostoyevski": {
        summary: "Petersburg'un beyaz gecelerinde geçen kısa bir aşk hikâyesi. Yalnız ve hayalperest anlatıcı, bir gece Nastenka adlı genç bir kadınla tanışır. Dört gece boyunca yaşanan bu kısa ama yoğun ilişki, tek taraflı aşk, yalnızlık, hayal ile gerçek arasındaki uçurum temalarını lirik bir dille işler.",
        genres: ["Novella", "Romantik", "Psikolojik", "Klasik"],
        educationLevel: 2,
        educationText: "Ortaokul ve üzeri seviyeye uygundur. Kısa yapısı ve lirik dili genç okurlar için idealdir.",
        rating: 4,
        ratingText: "Dostoyevski'nin en romantik ve en lirik eseri. Kısa ama unutulmaz bir aşk hikâyesi.",
        comment: "Dostoyevski, bu küçük ama mücevher gibi eserde, tek taraflı aşkın acı tatlı duygusunu eşsiz bir duyarlılıkla aktarır. Petersburg'un beyaz geceleri, yalnızlığın şiirsel bir portresi olarak hafızalara kazınır."
    },

    "kumarbaz|fyodor dostoyevski": {
        summary: "Kumar tutkusunun esiri olmuş genç öğretmen Aleksey İvanoviç'in hikâyesini anlatan otobiyografik roman. Rulet masasının büyüsü, Polina'ya duyulan tutkulu aşk ve Rus aristokrasisinin Avrupa'daki yaşamı iç içe geçer. Kumar bağımlılığı, tutku, yıkım ve insan zaafları temaları işlenir.",
        genres: ["Roman", "Psikolojik Roman", "Otobiyografik", "Klasik"],
        educationLevel: 3,
        educationText: "Lise ve üzeri seviyeye uygundur. Bağımlılık psikolojisi ve insan zaafları üzerine düşündürücü bir eserdir.",
        rating: 4,
        ratingText: "Dostoyevski'nin kendi kumar bağımlılığından beslenen yoğun ve etkileyici bir roman.",
        comment: "Dostoyevski, kendi yaşadığı kumar tutkusunu edebiyata dönüştürerek bağımlılığın psikolojik anatomisini çıkarmıştır. Kısa ama yoğun bir okuma deneyimi sunar."
    },

    "vatanım sensin|zuhal olcay": {
        summary: "Bu bilgi veritabanında bulunamadı.",
        genres: ["Bilinmiyor"],
        educationLevel: 0,
        educationText: "",
        rating: 0,
        ratingText: "",
        comment: ""
    }
};

// ===== EK KİTAPLAR İÇİN AKILLI TAHMİN SİSTEMİ =====
const genreKeywords = {
    roman: { keywords: ["roman", "novel"], icon: "📖" },
    hikaye: { keywords: ["hikaye", "öykü", "story", "hikâye"], icon: "📝" },
    siir: { keywords: ["şiir", "poem", "poetry", "divan"], icon: "🎭" },
    deneme: { keywords: ["deneme", "essay"], icon: "✏️" },
    tarih: { keywords: ["tarih", "history", "savaş", "osmanlı", "imparatorluk"], icon: "🏛️" },
    bilim: { keywords: ["bilim", "science", "fizik", "kimya", "matematik", "evrim"], icon: "🔬" },
    felsefe: { keywords: ["felsefe", "philosophy", "düşünce", "mantık"], icon: "🧠" },
    polisiye: { keywords: ["polisiye", "cinayet", "dedektif", "mystery", "suç"], icon: "🔍" },
    fantastik: { keywords: ["fantastik", "fantasy", "büyü", "ejderha", "sihir"], icon: "🐉" },
    bilimkurgu: { keywords: ["bilim kurgu", "sci-fi", "uzay", "gelecek", "robot"], icon: "🚀" },
    korku: { keywords: ["korku", "horror", "hayalet", "lanet", "karanlık"], icon: "👻" },
    romantik: { keywords: ["aşk", "romantik", "romance", "love", "sevda"], icon: "💕" },
    cocuk: { keywords: ["çocuk", "masal", "child", "fairy", "kids"], icon: "🧸" },
    kisiselgelisim: { keywords: ["kişisel gelişim", "motivasyon", "başarı", "self-help"], icon: "🌱" },
};

// ===== YAZAR VERİTABANI =====
const authorDatabase = {
    "fyodor dostoyevski": { era: "19. yüzyıl", nationality: "Rus", style: "Psikolojik gerçekçilik" },
    "lev tolstoy": { era: "19. yüzyıl", nationality: "Rus", style: "Toplumsal gerçekçilik" },
    "victor hugo": { era: "19. yüzyıl", nationality: "Fransız", style: "Romantizm" },
    "george orwell": { era: "20. yüzyıl", nationality: "İngiliz", style: "Distopya, politik hiciv" },
    "yaşar kemal": { era: "20. yüzyıl", nationality: "Türk", style: "Toplumsal gerçekçilik" },
    "orhan pamuk": { era: "20-21. yüzyıl", nationality: "Türk", style: "Postmodern" },
    "sabahattin ali": { era: "20. yüzyıl", nationality: "Türk", style: "Toplumsal gerçekçilik, romantizm" },
    "reşat nuri güntekin": { era: "20. yüzyıl", nationality: "Türk", style: "Romantizm, gerçekçilik" },
    "oğuz atay": { era: "20. yüzyıl", nationality: "Türk", style: "Postmodern" },
    "ahmet hamdi tanpınar": { era: "20. yüzyıl", nationality: "Türk", style: "Modernizm" },
    "franz kafka": { era: "20. yüzyıl", nationality: "Çek (Almanca yazan)", style: "Absürt, varoluşçuluk" },
    "j.k. rowling": { era: "20-21. yüzyıl", nationality: "İngiliz", style: "Fantastik, gençlik edebiyatı" },
    "j.r.r. tolkien": { era: "20. yüzyıl", nationality: "İngiliz", style: "Yüksek fantazi" },
    "gabriel garcia marquez": { era: "20. yüzyıl", nationality: "Kolombiyalı", style: "Büyülü gerçekçilik" },
    "antoine de saint-exupéry": { era: "20. yüzyıl", nationality: "Fransız", style: "Felsefi kurgu" },
    "paulo coelho": { era: "20-21. yüzyıl", nationality: "Brezilyalı", style: "Alegorik, felsefe" },
    "john steinbeck": { era: "20. yüzyıl", nationality: "Amerikan", style: "Toplumsal gerçekçilik" },
    "harper lee": { era: "20. yüzyıl", nationality: "Amerikan", style: "Toplumsal gerçekçilik" },
    "jack london": { era: "19-20. yüzyıl", nationality: "Amerikan", style: "Natüralizm, macera" },
    "elif şafak": { era: "20-21. yüzyıl", nationality: "Türk", style: "Postmodern, tasavvuf" },
    "yuval noah harari": { era: "21. yüzyıl", nationality: "İsrailli", style: "Popüler bilim, tarih" },
    "ahmet ümit": { era: "20-21. yüzyıl", nationality: "Türk", style: "Polisiye" },
    "peyami safa": { era: "20. yüzyıl", nationality: "Türk", style: "Psikolojik roman" },
    "yakup kadri karaosmanoğlu": { era: "20. yüzyıl", nationality: "Türk", style: "Toplumsal gerçekçilik" },
    "necip mahfuz": { era: "20. yüzyıl", nationality: "Mısırlı", style: "Toplumsal gerçekçilik" },
    "alexandre dumas": { era: "19. yüzyıl", nationality: "Fransız", style: "Macera, tarihsel roman" },
    "josé mauro de vasconcelos": { era: "20. yüzyıl", nationality: "Brezilyalı", style: "Otobiyografik, çocuk edebiyatı" },
    "ivan gonçarov": { era: "19. yüzyıl", nationality: "Rus", style: "Toplumsal gerçekçilik" },
    "adam fawer": { era: "21. yüzyıl", nationality: "Amerikan", style: "Bilim kurgu, gerilim" },
    "emrah safa gürkan": { era: "21. yüzyıl", nationality: "Türk", style: "Akademik tarih" },
    "mustafa kemal atatürk": { era: "20. yüzyıl", nationality: "Türk", style: "Söylev, tarih" },
    "ihsan oktay anar": { era: "20-21. yüzyıl", nationality: "Türk", style: "Postmodern, fantastik" },
};


// ===== DOM ELEMENTLERİ =====
const bookTitleInput = document.getElementById('bookTitle');
const bookAuthorInput = document.getElementById('bookAuthor');
const reviewBtn = document.getElementById('reviewBtn');
const resultCard = document.getElementById('resultCard');
const errorCard = document.getElementById('errorCard');

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

    // Validasyon
    if (!title || !author) {
        showError('Lütfen kitap adını ve yazarı girin.');
        return;
    }

    // Loading durumu
    reviewBtn.classList.add('loading');
    hideError();
    hideResult();

    // Yapay gecikme (AI işleme hissi)
    await delay(1500 + Math.random() * 1000);

    // Kitap arama
    const review = findBook(title, author);

    if (review) {
        displayResult(title, author, review);
    } else {
        // Akıllı tahmin sistemi
        const generated = generateSmartReview(title, author);
        displayResult(title, author, generated);
    }

    reviewBtn.classList.remove('loading');
}

// ===== KİTAP ARAMA =====
function findBook(title, author) {
    const searchKey = normalizeText(title) + '|' + normalizeText(author);

    for (const [key, value] of Object.entries(bookDatabase)) {
        const dbKey = normalizeText(key);
        if (dbKey === searchKey) return value;

        // Kısmi eşleşme
        const [dbTitle, dbAuthor] = key.split('|');
        const normTitle = normalizeText(title);
        const normAuthor = normalizeText(author);
        const normDbTitle = normalizeText(dbTitle);
        const normDbAuthor = normalizeText(dbAuthor);

        if (
            (normDbTitle.includes(normTitle) || normTitle.includes(normDbTitle)) &&
            (normDbAuthor.includes(normAuthor) || normAuthor.includes(normDbAuthor))
        ) {
            return value;
        }
    }

    return null;
}

// ===== AKILLI TAHMİN SİSTEMİ =====
function generateSmartReview(title, author) {
    const normAuthor = normalizeText(author);
    const authorInfo = findAuthor(normAuthor);

    let genres = ["Roman"];
    let educationLevel = 3;
    let rating = 3;

    // Başlığa göre tür tahmini
    const normTitle = normalizeText(title);
    for (const [genre, data] of Object.entries(genreKeywords)) {
        for (const keyword of data.keywords) {
            if (normTitle.includes(keyword)) {
                genres.push(genre.charAt(0).toUpperCase() + genre.slice(1));
            }
        }
    }

    if (genres.length === 1) genres.push("Genel Edebiyat");

    let authorDesc = "";
    if (authorInfo) {
        authorDesc = `${authorInfo.nationality} edebiyatından, ${authorInfo.era} dönemine ait, ${authorInfo.style} tarzında eserler veren ${author}`;
        if (authorInfo.era.includes("19")) educationLevel = 4;
        rating = 4;
    } else {
        authorDesc = `${author} tarafından kaleme alınan "${title}"`;
    }

    return {
        summary: `"${title}", ${authorDesc} adlı yazarın eseridir. Bu kitap hakkında veritabanımızda detaylı bilgi bulunmamakla birlikte, eser edebiyat dünyasında yerini almış önemli bir çalışmadır. Kitabın içeriği, yazarın edebi tarzı ve dönemin sosyo-kültürel yapısı çerçevesinde değerlendirilmelidir. Daha detaylı bilgi için eseri okumanızı öneriyoruz.`,
        genres: genres,
        educationLevel: educationLevel,
        educationText: `Bu eser genel olarak ${getEducationLabel(educationLevel)} seviyesine uygun görünmektedir. Kesin değerlendirme için eserin okunması gerekmektedir.`,
        rating: rating,
        ratingText: `Veritabanımızda detaylı değerlendirme bulunmadığından genel bir puan verilmiştir. Eseri okuduktan sonra kendi değerlendirmenizi yapmanızı öneririz.`,
        comment: `"${title}" hakkında yapay zeka veritabanımızda henüz kapsamlı bir yorum bulunmamaktadır. Ancak ${author} adlı yazarın eseri olarak edebiyat dünyasında keşfedilmeyi bekleyen bir yapıt olabilir. Kitabı okuyarak kendi deneyiminizi oluşturmanızı tavsiye ederiz. Unutmayın, her kitap yeni bir dünya kapısıdır! 📚`
    };
}

function findAuthor(normAuthor) {
    for (const [key, value] of Object.entries(authorDatabase)) {
        if (normalizeText(key).includes(normAuthor) || normAuthor.includes(normalizeText(key))) {
            return value;
        }
    }
    return null;
}

// ===== SONUÇ GÖSTERME =====
function displayResult(title, author, review) {
    resultCard.classList.add('show');

    document.getElementById('resultTitle').textContent = `📖 ${title}`;
    document.getElementById('resultAuthor').textContent = `✍️ ${author}`;

    // İçerik Özeti
    document.getElementById('summaryText').textContent = review.summary;

    // Edebiyat Türü
    const genreTagsContainer = document.getElementById('genreTags');
    genreTagsContainer.innerHTML = '';
    review.genres.forEach(genre => {
        const tag = document.createElement('span');
        tag.className = 'genre-tag';
        tag.textContent = genre;
        genreTagsContainer.appendChild(tag);
    });
    document.getElementById('genreDescription').textContent = `Bu eser ${review.genres.join(', ')} türlerinde değerlendirilmektedir.`;

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
    document.getElementById('ratingText').textContent = review.ratingText;

    // Genel Yorum
    document.getElementById('commentText').textContent = review.comment;

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
function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ç/g, 'c')
        .replace(/ğ/g, 'g')
        .replace(/â/g, 'a')
        .replace(/î/g, 'i')
        .replace(/û/g, 'u')
        .replace(/é/g, 'e')
        .replace(/[^a-z0-9|]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function getEducationLabel(level) {
    const labels = {
        1: 'İlkokul',
        2: 'Ortaokul',
        3: 'Lise',
        4: 'Üniversite',
        5: 'Akademik'
    };
    return labels[level] || 'Genel';
}

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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
