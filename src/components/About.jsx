import React, { useState, useEffect } from "react";
import "../styles/about.scss";

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const titulosItems = [
        "¿Quiénes somos?",
        "¿Qué hacemos?",
        "¿Cuándo y dónde?"
    ];

    const textItems = [
        "Somos Naranja Sound System, una asociación cultural que une fuerzas con dos pilares de la escena underground madrileña: Codex Sessions e Imbolc Crew. Bajo los valores de armonía, respeto y conexión, hemos creado una plataforma para celebrar la música electrónica en un ambiente único y diurno. Nuestra esencia es generar una comunidad dónde la energía fluya a través del sonido, conectando a las personas en un espacio libre y auténtico.",
        "En Naranja, organizamos eventos mensuales que transforman la ciudad en un epicentro de la electrónica. Cada encuentro es una experiencia dónde la música y el arte convergen, y te invitamos a bailar bajo el sol madrileño en un formato que resalta el poder del día: sonido, atmósferas únicas y una conexión genuina entre público y artistas.",
        "Nuestro primer evento es el sábado 12 de octubre, desde las 16:00 hasta las 00:00. Te esperamos en el corazón de Madrid para vivir una tarde llena de vibraciones positivas, buena música y esa chispa que sólo la escena electrónica puede ofrecer."
    ];

    const titleItems = [
        "Who are we?",
        "What do we do?",
        "When and where?"
    ];

    const englishItems = [
        "We are Naranja Sound System, a cultural association that joins forces with two pillars of the Madrid underground scene: Codex Sessions and Imbolc Crew. Under the values of harmony, respect, and connection, we have created a platform to celebrate electronic music in a unique daytime environment. Our essence is to generate a community where energy flows through sound, connecting people in a free and authentic space.",
        "At Naranja, we organize monthly events that transform the city into an epicenter of electronic music. Each meeting is an experience where music and art converge, and we invite you to dance under the Madrid sun in a format that highlights the power of the day: sounds, unique atmospheres, and a genuine connection between the audience and the artists.",
        "Our first event is on Saturday, October 12, from 16:00 to 00:00. We are waiting for you in the heart of Madrid to live an afternoon full of positive vibes, good music, and that spark that only the electronic scene can offer."
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
        <div className="about-wrapper">
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

export default About;
