import React, { createContext, useState } from 'react';

// Create a Context
export const DataContext = createContext();
const items = [
    {
      id: 1,
      owner: ["Blaise", "Tom"],
      title: "Quality Kitchenware",
      category: "Home appliances",
      location: "Mukono Only",
      percentage: "30%",
      purpose: "Good quality, not interested in price",
      details: "Brand new kitchenware of good quality like cutlery, racks, and kitchen appliances, preferably not made in China."
    },
    {
      id: 2,
      owner: ["Tom", "Eddy"],
      title: "Cheap Phones",
      category: "Phones",
      location: "Anywhere around Kampala",
      percentage: "20%",
      purpose: "Low Prices",
      details: "Brand new phones only, no used phones. These can be of any brand but obviously not flagships. Good quality is a bonus but not a requirement."
    },
    {
      id: 3,
      owner: ["Mary"],
      title: "Affordable Laptops",
      category: "Electronics",
      location: "Kampala",
      percentage: "25%",
      purpose: "Budget-friendly",
      details: "Second-hand laptops in good working condition, mainly for schoolwork and internet use. Priority is low cost, but quality should be sufficient to avoid frequent repairs."
    },
    {
      id: 4,
      owner: ["Tom", "Mark"],
      title: "Eco-friendly Packaging",
      category: "Packaging",
      location: "Nationwide",
      percentage: "50%",
      purpose: "Sustainability",
      details: "Biodegradable or reusable packaging materials for business purposes. Price matters as long as it doesn't compromise the eco-friendliness of the materials."
    },
    {
      id: 5,
      owner: ["Mark"],
      title: "Reliable Internet Provider",
      category: "Services",
      location: "Jinja",
      percentage: "40%",
      purpose: "High-speed connection",
      details: "Affordable and consistent internet service for both home and small office use. Preference is for good speed over cost, but options within budget are welcome."
    },
    {
      id: 6,
      owner: ["Eric"],
      title: "Quality Furniture",
      category: "Home decor",
      location: "Mbale",
      percentage: "30%",
      purpose: "Long-lasting and stylish",
      details: "Modern wooden furniture for the living room and dining room. High-quality materials are a priority, but affordable options are preferred."
    },
    {
      id: 7,
      owner: ["Eddy"],
      title: "Fitness Equipment",
      category: "Sports",
      location: "Kampala",
      percentage: "35%",
      purpose: "Home gym setup",
      details: "Second-hand or discounted gym equipment like dumbbells, treadmills, and resistance bands. Quality is important to avoid frequent breakdowns."
    },
    {
      id: 8,
      owner: ["Hope"],
      title: "Organic Groceries",
      category: "Food",
      location: "Mukono",
      percentage: "20%",
      purpose: "Health-conscious",
      details: "Fresh, organic produce such as vegetables, fruits, and grains sourced locally. Quality is key, and reasonable prices are a plus."
    },
    {
      id: 9,
      owner: ["Jerry"],
      title: "Affordable Childcare Services",
      category: "Services",
      location: "Wakiso",
      percentage: "50%",
      purpose: "Cost-effective care",
      details: "Reliable daycare services for working parents, with flexible hours. Cost matters, but safety and care quality are non-negotiable."
    },
    {
      id: 10,
      owner: ["Kate"],
      title: "Professional Photography",
      category: "Services",
      location: "Kampala",
      percentage: "40%",
      purpose: "Event coverage",
      details: "Affordable photography services for events such as weddings and graduations. Quality is crucial, even for budget packages."
    },
    {
      id: 11,
      owner: ["Eric", "Kate"],
      title: "Electric Bikes",
      category: "Transport",
      location: "Kampala",
      percentage: "30%",
      purpose: "Eco-friendly transport",
      details: "Affordable electric bicycles for commuting within urban areas. Quality should ensure durability and good battery life."
    },
    {
      id: 12,
      owner: ["Kate", "Bob"],
      title: "Budget Clothing",
      category: "Fashion",
      location: "Kampala and Wakiso",
      percentage: "15%",
      purpose: "Affordable wear",
      details: "Trendy and affordable clothing for men, women, and children. Quality is secondary to price but still desired."
    },
    {
      id: 13,
      owner: ["Mark", "Bob"],
      title: "Local Art Pieces",
      category: "Art",
      location: "Nationwide",
      percentage: "20%",
      purpose: "Home decoration",
      details: "Affordable handcrafted art pieces such as paintings, carvings, and pottery. High-quality craftsmanship is important."
    },
    {
      id: 14,
      owner: ["Blair", "Eddy"],
      title: "Solar Power Systems",
      category: "Energy",
      location: "Rural areas",
      percentage: "60%",
      purpose: "Off-grid electricity",
      details: "Affordable and reliable solar panels and batteries for rural homes. Long-term quality and durability are key considerations."
    },
    {
      id: 15,
      owner: ["Blair", "Wil"],
      title: "Pet Supplies",
      category: "Pets",
      location: "Kampala and Entebbe",
      percentage: "25%",
      purpose: "Affordable care",
      details: "Quality supplies like food, beds, and toys for cats and dogs. Price matters but should not compromise on the pet's well-being."
    },
    {
      id: 16,
      owner: ["Mike"],
      title: "Tutorial Services",
      category: "Education",
      location: "Nationwide (online preferred)",
      percentage: "30%",
      purpose: "Skill improvement",
      details: "Affordable online tutorials for mathematics, programming, and graphic design. Quality of teaching is the most critical factor."
    },
    {
      id: 17,
      owner: ["Rem"],
      title: "Modern Kitchen Designs",
      category: "Interior Design",
      location: "Kampala",
      percentage: "40%",
      purpose: "Stylish renovations",
      details: "Affordable kitchen redesign services focusing on modern styles. High-quality materials and finishes are a priority."
    },
    {
      id: 18,
      owner: ["Rem"],
      title: "Reliable Plumbing Services",
      category: "Services",
      location: "Mukono and Kampala",
      percentage: "50%",
      purpose: "Fixing issues",
      details: "Affordable and reliable plumbing services for home repairs and installations. Quality service is valued over price."
    },
    {
      id: 19,
      owner: ["Jack"],
      title: "Affordable Travel Packages",
      category: "Tourism",
      location: "Nationwide",
      percentage: "25%",
      purpose: "Budget-friendly trips",
      details: "Cheap travel packages for local tourist destinations, including transport and accommodation. The quality of accommodations should match basic comfort standards."
    },
    {
      id: 20,
      owner: ["Boy"],
      title: "Healthy Meal Deliveries",
      category: "Food",
      location: "Kampala and Mukono",
      percentage: "30%",
      purpose: "Convenience",
      details: "Affordable meal delivery services offering healthy and balanced options. Quality and taste are equally as important as cost."
    }
  ];

  const shops = [
    {
      id: 1,
      name: "Blaise Shop",
      location: "Kampala",
      expectations: "All phones by Techno, Infinix, and Chinese brands",
      exceptions: "This place does not have any phones by major companies like Samsung",
      rating: 4.5,
      flags: 2,
      contacts: "12345673456",
      details: "All phones come in a box. No possibility of return and no deliveries are done",
      need: "Cheap Phones",
      alternatives: [2, 3],
      endorsers: ["John", "Mary"]
    },
    {
      id: 2,
      name: "Ben's Timber Shop",
      location: "Kampala",
      expectations: "All ideas the customer has can be made, with the delivery period based on the complexity of the design",
      exceptions: "All furniture is made on order, so any ideas the customer has have to be custom-made",
      rating: 3.5,
      flags: 0,
      contacts: "987345673456",
      details: "All furniture is manufactured locally, only glass and metal accessories imported. Wood is sourced locally",
      need: "Quality Furniture",
      alternatives: [7, 3],
      endorsers: ["Mat", "Mary", "Bob"]
    },
    {
      id: 3,
      name: "Green Earth Packaging",
      location: "Nationwide",
      expectations: "A variety of biodegradable packaging options are available in stock",
      exceptions: "Custom designs take 2-3 weeks for delivery",
      rating: 4.7,
      flags: 1,
      contacts: "09283456789",
      details: "Affordable eco-friendly packaging solutions for small and medium businesses",
      need: "Eco-friendly Packaging",
      alternatives: [5, 6],
      endorsers: ["Alice", "Musa"]
    },
    {
      id: 4,
      name: "ConnectNet Internet Solutions",
      location: "Jinja",
      expectations: "Reliable internet packages tailored for small businesses and families",
      exceptions: "Speeds above 100Mbps not available in rural areas",
      rating: 4.0,
      flags: 0,
      contacts: "08345783456",
      details: "Affordable monthly packages with unlimited data options",
      need: "Reliable Internet Provider",
      alternatives: [8, 9],
      endorsers: ["Faith", "Liam"]
    },
    {
      id: 5,
      name: "Solar & Beyond",
      location: "Rural areas",
      expectations: "Affordable solar solutions with warranties of up to 10 years",
      exceptions: "Delivery to remote areas incurs additional fees",
      rating: 4.8,
      flags: 0,
      contacts: "09876543210",
      details: "Complete solar setups, including batteries and installation services",
      need: "Solar Power Systems",
      alternatives: [11],
      endorsers: ["Nana", "Peter"]
    },
    {
      id: 6,
      name: "Health Harvest Foods",
      location: "Mukono",
      expectations: "Fresh, organic produce available daily",
      exceptions: "No deliveries outside Mukono district",
      rating: 4.6,
      flags: 1,
      contacts: "07823456789",
      details: "Affordable pricing for quality organic vegetables and grains",
      need: "Organic Groceries",
      alternatives: [15],
      endorsers: ["Cathy", "Ibrahim"]
    },
    {
      id: 7,
      name: "Mbale Home Creations",
      location: "Mbale",
      expectations: "Locally sourced, handcrafted wooden furniture with modern designs",
      exceptions: "No ready-made furniture available, all items are custom-made",
      rating: 4.2,
      flags: 0,
      contacts: "07734567890",
      details: "Stylish and durable furniture for dining rooms and living rooms",
      need: "Quality Furniture",
      alternatives: [2],
      endorsers: ["James", "Emily"]
    },
    {
      id: 8,
      name: "Urban Wheels Electric Bikes",
      location: "Kampala",
      expectations: "Affordable electric bikes with a focus on durability",
      exceptions: "No servicing included after purchase",
      rating: 4.1,
      flags: 1,
      contacts: "07012345678",
      details: "All bikes come with a one-year battery warranty",
      need: "Electric Bikes",
      alternatives: [],
      endorsers: ["Fred", "Linda"]
    },
    {
      id: 9,
      name: "Star Photography",
      location: "Kampala",
      expectations: "Professional event photography with high-quality equipment",
      exceptions: "No video services available",
      rating: 4.7,
      flags: 0,
      contacts: "07123456789",
      details: "Packages available for weddings, graduations, and corporate events",
      need: "Professional Photography",
      alternatives: [],
      endorsers: ["Sarah", "Isaac"]
    },
    {
      id: 10,
      name: "Healthy Deliveries Ltd.",
      location: "Kampala and Mukono",
      expectations: "Daily delivery of fresh and balanced meals",
      exceptions: "No customization of meals beyond allergies",
      rating: 4.4,
      flags: 0,
      contacts: "07654321789",
      details: "Affordable pricing with weekly or monthly subscription options",
      need: "Healthy Meal Deliveries",
      alternatives: [6],
      endorsers: ["Olive", "Victor"]
    },
    {
      id: 11,
      name: "Sunny Systems",
      location: "Rural areas",
      expectations: "Affordable solar kits for homes and small businesses",
      exceptions: "Installations outside designated zones are not supported",
      rating: 4.3,
      flags: 1,
      contacts: "09098765432",
      details: "Free installation services within coverage areas",
      need: "Solar Power Systems",
      alternatives: [5],
      endorsers: ["David", "Miriam"]
    },
    {
      id: 12,
      name: "Easy Fit Gym Supplies",
      location: "Kampala",
      expectations: "Affordable second-hand gym equipment in good condition",
      exceptions: "No warranties on purchases",
      rating: 3.8,
      flags: 2,
      contacts: "07129874567",
      details: "Discounted prices on treadmills, dumbbells, and resistance bands",
      need: "Fitness Equipment",
      alternatives: [],
      endorsers: ["Paul", "Tina"]
    },
    {
      id: 13,
      name: "Timeless Art Shop",
      location: "Nationwide",
      expectations: "Wide variety of handcrafted art pieces available for purchase",
      exceptions: "No large sculptures shipped outside Kampala",
      rating: 4.5,
      flags: 1,
      contacts: "07890234567",
      details: "Affordable options for paintings, carvings, and pottery",
      need: "Local Art Pieces",
      alternatives: [],
      endorsers: ["Diana", "Joseph"]
    },
    {
      id: 14,
      name: "Bright Minds Academy",
      location: "Nationwide (online preferred)",
      expectations: "Affordable online classes with experienced instructors",
      exceptions: "No physical classes available",
      rating: 4.6,
      flags: 0,
      contacts: "07984561234",
      details: "Courses include mathematics, programming, and graphic design",
      need: "Tutorial Services",
      alternatives: [],
      endorsers: ["Elijah", "Betty"]
    },
    {
      id: 15,
      name: "SafeCare Daycare",
      location: "Wakiso",
      expectations: "Reliable childcare services with flexible hours",
      exceptions: "No services offered on weekends",
      rating: 4.4,
      flags: 1,
      contacts: "07564321987",
      details: "Affordable rates with daily activities for children",
      need: "Affordable Childcare Services",
      alternatives: [],
      endorsers: ["Nancy", "George"]
    },
    {
      id: 16,
      name: "Artisan Kitchens",
      location: "Kampala",
      expectations: "Affordable modern kitchen redesigns with high-quality finishes",
      exceptions: "No installations outside Kampala",
      rating: 4.3,
      flags: 1,
      contacts: "07234567890",
      details: "Specializing in modern designs with durable materials",
      need: "Modern Kitchen Designs",
      alternatives: [],
      endorsers: ["Leah", "Simon"]
    }
  ];


// Provide the context to children
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(items); 
  const [solutions, setSolutions] = useState(shops); 

  // Add a function to update the array
  const addItem = (item) => {
    setData((prevData) => [...prevData, item]); // Append new needs
  };

  const addSolution = (solution) => {
    setSolutions((prevSolutions) => [...prevSolutions, solution]); // Append new solution
  };

  // Add a function to remove an item
  const removeItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <DataContext.Provider value={{ data, solutions, addItem, removeItem, addSolution }}>
      {children}
    </DataContext.Provider>
  );
};
