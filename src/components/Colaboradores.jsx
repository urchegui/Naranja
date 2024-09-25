import Imbolc from "../assets/imbolcNegro.png"
import Codex from "../assets/codex.png"
import "../styles/colaboradores.scss";
import { HashLink } from "react-router-hash-link";

const Colaboradores = () => {
    return (
        <>
            <div className="partners-wrapper" id="colaboradores">
                <div className="partner-title">
                    <h1>APROVED BY</h1>
                </div>
                <div className="logo-container">
                    <img src={Codex} alt="Logo de Codex Sessions" />
                    <img src={Imbolc} alt="Logo de Imbolc" id="imbolc" />
                </div>
                <div className="tease-us">
                    <h2>¿Quieres colaborar con nosotros?</h2>
                    <p>¡Mándanos un email con tu propuesta!</p>
                    <HashLink to='#'
                        onClick={(e) => {
                            window.location.href = "mailto:info@naranjasoundsystem.com";
                            e.preventDefault();
                        }} className="sendProposal">{"Envíanos tu propuesta :)"}</HashLink>
                </div>
            </div>
        </>
    )
}

export default Colaboradores;