class Search {
	apiKey: string;
	searchURL: string;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.searchURL = 'https://www.virustotal.com/api/v3/search';
	}

	public async getMethod(fullURL: string) {
		console.log(fullURL);
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				'content-type': 'application/x-www-form-urlencoded',
				'x-apikey': this.apiKey,
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

	public async postMethod(fullURL: string, postData?: any) {
		const options = {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/x-www-form-urlencoded',
				'x-apikey': this.apiKey,
			},
			body: postData ?? undefined,
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

	public search(quary: string): Promise<any> {
		const fullURL = `${this.searchURL}?query=${quary}`;
		return this.getMethod(fullURL);
	}

	public getVTMetaData() {
		const fullURL = 'https://www.virustotal.com/api/v3/metadata';
		return this.getMethod(fullURL);
	}
}

export default Search;
