import axios from "axios"


//criando uma instancia do axios, chamada "api"
const api = axios.create({
    baseURL: "http://localhost:5000",
    //define a URL base para todas as requisições feitas com essa instância

})

export default api;