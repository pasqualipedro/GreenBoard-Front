import axios from 'axios'

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000'
        });

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
                console.log(error)
            } 
        );
    };

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
            const {data} = await this.api.post('/signup', payload)
            console.log(data)
        } catch (error) {
            throw error.response;
        }
    }

    /** CREATE A CATEGORY */
    categoryCreate = async (payload) => {
        try {
            const {data} = await this.api.post('/category/add',payload)
            console.log(data)
        } catch (error) {
            console.log(error);
            throw error.response;
        }
    }

    /** FETCHING ALL CATEGORIES */
    categoryFetchAll = async () => {
        try {
            const {data} = await this.api.get('/category/all')
            return data.allCategoriesFromUser
        } catch (error) {
            throw error.response;
        }
    }

    /** DELETE A CATEGORY */
    categoryDelete = async (catId) => {
        try {
            const {data} = await this.api.delete(`/category/delete/${catId}`)
            return data.delUserCategory
        } catch (error) {
            throw error.response;
        }
    }

    /** UPDATING A CATEGORY */
    categoryUptade = async (catId) => {
        try {
            const {data} = await this.api.put(`/category/update/${catId}`)
            return data.getOneCategoryFromUser
        } catch (error) {
            throw error.response;
        }
    }
};

export default new Api()