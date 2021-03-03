import axios from 'axios'
export const axiosWithAuth = () =>{
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://african-marketplace-tt27.herokuapp.com/api',
        headers:{
            Authorization: token
        }
    })
}