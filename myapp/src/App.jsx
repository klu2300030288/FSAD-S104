import React from "react";

function App() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "2rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "2rem auto",
  };

  const headerStyle = {
    color: "#333",
    fontSize: "2rem",
    marginBottom: "1rem",
  };

  const textStyle = {
    color: "#555",
    fontSize: "1.1rem",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headerStyle}>Welcome to My React App</h1>
        <p style={textStyle}>
          This is a simple home page created entirely in <code>App.js</code>.
          You don't need to change any other files to get this working. Start building your app from here!
        </p>
      </div>
    </div>
  );
}

export default App;
