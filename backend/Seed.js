import mongoose from "mongoose";
import dotenv from "dotenv";
import Food from "./models/foodModels.js";

dotenv.config(); 

export const food_list = [

/* ---------------- SALAD (1–10) ---------------- */
{ id: '1', name: 'Fresh Garden Salad', image: 'salad_1', price: 850, description: 'Crisp lettuce with fresh vegetables and light dressing.', category: 'Salad', rating: 4 },
{ id: '2', name: 'Greek Salad', image: 'salad_2', price: 900, description: 'Olives, feta cheese, cucumber and tomato mix.', category: 'Salad', rating: 5 },
{ id: '3', name: 'Caesar Salad', image: 'salad_3', price: 950, description: 'Classic Caesar with creamy dressing and croutons.', category: 'Salad', rating: 3 },
{ id: '4', name: 'Avocado Salad', image: 'salad_4', price: 1000, description: 'Healthy avocado with greens and lemon drizzle.', category: 'Salad', rating: 4 },
{ id: '5', name: 'Fruit Salad', image: 'salad_5', price: 800, description: 'Seasonal fresh fruits with honey glaze.', category: 'Salad', rating: 5 },
{ id: '6', name: 'Chicken Salad', image: 'salad_6', price: 1100, description: 'Grilled chicken tossed with crunchy vegetables.', category: 'Salad', rating: 4 },
{ id: '7', name: 'Pasta Salad', image: 'salad_7', price: 900, description: 'Cold pasta with creamy dressing and herbs.', category: 'Salad', rating: 5 },
{ id: '8', name: 'Coleslaw Salad', image: 'salad_8', price: 750, description: 'Shredded cabbage with creamy mayo dressing.', category: 'Salad', rating: 5 },
{ id: '9', name: 'Quinoa Salad', image: 'salad_9', price: 1050, description: 'Protein-rich quinoa with mixed vegetables.', category: 'Salad', rating: 5 },
{ id: '10', name: 'Spicy Mix Salad', image: 'salad_10', price: 950, description: 'Zesty vegetables with spicy dressing.', category: 'Salad', rating: 4 },

/* ---------------- BIRYANI (11–20) ---------------- */
{ id: '11', name: 'Chicken Biryani', image: 'biryani_1', price: 1200, description: 'Traditional aromatic rice with tender chicken.', category: 'Biryani', rating: 5 },
{ id: '12', name: 'Beef Biryani', image: 'biryani_2', price: 1350, description: 'Spicy beef cooked with fragrant basmati rice.', category: 'Biryani', rating: 4 },
{ id: '13', name: 'Sindhi Biryani', image: 'biryani_3', price: 1250, description: 'Authentic Sindhi style with potatoes and spices.', category: 'Biryani', rating: 4 },
{ id: '14', name: 'Hyderabadi Biryani', image: 'biryani_4', price: 1400, description: 'Layered dum biryani with rich flavors.', category: 'Biryani', rating: 5 },
{ id: '15', name: 'BBQ Biryani', image: 'biryani_5', price: 1450, description: 'Smoky BBQ chicken served over biryani rice.', category: 'Biryani', rating: 4 },
{ id: '16', name: 'Mutton Biryani', image: 'biryani_6', price: 1600, description: 'Slow cooked mutton with spicy rice.', category: 'Biryani', rating: 5 },
{ id: '17', name: 'White Biryani', image: 'biryani_7', price: 1150, description: 'Creamy mild flavored biryani.', category: 'Biryani', rating: 3 },
{ id: '18', name: 'Veg Biryani', image: 'biryani_8', price: 950, description: 'Mixed vegetables cooked with aromatic rice.', category: 'Biryani', rating: 4 },
{ id: '19', name: 'Special Biryani', image: 'biryani_9', price: 1700, description: 'Chef special biryani with premium ingredients.', category: 'Biryani', rating: 5 },
{ id: '20', name: 'Spicy Chicken Biryani', image: 'biryani_10', price: 1300, description: 'Extra spicy version for spice lovers.', category: 'Biryani', rating: 4 },

/* ---------------- SANDWICH (21–30) ---------------- */
{ id: '21', name: 'Club Sandwich', image: 'sandwhich_1', price: 750, description: 'Triple layered sandwich with chicken and veggies.', category: 'Sandwhich', rating: 4 },
{ id: '22', name: 'Grilled Cheese', image: 'sandwhich_2', price: 650, description: 'Golden toasted bread with melted cheese.', category: 'Sandwhich', rating: 5 },
{ id: '23', name: 'Chicken Sandwich', image: 'sandwhich_3', price: 800, description: 'Grilled chicken with fresh lettuce and mayo.', category: 'Sandwhich', rating: 4 },
{ id: '24', name: 'BBQ Sandwich', image: 'sandwhich_4', price: 850, description: 'Smoky BBQ chicken inside toasted bread.', category: 'Sandwhich', rating: 5 },
{ id: '25', name: 'Veg Sandwich', image: 'sandwhich_5', price: 600, description: 'Fresh vegetables layered with creamy spread.', category: 'Sandwhich', rating: 4 },
{ id: '26', name: 'Egg Sandwich', image: 'sandwhich_6', price: 550, description: 'Soft boiled egg filling with herbs.', category: 'Sandwhich', rating: 3 },
{ id: '27', name: 'Tuna Sandwich', image: 'sandwhich_7', price: 900, description: 'Fresh tuna mixed with mayo and spices.', category: 'Sandwhich', rating: 5 },
{ id: '28', name: 'Spicy Chicken Sandwich', image: 'sandwhich_8', price: 850, description: 'Crispy chicken with spicy sauce.', category: 'Sandwhich', rating: 4 },
{ id: '29', name: 'Loaded Sandwich', image: 'sandwhich_9', price: 950, description: 'Stuffed with cheese, meat and veggies.', category: 'Sandwhich', rating: 5 },
{ id: '30', name: 'Classic Sandwich', image: 'sandwhich_10', price: 700, description: 'Simple and delicious traditional sandwich.', category: 'Sandwhich', rating: 4 },

/* ---------------- ROLL (31–40) ---------------- */
{ id: '31', name: 'Chicken Roll', image: 'roll_1', price: 500, description: 'Paratha roll stuffed with spicy chicken.', category: 'Roll', rating: 4 },
{ id: '32', name: 'Beef Roll', image: 'roll_2', price: 550, description: 'Tender beef wrapped in soft paratha.', category: 'Roll', rating: 4 },
{ id: '33', name: 'BBQ Roll', image: 'roll_3', price: 600, description: 'Smoky BBQ chunks wrapped with sauce.', category: 'Roll', rating: 5 },
{ id: '34', name: 'Zinger Roll', image: 'roll_4', price: 650, description: 'Crispy zinger with creamy dressing.', category: 'Roll', rating: 4 },
{ id: '35', name: 'Veg Roll', image: 'roll_5', price: 450, description: 'Fresh vegetables with tangy sauce.', category: 'Roll', rating: 3 },
{ id: '36', name: 'Malai Roll', image: 'roll_6', price: 700, description: 'Creamy malai chicken filling.', category: 'Roll', rating: 4 },
{ id: '37', name: 'Cheese Roll', image: 'roll_7', price: 750, description: 'Loaded with melted cheese and chicken.', category: 'Roll', rating: 5 },
{ id: '38', name: 'Spicy Roll', image: 'roll_8', price: 600, description: 'Extra spicy filling for spice lovers.', category: 'Roll', rating: 4 },
{ id: '39', name: 'Double Chicken Roll', image: 'roll_9', price: 800, description: 'Double portion of juicy chicken.', category: 'Roll', rating: 5 },
{ id: '40', name: 'Special Roll', image: 'roll_10', price: 850, description: 'Chef special loaded roll.', category: 'Roll', rating: 4 },

/* ---------------- PLATTER (41–50) ---------------- */
{ id: '41', name: 'BBQ Platter', image: 'platter_1', price: 2500, description: 'Mixed BBQ with naan and sauces.', category: 'Platter', rating: 5 },
{ id: '42', name: 'Family Platter', image: 'platter_2', price: 4000, description: 'Large platter perfect for sharing.', category: 'Platter', rating: 5 },
{ id: '43', name: 'Chicken Platter', image: 'platter_3', price: 2200, description: 'Grilled chicken served with rice.', category: 'Platter', rating: 4 },
{ id: '44', name: 'Beef Platter', image: 'platter_4', price: 2600, description: 'Juicy beef pieces with sides.', category: 'Platter', rating: 4 },
{ id: '45', name: 'Seafood Platter', image: 'platter_5', price: 3500, description: 'Fresh seafood assortment.', category: 'Platter', rating: 5 },
{ id: '46', name: 'Mixed Platter', image: 'platter_6', price: 3000, description: 'Combination of chicken and beef.', category: 'Platter', rating: 4 },
{ id: '47', name: 'Spicy Platter', image: 'platter_7', price: 2800, description: 'Spicy grilled assortment.', category: 'Platter', rating: 4 },
{ id: '48', name: 'Executive Platter', image: 'platter_8', price: 3200, description: 'Premium selection platter.', category: 'Platter', rating: 5 },
{ id: '49', name: 'Royal Platter', image: 'platter_9', price: 4500, description: 'Luxury platter with premium meats.', category: 'Platter', rating: 5 },
{ id: '50', name: 'Special Platter', image: 'platter_10', price: 3700, description: 'Chef curated platter.', category: 'Platter', rating: 4 },

/* ---------------- PIZZA (51–60) ---------------- */
{ id: '51', name: 'Margherita Pizza', image: 'pizza_1', price: 1200, description: 'Classic cheese and tomato pizza.', category: 'Pizza', rating: 5 },
{ id: '52', name: 'Pepperoni Pizza', image: 'pizza_2', price: 1500, description: 'Loaded with spicy pepperoni slices.', category: 'Pizza', rating: 4 },
{ id: '53', name: 'BBQ Chicken Pizza', image: 'pizza_3', price: 1600, description: 'BBQ chicken with mozzarella cheese.', category: 'Pizza', rating: 5 },
{ id: '54', name: 'Veggie Pizza', image: 'pizza_4', price: 1300, description: 'Topped with fresh vegetables.', category: 'Pizza', rating: 4 },
{ id: '55', name: 'Cheese Lovers Pizza', image: 'pizza_5', price: 1700, description: 'Extra loaded with multiple cheeses.', category: 'Pizza', rating: 5 },
{ id: '56', name: 'Fajita Pizza', image: 'pizza_6', price: 1550, description: 'Spicy fajita topping with capsicum.', category: 'Pizza', rating: 4 },
{ id: '57', name: 'Supreme Pizza', image: 'pizza_7', price: 1800, description: 'Fully loaded supreme pizza.', category: 'Pizza', rating: 5 },
{ id: '58', name: 'Malai Boti Pizza', image: 'pizza_8', price: 1650, description: 'Creamy malai boti topping.', category: 'Pizza', rating: 4 },
{ id: '59', name: 'Stuffed Crust Pizza', image: 'pizza_9', price: 1900, description: 'Cheese stuffed crust delight.', category: 'Pizza', rating: 5 },
{ id: '60', name: 'Special Pizza', image: 'pizza_10', price: 2000, description: 'Chef special premium pizza.', category: 'Pizza', rating: 5 },

/* ---------------- DESSERT (61–70) ---------------- */
{ id: '61', name: 'Chocolate Cake', image: 'dessert_1', price: 650, description: 'Rich and moist chocolate cake.', category: 'Dessert', rating: 5 },
{ id: '62', name: 'Brownie', image: 'dessert_2', price: 550, description: 'Soft chocolate brownie with fudge.', category: 'Dessert', rating: 4 },
{ id: '63', name: 'Ice Cream', image: 'dessert_3', price: 450, description: 'Creamy vanilla ice cream.', category: 'Dessert', rating: 4 },
{ id: '64', name: 'Cheesecake', image: 'dessert_4', price: 700, description: 'Smooth and creamy cheesecake.', category: 'Dessert', rating: 5 },
{ id: '65', name: 'Gulab Jamun', image: 'dessert_5', price: 400, description: 'Sweet syrup soaked dumplings.', category: 'Dessert', rating: 4 },
{ id: '66', name: 'Kheer', image: 'dessert_6', price: 350, description: 'Traditional rice pudding dessert.', category: 'Dessert', rating: 3 },
{ id: '67', name: 'Lava Cake', image: 'dessert_7', price: 750, description: 'Chocolate cake with molten center.', category: 'Dessert', rating: 5 },
{ id: '68', name: 'Fruit Trifle', image: 'dessert_8', price: 500, description: 'Layered dessert with fruits and cream.', category: 'Dessert', rating: 4 },
{ id: '69', name: 'Donut', image: 'dessert_9', price: 300, description: 'Soft glazed sweet donut.', category: 'Dessert', rating: 3 },
{ id: '70', name: 'Special Dessert', image: 'dessert_10', price: 800, description: 'Chef special sweet creation.', category: 'Dessert', rating: 5 },

/* ---------------- BURGER (71–80) ---------------- */
{ id: '71', name: 'Zinger Burger', image: 'burger_1', price: 750, description: 'Crispy zinger with mayo sauce.', category: 'Burger', rating: 4 },
{ id: '72', name: 'Beef Burger', image: 'burger_2', price: 850, description: 'Juicy beef patty with cheese.', category: 'Burger', rating: 5 },
{ id: '73', name: 'Chicken Burger', image: 'burger_3', price: 800, description: 'Grilled chicken with fresh lettuce.', category: 'Burger', rating: 4 },
{ id: '74', name: 'BBQ Burger', image: 'burger_4', price: 900, description: 'Smoky BBQ flavor burger.', category: 'Burger', rating: 5 },
{ id: '75', name: 'Double Patty Burger', image: 'burger_5', price: 1100, description: 'Double meat loaded burger.', category: 'Burger', rating: 5 },
{ id: '76', name: 'Cheese Burger', image: 'burger_6', price: 850, description: 'Classic burger with melted cheese.', category: 'Burger', rating: 4 },
{ id: '77', name: 'Spicy Burger', image: 'burger_7', price: 900, description: 'Hot and spicy chicken patty.', category: 'Burger', rating: 4 },
{ id: '78', name: 'Tower Burger', image: 'burger_8', price: 1200, description: 'Multi-layer stacked burger.', category: 'Burger', rating: 5 },
{ id: '79', name: 'Veg Burger', image: 'burger_9', price: 700, description: 'Crispy veggie patty burger.', category: 'Burger', rating: 4 },
{ id: '80', name: 'Special Burger', image: 'burger_10', price: 1300, description: 'Chef special premium burger.', category: 'Burger', rating: 5 },

]

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");

    await Food.deleteMany();
    await Food.insertMany(food_list);

    console.log("All products inserted!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();