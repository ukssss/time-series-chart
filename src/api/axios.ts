import axios from 'axios';

export const getChartData = async () => {
    const res = await axios.get('/db/db.json');
    return res.data.response;
};
