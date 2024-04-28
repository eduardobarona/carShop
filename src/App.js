import React, { useState } from 'react';
import ClienteForm from './components/clienteForm';
import VehiculoForm from './components/vehiculoForm';
import ServiceSelectionForm from './components/serviceSelectionForm';
import OrderSummary from './components/orderSummary';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [clientData, setClientData] = useState({});
  const [carData, setCarData] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);
  const [estimatedDelivery, setEstimatedDelivery] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleClientSubmit = (data) => {
    setClientData(data);
    handleNextStep();
  };

  const handleCarSubmit = (data) => {
    setCarData(data);
    handleNextStep();
  };

  const handleServicesSelection = (services) => {
    setSelectedServices(services);
    handleNextStep();
  };

  const handleOrderSubmit = () => {
    const currentDate = new Date();
    const deliveryDate = new Date(currentDate);
    deliveryDate.setDate(currentDate.getDate() + 2);
    setEstimatedDelivery(deliveryDate.toLocaleString());
    setOrderSent(true);
  };

  const handleResetOrder = () => {
    setClientData({});
    setCarData({});
    setSelectedServices([]);
    setEstimatedDelivery('');
    setOrderSent(false);
    setStep(1);
  };

  return (
    <div className="app">
      <h1>Car Shop</h1>
      {step === 1 && <ClienteForm onSubmit={handleClientSubmit} />}
      {step === 2 && <VehiculoForm onSubmit={handleCarSubmit} onPreviousStep={handlePreviousStep} />}
      {step === 3 && (
        <ServiceSelectionForm
          services={['Cambio de aceite', 'Cambio de frenos', 'Alineación y balanceo', 'Diagnóstico general', 'Revisión sistema eléctrica', 'Revisión de la suspensión']}
          onSubmit={handleServicesSelection}
          onPreviousStep={handlePreviousStep}
        />
      )}
      {step === 4 && (
        <OrderSummary
          clientData={clientData}
          carData={carData}
          selectedServices={selectedServices}
          estimatedDelivery={estimatedDelivery}
          onSubmit={handleOrderSubmit}
          onPreviousStep={handlePreviousStep}
          orderSent={orderSent}
        />
      )}
      {orderSent && (
        <button onClick={handleResetOrder}>Nueva orden</button>
      )}
    </div>
  );
}

export default App;

