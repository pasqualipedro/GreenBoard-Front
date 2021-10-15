import axios from 'axios'

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000'
        });
    }

    login = async (payload) => {
        try{
            const { data } = await this.api.post('/login', payload); 
            const { token } = data;
            localStorage.setItem('token', token);
            console.log(`Usuario logado`, data);
        }
        catch (error) {
            throw new Error(error);
        };
    };
    
    signup = async (payload) => {
        try {
            const {data} = await this.api.post('/signup', payload)
            const { token } = data
            localStorage.setItem('token', token)
        } catch (error) {
            throw new Error(error);
        }
    }
};

export default new Api()