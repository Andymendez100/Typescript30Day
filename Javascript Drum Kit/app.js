var test = document.querySelectorAll('.key');
var keybuttons = document.querySelectorAll('div kbd');
console.log(keybuttons);
// function that takes an audio key and do this okay?
var findAudio = function (keyId) {
    var soundbite = document.querySelector("audio[data-key='" + keyId + "']");
    if (soundbite) {
        soundbite.play();
    }
};
for (var keypress in keybuttons) {
    console.log(keypress);
    if (keybuttons.hasOwnProperty(keypress)) {
        var keyclicked = keybuttons[keypress];
        console.log(keyclicked);
        var userInput = document.addEventListener('keydown', function (event) {
            findAudio(event.keyCode);
            console.log(event.keyCode);
        });
    }
}
var _loop_1 = function (key) {
    if (test.hasOwnProperty(key)) {
        var el = test[key];
        var audioId_1 = el.getAttribute('data-key');
        el.addEventListener('click', function () {
            findAudio(audioId_1);
        });
    }
};
for (var key in test) {
    _loop_1(key);
}
