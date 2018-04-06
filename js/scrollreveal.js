$(document).ready(function () {

window.sr = ScrollReveal({duration: 2000, reset:true});
sr.reveal('#frontend', {origin: 'left', distance: '100vw'});
    sr.reveal('#responsive', { scale: 4, origin: 'bottom', distance: '50px', rotate: { x: 0, y: 0, z: 90}});
sr.reveal('#backend', {origin: 'right', distance: '100vw'});

    sr.reveal('.portfolio-item', { viewFactor: 0.5, duration: 800, rotate: { x: 0, y: 90, z: 0 }}, 100)

    sr.reveal('.skill', { viewFactor: 0.5, duration: 800, rotate: { x: 0, y: 0, z: 8}, opacity:0, scale:0.8, origin: 'bottom', distance:'50px' }, 30)
})