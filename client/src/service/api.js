import axios from 'axios';

const url = 'http://localhost:9000';

export const addUser = async (data) => {
    try {
        await axios.post(url, data);
    }
    catch(error){
    console.log('error while addUser API', error.message)
}
}