var phrases = [
    "안녕하세요!",
    "저의",
    "포트폴리오에 오신것을",
    "환영합니다!"
];

var currentIndex = 0;
function changePhrase() {
    var phraseElement = document.getElementById("phrase");
    phraseElement.textContent = phrases[currentIndex];
    currentIndex = (currentIndex + 1) % phrases.length;
}
// 일정 시간마다 문구 변경 함수 호출
setInterval(changePhrase, 1200);
window.onload = changePhrase;