import axios from './baseURL'

export async function getAllUser(pageSize = 10){
    return axios.get(`users/${pageSize}`)
}
export async function postAllUser(payload){
    return axios.post(`/users/create`, payload)
}
export async function putAllUser(id, values){
    return axios.put(`users/update/${id}`, values)
}
export async function detailAllUser(id, values){
    return axios.get(`users/detail/${id}`, values)
}
export async function deleteAllUser(id){
    return axios.delete(`users/hapus/${id}`)
}