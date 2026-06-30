import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios
      .get(
        "https://newslens-backend-3rd0.onrender.com/api/v1/news/headlines?page=1&limit=10"
      )
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("STATUS:", err.response?.status);
        console.log("DATA:", err.response?.data);
        console.log(err);
      });
  }, []);

  return <h1>Home</h1>;
};

export default Home;