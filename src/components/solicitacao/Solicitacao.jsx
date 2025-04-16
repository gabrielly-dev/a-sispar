import {useNavigate} from "react-router-dom"
import NavBar from "../navbar/NavBar.jsx"
import styles from "./Solicitacao.module.scss"
import Deletar from "../../assets/Solicitacao/deletar.png"
import Lixeira from "../../assets/Solicitacao/lixeira.png"
import Motivo from "../../assets/Solicitacao/motivo.png"
import Plus from "../../assets/Solicitacao/plus.png"
import Home from "../../assets/Dashboard/Home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import { useState, useEffect } from "react"
import Api from "../../services/Api.jsx" // importando a api


function Solicitacao () {

    const navigate = useNavigate()
    const redirecionamentoReembolsos = () => {
        navigate("/reembolsos");
    }
    
    const [colaborador, setColaborador] = useState(""); 
    const [empresa, setEmpresa] = useState(""); 
    const [nPrestacao, setnPrestacao] = useState(""); 
    const [descricao, setDescricao] = useState(""); 
    const [data, setData] = useState(""); 
    const [tipoDeReembolso, setTipoDeReembolso] = useState(""); 
    const [centroCusto, setCentroCusto] = useState(""); 
    const [ordemInterna, setordemInterna] = useState(""); 
    const [divisao, setDivisao] = useState(""); 
    const [pep, setPep] = useState(""); 
    const [moeda, setMoeda] = useState(""); 
    const [distanciaKm, setDistanciaKm] = useState(""); 
    const [valorKm, setValorKm] = useState(""); 
    const [valorFaturado, setValorFaturado] = useState(""); 
    const [despesa, setDespesa] = useState(""); 

    const [dadosReembolso, setDadosReembolso] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        const objetoReembolso = {
            colaborador,
            empresa,
            nPrestacao,
            descricao,
            data,
            tipoDeReembolso,
            centroCusto,
            ordemInterna,
            divisao,
            pep,
            moeda,
            distanciaKm,
            valorKm,
            valorFaturado,
            despesa
        };

        setDadosReembolso(dadosReembolso.concat(objetoReembolso));
        limparCampos();
    }

    const limparCampos = () => {
        setColaborador(""),
        setEmpresa(""),
        setnPrestacao(""),
        setDescricao(""),
        setData(""),
        setTipoDeReembolso(""),
        setCentroCusto(""),
        setordemInterna(""),
        setDivisao(""),
        setPep(""),
        setMoeda(""),
        setDistanciaKm(""),
        setValorKm(""),
        setValorFaturado(""),
        setDespesa("");
    }

    const [ foiEnviado, setFoiEnviado ] = useState(false)

    const enviarParaAnalise = async () => {
        try {
            const response = await Api.post("/refunds/new", dadosReembolso)
            console.log("Resposta da API", response)
            alert("Reembolso solicitado com sucesso!")
            setFoiEnviado(true)
        } catch (error) {
            console.log("Erro ao enviar", error)
        }
    }

    useEffect(()=>{
        if(foiEnviado){
            setDadosReembolso([]) 
            setFoiEnviado(false) 
        }
    }, [foiEnviado])

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

                    <form onSubmit={handleSubmit}> {/* Updated to call handleSubmit */}
                        <section className={styles.dadosGerais}>
                            <div className={styles.infosGeraisBusca}>
                                <div>
                                    <label htmlFor="nome">Nome Completo</label>
                                    <input 
                                        value={colaborador} 
                                        name="colaborador" 
                                        type="text" 
                                        onChange={(e) => setColaborador(e.target.value)} 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Empresa</label>
                                    <input 
                                        value={empresa} 
                                        name="empresa" 
                                        type="text" 
                                        onChange={(e) => setEmpresa(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Nº Prest. Contas</label>
                                    <input 
                                        value={nPrestacao} 
                                        name="nPrestacao" 
                                        type="number" 
                                        onChange={(e) => setnPrestacao(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={styles.descricao}>
                                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                                <input 
                                value={descricao} 
                                name="descricao" 
                                type="text" 
                                onChange={(e) => setDescricao(e.target.value)}/>
                            </div>
                        </section>
                        <div className={styles.barraCentral}></div>
                        <section className={styles.informacoesFinanceiras}>
                            <div className={styles.caixaSeletores}>
                                <div className={styles.data}>
                                    <label htmlFor="">Data</label>
                                    <input 
                                    value={data} 
                                    type="date" 
                                    name="data" 
                                    id="data" 
                                    onChange={(e) => setData(e.target.value)}/>
                                </div>
                                <div className={styles.tipoDeReembolso}>
                                    <label htmlFor="tipoDeReembolso">Tipo de Despesa</label>
                                    <select 
                                    value={tipoDeReembolso} 
                                    name="tipoDeReembolso" 
                                    id="tipoDeReembolso" 
                                    onChange={(e) => setTipoDeReembolso(e.target.value)}>
                                        <option id={styles.optionDespesa} value="selecionar" disabled selected hidden>Selecionar</option>
                                        <option value="alimentacao">Alimentação</option>
                                        <option value="combustivel">Combustível</option>
                                        <option value="conducao">Condução</option>
                                        <option value="estacionamento">Estacionamento</option>
                                        <option value="viagem adm">Viagem Administrativa</option>
                                        <option value="viagem oper">Viagem Operacional</option>
                                        <option value="eventos">Eventos de Representação</option>
                                    </select>
                                </div>
                                <div className={styles.centroDeCusto}>
                                    <label htmlFor="custo">Centro de Custo</label>
                                    <select 
                                    value={centroCusto} 
                                    name="centroCusto" 
                                    onChange={(e) => setCentroCusto(e.target.value)}
                                    >
                                        <option id={styles.custo} value="" disabled selected hidden>Selecionar</option>
                                        <option value="FIN CONTROLES INTERNOS MTZ">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                                        <option value="FIN VICE-PRESIDENCIA FINANCAS MTZ">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                                        <option value="FIN CONTABILIDADE MTZ">1100110102 - FIN CONTABILIDADE MTZ</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.caixaDetalhamentoFinanceiro}>
                                <div className={styles.ordDivPep}>
                                    <div>
                                        <label htmlFor="ordemInterna">Ord. Int.</label>
                                        <input 
                                        value={ordemInterna} 
                                        type="number" 
                                        name="ordemInterna" 
                                        id="ordemInterna" 
                                        onChange={(e) => setordemInterna(e.target.value)}/>
                                    </div>
                                    <div>
                                        <label htmlFor="divisao">Div.</label>
                                        <input 
                                        value={divisao} 
                                        type="number" 
                                        name="divisao" 
                                        id="divisao" 
                                        onChange={(e) => setDivisao(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="">PEP</label>
                                        <input 
                                        value={pep} 
                                        type="number" 
                                        name="pep" 
                                        id="pep" 
                                        onChange={(e) => setPep(e.target.value)}/>
                                    </div>
                                </div>
                                <div className={styles.moedaDistKm}>
                                    <div className={styles.labelMoeda}>
                                        <label htmlFor="moeda">Moeda</label>
                                        <select 
                                        value={moeda} 
                                        type="number" 
                                        name="moeda" 
                                        id="moeda" 
                                        onChange={(e) => setMoeda(e.target.value)}>
                                            <option id={styles.custo} value="" disabled selected hidden>Selecionar</option>
                                            <option value="brl">BRL</option>
                                            <option value="ars">ARS</option>
                                            <option value="usd">USD</option>
                                        </select>
                                    </div>
                                    <div className={styles.labelDistKm}>
                                        <label htmlFor="distancia">Dist / Km</label>
                                        <input 
                                        value={distanciaKm} 
                                        type="number" 
                                        name="distanciaKm" 
                                        id="distanciaKm" 
                                        onChange={(e) => setDistanciaKm(e.target.value)}/>
                                    </div>
                                </div>
                                <div className={styles.valorKmFaturadoDespesa}>
                                    <div>
                                        <label htmlFor="valor">Valor / Km</label>
                                        <input 
                                        value={valorKm} 
                                        name="valorKm" 
                                        type="number" 
                                        onChange={(e) => setValorKm(e.target.value)}/>
                                    </div>
                                    <div>
                                        <label htmlFor="faturado">Val. Faturado</label>
                                        <input 
                                        value={valorFaturado} 
                                        type="number" 
                                        name="valorFaturado" 
                                        id="valorFaturado" 
                                        onChange={(e) => setValorFaturado(e.target.value)}/>
                                    </div>
                                    <div>
                                        <label htmlFor="taxa">Despesa</label>
                                        <input 
                                        value={despesa} 
                                        type="number" 
                                        name="despesa" 
                                        id="despesa" 
                                        onChange={(e) => setDespesa(e.target.value)}/>
                                    </div>
                                </div>
                                <div className={styles.botoesSalvarDeletar}>
                                    <button type="submit" className={styles.buttonPlus}>
                                        <img src={Plus} alt="" />
                                        <p>Salvar</p>
                                    </button>
                                    <button type="button" className={styles.buttonDeletar} onClick={limparCampos}> {/* Changed to type="button" */}
                                        <img src={Deletar} alt="" />
                                    </button>
                                </div>
                            </div>
                        </section>
                    </form>
                    
                    <section className={styles.seccaoTabela}>
                        <table>
                            <thead>
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
                            </thead>
                            <tbody>
                                {dadosReembolso.map((item, index) => (
                                    <tr key={index}>
                                    <td><img src={Lixeira} alt="ícone de uma lixeira" /></td>
                                    <td>{item.colaborador}</td>
                                    <td>{item.empresa}</td>
                                    <td>{item.nPrestacao}</td>
                                    <td>{item.data}</td>
                                    <td><img src={Motivo} alt="ícone de um documento" /></td>
                                    <td>{item.tipoDeReembolso}</td>
                                    <td>{item.centroCusto}</td>
                                    <td>{item.ordemInterna}</td>
                                    <td>{item.divisao}</td>
                                    <td>{item.pep}</td>
                                    <td>{item.moeda}</td>
                                    <td>{item.distanciaKm}</td>
                                    <td>{item.valorKm}</td>
                                    <td>{item.valorFaturado}</td>
                                    <td>{item.despesa}</td>
                                  </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                    <button onClick={enviarParaAnalise}>Enviar para análise</button>
                </main>
            </div>
        </div>
    )
}

export default Solicitacao;
