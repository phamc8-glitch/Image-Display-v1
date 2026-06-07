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
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");


// file-selection buttons
const bme1Button = document.getElementById("BME1");

bme1Button.addEventListener("click", () => {
  let currentIndex=0
  imageElement.src = digitalImages[currentIndex];
});

const bme2Button = document.getElementById("BME2");

bme2Button.addEventListener("click", () => {
  let currentIndex=2
  imageElement.src = digitalImages[currentIndex];
});


// next and previous pages buttons
nextButton.addEventListener("click", () => {
  if (imageElement.src = printImages) {
    currentIndex = (currentIndex + 1) % printImages.length;
    imageElement.src = printImages[currentIndex];
  } else {
    currentIndex = (currentIndex + 1) % digitalImages.length;
    imageElement.src = digitalImages[currentIndex];
  }
  nextButton.disabled = true;
  prevButton.disabled = false;
});

prevButton.addEventListener("click", () => {
  if (imageElement.src = printImages) {
    currentIndex = (currentIndex - 1) % printImages.length;
    imageElement.src = printImages[currentIndex];
  } else {
    currentIndex = (currentIndex - 1) % digitalImages.length;
    imageElement.src = digitalImages[currentIndex];
  }
  nextButton.disabled = false;
  prevButton.disabled = true;
});


// digital and print version buttons
const printVer = document.getElementById("print-version");
const digitalVer = document.getElementById("digital-version");

printVer.addEventListener("click", () => {
  imageElement.src = printImages[currentIndex];
  digitalVer.disabled = false;
  printVer.disabled = true;
});

digitalVer.addEventListener("click", () => {
  imageElement.src = digitalImages[currentIndex];
  digitalVer.disabled = true;
  printVer.disabled = false;
});
