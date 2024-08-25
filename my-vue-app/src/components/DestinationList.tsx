import React, { useMemo } from "react";
import DestinationCard from "./DestinationCard";
import { Destination } from "../hooks/useDestinations";


interface DestinationListProps {
  destinations: Destination[];
}

const DestinationList: React.FC<DestinationListProps> = React.memo(
  ({ destinations }) => {
    const destinationCards = useMemo(() => {
      return destinations.map((dest, index) => (
        <DestinationCard
          key={index}
          name={dest.name}
          country={dest.country}
          description={dest.description}
          profileImg={dest.profileImg}
          additionalImages={dest.additionalImages}
          averageBudget={dest.averageBudget}
        />
      ));
    }, [destinations]);

    return <div className="destination-list" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>{destinationCards}</div>;
  }
);

export default DestinationList;
