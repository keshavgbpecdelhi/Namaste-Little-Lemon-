import React from 'react'
import "../components/styles/SpecialsCard.css"
import Dessert1 from "../components/assets/salad.jpg"
import Dessert2 from "../components/assets/bruschetta1.jpg"
import Dessert3 from "../components/assets/creme.jpg"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const SpecialsCard = () => {
    const specialMenus = [
    {
    image: Dessert1,
    title: "Simple Salad",
    price: "$12.99",
    description: "Our simple salad is perfect for those who prefer a lighter option, featuring fresh greens, cherry tomatoes, cucumber slices, and a tangy vinaigrette dressing.",
    order: "Order now"
    },
    {
    image: Dessert2,
    title: "Samosa Chaat",
    price: "$5.99",
    description: "A popular street food of India, crispy samosas served with chickpeas, tamarind chutney, mint chutney, and yogurt.",
    order: "Order now"
    },
    {
    image: Dessert3,
    title: "Gulab Jamun",
    price: "$5.00",
    description: "At our cafe, we offer a wide range of delicious pastries, all made from scratch using only the finest ingredients",
    order: "Order now"
    }
    ]
    
    
    
    
    
    

    const specialMenusItems = specialMenus.map(menu => {
            const image = menu.image;
            const title = menu.title;
            const price = menu.price;
            const description = menu.description;
            const order = menu.order;
            
            return (
                <div>
                    <div className="special-card-container">
                        <div className="image-container">
                                <img src={image} alt="Special dessert" />
                            </div>
                        <div className="special-card-text">
                            <div className="special-card-title">
                                <h3>{title}</h3>
                                <h3 className="price-tag">{price}</h3>
                            </div>
                            <p>{description}</p>
                            <NavLink to="#">
                                <h4>
                                    {order}
                                    { <MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px",}} /> }
                                </h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="special-card">
        {specialMenusItems}
      </div>
    </div>
  )
}

export default SpecialsCard
