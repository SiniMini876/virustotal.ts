export interface RelatedURLsThreatActors {
	data: Datum[];
	links: Links;
	meta: Meta;
}

export interface Datum {
	attributes: DatumAttributes;
	context_attributes: ContextAttributes;
	id: string;
	links: Links;
	type: string;
}

export interface DatumAttributes {
	categories: Categories;
	first_submission_date: number;
	has_content: boolean;
	html_meta: Categories;
	last_analysis_date: number;
	last_analysis_results: LastAnalysisResults;
	last_analysis_stats: LastAnalysisStats;
	last_final_url: string;
	last_http_response_code: number;
	last_http_response_content_length: number;
	last_http_response_content_sha256: string;
	last_http_response_headers: LastHTTPResponseHeaders;
	last_modification_date: number;
	last_submission_date: number;
	reputation: number;
	tags: any[];
	targeted_brand: Categories;
	times_submitted: number;
	total_votes: TotalVotes;
	trackers: Categories;
	url: string;
}

export interface Categories {}

export interface LastAnalysisResults {
	ADMINUSLabs: AdminusLabs;
	'AegisLab WebGuard': AdminusLabs;
	AlienVault: AdminusLabs;
	'Antiy-AVL': AdminusLabs;
	AutoShun: AdminusLabs;
}

export interface AdminusLabs {
	category: string;
	engine_name: string;
	method: string;
	result: string;
}

export interface LastAnalysisStats {
	harmless: number;
	malicious: number;
	suspicious: number;
	timeout: number;
	undetected: number;
}

export interface LastHTTPResponseHeaders {
	'cache-control': string;
	'content-length': string;
	'content-type': string;
	date: string;
	expires: string;
	pragma: string;
	server: string;
	'x-xss-protection': string;
}

export interface TotalVotes {
	harmless: number;
	malicious: number;
}

export interface ContextAttributes {
	related_from: RelatedFrom[];
}

export interface RelatedFrom {
	attributes: RelatedFromAttributes;
	type: string;
	id: string;
}

export interface RelatedFromAttributes {
	name: string;
}

export interface Links {
	self: string;
}

export interface Meta {
	count: number;
}
