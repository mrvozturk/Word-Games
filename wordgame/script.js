var words = [
  { eng: 'Serendipity', tr: 'tesadüfen keşfedilen hoş sürprizler' },
  { eng: 'Ephemeral', tr: 'geçici veya kısa ömürlü' },
  { eng: 'Vicissitude', tr: 'değişkenlik veya dalgalanma' },
  { eng: 'Effervescence', tr: 'köpürme veya coşku' },
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

function yeniOyunaGec() {
  // Yeni oyuna geçmek için bir URL belirtin
  var yeniOyunURL = "http://127.0.0.1:5500/newgame/kelimeleritamamlayal%C4%B1m/index.html";

  // Kullanıcıyı yeni oyunun URL'sine yönlendirin
  window.location.href = yeniOyunURL;
}
  
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
  