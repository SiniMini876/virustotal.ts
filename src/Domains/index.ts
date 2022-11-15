import {Comment} from '../../types/Comments/Comment.js';
import {Domain} from '../../types/Domains/Domain.js';
import {Vote} from '../../types/Votes.js';

class Domains {
	apiKey: string;
	domainsURL: string;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.domainsURL = 'https://www.virustotal.com/api/v3/domains';
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

	public getDomainReport(domain: string): Promise<Domain> {
		const fullURL = `${this.domainsURL}/${domain}`;
		return this.getMethod(fullURL);
	}

	public async getCommentsDomain(
		domain: string,
		limit = 10,
		cursor?: string,
	): Promise<Comment[]> {
		const fullURL = `${this.domainsURL}/${domain}/comments?limit=${limit}${
			cursor ? '&cursor=' + cursor : ''
		}`;
		return this.getMethod(fullURL);
	}

	public async addCommentDomain(
		domain: string,
		comment: string,
	): Promise<Comment> {
		const fullURL = `${this.domainsURL}/${domain}/comments`;
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

	public async getVotesDomain(domain: string): Promise<Vote[]> {
		const fullURL = `${this.domainsURL}/${domain}/votes`;
		return this.getMethod(fullURL);
	}

	public async addVoteDomain(domain: string, vote: string): Promise<Vote> {
		const fullURL = `${this.domainsURL}/${domain}/votes`;
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

	public async getObjectsRelatedDomain(
		domain: string,
		relationship: string,
	): Promise<any> {
		const fullURL = `${this.domainsURL}/${domain}/${relationship}`;
		return this.getMethod(fullURL);
	}

	public async getObjectDescriptorsRelatedDomain(
		domain: string,
		relationship: string,
	): Promise<any> {
		const fullURL = `${this.domainsURL}/${domain}/relationships/${relationship}`;
		return this.getMethod(fullURL);
	}

	public async getDNSResolutionsDomain(resolutionId: string): Promise<any> {
		return this.getMethod(
			`https://www.virustotal.com/api/v3/resolutions/${resolutionId}`,
		);
	}
}

export default Domains;
