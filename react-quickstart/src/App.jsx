import './App.css'


const user = {
  name: "Patrick Pioquinto",
  age: 21,
  country: "Philippines",
  hobbies: ["Programming", "Designing", "Reading"],
};

function App() {
  return (
    <div>
      <h1>Displaying data</h1>
      <h3>Hello, I’m {user.name}!</h3>
      <p>Age: {user.age}</p>
      <p>From: {user.country}</p>
      <p>Hobbies: {user.hobbies.join(", ")}</p>
    </div>
  );
}


export default App
