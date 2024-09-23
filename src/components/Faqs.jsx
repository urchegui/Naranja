import React, { useState, useEffect } from "react";
import "../styles/about.scss";

const Faqs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const titulosItems = [
        "¿Quiénes somos?",
        "¿Qué hacemos?",
        "¿Cuándo y dónde?"
    ];

    const textItems = [
        "Naranja surge gracias a Codex Sessions e Imbolc Crew, dos iniciativas nacidas del underground madrileño. Armonía, respeto y conexión son los puntos que nos unen en esta nueva aventura. Hemos creado este nuevo concepto donde queremos formar  una comunidad que baile bajo la luz del sol con la mejor selección de música electrónica, conectando a las personas con un espacio libre y auténtico.",
        "En Naranja organizamos eventos  de tarde para poder bailar y disfrutar de los últimos rayos de sol antes de perdernos en la noche. Groove, ritmo, atardecer. Proponemos un espacio de clubbing de una forma desenfadada y abierta para todo el mundo sin necesidad de trasnochar. ",
        "Nuestro primer evento será el 12 de octubre desde las 16:00 hasta las 00:00. Te esperamos en Madrid para vivir una tarde llena de ritmo, sol y buenas vibras. Esa chispa que solo la música electrónica underground puede ofrecer."
    ];

    const titleItems = [
        "Who are we?",
        "What do we do?",
        "When and where?"
    ];

    const englishItems = [
        "Naranja surge gracias a Codex Sessions e Imbolc Crew, dos iniciativas nacidas del underground madrileño. Armonía, respeto y conexión son los puntos que nos unen en esta nueva aventura. Hemos creado este nuevo concepto donde queremos formar  una comunidad que baile bajo la luz del sol con la mejor selección de música electrónica, conectando a las personas con un espacio libre y auténtico.",
        "In Naranja we organize afternoon events to dance and enjoy the last sun lights before losing ourselves in the night. Groove, rhythm, sunset. We are proposing a casual clubbing space free for everybody without the need of being up all night.",
        "Our first event will be on the 12th of October from 16:00 until 00:00 in Madrid. We’ll wait you there to live a nice afternoon full of rhythm, sun and good vibes. That spark that only true underground electronic music music can create."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === textItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 8000);

        return () => {
            clearInterval(interval);
        };
    }, [textItems.length]);

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex === textItems.length - 1 ? 0 : prevIndex + 1));
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? textItems.length - 1 : prevIndex - 1));
    };

    return (
        <div className="about-wrapper" id="faqs">
            <div className="carousel">
                <h1 className="carousel-text title">
                    {titulosItems[currentIndex]}
                </h1>
                <p className="carousel-text">
                    {textItems[currentIndex]}
                </p>
                <h1 className="carousel-text title">
                    {titleItems[currentIndex]}
                </h1>
                <p className="carousel-text">
                    {englishItems[currentIndex]}
                </p>
            </div>
                <div className="carousel-controls">
                    <button className="arrow left" onClick={prevItem}>←</button>
                    <button className="arrow right" onClick={nextItem}>→</button>
                </div>
                <div className="carousel-indicators">
                    {textItems.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
        </div>
    );
};

export default Faqs;
