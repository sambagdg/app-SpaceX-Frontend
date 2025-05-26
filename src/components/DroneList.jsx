import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DroneList() {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/drones")
      .then(res => setDrones(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Liste des drones enregistrés</h2>
      <div className="row">
        {drones.map(drone => (
          <div key={drone.idDrone} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{drone.modele}</h5>
                <p className="card-text">
                  <strong>Poids :</strong> {drone.poids} kg<br />
                  <strong>Portée :</strong> {drone.porteeMaximale} m<br />
                  <strong>Batterie :</strong> {drone.capaciteBatterie} mAh<br />
                  <strong>GPS :</strong> {drone.gpsModule?.latitude}, {drone.gpsModule?.longitude}<br />
                  <strong>Camera :</strong> {drone.camera?.resolution} ({drone.camera?.zoom}x)
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
