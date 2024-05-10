document.addEventListener("DOMContentLoaded", function() {
    let cartCounter = 0; // Global counter to track active carts

    const plusIcons = document.querySelectorAll(".plusimg");

    plusIcons.forEach(plusIcon => {
        plusIcon.addEventListener("click", function() {
            const counterImg = this.nextElementSibling;
            if (counterImg.style.display === "none" || counterImg.style.display === "") {
                this.style.display = "none";
                counterImg.style.display = "flex";
                cartCounter++; // Increment cart counter
                updateCartDisplay();
            }
        });
    });

    const counters = document.querySelectorAll(".counterimg p");
    counters.forEach(counter => {
        let count = 1;
        counter.textContent = count;

        counter.previousElementSibling.addEventListener("click", function() {
            if (count > 0) {
                count--;
                cartCounter--; // Decrement cart counter
                counter.textContent = count;
                if (count === 0) {
                    
                    updateCartDisplay();
                }
            }
        });

        counter.nextElementSibling.addEventListener("click", function() {
            count++;
            counter.textContent = count;
            if (count > 0) {
                cartCounter++; // Increment cart counter
                updateCartDisplay();
            }
        });
    });

    function updateCartDisplay() {
        
        if (cartCounter > 0) {
            
            dotactivat();
            console.log(cartCounter)
        } else {
            
            dotdeactivat();
            console.log(cartCounter)
        }
    }

    // Function to show/hide dot based on cartCounter
    function dotactivat() {
        const dot = document.querySelector(".dot");
        if (dot) {
            dot.style.display = "block";
        }
    }

    function dotdeactivat() {
        const dot = document.querySelector(".dot");
        if (dot) {
            dot.style.display = "none";
        }
    }
});
