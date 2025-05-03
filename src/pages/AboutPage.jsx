import useSEO from "../hooks/useSeoMeta";
import AboutView from "../sections/about/about-view";

function AboutPage() {
  useSEO({
    title: "About Us - East Wind Connect",
    description:
      "East Wind Connect helps visionary companies grow faster with elite strategy, innovation, and results-driven execution.",
  });

  return (
    <main id="about-page">
      <AboutView />
    </main>
  );
}

export default AboutPage;
