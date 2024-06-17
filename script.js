//Initializing - Starting at Al-Fatihah
let juzNumber = "1"
let surahNumber = "1"
let verseNumberInSurah = "1"

let quranVerseEl = document.getElementById("quranverse-full")

let juzNumberEl = document.getElementById("quranverse-juzNum")
let surahNumberEl = document.getElementById("quranverse-surahNum")
let verseNumberInSurahEl = document.getElementById("quranverse-verseNum")

let verseArabicEl = document.getElementById("quranverse-arabic")
let verseEnglishEl = document.getElementById("quranverse-english")

function generateNewVerse() {
    //Add status 200 catch-if else thing here


    verseNumber = Math.floor(Math.random() * 6236) //generates random num between 1-6236

    fetch("https://api.alquran.cloud/v1/ayah/" + verseNumber + "/editions/quran-uthmani,en.asad")
    .then(response => response.json())
    .then(jsonData => {
        juzNumber = jsonData.data[0].juz //pulls Juz' number (1-30)
        surahNumber = jsonData.data[0].surah.number //pulls Surah number (1-114)
        verseNumberInSurah = jsonData.data[0].numberInSurah
        verseArabic = jsonData.data[0].text //pulls the Qur'an verse in Arabic
        verseEnglish = jsonData.data[1].text //pulls english translation of verse


        quranVerseEl.innerHTML = "Qur'an " + surahNumber + ":" + verseNumberInSurah
        
        juzNumberEl.innerHTML = "Juz' " + juzNumber
        surahNumberEl.innerHTML = "Surah " + surahNumber
        verseNumberInSurahEl.innerHTML = "Verse " + verseNumberInSurah

        verseArabicEl.innerHTML = verseArabic
        verseEnglishEl.innerHTML = verseEnglish

        // console.log(juzNumber)
        // console.log(surahNumber)
        // console.log(verseNumberInSurah)
    })
    .catch(error => {
      console.error('Error fetching data:', error)
    })
}



function visitQuranComWebsite() {
    window.open("https://quran.com/" + surahNumber + "/" + verseNumberInSurah, "_blank");
}