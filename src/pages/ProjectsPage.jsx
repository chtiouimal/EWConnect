import useSEO from "../hooks/useSeo";
import ProjectsView from "../sections/projects/projects-view";

function ProjectsPage() {
  useSEO({
    title: "Our Projects - East Wind Connect",
    description:
      "Explore the projects we're working on to accelerate growth for visionary companies across industries.",
  });
  return (
    <main id="projects-page">
      <ProjectsView />
    </main>
  );
}

export default ProjectsPage;
