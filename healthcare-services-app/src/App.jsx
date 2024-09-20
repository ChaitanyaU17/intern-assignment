import { useState } from "react";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";
import "./App.css";

const App = () => {
  const [services, setServices] = useState([]);
  const [serviceToEdit, setServiceToEdit] = useState(null);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

  const editService = (index) => {
    setServiceToEdit({ ...services[index], index });
  };

  const updateService = (updatedService) => {
    const updatedServices = [...services];
    updatedServices[serviceToEdit.index] = updatedService;
    setServices(updatedServices);
    setServiceToEdit(null);
  };

  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <div className="App">
      <h1>Healthcare Services</h1>
      <ServiceForm
        addService={addService}
        serviceToEdit={serviceToEdit}
        updateService={updateService}
      />
      <ServiceList services={services} onEdit={editService} onDelete={deleteService} />
    </div>
  );
};

export default App;
