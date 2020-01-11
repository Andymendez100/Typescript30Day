
interface MusicKeys {
    [key: string]: any;
}

const test: MusicKeys = document.querySelectorAll('.key');

const keybuttons = document.querySelectorAll('div kbd')
console.log(keybuttons);




for (const keypress in keybuttons){
    if (keybuttons.hasOwnProperty(keypress)){
    const keyclicked = keybuttons[keypress]
    console.log(keyclicked);

        const userInput = document.addEventListener('keydown', (event) => {

            console.log(event.key);
        });
    }
}


for (const key in test) {
    if (test.hasOwnProperty(key)) {

        const el = test[key]

        const audioId = el.getAttribute('data-key');

        el.addEventListener('click', function () {

            // function that takes an audio key and do this okay?
            const findAudio = (keyId: string) => {
                const soundbite: HTMLAudioElement | null = document.querySelector(`audio[data-key='${keyId}']`);
                if (soundbite) {
                    soundbite.play()
                }
            }
            findAudio(audioId)
        })
    }
}
