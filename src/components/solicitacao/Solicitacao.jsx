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
        <div className={styles.paginaSolicitacao}>
            <NavBar />
            <div className={styles.conteudoPrincipal}>
                <header className={styles.headerSolicitacao}>
                    <img src={Home} alt="" />
                    <img src={Seta} alt="" />
                    <p>Reembolsos</p>
                    <img src={Seta} alt="" />
                    <p>Solicitação de Reembolso</p>
                </header>
                <main className={styles.containerCentralizado}>

                    <form className={styles.formSolicitacao}>

                        <section className={styles.dadosGerais}>
                            
                            <div className={styles.infosGeraisBusca}>

                                <div className={styles.inputNome}>
                                    <label htmlFor="">Nome Completo</label>
                                    <input type="text" />
                                </div>

                                <div className={styles.inputEmpresa}>
                                    <label htmlFor="">Empresa</label>
                                    <input type="text" />
                                </div>

                                <div className={styles.inputPrestContas}>
                                    <label htmlFor="">Nº Prest. Contas</label>
                                    <input type="text" />
                                </div>

                            </div>

                            <div className={styles.descricao}>
                                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                                <input type="text" />
                            </div>

                        </section>

                        <div className={styles.barraCentral}></div>

                        <section className={styles.informacoesFinanceiras}>
                            
                            <div className={styles.caixaSeletores}>
                                <div className={styles.data}>
                                    <label htmlFor="">Data</label>
                                    <input type="date" name="data" id="data" />
                                </div>

                                <div className={styles.tipoDeDespesa}>
                                    <label htmlFor="">Tipo de Despesa</label>
                                    <select name="tipoDeDespesa" id="tipoDeDespesa" >
                                        <option id={styles.despesa} value="" disabled selected hidden>Selecionar</option>
                                        <option value="">Alimentação</option>
                                        <option value="">Combustível</option>
                                        <option value="">Condução</option>
                                        <option value="">Estacionamento</option>
                                        <option value="">Viagem Administrativa</option>
                                        <option value="">Viagem Operacional</option>
                                        <option value="">Eventos de Representação</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="">Centro de Custo</label>
                                    <select name="centro-custo" id="">
                                        <option id={styles.custo} value="" disabled selected hidden>Selecionar</option>
                                        <option value="">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                                        <option value="">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                                        <option value="">1100110102 - FIN CONTABILIDADE MTZ</option>
                                    </select>
                                    
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="">Ord. Int.</label>
                                    <input type="text" name="" id="" />

                                    <label htmlFor="">Div.</label>
                                    <input type="text" name="" id="" />

                                    <label htmlFor="">PEP</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div>
                                    <label htmlFor="">Moeda</label>
                                    <input type="text" name="" id="" />
                                    
                                    <label htmlFor="">Dist / Km</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div>
                                    <label htmlFor="">Valor / Km</label>
                                    <input type="text" />

                                    <label htmlFor="">Val. Faturado</label>
                                    <input type="text" name="" id="" />

                                    <label htmlFor="">Despesa</label>
                                    <input type="text" name="" id="" />
                                </div>

                                <div>
                                    <button>
                                        <img src={Plus} alt="" />
                                        <p>Salvar</p>
                                    </button>

                                    <button>
                                        <img src={Deletar} alt="" />
                                    </button>
                                </div>
                            </div>
                            
                        </section>
                                
                    </form>
                    
                    <section className={styles.seccaoTabela}>

                    </section>

                </main>

                <footer className={styles.footerSolicitacao}>

                </footer>
            </div>

        </div>
    )
}

export default Solicitacao;