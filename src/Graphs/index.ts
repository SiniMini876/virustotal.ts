import {Comment} from '../../types/Comments/Comment.js';
import {Graph} from '../../types/Graphs/Graph.js';
import {Group} from '../../types/Groups/Group.js';
import {User} from '../../types/Users/User.js';

class Graphs {
	apiKey: string;
	graphsURL: string;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.graphsURL = 'https://www.virustotal.com/api/v3/graphs';
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

	public searchGraph(
		filter: string,
		order: string,
		limit: number,
		cursor?: string,
	) {
		const fullURL = `${this.graphsURL}?${filter ? `filter=${filter}` : ''}${
			order ? `&order=${order}` : ''
		}${limit ? `&limit=${limit}` : ''}${cursor ? `&cursor=${cursor}` : ''}`;
		return this.getMethod(fullURL);
	}

	public createGraph(graph: Graph): Promise<Graph> {
		const fullURL = `${this.graphsURL}`;
		return this.postMethod(fullURL, graph);
	}

	public getGraph(graphId: string): Promise<Graph> {
		const fullURL = `${this.graphsURL}/${graphId}`;
		return this.getMethod(fullURL);
	}

	public updateGraph(graphId: string, graph: Graph): Promise<Graph> {
		const fullURL = `${this.graphsURL}/${graphId}`;
		return this.patchMethod(fullURL, graph);
	}

	public deleteGraph(graphId: string): Promise<Graph> {
		const fullURL = `${this.graphsURL}/${graphId}`;
		return this.deleteMethod(fullURL);
	}

	public getCommentsGraph(
		graphId: string,
		limit?: string,
		cursor?: number,
	): Promise<Comment[]> {
		const fullURL = `${this.graphsURL}/${graphId}/comments?${
			limit ? `limit=${limit}` : ''
		}${cursor ? `&cursor=${cursor}` : ''}`;
		return this.getMethod(fullURL);
	}

	public addCommentGraph(graphId: string, comment: string): Promise<Comment> {
		const postData = {
			data: {
				attributes: {
					text: comment,
				},
				type: 'comment',
			},
		};

		const fullURL = `${this.graphsURL}/${graphId}/comments`;
		return this.postMethod(fullURL, postData);
	}

	public getUsersAndGroupsGraph(
		graphId: string,
		limit?: string,
		cursor?: number,
	): Promise<User[] | Group[]> {
		const fullURL = `${this.graphsURL}/${graphId}/relationships/viewers
        ?${limit ? `limit=${limit}` : ''}${cursor ? `&cursor=${cursor}` : ''}`;

		return this.getMethod(fullURL);
	}

	public grantUserAndGroupsPermissionGraph(
		graphId: string,
	): Promise<User[] | Group[]> {
		const fullURL = `${this.graphsURL}/${graphId}/relationships/viewers`;
		return this.postMethod(fullURL);
	}

	public checkUserAndGroupsPermissionGraph(
		graphId: string,
		userOrGroupId: string,
	): Promise<boolean> {
		const fullURL = `${this.graphsURL}/${graphId}/relationships/viewers/${userOrGroupId}`;
		return this.getMethod(fullURL);
	}

	public revokeUserAndGroupsPermissionGraph(
		graphId: string,
		userOrGroupId: string,
	) {
		const fullURL = `${this.graphsURL}/${graphId}/relationships/viewers/${userOrGroupId}`;
		return this.deleteMethod(fullURL);
	}

	public getUsersAndGroupsEditGraph(
		graphId: string,
		limit?: string,
		cursor?: number,
	): Promise<User[] | Group[]> {
		const fullURL = `${this.graphsURL}/${graphId}/relationships/editors
        ?${limit ? `limit=${limit}` : ''}${cursor ? `&cursor=${cursor}` : ''}`;

		return this.getMethod(fullURL);
	}

	public grantUserAndGroupsEditPermissionGraph(
		graphId: string,
	): Promise<User[] | Group[]> {
		const fullURL = `${this.graphsURL}/${graphId}/relationships/editors`;
		return this.postMethod(fullURL);
	}

	public checkUserAndGroupsEditPermissionGraph(
		graphId: string,
		userOrGroupId: string,
	): Promise<boolean> {
		const fullURL = `${this.graphsURL}/${graphId}/relationships/editors/${userOrGroupId}`;
		return this.getMethod(fullURL);
	}

	public revokeUserAndGroupsEditPermissionGraph(
		graphId: string,
		userOrGroupId: string,
	) {
		const fullURL = `${this.graphsURL}/${graphId}/relationships/editors/${userOrGroupId}`;
		return this.deleteMethod(fullURL);
	}

	public getObjectsRelatedGraph(
		graphId: string,
		relationship: string,
		limit?: string,
		cursor?: number,
	) {
		const fullURL = `${this.graphsURL}/${graphId}/${relationship}
        ?${limit ? `limit=${limit}` : ''}${cursor ? `&cursor=${cursor}` : ''}`;

		return this.getMethod(fullURL);
	}

	public getObjectDescriptorsRelatedGraph(
		graphId: string,
		relationship: string,
		limit?: string,
		cursor?: number,
	) {
		const fullURL = `${this.graphsURL}/${graphId}/relationships/${relationship}
        ?${limit ? `limit=${limit}` : ''}${cursor ? `&cursor=${cursor}` : ''}`;

		return this.getMethod(fullURL);
	}
}

export default Graphs;
