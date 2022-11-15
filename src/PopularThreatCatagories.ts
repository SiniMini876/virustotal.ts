/**
 *
 * @param fullURL The full URL to the API endpoint
 * @param apikey The API key to use
 * @returns The response from the API
 */

async function getMethod(fullURL: string, apikey: string) {
	console.log(fullURL);
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			'content-type': 'application/x-www-form-urlencoded',
			'x-apikey': apikey,
		},
	};

	try {
		const response = await fetch(fullURL, options);
		const data = await response.json();
		if (data.error) {
			throw new Error(data.error.message);
		}

		return data.data;
	} catch (error) {
		throw new Error((error ?? 'Something went wrong') as string);
	}
}

export default function getPopularThreatCatagories(apikey: string) {
	return getMethod(
		'https://www.virustotal.com/api/v3/popular_threat_categories',
		apikey,
	);
}
