import axios from 'axios'

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://greenbook-back.herokuapp.com/'
        });
        /**  */
        /**
         * INTERCEPTORS = 
         */
        this.api.interceptors.request.use(
            (requestConfig) => {
                const token = localStorage.getItem('token');
                if(token) {
                    requestConfig.headers = {
                        Authorization: `Bearer ${token}`
                    };
                };
                return requestConfig
            },
            (error) => {
                console.log(error);
            } 
        );
    };

    /**
     * USER REQUESTS 
     */
    /** USER LOGIN */
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
    
    /** USER SIGNUP */
    signup = async (payload) => {
        try {
            const {data} = await this.api.post('/signup', payload);
            console.log(data);
        } catch (error) {
            throw error.response;
        }
    };



    /**
     * CATEGORIES REQUESTS
     */
    /** CREATE A CATEGORY */
    categoryCreate = async (payload) => {
        try {
            const {data} = await this.api.post('/category/add',payload);
            console.log(data);
        } catch (error) {
            console.log(error);
            throw error.response;
        }
    };

    /** FETCHING ALL CATEGORIES */
    categoryFetchAll = async () => {
        try {
            const {data} = await this.api.get('/category/all');
            return data.allCategoriesFromUser;
        } catch (error) {
            throw error.response;
        }
    };

    /** DELETE A CATEGORY */
    categoryDelete = async (catId) => {
        try {
            const {data} = await this.api.delete(`/category/delete/${catId}`);
            return data.deleteUserCategory;
        } catch (error) {
            throw error.response;
        }
    };

    /** UPDATING A CATEGORY */
    categoryUpdate = async (catId, payload) => {
        try {
            const {data} = await this.api.put(`/category/update/${catId}`, payload);
            return data.updateUserCategory;
        } catch (error) {
            throw error.response;
        }
    };



    /**
     * TRANSACTION REQUESTS 
     */
    /** CREATE A TRANSACTION */
    transactionCreate = async (payload) => {
        try {
            const {data} = await this.api.post(`/transaction/add`, payload);
            console.log(data);
        } catch (error) {
            console.log(error);
        };
    };

    /** FETCHING ALL TRANSACTIONS */
    transactionFetchAll = async () => {
        try {
            const {data} = await this.api.get(`/transaction/all`);
            return data.allTransactionsFromUser;
        } catch (error) {
            throw error.response;
        };
    };

    /** DELETE A TRANSACTION */
    transactionDelete = async (transId) => {
        try {
            const {data} = await this.api.delete(`/transaction/delete/${transId}`);
            return data.deleteUserTransaction;
        } catch (error) {
            throw error.response;
        };
    }; 

    /** UPDATING A TRANSACTION */
    transactionUpdate = async (transId, payload) => {
        try {
            const {data} = await this.api.put(`/transaction/update/${transId}`, payload);
            return data.updateUserTransaction;
        } catch (error) {
            throw error.response;
        };
    };

};



export default new Api()