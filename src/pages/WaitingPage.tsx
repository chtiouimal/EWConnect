import LOGO from "../assets/east-wind-connect.png";

import { useState } from "react";

function WaitingPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("Ines.djibet@china-eastwind.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="ew-temp-hero"
        style={{
          maxWidth: "80%",
          minWidth: 480,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 64,
        }}
      >
        <div className="ew-temp-logo">
          <img src={LOGO} alt="east-wind-connect" />
        </div>
        <h1 style={{ textAlign: "center" }}>
          We are currently updating our website and will be back soon
        </h1>
        <p
          style={{
            padding: "0 40px",
            textAlign: "center",
            position: "relative",
          }}
        >
          For any inquiries please feel free to reach out to{" "}
          <a onClick={handleCopy}>Ines.djibet@china-eastwind.com</a>
          {copied && (
            <span
              style={{
                height: 40,
                position: "absolute",
                bottom: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                color: "#26b49a",
              }}
            >
              Copied!
            </span>
          )}
        </p>
        <span>Thank you for your patience!</span>
      </div>
    </div>
  );
}

export default WaitingPage;
