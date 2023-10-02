var words = [
  { eng: 'Serendipity', tr: 'tesadüfen keşfedilen hoş sürprizler' },
  { eng: 'Ephemeral', tr: 'geçici veya kısa ömürlü' },
  { eng: 'Vicissitude', tr: 'değişkenlik veya dalgalanma' },
  { eng: 'Effervescence', tr: 'köpürme veya coşku' },
  { eng: 'Above', tr: 'Üstünde, Üzerine' },
  { eng: 'Abroad', tr: 'Yurt Dışında, Yurtdışı' },
  { eng: 'Absence', tr: 'Bulunmama, Yokluk' },
  { eng: 'Absolute', tr: 'Mutlak, Salt, Kesin' },
  { eng: 'Absolutely', tr: 'Mutlaka, Kesinlikle' },
  { eng: 'Abuse', tr: 'Suistimal Etmek, Kötüye Kullanmak' },
  { eng: 'Accept', tr: 'Kabul Etmek' },
  { eng: 'Access', tr: 'Giriş, Erişim, Erişmek' },
  { eng: 'Accident', tr: 'Kaza' },
  { eng: 'Accompany', tr: 'Eşlik Etmek' },
  { eng: 'Accomplish', tr: 'Başarıyla Tamamlamak, Sonuçlandırmak' },
  { eng: 'Account', tr: 'Hesap' },
  { eng: 'Penumbra', tr: 'yarıkaranlık veya belirsizlik' },
  { eng: 'Quixotic', tr: 'gerçekleşmesi zor hayalleri olan veya naif' },
  { eng: 'Insouciant', tr: 'umursamaz veya kaygısız' },
  { eng: 'Verisimilitude', tr: 'gerçekçilik veya inandırıcılık' },
  { eng: 'Ebullience', tr: 'coşku, neşe veya enerji' },
  { eng: 'Mellifluous', tr: 'akıcı, hoş sesli veya melodik' },
  { eng: 'Conundrum', tr: 'bilmece veya karmaşık sorun' },
  { eng: 'Esoteric', tr: 'gizli veya anlaşılması zor' },
  { eng: 'Ubiquitous', tr: 'her yerde bulunan veya yaygın' },
  { eng: 'Indolence', tr: 'tembellik veya işgüzarlık' },
  { eng: 'Obfuscate', tr: 'anlaşılmasını güçleştirmek veya karıştırmak' },
  { eng: 'Myriad', tr: 'çok sayıda veya sonsuz' },
  { eng: 'Resilient', tr: 'dayanıklı veya esnek' },
  { eng: 'Egregious', tr: 'aşırı kötü veya büyük çapta hata' },
  { eng: 'Ennui', tr: 'can sıkıntısı veya bıkkınlık' },
  { eng: 'Ambivalent', tr: 'ikiyüzlü veya kararsız' },
  { eng: 'Quandary', tr: 'ikilem veya çıkmaz' },
  { eng: 'Accurate', tr: 'Kesin, Doğru' },
  { eng: 'Accuse', tr: 'Suçlamak, İtham Etmek' },
  { eng: 'Achieve', tr: 'Elde Etmek, Başarmak' },
  { eng: 'Achievement', tr: 'Başarı' },
  { eng: 'Acknowledge', tr: 'Kabul Etmek, Kabullenmek' },
  { eng: 'Assist', tr: 'Yardım Etmek' },
  { eng: 'Flimsy', tr: 'Dayanıksız, Çürük' },
  { eng: 'Flee', tr: 'Kaçmak, Kaçırmak' },
  { eng: 'Ladle', tr: 'Kepçe (Yemek)' },
  { eng: 'Lamppost', tr: 'Sokak Lambası' },
  { eng: 'Lampshade', tr: 'Abajur' },
  { eng: 'Lane', tr: 'Dar Yol, Şerit (Otoyolda vs.)' },
  { eng: 'Lash', tr: 'Kamçı / Birşeyi Ani Ve Hızlı Sallamak' },
  { eng: 'Launch', tr: 'Bir Şeye Başlamak / Roket Fırlatmak' },
  { eng: 'Laundry-basket', tr: 'Çamaşır Sepeti' },
  { eng: 'League', tr: 'Birlik, Lig' },
  { eng: 'Leak', tr: 'Akıntı, Sızmak' },
  { eng: 'Lease', tr: 'Belirli Bir Zaman İçin Kiralama' },
  { eng: 'Lecture', tr: 'Ders, Konferans Vermek' },
  { eng: 'Length', tr: 'Uzunluk' },
  { eng: 'Lettuce', tr: 'Salata, Kıvırcık' },
  { eng: 'Lever', tr: 'Kaldıraç, Manivela' },
  { eng: 'Liar', tr: 'Yalancı' },
  { eng: 'Lick', tr: 'Yalamak' },
  { eng: 'Lid', tr: 'Kapak' },
  { eng: 'Lighter', tr: 'Çakmak' },
  { eng: 'Limit', tr: 'Hat, Sınır, Limit' },
  { eng: 'Poetry', tr: 'Şiirler, Şairlik, Şiirle İlgili' },
  { eng: 'Point', tr: 'Nokta, Uç' },
  { eng: 'Poison', tr: 'Zehir' },
  { eng: 'Policy', tr: 'Poliçe, Yönetim İlkesi, Politika' },
  { eng: 'Polish', tr: 'Parlatmak' },
  { eng: 'Polite', tr: 'Kibar' },
  { eng: 'Political', tr: 'Politik' },
  { eng: 'Politician', tr: 'Politikacı, Politikayla Uğraşan' },
  { eng: 'Politics', tr: 'Politika' },
  { eng: 'Pool', tr: 'Havuz' },
  { eng: 'Poor', tr: 'Fakir, Yoksul, Zavallı' },
  { eng: 'Population', tr: 'Nüfus' },
  { eng: 'Pork', tr: 'Domuz Eti' },
  { eng: 'Port', tr: 'Liman' },
  { eng: 'Portrait', tr: 'Portre' },
  { eng: 'Position', tr: 'Durum, Konum' },
  { eng: 'Positive', tr: 'Emin, Kesin/ Olumlu' },
  { eng: 'Possess', tr: 'Sahip Olmak' },
  { eng: 'Possession', tr: 'Sahiplik' },
  { eng: 'Possibility', tr: 'Olasılık' },
  { eng: 'Possible', tr: 'Olası, Mümkün' },
  { eng: 'Post', tr: 'Posta, İşaret, Devriye Gezmek (Askerde)' },
  { eng: 'Postpone', tr: 'Ertelemek' },
  { eng: 'Pot', tr: 'Tencere' },
  { eng: 'Potato', tr: 'Patates' },
  { eng: 'Pour', tr: 'Dökmek, Akıtmak' },
  { eng: 'Powder', tr: 'Toz, Pudra' },
  { eng: 'Power', tr: 'Güç' },
  { eng: 'Powerful', tr: 'Güçlü' },
  { eng: 'Cost', tr: 'Maliyet' },
  { eng: 'Dark', tr: 'Karanlık' },
  { eng: 'Data', tr: 'Veri' },
  { eng: 'Date', tr: 'Tarih' },
  { eng: 'Dawn', tr: 'Şafak' },
  { eng: 'Dead', tr: 'Ölü' },
  { eng: 'Deal', tr: 'Anlaşma' },
  { eng: 'Dear', tr: 'Sayın' },
  { eng: 'Debt', tr: 'Borç' },
  { eng: 'Deep', tr: 'Derin' },
  { eng: 'Deny', tr: 'İnkar etmek' },
  { eng: 'Dial', tr: 'Çevirmek' },
  { eng: 'Diet', tr: 'Diyet' },
  { eng: 'Disk', tr: 'Disk' },
  { eng: 'Door', tr: 'Kapı' },
  { eng: 'Down', tr: 'Aşağı' },
  { eng: 'Drop', tr: 'Düşürmek' },
  { eng: 'Drug', tr: 'İlaç' },
  { eng: 'Dust', tr: 'Toz' },
  { eng: 'Duty', tr: 'Görev' },
  { eng: 'Each', tr: 'Her biri' },
  { eng: 'Earn', tr: 'Kazanmak' },
  { eng: 'Ease', tr: 'Kolaylaştırmak' },
  { eng: 'East', tr: 'Doğu' },
  { eng: 'Easy', tr: 'Kolay' },
  { eng: 'Else', tr: 'Başka' },
  { eng: 'Even', tr: 'Hatta' },
  { eng: 'Assistance', tr: 'Yardım' },
  { eng: 'Assistant', tr: 'Yardımcı, Asistan' },
  { eng: 'Associate', tr: 'Birleştirmek, İlişkilendirmek' },
  { eng: 'Association', tr: 'Birlik, Dernek' },
  { eng: 'Assume', tr: 'Farzetmek, Varsaymak' },
  { eng: 'Assumption', tr: 'Farzetme, Varsayım' },
  { eng: 'Assure', tr: 'Garanti Etmek' },
  { eng: 'Atmosphere', tr: 'Atmosfer' },
  { eng: 'Attach', tr: 'Eklemek, İliştirmek' },
  { eng: 'Attack', tr: 'Saldırmak, Saldırı' },
  { eng: 'Attempt', tr: 'Girişimde Bulunmak' },
  { eng: 'Attend', tr: 'Katılmak' },
  { eng: 'Attention', tr: 'İlgi, Özen, Dikkat' },
  { eng: 'Attitude', tr: 'Tavır, Tutum' },
  { eng: 'Attorney', tr: 'Avukat' },
  { eng: 'Attract', tr: 'Cezbetmek' },
  { eng: 'Attractive', tr: 'Çekici, Cazibeli' },
  { eng: 'Attribute', tr: 'Bağlamak, Atfetmek, Dayandırmak' },
  { eng: 'Audience', tr: 'Kitle, İzleyici, Seyirci' },
  { eng: 'Author', tr: 'Yazar' },
  { eng: 'Authority', tr: 'Otorite, Yetki' },
  { eng: 'Available', tr: 'Müsait, Mevcut, Uygun' },
  { eng: 'Average', tr: 'Ortalama' },
  { eng: 'Avoid', tr: 'Kaçınmak, Önlemek' },
  { eng: 'Battle', tr: 'Savaş' },
  { eng: 'Beach', tr: 'Plaj, Sahil, Kumsal' },
  { eng: 'Bean', tr: 'Fasulye' },
  { eng: 'Bear', tr: 'Ayı' },
  { eng: 'Beautiful', tr: 'Güzel' },
  { eng: 'Beauty', tr: 'Güzellik' },
  { eng: 'Because', tr: 'Çünkü' },
  { eng: 'Become', tr: 'Olmak, Haline Gelmek' },
  { eng: 'Bed', tr: 'Yatak' },
  { eng: 'Bedroom', tr: 'Yatak Odası' },
  { eng: 'Beer', tr: 'Bira' },
  { eng: 'Before', tr: 'Önce' },
  { eng: 'Begin', tr: 'Başlamak' },
  { eng: 'Beginning', tr: 'Başlangıç' },
  { eng: 'Behavior', tr: 'Davranış, Tavır, Hal' },
  { eng: 'Behind', tr: 'Arkada, Arkasında' },
  { eng: 'Cave', tr: 'Mağara' },
  { eng: 'Census', tr: 'Nüfus Sayımı' },
  { eng: 'Charm', tr: 'Alımlı, Sevimli' },
  { eng: 'Chair', tr: 'Sandalye' },
  { eng: 'Chin', tr: 'Çene' },
  { eng: 'Child', tr: 'Çocuk' },
  { eng: 'Clash', tr: 'Anlaşmazlık' },
  { eng: 'Clay', tr: 'Kil, çamur' },
  { eng: 'Clerk', tr: 'Yazıcı, katip' },
  { eng: 'Cliff', tr: 'Uçurum' },
  { eng: 'Cling', tr: 'Yapışmak, Sarılmak' },
  { eng: 'Cloud', tr: 'Bulut' },
  { eng: 'Cloudy', tr: 'Bulutlu' },
  { eng: 'Clue', tr: 'İpucu' },
  { eng: 'Cold', tr: 'Nezle' },
  { eng: 'Collide', tr: 'Çarpışmak' },
  { eng: 'Combat', tr: 'Dövüş' },
  { eng: 'Comment', tr: 'Yorum' },
  { eng: 'Commitment', tr: 'Vaat, Taahhüt, Bağlılık' },
  { eng: 'Compatible', tr: 'Uyumlu' },
  { eng: 'Fugitive', tr: 'Kaçak' },
  { eng: 'Facilitate', tr: 'Kolaylaştırmak' },
  { eng: 'Fade', tr: 'Rengi Solmak, Silinmek' },
  { eng: 'Fun', tr: 'Eğlence' },
  { eng: 'Fur', tr: 'Kürk' },
  { eng: 'Fulfill', tr: 'Tatmin etmek' },
  { eng: 'Fence', tr: 'Çit, Parmaklık' },
  { eng: 'Fertile', tr: 'Bereketli' },
  { eng: 'Fever', tr: 'Ateş' },
  { eng: 'Faint', tr: 'Bayılmak' },
  { eng: 'Flu', tr: 'Grip' },
  { eng: 'Fierce', tr: 'Şiddetli, Hiddetli' },
  { eng: 'Finger', tr: 'Parmak' },
  { eng: 'Proclivity', tr: 'eğilim veya yatkınlık' },
  { eng: 'Aberration', tr: 'sapma veya anormallik' },
  { eng: 'Cathartic', tr: 'arındırıcı veya rahatlatıcı' },
  { eng: 'Incongruous', tr: 'uyumsuz veya mantıksız' },
  { eng: 'Pernicious', tr: 'zararlı veya ölümcül' },
  { eng: 'Cacophony', tr: 'karışık sesler veya gürültü' },
  { eng: 'Solitude', tr: 'yalnızlık veya kendi başına olma' },
  { eng: 'Intransigent', tr: 'uzlaşmaz veya dirençli' },
  { eng: 'Prosaic', tr: 'sıradan veya sıkıcı' },
  { eng: 'Veracity', tr: 'doğruluk veya gerçeklik' },
  { eng: 'Pervasive', tr: 'her tarafa yayılan veya yaygın olan' },
  { eng: 'Labyrinthine', tr: 'karmaşık veya labirent gibi' },
  { eng: 'Efficacy', tr: 'etkililik veya yararlılık' },
  { eng: 'Platitude', tr: 'basmakalıp söz veya klişe' },
  { eng: 'Diaphanous', tr: 'şeffaf veya ince' },
  { eng: 'Perfidy', tr: 'ihanet veya sadakatsizlik' },
  { eng: 'Ennobling', tr: 'yücelten veya değer katan' },
  { eng: 'Malevolent', tr: 'kötü niyetli veya düşmanca' },
  { eng: 'Convoluted', tr: 'karmaşık veya dolambaçlı' },
  { eng: 'Temerity', tr: 'küstahlık veya cüret' },
  { eng: 'Profound', tr: 'derin veya anlamlı' },
  { eng: 'Deleterious', tr: 'zararlı veya tehlikeli' },
  { eng: 'Exorbitant', tr: 'aşırı veya fahiş' },
  { eng: 'August', tr: 'yüce veya görkemli' },
  { eng: 'Bombastic', tr: 'şişirilmiş veya abartılı' },
  { eng: 'Exquisite', tr: 'zarif veya enfes' },
  { eng: 'Immutable', tr: 'değişmez veya sabit' },
  { eng: 'Equivocal', tr: 'iki anlamlı veya şüpheli' },
  { eng: 'Furtive', tr: 'gizli veya kaçamaklı' },
  { eng: 'Impervious', tr: 'geçirmez veya etkilenmez' },
  { eng: 'Opulent', tr: 'zengin veya gösterişli' },
  { eng: 'Resplendent', tr: 'ışıltılı veya göz kamaştırıcı' },
  { eng: 'Serene', tr: 'sakin veya huzurlu' },
  { eng: 'Taciturn', tr: 'suskun veya sessiz' },
  { eng: 'Voracious', tr: 'aşırı aç veya açgözlü' },
  { eng: 'Wistful', tr: 'özlem dolu veya melankolik' },
  { eng: 'Zeitgeist', tr: 'ruh veya zamanın ruhu' },
  { eng: 'Ambiguity', tr: 'belirsizlik veya iki anlamlılık' },
  { eng: 'Ameliorate', tr: 'iyileştirmek veya düzeltmek' },
  { eng: 'Arduous', tr: 'zorlu veya yorucu' },
  { eng: 'Cognizant', tr: 'farkında veya bilinçli' },
  { eng: 'Discerning', tr: 'seçici veya anlayışlı' },
  { eng: 'Efficacious', tr: 'etkili veya başarılı' },
  { eng: 'Gregarious', tr: 'sosyal veya arkadaş canlısı' },
  { eng: 'Indomitable', tr: 'boyunduruk olmaz veya yenilmez' },
  { eng: 'Juxtaposition', tr: 'yan yana koyma veya kontrast' },
  { eng: 'Laconic', tr: 'sözü az veya öz' },
  { eng: 'Magnanimous', tr: 'cömert veya yüce gönüllü' },
  { eng: 'Nefarious', tr: 'aşağılık veya kötücül' },
  { eng: 'Oblivion', tr: 'unutkanlık veya yok oluş' },
  { eng: 'Paradoxical', tr: 'paradoksal veya çelişkili' },
  { eng: 'Recalcitrant', tr: 'inatçı veya dirençli' },
  { eng: 'Stalwart', tr: 'güçlü veya sağlam' },
  { eng: 'Ubiquity', tr: 'her yerde bulunma veya yaygınlık' },
  { eng: 'Vexing', tr: 'sıkıntı verici veya sinir bozucu' },
  { eng: 'Whimsical', tr: 'kaprisli veya tuhaf' },
  { eng: 'Xenophobia', tr: 'yabancı düşmanlığı veya önyargı' },
  { eng: 'Yearning', tr: 'özlem veya hasret' },
  { eng: 'Zealous', tr: 'ateşli veya coşkulu' }
];


