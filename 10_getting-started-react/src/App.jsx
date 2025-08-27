import { useState } from "react";
import "./App.css";

function App() {
  const [aboutMe, setAboutMe] = useState(false);

  const handleClick = () => {
    setAboutMe(!aboutMe);
  };

  return (
    <div className="app-container">
      <h1 className="title">About Me</h1>
      <button className="toggle-btn" onClick={handleClick}>
        {aboutMe ? "Hide" : "Show"}
      </button>

      {aboutMe && (
        <div className="card">
          <h2>Name: Patrick Pioquinto</h2>
          <h2>Course & Year: BSIS 3-A</h2>
          <h2>Fun Fact about me: It took me 18 years before I learned to ride a bike.</h2>
          <h3>Why I want to learn React:</h3>
          <p>
            I want to learn React because as a BSIS
            student, most of the systems we develop are web-based, and React is
            one of the most widely used tools for building modern and
            interactive applications. It will help me create user-friendly
            interfaces that connect well with back-end systems like databases
            and APIs. I also know that React is in demand in the industry, so
            learning it can give me an advantage when it comes to internships,
            job opportunities, or even freelancing. Most importantly, I see it
            as a valuable skill that I can apply in future projects, especially
            in our capstone, to make the system more scalable and professional.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
