import useSEO from "../hooks/useSeo";
import LandingView from "../sections/landing/landing-view";

function LandingPage() {
  useSEO({
    title: "East Wind Connect",
    description: "Guiding Your Business Toward Lasting Success.",
  });
  return (
    <main id="home-page">
      <LandingView />
    </main>
  );
}

export default LandingPage;
