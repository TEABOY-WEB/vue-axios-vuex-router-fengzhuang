import axios from '@/utils/axios.js';

export const getSliders = () => axios.get('/user/banner');