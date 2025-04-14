document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".button", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        clearProps: "all",
    });
});