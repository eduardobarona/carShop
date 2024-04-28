import React, { useState } from 'react';
import './clienteForm.css';

function ClienteForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    fiscalId: '',
    idType: 'Cédula',
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
      <h2>Datos del cliente</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Número de contacto:
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </label>
        <label>
          Identificación fiscal:
          <input type="text" name="fiscalId" value={formData.fiscalId} onChange={handleChange} required />
        </label>
        <label>
          Tipo de identificación:
          <select name="idType" value={formData.idType} onChange={handleChange}>
            <option value="Cédula">Cédula</option>
            <option value="RUC">RUC</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </label>
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
}

export default ClienteForm;

