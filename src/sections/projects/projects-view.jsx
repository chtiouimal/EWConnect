import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../componenets";

function ProjectsView() {
  const navigate = useNavigate();
  const EVENTS = [
    {
      date: "Q2 2025",
      img: "1.jpg",
      events: [
        {
          title: "EWC Strategic Delegation Mission to China",
          info: "Partnership Development and Agreement Signing Initiatives",
        },
      ],
    },
    // {
    //   date: "Q3 2025",
    //   img: "2.jpg",
    //   events: [
    //     {
    //       title: "Chinese Delegation to Egypt",
    //       info: "Market Exploration and Bilateral Investment Opportunities",
    //     },
    //     {
    //       title:
    //         "China–GCC Strategic Delegation Mission (Qatar, Saudi Arabia, United Arab Emirates)",
    //       info: "Investment and Collaboration Mission",
    //     },
    //   ],
    // },
    {
      date: "Q4 2025",
      img: "3.jpg",
      events: [
        {
          title: "UAE–China AI Technology and Green Sustainability Exhibition",
          info: "Showcasing Innovation in Artificial Intelligence and Sustainable Development",
        },
        {
          title:
            "China–GCC Strategic Delegation Mission (Qatar, Saudi Arabia, United Arab Emirates)",
          info: "Investment and Collaboration Mission",
        },
      ],
    },
    {
      date: "Q1 2026",
      img: "4.jpg",
      events: [
        {
          title: "UAE Investment & Collaboration Mission (Abu Dhabi & Dubai)",
          info: "Facilitating Cross-Border Partnerships and Strategic Investments",
        },
        {
          title: "Saudi Arabia Vision 2030 Partnership & Investment Delegation",
          info: "Aligning with Vision 2030 Initiatives and Advancing Investment Opportunities",
        },
      ],
    },
    {
      date: "Q2 2026",
      img: "5.jpg",
      events: [
        {
          title: "Saudi Arabia International Exhibition Participation",
          info: "Trade Show Engagement and Sector-Specific Showcasing",
        },
        {
          title:
            "Investment and Market Expansion Mission (Qatar & Saudi Arabia)",
          info: "Regional Market development and Development of Strategic Alliances",
        },
      ],
    },
  ];

  return (
    <div className="ew-view">
      <section
        className="ew-projects-hero"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 64,
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Where <span>Strategy</span> Meets <span>Innovation.</span> Global
          Results Delivered.
        </h1>
        <p className="ew-first-p" style={{ textAlign: "center" }}>
          From global business delegations to cutting-edge tech expos, our
          projects are a testament to the power of strategic execution at scale.
          Explore how we help ambitious organizations lead, expand, and
          innovate.
        </p>
      </section>

      <section
        id="current-project-card"
        style={{ paddingBottom: 32, paddingTop: 0 }}
      >
        <span>Current project</span>
      </section>
      <div
        className="ew-image-text ew-current-prject"
        style={{ margin: "0 32px", borderRadius: 34, maxHeight: "unset" }}
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
              onClick={() => {
                navigate("current");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
          <span>Facilitating relations between China & GCC</span>
        </div>
      </div>

      <section id="upcomingProjects" style={{ paddingBottom: 0 }}>
        <span>Upcoming projects</span>
        <div className="ew-splited" style={{ marginTop: 32, marginBottom: 64 }}>
          <h3 style={{ maxWidth: "45%" }}>
            <span>Upcoming</span> Missions. Unmatched Opportunities.
          </h3>
          <p>
            From high-level business delegations to innovation-driven expos, our
            upcoming initiatives are designed to unlock new markets, foster
            global partnerships, and accelerate strategic growth.
          </p>
        </div>
      </section>
      <div className="ew-full-grid ew-projects-grid">
        {EVENTS.map((event) => (
          <div className="ew-project-card" key={event.date}>
            <div className="ew-project-card-img">
              <img src={event.img} alt={event.date} />
            </div>
            <div className="ew-project-card-text">
              <span>{event.date}</span>
              {event.events.map((e, i) => (
                <div key={i}>
                  <h4>{e.title}</h4>
                  <p>{e.info}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="ew-about">
        <h3 className="ew-closure">
          Looking to Join the Next Mission? We’re here to <span>connect</span>
          and <span>explore</span> what’s possible.
        </h3>
      </section>
    </div>
  );
}

export default ProjectsView;
