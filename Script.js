const parallax_el = document.querySelectorAll('.parallax');

let xValue = 0, yValue = 0;

window.addEventListener('mousemove', (e) => {
        xValue = e.clientX;
        yValue = e.clientY;
        console.log(xValue, yValue)

        parallax_el.forEach((ss) => {
            let speedx = ss.dataset.speedx;
            ss.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue}px))`;
        })
})

let timeline = gsap.timeline({ defaults: { duration: .25, ease: "power2.out"} });

timeline.from("#B1", {yPercent:100})
        .from('#B2', {yPercent:100})
        .from('#B3', {yPercent:100})
        .from('#Sea', {yPercent:-100})
        .from('#B4', {yPercent:100})
        .from('#B5', {yPercent:-100})
        .from('#B6', {yPercent:-100})
        .from('#Sky', {yPercent:-100, duration:.45, ease:'bounce'})


        window.addEventListener("load", () => {
                const loader = document.querySelector('.loader')
                
                loader.classList.add('loader-hidden')
        
                loader.addEventListener('transitionend', () => {
                        document.body.removeChild('loader');
                })
        })


// timeline.from('#Sea', {opacity: 0, duration:6, yPercent:0}, .15, "seaFadeIn")
//         .from('#B1', {duration:.35, yPercent:100, ease:'bounce'}, .3)
//         .from('#B2', {duration:.35, yPercent:100, ease:'spring'}, .4)
//         .from('#B3', {duration:.35, yPercent:100, ease:'spring'}, .5)
//         .from('#B4', {duration:.35, yPercent:100, ease:'bounce'}, .6)
//         .from('#B5', {duration: 1, yPercent:-100, ease:'back'}, .7)
//         .from('#B6', {duration: 1, yPercent:-100, ease:'back'}, 1)
//         .from('#Sky', {duration: .65, yPercent:-100, ease: "power4.out"}, 1.3)
        