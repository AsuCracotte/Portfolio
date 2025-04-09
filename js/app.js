document.addEventListener("DOMContentLoaded", () => {
    const headerContent = document.querySelector(".header-content");

    headerContent.addEventListener("mousemove", (e) => {
        const { offsetX, offsetY, target } = e;
        const { clientWidth, clientHeight } = target;

        const xPos = (offsetX / clientWidth) - 0.5;
        const yPos = (offsetY / clientHeight) - 0.5;

        const rotateX = yPos * -25;
        const rotateY = xPos * 25;

        headerContent.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    headerContent.addEventListener("mouseleave", () => {
        headerContent.style.transform = "rotateX(0) rotateY(0)";
    });
});