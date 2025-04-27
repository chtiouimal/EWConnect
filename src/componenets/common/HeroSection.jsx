function HeroSection({ data, position = "right", bg = "/hero-1.png" }) {
  return (
    <div
      className="ew-hero"
      style={{
        backgroundPosition: `bottom ${position}`,
        backgroundImage: `url(${bg})`,
      }}
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
