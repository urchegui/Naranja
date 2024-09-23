import React, { useState } from "react";
import "../styles/form.scss";

const TicketPurchase = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Manejar el cambio del checkbox
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // Manejar la compra de entradas
  const handlePurchase = () => {
    if (isChecked) {
      alert("¡Gracias por aceptar! Ahora puedes proceder a comprar tu entrada.");
    }
  };

  return (
    <div className="purchase-wrapper">
      <h2>Compra tu entrada</h2>
      <p>
        Antes de continuar con la compra de tu entrada, por favor acepta nuestros
        <strong> términos y condiciones</strong>. Es importante que leas atentamente la información relacionada con el evento, política de reembolsos y las normas de conducta.
      </p>
      
      {/* Casilla de verificación */}
      <label className="checkbox-container">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
        />
        Acepto los términos y condiciones.
      </label>
      
      {/* Botón de compra deshabilitado hasta que se marque la casilla */}
      <button 
        className="purchase-button" 
        onClick={handlePurchase} 
        disabled={!isChecked}
      >
        Comprar Entrada
      </button>
    </div>
  );
};

export default TicketPurchase;
