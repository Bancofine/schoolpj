//글자 타이핑 효과
//글자 순서대로 출력
var phrases = [
    "안녕하세요!",
    "저의",
    "포트폴리오에 오신것을",
    "환영합니다!"
];

var currentIndex = 0;
function changePhrase() {
    var phraseElement = document.getElementById("phrase");
    var phrase = phrases[currentIndex];
    var typedPhrase = "";
    var i = 0;
    var typingInterval = setInterval(function () {
        typedPhrase += phrase.charAt(i);
        phraseElement.textContent = typedPhrase;
        i++;
        if (i > phrase.length) {
            clearInterval(typingInterval);
        }
    }, 80);
    currentIndex = (currentIndex + 1) % phrases.length;
}
setInterval(changePhrase, 1500);
window.onload = changePhrase;
