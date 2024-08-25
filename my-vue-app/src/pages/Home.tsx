import React from "react";
import useDestinations from "../hooks/useDestinations";
import DestinationList from "../components/DestinationList";


const Home: React.FC = () => {
  const { destinations, loading, error } = useDestinations();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <DestinationList destinations={destinations} />
    </main>
  );
};

export default Home;
