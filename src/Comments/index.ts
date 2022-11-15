import {Comment} from '../../types/Comments/Comment.js';

class Comments {
	apiKey: string;
	commentsURL: string;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.commentsURL = 'https://www.virustotal.com/api/v3/comments';
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

	public async patchMethod(fullURL: string, postData?: any) {
		const options = {
			method: 'PATCH',
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

	public async deleteMethod(fullURL: string) {
		const options = {
			method: 'DELETE',
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

	public getLatestComments(
		limit = 10,
		filter?: string,
		cursor?: string,
	): Promise<Comment[]> {
		return this.getMethod(
			`${this.commentsURL}?limit=${limit}${filter ? `&filter=${filter}` : ''}${
				cursor ? `&cursor=${cursor}` : ''
			}`,
		);
	}

	public getComment(commentId: string, relationship: string): Promise<Comment> {
		return this.getMethod(
			`${this.commentsURL}/${commentId}${
				relationship ? `?relationships=${relationship}` : ''
			}`,
		);
	}

	public updateComment(commentId: string, comment: string): Promise<Comment> {
		const postData = JSON.stringify({
			data: {
				type: 'comment',
				attributes: {
					text: comment,
				},
			},
		});
		return this.patchMethod(`${this.commentsURL}/${commentId}`, postData);
	}

	public deleteComment(commentId: string): Promise<any> {
		return this.deleteMethod(`${this.commentsURL}/${commentId}`);
	}

	public addVoteComment(
		commentId: string,
		vote: 'positive' | 'negative' | 'abuse',
	): Promise<Comment> {
		const postData = vote;
		return this.postMethod(`${this.commentsURL}/${commentId}/votes`, postData);
	}

	public getObjectsRelatedToComment(commentId: string, relationship: string) {
		return this.getMethod(`${this.commentsURL}/${commentId}/${relationship}`);
	}

	public getObjectDescriptorsRelatedToComment(
		commentId: string,
		relationship: string,
	) {
		return this.getMethod(
			`${this.commentsURL}/${commentId}/relationships/${relationship}`,
		);
	}
}

export default Comments;
