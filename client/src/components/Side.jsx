import { useState } from "react";
import style from "../css/app.module.css";
import Articles from "./Articles";
import BackToTopButton from "./BackToTopButton";

const Side = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <section className={`${style.sideContainer} ${expanded && style.expanded}`}>
      <div className={style.sideContentContainer}>
        <div
          className="d-flex justify-content-between align-items-baseline"
          style={{ marginBottom: "15vh" }}
        >
          <button className={style.toggleSide} onClick={handleToggle}>
            {expanded ? "Close" : "Open"}
          </button>

          <p>MOST VIEWED ARTICLES</p>
        </div>
        <Articles />
        <BackToTopButton />
      </div>
    </section>
  );
};

export default Side;
