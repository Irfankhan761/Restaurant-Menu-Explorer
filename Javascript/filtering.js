document.addEventListener("DOMContentLoaded", function () {
  const myitem = document.getElementById("myitem");

  // Define a function to filter dishes based on category
  function filterDishes(category) {
    const dishes = myitem.querySelectorAll(".dishes");
    dishes.forEach((dish) => {
      const dishCategory = dish.getAttribute("data-category");
      if (dishCategory === category || category === "all") {
        dish.style.display = "block";
      } else {
        dish.style.display = "none";
      }
    });
  }

  // Add click event listeners to category items
  const saladCategory = document.getElementById("salad");
  const rollCategory = document.getElementById("roll");
  const desertCategory = document.getElementById("desert");
  const sandwichCategory = document.getElementById("sandwich");
  const cakeCategory = document.getElementById("cake");
  const purevegCategory = document.getElementById("pureveg");
  const pastaCategory = document.getElementById("pasta");
  const noodlesCategory = document.getElementById("noodles");

  saladCategory.addEventListener("click", () => {
    filterDishes("salad");
  });

  rollCategory.addEventListener("click", () => {
    filterDishes("roll");
  });

  desertCategory.addEventListener("click", () => {
    filterDishes("desert");
  });
  sandwichCategory.addEventListener("click", () => {
    filterDishes("sandwich");
  });
  cakeCategory.addEventListener("click", () => {
    filterDishes("cake");
  });
  purevegCategory.addEventListener("click", () => {
    filterDishes("pureveg");
  });
  pastaCategory.addEventListener("click", () => {
    filterDishes("pasta");
  });
  noodlesCategory.addEventListener("click", () => {
    filterDishes("noodles");
  });

  // Initially show all dishes
  filterDishes("all");
});
