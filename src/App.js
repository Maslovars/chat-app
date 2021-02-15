import './App.css';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact avatar="https://randomuser.me/api/portraits/men/37.jpg" name="Mitchell Hamilton" online />
      <Contact avatar="https://randomuser.me/api/portraits/women/10.jpg" name="Marion Reed" />
      <Contact avatar="https://randomuser.me/api/portraits/women/52.jpg" name="Nina Ward" online />
    </div>
  );
}

export default App;
