import { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";

const beveragesList = [
  {
    menuName: "Mocktails",
    foods: [
      {
        foodName: "Blue Lagoon",
        img: "./bevereage-api-1.webp",
        price: "380Af",
        review: 4,
      },
      {
        foodName: "Classic Lemonada",
        img: "./bevereage-api-3.webp",
        price: "180Af",
        review: 5,
      },
      {
        foodName: "Classic Mojito",
        img: "./bevereage-api-4.webp",
        price: "370Af",
        review: 0,
      },
      {
        foodName: "Orange Mojito",
        img: "./bevereage-api-5.webp",
        price: "370Af",
        review: 0,
      },
      {
        foodName: "Virgin Mojito",
        img: "./bevereage-api-6.webp",
        price: "350Af",
        review: 0,
      },
    ],
  },
  {
    menuName: "Shakes",
    foods: [
      {
        foodName: "Chocolate Shake",
        img: "./bevereage-api-2.webp",
        price: "320Af",
        review: 5,
      },
    ],
  },
];

function Menu() {
  const [menuList, setMenuList] = useState([
    {
      menuName: "Ziafat Breakfast",
      foods: [
        {
          foodName: "Breakfast Set",
          description:
            "Condiments breakfast, cheese platter, fresh vegetables, home made qaimaq, Italian vegetable, pratha with pastirma, egg with tomato, sunny side egg, bread basket, black tea.",
          img: "imgs/api-menu-1.webp",
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
          img: "imgs/api-menu-2.webp",
          price: "300Af",
          ingredients: ["Dairy", "Cheese", "Halal"],
          review: 4.2,
        },
        {
          foodName: "Breakfast Karahi",
          description:
            "Tender beef with lamb fat, caramelized onion, garlic, tomato, served with organic egg.",
          img: "imgs/api-menu-3.webp",
          price: "350Af",
          ingredients: ["Egg", "Garlic", "Onion", "Halal"],
          review: 5,
        },
        {
          foodName: "Lamb Liver",
          description: "Fresh lamb liver with tomato sauce",
          img: "imgs/api-menu-4.webp",
          price: "300Af",
          ingredients: ["Spicy", "Garlic", "Halal "],
          review: 3.5,
        },
        {
          foodName: "Cheese Omeletta",
          description:
            "Egg, cheese and mix bell pepper, served with fresh salad",
          img: "imgs/api-menu-5.webp",
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
          img: "imgs/api-menu-6.webp",
          price: "250Af",
          review: 0,
        },
        {
          foodName: "Ziafat Special Soup",
          img: "imgs/api-menu-7.webp",
          price: "720Af",
          ingredients: ["Dairy", "Cheese", "Halal"],
          review: 4.2,
        },
      ],
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuList = async () => {
      try {
        const response = await fetch(
          "https://my-node-api-2.onrender.com/recipes"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setMenuList(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuList();
  }, []); // Empty dependency array means this runs once when the component mounts

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
        <motion.div
          className={`${styles.heading} heading`}
          initial={{ opacity: 0, scale: 1, translateY: "80px" }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>Foods</span>
          <h2>MENU</h2>
        </motion.div>

        <motion.div
          className={styles.menuBox}
          initial={{ opacity: 0, scale: 1, translateY: "80px" }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={styles.menuOption}
            initial={{ opacity: 0, scale: 1, translateY: "80px" }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.menuOptionDiv}>
              {menuList.map((list) => (
                <motion.button
                  key={list.menuName}
                  initial={{ opacity: 0, scale: 1, translateY: "80px" }}
                  whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`${styles.menuOptionBtn} ${
                    menuListActive === list.menuName ? styles.activeMenu : ""
                  }`}
                  onClick={() => setMenuListActive(list.menuName)}
                >
                  {list.menuName}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <motion.div
              className={styles.menuBoxS}
              initial={{ opacity: 0, scale: 1, translateY: "80px" }}
              whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              {itemListActive.length > 0 ? (
                itemListActive.map((list) => (
                  <div
                    key={list.foodName}
                    className={styles.menuCard}
                    style={{ position: "relative" }}
                  >
                    <img
                      src="./lazy-vdeo-img.png"
                      style={{ position: "absolute", zIndex: "1" }}
                    />

                    <img
                      src={`https://my-node-api-2.onrender.com/${list.img.slice(
                        4
                      )}`}
                      onerror="this.onerror=null; this.src='./lazy-vdeo-img.png';"
                      alt={list.foodName}
                      style={{ zIndex: "2", position: "relative" }}
                    />
                    <div className={styles.layer} style={{ zIndex: "3" }}>
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
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className={styles.menuBox}
          initial={{ opacity: 0, scale: 1, translateY: "80px" }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={styles.menuOption}
            initial={{ opacity: 0, scale: 1, translateY: "80px" }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.menuOptionDiv}>
              {beveragesList.map((list) => (
                <motion.button
                  key={list.menuName}
                  className={`${styles.menuOptionBtn} ${
                    beveragesListActive === list.menuName
                      ? styles.activeMenu
                      : ""
                  }`}
                  onClick={() => setBeveragesListActive(list.menuName)}
                >
                  {list.menuName}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.menuBoxS}
            initial={{ opacity: 0, scale: 1, translateY: "80px" }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            {itemBeveragesListActive.length > 0 ? (
              itemBeveragesListActive.map((list) => (
                <div key={list.foodName} className={styles.menuCard}>
                  <img src={list.img} alt={list.foodName} />
                  <div className={styles.layer}>
                    <h3>{list.foodName}</h3>
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Menu;
