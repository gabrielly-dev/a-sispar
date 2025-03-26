import {useNavigate} from "react-router-dom"
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

    const navigate = useNavigate()
    const redirecionamentoReembolsos = () => {
        navigate("/reembolsos");
    }
    

    return(
        <div className={styles.paginaSolicitacao}>
            <NavBar/>
            <div className={styles.conteudoPrincipal}>
                <header className={styles.headerSolicitacao}>
                    <img src={Home} alt="" />
                    <img src={Seta} alt="" />
                    <p onClick={redirecionamentoReembolsos}>Reembolsos</p>
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
                                        <option id={styles.optionDespesa} value="" disabled selected hidden>Selecionar</option>
                                        <option value="">Alimentação</option>
                                        <option value="">Combustível</option>
                                        <option value="">Condução</option>
                                        <option value="">Estacionamento</option>
                                        <option value="">Viagem Administrativa</option>
                                        <option value="">Viagem Operacional</option>
                                        <option value="">Eventos de Representação</option>
                                    </select>
                                </div>

                                <div className={styles.centroDeCusto}>
                                    <label htmlFor="">Centro de Custo</label>
                                    <select name="centro-custo" id="">
                                        <option id={styles.custo} value="" disabled selected hidden>Selecionar</option>
                                        <option value="">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                                        <option value="">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                                        <option value="">1100110102 - FIN CONTABILIDADE MTZ</option>
                                    </select>
                                    
                                </div>
                            </div>

                            <div className={styles.caixaDetalhamentoFinanceiro}>
                                <div className={styles.ordDivPep}>

                                    <div className={styles.ordInt}>
                                        <label htmlFor="">Ord. Int.</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div className={styles.labelDiv}>
                                        <label htmlFor="">Div.</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div className={styles.labelPep}>
                                        <label htmlFor="">PEP</label>
                                        <input type="text" name="" id="" />
                                    </div>

                                </div>
                                <div className={styles.moedaDistKm}>

                                    <div className={styles.labelMoeda}>
                                        <label htmlFor="">Moeda</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div className={styles.labelDistKm}>
                                        <label htmlFor="">Dist / Km</label>
                                        <input type="text" name="" id="" />
                                    </div>

                                </div>
                                <div className={styles.valorKmFaturadoDespesa}>

                                    <div className={styles.labelValorKm}>
                                        <label htmlFor="">Valor / Km</label>
                                        <input type="text" />
                                    </div>

                                    <div className={styles.labelValFaturado}>
                                        <label htmlFor="">Val. Faturado</label>
                                        <input type="text" name="" id="" />
                                    </div>

                                    <div className={styles.labelDespesa}>
                                        <label htmlFor="">Despesa</label>
                                        <input type="text" name="" id="" />
                                    </div>

                                </div>

                                <div className={styles.botoesSalvarDeletar}>
                                    <button className={styles.buttonPlus}>
                                        <img src={Plus} alt="" />
                                        <p>Salvar</p>
                                    </button>

                                    <button className={styles.buttonDeletar}>
                                        <img src={Deletar} alt="" />
                                    </button>
                                </div>
                            </div>
                            
                        </section>
                                
                    </form>
                    
                    <section className={styles.seccaoTabela}>

                        <table>
                            
                            <tr>
                                <th></th>
                                <th>Colaborador(a)</th>
                                <th>Empresa</th>
                                <th>Nº Prest.</th>
                                <th>Data</th>
                                <th>Motivo</th>
                                <th>Tipo de despesa</th>
                                <th>Ctr. Custo</th>
                                <th>Ord. Int.</th>
                                <th>Div.</th>
                                <th>PEP</th>
                                <th>Moeda</th>
                                <th>Dist. Km</th>
                                <th>Val. Km</th>
                                <th>Val. Faturado</th>
                                <th>Despesa</th>
                                </tr>
                            <tr>
                                <td><img src={Lixeira} alt="" /></td>
                                <td>Maria Anders</td>
                                <td>WSS001</td>
                                <td>329456</td>
                                <td>08/01/2025</td>
                                <td><img src={Motivo} alt="" /></td>
                                <td>Desp. de viagem administrativa</td>
                                <td>1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</td>
                                <td>0003</td>
                                <td>002</td>
                                <td>001</td>
                                <td>BRL</td>
                                <td>434Km</td>
                                <td>0.65</td>
                                <td>242.10</td>
                                <td>40.05</td>
                                </tr>
                            <tr>
                                <td><img src={Lixeira} alt="" /></td>
                                <td>Vanessa Portugal</td>
                                <td>WSS002</td>
                                <td>987789</td>
                                <td>01/01/2025</td>
                                <td><img src={Motivo} alt="" /></td>
                                <td>Desp. de viagem administrativa</td>
                                <td>1100110102 - FIN CONTABILIDADE MTZ</td>
                                <td>0002</td>
                                <td>005</td>
                                <td>001</td>
                                <td>ARS</td>
                                <td>289Km</td>
                                <td>0.37</td>
                                <td>106.93</td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <td><img src={Lixeira} alt="" /></td>
                                <td>Washington Klinglon</td>
                                <td>WSS003</td>
                                <td>546791</td>
                                <td>03/01/2025</td>
                                <td><img src={Motivo} alt="" /></td>
                                <td>Eventos de apresentação</td>
                                <td>1100109002 - FIN CONTROLES INTERNOS MTZ</td>
                                <td>0001</td>
                                <td>005</td>
                                <td>001</td>
                                <td>USD</td>
                                <td>197Km</td>
                                <td>0.75</td>
                                <td>109.75</td>
                                <td>29.97</td>
                            </tr>
                                
                        </table>

                    </section>

                </main>

                <footer className={styles.footerSolicitacao}>

                </footer>
            </div>

        </div>
    )
}

export default Solicitacao;