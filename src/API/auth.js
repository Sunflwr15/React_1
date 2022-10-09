import axios from "./baseURL2";

export async function login(value) {
  return axios.post(`/login`, value);
}
export async function article(value) {
  return axios.get(`/artikel`);
}

export async function articleDetail(value, payload) {
  return axios.get(`artikel/${value}`, payload);
}
export async function articleCreate(value) {
  console.log("jalan");
  const formData = new FormData();
  formData.append("judul", value.judul);
  formData.append("artikel", value.artikel);
  formData.append("thumbnail", value.thumbnail);
  return axios.post(`artikel`, formData);
}
export async function articleUpdate(id, value) {
  console.log("jalan");
  const formData = new FormData();
  formData.append("judul", value.judul);
  formData.append("artikel", value.artikel);
  formData.append("thumbnail", value.thumbnail);
  return axios.post(`artikel/update/${id}`, formData);
}
export async function articleDelete(id) {
  return axios.post(`artikel/delete/${id}`);
}
