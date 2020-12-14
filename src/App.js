import './App.css';
import Homepage from './components/home-page';
import MyPetsPage from './components/my-pets-page';
import PetPage from './components/pet-page';
import ProfileSettings from './components/profile-settings';

function App() {
  return (
    <div className="App">
      <Homepage />
      <ProfileSettings />
      <MyPetsPage />
      <PetPage/>
    </div>
  );
}

export default App;
