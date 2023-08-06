import './App.css';
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import Form from './components/Form';
import { Service } from './Types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [hidePassword, setHidePassword] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleRegister = (data: Service) => {
    // const newService: Service{ ...data, id: Date.now().toString() };
    setServices([...services, { ...data, id: Date.now().toString() }]);
    setShowForm(false);
    Swal.fire({
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleRemove = (id: string) => {
    setServices((prevServices) => prevServices.filter((service) => service.id !== id));
  };

  const handleCheckbox = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <div className="container">
      <h1>
        Gerenciador
        <span> * </span>
        de
        <span> * </span>
        Senhas
      </h1>
      { !showForm && (
        <button type="button" onClick={ handleClick }>
          Cadastrar nova senha
        </button>
      )}
      <hr />
      { !services.length && <p>Nenhuma senha cadastrada</p> }
      { showForm && <Form onCancel={ handleCancel } onRegister={ handleRegister } />}
      <div className="container-card">
        <label hidden={ !showForm } className="show">
          <input
            type="checkbox"
            checked={ hidePassword }
            onChange={ handleCheckbox }
          />
          Esconder senhas
        </label>
        <br />
        { services.map((service) => (
          <div key={ service.id } className="card">
            <a href={ service.url } target="_blank" rel="noopener noreferrer">
              { service.serviceName }
            </a>
            <p>
              Login:
              {' '}
              <span>{service.login}</span>
            </p>
            <p>
              Password:
              {' '}
              {hidePassword ? '******' : service.password}
            </p>
            <button
              type="button"
              onClick={ () => handleRemove(service.id) }
              data-testid="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
