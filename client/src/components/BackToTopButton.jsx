import style from "../css/app.module.css";

const BackToTopButton = () => {
  const scrollToTop = () => {
    const sideContentContainer = document.querySelector(
      `.${style.sideContentContainer}`
    );
    if (sideContentContainer) {
      sideContentContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="d-flex justify-content-between"
      style={{ marginTop: "15vh" }}
    >
      <div className="d-flex align-items-end">
        <p>SOME COPIRIGHT STATEMENT - 2023</p>
      </div>
      <button className={style.toggleSide} onClick={scrollToTop}>
        BACK TO TOP
      </button>
    </div>
  );
};

export default BackToTopButton;
