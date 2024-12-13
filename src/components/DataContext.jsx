import React, { createContext, useEffect, useState } from 'react';

// Create a Context
export const DataContext = createContext();


// Categories Array
const categories = ['Electronics', 'Furniture', 'Utilities', 'Food', 'Art', 'Photography', 'Transport', 'Education'];

// Subcategories Array with Descriptions
const subCategories = [
  { category: 'Electronics', name: 'Cheap Phones', description: 'Brand new phones below 500K' },
  { category: 'Electronics', name: 'Phone Accessories', description: 'Phone accessories like chargers, earphones, etc.' },
  { category: 'Electronics', name: 'Fitness Equipment', description: 'Affordable gym equipment for home and professional use' },
  { category: 'Furniture', name: 'Affordable Furniture', description: 'Cheap but durable furniture for homes and offices' },
  { category: 'Furniture', name: 'Quality Furniture', description: 'Modern kitchen redesigns with high-quality finishes' },
  { category: 'Furniture', name: 'Quality Furniture', description: 'Modern kitchen redesigns with high-quality finishes' },
  { category: 'Furniture', name: 'Modern Kitchen', description: 'Modern Kitchenware and Utencils' },
  { category: 'Clothing', name: 'Fashionable Shoes', description: 'Casual and formal shoes for all occasions' },
  { category: 'Groceries', name: 'Organic Groceries', description: 'Fresh, organic vegetables and grains' },
  { category: 'Home Appliances', name: 'Kitchenware', description: 'Cooking utensils and tools' },
  { category: 'Childcare', name: 'Affordable Childcare Services', description: 'Reliable daycare services with flexible options' },
  { category: 'Utilities', name: 'Solar Power Systems', description: 'Complete solar setups, including batteries and installation' },
  { category: 'Utilities', name: 'Reliable Internet Provider', description: 'Affordable and dependable internet solutions' },
  { category: 'Photography', name: 'Professional Photography', description: 'Event photography with high-quality results' },
  { category: 'Transport', name: 'Electric Bikes', description: 'Affordable and durable electric bikes' },
  { category: 'Education', name: 'Tutorial Services', description: 'Online classes with experienced instructors' },
  { category: 'Food', name: 'Healthy Meal Deliveries', description: 'Daily delivery of fresh and balanced meals' },
  { category: 'Art', name: 'Local Art Pieces', description: 'Handcrafted art pieces, including paintings and carvings' }
];



const locations = ['Kampala', 'Entebbe', 'Jinja', 'Mbale', 'Mukono'];

