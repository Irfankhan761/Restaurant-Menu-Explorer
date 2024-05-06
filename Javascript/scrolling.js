// scrooling
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navBtn');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
// sample item clickable css
document.addEventListener("DOMContentLoaded", function() {
    const sampleItems = document.querySelectorAll(".sample-items");

    sampleItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove 'active' class from all sample items
            sampleItems.forEach(item => {
                item.classList.remove("active");
            });

            // Add 'active' class to the clicked sample item
            item.classList.add("active");
        });
    });
});


// counter 
document.addEventListener("DOMContentLoaded", function() {
    const plusIcons = document.querySelectorAll(".plusimg");

    plusIcons.forEach(plusIcon => {
        plusIcon.addEventListener("click", function() {
            // Toggle display of plusimg and counterimg
            const counterImg = this.nextElementSibling;
            if (counterImg.style.display === "none" || counterImg.style.display === "") {
                this.style.display = "none"; // Hide plusimg
                counterImg.style.display = "flex"; // Display counterimg
            }
        });
    });

    // Handle counter functionality
    const counters = document.querySelectorAll(".counterimg p");
    counters.forEach(counter => {
        let count = 1;
        counter.textContent = count;

        counter.previousElementSibling.addEventListener("click", function() {
            if(count>0){
                count--;
            counter.textContent = count;
            }
        });

        counter.nextElementSibling.addEventListener("click", function() {
            count++;
            counter.textContent = count;
        });
    });
});

