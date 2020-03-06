document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 49: // (key 1)
            const bearvoice = new Audio();
            bearvoice.src = 'wav/grizzlybear.wav';
            bearvoice.autoplay = true;
            break;
        case 50: // (key 2)
            const lionvoice = new Audio();
            lionvoice.src = 'wav/lion.wav';
            lionvoice.autoplay = true;
            break;
        case 51: // (key 3)
            const dogvoice = new Audio();
            dogvoice.src = 'wav/dogwhine.wav';
            dogvoice.autoplay = true;
            break;
        case 52: // (key 4)
            const catvoice = new Audio();
            catvoice.src = 'wav/kittycry.wav';
            catvoice.autoplay = true;
            break;
        case 53: // (key 5)
            const monkeyvoice = new Audio();
            monkeyvoice.src = 'wav/monkey1.wav';
            monkeyvoice.autoplay = true;
            break;
    };
});