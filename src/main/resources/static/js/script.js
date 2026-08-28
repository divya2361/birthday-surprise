/*```javascript
window.onload = function () {

    const openButton = document.getElementById("openSurprise");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const birthdayScreen = document.getElementById("birthdayScreen");

    const lookUpButton = document.getElementById("lookUpButton");
    const nightSkyScreen = document.getElementById("nightSkyScreen");

    const wishButton = document.getElementById("wishButton");
    const wishResult = document.getElementById("wishResult");

    const music = document.getElementById("birthdayMusic");


    // =====================================
    // PAGE 1 → PAGE 2
    // =====================================

    openButton.onclick = function () {

        welcomeScreen.classList.add("hidden");
        birthdayScreen.classList.remove("hidden");

        // Start music
        if (music) {
            music.play().catch(function (error) {
                console.log("Music needs user interaction.");
            });
        }

    };


    // =====================================
    // PAGE 2 → PAGE 3
    // =====================================

    if (lookUpButton) {

        lookUpButton.onclick = function () {

            birthdayScreen.classList.add("hidden");
            nightSkyScreen.classList.remove("hidden");

        };

    }


    // =====================================
    // MAKE A WISH
    // =====================================

    if (wishButton) {

        wishButton.onclick = function () {

            wishButton.style.display = "none";

            if (wishResult) {
                wishResult.classList.remove("hidden");
            }

            createHearts();

        };

    }


    // =====================================
    // HEARTS
    // =====================================

    function createHearts() {

        const hearts = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💓",
            "💞",
            "♡"
        ];

        for (let i = 0; i < 40; i++) {

            const heart = document.createElement("span");

            heart.className = "explosion-heart";

            heart.innerHTML =
                hearts[Math.floor(Math.random() * hearts.length)];

            heart.style.left = "50%";
            heart.style.top = "50%";

            heart.style.setProperty(
                "--x",
                (Math.random() - 0.5) * 1000 + "px"
            );

            heart.style.setProperty(
                "--y",
                (Math.random() - 0.5) * 700 + "px"
            );

            heart.style.animationDelay =
                Math.random() * 0.5 + "s";

            document
                .getElementById("heartExplosion")
                .appendChild(heart);

        }

    }

};*/
```
/*
 * Birthday Website
 * Navigation is handled in index.html.
 */

console.log("Birthday website loaded successfully.");
