const takimlar = [
    'BEŞİKTAŞ',
    'FENERBAHÇE',
    'GALATASARAY',
    'TRABZONSPOR',
    'BAŞAKŞEHİR',
    'KAYSERİSPOR',
    'ANTALYASPOR',
    'ALTAY'
  ];
  
  const lettersContainer = document.getElementById("letters-container");
  const guessInput = document.getElementById("guessInput");
  const checkButton = document.getElementById("checkButton");
  const resultDisplay = document.getElementById("result");
  let currentIndex = 0;
  
  // Oyunu başlat
  takimOlustur();
  
  function takimOlustur() {
    if (currentIndex >= takimlar.length) {
      currentIndex = 0; // Tüm takımlar gösterildi, sıfırla
    }
    const currentTakim = takimlar[currentIndex];
    const shuffledTakim = shuffleString(currentTakim);
    lettersContainer.innerHTML = ""; // Önceki takımın harflerini temizle
    shuffledTakim.split("").forEach(letter => {
      const letterBox = document.createElement("div");
      letterBox.textContent = letter;
      letterBox.className = "letter-box";
      letterBox.dataset.value = currentTakim;
      lettersContainer.appendChild(letterBox);
    });
    currentIndex++;
  }
  
  function shuffleString(str) {
    const array = str.split("");
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
  }
  
  // Kontrol butonuna tıklama olayı ekle
  checkButton.addEventListener("click", () => {
    const guess = guessInput.value.toUpperCase();
    if (takimlar.includes(guess)) {
      resultDisplay.textContent = "Tebrikler, doğru tahmin!";
    } else {
      resultDisplay.textContent = "Maalesef, yanlış tahmin. Tekrar dene.";
    }
    takimOlustur(); // Bir sonraki takımı göster
  });