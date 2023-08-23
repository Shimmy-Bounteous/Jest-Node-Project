import fetchApiData from "./api/users";
import { User } from "./types/users";

const main = async () => {
    const jsonData: Array<User> = await fetchApiData();
    console.log('Fetched JSON data: \n', jsonData);
}
main();

