import { useState } from "react";
import styles from "./Menu.module.css";

const menuList = [
  {
    menuName: "Ziafat Breakfast",
    foods: [
      {
        foodName: "Breakfast Set",
        description:
          "Condiments breakfast, cheese platter, fresh vegetables, home made qaimaq, Italian vegetable, pratha with pastirma, egg with tomato, sunny side egg, bread basket, black tea.",
        img: "./api-menu-1.webp", // Full resolution image
        placeholder: "./api-menu-1-placeholder.jpg", // Blurry placeholder image
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
        img: "./api-menu-2.webp", // Full resolution image
        placeholder: "./api-menu-2-placeholder.jpg", // Blurry placeholder image
        price: "300Af",
        ingredients: ["Dairy", "Cheese", "Halal"],
        review: 4.2,
      },
      {
        foodName: "Breakfast Karahi",
        description:
          "Tender beef with lamb fat, caramelized onion, garlic, tomato, served with organic egg.",
        img: "./api-menu-3.webp", // Full resolution image
        placeholder: "./api-menu-3-placeholder.jpg", // Blurry placeholder image
        price: "350Af",
        ingredients: ["Egg", "Garlic", "Onion"],
        review: 5,
      },
    ],
  },
  { menuName: "Soup" },
  { menuName: "Salad" },
  { menuName: "Starters" },
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
  const [itemListActive, setItemListActive] = useState(
    menuList[0]?.foods || []
  );

  // Track loading state for images
  const [loadingImages, setLoadingImages] = useState({});

  const handleImageLoad = (foodName) => {
    setLoadingImages((prevState) => ({
      ...prevState,
      [foodName]: false,
    }));
  };

  return (
    <div className={styles.menu} id="menu">
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
                  <img
                    src={
                      loadingImages[list.foodName] ? list.placeholder : list.img
                    }
                    alt={list.foodName}
                    className={
                      loadingImages[list.foodName] ? styles.blurryImage : ""
                    }
                    onLoad={() => handleImageLoad(list.foodName)} // On image load, update state
                    loading="lazy" // Lazy load the images
                  />
                  <div className={styles.layer}>
                    <h3>{list.foodName}</h3>
                    <p>{list.description}</p>
                    <h4>{list.price}</h4>
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
        <div className={`${styles.heading} heading`}>
          <span>Beverages</span>
          <h2>MENU</h2>
        </div>

        <div className={styles.menuFoodSlider}>
          <div className={`${styles.prevText} ${styles.menuTitle}`}>
            <h3>Blue Lagoon</h3>
            <p>A refreshing drink with a tropical twist.</p>
            <h4>380AF</h4>
          </div>

          <div className={styles.foodImg}>
            {/* Apply blurry placeholder for beverage images */}
            <img
              src={
                loadingImages["Blue Lagoon"]
                  ? "./menu-2-placeholder.jpg"
                  : "./menu-2.png"
              }
              alt="Blue Lagoon"
              className={loadingImages["Blue Lagoon"] ? styles.blurryImage : ""}
              onLoad={() => handleImageLoad("Blue Lagoon")}
              loading="lazy"
            />
          </div>

          <div className={`${styles.nextText} ${styles.menuTitle}`}>
            <h3>Black Mojito</h3>
            <p>A classic mojito with a hint of bold flavors.</p>
            <h4>330AF</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