const itemsArray = [
  {
    id: 1,
    owner: ["Blaise", "Tom"],
    sub_category: "Modern Kitchen",
    location: "Mukono",
    details: "Brand new kitchenware of good quality like cutlery, racks, and kitchen appliances, preferably not made in China."
  },
  {
    id: 2,
    owner: ["Tom", "Eddy"],
    sub_category: "Cheap Phones",
    location: "Kampala",
    details: "Brand new phones only, no used phones. These can be of any brand but obviously not flagships. Good quality is a bonus but not a requirement."
  },
  {
    id: 3,
    owner: ["Alice", "James"],
    sub_category: "Phone Accessories",
    location: "Entebbe",
    details: "High-quality accessories like fast chargers, wireless earphones, and protective cases."
  },
  {
    id: 4,
    owner: ["Sarah", "Mark"],
    sub_category: "Fitness Equipment",
    location: "Jinja",
    details: "Lightweight and durable home workout kits, including dumbbells and resistance bands."
  },
  {
    id: 5,
    owner: ["Mary", "Joseph"],
    sub_category: "Affordable Furniture",
    location: "Mbale",
    details: "Durable tables and chairs suitable for small apartments or offices."
  },
  {
    id: 6,
    owner: ["Helen", "Andrew"],
    sub_category: "Quality Furniture",
    location: "Gulu",
    details: "Luxury sofas and coffee tables with a modern touch, perfect for large living spaces."
  },
  {
    id: 7,
    owner: ["David", "Sandra"],
    sub_category: "Fashionable Shoes",
    location: "Kampala",
    details: "Stylish sneakers and formal shoes available in multiple sizes and colors."
  },
  {
    id: 8,
    owner: ["Brian", "Zoe"],
    sub_category: "Organic Groceries",
    location: "Fort Portal",
    details: "Locally grown fruits and vegetables delivered fresh every morning."
  },
  {
    id: 9,
    owner: ["Emily", "Patrick"],
    sub_category: "Kitchenware",
    location: "Lira",
    details: "Non-stick pans, durable knives, and multi-purpose cooking tools."
  },
  {
    id: 10,
    owner: ["Grace", "Chris"],
    sub_category: "Affordable Childcare Services",
    location: "Kampala",
    details: "Daycare centers with experienced nannies and child-friendly environments."
  },
  {
    id: 11,
    owner: ["Henry", "Sophia"],
    sub_category: "Solar Power Systems",
    location: "Masaka",
    details: "Cost-effective solar panel setups, including high-capacity batteries."
  },
  {
    id: 12,
    owner: ["Kevin", "Paula"],
    sub_category: "Reliable Internet Provider",
    location: "Mbarara",
    details: "Affordable fiber internet solutions for homes and small businesses."
  },
  {
    id: 13,
    owner: ["Simon", "Fiona"],
    sub_category: "Professional Photography",
    location: "Kampala",
    details: "Event photography services, including weddings and corporate functions."
  },
  {
    id: 14,
    owner: ["Victor", "Anna"],
    sub_category: "Electric Bikes",
    location: "Jinja",
    details: "Eco-friendly bikes suitable for city commutes, equipped with long-lasting batteries."
  },
  {
    id: 15,
    owner: ["Liam", "Diana"],
    sub_category: "Tutorial Services",
    location: "Kampala",
    details: "Personalized online and in-person lessons in mathematics and science."
  },
  {
    id: 16,
    owner: ["Ella", "Tom"],
    sub_category: "Healthy Meal Deliveries",
    location: "Entebbe",
    details: "Daily meal plans with vegetarian and low-carb options available."
  },
  {
    id: 17,
    owner: ["Luke", "Kate"],
    sub_category: "Local Art Pieces",
    location: "Fort Portal",
    details: "Unique handcrafted sculptures and traditional paintings by local artisans."
  },
  {
    id: 18,
    owner: ["Olivia", "Sam"],
    sub_category: "Quality Furniture",
    location: "Arua",
    details: "Elegant dining sets crafted from premium hardwood."
  },
  {
    id: 19,
    owner: ["Irene", "Carl"],
    sub_category: "Fitness Equipment",
    location: "Kampala",
    details: "Treadmills and stationary bikes available at affordable prices."
  },
  {
    id: 20,
    owner: ["Max", "Linda"],
    sub_category: "Phone Accessories",
    location: "Gulu",
    details: "Power banks and durable USB-C cables with fast charging capability."
  },
  {
    id: 21,
    owner: ["Leo", "Nina"],
    sub_category: "Modern Kitchen",
    location: "Kampala",
    details: "High-quality stainless steel kitchenware for professional chefs."
  },
  {
    id: 22,
    owner: ["Hannah", "George"],
    sub_category: "Solar Power Systems",
    location: "Tororo",
    details: "Compact solar kits suitable for rural households."
  },
  {
    id: 23,
    owner: ["Rachel", "Mark"],
    sub_category: "Organic Groceries",
    location: "Kasese",
    details: "Organic dairy products from trusted local farmers."
  },
  {
    id: 24,
    owner: ["Paul", "Cynthia"],
    sub_category: "Healthy Meal Deliveries",
    location: "Kampala",
    details: "Affordable family-sized meal plans delivered on time."
  },
  {
    id: 25,
    owner: ["Moses", "Jane"],
    sub_category: "Electric Bikes",
    location: "Mbale",
    details: "Durable bikes with spare parts readily available."
  },
  {
    id: 26,
    owner: ["Evelyn", "Peter"],
    sub_category: "Professional Photography",
    location: "Masindi",
    details: "Affordable photo and video coverage for outdoor events."
  },
  {
    id: 27,
    owner: ["Noah", "Sophia"],
    sub_category: "Affordable Furniture",
    location: "Hoima",
    details: "Compact storage solutions and space-saving furniture."
  },
  {
    id: 28,
    owner: ["Brenda", "Adam"],
    sub_category: "Fashionable Shoes",
    location: "Mbarara",
    details: "Trendy sandals and boots for casual outings."
  },
  {
    id: 29,
    owner: ["Victor", "Leah"],
    sub_category: "Tutorial Services",
    location: "Mukono",
    details: "Affordable group classes in coding and programming."
  },
  {
    id: 30,
    owner: ["Sylvia", "David"],
    sub_category: "Local Art Pieces",
    location: "Kampala",
    details: "Limited-edition paintings inspired by Ugandan wildlife."
  }
];


const users = [
  {
    name: 'Current User',
    stars: 10,
    handshakes: 5
  },
  {
    name: 'Mark',
    stars: 11,
    handshakes: 15    
  }
]

