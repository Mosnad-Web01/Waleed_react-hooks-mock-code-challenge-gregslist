import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data));
  }, []);

  const removeListing = (id) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            id={listing.id}
            description={listing.description}
            image={listing.image}
            location={listing.location}
            removeListing={removeListing} // Pass the removeListing function
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
