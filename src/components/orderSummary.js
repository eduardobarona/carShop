import React from 'react';

function OrderSummary({ clientData, carData, selectedServices, estimatedDelivery, onSubmit, onPreviousStep, orderSent }) {
  const handleSubmit = () => {
    // Lógica para enviar la orden de trabajo
    onSubmit('Fecha estimada de entrega'); // Suponiendo que se calcula la fecha estimada de entrega
  };

  const resetOrder = () => {
    onPreviousStep();
  };

  return (
    <div>
      <h2>Orden de trabajo</h2>
      <p>Cliente: {clientData.name}</p>
      <p>Vehículo: {carData.brand} {carData.model}</p>
      <p>Servicios seleccionados: {selectedServices.join(', ')}</p>
      <p>Fecha estimada de entrega: {estimatedDelivery}</p>
      {!orderSent ? (
        <>
          <button onClick={handleSubmit}>Confirmar orden</button>
          <button onClick={resetOrder}>Atrás</button>
        </>
      ) : (
        <p>¡Orden enviada con éxito!</p>
      )}
    </div>
  );
}

export default OrderSummary;