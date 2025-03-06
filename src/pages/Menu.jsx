import { useEffect, useState } from "react";
import styles from "./Menu.module.css";

const beveragesList = [
  {
    menuName: "Mocktails",
    foods: [
      {
        foodName: "Blue Lagoon",
        description: "",
        img: "./bevereage-api-1.webp",
        price: "380Af",
        ingredients: [],
        review: 4,
      },
      {
        foodName: "Classic Lemonada",
        description: "",
        img: "./bevereage-api-3.webp",
        price: "180Af",
        ingredients: [],
        review: 5,
      },
      {
        foodName: "Classic Mojito",
        description: "",
        img: "./bevereage-api-4.webp",
        price: "370Af",
        ingredients: [],
        review: 0,
      },
      {
        foodName: "Orange Mojito",
        description: "",
        img: "./bevereage-api-5.webp",
        price: "370Af",
        ingredients: [],
        review: 0,
      },
      {
        foodName: "Virgin Mojito",
        description: "",
        img: "./bevereage-api-6.webp",
        price: "350Af",
        ingredients: [],
        review: 0,
      },
    ],
  },
  {
    menuName: "Shakes",
    foods: [
      {
        foodName: "Chocolate Shake",
        description: "",
        img: "./bevereage-api-2.webp",
        price: "320Af",
        ingredients: [],
        review: 5,
      },
    ],
  },
];

const menuList = [
  {
    menuName: "Ziafat Breakfast",
    foods: [
      {
        foodName: "Breakfast Set",
        description:
          "Condiments breakfast, cheese platter, fresh vegetables, home made qaimaq, Italian vegetable, pratha with pastirma, egg with tomato, sunny side egg, bread basket, black tea.",
        img: "./api-menu-1.webp",
        price: "800Af",
        ingredients: [
          "Dairy",
          "Egg",
          "Garlic",
          "Gluten",
          "Honey",
          "Milk",
          "Onion",
          "Organic",
          "Vegan",
          "Halal",
        ],
        review: 4,
      },
      {
        foodName: "Mix Cheese Platter",
        description:
          "Feta cheese, parmesan cheese, cow cheese, cheddar cashkaval cheese, and home made butter, served with grapes and apricot.",
        img: "./api-menu-2.webp",
        price: "300Af",
        ingredients: ["Dairy", "Cheese", "Halal"],
        review: 4.2,
      },
      {
        foodName: "Breakfast Karahi",
        description:
          "Tender beef with lamb fat, caramelized onion, garlic, tomato, served with organic egg.",
        img: "./api-menu-3.webp",
        price: "350Af",
        ingredients: ["Egg", "Garlic", "Onion", "Halal"],
        review: 5,
      },

      {
        foodName: "Lamb Liver",
        description: "Fresh lamb liver with tomato sauce",
        img: "./api-menu-4.webp",
        price: "300Af",
        ingredients: ["Spicy", "Garlic", "Halal "],
        review: 3.5,
      },

      {
        foodName: "Cheese Omeletta",
        description: "Egg, cheese and mix bell papper, served with fresh salad",
        img: "./api-menu-5.webp",
        price: "200Af",
        ingredients: ["Egg", "Cheese", "Halal"],
        review: 5,
      },
    ],
  },

  {
    menuName: "Soup",
    foods: [
      {
        foodName: "Shahi Soup",
        description: "",
        img: "./api-menu-6.webp",
        price: "250Af",
        ingredients: [],
        review: 0,
      },
      {
        foodName: "Ziafat Special Soup",
        description: "",
        img: "./api-menu-7.webp",
        price: "720Af",
        ingredients: ["Dairy", "Cheese", "Halal"],
        review: 4.2,
      },
    ],
  },
  {
    menuName: "Salad",
    foods: [
      {
        foodName: "Ziafat Mezze",
        description:
          "Fatosh Salad, Greek Salad, Fruit Salad, Hummus, Motabel, Ezma, Arabic Bread",
        img: "./api-menu-8.webp",
        price: "700Af",
        ingredients: ["Nuts", "Onion", "Garlic", "Gluten", "Vegan", "Dairy"],
        review: 0,
      },
      {
        foodName: "Ziafat Special Salad",
        description:
          "Small cups tomato,cucumber,onion,parsley pcs of walnuts, pomegranate seeds lemon olive oil pomegranate dressing",
        img: "./api-menu-9.webp",
        price: "720Af",
        ingredients: ["Nuts", "Onion", "Vegan"],
        review: 5,
      },

      {
        foodName: "Fruit Salad",
        description:
          "Apple, banana, grapes, orange, mixed honey with cream, served with mix nuts.",
        img: "./api-menu-10.webp",
        price: "720Af",
        ingredients: ["Honey", "Milk", "Nuts"],
        review: 0,
      },
    ],
  },
  {
    menuName: "Starters",
    foods: [
      {
        foodName: "Dynamite Shirmp",
        description: "With satay sauce",
        img: "./api-menu-11.webp",
        price: "350Af",
        ingredients: [],
        review: 0,
      },
      {
        foodName: "Tandori Samosa",
        description:
          "Small cups tomato,cucumber,onion,parsley pcs of walnuts, pomegranate seeds lemon olive oil pomegranate dressing",
        img: "./api-menu-12.webp",
        price: "150Af",
        ingredients: [],
        review: 0,
      },
    ],
  },
  { menuName: "Mughlai Food" },
  { menuName: "Thai & Chinese" },
  { menuName: "Afghani Cuisine" },
  { menuName: "Bar.B.Q" },
  { menuName: "International Cuisine" },
  { menuName: "Sea Food" },
  { menuName: "Burger" },
  { menuName: "Italian Pizza & Pide" },
  { menuName: "Deep Pan Pizza" },
  { menuName: "Kids Menu" },
  { menuName: "Side Orders" },
  { menuName: "Naan" },
  { menuName: "Desserts" },
  { menuName: "Sheeryakh & Ice Cream" },
  { menuName: "Fruit Platter" },
];

