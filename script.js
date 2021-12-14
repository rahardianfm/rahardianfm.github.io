const thumbs = document.getElementsByClassName('thumb')[0];
const canv = document.getElementsByClassName('canvas')[0];
const pic = canv.querySelector('img');

thumbs.addEventListener('click', function(e){
    if (e.target.className == 'icon'){
        pic.src = e.target.src;
    }
});
