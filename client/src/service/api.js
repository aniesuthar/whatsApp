import axios from 'axios';

const url = '';
const data = '';

export const addUser = async (res) => {
    try {
        await axios.post(url, data);
    }
    catch(error){
    console.log('error while addUser API', error.message)
}
}