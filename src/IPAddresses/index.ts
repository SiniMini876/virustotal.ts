import {Comment} from '../../types/Comments/Comment.js';
import {IPAddress} from '../../types/IPAddresses/IPAddress.js';
import {Vote, VoteType} from '../../types/Votes.js';

class IP {
	apiKey: string;
	ipURL: string;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.ipURL = 'https://www.virustotal.com/api/v3/ip_addresses';
	}

	public async getMethod(fullURL: string) {
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

	public getIPReport(ip: string): Promise<IPAddress> {
		const fullURL = `${this.ipURL}/${ip}`;
		return this.getMethod(fullURL);
	}

	public getCommentsIP(
		ip: string,
		limit = 10,
		cursor?: string,
	): Promise<Comment[]> {
		const fullURL = `${this.ipURL}/${ip}/comments?limit=${limit}${
			cursor ? `&cursor=${cursor}` : ''
		}`;
		return this.getMethod(fullURL);
	}

	public addCommentIP(ip: string, comment: string): Promise<Comment> {
		const fullURL = `${this.ipURL}/${ip}/comments`;
		const commentMsg = JSON.stringify({
			data: {
				type: 'comment',
				attributes: {
					text: comment,
				},
			},
		});

		return this.postMethod(fullURL, commentMsg);
	}

	public getVotesIP(ip: string): Promise<Vote[]> {
		const fullURL = `${this.ipURL}/${ip}/votes`;
		return this.getMethod(fullURL);
	}

	public addVoteIP(ip: string, vote: VoteType): Promise<Vote> {
		const fullURL = `${this.ipURL}/${ip}/votes`;
		const voteMsg = JSON.stringify({
			data: {
				type: 'vote',
				attributes: {
					verdict: vote,
				},
			},
		});

		return this.postMethod(fullURL, voteMsg);
	}

	public getObjectsRelatedIP(ip: string, relationship: string): Promise<any> {
		const fullURL = `${this.ipURL}/${ip}/${relationship}`;
		return this.getMethod(fullURL);
	}

	public getObjectDescriptorsRelatedIP(
		ip: string,
		relationship: string,
	): Promise<any> {
		const fullURL = `${this.ipURL}/${ip}/relationships/${relationship}`;
		return this.getMethod(fullURL);
	}
}

export default IP;
