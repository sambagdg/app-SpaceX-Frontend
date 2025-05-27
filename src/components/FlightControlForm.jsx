import React, { useState } from 'react';
import axios from 'axios';

export default function FlightControlForm() {
  const [form, setForm] = useState({
    vitesse: '',
    altitude: '',
    droneId: '',
    gpsId: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/flight-controls/register', {
      vitesse_actuelle: parseFloat(form.vitesse),
      altitude_cible: parseFloat(form.altitude),
      drone: { idDrone: parseInt(form.droneId) },
      positionCible: { idGpsModule: parseInt(form.gpsId) }
    })
      .then(() => {
        alert('FlightControl enregistré avec succès ');
        setForm({ vitesse: '', altitude: '', droneId: '', gpsId: '' }); // reset form
      })
      .catch((err) => {
        alert("Erreur lors de l'enregistrement ");
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <h2 className="mb-3"> Ajouter un FlightControl</h2>
      <div className="row g-2 mb-3">
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            name="vitesse"
            placeholder="Vitesse"
            value={form.vitesse}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            name="altitude"
            placeholder="Altitude"
            value={form.altitude}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            name="droneId"
            placeholder="ID Drone"
            value={form.droneId}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            name="gpsId"
            placeholder="ID GPS Cible"
            value={form.gpsId}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="btn btn-primary">Enregistrer</button>
    </form>
  );
}
