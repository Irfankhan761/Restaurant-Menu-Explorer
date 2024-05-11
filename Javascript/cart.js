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
const cartItems = {};
document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.querySelector(".cart-items");

  // Use an object to track items in the cart

  function addToCart(name, price, quantity, totalPrice) {
    if (cartItems[name]) {
      // If item already exists in cart, update the quantity and total price
      cartItems[name].quantity += 1;
      cartItems[name].totalPrice += price;
      // Update the HTML for the existing cart item
      const existingCartItem = cartContainer.querySelector(
        `[data-name="${name}"]`
      );
      if (existingCartItem) {
        existingCartItem.querySelector(".quantity").textContent =
          cartItems[name].quantity;
        existingCartItem.querySelector(
          ".total-price"
        ).textContent = `$${cartItems[name].totalPrice.toFixed(2)}`;
      }
    } else {
      // Otherwise, add a new item entry to the cart
      cartItems[name] = {
        price,
        quantity,
        totalPrice,
      };

      // Create HTML for the new cart item
      const cartItemHTML = `
        <div class="cart-items-titles-list itemList" data-name="${name}">
          <p>${name}</p>
          <p class="price">$${cartItems[name].price.toFixed(2)}</p>
          <p class="quantity">${cartItems[name].quantity}</p>
          <p class="total-price">$${cartItems[name].totalPrice.toFixed(2)}</p>
          <p class="cross">X</p>
        </div>
      `;

      // Append the cart item to the cart container
      cartContainer.insertAdjacentHTML("beforeend", cartItemHTML);
    }

    // Log the addition to the console (for demonstration purposes)
    console.log(
      `Added ${quantity} ${name}(s) to the cart. Total Price: $${totalPrice}`
    );
  }

  // Event delegation for removing items from the cart
  cartContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("cross")) {
      const cartItem = event.target.closest(".cart-items-titles-list");
      const itemName = cartItem.querySelector("p:first-child").textContent;

      // Reduce the quantity and total price in cartItems
      const itemQuantity = cartItems[itemName].quantity;
      const itemTotalPrice = cartItems[itemName].totalPrice;

      // If removing the last item of this type, delete from cartItems
      if (itemQuantity === 1) {
        delete cartItems[itemName];
      } else {
        cartItems[itemName].quantity -= 1;
        cartItems[itemName].totalPrice -= cartItems[itemName].price; // Subtract one item price
      }

      // Update the HTML for the existing cart item
      if (cartItems[itemName]) {
        cartItem.querySelector(".quantity").textContent =
          cartItems[itemName].quantity;
        cartItem.querySelector(".total-price").textContent = `$${cartItems[
          itemName
        ].totalPrice.toFixed(2)}`;
      }

      // Remove the clicked cart item from the display
      cartItem.remove();
    }
  });

  // Attach click event listener to each menu item
  const myitems = document.getElementById("myitem");
  myitems.addEventListener("click", (event) => {
    const targetItem = event.target.closest(".dishes"); // Find the closest parent with the class 'dishes'

    if (targetItem) {
      const foodName = targetItem.querySelector(".dish-heading p").textContent;
      const foodPrice = parseFloat(
        targetItem.querySelector(".price").textContent.replace("$", "")
      );
      const count = parseInt(
        targetItem.querySelector(".countvalue").textContent
      );

      // Calculate total price for the selected quantity
      const totalPrice = foodPrice * count;

      // Add the item to the cart with the selected quantity and calculated total price
      addToCart(foodName, foodPrice, count, totalPrice); // Pass foodPrice as price to addToCart
    }
  });
});

function updateCartTotal() {
  const subtotalElement = document.getElementById("sub");
  const totalPriceElement = document.getElementById("totalPrice");
  const deliveryElement = document.getElementById("delivery");

  let subtotal = 0;
  let delivery = 10;
  let total = 0;

  // Calculate subtotal
  for (const itemName in cartItems) {
    if (cartItems.hasOwnProperty(itemName)) {
      subtotal += cartItems[itemName].totalPrice;
    }
  }
  total = delivery + subtotal;

  // Update HTML with calculated values
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  deliveryElement.textContent = `$${delivery.toFixed(2)}`;
  totalPriceElement.textContent = `$${total.toFixed(2)}`; // Assuming no delivery fee for simplicity
}
