import React, { useState } from "react";
import "../styles/form.scss";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';  // SweetAlert para popups estilizados

const TicketPurchase = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para controlar el "cargando"
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado para controlar si se ha enviado el formulario

  const form = useRef();

  // Maneja el envío del formulario
  const sendEmail = (e) => {
    e.preventDefault();  // Prevenir comportamiento por defecto

    if (!isChecked) {
      Swal.fire({
        title: 'Error',
        text: 'Debe aceptar los términos y condiciones para continuar.',
        icon: 'error',
      });
      return;
    }

    // Iniciar el estado de "cargando"
    setLoading(true);

    // Enviar el formulario usando emailjs
    emailjs
      .sendForm('service_nguzaoq', 'template_xnzxnie', form.current, {
        publicKey: 'sL-s-Yl-QfLO6LKkT',
      })
      .then(
        () => {
          setLoading(false); // Dejar de mostrar "cargando"
          setIsButtonDisabled(true);  // Deshabilitar el botón
          setIsSubmitted(true);  // Marcar que el formulario ha sido enviado

          // Mostrar popup de éxito
          Swal.fire({
            title: '¡Formulario enviado!',
            text: 'Te contactaremos pronto.',
            icon: 'success',
          });
        },
        (error) => {
          setLoading(false);  // Dejar de mostrar "cargando" en caso de error

          // Mostrar popup de error
          Swal.fire({
            title: 'Error',
            text: 'Hubo un error al enviar el formulario, inténtelo de nuevo.',
            icon: 'error',
          });
        },
      );
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="purchase-wrapper" id="entradas">
      <h2>Compra tu entrada</h2>

      {/* Formulario con onSubmit */}
      <form ref={form} onSubmit={sendEmail}>
        {/* Campos del formulario */}
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
          </select>
        </div>
        <div className="label-wrapper">
          <label>¿Algo a tener en cuenta? ¡No seas tímido!</label>
          <textarea name="user_message" required />
        </div>
        <p>Usted comprende que acepta ser grabado para la distribución de Naranja Sound System y que su voz y su imagen pueden usarse para promover futuros eventos.</p>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />
          Acepto ser grabado * 
        </label>

        {/* Botón de envío con deshabilitado si ya se ha enviado */}
        <input
          type="submit"
          className="purchase-button"
          disabled={!isChecked || isButtonDisabled || loading || isSubmitted}  // Deshabilitar si ya fue enviado
          value={loading ? "Cargando..." : "Comprar Entrada"}
        />
      </form>
    </div>
  );
};

export default TicketPurchase;
