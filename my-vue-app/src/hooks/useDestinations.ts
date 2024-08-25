import { useState, useEffect } from "react";
import axios from "axios";

export interface Destination {
  name: string;
  country: string;
  description: string;
  profileImg: string;
  additionalImages: string[];
  averageBudget: number;
  adminFlag: boolean;
}

export interface DestinationsResponse {
  destinations: { [key: string]: Destination };
}

const useDestinations = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get<DestinationsResponse>(
          "https://rct-sprint-1-b38-eval-default-rtdb.asia-southeast1.firebasedatabase.app/destinations.json"
        );
        const destinationsData = Object.values(response.data);
        
        setDestinations(destinationsData);

      } catch (err) {
        setError("Failed to fetch destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return { destinations, loading, error };
};

export default useDestinations;
