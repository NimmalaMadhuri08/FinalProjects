// src/components/BookingList.jsx
import React, { useState } from "react";
import axios from "axios";

const BookingList = () => {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);

  const handleSearch = () => {
    axios
      .get(`http://localhost:8000/bookings/?email=${email}`)
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Your Bookings</h2>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <strong>{booking.class_name}</strong> —{" "}
            {new Date(booking.booked_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
