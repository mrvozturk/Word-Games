var words = [
  { eng: 'Serendipity', tr: 'tesadüfen keşfedilen hoş sürprizler' },
  { eng: 'Ephemeral', tr: 'geçici veya kısa ömürlü' },
  { eng: 'Vicissitude', tr: 'değişkenlik veya dalgalanma' },
  { eng: 'Effervescence', tr: 'köpürme veya coşku' },
  { eng: 'Above', tr: 'üstünde, üzerine' },
  { eng: 'Abroad', tr: 'yurt dışında, yurtdışı' },
  { eng: 'Absence', tr: 'bulunmama, yokluk' },
  { eng: 'Absolute', tr: 'mutlak, salt, kesin' },
  { eng: 'Absolutely', tr: 'mutlaka, kesinlikle' },
  { eng: 'Abuse', tr: 'suistimal etmek, kötüye kullanmak' },
  { eng: 'Accept', tr: 'kabul etmek' },
  { eng: 'Chair', tr: 'sandalye' },
  { eng: 'Chin', tr: 'çene' },
  { eng: 'Child', tr: 'çocuk' },
  { eng: 'Clash', tr: 'anlaşmazlık' },
  { eng: 'Clay', tr: 'kil, çamur' },
  { eng: 'Clerk', tr: 'yazıcı, katip' },
  { eng: 'Cliff', tr: 'uçurum' },
  { eng: 'Cling', tr: 'yapışmak, sarılmak' },
  { eng: 'Cloud', tr: 'bulut' },
  { eng: 'Cloudy', tr: 'bulutlu' },
  { eng: 'Clue', tr: 'ipucu' },
  { eng: 'Cold', tr: 'nezle' },
  { eng: 'Collide', tr: 'çarpışmak' },
  { eng: 'Combat', tr: 'dövüş' },
  { eng: 'Comment', tr: 'yorum' },
  { eng: 'Commitment', tr: 'vaat, taahhüt, bağlılık' },
  { eng: 'Compatible', tr: 'uyumlu' },
  { eng: 'Fugitive', tr: 'kaçak' },
  { eng: 'Facilitate', tr: 'kolaylaştırmak' },
  { eng: 'Fade', tr: 'rengi solmak, silinmek' },
  { eng: 'Fun', tr: 'eğlence' },
  { eng: 'Fur', tr: 'kürk' },
  { eng: 'Fulfill', tr: 'tatmin etmek' },
  { eng: 'Fence', tr: 'çit, parmaklık' },
  { eng: 'Fertile', tr: 'bereketli' },
  { eng: 'Fever', tr: 'ateş' },
  { eng: 'Faint', tr: 'bayılmak' },
  { eng: 'Flu', tr: 'grip' },
  { eng: 'Fierce', tr: 'şiddetli, hiddetli' },
  { eng: 'Finger', tr: 'parmak' },
  { eng: 'Access', tr: 'giriş, erişim, erişmek' },
  { eng: 'Accident', tr: 'kaza' },
  { eng: 'Accompany', tr: 'eşlik etmek' },
  { eng: 'Accomplish', tr: 'başarıyla tamamlamak, sonuçlandırmak' },
  { eng: 'Account', tr: 'hesap' },
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
  { eng: 'Accurate', tr: 'kesin, doğru' },
  { eng: 'Accuse', tr: 'suçlamak, itham etmek' },
  { eng: 'Achieve', tr: 'elde etmek, başarmak' },
  { eng: 'Achievement', tr: 'başarı' },
  { eng: 'Acknowledge', tr: 'kabul etmek, kabullenmek' },
  { eng: 'Assist', tr: 'yardım etmek' },
  { eng: 'Flimsy', tr: 'dayanıksız, çürük' },
  { eng: 'Flee', tr: 'kaçmak, kaçırmak' },
  { eng: 'Ladle', tr: 'kepçe (yemek)' },
  { eng: 'Lamppost', tr: 'sokak lambası' },
  { eng: 'Lampshade', tr: 'abajur' },
  { eng: 'Lane', tr: 'dar yol, şerit (otobanda vs.)' },
  { eng: 'Lash', tr: 'kamçı / bir şeyi ani ve hızlı sallamak' },
  { eng: 'Launch', tr: 'bir şeye başlamak / roket fırlatmak' },
  { eng: 'Laundry-basket', tr: 'çamaşır sepeti' },
  { eng: 'League', tr: 'birlik, lig' },
  { eng: 'Leak', tr: 'akıntı, sızmak' },
  { eng: 'Lease', tr: 'belirli bir zaman için kiralama' },
  { eng: 'Lecture', tr: 'ders, konferans vermek' },
  { eng: 'Length', tr: 'uzunluk' },
  { eng: 'Lettuce', tr: 'salata, kıvırcık' },
  { eng: 'Lever', tr: 'kaldıraç, manivela' },
  { eng: 'Liar', tr: 'yalancı' },
  { eng: 'Lick', tr: 'yalamak' },
  { eng: 'Lid', tr: 'kapak' },
  { eng: 'Lighter', tr: 'çakmak' },
  { eng: 'Limit', tr: 'hat, sınır, limit' },
  { eng: 'Poetry', tr: 'şiirler, şairlik, şiirle ilgili' },
  { eng: 'Point', tr: 'nokta, uç' },
  { eng: 'Poison', tr: 'zehir' },
  { eng: 'Policy', tr: 'poliçe, yönetim ilkesi, politika' },
  { eng: 'Polish', tr: 'parlatmak' },
  { eng: 'Polite', tr: 'kibar' },
  { eng: 'Political', tr: 'politik' },
  { eng: 'Politician', tr: 'politikacı, politikayla uğraşan' },
  { eng: 'Politics', tr: 'politika' },
  { eng: 'Pool', tr: 'havuz' },
  { eng: 'Poor', tr: 'fakir, yoksul, zavallı' },
  { eng: 'Population', tr: 'nüfus' },
  { eng: 'Pork', tr: 'domuz eti' },
  { eng: 'Port', tr: 'liman' },
  { eng: 'Portrait', tr: 'portre' },
  { eng: 'Position', tr: 'durum, konum' },
  { eng: 'Positive', tr: 'emin, kesin/ olumlu' },
  { eng: 'Possess', tr: 'sahip olmak' },
  { eng: 'Possession', tr: 'sahiplik' },
  { eng: 'Possibility', tr: 'olasılık' },
  { eng: 'Possible', tr: 'olası, mümkün' },
  { eng: 'Post', tr: 'posta, işaret, devriye gezmek (askerde)' },
  { eng: 'Postpone', tr: 'ertelemek' },
  { eng: 'Pot', tr: 'tencere' },
  { eng: 'Potato', tr: 'patates' },
  { eng: 'Pour', tr: 'dökmek, akıtmak' },
  { eng: 'Powder', tr: 'toz, pudra' },
  { eng: 'Power', tr: 'güç' },
  { eng: 'Powerful', tr: 'güçlü' },
  { eng: 'Cost', tr: 'maliyet' },
  { eng: 'Dark', tr: 'karanlık' },
  { eng: 'Data', tr: 'veri' },
  { eng: 'Date', tr: 'tarih' },
  { eng: 'Dawn', tr: 'şafak' },
  { eng: 'Dead', tr: 'ölü' },
  { eng: 'Deal', tr: 'anlaşma' },
  { eng: 'Dear', tr: 'sayın' },
  { eng: 'Debt', tr: 'borç' },
  { eng: 'Deep', tr: 'derin' },
  { eng: 'Deny', tr: 'inkar etmek' },
  { eng: 'Dial', tr: 'çevirmek' },
  { eng: 'Diet', tr: 'diyet' },
  { eng: 'Disk', tr: 'disk' },
  { eng: 'Door', tr: 'kapı' },
  { eng: 'Down', tr: 'aşağı' },
  { eng: 'Drop', tr: 'düşürmek' },
  { eng: 'Drug', tr: 'ilaç' },
  { eng: 'Dust', tr: 'toz' },
  { eng: 'Duty', tr: 'görev' },
  { eng: 'Each', tr: 'her biri' },
  { eng: 'Earn', tr: 'kazanmak' },
  { eng: 'Ease', tr: 'kolaylaştırmak' },
  { eng: 'East', tr: 'doğu' },
  { eng: 'Easy', tr: 'kolay' },
  { eng: 'Else', tr: 'başka' },
  { eng: 'Even', tr: 'hatta' },
  { eng: 'Assistance', tr: 'yardım' },
  { eng: 'Assistant', tr: 'yardımcı, asistan' },
  { eng: 'Associate', tr: 'birleştirmek, ilişkilendirmek' },
  { eng: 'Association', tr: 'birlik, dernek' },
  { eng: 'Assume', tr: 'farzetmek, varsaymak' },
  { eng: 'Assumption', tr: 'farzetme, varsayım' },
  { eng: 'Assure', tr: 'garanti etmek' },
  { eng: 'Atmosphere', tr: 'atmosfer' },
  { eng: 'Attach', tr: 'eklemek, iliştirmek' },
  { eng: 'Attack', tr: 'saldırmak, saldırı' },
  { eng: 'Attempt', tr: 'girişimde bulunmak' },
  { eng: 'Attend', tr: 'katılmak' },
  { eng: 'Attention', tr: 'ilgi, özen, dikkat' },
  { eng: 'Attitude', tr: 'tavır, tutum' },
  { eng: 'Attorney', tr: 'avukat' },
  { eng: 'Attract', tr: 'cezbetmek' },
  { eng: 'Attractive', tr: 'çekici, cazibeli' },
  { eng: 'Attribute', tr: 'bağlamak, atfetmek, dayandırmak' },
  { eng: 'Audience', tr: 'kitle, izleyici, seyirci' },
  { eng: 'Author', tr: 'yazar' },
  { eng: 'Authority', tr: 'otorite, yetki' },
  { eng: 'Available', tr: 'müsait, mevcut, uygun' },
  { eng: 'Average', tr: 'ortalama' },
  { eng: 'Avoid', tr: 'kaçınmak, önlemek' },
  { eng: 'Battle', tr: 'savaş' },
  { eng: 'Beach', tr: 'plaj, sahil, kumsal' },
  { eng: 'Bean', tr: 'fasulye' },
  { eng: 'Bear', tr: 'ayı' },
  { eng: 'Beautiful', tr: 'güzel' },
  { eng: 'Beauty', tr: 'güzellik' },
  { eng: 'Because', tr: 'çünkü' },
  { eng: 'Become', tr: 'olmak, haline gelmek' },
  { eng: 'Bed', tr: 'yatak' },
  { eng: 'Bedroom', tr: 'yatak odası' },
  { eng: 'Beer', tr: 'bira' },
  { eng: 'Before', tr: 'önce' },
  { eng: 'Begin', tr: 'başlamak' },
  { eng: 'Beginning', tr: 'başlangıç' },
  { eng: 'Behavior', tr: 'davranış, tavır, hal' },
  { eng: 'Behind', tr: 'arkada, arkasında' },
  { eng: 'Cave', tr: 'mağara' },
  { eng: 'Census', tr: 'nüfus sayımı' },
  { eng: 'Charm', tr: 'alımlı, sevimli' },
  { eng: 'Chair', tr: 'sandalye' },
  { eng: 'Chin', tr: 'çene' },
  { eng: 'Child', tr: 'çocuk' },
  { eng: 'Clash', tr: 'anlaşmazlık' },
  { eng: 'Clay', tr: 'kil, çamur' },
  { eng: 'Clerk', tr: 'yazıcı, katip' },
  { eng: 'Cliff', tr: 'uçurum' },
  { eng: 'Cling', tr: 'yapışmak, sarılmak' },
  { eng: 'Cloud', tr: 'bulut' },
  { eng: 'Cloudy', tr: 'bulutlu' },
  { eng: 'Clue', tr: 'ipucu' },
  { eng: 'Cold', tr: 'nezle' },
  { eng: 'Collide', tr: 'çarpışmak' },
  { eng: 'Combat', tr: 'dövüş' },
  { eng: 'Comment', tr: 'yorum' },
  { eng: 'Commitment', tr: 'vaat, taahhüt, bağlılık' },
  { eng: 'Compatible', tr: 'uyumlu' },
  { eng: 'Fugitive', tr: 'kaçak' },
  { eng: 'Facilitate', tr: 'kolaylaştırmak' },
  { eng: 'Fade', tr: 'rengi solmak, silinmek' },
  { eng: 'Fun', tr: 'eğlence' },
  { eng: 'Fur', tr: 'kürk' },
  { eng: 'Fulfill', tr: 'tatmin etmek' },
  { eng: 'Fence', tr: 'çit, parmaklık' },
  { eng: 'Fertile', tr: 'bereketli' },
  { eng: 'Fever', tr: 'ateş' },
  { eng: 'Faint', tr: 'bayılmak' },
  { eng: 'Flu', tr: 'grip' },
  { eng: 'Fierce', tr: 'şiddetli, hiddetli' },
  { eng: 'Finger', tr: 'parmak' },
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
