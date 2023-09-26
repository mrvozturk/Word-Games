var cümleler = [
    "I am a student.",
    "She likes cats.",
    "He can swim.",
    "They play soccer.",
    "We eat lunch.",
    "She reads books.",
    "I have a dog.",
    "He watches TV.",
    "We go to school.",
    "They drink water.",
    "She sings songs.",
    "He watches action movies on TV.",
    "We go to school together.",
    "They drink cold water in the summer.",
    "She sings beautiful songs in the choir.",
    "I like chocolate ice cream with sprinkles.",
    "He rides his bicycle to work every morning.",
    "They sleep soundly through the night.",
    "We have a blue convertible car for trips.",
    "I run in the neighborhood park every evening.",
    "She draws colorful pictures with crayons.",
    "He dances salsa and tango at the dance studio.",
    "They laugh heartily at funny jokes.",
    "I like ice cream.",
    "He rides a bike.",
    "They sleep at night.",
    "We have a car.",
    "I run in the park.",
    "She draws pictures.",
    "He dances well.",
    "They laugh loudly.",
    "We cook dinner.",
    "I walk to work.",
    "She talks to friends.",
    "He plays guitar.",
    "They watch movies.",
    "I eat breakfast.",
    "We read newspapers.",
    "She writes letters.",
    "He listens to music.",
    "They swim in the pool.",
    "We visit family.",
    "I drink coffee.",
    "She goes to the gym.",
    "He drives a car.",
    "They speak English.",
    "We love pizza.",
    "I have a cat.",
    "She likes to sing.",
    "He plays basketball.",
    "They study math.",
    "We visit the zoo.",
    "I cook dinner.",
    "She dances in the rain.",
    "He runs fast.",
    "They smile often.",
    "We talk on the phone.",
    "I watch TV shows.",
    "She reads a book.",
    "He draws pictures.",
    "The sun is shining today.",
    "I enjoy reading books.",
    "What time is it?",
    "I need a cup of coffee.",
    "She loves to dance.",
    "Do you have any plans for the weekend?",
    "The cat is sleeping.",
    "I want to learn how to play the piano.",
    "He is a talented musician.",
    "Can you help me with my homework?",
    "I like to go for long walks.",
    "It's a beautiful day outside.",
    "We are going on a family vacation.",
    "She's a great cook.",
    "I'm feeling a bit tired.",
    "They live in a big house.",
    "The movie starts at 7 PM.",
    "I need to buy some groceries.",
    "He's always late to meetings.",
    "I enjoy playing video games.",
    "The dog is barking loudly.",
    "She's studying to become a doctor.",
    "We should go out for dinner tonight.",
    "I have a lot of work to do.",
    "The beach is my favorite place to relax.",
    "My parents are coming to visit next week.",
    "He's a good friend of mine.",
    "I can't find my keys anywhere.",
    "Let's go for a bike ride.",
    "The restaurant has delicious food.",
    "I need to make a phone call.",
    "The flowers in the garden are beautiful.",
    "I'm learning to speak Spanish.",
    "She wants to travel the world.",
    "I enjoy listening to music.",
    "We're going to a concert tomorrow.",
    "He's a famous actor.",
    "What's your favorite movie?",
    "I have a busy schedule this week.",
    "The book is on the table.",
    "I like to go for a run in the morning.",
    "She's a talented artist.",
    "I'm going to a party tonight.",
    "They are getting married next month.",
    "I need a new pair of shoes.",
    "The mountains are covered in snow.",
    "I want to visit Paris someday.",
    "He's a great teacher.",
];

function eskioyunadön() {
    var eskioyunURL = "http://127.0.0.1:5500/newgame/wordgame/index.html";
  
    window.location.href = eskioyunURL;
  }
    
var randomIndex = Math.floor(Math.random() * cümleler.length);
var verilenCumle = cümleler[randomIndex];
var karisikCumle = karistirCumle(verilenCumle);
var yanlisCevapSayisi = 0;

function karistirCumle(cumle) {
    var kelimeler = cumle.split(" ");
    var karisikKelimeler = [];

    while (kelimeler.length > 0) {
        var randomIndex = Math.floor(Math.random() * kelimeler.length);
        karisikKelimeler.push(kelimeler[randomIndex]);
        kelimeler.splice(randomIndex, 1);
    }

    return karisikKelimeler.join(" ");
}

function kelimeyeTiklandi(kelime) {
    var cevapInput = document.getElementById("cevapInput");
    cevapInput.value += kelime + " ";
}
function karistir() {
    randomIndex = Math.floor(Math.random() * cümleler.length);
    verilenCumle = cümleler[randomIndex];
    karisikCumle = karistirCumle(verilenCumle);
    yanlisCevapSayisi = 0;

    var verilenCumleElement = document.getElementById("verilenCumle");
    var sonucCumleElement = document.getElementById("sonucCumle");
    var succeedMessage = document.getElementById("succeedMessage");
    succeedMessage.textContent = "";

    verilenCumleElement.textContent = "Hadi bu kelimeleri birleştirelim";

    var sonucElement = document.getElementById("sonuc");
    sonucElement.textContent = "";

    // Kelimeler listesini güncelle
    var kelimelerListesi = document.getElementById("kelimelerListesi");
    kelimelerListesi.innerHTML = "";
    var kelimeler = karisikCumle.split(" ");
    kelimeler.forEach(function (kelime) {
        var li = document.createElement("li");
        li.textContent = kelime;
        li.onclick = function () {
            kelimeyeTiklandi(kelime);
        };
        kelimelerListesi.appendChild(li);
    });

    // Input kısmını temizle
    var cevapInput = document.getElementById("cevapInput");
    cevapInput.value = "";
}


function kontrolEt() {
    var cevapInput = document.getElementById("cevapInput").value.trim().toLowerCase();
    var sonucElement = document.getElementById("sonuc");


    if (cevapInput === verilenCumle.toLowerCase()) {
        sonucElement.textContent = "Tebrikler, doğru cevap!";
        yanlisCevapSayisi = 0;
    } else {
        yanlisCevapSayisi++;
        if (yanlisCevapSayisi === 2) {
            sonucElement.textContent = "Üzgünüm, doğru cevap: " + verilenCumle;
            yanlisCevapSayisi = 0;
        } else {
            sonucElement.textContent = "Üzgünüm, yanlış cevap!";
        }
    }
}