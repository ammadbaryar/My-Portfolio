import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // stack heading above calendar
        alignItems: "center",    // center horizontally
        justifyContent: "center", // center vertically (optional if needed)
        paddingBottom: "10px",
      }}
    >
      <h1
        style={{
          paddingBottom: "20px",
          textAlign: "center",
        }}
        className="project-heading"
      >
        Days I <strong style={{color : "#a855f7" }}>Code</strong>
      </h1>
      <GitHubCalendar
        username="ammadbaryar"
        blockSize={15}
        blockMargin={5}
        color="#6102ce"
        fontSize={16}
      />
    </div>
  );
};

export default Github;
