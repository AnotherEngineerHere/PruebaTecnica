import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/countries');
        const countryNames = response.data.map((country) => country.name.common);
        setCountries(countryNames);
      } catch (error) {
        console.error('Error al obtener los países:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'selectedCountry') {
      setSelectedCountry(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (fullName && selectedCountry) {
      try {
        const response = await axios.post('http://localhost:3005/api/form', {
          fullName,
          country: selectedCountry,
        });
        console.log('Formulario enviado:', response.data);
        setSubmitted(true);
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="login-box">
      <h2>Formulario</h2>
      {submitted ? (
        <p>¡Formulario enviado con éxito!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nombre completo:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="selectedCountry">País:</label>
            <select
              id="selectedCountry"
              name="selectedCountry"
              value={selectedCountry}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar país</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <button className="submit-button" type="submit">
              Enviar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;