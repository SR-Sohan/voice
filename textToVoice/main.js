let speech = new SpeechSynthesisUtterance();

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let textElement = document.getElementById("text").value;

  speech.text = textElement;
  window.speechSynthesis.speak(speech);
});
