import React from "react";

function App() {
  return (
    <>
      <div className="profile-container">
        <h1 className="name">Muhammad Ahmed</h1>

        <p className="bio">
          I am a beginner web developer learning React. I love building simple
          and clean websites.
        </p>

        <img
          className="profile-image"
          src="https://img.freepik.com/free-photo/close-up-portrait-handsome-smiling-young-man-white-t-shirt-blurry-outdoor-nature_176420-6305.jpg?semt=ais_incoming&w=740&q=80"
          alt="profile"
        />

        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>

        <footer className="footer">
          <p>© 2026 My React Page</p>
        </footer>
      </div>
    </>
  );
}

export default App;
