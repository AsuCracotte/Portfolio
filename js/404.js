document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".button", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
    });
});