
import React, { useEffect, useState } from "react";
import { getHealth } from "../services/health.service";

const Home = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHealth();
        console.log(data);

        setMessage(data.message);
      } catch (error) {
        console.error("API Error:", error);
        setError("Failed to fetch server data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-3xl bg-amber-500 p-5">
      <h1>HOME PAGE WORKING !!!</h1>

      {loading && <p>Loading...</p>}

      {error && (<p className="text-red-600">{error}</p>)}

      {!loading && !error && <p>{message}</p>}
    </div>
  );
};

export default Home;
