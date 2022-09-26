$(function(){
    if(!flux.browser.supportsTransitions)
        alert("Flux Slider requires a browser that supports CSS3 transitions");
        
    window.f = new flux.slider('#slider', {
        pagination: true
    });
});