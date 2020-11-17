$(document).ready(function () {

window.sr = ScrollReveal({duration: 2000, reset:true});
sr.reveal('#frontend', {origin: 'left', distance: '100vw'});
    sr.reveal('#responsive', { scale: 4, origin: 'bottom', distance: '50px', rotate: { x: 0, y: 0, z: 90}});
sr.reveal('#backend', {origin: 'right', distance: '100vw'});

    // sr.reveal('.portfolio-item', { viewFactor: 0.5, duration: 800, rotate: { x: 0, y: 90, z: 0 }})

    sr.reveal('.skill', { viewFactor: 0.5, duration: 800, rotate: { x: 0, y: 0, z: 8}, opacity:0, scale:0.8, origin: 'bottom', distance:'50px' }, 30)

    sr.reveal('.canvas', {distance:'0', rotate:{x:0,y:0,z:720}, scale:0.1})

    sr.reveal('.flipleft', { scale:1.2, duration: 2000, distance: '10px', rotate:{ x: 0, y: 90, z: 2 } })
    sr.reveal('.flipright', { scale:1.2, duration: 2000, distance: '10px', rotate: { x: 0, y: -90, z: -2 }})

    sr.reveal('.flipdown', {duration: 2000, distance: '0', rotate: { x: 90, y: 0, z: 0 }, scale:0.8 })

    sr.reveal('.flipup', { duration: 2000, distance: '0', rotate: { x: -90, y: 0, z: 0 }, scale: 0.8 })

    sr.reveal('.decolineleft', { opacity: 1, viewFactor: 0.5, duration: 3000, distance: '100vw', origin: 'left'}, 100)

    sr.reveal('.decolinetop', { opacity: 1, viewFactor: 0.5, duration: 3000, distance: '100%', origin: 'top'}, 100)
})