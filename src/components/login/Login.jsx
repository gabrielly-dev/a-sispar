import {useNavigate} from "react-router-dom"
import Logo from "../../assets/Tela Login/logo-ws.png"
import styles from "./Login.module.scss"

function Login() {
    const navigate = useNavigate()


    const redirecionamentoReembolso = () => {
        //event.preventDefault()
        navigate("/reembolsos")
    }

    return (
        <main className={styles.mainLogin}>
            <section className={styles.containerImagem}>
            </section>
            <section className={styles.containerForm}>
                <img src={Logo} alt="logo da Wilson Sons" />
                <h1>Boas vindas ao <br />Novo Portal SISPAR</h1>
                <p>Sistema de Emissão de Boletos e Parcelamento</p>
                <form>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="senha" id="senha" placeholder="Senha"/>
                    <a href="#">Esqueci minha senha</a>
                    <div>
                        <button onClick={redirecionamentoReembolso} type="button" className={styles.botaoEntrar}>Entrar</button>
                        <button className={styles.botaoCriarConta}>Criar conta</button>
                    </div>
                </form>
            </section>
        </main>
    )
}
export default Login