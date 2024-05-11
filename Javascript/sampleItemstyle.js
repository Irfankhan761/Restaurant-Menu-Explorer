// sample item clickable css
document.addEventListener("DOMContentLoaded", function () {
  const sampleItems = document.querySelectorAll(".sample-items");

  sampleItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove 'active' class from all sample items
      sampleItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Add 'active' class to the clicked sample item
      item.classList.add("active");
    });
  });
});
