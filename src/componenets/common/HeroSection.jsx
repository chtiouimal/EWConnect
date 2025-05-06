function HeroSection({
  data,
  main,
  position = "right",
  bg = "/hero-1.png",
  classNames = "",
  ...props
}) {
  return (
    <div
      className={`ew-hero ${
        position === "left" && document.innerWidth > 1440 ? "ew-hero-left" : ""
      } ${classNames}`}
      {...props}
    >
      <div>
        {data.keyword && <span className="ew-keyword">{data.keyword}</span>}
        {data.title}
        {typeof data.text === "string" ? (
          <p className="ew-first-p">{data.text}</p>
        ) : (
          <>{data.text}</>
        )}
        {data.cta && data.cta}
      </div>
    </div>
  );
}

export default HeroSection;
