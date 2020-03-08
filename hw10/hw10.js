const playSound = (soundUrl) => {
    const audio = new Audio();
    audio.src = soundUrl;
    audio.autoplay = true;
}
document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 49: // (key 1)
            return playSound('wav/grizzlybear.wav');
        case 50: // (key 2)
            return playSound('wav/lion.wav');
        case 51: // (key 3)
            return playSound('wav/dogwhine.wav');
        case 52: // (key 4)
            return playSound('wav/kittycry.wav');
        case 53: // (key 5)
            return playSound('wav/monkey1.wav');
    };
});
