import axios from 'axios';

let url='https://covid19.mathdro.id/api';

export const data = async (country) => {
	let url1=url;
	if(country) {
		url1=`${url}/countries/${country}`;
	}
	try {
		const data = await axios.get(url1);
		const data1={
			confirmed : data.data.confirmed.value,
			deaths : data.data.deaths.value,
			recovered : data.data.recovered.value,
			date : data.data.lastUpdate
		}
		return data1;
	} catch(error) {
		return error;
	}
};

export const dataDaily = async (country) => {
        let url1=`${url}/daily`;
        try {
                const { data } = await axios.get(url1);
                return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
        } catch (error) {
                return error;
        }
};


export const countries = async () => {
	let url1 = `${url}/countries`;
  	try {
    		const { data: { countries } } = await axios.get(url1);
    		return countries.map((country) => country.name);
  	} catch (error) {
    		return error;
  	}
};
