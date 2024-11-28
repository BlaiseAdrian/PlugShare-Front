// SolutionsDetailsCard.js

import React, { useState } from 'react';
import ReviewModal from './ReviewForm';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SolutionsDetailsCard({ solution, main }) {
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

    const { name, location, expectations, exceptions, rating, flags, contacts, details, id, need } = solution;
    const [showModal, setShowModal] = useState(false);
    
// Function to get the alternatives for a specific shop by its id
const getAlternatives = (shops, solutionId) => {
    // Find the solution for which we need alternatives
    const solution = shops.find(shop => shop.id === solutionId);
  
    // If the solution is found and has alternatives, filter and return those
    if (solution && solution.alternatives) {
      return shops.filter(shop => solution.alternatives.includes(shop.id));
    }
  
    // Return an empty array if no alternatives are found or the solution does not exist
    return [];
  };
  
  const alternatives = getAlternatives(shops, id);
    
    return (
        <div className="card detailCard mx-3" style={{minHeight: "85vh"}}>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">{name}</h5>
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>Submit Review</button>
                    <ReviewModal
                        show={showModal}
                        onClose={() => setShowModal(false)}
                        shopName="Sula's Shop"
                    />
                </div>               
            <Link to="/SolutionAlternatives" className={`${main ? 'd-block' : 'd-none'}`} state={{alternatives, name}} style={{ textDecoration: 'none' }}>
            See Alternatives <span style={{color: "red"}}>({alternatives.length})</span>
            </Link>
                <hr />
                <p className="card-text"><strong>Rating:</strong> {rating} 
                                <span
                                    className="me-2 text-muted"
                                    role="img"
                                    aria-label="star"
                                    style={{ fontSize: '1rem', color: "gold" }}
                                >
                                    &#9733; {/* Star icon */}
                                </span>{flags}<span
                                className="me-2 text-muted"
                                role="img"
                                aria-label="flag"
                                style={{ fontSize: '1rem', color: "red" }}
                            >
                                &#9873; {/* Flag icon */}
                            </span></p>
                <p className="card-text"><strong>Location:</strong> {location}</p>
                <p className="card-text"><strong>Expectations:</strong> {expectations}</p>
                <p className="card-text"><strong>Exceptions:</strong> {exceptions}</p>
                <p className="card-text"><strong>Contact Details:</strong> {contacts}</p>
                <p className="card-text"><strong>Details:</strong></p>
                <div className="details m-2 p-2 d-block bg-dark text-light">
                    {details}
                </div>
            </div>
        </div>
    );
}

export default SolutionsDetailsCard;
