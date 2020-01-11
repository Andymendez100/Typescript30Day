var test = document.querySelectorAll('.key');
var keybuttons = document.querySelectorAll('div  kbd');
console.log(keybuttons);
for (var keypress in keybuttons) {
    if (keybuttons.hasOwnProperty(keypress)) {
        var keyclicked = keybuttons[keypress];
        console.log(keyclicked.keyCode);
        var userInput = document.addEventListener('keydown', function (event) {
            console.log(event.key);
        });
    }
}
for (var key in test) {
    if (test.hasOwnProperty(key)) {
        var el = test[key];
        var audioId = el.getAttribute('data-key');
        el.addEventListener('click', function () {
            // function that takes an audio key and do this okay?
            var findAudio = function (keyId) {
                var soundbite = document.querySelector("audio[data-key='" + keyId + "']");
                if (soundbite) {
                    soundbite.play();
                }
            };
        });
    }
}
