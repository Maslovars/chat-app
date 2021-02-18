import './App.css';
import ContactList from "./components/ContactList"
import users from "./components/ContactList"

function App() {
  return (
    <div className="App">
      <ContactList users={users} />

      {/* <Contact avatar="https://randomuser.me/api/portraits/men/37.jpg" name="Mitchell Hamilton" online />
      <Contact avatar="https://randomuser.me/api/portraits/women/10.jpg" name="Marion Reed" />
      <Contact avatar="https://randomuser.me/api/portraits/women/52.jpg" name="Nina Ward" online /> */}
    </div>
  );
}

export default App;