var currentQuestion = 0;
var score = 0;

// Soruyu ve seçenekleri göster
function showQuestion() {
  var questionElement = document.getElementById('question');
  questionElement.textContent = words[currentQuestion].eng;

  var optionsElement = document.getElementById('options');
  optionsElement.innerHTML = '';

  // Seçenekleri oluştur
  var options = createRandomOptions();
  options.forEach(function (option) {
    var optionElement = document.createElement('div');
    optionElement.textContent = option;
    optionElement.classList.add('option');
    optionElement.addEventListener('click', function () {
      selectOption(this);
    });
    optionsElement.appendChild(optionElement);
  });
}

// Rastgele seçenekleri oluştur
function createRandomOptions() {
  var options = [];
  var indexes = [];

  // Doğru seçeneği ekle
  options.push(words[currentQuestion].tr);

  // Rastgele yanlış seçenekleri ekle
  while (indexes.length < 3) {
    var randomIndex = Math.floor(Math.random() * words.length);
    if (randomIndex !== currentQuestion && !indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
      options.push(words[randomIndex].tr);
    }
  }

  // Seçenekleri karıştır
  options = shuffle(options);

  return options;
}

// Seçeneği işaretle
function selectOption(optionElement) {
  var options = document.getElementsByClassName('option');
  for (var i = 0; i < options.length; i++) {
    options[i].classList.remove('selected');
  }
  optionElement.classList.add('selected');
}

