import Analyses from './Analyses/index.js';
import AttackTactics from './AttackTactics/index.js';
import AttackTechniques from './AttackTechniques/index.js';
import Collections from './Collections/index.js';
import Comments from './Comments/index.js';
import Domains from './Domains/index.js';
import Files from './Files/index.js';
import Graphs from './Graphs/index.js';
import IPAddresses from './IPAddresses/index.js';
import popularThreatCatagories from './PopularThreatCatagories.js';
import Search from './Search/index.js';
import URLs from './URLs/index.js';

export class VTClient {
	apiKey: string;
	public files: Files;
	public urls: URLs;
	analyses: Analyses;
	collections: Collections;
	comments: Comments;
	domains: Domains;
	ipAddresses: IPAddresses;
	graphs: Graphs;
	search: Search;
	attackTactics: AttackTactics;
	attackTechniques: AttackTechniques;
	constructor(apiKey: string) {
		this.apiKey = apiKey;

		if (!this.apiKey) {
			throw new Error('No API key provided');
		}

		this.files = new Files(apiKey);
		this.urls = new URLs(apiKey);
		this.analyses = new Analyses(apiKey);
		this.collections = new Collections(apiKey);
		this.comments = new Comments(apiKey);
		this.domains = new Domains(apiKey);
		this.ipAddresses = new IPAddresses(apiKey);
		this.graphs = new Graphs(apiKey);
		this.search = new Search(apiKey);
		this.attackTactics = new AttackTactics(apiKey);
		this.attackTechniques = new AttackTechniques(apiKey);
	}

	public getPopularThreatCatagories() {
		return popularThreatCatagories(this.apiKey);
	}
}
