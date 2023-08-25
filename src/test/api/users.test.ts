import axios from 'axios';
import fetchApiData from '../../api/users';

jest.mock('axios');

describe('fetchApiData', () => {

    // reset all mocked functions' states after each test
    afterEach(() => {
        jest.resetAllMocks();
    });

    const responseData = [{ id: 1, title: 'Test Post' }];
    const response = { data: responseData };

    it('fetches successfully data from API', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response);

        const data = await fetchApiData();
        expect(data).toEqual(responseData);
    });

    it('handles API error', async () => {
        const errorMeassage = 'Network Error';
        (axios.get as jest.Mock).mockRejectedValue(new Error(errorMeassage));

        try {
            await fetchApiData();
        } catch (error) {
            if (error instanceof Error) {
                expect(error.message).toEqual(errorMeassage);
            }
        }
    });

    it('calls axios.get with correct URL', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response);

        await fetchApiData();

        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    });

    it('calls axios.get with correct URL using spyOn', async () => {
        const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValue(response);

        await fetchApiData();

        expect(axiosGetSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    });

    it('calls console.log with fetched data', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response);

        const consoleLogSpy = jest.spyOn(console, 'log');

        await fetchApiData();

        expect(consoleLogSpy).toHaveBeenCalledWith(responseData);
    });
});
