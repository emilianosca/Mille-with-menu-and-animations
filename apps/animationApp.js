const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 2, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: .7, delay: 0.5 }); //slider
tl.to(".intro", { y: "-100%", duration: .5 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");