const shops = [
  {
    id: 1,
    name: "Blaise Shop",
    provider: "Mary",
    location: ["Kampala", "Mukono"],
    red_flags: ['Joy', 'Enoch'],
    contacts: "12345673456",
    email: "blaise@gmail.com",
    catalogue: "www.blaiseshop.com",
    subcategory: "Cheap Phones",
    alternatives: [2],
    endorsers: ["John", "Mary"],
    comments: [
      { comment: "This shop closes at 7pm", date: "01/01/24", owner: "Mary", agreements: ["John"] },
      { comment: "This shop has no deliveries", date: "12/07/23", owner: "Martin", agreements: ["Kate"] }
    ]
  },
  {
    id: 2,
    name: "Ben's Electronics Shop",
    provider: "John",
    location: ["Kampala"],
    red_flags: ['Joy', 'Enoch'],
    contacts: "987345673456",
    email: "benshop@gmail.com",
    catalogue: "View Catalogue at www.benshop.com.",
    subcategory: "Cheap Phones",
    alternatives: [],
    endorsers: ["Mat", "Mary", "Bob"],
    comments: [
      { comment: "This shop sells only refurbished items", date: "12/06/23", owner: "John", agreements: ["Martin"] },
      { comment: "Take your Old gadgets to get a discount", date: "11/11/23", owner: "Martin", agreements: ["John", "Martha", "Bob"] }
    ]
  },
  {
    id: 3,
    name: "Quality Home Furnishings",
    provider: "Sarah",
    location: ["Jinja"],
    red_flags: ['Peter'],
    contacts: "456789123",
    email: "furnishings@gmail.com",
    catalogue: "www.qualityfurnishings.com",
    subcategory: "Quality Furniture",
    alternatives: [],
    endorsers: ["Alice"],
    comments: [
      { comment: "Highly recommended for premium furniture", date: "10/10/23", owner: "Sarah", agreements: ["Alice", "Tom"] },
      { comment: "Expensive but worth it", date: "09/09/23", owner: "Alice", agreements: ["Tom", "Peter", "Zoe"] }
    ]
  },
  {
    id: 4,
    name: "Tech Gear",
    provider: "Brian",
    location: ["Mbale", "Kampala"],
    red_flags: ['Michael'],
    contacts: "567890123",
    email: "techgear@gmail.com",
    catalogue: "www.techgear.com",
    subcategory: "Phone Accessories",
    alternatives: [5],
    endorsers: ["Sophie", "Kevin"],
    comments: [
      { comment: "Limited stock for some items", date: "05/05/23", owner: "Brian", agreements: ["Sophie"] },
      { comment: "Affordable prices for quality products", date: "04/04/23", owner: "Sophie", agreements: ["Brian", "Kevin"] }
    ]
  },
  {
    id: 5,
    name: "FitLife Store",
    provider: "Tom",
    location: ["Kampala"],
    red_flags: ['Joy', 'Enoch'],
    contacts: "789012345",
    email: "fitlife@gmail.com",
    catalogue: "www.fitlife.com",
    subcategory: "Fitness Equipment",
    alternatives: [4],
    endorsers: ["John", "Mary"],
    comments: [
      { comment: "Great discounts on gym equipment", date: "07/07/23", owner: "Tom", agreements: ["Mary"] },
      { comment: "Delivery takes too long", date: "08/08/23", owner: "Mark", agreements: ["John", "Mary", "Kevin"] },
      { comment: "Best quality in the area", date: "09/09/23", owner: "Alice", agreements: ["Mark", "Kevin"] }
    ]
  },
  {
    id: 6,
    name: "EcoBikes",
    provider: "Victor",
    location: ["Jinja"],
    red_flags: ['Nancy'],
    contacts: "345678901",
    email: "ecobikes@gmail.com",
    catalogue: "www.ecobikes.com",
    subcategory: "Electric Bikes",
    alternatives: [],
    endorsers: ["Olivia", "James"],
    comments: [
      { comment: "Efficient and durable bikes", date: "06/06/23", owner: "Victor", agreements: ["Olivia", "James"] },
      { comment: "Needs better customer service", date: "05/05/23", owner: "James", agreements: ["Victor"] }
    ]
  },
  {
    id: 7,
    name: "Artisans' Haven",
    provider: "Emma",
    location: ["Fort Portal"],
    red_flags: [],
    contacts: "123987456",
    email: "artisans@gmail.com",
    catalogue: "www.artisanshaven.com",
    subcategory: "Local Art Pieces",
    alternatives: [],
    endorsers: ["Sophia", "Luke"],
    comments: [
      { comment: "Beautiful handcrafted pieces", date: "04/04/23", owner: "Emma", agreements: ["Sophia", "Luke"] },
      { comment: "Prices are negotiable", date: "03/03/23", owner: "Luke", agreements: ["Sophia", "Emma"] }
    ]
  },
  {
    id: 8,
    name: "Organic Fresh Market",
    provider: "Rachel",
    location: ["Kampala", "Mbarara"],
    red_flags: ['Helen'],
    contacts: "654321098",
    email: "organicfresh@gmail.com",
    catalogue: "www.organicfresh.com",
    subcategory: "Organic Groceries",
    alternatives: [],
    endorsers: ["Tom", "Nina"],
    comments: [
      { comment: "Fresh vegetables every day", date: "02/02/23", owner: "Rachel", agreements: ["Tom", "Nina"] },
      { comment: "Delivery times are inconsistent", date: "01/01/23", owner: "Nina", agreements: ["Rachel", "Tom"] }
    ]
  },
  {
    id: 9,
    name: "Tech Accessories Hub",
    provider: "Moses",
    location: ["Gulu"],
    red_flags: ['Grace'],
    contacts: "987654321",
    email: "techhub@gmail.com",
    catalogue: "www.techaccessorieshub.com",
    subcategory: "Phone Accessories",
    alternatives: [4],
    endorsers: ["Alice", "Paul"],
    comments: [
      { comment: "Wide range of accessories", date: "01/01/24", owner: "Moses", agreements: ["Alice", "Paul"] },
      { comment: "Some items are overpriced", date: "12/12/23", owner: "Paul", agreements: ["Alice", "Moses"] },
      { comment: "Friendly customer service", date: "11/11/23", owner: "Alice", agreements: ["Moses"] }
    ]
  },
  {
    id: 10,
    name: "Chef's Choice",
    provider: "Liam",
    location: ["Mukono", "Kampala"],
    red_flags: [],
    contacts: "321654987",
    email: "chefschoice@gmail.com",
    catalogue: "www.chefschoice.com",
    subcategory: "Modern Kitchen",
    alternatives: [],
    endorsers: ["Kate", "Linda"],
    comments: [
      { comment: "Best utensils in town", date: "10/10/23", owner: "Liam", agreements: ["Kate", "Linda", "Tom"] },
      { comment: "Reasonable pricing for quality products", date: "09/09/23", owner: "Linda", agreements: ["Kate", "Tom"] }
    ]
  }
];

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(itemsArray);
  const [solutions, setSolutions] = useState(shops);
  const [feedback, setFeedback] = useState([]);
  const [needs, setNeeds] = useState(groupAndSortItems(data));
  const [currentSoln, setCurrentSoln] = useState([]);
  const [currentSub, setCurrentSub] = useState();
  const [user, setUser] = useState(users.find((person) => person.name === "Current User"));

  function groupAndSortItems(items) {
    // Step 1: Group items by sub_category and calculate owner counts
    const grouped = items.reduce((acc, item) => {
      if (!acc[item.sub_category]) {
        acc[item.sub_category] = { items: [], totalOwners: 0 };
      }
      acc[item.sub_category].items.push(item);
      acc[item.sub_category].totalOwners += item.owner.length; // Count owners
      return acc;
    }, {});

    // Step 2: Sort subcategories by totalOwners (descending order)
    const sortedSubcategories = Object.entries(grouped)
      .sort((a, b) => b[1].totalOwners - a[1].totalOwners)
      .map(([subCategory, data]) => {
        const { items, totalOwners } = data;

        // Step 3: Sort items within each subcategory by the number of owners (descending order)
        items.sort((a, b) => b.owner.length - a.owner.length);

        // Step 4: Extract unique locations within each subcategory
        const uniqueLocations = [...new Set(items.map((item) => item.location))];

        return {
          sub_category: subCategory,
          total_owners: totalOwners, // Include total owner count
          items,
          unique_locations: uniqueLocations,
        };
      });

    return sortedSubcategories;
  }

  // Update needs whenever data changes
  useEffect(() => {
    const groupedNeeds = groupAndSortItems(data);
    setNeeds(groupedNeeds);
  }, [data]); // Recompute needs whenever data changes

  // Add a function to update the array
  const addItem = (item) => {
    setData((prevData) => [...prevData, item]); // Append new needs
  };

  const updateSolution = (id, updatedSolution) => {
    setSolutions((prevSolutions) =>
      prevSolutions.map((solution) =>
        solution.id === id ? updatedSolution : solution
      )
    );
  };  

  // Add a function to update the current solution
  const updateCurrentSoln = (soln) => {
    setCurrentSoln(soln); 
  };

    // Add a function to update the current solution
    const updateCurrentSub = (subCategory) => {
      setCurrentSub(subCategory); 
    };

  const addSolution = (solution) => {
    setSolutions((prevSolutions) => [...prevSolutions, solution]); // Append new solution
  };

  const addFeedback = (text) => {
    setFeedback((prevFeedback) => [...prevFeedback, text]);
    console.log(feedback);
  };

  // Add a function to remove an item
  const removeItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        data,
        user,
        needs,
        solutions,
        categories,
        subCategories,
        locations,
        currentSoln,
        currentSub,
        feedback,
        addItem,
        removeItem,
        addSolution,
        updateCurrentSoln,
        updateCurrentSub,
        updateSolution,
        addFeedback
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
