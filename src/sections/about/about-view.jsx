import {
  ChartNoAxesCombinedIcon,
  ChartPieIcon,
  GavelIcon,
  KeyRoundIcon,
  ScaleIcon,
  UsersIcon,
} from "lucide-react";
import HeroSection from "../../componenets/common/HeroSection";
import { Collapse } from "antd";
import { CustomMap, CustomArrow } from "../../componenets";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function AboutView() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Small delay to make sure page fully rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  const PROCESS = [
    {
      title: "Client Discovery\n& Needs Assessment",
      text: "Comprehensive evaluation of objectives and requirements for your business goals, market priorities, and partnership or investment objectives.",
      icon: <KeyRoundIcon size={48} />,
    },
    {
      title: "Tailored Market Research\n& Strategy",
      text: "Detailed insights identifying optimal locations and potential partners.",
      icon: <ChartPieIcon size={48} />,
    },
    {
      title: "Executive-Level\nIntroductions",
      text: "Arranging high-level meetings with key officials and leaders.",
      icon: <UsersIcon size={48} />,
    },
    {
      title: "Deal Facilitation\n& Negotiation Support",
      text: "We assist with cross-border negotiations, deal structuring, and the facilitation of MoUs, JV agreements, or investment terms.",
      icon: <ScaleIcon size={48} />,
    },
    {
      title: "Legal\n& Regulatory Support",
      text: "Guidance through compliance requirements and optimal corporate structures",
      icon: <GavelIcon size={48} />,
    },
    {
      title: "Post-Engagement Support\n& Business Development",
      text: "We offer on-the-ground representation, follow-up relationship management, and operational support to drive long-term success.",
      icon: <ChartNoAxesCombinedIcon size={48} />,
    },
  ];

  const WHATWEOFFER = [
    {
      title: "Market Entry\n& Expansion Support",
      text: "Providing end-to-end market entry strategies, regulatory guidance, and company setup services in both China and the GCC.",
    },
    {
      title: "Regulatory\n& Compliance Advisory",
      text: "Guiding clients through legal frameworks, licensing, and regulatory requirements in both China and the GCC.",
    },
    {
      title: "Regulatory\n& Compliance Advisory",
      text: "Guiding clients through legal frameworks, licensing, and regulatory requirements in both China and the GCC",
    },
    {
      title: "Local Branch\nEstablishment",
      text: "Guiding through legal requirements and operational setup for a seamless branch establishment.",
    },
    {
      title: "Partnership Development\n& Deal Advisory",
      text: "identifying strategic partners, facilitating introductions, and supporting negotiations for cross-border collaborations.",
    },
    {
      title: "Business Delegation\n& Trade Mission Management",
      text: "Organizing senior-level delegations, business trips,and tailored B2B matchmaking programs between China and the GCC.",
    },
    {
      title: "On-the-Ground Representation\n& Local Liaison Services",
      text: "Guiding clients through legal frameworks, licensing, and regulatory requirements in both China and the GCC",
    },
    {
      title: "Cultural & Business\nEtiquette Consulting",
      text: "Equipping clients with insights into Chinese and GCC business cultures to ensure successful communication and deal-making",
    },
  ];

  const panelStyle = {
    marginBottom: 16,
    borderRadius: 10,
    border: "none",
  };

  const WHYUS = (panelStyle) => [
    {
      key: "1",
      label: "Exclusive Focus",
      children: "GCC market specialization.",
      style: panelStyle,
    },
    {
      key: "2",
      label: "Tailored Solutions",
      children: "Custom strategies.",
      style: panelStyle,
    },
    {
      key: "3",
      label: "Cultural Understanding",
      children: "China-GCC expertise.",
      style: panelStyle,
    },
    {
      key: "4",
      label: "Strong Access",
      children: "Key country access.",
      style: panelStyle,
    },
    {
      key: "5",
      label: "End-to-End Service",
      children: "Extensive assistance from market entry to long-term support.",
      style: panelStyle,
    },
    {
      key: "6",
      label: "Multilingual Team",
      children: "Seamless communication.",
      style: panelStyle,
    },
    {
      key: "7",
      label: "Bilateral Market Insight",
      children: "Economic and regulatory comprehension.",
      style: panelStyle,
    },
    {
      key: "8",
      label: "Trusted Cross-Border Facilitator",
      children: "Reliable navigation in complex environments.",
      style: panelStyle,
    },
  ];

  const TEAMS = [
    {
      name: "Ines Djibet",
      position: "CEO & Managing Director",
      info: "Leads the company’s strategic vision, manages core operations, and cultivates high-level partnerships across China and the Middle East.",
      img: "Ines-Djibet.svg",
    },
    {
      name: "Baijia Li",
      position: "Marketing & Promotion Manager (China)",
      info: "Leads marketing and promotional strategies; develops networks and identifies Chinese clients looking for opportunities in the GCC.",
      img: "Baijia-Li.svg",
    },
    {
      name: "Sabrina Maaouia",
      position: "Operations Manager",
      info: "Manages all operations and internal processes, ensuring successful project delivery; fluent in Chinese, Arabic, and English.",
      img: "Sabrina-Maaouia.svg",
    },
    {
      name: "Anamele Guettaf",
      position: "Strategy Consultant",
      info: "Assisting clients in developing business strategies for entering and expanding in China and the GCC.",
      img: "Anamele-Guettaf.svg",
    },
    {
      name: "Mohamed Sherif",
      position: "Head of Logistics",
      info: "Manages and coordinates logistics for client delegations, business travel, and events.",
      img: "Mohamed-Sherif.svg",
    },
  ];

  return (
    <div className="ew-view">
      <HeroSection
        position={"left"}
        bg="/hero-2.png"
        data={{
          keyword: null,
          title: (
            <h1 className="ew-small-h1" style={{ maxWidth: "90vw" }}>
              We Accelerate <span>Growth</span> for Visionary Companies Through
              Elite Strategy.
            </h1>
          ),
          text: (
            <div
              className="ew-hero-content-text"
              style={{ marginLeft: "50%", width: "50%" }}
            >
              <span className="ew-keyword">Our Mission</span>
              <p
                className="ew-first-p"
                style={{ marginTop: 22, marginBottom: 32 }}
              >
                East-Wind Connect is a cross-border advisory firm specializing
                in connecting Chinese businesses and investors with the GCC's
                fastest-growing markets. We act as a trusted partner for
                corporations, government entities, and investors, facilitating
                high-level engagements and unlocking strategic opportunities
                across both regions.
              </p>
              <span className="ew-keyword">Our approach</span>
              <p
                className="ew-second-p"
                style={{ marginTop: 22, marginBottom: 100 }}
              >
                As China and the GCC enter a new era of economic cooperation
                defined by shared ambitions in innovation, infrastructure, and
                sustainability. East-Wind Connect stands as a trusted partner at
                the center of this transformation, aligning business interests,
                fostering bilateral dialogue, and turning strategic opportunity
                into long-term collaboration.
              </p>
            </div>
          ),
          cta: null,
        }}
      />

      <section
        className="ew-about"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span style={{ marginBottom: 16 }}>What we do</span>
        <h3
          className="ew-closure"
          style={{
            textAlign: "center",
            fontSize: 48,
            maxWidth: 700,
            marginBottom: 64,
          }}
        >
          How We Drive Strategic Success Step by Step
        </h3>
        <div className="ew-card-grid">
          {PROCESS.map((service, i) => {
            // if (i === 4) return <div key={i} className="ew-icon-card"></div>;
            return (
              <div
                key={i}
                className={`ew-icon-card ew-icon-card-2 ${
                  i === 1 || i === 4 ? "ew-icon-card-bg" : ""
                }`}
              >
                <div>
                  <h6 style={{ whiteSpace: "pre-line" }}>{service.title}</h6>
                  <span>{service.icon}</span>
                </div>
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="ew-section-card-2">
        <div>
          <h3 style={{ textAlign: "center", marginBottom: 32 }}>
            What We Deliver — With Precision and Purpose
          </h3>
          <div className="ew-section-banner">
            <img src="/office.jpg" alt="what_we_offer" />
          </div>
          <div className="ew-grid-2-2">
            <h4
              style={{ textAlign: "center", marginBottom: 32, width: "100%" }}
            >
              From strategy to execution, our offerings are built to solve
              complex challenges, unlock growth, and fuel sustainable success.
            </h4>
            {WHATWEOFFER.map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", flexDirection: "column", gap: 22 }}
              >
                <h6>{item.title}</h6>
                <p style={{ maxWidth: "40%" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="whatweoffer">
        <span>Why choose us</span>
        <h3 style={{ margin: "16px 0 32px 0" }}>
          Where others advise, we architect transformation: Tailored,
          actionable, and built to last.
        </h3>
        <p style={{ marginBottom: 64 }}>
          We combine deep expertise with tailored strategies to deliver
          measurable, lasting results.
        </p>
        <div className="ew-splited">
          <div className="ew-splited-img">
            <img src="building.jpg" alt="blue-building" />
          </div>
          <div className="ew-splited-list">
            <Collapse
              bordered={false}
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              className="ew-collapse"
              expandIcon={({ isActive }) => (
                <CustomArrow
                  style={{
                    transform: `rotate(${isActive ? 180 : 0}deg)`,
                    transition: "transform 0.3s ease",
                  }}
                />
              )}
              style={{ background: "transparent" }}
              items={WHYUS(panelStyle)}
            />
          </div>
        </div>
      </section>

      <div className="ew-bg-blue">
        <section>
          <span>Our team</span>
          <div
            className="ew-splited"
            style={{ marginTop: 32, marginBottom: 64 }}
          >
            <h3>The Minds Powering Your Success</h3>
            <p>
              Our team brings together decades of industry expertise to turn
              complex challenges into strategic wins.
            </p>
          </div>
          <div className="ew-card-grid">
            {TEAMS.map((member, i) => {
              // if (i === 4) return <div key={i} className="ew-icon-card"></div>;
              return (
                <div key={i} className="ew-img-card">
                  <img src={member.img} alt={member.name} />
                  <span>{member.icon}</span>
                  <h6 style={{ whiteSpace: "pre-line" }}>{member.name}</h6>
                  <span>{member.position}</span>
                  <p>{member.info}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 0,
        }}
      >
        <span>Our Market Connectivity</span>
        <h3 style={{ textAlign: "center", marginTop: 16 }}>
          Empowering Regions That Move the World
        </h3>
        <p
          style={{
            maxWidth: "70%",
            textAlign: "center",
            margin: "32px 0 64px",
          }}
        >
          Our strategic presence in China and the GCC region enables us to
          deliver high-impact solutions in the world’s fastest-growing
          economies.
        </p>
      </section>
      <div className="ew-map">
        <CustomMap />
      </div>
    </div>
  );
}

export default AboutView;
