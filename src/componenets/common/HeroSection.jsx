import CustomButton from "./CustomButton";

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
        {data.keyword && <span>{data.keyword}</span>}
        {/* <h1>
          Guiding Your Business Toward Lasting <span>Success.</span>
        </h1> */}
        {data.title}
        {typeof data.text === "string" ? <p>{data.text}</p> : <>{data.text}</>}
        {data.cta && data.cta}
      </div>
    </div>
  );
}

export default HeroSection;
