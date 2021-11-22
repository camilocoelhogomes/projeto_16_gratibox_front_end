import axios from 'axios';

const API = 'https://brasilapi.com.br/api/cep/v1';

const getCep = ({ cep }) => axios.get(`${API}/${cep.replace(/\D/g, '')}`);

export default getCep;
