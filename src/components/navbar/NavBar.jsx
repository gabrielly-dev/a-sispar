import styles from "./NavBar.module.scss"
import { useNavigate } from "react-router-dom";
import Fechar from "../../assets/Header/imagem-fechar-header.png"
import Perfil from "../../assets/Header/image.png"
import Sair from "../../assets/Header/botaoSair.png"
import Reembolso from "../../assets/Header/botaoReembolso.png"
import Pesquisa from "../../assets/Header/botaoPesquisa.png"
import Home from "../../assets/Header/homeNav.png"
import Historico from "../../assets/Header/botaoHistorico.png"

function NavBar()  {

    const navigate = useNavigate();
    const redirecionamentoSolicitacao = () => {
        navigate("/solicitacao")
    }
    const redirecionamentoReembolsos = () => {
        navigate("/reembolsos")
    }
    const redirecionamentoLogin = () => {
        navigate("/")
    }

    return(
        <nav className={styles.navBarEstilo}>
            <div className={styles.navBarEspacamento}>
            
                <button className={styles.botaoFechar}>
                    <img src={Fechar} alt="" />
                </button>
                <section className={styles.opcoes}>
                    <button>
                        <img src={Perfil} alt="" />
                    </button>

                    <div>
                        <button onClick={redirecionamentoReembolsos}>
                            <img src={Home} alt="" />
                        </button>
                        <button onClick={redirecionamentoSolicitacao}>
                            <img src={Reembolso} alt="" />
                        </button>
                        <button>
                            <img src={Pesquisa} alt="" />
                        </button>
                        <button>
                            <img src={Historico} alt="" />
                        </button>
                    </div>
                </section>
                
                <button className={styles.botaoSair} onClick={redirecionamentoLogin}>
                    <img src={Sair} alt="" />
                </button>

            </div>


        </nav>
    )
}

export default NavBar;