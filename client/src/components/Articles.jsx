import { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";
import style from "../css/app.module.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("api/news")
      .then((response) => {
        setArticles(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section>
      <div className={`row`}>
        <div className="col-md-2">
          <p>(NEWS)</p>
        </div>
        <div className="col-md-10">
          <span>YOUR FAVOURITE SOURCE OF NEWS</span>
          <p>
            Stay up-to-date with the latest and most viewed news of the day from
            around the world. We curate and present the most popular news
            articles, ensuring you get a comprehensive overview of what's
            trending and making headlines in various fields such as politics,
            business, technology, entertainment, and more.
          </p>
          <img
            src="/img3.jpg"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              marginBottom: "16px",
            }}
            alt="image"
          />
        </div>
      </div>

      <Article articles={articles} />
    </section>
  );
};

export default Articles;
