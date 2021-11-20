import axios from 'axios';

const API = 'http://localhost:4000';

const signUpApi = ({
  userName,
  userEmail,
  userPassword,
  userConfirmPassword,
}) => axios.post(`${API}/sign-up`, {
  userName,
  userEmail,
  userPassword,
  userConfirmPassword,
});

export default signUpApi;
