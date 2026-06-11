// coding functions
const digitalImages = [
    "./digital-version/MS-BME-2-2026-03-ACCS_Page_1.jpg",
    "./digital-version/MS-BME-2-2026-03-ACCS_Page_2.jpg",
    "./digital-version/MS-BME-REHAB ENGR-2026-03-ACCS_Page_1.jpg",
    "./digital-version/MS-BME-REHAB ENGR-2026-03-ACCS_Page_2.jpg",
    "./digital-version/MS-BME-TISSUE-REGEN-2026-03-ACCS_Page_1.jpg",
    "./digital-version/MS-BME-TISSUE-REGEN-2026-03-ACCS_Page_2.jpg",
    "./digital-version/MS-CLSE-2026-03-ACCS_Page_1.jpg",
    "./digital-version/MS-CLSE-2026-03-ACCS_Page_2.jpg",
    "./digital-version/MS-CLSE-ENVIR_SUSTAIN-2026-03-ACCS_Page_1.jpg",
    "./digital-version/MS-CLSE-ENVIR_SUSTAIN-2026-03-ACCS_Page_2.jpg",
]

const printImages = [
    "./print-version/MS-BME-2-2026-03_Page_1.jpg",
    "./print-version/MS-BME-2-2026-03_Page_2.jpg",
    "./print-version/MS-BME-REHAB ENGR-2026-03_Page_1.jpg",
    "./print-version/MS-BME-REHAB ENGR-2026-03_Page_2.jpg",
    "./print-version/MS-BME-TISSUE-REGEN-2026-03_Page_1.jpg",
    "./print-version/MS-BME-TISSUE-REGEN-2026-03_Page_2.jpg",
    "./print-version/MS-CLSE-2026-03_Page_1.jpg",
    "./print-version/MS-CLSE-2026-03_Page_2.jpg",
    "./print-version/MS-CLSE-ENVIR_SUSTAIN-2026-03_Page_1.jpg",
    "./print-version/MS-CLSE-ENVIR_SUSTAIN-2026-03_Page_2.jpg",
]

let currentIndex = 0;

const imageElement = document.getElementById("img-file");
const nextButtonDigital = document.getElementById("nextDigital");
const prevButtonDigital = document.getElementById("prevDigital");
const nextButtonPrint = document.getElementById("nextPrint");
const prevButtonPrint = document.getElementById("prevPrint");


// file-selection buttons
const bme1Button = document.getElementById("cardBME1");

bme1Button.addEventListener("click", () => {
  currentIndex=0
  imageElement.src = digitalImages[currentIndex];
  nextButtonDigital.hidden = false;
  prevButtonDigital.hidden = false;
  nextButtonPrint.hidden = true;
  prevButtonPrint.hidden = true;
    nextButtonDigital.disabled = false;
    prevButtonDigital.disabled = true;
  printVer.disabled = false;
  digitalVer.disabled = true;
});

const bme2Button = document.getElementById("cardBME2");

bme2Button.addEventListener("click", () => {
  currentIndex=2
  imageElement.src = digitalImages[currentIndex];
  nextButtonDigital.hidden = false;
  prevButtonDigital.hidden = false;
  nextButtonPrint.hidden = true;
  prevButtonPrint.hidden = true;
    nextButtonDigital.disabled = false;
    prevButtonDigital.disabled = true;
  printVer.disabled = false;
  digitalVer.disabled = true;
});


// next and previous pages buttons
nextButtonDigital.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % digitalImages.length;
  imageElement.src = digitalImages[currentIndex];
  nextButtonDigital.disabled = true;
  prevButtonDigital.disabled = false;
});

prevButtonDigital.addEventListener("click", () => {
  currentIndex = (currentIndex - 1) % digitalImages.length;
  imageElement.src = digitalImages[currentIndex];
  nextButtonDigital.disabled = false;
  prevButtonDigital.disabled = true;
});

nextButtonPrint.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % printImages.length;
  imageElement.src = printImages[currentIndex];
  nextButtonPrint.disabled = true;
  prevButtonPrint.disabled = false;
});

prevButtonPrint.addEventListener("click", () => {
  currentIndex = (currentIndex - 1) % printImages.length;
  imageElement.src = printImages[currentIndex];
  nextButtonPrint.disabled = false;
  prevButtonPrint.disabled = true;
});


// digital and print version buttons
const printVer = document.getElementById("print-version");
const digitalVer = document.getElementById("digital-version");
const digitalBtn = document.getElementsByClassName("Digital-Btn")
const printBtn = document.getElementsByClassName("Print-Btn")

printVer.addEventListener("click", () => {
  imageElement.src = printImages[currentIndex];
  digitalVer.disabled = false;
  printVer.disabled = true;
  nextButtonDigital.hidden = true;
  prevButtonDigital.hidden = true;
    nextButtonPrint.hidden = false;
    prevButtonPrint.hidden = false;
  if (currentIndex = 0,2,4,6,8) {
    nextButtonPrint.disabled = false;
    prevButtonPrint.disabled = true;
  } else {
    nextButtonPrint.disabled = true;
    prevButtonPrint.disabled = false;
  }
  
});

digitalVer.addEventListener("click", () => {
  imageElement.src = digitalImages[currentIndex];
  digitalVer.disabled = true;
  printVer.disabled = false;
  nextButtonPrint.hidden = true;
  prevButtonPrint.hidden = true;
    nextButtonDigital.hidden = false;
    prevButtonDigital.hidden = false;
  if (currentIndex = 0,2,4,6,8) {
    nextButtonDigital.disabled = false;
    prevButtonDigital.disabled = true;
  } else {
    nextButtonDigital.disabled = true;
    prevButtonDigital.disabled = false;
  }
});
