import {Operations} from '../../types/Operations.js';
import {Submissions} from '../../types/Submissions.js';

class Analyses {
	apiKey: string;
	analysesURL: string;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.analysesURL = 'https://www.virustotal.com/api/v3/analyses';
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

	public async getAnalysis(analysisID: string): Promise<Analyses> {
		const fullURL = `${this.analysesURL}/${analysisID}`;
		return this.getMethod(fullURL);
	}

	public async getObjectsRelatedAnalysis(
		analysisID: string,
		relationship: string,
	): Promise<any> {
		const fullURL = `${this.analysesURL}/${analysisID}/${relationship}`;
		return this.getMethod(fullURL);
	}

	public async getObjectDescriptorsRelatedAnalysis(
		analysisID: string,
		relationship: string,
	): Promise<any> {
		const fullURL = `${this.analysesURL}/${analysisID}/relationships/${relationship}`;
		return this.getMethod(fullURL);
	}

	public async getSubmission(submissionId: string): Promise<Submissions> {
		const fullURL = `https://www.virustotal.com/api/v3/submission/${submissionId}`;
		return this.getMethod(fullURL);
	}

	public async getOperation(operationId: string): Promise<Operations> {
		const fullURL = `https://www.virustotal.com/api/v3/operations/${operationId}`;
		return this.getMethod(fullURL);
	}
}

export default Analyses;
