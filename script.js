

// EVENT KEYS

document.addEventListener('keydown', (e) => {

    const pad = e.key.toLowerCase();
    const padSpace = e.keyCode;
    let isPadPressed = false;

    // ROW 1
    const crash = document.querySelector('.crash');
    const splash = document.querySelector('.splash');
    const ride = document.querySelector('.ride');
    const openhh = document.querySelector('.openhh');

    // ROW 2
    const tom1 = document.querySelector('.tom1');
    const tom2 = document.querySelector('.tom2');
    const tom3 = document.querySelector('.tom3');
    const floortom = document.querySelector('.floortom');

    // ROW 3
    const snarerim = document.querySelector('.snarerim');
    const snarehit = document.querySelector('.snarehit');
    const halfhh = document.querySelector('.halfhh');
    const pedalhh = document.querySelector('.pedalhh');

    // ROW 4
    const snareside = document.querySelector('.snareside');
    const kick1 = document.querySelector('.kick1');
    const closedhh = document.querySelector('.closedhh');
    const kick2 = document.querySelector('.kick2');


    // ROW 1
   if (pad === 'q' && !isPadPressed) {
        isPadPressed = true;
        let crashEffect = document.querySelector('#crash');
        crashEffect.classList.add('padefx1')
        crash.currentTime = 0;
        crash.play();
        
    }

   if (pad === 'w' && !isPadPressed) {
        let crashEffect = document.querySelector('#splash');
        crashEffect.classList.add('padefx1')
        splash.currentTime = 0;
        splash.play();
    }

    if (pad === 'e' && !isPadPressed) {
        let crashEffect = document.querySelector('#ride');
        crashEffect.classList.add('padefx1')
        ride.currentTime = 0;
        ride.play();
    }

    if (pad === 'r' && !isPadPressed) {
        let crashEffect = document.querySelector('#openhh');
        crashEffect.classList.add('padefx1')
        openhh.currentTime = 0;
        openhh.play();
    }


    // ROW 2
    if (pad === 't' && !isPadPressed) {
        let crashEffect = document.querySelector('#hitom');
        crashEffect.classList.add('padefx2')
        tom1.currentTime = 0;
        tom1.play();
    }

   if (pad === 'y' && !isPadPressed) {
        let crashEffect = document.querySelector('#midtom');
        crashEffect.classList.add('padefx2')
        tom2.currentTime = 0;
        tom2.play();
    }

    if (pad === 'u' && !isPadPressed) {
        let crashEffect = document.querySelector('#lotom');
        crashEffect.classList.add('padefx2')
        tom3.currentTime = 0;
        tom3.play();
    }

    if (pad === 'i') {
        let crashEffect = document.querySelector('#floortom');
        crashEffect.classList.add('padefx2')
        floortom.currentTime = 0;
        floortom.play();
    }

    // ROW 3
    if (pad === 'a' && !isPadPressed) {
        let crashEffect = document.querySelector('#snarerim');
        crashEffect.classList.add('padefx3')
        snarerim.currentTime = 0;
        snarerim.play();
    }

    if (pad === 's' && !isPadPressed) {
        let crashEffect = document.querySelector('#snarehit');
        crashEffect.classList.add('padefx3')
        snarehit.currentTime = 0;
        snarehit.play();
    }

    if (pad === 'd' && !isPadPressed) {
        let crashEffect = document.querySelector('#halfhh');
        crashEffect.classList.add('padefx1')
        halfhh.currentTime = 0;
        halfhh.play();
    }

    if (pad === 'f' && !isPadPressed) {
        let crashEffect = document.querySelector('#pedalhh');
        crashEffect.classList.add('padefx1')
        pedalhh.currentTime = 0;
        pedalhh.play();
    }

    // ROW 4
    if (pad === 'g' && !isPadPressed) {
        let crashEffect = document.querySelector('#snareside');
        crashEffect.classList.add('padefx3')
        snareside.currentTime = 0;
        snareside.play();
    }

    if (pad === 'h'&& !isPadPressed) {
        let crashEffect = document.querySelector('#kick1');
        crashEffect.classList.add('padefx4')
        kick1.currentTime = 0;
        kick1.play();
    }

    if (pad === 'j' && !isPadPressed) {
        let crashEffect = document.querySelector('#closedhh');
        crashEffect.classList.add('padefx1')
        closedhh.currentTime = 0;
        closedhh.play();
    }

    if (padSpace === 32 && !isPadPressed) {
        let crashEffect = document.querySelector('#kick2');
        crashEffect.classList.add('padefx4')
        kick2.currentTime = 0;
        kick2.play();
    }

});



document.addEventListener('keyup', (e) => {

    const pad = e.key.toLowerCase();
    const padSpace = e.keyCode;

    // ROW 1
    if (pad === 'q') {
        let crashEffect = document.querySelector('#crash');
        crashEffect.classList.remove('padefx1')
        isPadPressed = false;
    }
    if (pad === 'w') {
        let crashEffect = document.querySelector('#splash');
        crashEffect.classList.remove('padefx1')
        isPadPressed = false;
    }
    if (pad === 'e') {
        let crashEffect = document.querySelector('#ride');
        crashEffect.classList.remove('padefx1')
        isPadPressed = false;
    }
    if (pad === 'r') {
        let crashEffect = document.querySelector('#openhh');
        crashEffect.classList.remove('padefx1')
        isPadPressed = false;
    }

    // ROW 2
    if (pad === 't') {
        let crashEffect = document.querySelector('#hitom');
        crashEffect.classList.remove('padefx2')
        isPadPressed = false;
    }
    if (pad === 'y') {
        let crashEffect = document.querySelector('#midtom');
        crashEffect.classList.remove('padefx2')
        isPadPressed = false;
    }
    if (pad === 'u') {
        let crashEffect = document.querySelector('#lotom');
        crashEffect.classList.remove('padefx2')
        isPadPressed = false;
    }
    if (pad === 'i') {
        let crashEffect = document.querySelector('#floortom');
        crashEffect.classList.remove('padefx2')
        isPadPressed = false;
    }

    // ROW 3
    if (pad === 'a') {
        let crashEffect = document.querySelector('#snarerim');
        crashEffect.classList.remove('padefx3')
        isPadPressed = false;
    }
    if (pad === 's') {
        let crashEffect = document.querySelector('#snarehit');
        crashEffect.classList.remove('padefx3')
        isPadPressed = false;
    }
    if (pad === 'd') {
        let crashEffect = document.querySelector('#halfhh');
        crashEffect.classList.remove('padefx1')
        isPadPressed = false;
    }
    if (pad === 'f') {
        let crashEffect = document.querySelector('#pedalhh');
        crashEffect.classList.remove('padefx1')
        isPadPressed = false;
    }

    // ROW 4
    if (pad === 'g') {
        let crashEffect = document.querySelector('#snareside');
        crashEffect.classList.remove('padefx3')
        isPadPressed = false;
    }
    if (pad === 'h') {
        let crashEffect = document.querySelector('#kick1');
        crashEffect.classList.remove('padefx4')
        isPadPressed = false;
    }
    if (pad === 'j') {
        let crashEffect = document.querySelector('#closedhh');
        crashEffect.classList.remove('padefx1')
        isPadPressed = false;
    }
    if (padSpace === 32) {
        let crashEffect = document.querySelector('#kick2');
        crashEffect.classList.remove('padefx4')
        isPadPressed = false;
    }
})
