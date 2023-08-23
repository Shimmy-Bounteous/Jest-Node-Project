import fetchApiData from "./api/users";

const main = async () => {
    const jsonData = await fetchApiData();
    console.log('Fetched JSON data: \n', jsonData);
}
main();

