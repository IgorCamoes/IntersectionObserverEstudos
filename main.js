const anima = document.querySelectorAll(".anim");
const lampada = document.querySelector(".anim:first-child img");
const botao = document.querySelector(".anim button")


let observer = new IntersectionObserver(entries =>{

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
            botao.style.animation = 'anim2 1s 3s forwards ease-out';
            lampada.style.animation = 'anim2 1s 3s forwards ease-out';
        }
        else{
            entry.target.style.animation = 'none';
            botao.style.animation = 'none'
            lampada.style.animation = 'none';

        }
    });

});


anima.forEach(item =>{
    observer.observe(item);
});