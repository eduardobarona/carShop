import React, { useState } from 'react';
import './serviceSelectionForm.css';

function ServiceSelectionForm({ services, onSubmit, onPreviousStep }) {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedServices([...selectedServices, value]);
    } else {
      setSelectedServices(selectedServices.filter((service) => service !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedServices);
  };

  return (
    <div>
      <h2>Selección de servicios</h2>
      <form onSubmit={handleSubmit}>
        {/* Lista de servicios */}
        {services.map((service) => (
          <div key={service}>
            <input
              type="checkbox"
              id={service}
              value={service}
              checked={selectedServices.includes(service)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={service}>{service}</label>
          </div>
        ))}
        <button type="submit">Siguiente</button>
        <button type="button" onClick={onPreviousStep}>Atrás</button>
      </form>
    </div>
  );
}

export default ServiceSelectionForm;