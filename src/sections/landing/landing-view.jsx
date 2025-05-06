import React from "react";
import HeroSection from "../../componenets/common/HeroSection";
import { CustomButton } from "../../componenets";
import {
  EyeIcon,
  GlobeIcon,
  HandshakeIcon,
  LandmarkIcon,
  PlaneIcon,
  SectionIcon,
  StoreIcon,
  UsersIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function LandingView() {
  const navigate = useNavigate();

  const SERVICES = [
    {
      title: "Market Entry\n& Expansion Support",
      text: "Providing end-to-end market entry strategies, regulatory guidance, and company setup services in both China and the GCC.",
      icon: <StoreIcon size={48} />,
    },
    {
      title: "Cross-Border\nInvestment Facilitation",
      text: "Sourcing and facilitating investment deals, joint ventures, and partnerships between Chinese and GCC entities",
      icon: <HandshakeIcon size={48} />,
    },
    {
      title: "Regulatory\n& Compliance Advisory",
      text: "Guiding clients through legal frameworks, licensing, and regulatory requirements in both China and the GCC",
      icon: <SectionIcon size={48} />,
    },
    {
      title: "Local Branch\nEstablishment",
      text: "Guiding through legal requirements and operational setup for a seamless branch establishment.",
      icon: <LandmarkIcon size={48} />,
    },
    {
      title: "",
      text: "",
      icon: "",
    },
    {
      title: "Partnership Development\n& Deal Advisory",
      text: "identifying strategic partners, facilitating introductions, and supporting negotiations for cross-border collaborations.",
      icon: <UsersIcon size={48} />,
    },
    {
      title: "Business Delegation\n& Trade Mission Management",
      text: "Organizing senior-level delegations, business trips,and tailored B2B matchmaking programs between China and the GCC.",
      icon: <PlaneIcon size={48} />,
    },
    {
      title: "On-the-Ground Representation\n& Local Liaison Services",
      text: "Guiding clients through legal frameworks, licensing, and regulatory requirements in both China and the GCC",
      icon: <GlobeIcon size={48} />,
    },
    {
      title: "Cultural & Business\nEtiquette Consulting",
      text: "Equipping clients with insights into Chinese and GCC business cultures to ensure successful communication and deal-making",
      icon: <EyeIcon size={48} />,
    },
  ];

  const CONNECT = [
    {
      title: "Strong Ties",
      text: "Growing partnerships between the GCC and China foster collaboration and mutual growth.",
    },
    {
      title: "High Tech Demand",
      text: "The Gulf region values Chinese innovation, creating a ripe environment for technology ventures.",
    },
    {
      title: "Cultural Openness",
      text: "The region welcomes Chinese technology and investment, fostering a collaborative ecosystem.",
    },
    {
      title: "Massive Investment",
      text: "Billions are being invested to back ambitious transformation plans across the GCC.",
    },
    {
      title: "Strategic Access",
      text: "The GCC serves as a key gateway for expanding market reach across Asia, Africa, and Europe.",
    },
    {
      title: "Tax Incentives",
      text: "Competitive incentives and free zones provide a welcoming environment for businesses.",
    },
  ];
  const VALUES = [
    "Accelerated Economic Diversification",
    "Access to Advanced Technology & Innovation",
    "Strengthened Trade & Economic Ties with China",
    "Infrastructure Development",
    "Sustainable Growth in Renewable Energy",
    "Cost-Effective Solutions & Innovations",
    "Boost in Manufacturing & Industrial Growth",
    "Strong Supply Chain & Logistics Expansion",
    "Growth in Tourism & Hospitality",
    "Increased Global Influence & Trade Routes",
    "Promoting Global Competitiveness",
    "Cultural Exchange",
  ];

  return (
    <div id="landing-page" className="ew-view">
      <HeroSection
        data={{
          keyword: "Smart Solutions",
          title: (
            <h1>
              Guiding Your Business Toward Lasting <span>Success.</span>
            </h1>
          ),
          text: "From strategy to execution, we help businesses streamline operations, optimize resources, and scale efficiently.",
          cta: (
            <CustomButton
              label="Discover Our Approach"
              primary
              onClick={() => navigate("/about")}
            />
          ),
        }}
      />

      <section className="ew-about">
        <h3>
          We help Chinese companies confidently enter and thrive in GCC markets.
          Through strategic guidance, tailored partnerships, and high-level
          exchanges, we build enduring value across both regions.
        </h3>
      </section>

      <div className="ew-image-text">
        <div className="ew-image">
          <img src="handshake.png" alt="handshake" />
        </div>
        <div className="ew-text">
          <h3>Bridging China and the GCC</h3>
          <div>
            <span>About the company</span>
            <p>
              By aligning business interests, fostering dialogue, and
              facilitating structured engagement, East-Wind Connect aims to
              contribute meaningfully to the growing landscape of China-GCC
              cooperation one strategic connection at a time.
            </p>
          </div>
        </div>
      </div>

      <section>
        <span>Our services</span>
        <div className="ew-splited" style={{ marginTop: 32, marginBottom: 64 }}>
          <h3>Business Growth Solutions</h3>
          <p>
            Our team's regional insight, multilingual capabilities, and
            executive networks position us as a key enabler of China-GCC trade
            and investment success.
          </p>
        </div>
        <div className="ew-card-grid">
          {SERVICES.map((service, i) => {
            if (i === 4 && window.innerWidth <= 768) return;
            return (
              <div key={i} className="ew-icon-card">
                <span>{service.icon}</span>
                <h6 style={{ whiteSpace: "pre-line" }}>{service.title}</h6>
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="ew-section-card">
        <div>
          <h3>
            <span>Connecting</span> Visionary Markets with Strategic Precision
            and Expertise
          </h3>
          <div className="ew-grid-2">
            {CONNECT.map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", flexDirection: "column", gap: 22 }}
              >
                <h6>{item.title}</h6>
                <p style={{ maxWidth: 360 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
            Unlocking access to the GCC’s leading projects, markets and
            institutions
          </h3>
          <div className="ew-grid-2-box">
            {VALUES.map((value) => (
              <div className="ew-item-box" key={value}>
                <span />
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="ew-whatwedeliver" style={{ paddingBottom: 64 }}>
        <div className="ew-splited">
          <h3>Architecting Lasting Transformation</h3>
          <div>
            <p>
              We combine expertise with tailored strategies to deliver
              measurable, long-term results.
            </p>
            <p>Want to learn more about how we can drive your success?</p>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <CustomButton
                label="Learn More"
                primary
                onClick={async () => {
                  navigate("/about#whatweoffer");
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="ew-image-grid">
        <img src="1.jpg" alt="1" />
        <img src="2.jpg" alt="2" />
        <img src="3.jpg" alt="3" style={{ height: 360, width: "100%" }} />
      </div>

      <section className="ew-about" style={{ paddingBottom: 64 }}>
        <h3>
          Step Into a World of Innovation, Leadership, and International Growth
          — Apply to Be Part of Our Next Mission
        </h3>
      </section>
      <div
        className="ew-image-text ew-current-prject"
        style={{ margin: "0 32px", borderRadius: 40, maxHeight: "unset" }}
      >
        <div className="ew-image">
          <img src="current-project.jpg" alt="handshake" />
        </div>
        <div className="ew-text" style={{ paddingBottom: "16px 16px 16px 0" }}>
          <h6>August 24th - August 29th,2025</h6>
          <h5>
            Strategic GCC Business Delegation: An Unprecedented Multinational
            Mission to the UAE, Saudi Arabia & Qatar
          </h5>
          <div>
            <p style={{ fontSize: "1.38vw" }}>
              Unlocking access to the GCCs leading projects markets and
              institutions. We warmly invite you to be part of this important
              mission and to help lead the next era of China-GCC cooperation.
            </p>
            <CustomButton
              label="Apply to the project"
              primary
              onClick={() => navigate("projects/current")}
            />
          </div>
          <span>Facilitating relations between China & GCC</span>
        </div>
      </div>

      <section className="ew-about">
        <h3 className="ew-closure">
          Your Next Move, Powered by Insight. Let’s Build What’s Next —
          <span>Together.</span>
        </h3>
      </section>
    </div>
  );
}

export default LandingView;
