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
      className="d-flex justify-content-between aling-items-baseline"
      style={{ marginTop: "15vh" }}
    >
      <p className="m-0">SOME COPIRIGHT STATEMENT ©</p>
      <button className={style.backToTopButton} onClick={scrollToTop}>
        BACK TO TOP
      </button>
    </div>
  );
};

export default BackToTopButton;
