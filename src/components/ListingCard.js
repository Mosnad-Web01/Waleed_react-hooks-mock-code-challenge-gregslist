import React, { useState } from "react";

function ListingCard({ id, description, image, location, removeListing }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then(() => {
      removeListing(id); // Call removeListing from props
    });
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${isFavorited ? "active" : ""}`}
          onClick={toggleFavorite}
        >
          {isFavorited ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
