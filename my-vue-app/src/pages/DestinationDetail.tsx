import React from "react";
import { useParams } from "react-router-dom";
import useDestinations from "../hooks/useDestinations";


const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { destinations, loading, error } = useDestinations();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const destination = destinations.find((dest) => dest.name === id);

  if (!destination) return <p>Destination not found</p>;

  return (
    <div className="destination-detail">
      <h1>{destination.name}</h1>
      <img src={destination.profileImg} alt={destination.name} />
      <p>{destination.description}</p>
      <p>Average Budget: ${destination.averageBudget}</p>
      <div>
        {destination.additionalImages.map((img, index) => (
          <img key={index} src={img} alt={`${destination.name} additional`} />
        ))}
      </div>
    </div>
  );
};

export default DestinationDetail;
