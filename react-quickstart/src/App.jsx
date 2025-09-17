import './App.css'

const isStudent = true;

function App() {
  let statusMessage;

  if (isStudent) {
    statusMessage = <p>I am currently a student.</p>;
  } else {
    statusMessage = <p>I am working full-time.</p>;
  }

  return (
    <div>
      <h1>Conditional rendering</h1>
      <h3>Hello, I’m Patrick!</h3>
      {statusMessage}
    </div>
  );
}

export default App
