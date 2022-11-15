class AttackTechniques {
	apiKey: string;
	attacktechniquesURL: string;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.attacktechniquesURL = 'https://www.virustotal.com/api/v3/domains';
	}

	public getURLasBase64(url: string): string {
		return Buffer.from(url).toString('base64').replace(/=/g, '');
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

	public getAttackTechniques(id: string): Promise<AttackTechniques> {
		const fullURL = `${this.attacktechniquesURL}/${id}`;
		return this.getMethod(fullURL);
	}

	public getObjectsRelatedAttackTechniques(
		id: string,
		relationship: string,
		limit = 10,
		cursor?: string,
	): Promise<any> {
		const fullURL = `${
			this.attacktechniquesURL
		}/${id}/${relationship}?limit=${limit}${cursor ? `&cursor=${cursor}` : ''}`;
		return this.getMethod(fullURL);
	}

	public getObjectDescriptorsRelatedAttackTechniques(
		id: string,
		relationship: string,
		limit = 10,
		cursor?: string,
	): Promise<any> {
		const fullURL = `${
			this.attacktechniquesURL
		}/${id}/relationships/${relationship}?limit=${limit}${
			cursor ? `&cursor=${cursor}` : ''
		}`;
		return this.getMethod(fullURL);
	}
}

export default AttackTechniques;
