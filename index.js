// salad
const saladInfo = [
  {
    foodImg: "./images/salad-1.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Greek salad",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$12",
  },
  {
    foodImg: "./images/salad2.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Veg Salad",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$18",
  },
  {
    foodImg: "./images/salad3.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Clover Salad",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$16",
  },
  {
    foodImg: "./images/salad4.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Chicken Salad",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$24",
  },
];
const myitem = document.getElementById("myitem");
saladInfo.forEach((item) => {
  let dishInfo = `<div class="dishes" data-category="salad">
    <div class="dishes-mainImgs">
        <img class="foodimg" src="${item.foodImg}" alt="" srcset="">
        <img class="plusimg" src="${item.plusIcon}" alt="" srcset="">
        <div class="counterimg" style="display: none;">
                            <img class="negativecounter" src="./images/negcounter.png" alt="" srcset="">
                            <p class="countvalue">0</p>
                            <img class="positivecounter" src="./images/positivecounter.png" alt="" srcset="">
                           
                        </div>
    </div>
    <div class="dish-heading">
        <p>${item.foodName}</p>
        <img src="${item.starIcon}" alt="" srcset="">
    </div>
    <p class="dish-para">${item.foodDesc}</p>
    <p class="price">${item.foodPrice}</p>
    </div>`;
  myitem.insertAdjacentHTML("beforeend", dishInfo);
});

// rool
const roolInfo = [
  {
    foodImg: "./images/roll1.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Lasagna Rolls",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$14",
  },
  {
    foodImg: "./images/rool2.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Peri Peri Rolls",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$12",
  },
  {
    foodImg: "./images/roll3.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Chicken Rolls",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$20",
  },
  {
    foodImg: "./images/roll4.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Veg Rolls",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$15",
  },
];
roolInfo.forEach((item) => {
  let dishInfo = `<div class="dishes" data-category="roll">
    <div class="dishes-mainImgs">
        <img class="foodimg" src="${item.foodImg}" alt="" srcset="">
        <img class="plusimg" src="${item.plusIcon}" alt="" srcset="">
        <div class="counterimg" style="display: none;">
                            <img class="negativecounter" src="./images/negcounter.png" alt="" srcset="">
                            <p class="countvalue">0</p>
                            <img class="positivecounter" src="./images/positivecounter.png" alt="" srcset="">
                           
                        </div>
    </div>
    <div class="dish-heading">
        <p>${item.foodName}</p>
        <img src="${item.starIcon}" alt="" srcset="">
    </div>
    <p class="dish-para">${item.foodDesc}</p>
    <p class="price">${item.foodPrice}</p>
    </div>`;
  myitem.insertAdjacentHTML("beforeend", dishInfo);
});

// desert
const desertInfo = [
  {
    foodImg: "./images/deser1.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Ripple Ice Cream",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$14",
  },
  {
    foodImg: "./images/desert2.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Fruit Ice Cream",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$22",
  },
  {
    foodImg: "./images/desert3.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Jar Ice Cream",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$10",
  },
  {
    foodImg: "./images/desert4.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Vanilla Ice Cream",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$12",
  },
];
desertInfo.forEach((item) => {
  let dishInfo = `<div class="dishes" data-category="desert">
    <div class="dishes-mainImgs">
        <img class="foodimg" src="${item.foodImg}" alt="" srcset="">
        <img class="plusimg" src="${item.plusIcon}" alt="" srcset="">
        <div class="counterimg" style="display: none;">
                            <img class="negativecounter" src="./images/negcounter.png" alt="" srcset="">
                            <p class="countvalue">0</p>
                            <img class="positivecounter" src="./images/positivecounter.png" alt="" srcset="">
                           
                        </div>
    </div>
    <div class="dish-heading">
        <p>${item.foodName}</p>
        <img src="${item.starIcon}" alt="" srcset="">
    </div>
    <p class="dish-para">${item.foodDesc}</p>
    <p class="price">${item.foodPrice}</p>
    </div>`;
  myitem.insertAdjacentHTML("beforeend", dishInfo);
});

// sandwich
const sandwichInfo = [
  {
    foodImg: "./images/sandwich1.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Chicken Sandwich",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$12",
  },
  {
    foodImg: "./images/sandwich2.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Vegan Sandwich",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$18",
  },
  {
    foodImg: "./images/sandwich3.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Grilled Sandwich",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$16",
  },
  {
    foodImg: "./images/sandwich4.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Bread Sandwich",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$24",
  },
];
sandwichInfo.forEach((item) => {
  let dishInfo = `<div class="dishes" data-category="sandwich">
    <div class="dishes-mainImgs">
        <img class="foodimg" src="${item.foodImg}" alt="" srcset="">
        <img class="plusimg" src="${item.plusIcon}" alt="" srcset="">
        <div class="counterimg" style="display: none;">
                            <img class="negativecounter" src="./images/negcounter.png" alt="" srcset="">
                            <p class="countvalue">0</p>
                            <img class="positivecounter" src="./images/positivecounter.png" alt="" srcset="">
                           
                        </div>
    </div>
    <div class="dish-heading">
        <p>${item.foodName}</p>
        <img src="${item.starIcon}" alt="" srcset="">
    </div>
    <p class="dish-para">${item.foodDesc}</p>
    <p class="price">${item.foodPrice}</p>
    </div>`;
  myitem.insertAdjacentHTML("beforeend", dishInfo);
});

