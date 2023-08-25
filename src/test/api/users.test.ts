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
        const errorMessage = 'Network Error';
        (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

        const response = await fetchApiData();
        expect(response).toEqual(new Error(errorMessage));
    });

    it('calls axios.get with correct URL', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response);

        await fetchApiData();

        expect(axios.get).toHaveBeenCalledWith(process.env.API_ENDPOINT);
    });

    it('calls axios.get with correct URL using spyOn', async () => {
        const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValue(response);

        await fetchApiData();

        expect(axiosGetSpy).toHaveBeenCalledWith(process.env.API_ENDPOINT);
    });

    it('calls console.log with fetched data', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response);

        const consoleLogSpy = jest.spyOn(console, 'log');

        await fetchApiData();

        expect(consoleLogSpy).toHaveBeenCalledWith(responseData);
    });
});
