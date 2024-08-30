let element = document.getElementById("text");
let btnStart = document.getElementById("btnStart");
const recogaition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
btnStart.onclick = () => {
  recogaition.lang = "en-GB";
  recogaition.continuous = true;
  recogaition.start();
};

recogaition.onresult = (e) => {
  for (const result of e.results) {
    element.innerText = result[0].transcript;
  }
};
