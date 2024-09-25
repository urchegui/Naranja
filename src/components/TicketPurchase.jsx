import React, { useState } from "react";
import "../styles/form.scss";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TbVinyl } from "react-icons/tb";

const TicketPurchase = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [buttonText, setButtonText] = useState("Comprar Entrada");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const form = useRef();

  const sendEmail = () => {
    console.log("queso")
    emailjs
      .sendForm('service_nguzaoq', 'template_xnzxnie', form.current, {
        publicKey: 'sL-s-Yl-QfLO6LKkT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handlePurchase = () => {
    if (isChecked) {
      setButtonText("Te contactaremos");
      setIsButtonDisabled(true);
      sendEmail();
    }
  };

  return (
    <div className="purchase-wrapper">
      <h2>Compra tu entrada</h2>

      <form ref={form} onSubmit={sendEmail}>
        <div className="label-wrapper">
          <label>Nombre</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="label-wrapper">
          <label>Apellido</label>
          <input type="text" name="user_lastname" required />
        </div>
        <div className="label-wrapper">
          <label>DNI</label>
          <input type="text" name="user_dni" required />
        </div>
        <div className="label-wrapper">
          <label>Correo</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="label-wrapper">
          <label>Teléfono</label>
          <input type="tel" name="user_phone" required />
        </div>
        <div className="label-wrapper">
          <label>Alcohol</label>
          <select name="user_alcohol" id="alcohol" required>
            <option value="" selected disabled>Selecciona tu bebida</option>
            <option value="ron">Ron</option>
            <option value="whisky">Whisky</option>
            <option value="vodka">Vodka</option>
            <option value="gin">Gin</option>
            <option value="Nada">Nada</option>

          </select>
        </div>
        <div className="label-wrapper">
          <label>Cerveza o tinto</label>
          <select name="user_beer" id="cerveza" required>
            <option value="" selected disabled>Selecciona tu bebida</option>
            <option value="Cerveza">Cerveza</option>
            <option value="Tinto">Tinto</option>
            <option value="Nada">Nada</option>
          </select>        </div>
        <div className="label-wrapper">
          <label>¿Algo a tener en cuenta? ¡No seas tímido!</label>
          <textarea name="user_message" required />
        </div>

    
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />
          Acepto ser grabado * Usted comprende que acepta ser grabado para la distribución de Naranja Sound System y que su voz y su imagen pueden usarse para promover futuros eventos.
        </label>
        <input
          type="submit"
          className="purchase-button"
          onClick={handlePurchase}
          disabled={!isChecked || isButtonDisabled}
          value={buttonText}
        />
      </form>
    </div>
  );
};

export default TicketPurchase;
