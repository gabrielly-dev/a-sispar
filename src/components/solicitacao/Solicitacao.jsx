import NavBar from "../navbar/NavBar.jsx"
import styles from "./Solicitacao.module.scss"
import Calendario from "../../assets/Solicitacao/calendario.png"
import Check from "../../assets/Solicitacao/check.png"
import Deletar from "../../assets/Solicitacao/deletar.png"
import Lixeira from "../../assets/Solicitacao/lixeira.png"
import Motivo from "../../assets/Solicitacao/motivo.png"
import Plus from "../../assets/Solicitacao/plus.png"
import SetaBaixo from "../../assets/Solicitacao/setaBaixo.png"
import X from "../../assets/Solicitacao/x.png"
import Home from "../../assets/Dashboard/Home.png";
import Seta from "../../assets/Dashboard/Vector.png";


function Solicitacao () {
    return(
        <>
            <NavBar />
            <div className="">
                <header className={styles.headerSolicitacao}>
                    <img src={Home} alt="" />
                    <img src={Seta} alt="" />
                    <p>Reembolsos</p>
                    <img src={Seta} alt="" />
                    <p>Solicitação de Reembolso</p>
                </header>

                <main>
                    <form className={styles.formSolicitacao}>
                        <div className={styles.containerInputs}>
                            
                        </div>
                        <div className={styles.inputNome}>
                            <label htmlFor=""></label>
                        </div>
                    </form>
                </main>
            </div>

        </>
    )
}

export default Solicitacao;