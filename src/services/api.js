import axios from "axios";

const api = axios.create({
    baseURL: 'https://genshin.jmp.blue'
}
)

export default api;