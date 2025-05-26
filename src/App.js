import logo from './logo.svg';
import './App.css';
import DroneList from './components/DroneList';
import FlightControlForm from './components/FlightControlForm';

function App() {
  return (
   <div style={{ padding: '20px' }}>
      <h1>Contrôle des Drones SpaceX fait par Samba GANDEGA</h1>
      <DroneList />
      <FlightControlForm />
    </div>
  );
}

export default App;
