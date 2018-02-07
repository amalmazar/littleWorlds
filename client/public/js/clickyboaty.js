function playSound(sound) {
    var audioElement = document.createElement('audio');
    audioElement.volume = 0.3;
    audioElement.setAttribute('src', sound);
    audioElement.play();
}

function senseEnd(selector, classToRemove) {
    $(selector).one('webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend', function(e) {
        $(selector).removeClass(classToRemove);
    });
}

function moveAndPlaySound(sound, motion, selector) {
    playSound(sound);
    selector.toggleClass(motion);
    senseEnd(selector, motion)
};

