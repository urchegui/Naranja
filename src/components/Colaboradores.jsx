import Imbolc from "../assets/imbolcNegro.png"
import Codex from "../assets/codex.png"
import "../styles/colaboradores.scss";

const Colaboradores = () => {
    return (
        <>
        <div className="partners-wrapper" id="colaboradores">
            <div className="partner-title">
                <h1>APROVED BY</h1>
            </div>
            <div className="logo-container">
                <img src={Codex} alt="Logo de Codex Sessions" />   
                <img src={Imbolc} alt="Logo de Imbolc" id="imbolc"/>
            </div>
        </div>
        </>
    )
}

export default Colaboradores;