function Menu() {
  const [menuListActive, setMenuListActive] = useState("Ziafat Breakfast");
  const [beveragesListActive, setBeveragesListActive] = useState("Mocktails");

  const [itemBeveragesListActive, setItemBeveragesListActive] = useState(
    beveragesList[0]?.foods || []
  );

  const [itemListActive, setItemListActive] = useState(
    menuList[0]?.foods || []
  );

  useEffect(() => {
    const activeBeverages = beveragesList.find(
      (obj) => obj.menuName === beveragesListActive
    );
    setItemBeveragesListActive(activeBeverages?.foods || []);

    const activeMenu = menuList.find((obj) => obj.menuName === menuListActive);
    setItemListActive(activeMenu?.foods || []);
  }, [menuListActive, beveragesListActive]);

  return (
    <div className={`${styles.menu} block`} id="menu">
      <div className={styles.menuContainer}>
        {/* Menu Heading */}
        <div className={`${styles.heading} heading`}>
          <span>Foods</span>
          <h2>MENU</h2>
        </div>

        {/* Menu Options */}
        <div className={styles.menuBox}>
          <div className={styles.menuOption}>
            <div className={styles.menuOptionDiv}>
              {menuList.map((list) => (
                <button
                  key={list.menuName}
                  className={`${styles.menuOptionBtn} ${
                    menuListActive === list.menuName ? styles.activeMenu : ""
                  }`}
                  onClick={() => setMenuListActive(list.menuName)}
                >
                  {list.menuName}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className={styles.menuBoxS}>
            {itemListActive.length > 0 ? (
              itemListActive.map((list) => (
                <div key={list.foodName} className={styles.menuCard}>
                  {/* Show blurry image while the original one is loading */}
                  <img src={list.img} alt={list.foodName} />
                  <div className={styles.layer}>
                    <h3>{list.foodName}</h3>
                    <p>{list.description}</p>
                    <h4>{list.price}</h4>
                    <a href="#contact">
                      <button className={styles.btnOutline}>Order</button>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.emptyMenu}>
                No items available in this category.
              </p>
            )}
          </div>
        </div>

        {/* Beverages Section */}
        <div className={`${styles.heading} heading block`}>
          <span>Beverages</span>
          <h2>MENU</h2>
        </div>

        <div className={`${styles.menuBox} block`}>
          <div className={styles.menuOption}>
            <div className={styles.menuOptionDiv}>
              {beveragesList.map((list) => (
                <button
                  key={list.menuName}
                  className={`${styles.menuOptionBtn} ${
                    beveragesListActive === list.menuName
                      ? styles.activeMenu
                      : ""
                  }`}
                  onClick={() => setBeveragesListActive(list.menuName)}
                >
                  {list.menuName}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className={styles.menuBoxS}>
            {itemBeveragesListActive.length > 0 ? (
              itemBeveragesListActive.map((list) => (
                <div key={list.foodName} className={styles.menuCard}>
                  {/* Show blurry image while the original one is loading */}
                  <img src={list.img} alt={list.foodName} />
                  <div className={styles.layer}>
                    <h3>{list.foodName}</h3>
                    <p>{list.description}</p>
                    <h4>{list.price}</h4>
                    <a href="#contact">
                      <button className={styles.btnOutline}>Order</button>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.emptyMenu}>
                No items available in this category.
              </p>
            )}
          </div>
        </div>

        {/* <div className={styles.menuFoodSlider}>
          <div className={`${styles.prevText} ${styles.menuTitle}`}>
            <h3>Blue Lagoon</h3>
            <p>A refreshing drink with a tropical twist.</p>
            <h4>380AF</h4>
          </div>

          <div className={styles.foodImg}>
            <img src="./menu-2.png" alt="Blue Lagoon" />
          </div>

          <div className={`${styles.nextText} ${styles.menuTitle}`}>
            <h3>Black Mojito</h3>
            <p>A classic mojito with a hint of bold flavors.</p>
            <h4>330AF</h4>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Menu;
