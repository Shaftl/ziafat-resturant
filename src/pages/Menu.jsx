import { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";

const URL = "https://my-node-api-2.onrender.com/recipes";

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
        description: "Egg, cheese and mix bell pepper, served with fresh salad",
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
        img: "./api-menu-6.webp",
        price: "250Af",
        review: 0,
      },
      {
        foodName: "Ziafat Special Soup",
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
        foodName: "Dynamite Shrimp",
        description: "With satay sauce",
        img: "./api-menu-11.webp",
        price: "350Af",
        review: 0,
      },
      {
        foodName: "Tandori Samosa",
        description:
          "Small cups tomato,cucumber,onion,parsley pcs of walnuts, pomegranate seeds lemon olive oil pomegranate dressing",
        img: "./api-menu-12.webp",
        price: "150Af",
        review: 0,
      },
    ],
  },
  {
    menuName: "Mughlai Food",
    foods: [
      {
        foodName: "Chicken Biryani",
        description:
          "Aromatic basmati rice cooked with tender chicken pieces and traditional Mughlai spices.",
        img: "./mughlai-chicken-biryani.webp",
        price: "500Af",
        ingredients: ["Chicken", "Rice", "Spices", "Halal"],
        review: 4.5,
      },
      {
        foodName: "Mutton Korma",
        description:
          "Slow-cooked mutton in a rich and creamy gravy made with yogurt and a blend of spices.",
        img: "./mughlai-mutton-korma.webp",
        price: "650Af",
        ingredients: ["Mutton", "Yogurt", "Spices", "Halal"],
        review: 4.7,
      },
    ],
  },
  {
    menuName: "Thai & Chinese",
    foods: [
      {
        foodName: "Pad Thai",
        description:
          "Stir-fried rice noodles with shrimp, tofu, eggs, and a tangy tamarind sauce.",
        img: "./thai-pad-thai.webp",
        price: "450Af",
        ingredients: ["Shrimp", "Noodles", "Peanuts", "Eggs"],
        review: 4.3,
      },
      {
        foodName: "Kung Pao Chicken",
        description:
          "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.",
        img: "./chinese-kung-pao-chicken.webp",
        price: "500Af",
        ingredients: ["Chicken", "Peanuts", "Chili Peppers", "Soy Sauce"],
        review: 4.6,
      },
    ],
  },
  {
    menuName: "Afghani Cuisine",
    foods: [
      {
        foodName: "Kabuli Pulao",
        description:
          "Traditional Afghan dish of steamed rice mixed with raisins, carrots, and lamb.",
        img: "./afghani-kabuli-pulao.webp",
        price: "550Af",
        ingredients: ["Lamb", "Rice", "Carrots", "Raisins", "Halal"],
        review: 4.8,
      },
      {
        foodName: "Mantu",
        description:
          "Steamed dumplings filled with spiced ground beef, topped with yogurt and tomato sauce.",
        img: "./afghani-mantu.webp",
        price: "400Af",
        ingredients: ["Beef", "Dough", "Yogurt", "Tomato Sauce", "Halal"],
        review: 4.5,
      },
    ],
  },
  {
    menuName: "Bar.B.Q",
    foods: [
      {
        foodName: "Grilled Lamb Chops",
        description:
          "Juicy lamb chops marinated in herbs and spices, grilled to perfection.",
        img: "./bbq-grilled-lamb-chops.webp",
        price: "700Af",
        ingredients: ["Lamb", "Herbs", "Spices", "Halal"],
        review: 4.9,
      },
      {
        foodName: "Chicken Seekh Kebab",
        description:
          "Minced chicken mixed with spices, molded onto skewers, and grilled.",
        img: "./bbq-chicken-seekh-kebab.webp",
        price: "450Af",
        ingredients: ["Chicken", "Spices", "Halal"],
        review: 4.6,
      },
    ],
  },
  {
    menuName: "International Cuisine",
    foods: [
      {
        foodName: "Beef Stroganoff",
        description:
          "Sautéed pieces of beef served in a sauce with smetana (sour cream), served over noodles.",
        img: "./international-beef-stroganoff.webp",
        price: "600Af",
        ingredients: ["Beef", "Sour Cream", "Mushrooms", "Onions", "Halal"],
        review: 4.4,
      },
      {
        foodName: "Chicken Alfredo Pasta",
        description:
          "Creamy Alfredo sauce tossed with fettuccine pasta and grilled chicken.",
        img: "./international-chicken-alfredo-pasta.webp",
        price: "500Af",
        ingredients: ["Chicken", "Pasta", "Cream", "Parmesan Cheese", "Halal"],
        review: 4.7,
      },
    ],
  },
  {
    menuName: "Sea Food",
    foods: [
      {
        foodName: "Grilled Salmon",
        description:
          "Fresh salmon fillet grilled and served with a lemon butter sauce.",
        img: "./seafood-grilled-salmon.webp",
        price: "800Af",
        ingredients: ["Salmon", "Lemon", "Butter"],
        review: 4.8,
      },
      {
        foodName: "Shrimp Scampi",
        description:
          "Succulent shrimp sautéed in garlic, butter, and white wine sauce, served over linguine.",
        img: "./seafood-shrimp-scampi.webp",
        price: "750Af",
        ingredients: ["Shrimp", "Garlic", "Butter", "White Wine"],
        review: 4.6,
      },
    ],
  },
  {
    menuName: "Burger",
    foods: [
      {
        foodName: "Classic Beef Burger",
        description:
          "Juicy beef patty with lettuce, tomato, cheese, and our special sauce.",
        img: "./burger-classic-beef.webp",
        price: "400Af",
        ingredients: ["Beef", "Lettuce", "Tomato", "Cheese"],
      },
      {
        foodName: "Chicken Avocado Burger",
        description:
          "Grilled chicken breast topped with fresh avocado slices and spicy mayo.",
        img: "./burger-chicken-avocado.webp",
        price: "450Af",
        ingredients: ["Chicken", "Avocado", "Spicy Mayo", "Bun", "Halal"],
        review: 4.7,
      },
    ],
  },
  {
    menuName: "Italian Pizza & Pide",
    foods: [
      {
        foodName: "Margherita Pizza",
        description:
          "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
        img: "./pizza-margherita.webp",
        price: "500Af",
        ingredients: ["Mozzarella"],
        review: 4.7,
      },
      {
        foodName: "Pepperoni Pizza",
        description:
          "Classic pizza topped with mozzarella cheese and savory pepperoni slices.",
        img: "./pizza-pepperoni.webp",
        price: "550Af",
        ingredients: ["Mozzarella", "Pepperoni"],
        review: 4.6,
      },
      {
        foodName: "Veggie Pizza",
        description:
          "Pizza topped with mozzarella cheese, bell peppers, olives, onions, and mushrooms.",
        img: "./pizza-veggie.webp",
        price: "600Af",
        ingredients: [
          "Mozzarella",
          "Bell Peppers",
          "Olives",
          "Onions",
          "Mushrooms",
        ],
        review: 4.5,
      },
      {
        foodName: "Four Cheese Pizza",
        description:
          "A delightful pizza with mozzarella, cheddar, parmesan, and gouda cheeses.",
        img: "./pizza-four-cheese.webp",
        price: "650Af",
        ingredients: ["Mozzarella", "Cheddar", "Parmesan", "Gouda"],
        review: 4.8,
      },
      {
        foodName: "Meat Lovers Pizza",
        description:
          "Pizza topped with pepperoni, sausage, bacon, and ground beef, with mozzarella.",
        img: "./pizza-meat-lovers.webp",
        price: "700Af",
        ingredients: [
          "Pepperoni",
          "Sausage",
          "Bacon",
          "Ground Beef",
          "Mozzarella",
        ],
        review: 4.7,
      },
    ],
  },
  {
    menuName: "Deep Pan Pizza",
    foods: [
      {
        foodName: "Deep Pan Margherita",
        description:
          "Deep pan pizza with rich tomato sauce, mozzarella cheese, and fresh basil.",
        img: "./deep-pan-margherita.webp",
        price: "600Af",
        ingredients: ["Mozzarella", "Tomato Sauce", "Basil"],
        review: 4.8,
      },
      {
        foodName: "Deep Pan Pepperoni",
        description:
          "Deep pan pizza loaded with savory pepperoni and melted mozzarella cheese.",
        img: "./deep-pan-pepperoni.webp",
        price: "650Af",
        ingredients: ["Mozzarella", "Pepperoni"],
        review: 4.7,
      },
      {
        foodName: "Deep Pan Veggie",
        description:
          "Deep pan pizza with mozzarella cheese, bell peppers, onions, olives, and mushrooms.",
        img: "./deep-pan-veggie.webp",
        price: "700Af",
        ingredients: [
          "Mozzarella",
          "Bell Peppers",
          "Olives",
          "Onions",
          "Mushrooms",
        ],
        review: 4.6,
      },
      {
        foodName: "Deep Pan Meat Lovers",
        description:
          "Deep pan pizza topped with pepperoni, sausage, bacon, and ground beef.",
        img: "./deep-pan-meat-lovers.webp",
        price: "750Af",
        ingredients: [
          "Pepperoni",
          "Sausage",
          "Bacon",
          "Ground Beef",
          "Mozzarella",
        ],
        review: 4.9,
      },
      {
        foodName: "Deep Pan Hawaiian",
        description:
          "Deep pan pizza topped with pineapple, ham, and mozzarella cheese.",
        img: "./deep-pan-hawaiian.webp",
        price: "700Af",
        ingredients: ["Pineapple", "Ham", "Mozzarella"],
        review: 4.5,
      },
    ],
  },

  {
    menuName: "Kids Menu",
    foods: [
      {
        foodName: "Mini Burger",
        description: "Small beef patty with cheese and ketchup.",
        img: "./kids-mini-burger.webp",
        price: "250Af",
        ingredients: ["Beef", "Cheese", "Ketchup", "Bun"],
        review: 4.5,
      },
      {
        foodName: "Chicken Tenders",
        description: "Crispy fried chicken strips with honey mustard dip.",
        img: "./kids-chicken-tenders.webp",
        price: "300Af",
        ingredients: ["Chicken", "Breading", "Honey Mustard"],
        review: 4.2,
      },
      {
        foodName: "Mini Pizza",
        description: "Personal-sized pizza with cheese and tomato sauce.",
        img: "./kids-mini-pizza.webp",
        price: "280Af",
        ingredients: ["Cheese", "Tomato Sauce", "Basil"],
        review: 4.6,
      },
      {
        foodName: "Mac and Cheese",
        description: "Creamy macaroni and cheese topped with cheddar.",
        img: "./kids-mac-and-cheese.webp",
        price: "250Af",
        ingredients: ["Cheddar", "Macaroni", "Cream"],
        review: 4.5,
      },
    ],
  },
  {
    menuName: "Side Orders",
    foods: [
      {
        foodName: "Garlic Bread",
        description: "Crispy garlic bread with a buttery flavor.",
        img: "./side-garlic-bread.webp",
        price: "150Af",
        ingredients: ["Garlic", "Bread", "Butter"],
        review: 4.7,
      },
      {
        foodName: "French Fries",
        description: "Crispy golden fries with a light salt seasoning.",
        img: "./side-french-fries.webp",
        price: "100Af",
        ingredients: ["Potato", "Salt"],
        review: 4.6,
      },
      {
        foodName: "Onion Rings",
        description: "Crispy battered onion rings, served with ketchup.",
        img: "./side-onion-rings.webp",
        price: "200Af",
        ingredients: ["Onion", "Batter", "Ketchup"],
        review: 4.4,
      },
      {
        foodName: "Cheese Sticks",
        description:
          "Fried mozzarella cheese sticks served with marinara sauce.",
        img: "./side-cheese-sticks.webp",
        price: "220Af",
        ingredients: ["Mozzarella", "Batter", "Marinara Sauce"],
        review: 4.5,
      },
    ],
  },
  {
    menuName: "Naan",
    foods: [
      {
        foodName: "Butter Naan",
        description: "Soft naan bread topped with melted butter.",
        img: "./naan-butter.webp",
        price: "120Af",
        ingredients: ["Flour", "Butter"],
        review: 4.8,
      },
      {
        foodName: "Garlic Naan",
        description: "Naan bread with garlic flavor, soft and warm.",
        img: "./naan-garlic.webp",
        price: "130Af",
        ingredients: ["Flour", "Garlic"],
        review: 4.7,
      },
      {
        foodName: "Cheese Naan",
        description: "Naan filled with melted cheese.",
        img: "./naan-cheese.webp",
        price: "150Af",
        ingredients: ["Flour", "Cheese"],
        review: 4.6,
      },
      {
        foodName: "Keema Naan",
        description: "Naan stuffed with spiced minced meat.",
        img: "./naan-keema.webp",
        price: "180Af",
        ingredients: ["Flour", "Minced Meat", "Spices"],
        review: 4.5,
      },
    ],
  },
  {
    menuName: "Desserts",
    foods: [
      {
        foodName: "Baklava",
        description: "Sweet pastry filled with chopped nuts and honey syrup.",
        img: "./dessert-baklava.webp",
        price: "250Af",
        ingredients: ["Nuts", "Honey", "Flour"],
        review: 4.9,
      },
      {
        foodName: "Chocolate Cake",
        description:
          "Rich and moist chocolate cake with a creamy chocolate frosting.",
        img: "./dessert-chocolate-cake.webp",
        price: "300Af",
        ingredients: ["Flour", "Chocolate", "Eggs", "Butter"],
        review: 4.8,
      },
      {
        foodName: "Carrot Cake",
        description:
          "Moist cake with carrots, walnuts, and a cream cheese frosting.",
        img: "./dessert-carrot-cake.webp",
        price: "280Af",
        ingredients: ["Carrots", "Walnuts", "Cream Cheese"],
        review: 4.6,
      },
      {
        foodName: "Ice Cream Sundae",
        description:
          "Vanilla ice cream with chocolate syrup and whipped cream.",
        img: "./dessert-ice-cream-sundae.webp",
        price: "250Af",
        ingredients: ["Vanilla Ice Cream", "Chocolate Syrup", "Whipped Cream"],
        review: 4.7,
      },
    ],
  },
  {
    menuName: "Sheryakh & Ice Cream",
    foods: [
      {
        foodName: "Sheryakh",
        description: "Afghan-style milk-based ice cream with pistachios.",
        img: "./sheryakh-ice-cream.webp",
        price: "200Af",
        ingredients: ["Milk", "Pistachio", "Sugar"],
        review: 4.5,
      },
      {
        foodName: "Vanilla Ice Cream",
        description: "Classic vanilla ice cream made with fresh cream.",
        img: "./ice-cream-vanilla.webp",
        price: "150Af",
        ingredients: ["Cream", "Vanilla", "Sugar"],
        review: 4.6,
      },
      {
        foodName: "Chocolate Ice Cream",
        description: "Rich and creamy chocolate ice cream.",
        img: "./ice-cream-chocolate.webp",
        price: "150Af",
        ingredients: ["Cream", "Chocolate", "Sugar"],
        review: 4.7,
      },
      {
        foodName: "Pistachio Ice Cream",
        description: "Ice cream made with pistachio nuts and cream.",
        img: "./ice-cream-pistachio.webp",
        price: "180Af",
        ingredients: ["Pistachio", "Cream", "Sugar"],
        review: 4.8,
      },
    ],
  },
  {
    menuName: "Fruit Platter",
    foods: [
      {
        foodName: "Mixed Fruit Platter",
        description: "A fresh assortment of seasonal fruits.",
        img: "./fruit-platter.webp",
        price: "350Af",
        ingredients: ["Seasonal Fruits"],
        review: 4.7,
      },
      {
        foodName: "Tropical Fruit Platter",
        description:
          "A platter of tropical fruits like pineapple, mango, and papaya.",
        img: "./fruit-platter-tropical.webp",
        price: "400Af",
        ingredients: ["Pineapple", "Mango", "Papaya"],
        review: 4.8,
      },
      {
        foodName: "Berry Fruit Platter",
        description:
          "A refreshing platter of strawberries, blueberries, and raspberries.",
        img: "./fruit-platter-berry.webp",
        price: "380Af",
        ingredients: ["Strawberries", "Blueberries", "Raspberries"],
        review: 4.7,
      },
    ],
  },
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

          <motion.div
            className={styles.menuBoxS}
            initial={{ opacity: 0, scale: 1, translateY: "80px" }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            {itemListActive.length > 0 ? (
              itemListActive.map((list) => (
                <div key={list.foodName} className={styles.menuCard}>
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
          </motion.div>
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
