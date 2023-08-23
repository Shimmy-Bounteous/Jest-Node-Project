import axios from "axios";

const fetchApiData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = response.data;
        return data;
    } catch (error) {
        // if(error instanceof Error){
        console.error('Error fetching data', error);
        // return new Error(error.message);
        return [];
        // }
    }
}

export default fetchApiData;