// cake
const cakeInfo = [
  {
    foodImg: "./images/cake1.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Cup Cake",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$14",
  },
  {
    foodImg: "./images/cake2.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Vegan Cake",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$12",
  },
  {
    foodImg: "./images/cake3.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Butterscotch Cake",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$20",
  },
  {
    foodImg: "./images/cake4.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Sliced Cake",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$15",
  },
];
cakeInfo.forEach((item) => {
  let dishInfo = `<div class="dishes" data-category="cake">
    <div class="dishes-mainImgs">
        <img class="foodimg" src="${item.foodImg}" alt="" srcset="">
        <img class="plusimg" src="${item.plusIcon}" alt="" srcset="">
        <div class="counterimg" style="display: none;">
                            <img class="negativecounter" src="./images/negcounter.png" alt="" srcset="">
                            <p class="countvalue">0</p>
                            <img class="positivecounter" src="./images/positivecounter.png" alt="" srcset="">
                           
                        </div>
    </div>
    <div class="dish-heading">
        <p>${item.foodName}</p>
        <img src="${item.starIcon}" alt="" srcset="">
    </div>
    <p class="dish-para">${item.foodDesc}</p>
    <p class="price">${item.foodPrice}</p>
    </div>`;
  myitem.insertAdjacentHTML("beforeend", dishInfo);
});

// pure veg
const purevegInfo = [
  {
    foodImg: "./images/pureveg1.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Garlic Mushroom",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$14",
  },
  {
    foodImg: "./images/pureveg2.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Fried Cauliflower",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$22",
  },
  {
    foodImg: "./images/pureveg3.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Mix Veg Pulao",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$10",
  },
  {
    foodImg: "./images/pureveg4.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Rice Zucchini",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$12",
  },
];
purevegInfo.forEach((item) => {
  let dishInfo = `<div class="dishes" data-category="pureveg">
    <div class="dishes-mainImgs">
        <img class="foodimg" src="${item.foodImg}" alt="" srcset="">
        <img class="plusimg" src="${item.plusIcon}" alt="" srcset="">
        <div class="counterimg" style="display: none;">
                            <img class="negativecounter" src="./images/negcounter.png" alt="" srcset="">
                            <p class="countvalue">0</p>
                            <img class="positivecounter" src="./images/positivecounter.png" alt="" srcset="">
                           
                        </div>
    </div>
    <div class="dish-heading">
        <p>${item.foodName}</p>
        <img src="${item.starIcon}" alt="" srcset="">
    </div>
    <p class="dish-para">${item.foodDesc}</p>
    <p class="price">${item.foodPrice}</p>
    </div>`;
  myitem.insertAdjacentHTML("beforeend", dishInfo);
});
// pure veg
const pastaInfo = [
  {
    foodImg: "./images/pasta1.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Cheese Pasta",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$12",
  },
  {
    foodImg: "./images/pasta2.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Tomato Pasta",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$18",
  },
  {
    foodImg: "./images/pasta3.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Creamy Pasta",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$16",
  },
  {
    foodImg: "./images/pureveg4.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Chicken Pasta",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$24",
  },
];
pastaInfo.forEach((item) => {
  let dishInfo = `<div class="dishes" data-category="pasta">
    <div class="dishes-mainImgs">
        <img class="foodimg" src="${item.foodImg}" alt="" srcset="">
        <img class="plusimg" src="${item.plusIcon}" alt="" srcset="">
        <div class="counterimg" style="display: none;">
                            <img class="negativecounter" src="./images/negcounter.png" alt="" srcset="">
                            <p class="countvalue">0</p>
                            <img class="positivecounter" src="./images/positivecounter.png" alt="" srcset="">
                           
                        </div>
    </div>
    <div class="dish-heading">
        <p>${item.foodName}</p>
        <img src="${item.starIcon}" alt="" srcset="">
    </div>
    <p class="dish-para">${item.foodDesc}</p>
    <p class="price">${item.foodPrice}</p>
    </div>`;
  myitem.insertAdjacentHTML("beforeend", dishInfo);
});
// pure veg
const noodlesInfo = [
  {
    foodImg: "./images/noodels1.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Buttter Noodles",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$14",
  },
  {
    foodImg: "./images/noodels2.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Veg Noodles",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$12",
  },
  {
    foodImg: "./images/noodels3.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Somen Noodles",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$20",
  },
  {
    foodImg: "./images/noodels4.png",
    plusIcon: "./images/plusIcon.png",
    foodName: "Cooked Noodles",
    starIcon: "./images/stars.png",
    foodDesc:
      "Food provides essential nutrients for overall health and well-being",
    foodPrice: "$15",
  },
];
noodlesInfo.forEach((item) => {
  let dishInfo = `<div class="dishes" data-category="noodles">
    <div class="dishes-mainImgs">
        <img class="foodimg" src="${item.foodImg}" alt="" srcset="">
        <img class="plusimg" src="${item.plusIcon}" alt="" srcset="">
        <div class="counterimg" style="display: none;">
                            <img class="negativecounter" src="./images/negcounter.png" alt="" srcset="">
                            <p class="countvalue">0</p>
                            <img class="positivecounter" src="./images/positivecounter.png" alt="" srcset="">
                           
                        </div>
    </div>
    <div class="dish-heading">
        <p>${item.foodName}</p>
        <img src="${item.starIcon}" alt="" srcset="">
    </div>
    <p class="dish-para">${item.foodDesc}</p>
    <p class="price">${item.foodPrice}</p>
    </div>`;
  myitem.insertAdjacentHTML("beforeend", dishInfo);
});
