function Login() {
    return (
        <main>
            <section>
                <img src="/../src/assets/Tela Login/imagem tela de login.png" alt="imagem de um navio cargueiro" />
            </section>
            <section>
                <h1>Boas vindas ao Novo Portal SISPAR</h1>
                <p>Sistema de Emissão de Boletos e Parcelamento</p>
                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="senha" id="senha" placeholder="Senha"/>
                    <a href="#">Esqueci minha senha</a>
                    <button type="submit">Login</button>
                    <button type="submit">Criar conta</button>
                </form>
            </section>
        </main>
    )
}
export default Login