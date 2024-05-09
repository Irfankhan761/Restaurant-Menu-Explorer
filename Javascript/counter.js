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
                dotactivat();
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
            if(count ==0){
                dotdeactivat()
            }
            
            }
        });

        counter.nextElementSibling.addEventListener("click", function() {
            count++;
            counter.textContent = count;
            if(count >0){
                dotactivat()
            }
           
            
        });
        
    });
});


//cart dot
function dotactivat() {
    const dot = document.querySelector(".dot"); 

    if (dot.style.display === "none" || dot.style.display === "") {
        dot.style.display = "block"; 
        dot.classList.add("dot"); 
    }
}
function dotdeactivat() {
    const dot = document.querySelector(".dot"); 

    if (dot.style.display === "block") {
        dot.style.display = "none"; 
    }
}

// var unicount=0
// if(unicount>0){
// dotactivat()
// }
// else{
//     dotdeactivat()
// }
