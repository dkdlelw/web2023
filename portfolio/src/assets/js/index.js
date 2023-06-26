const lenis = new Lenis();
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const targets = gsap.utils.toArray(".split");
let SplitClient = new SplitType(targets, { type: "lines, words, chars" });



gsap.set("#section1 .sec1-wrap", {width: 0, height: 0})
gsap.set("#section1 .sec1-box", {width: 0})
gsap.set("#section1 .sec1-box .text .char", {autoAlpha: 0, y: 10})
gsap.set("#section1 .sec1-box .logo", {autoAlpha: 0, y: 50})
gsap.set("#section1 .sec1-box .scroll", {autoAlpha: 0, y: 50})

setTimeout(() => {
    gsap.to(".sec1-wrap", {
        duration: 1,
        width: "100%", 
        height: "100%", 
        autoAlpha: 1, 
        ease: "power3.out"
    })
    gsap.to(".sec1-box", {
        duration: 1,
        width: "60vw", 
        autoAlpha: 1, 
        delay: 0.8,
        ease: "power3.out"
    })
    gsap.to("#section1 .sec1-box .text .char", {
        duration: 1,
        y: 0, 
        autoAlpha: 1, 
        delay: 2,
        ease: "power3.out",
        stagger: 0.01
    })
    gsap.to("#section1 .sec1-box .logo", {
        duration: 1,
        y: 0, 
        autoAlpha: 1, 
        delay: 2.6,
        ease: "power3.out"
    })
    gsap.to("#section1 .sec1-box .scroll", {
        duration: 1,
        y: 0, 
        autoAlpha: 1, 
        delay: 3,
        ease: "power3.out"
    })
}, 2000);   


const panel = document.querySelector("#section1");

ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
});

const panel2 = document.querySelector("#section2");

const ani1 = gsap.timeline();
ani1.to(".sec1-box", {duration: 4, scale: 5, ease: "none"})

ScrollTrigger.create({
    animation: ani1,
    trigger: panel2,
    start: "top 90%",
    markers: false,
    scrub: 0.5
});


const sec2Text = document.querySelector(".sec2-text");

const ani2 = gsap.timeline();
ani2.from(".sec2-text .line:nth-child(1) .char", {
    y: 300,
    autoAlpha: 0,
    duration: 0.7,
    ease: "back.out(1)",
    stagger: 0.05
})

ScrollTrigger.create({
    animation: ani2,
    trigger: sec2Text,
    start: "top 70%",
    markers: true,
    // scrub: 0.5
});
