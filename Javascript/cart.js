// Function to toggle the cart container visibility
function toggleCartContainer() {
  const cartContainer = document.querySelector(".cart-container");
  const mid = document.querySelector(".mid");

  // Toggle display of cart container
  if (cartContainer.style.display === "none") {
    cartContainer.style.display = "block"; // Show the cart container
    mid.style.display = "none";
    homedeactivat();
  } else {
    cartContainer.style.display = "none"; // Hide the cart container
    mid.style.display = "block";
    homeactivat();
  }
}

function homeactivat() {
  const homePage = document.querySelector(".page");
  if (homePage) {
    homePage.style.display = "block";
  }
}

function homedeactivat() {
  const homePage = document.querySelector(".page");
  if (homePage) {
    homePage.style.display = "none";
  }
}

// const itemList = document.getElementById("itemList");
// // i want to add dynamicaly here but uniquw element and track the quantity items with orice proper calculation
// saladInfo.forEach((item) => {
//   let dishInfo = `<div class="cart-items-titles-list">
//     <p> <img src="${item.foodImg}" alt="" srcset=""></p>
//       <p>${item.foodName}</p>
//       <p>${item.foodPrice}</p>
//       <p>${count}</p>
//       <p>${total}</p>
//       <p class="cross">X</p>

//   </div>
// <hr style="background-color: gray; height: 1px;"width="90%"></hr>`;
//   itemList.insertAdjacentHTML("beforeend", dishInfo);
// });
// const foodCategories = {
//   salad: saladInfo,
//   roll: roolInfo,
//   dessert: desertInfo,
//   sandwich: sandwichInfo,
//   cake: cakeInfo,
//   pureveg: purevegInfo,
//   pasta: pastaInfo,
//   noodles: noodlesInfo,
// };

// function cartItems(category) {
//   const itemList = document.getElementById("itemList"); // Use getElementById to select the itemList container

//   const selectedCategory = foodCategories[category];

//   if (!selectedCategory) {
//     console.error(`Category '${category}' not found in foodCategories.`);
//     return;
//   }

//   selectedCategory.forEach((item) => {
//     let dishInfo = `<div class="cart-item" style="">
//         <img src="${item.foodImg}" alt="" srcset="">
//         <p>${item.foodName}</p>
//         <p>${item.foodPrice}</p>
//         <p>1</p> Default quantity (you can adjust this as per click)
//         <p>${item.foodPrice}</p>  total priceof same  foodPrice only
//         <p class="remove-item">X</p>
//       </div>
//       <hr style="background-color: gray; height: 1px; width: 90%;">`;

//     itemList.insertAdjacentHTML("beforeend", dishInfo);
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // Example: Generate cart items for 'salad' category
//   cartItems("salad");

//   // Add event delegation for removing items from the cart
//   itemList.addEventListener("click", function (event) {
//     if (event.target.classList.contains("remove-item")) {
//       const cartItem = event.target.parentElement;
//       cartItem.remove();
//     }
//   });
// });

const foodCategories = {
  salad: saladInfo,
  roll: roolInfo,
  dessert: desertInfo,
  sandwich: sandwichInfo,
  cake: cakeInfo,
  pureveg: purevegInfo,
  pasta: pastaInfo,
  noodles: noodlesInfo,
};

function cartItems(category) {
  const itemList = document.getElementById("itemList");

  const selectedCategory = foodCategories[category];

  if (!selectedCategory) {
    console.error(`Category '${category}' not found in foodCategories.`);
    return;
  }

  // Clear existing items before inserting new ones
  itemList.innerHTML = "";

  selectedCategory.forEach((item) => {
    let dishInfo = `
    <div class="cart-items-titles-list itemList" >
    <p><img src="${item.foodImg}" alt="${item.foodName}"></p>
          <p>${item.foodName}</p>
          <p>${item.foodPrice}</p>
        
          <p class="total-price">${item.foodPrice}</p>
          <p class="cross">X</p>
        </div>
        <hr style="background-color: gray; height: 1px; width: 90%;">`;

    itemList.insertAdjacentHTML("beforeend", dishInfo);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Initial cart items for 'salad' category
  cartItems("salad");

  const itemList = document.getElementById("itemList");

  // Event delegation for removing items from the cart
  itemList.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item")) {
      const cartItem = event.target.parentElement;
      cartItem.remove();
    }
  });

  // Event delegation for adjusting quantity and updating total price
  itemList.addEventListener("input", function (event) {
    if (event.target.classList.contains("quantity-input")) {
      const quantityInput = event.target;
      const cartItem = quantityInput.closest(".cart-item");
      const priceElement = cartItem.querySelector(".total-price");
      const itemPrice = parseFloat(
        cartItem.querySelector("p:nth-child(3)").textContent.slice(1)
      );

      const quantity = parseInt(quantityInput.value);
      const totalPrice = quantity * itemPrice;

      priceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }
  });

  // Function to handle category selection (e.g., on clicking different categories)
  function handleCategorySelection(category) {
    cartItems(category);
  }

  // Example: Handle category selection based on user interaction (e.g., clicking on category buttons)
  const categoryButtons = document.querySelectorAll(".category-button");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedCategory = button.dataset.category;
      handleCategorySelection(selectedCategory);
    });
  });
});
