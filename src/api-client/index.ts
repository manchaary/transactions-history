import axios from 'axios';

import { REACT_APP_API_URL } from '../env.variables';

export const { post, get } = axios.create({
  baseURL: REACT_APP_API_URL
});
