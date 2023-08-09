import { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";
import style from "../css/app.module.css";
import { Link as ScrollLink } from "react-scroll";

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
          <p>
            Stay up-to-date with the latest and most viewed news of the day from
            around the world. We curate and present the most popular news
            articles, ensuring you get a comprehensive overview of what's
            trending and making headlines in various fields such as politics,
            business, technology, entertainment, and more.
          </p>
          <img
            src="https://images.unsplash.com/photo-1513628131779-852862aff942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="..."
            height={"auto"}
            width={"100%"}
          />
        </div>
      </div>

      <Article articles={articles} />
    </section>
  );
};

export default Articles;
