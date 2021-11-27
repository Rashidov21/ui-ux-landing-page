new fullpage('#fullpage', {
    //options here
    css3: true,
    autoScrolling: true,
    scrollHorizontally: true,
    sectionsColor: ['#160661', '#4A1569', "#562FB9", "#020041"],

});
// fullpage_api.setAllowScrolling(true);

function toRight() {
    anime({
        targets: '.toRight',
        keyframes: [
            { translateX: [-500, 0] },
            // { translateX: 0 },
        ],
        duration: 3000
    });
}
toRight()

function scale() {
    anime({
        targets: ["img"],
        scale: [1.1, 1],
        easing: "linear",
        transition: "all 0.3s"
    })
}

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: "_"
});

typewriter.typeString('Веб-дизайн')
    .pauseFor(2500)
    .deleteAll()
    .typeString('UX-дизайн')
    .pauseFor(2500)
    .deleteAll()
    .typeString('UI-дизайн')
    .pauseFor(2500)
    .start();