import {AttackTactic} from '../../types/AttackTactics/AttackTactic.js';

class AttackTactics {
	apiKey: string;
	attacktacticsURL: string;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.attacktacticsURL = 'https://www.virustotal.com/api/v3/attack_tactics';
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

	public getAttackTactic(id: string): Promise<AttackTactic> {
		const fullURL = `${this.attacktacticsURL}/${id}`;
		return this.getMethod(fullURL);
	}

	public getObjectsRelatedAttackTactic(
		id: string,
		relationship: string,
		limit = 10,
		cursor?: string,
	): Promise<any> {
		const fullURL = `${
			this.attacktacticsURL
		}/${id}/${relationship}?limit=${limit}${cursor ? `&cursor=${cursor}` : ''}`;
		return this.getMethod(fullURL);
	}

	public getObjectDescriptorsRelatedAttackTactic(
		id: string,
		relationship: string,
		limit = 10,
		cursor?: string,
	): Promise<any> {
		const fullURL = `${
			this.attacktacticsURL
		}/${id}/relationships/${relationship}?limit=${limit}${
			cursor ? `&cursor=${cursor}` : ''
		}`;
		return this.getMethod(fullURL);
	}
}

export default AttackTactics;
