import { useState } from "react";
import style from "../css/app.module.css";

const Article = ({ articles }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.adx_keywords.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={style.singleArticle}>
      <div>
        <form>
          <label htmlFor="search" className="mb-2">
            Looking for a specific article?
          </label>
          <input
            id="search"
            className={style.inputSearch}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by keyword"
          />
        </form>

        {filteredArticles.map((article, index) => (
          <article key={article.url}>
            <div className="row">
              <div className="col-2">
                {article.media && article.media.length > 0 && (
                  <img
                    src={article.media[0]["media-metadata"][0].url}
                    alt="thumbnail"
                    height={"100%"}
                    width={"100%"}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                )}
              </div>
              <div className="col-10">
                <h6>
                  <b>{article.title}</b>
                </h6>
                <p>
                  {article.published_date}, {article.abstract}
                </p>
                <p>
                  {article.byline} / {article.nytdsection}
                </p>
                <button className={style.readMoreBtn}>
                  <a
                    className="text-black text-decoration-none"
                    href={article.url}
                  >
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <hr />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Article;
