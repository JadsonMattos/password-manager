import React, { useState } from 'react';
import { FormProps } from '../Types';

const INITIAL_STATE = ({
  serviceName: '',
  id: '',
  login: '',
  password: '',
  url: '',
});

function Form({ onCancel, onRegister }: FormProps) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    onRegister(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const isValid = formData.serviceName !== ''
  && formData.login !== ''
  && formData.password.length >= 8
  && formData.password.length <= 16
  && /\d/.test(formData.password)
  && /[a-zA-Z]/.test(formData.password)
  && /[!@#$%^&*]/.test(formData.password);

  const validationMessage = [
    {
      text: 'Possuir 8 ou mais caracteres',
      valid: formData.password.length >= 8,
    },
    {
      text: 'Possuir letras e números',
      valid: /\d/.test(formData.password) && /[a-zA-Z]/.test(formData.password),
    },
    {
      text: 'Possuir algum caractere especial',
      valid: /[!@#$%^&*]/.test(formData.password),
    },
    {
      text: 'Possuir até 16 caracteres',
      valid: formData.password.length <= 16,
    },
  ];

  return (
    <form className="form" onSubmit={ handleSubmit }>
      <div className="left">
        <label htmlFor="serviceName">
          Nome do Serviço *
          <br />
          <input
            type="text"
            id="serviceName"
            name="serviceName"
            value={ formData.serviceName }
            onChange={ handleChange }
          />
        </label>
        <div className="center">
          <label htmlFor="login">
            Login *
            <br />
            <input
              type="text"
              id="login"
              name="login"
              value={ formData.login }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha *
            <br />
            <input
              type={ showPassword ? 'text' : 'password' }
              id="password"
              name="password"
              value={ formData.password }
              onChange={ handleChange }
            />
          </label>
        </div>
        <label htmlFor="url">
          URL
          <br />
          <input
            type="text"
            id="url"
            name="url"
            value={ formData.url }
            onChange={ handleChange }
          />
        </label>
        <br />
        <span>* Campos obrigatórios</span>
        <br />
        <button type="submit" disabled={ !isValid }>
          Cadastrar
        </button>
        <button type="button" onClick={ onCancel }>
          Cancelar
        </button>
        <button
          type="button"
          data-testid="show-hide-form-password"
          onClick={ handlePassword }
        >
          { showPassword ? 'Esconder' : 'Mostrar'}
        </button>
      </div>
      <div className="right">
        { validationMessage.map((message) => (
          <p
            key={ message.text }
            className={ message.valid
              ? 'valid-password-check' : 'invalid-password-check' }
          >
            { message.text }
          </p>
        ))}
      </div>
    </form>
  );
}

export default Form;
