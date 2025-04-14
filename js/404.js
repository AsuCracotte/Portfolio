document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".button", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        clearProps: "all",
    });
    const button = document.querySelector(".button");
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#ffffff";
        button.style.color = "#6e0dff";
        button.style.transform = "scale(1.1)";
        button.style.transition = "all 0.3s ease";
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#e0e5ec";
        button.style.color = "black";
        button.style.transform = "scale(1)";
    });
});