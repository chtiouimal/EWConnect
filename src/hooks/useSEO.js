import { useEffect } from "react";

const useSEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "description");
      newMeta.setAttribute("content", description);
      document.head.appendChild(newMeta);
    }

    // Add robots meta tag explicitly
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      const robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      robotsMeta.setAttribute("content", "index, follow");
      document.head.appendChild(robotsMeta);
    }

    const jsonLD = {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "East Wind Connect",
      url: "https://www.eastwindconnect.com",
      logo: "https://www.eastwindconnect.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: [
          "mailto:Info@eastwind-connect.com",
          "mailto:Ines.djibet@china-eastwind.com",
        ],
        contactType: "customer service",
      },
    };

    const jsonLdScript = document.createElement("script");
    jsonLdScript.type = "application/ld+json";
    jsonLdScript.textContent = JSON.stringify(jsonLD);
    document.head.appendChild(jsonLdScript);
  }, [title, description]);
};

export default useSEO;
