import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'9a20f30ba61141a4abaf3cb57201588f'
    }
})