// Cevabı kontrol et
function checkAnswer() {
  var options = document.getElementsByClassName('option');
  var selectedOption = null;
  for (var i = 0; i < options.length; i++) {
    if (options[i].classList.contains('selected')) {
      selectedOption = options[i];
      break;
    }
  }

  var resultElement = document.getElementById('result');
  if (selectedOption === null) {
    resultElement.textContent = 'Lütfen bir seçenek seçin.';
    return;
  }

  var selectedAnswer = selectedOption.textContent;
  var correctAnswer = words[currentQuestion].tr;

  if (selectedAnswer === correctAnswer) {
    resultElement.textContent = 'Doğru!';
    score++;
  } else {
    resultElement.textContent = 'Yanlış! Doğru cevap: ' + correctAnswer;
  }

  // Cevapları devre dışı bırak
  for (var j = 0; j < options.length; j++) {
    options[j].removeEventListener('click', selectOption);
  }

  // Sonraki soru düğmesini göster
  var nextButton = document.getElementById('next-button');
  nextButton.style.display = 'inline-block';
}

// Sonraki soruya geç
function nextQuestion() {
  var resultElement = document.getElementById('result');
  resultElement.textContent = '';

  // Bir sonraki soruyu göster veya oyunu bitir
  currentQuestion++;
  if (currentQuestion < words.length) {
    showQuestion();
  } else {
    showFinalScore();
  }

  // Cevapları yeniden etkinleştir
  var options = document.getElementsByClassName('option');
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function () {
      selectOption(this);
    });
  }

  // Sonraki soru düğmesini gizle
  var nextButton = document.getElementById('next-button');
  nextButton.style.display = 'none';
}

// Oyunu bitir ve puanı göster
function showFinalScore() {
  var container = document.getElementsByClassName('container')[0];
  container.innerHTML = '';

  var scoreElement = document.createElement('h2');
  scoreElement.textContent = 'Oyun Bitti! Puanınız: ' + score + '/' + words.length;
  container.appendChild(scoreElement);
}

// Dizi elemanlarını karıştır
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Oyunu başlat
showQuestion();
