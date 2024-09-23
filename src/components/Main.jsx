import React, { useState, useEffect, useRef } from "react";
import '../styles/main.scss';
import Logo from "../assets/logo_naranja_3.png";
import Faqs from "./Faqs"
import TicketPurchase from "./TicketPurchase"
import Colaboradores from "./Colaboradores"

const Main = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const image = imageRef.current;
      const rect = image.getBoundingClientRect();

      const imageCenterX = rect.left + rect.width / 2;
      const imageCenterY = rect.top + rect.height / 2;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const deltaX = mouseX - imageCenterX;
      const deltaY = mouseY - imageCenterY;

      const rotateY = deltaX / 20;
      const rotateX = -deltaY / 20;

      setRotation({ rotateX, rotateY });
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0]; // Primer toque
      const image = imageRef.current;
      const rect = image.getBoundingClientRect();

      const imageCenterX = rect.left + rect.width / 2;
      const imageCenterY = rect.top + rect.height / 2;

      const touchX = touch.clientX;
      const touchY = touch.clientY;

      const deltaX = touchX - imageCenterX;
      const deltaY = touchY - imageCenterY;

      const rotateY = deltaX / 20;
      const rotateX = -deltaY / 20;

      setRotation({ rotateX, rotateY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <>

    <div className="body-wrapper">
      <div className="main_logo-wrapper">
        <div className="image-container">
          <img
            ref={imageRef}
            src={Logo}
            alt="Imagen"
            style={{
              transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
            }}
          />
        </div>
      </div>
      <Faqs />
      <TicketPurchase />
      <Colaboradores />
    </div>
    </>
  );
};

export default Main;
