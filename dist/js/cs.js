(function () {
    var prompt = document.getElementsByClassName("cs-prompt");
    var interval = 500;
    var p;
    for (var i = 0; i < prompt.length; i++) {
        p = prompt[i];
        (function (p) {
            setTimeout(function () {
                activatePrompt(p);
            }, interval);
        })(p);
        interval += 1500;
    }
    function activatePrompt(el) {
        el.classList.add("curtain-down-active");
    }
})();
