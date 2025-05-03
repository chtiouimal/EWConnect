import useSEO from "../hooks/useSeo";
import CurrentProjectView from "../sections/projects/current-project/current-project-view";

function CurrentProjectPage() {
  useSEO({
    title: "Strategic GCC Business Delegation - East Wind Connect",
    description:
      "Unlocking access to the GCC's leading projects, markets, and institutions. Join us for an unprecedented multinational mission to the UAE, Saudi Arabia, and Qatar from August 24th - August 29th, 2025.",
  });

  return (
    <main id="current-project-page">
      <CurrentProjectView />
    </main>
  );
}

export default CurrentProjectPage;
