import styles from "./NavBar.module.scss"
import { useNavigate } from "react-router-dom";
import Fechar from "../../assets/Header/imagem-fechar-header.png"
import Perfil from "../../assets/Header/image.png"
import Sair from "../../assets/Header/botaoSair.png"
import Reembolso from "../../assets/Header/botaoReembolso.png"
import Pesquisa from "../../assets/Header/botaoPesquisa.png"

function NavBar()  {

    const navigate = useNavigate();

    return(
        <nav className={styles.navBarEstilo}>
            <button>
                <img src={Fechar} alt="" />
            </button>
            <section>
                <button>
                    <img src={Perfil} alt="" />
                </button>

                <div>
                    <button>
                        <img src={Pesquisa} alt="" />
                    </button>
                    <button>
                        <img src={Reembolso} alt="" />
                    </button>
                </div>
            </section>
            
            <button className={styles.buttonSair}>
                <img src={Sair} alt="" />
            </button>

        </nav>
    )
}

export default NavBar;