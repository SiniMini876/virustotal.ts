import {Comment} from '../../types/Comments/Comment.js';

class Collections {
	apiKey: string;
	collectionsURL: string;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.collectionsURL = 'https://www.virustotal.com/api/v3/collections';
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

	public async deleteMethod(fullURL: string, deleteData?: any) {
		const options = {
			method: 'DELETE',
			headers: {
				accept: 'application/json',
				'content-type': 'application/x-www-form-urlencoded',
				'x-apikey': this.apiKey,
			},
			body: deleteData ?? undefined,
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

	public newCollection(name: string, description: string, rawItems: any) {
		return JSON.stringify({
			data: {
				attributes: {
					name,
					description,
				},
				// eslint-disable-next-line camelcase
				raw_items: rawItems,
				type: 'collection',
			},
		});
	}

	public createCollection(collection: string) {
		return this.postMethod(this.collectionsURL, collection);
	}

	public getCollection(collectionID: string) {
		return this.getMethod(`${this.collectionsURL}/${collectionID}`);
	}

	public updateCollection(collectionID: string, collection: string) {
		return this.patchMethod(
			`${this.collectionsURL}/${collectionID}`,
			collection,
		);
	}

	public deleteCollection(collectionID: string) {
		return this.deleteMethod(`${this.collectionsURL}/${collectionID}`);
	}

	public getCommentsCollection(
		collectionID: string,
		limit = 10,
		curosr?: string,
	): Promise<Comment[]> {
		return this.getMethod(
			`${this.collectionsURL}/${collectionID}/comments?limit=${limit}${
				curosr ? `&cursor=${curosr}` : ''
			}`,
		);
	}

	public addCommentCollection(collectionID: string, comment: string) {
		const data = JSON.stringify({
			data: {
				attributes: {
					text: comment,
				},
				type: 'comment',
			},
		});
		return this.postMethod(
			`${this.collectionsURL}/${collectionID}/comments`,
			data,
		);
	}

	public getObjectsCollection(
		collectionID: string,
		relationship: string,
		limit = 10,
		curosr?: string,
	): Promise<any> {
		return this.getMethod(
			`${this.collectionsURL}/${collectionID}/${relationship}?limit=${limit}${
				curosr ? `&cursor=${curosr}` : ''
			}`,
		);
	}

	public getObjectDescriptorsCollection(
		collectionID: string,
		relationship: string,
		limit = 10,
		curosr?: string,
	): Promise<any> {
		return this.getMethod(
			`${
				this.collectionsURL
			}/${collectionID}/relationships/${relationship}?limit=${limit}${
				curosr ? `&cursor=${curosr}` : ''
			}`,
		);
	}

	public addItemsCollection(
		collectionID: string,
		relationship: string,
		items: any,
	) {
		const data = JSON.stringify({
			data: items,
		});
		return this.postMethod(
			`${this.collectionsURL}/${collectionID}/${relationship}`,
			data,
		);
	}

	public deleteItemsCollection(
		collectionID: string,
		relationship: string,
		items: any,
	) {
		const data = JSON.stringify({
			data: items,
		});
		return this.deleteMethod(
			`${this.collectionsURL}/${collectionID}/${relationship}`,
			data,
		);
	}
}

export default Collections;
