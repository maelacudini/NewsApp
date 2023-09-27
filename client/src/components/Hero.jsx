import style from "../css/app.module.css";

const Hero = () => {
  const newsStatements = [
    {
      title: "Championing Truth Amidst Adversity",
      description:
        "In a world inundated with information, the role of journalists as truth-seekers and storytellers has never been more vital. Upholding the values of transparency and accountability, we navigate the intricate tapestry of global events to provide insights that empower citizens to make informed decisions. Journalism is not just a profession; it's a commitment to democracy and the pursuit of a more just society.",
    },
    {
      title: "Unearthing Unseen Realities",
      description:
        "Beyond the headlines lie stories that often go unnoticed — tales of resilience, innovation, and the human spirit. As journalists, we delve into the heart of communities, shedding light on the struggles and triumphs that shape our world. With every article, we strive to unveil the hidden narratives, sparking conversations and igniting change. Journalism is our lens into the world's complexities, revealing the mosaic of humanity that unites us all.",
    },
  ];

  return (
    <section className={style.heroContainer}>
      <div className={`row ${style.heroFirstRow}`}>
        <div className="col-sm-6">
          <h1>DAILY NEWS</h1>
        </div>
        <div className="col-sm-6">
          <p>
            (ABOUT) &nbsp; With a finger on the pulse of trending topics, we
            present a collection of insightful articles, ranging from politics
            and technology to culture and beyond. Our dedication lies in
            ensuring you're well-informed about the stories that truly matter.
            We understand that your time is precious, and that's why 'NYTimes'
            is your trusted source for the most engaging, relevant, and
            thought-provoking news stories of the day.
          </p>
        </div>
      </div>

      <div className={`row ${style.heroSecondRow}`}>
        <div className="col-md-6">
          <img src="/img1.jpg" alt="image" className={style.heroImage} />
          <p>
            <span className={style.underlined}>
              {newsStatements[0].title.toUpperCase()}
            </span>
          </p>
          <p>(001.) &nbsp; {newsStatements[0].description}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <img
            src="/img2.jpg"
            alt="image"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              marginBottom: "16px",
            }}
          />
          <p>
            <span className={style.underlined}>
              {newsStatements[1].title.toUpperCase()}
            </span>
          </p>
          <p>(002.) &nbsp; {newsStatements[1].description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
