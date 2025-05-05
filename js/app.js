document.addEventListener("DOMContentLoaded", () => {
    const headerContent = document.querySelector(".header-content");
    const loadingScreen = document.getElementById("loading-screen");
    const loadingLogo = document.getElementById("loading-logo");
    const loadingPercentage = document.getElementById("loading-percentage");
    const loadingBar = document.getElementById("loading-bar");

    document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const xOffset = (clientX / window.innerWidth - 0.5) * 50;
        const yOffset = (clientY / window.innerHeight - 0.5) * 50;

        loadingLogo.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });

    let progress = 0;

    const interval = setInterval(() => {
        if (progress < 90) {
            progress += Math.random() * 10;
            loadingPercentage.textContent = `${Math.floor(progress)}%`;
            loadingBar.style.width = `${Math.floor(progress)}%`;
        }
    }, 100);

    window.addEventListener("load", () => {
        clearInterval(interval);
        progress = 100;
        loadingPercentage.textContent = "100%";
        loadingBar.style.width = "100%";

        // Transition de disparition
        loadingLogo.classList.add("zoom-effect");
        loadingScreen.style.transition = "opacity 0.8s ease";
        loadingScreen.style.opacity = "0";

        setTimeout(() => {
            loadingScreen.style.display = "none";
            loadingLogo.classList.remove("zoom-effect");
        }, 800);
    });

    if (headerContent) {
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
    }
});