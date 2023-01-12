const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const author = document.querySelector(".author .name");

const soundIcon = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

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

// Copy text function
function CopyText() {
  navigator.clipboard.writeText(quoteText.innerHTML);
}

// Twitter Redirect func
function TwitterRedirect() {
  const twitterURL = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
  // opens URL in a new windo
  window.open(twitterURL, "_blank");
}

// Listen for event on the Quote Button
quoteBtn.addEventListener("click", GenerateQuotes);

// Listen for event on the Sound Icon
soundIcon.addEventListener("click", SpeakText);

// listen for event on the Copy Button
copyBtn.addEventListener("click", CopyText);

// listen for a tweet redirect
twitterBtn.addEventListener("click", TwitterRedirect);
