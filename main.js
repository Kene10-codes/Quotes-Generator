const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const author = document.querySelector(".author .name");

const soundIcon = document.querySelector(".sound");

// Quotes function
function GenerateQuotes() {
  // Quotable API
  let quoteURL = "https://api.quotable.io/random";
  quoteBtn.textContent = "Loading Quote...";
  quoteBtn.classList.add("loading");

  // Fetch request on the API
  fetch(quoteURL)
    .then((res) => res.json())
    .then((data) => {
      quoteText.innerHTML = data.content;
      author.innerHTML = data.author;
      quoteBtn.textContent = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

// Speak text func
function SpeakText() {
  // Web based apeech API that converts text to sound
  const utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerHTML} by ${author.innerHTML}`
  );
  speechSynthesis.speak(utterance);
}

// Listen for event on the Quote Button
quoteBtn.addEventListener("click", GenerateQuotes);

// Listen for even on the Sound Icon
soundIcon.addEventListener("click", SpeakText);
