import React from "react";

interface DestinationCardProps {
  name: string;
  country: string;
  description: string;
  profileImg: string;
  additionalImages: string[];
  averageBudget: number;
}

const DestinationCard: React.FC<DestinationCardProps> = React.memo(
  ({
    name,
    country,
    description,
    profileImg,
    additionalImages,
    averageBudget,
  }) => {
    return (
      <div className="destination-card">
        <img src={profileImg} alt={name}  style={{height:"200px"}}/>
        <h2>{name}</h2>
        <p>{country}</p>
        <p>{description}</p>
        <p>Average Budget: ${averageBudget}</p>
      </div>
    );
  }
);

export default DestinationCard;
