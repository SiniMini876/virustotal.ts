import {URL} from '../../types/URLs/URL.js';
import {Vote} from '../../types/Votes.js';

interface URLResponse {
	id: string;
	type: string;
}

class URLs {
	apiKey: string;
	urlsURL: string;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.urlsURL = 'https://www.virustotal.com/api/v3/urls';
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

	public async scanURL(url: string): Promise<URLResponse> {
		const encodedParams = new URLSearchParams();
		encodedParams.set('url', url);

		return this.postMethod(this.urlsURL, encodedParams);
	}

	public async getURLReport(url: string): Promise<URL> {
		const encodedURL = this.getURLasBase64(url);
		return this.getMethod(`${this.urlsURL}/${encodedURL}`);
	}

	public async requestReScanURL(url: string): Promise<URLResponse> {
		const encodedURL = this.getURLasBase64(url);
		return this.postMethod(`${this.urlsURL}/${encodedURL}/analyse`);
	}

	public async getCommentsURL(url: string): Promise<Comment[]> {
		const encodedURL = this.getURLasBase64(url);
		return this.getMethod(`${this.urlsURL}/${encodedURL}/comments`);
	}

	public async addCommentURL(url: string, comment: string): Promise<Comment> {
		const encodedURL = this.getURLasBase64(url);
		const commentMsg = JSON.stringify({
			data: {
				type: 'comment',
				attributes: {
					text: comment,
				},
			},
		});

		return this.postMethod(
			`${this.urlsURL}/${encodedURL}/comments`,
			commentMsg,
		);
	}

	public async getVotesURL(
		url: string,
		limit = 10,
		cursor?: string,
	): Promise<Vote[]> {
		const encodedURL = this.getURLasBase64(url);

		return this.getMethod(
			`${this.urlsURL}/${encodedURL}/votes?limit=${limit}${
				cursor ? `&cursor=${cursor}` : ''
			}`,
		);
	}

	public async addVoteURL(
		url: string,
		vote: 'malicious' | 'harmless',
	): Promise<Vote> {
		const encodedURL = this.getURLasBase64(url);

		const voteMsg = JSON.stringify({
			data: {
				type: 'vote',
				attributes: {
					verdict: vote,
				},
			},
		});

		return this.postMethod(`${this.urlsURL}/${encodedURL}/votes`, voteMsg);
	}

	// TODO: API is broken
	// public async getObjectsRelatedURL(
	// 	url: string,
	// 	relationship: string,
	// 	limit = 10,
	// 	cursor?: string,
	// ): Promise<any> {
	// 	const encodedURL = this.getURLasBase64(url);

	// 	return this.getMethod(
	// 		`${this.urlsURL}/${encodedURL}/${relationship}?limit=${limit}${
	// 			cursor ? `&cursor=${cursor}` : ''
	// 		}`,
	// 	);
	// }

	// public async getObjectDescriptorsRelatedURL(
	// 	url: string,
	// 	relationship: string,
	// 	limit = 10,
	// 	cursor?: string,
	// ): Promise<any> {
	// 	const encodedURL = this.getURLasBase64(url);

	// 	return this.getMethod(
	// 		`${
	// 			this.urlsURL
	// 		}/${encodedURL}/relationships/${relationship}?limit=${limit}${
	// 			cursor ? `&cursor=${cursor}` : ''
	// 		}`,
	// 	);
	// }
}

export default URLs;
