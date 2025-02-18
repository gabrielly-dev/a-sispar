import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Reembolsos from "./components/reembolsos/Reembolsos.jsx";
import Solicitacao from "./components/solicitacao/Solicitacao.jsx";
import "./global.scss";


function App () {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/reembolsos" element={<Reembolsos/>}></Route>
        <Route path="solicitacao" element={<Solicitacao/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App