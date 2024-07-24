let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let memotec = document.querySelector('.memotec');

document.addEventListener('wheel', function(event) { 
    event.preventDefault();
    let scrollSpeed = 0.3; 
    let delta = event.deltaY * scrollSpeed;
    window.scrollBy(0, delta);
}, { passive: false });

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    memotec.style.fontSize = value  + 'px';
    if(scrollY >= 100){
        memotec.style.fontSize = 100 + 'px';
        memotec.style.position = 'fixed';
        if(scrollY >= 643){
            memotec.style.display = 'none';
        }else{
            memotec.style.display = 'block';
        }
        if(scrollY >= 145){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }

    }

    
}
