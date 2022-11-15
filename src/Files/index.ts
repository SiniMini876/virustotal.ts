import {FileBehaviour} from '../../types/FileBehaviour/FileBehaviour.js';
import {File} from '../../types/Files/File.js';
import {SigmaRule} from '../../types/SigmaRules.js';
import {Vote} from '../../types/Votes.js';
import {YARARuleset} from '../../types/YARARulesets.js';

class Files {
	apiKey: string;
	filesURL: string;
	behaviourReportsURL: any;
	sigmaRulesURL: string;
	yaraRulesetsURL: string;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.filesURL = 'https://www.virustotal.com/api/v3/files';
		this.behaviourReportsURL =
			'https://www.virustotal.com/api/v3/file_behaviours';
		this.sigmaRulesURL = 'https://www.virustotal.com/api/v3/sigma_rules';
		this.yaraRulesetsURL = 'https://www.virustotal.com/api/v3/yara_rulesets';
	}
	/**
	 * @param file The buffer of the file you want to upload
	 * @param name The name of the file
	 * @param type The mime type of the file (e.g. image/png) (https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
	 * @param url The url to upload the file to (big files), if not specified, it will use the default url
	 * @returns The ID of the analysis and the type of the analysis
	 */

	public async scanFile(
		file: Buffer,
		name: string,
		type: MimeType,
		url = 'https://www.virustotal.com/vtapi/v2/file/scan',
	): Promise<FileUploadResponse> {
		const fileData = `data:${type};name=${name};base64,${file.toString(
			'base64',
		)}`;

		console.log(fileData);

		const encodedParams = new URLSearchParams();
		encodedParams.set('file', fileData);
		encodedParams.set('apikey', this.apiKey);

		const options = {
			method: 'POST',
			headers: {
				accept: 'text/plain',
				'content-type': 'application/x-www-form-urlencoded',
			},
			body: encodedParams,
		};

		try {
			const res = await fetch(url, options);
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error.message);
			}

			return data;
		} catch (error) {
			throw new Error((error ?? 'Something went wrong') as string);
		}
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

	/**
	 * @returns Gives you a URL to upload to for bigger files
	 */

	public async getBigFileURL(): Promise<string> {
		return this.getMethod(this.filesURL);
	}

	/**
	 *
	 * @param id The ID of the file you want to get the report from
	 * @returns The File object
	 */

	public async getFileReport(id: string): Promise<File> {
		return this.getMethod(`${this.filesURL}/${id}`);
	}

	public async requestFileReScan(id: string): Promise<FileUploadResponse> {
		return this.postMethod(`${this.filesURL}/${id}/analyse`);
	}

	public async getCommentsFile(
		id: string,
		limit = 10,
		cursor?: string,
	): Promise<Comment[]> {
		return this.getMethod(
			`${this.filesURL}/${id}/comments?limit=${limit}${
				cursor ? `&cursor=${cursor}` : ''
			}`,
		);
	}

	public async addCommentFile(id: string, comment: string): Promise<Comment> {
		const commentMsg = JSON.stringify({
			data: {
				type: 'comment',
				attributes: {
					text: comment,
				},
			},
		});

		return this.postMethod(`${this.filesURL}/${id}/comments`, commentMsg);
	}

	public async getVotesFile(
		id: string,
		limit = 10,
		cursor?: string,
	): Promise<Vote[]> {
		return this.getMethod(
			`${this.filesURL}/${id}/votes?limit=${limit}${
				cursor ? `&cursor=${cursor}` : ''
			}`,
		);
	}

	public async addVoteFile(
		id: string,
		vote: 'malicious' | 'harmless',
	): Promise<Vote> {
		const voteMsg = JSON.stringify({
			data: {
				type: 'vote',
				attributes: {
					verdict: vote,
				},
			},
		});

		return this.postMethod(`${this.filesURL}/${id}/votes`, voteMsg);
	}

	public async getObjectsRelatedFile(
		id: string,
		relationship: string,
		limit = 10,
		cursor?: string,
	): Promise<any> {
		return this.getMethod(
			`${this.filesURL}/${id}/relationships/${relationship}?limit=${limit}${
				cursor ? `&cursor=${cursor}` : ''
			}`,
		);
	}

	public async getObjectDescriptorsForFile(
		id: string,
		relationship: string,
		limit = 10,
		cursor?: string,
	): Promise<any> {
		return this.getMethod(
			`${
				this.filesURL
			}/${id}/relationships/${relationship}/descriptors?limit=${limit}${
				cursor ? `&cursor=${cursor}` : ''
			}`,
		);
	}

	public async getBehaviourReportsSummeryForFile(
		id: string,
	): Promise<FileBehaviour> {
		return this.getMethod(`${this.filesURL}/${id}/behaviour_summary`);
	}

	public async getSummeryOfMITREATTACKTechniquesForFile(
		id: string,
	): Promise<any> {
		return this.getMethod(`${this.filesURL}/${id}/behaviour_mitre_trees`);
	}

	public async getFileBehaviourReportSandbox(id: string): Promise<any> {
		return this.getMethod(`${this.behaviourReportsURL}/${id}`);
	}

	public async getObjectsRelatedBehaviourReport(
		id: string,
		relationship: string,
		limit = 10,
		cursor?: string,
	): Promise<any> {
		return this.getMethod(
			`${this.behaviourReportsURL}/${id}/${relationship}?limit=${limit}${
				cursor ? `&cursor=${cursor}` : ''
			}`,
		);
	}

	public async getObjectDescriptorsForBehaviourReport(
		id: string,
		relationship: string,
		limit = 10,
		cursor?: string,
	): Promise<any> {
		return this.getMethod(
			`${
				this.behaviourReportsURL
			}/${id}/relationships/${relationship}?limit=${limit}${
				cursor ? `&cursor=${cursor}` : ''
			}`,
		);
	}

	public async getHTMLReportForBehaviourReport(id: string): Promise<string> {
		return this.getMethod(`${this.behaviourReportsURL}/${id}/html`);
	}

	public async getSigmaRule(id: string): Promise<SigmaRule> {
		return this.getMethod(`${this.sigmaRulesURL}/${id}`);
	}

	public async getYARARuleset(id: string): Promise<YARARuleset> {
		return this.getMethod(`${this.yaraRulesetsURL}/${id}`);
	}
}

interface FileUploadResponse {
	id: string;
	type: string;
}

export default Files;
