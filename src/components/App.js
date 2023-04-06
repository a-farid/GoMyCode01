import FullName from "./Profile/FullName";
import Address from "./Profile/Address";
import ProfilePhoto from "./Profile/ProfilePhoto";
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <div className="infos">
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
