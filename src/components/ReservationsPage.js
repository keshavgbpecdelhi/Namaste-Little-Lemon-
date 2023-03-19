import React from 'react';
import "./styles/ReservationsContent.css";
import Form from './Form';

function ReservationsPage() {

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
            <h2>Indulge in the perfect blend of opulence and heritage.</h2>
                <p>At Little Lemon, we strive to offer our patrons a luxurious experience that seamlessly blends modern opulence with <em>Indian heritage</em>.</p>
                <p>Join us at our table and partake in this unforgettable experience.</p>
            </div>
            <div className="form">
                <h1>Reserve a Table</h1>
                <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default ReservationsPage