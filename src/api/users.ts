import axios from "axios";
import { User } from "../types/users";

const fetchApiData = async (): Promise<User[] | []> => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data: Array<User> = response.data;
        console.log(data);
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