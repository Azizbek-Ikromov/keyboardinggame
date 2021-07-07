window.addEventListener('load', init);

// Globals


// Aviable Lavels
// Mavjud yorliqlar!
const levels = {
    easy: 7,
    medium: 5,
    hard: 3
}

// To change lavel
// Vaqtni o'zgartirish uchun!
var currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
// DOM elementlari!
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];


// Initialize Game
// O'yinni ishga tushirish!
function init() {
    // Show number of seconds
    // Soniyalar sonini ko'rsating!
    seconds.innerHTML = currentLevel;
    // Load word from array
    // Massivdan so'zni yuklang
    showWord(words);
    // Start matching on word input
    // So'z kiritishda tenglashtirishni boshlang!
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    // Har soniyada raqamni qaytarish!
    setInterval(countdown, 1000);
    // Check game status 
    // O'yin holatini tekshiring!
    setInterval(checkStatus, 50);
}

// Start match
// O'yinni boshlang!
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // If score is -1, display 0
    // Agar ball -1 bo'lsa, 0 ni ko'rsating!
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
// Joriy so'zni wordInput bilan moslashtiring!
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!'
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick & Show random word
// Random so'zni tanlang va ko'rsating!
function showWord(words) {
    // Generate random array index
    // Randomni qator indeksini yaratish!
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    // Tasodifiy so'zni chiqaring
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
// Ortga hisoblash taymeri!
function countdown() {
    // Make sure time is not run out
    // Vaqt tugamaganligiga ishonch hosil qiling
    if (time > 0) {
        // Decrement
        // Kamaytirish!
        time--;
    } else if (time === 0) {
        // Game is over
        // O'yin tugadi!
        isPlaying = false;
    }
    // SHow time
    // Vaqtni ko'rsatish!
    timeDisplay.innerHTML = time;
}

// Check game status
// O'yin holatini tekshiring!
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!'
        score = 0;
    }
}

