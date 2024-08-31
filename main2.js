let element = document.getElementById("text");
let btnStart = document.getElementById("btnStart");
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();

btnStart.onclick = () => {
  recognition.lang = "en-GB";
  recognition.continuous = true;
  recognition.start();
};

recognition.onresult = (e) => {
  for (const result of e.results) {
    const speech = result[0].transcript;

    element.innerText = speech;

    const utterance = new SpeechSynthesisUtterance(speech);
    utterance.lang = recognition.lang;
    window.speechSynthesis.speak(utterance);
  }
};

function setLanguage(lang) {
  recognition.lang = lang;
}

setLanguage("es-ES");
