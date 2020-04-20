import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country)
        changeableUrl += `/countries/${country}`;
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (e) {
        console.log(e);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map(x => ({
            confirmed: x.confirmed.total,
            deaths: x.deaths.total,
            date: x.reportDate
        }));
        return modifiedData;
    } catch (e) {

    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map(c => c.name);
    } catch (e) {
        console.log(e);
    }
}