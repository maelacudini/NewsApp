import style from "../css/app.module.css";

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <p>LET'S KEEP IN CONTACT</p>
      <hr />
      <div className="d-flex justify-content-between">
        <p className={style.footerLink}>Twitter</p>
        <p className={style.footerLink}>YouTube</p>
        <p className={style.footerLink}>Instagram</p>
        <p className={style.footerLink}>Facebook</p>
      </div>
    </footer>
  );
};

export default Footer;
