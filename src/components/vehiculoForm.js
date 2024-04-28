import React, { useState } from 'react';

function VehiculoForm({ onSubmit, onPreviousStep }) {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    plate: '',
    fuelLevel: '',
    conditionDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Datos del vehículo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Marca:
          <input type="text" name="brand" value={formData.brand} onChange={handleChange} required />
        </label>
        <label>
          Modelo:
          <input type="text" name="model" value={formData.model} onChange={handleChange} required />
        </label>
        <label>
          Placa:
          <input type="text" name="plate" value={formData.plate} onChange={handleChange} required />
        </label>
        <label>
          Nivel de gasolina:
          <input type="text" name="fuelLevel" value={formData.fuelLevel} onChange={handleChange} required />
        </label>
        <label>
          Detalles de la condición:
          <textarea name="conditionDetails" value={formData.conditionDetails} onChange={handleChange} />
        </label>
        <button type="submit">Siguiente</button>
        <button type="button" onClick={onPreviousStep}>Atrás</button>
      </form>
    </div>
  );
}

export default VehiculoForm;