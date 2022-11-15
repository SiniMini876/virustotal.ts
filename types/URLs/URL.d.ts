export interface URL {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	categories: Categories;
	favicon: Favicon;
	first_submission_date: number;
	has_content: boolean;
	html_meta: HTMLMeta;
	last_analysis_date: number;
	last_analysis_results: LastAnalysisResults;
	last_analysis_stats: LastAnalysisStats;
	last_final_url: string;
	last_http_response_code: number;
	last_http_response_content_length: number;
	last_http_response_content_sha256: string;
	last_http_response_cookies: LastHTTPResponseCookies;
	last_http_response_headers: {[key: string]: string};
	last_modification_date: number;
	last_submission_date: number;
	outgoing_links: string[];
	reputation: number;
	redirection_chain: string[];
	tags: string[];
	targeted_brand: TargetedBrand;
	times_submitted: number;
	title: string;
	total_votes: TotalVotes;
	trackers: Trackers;
	url: string;
}

export interface Categories {
	BitDefender: string;
	'Forcepoint ThreatSeeker': string;
}

export interface Favicon {
	dhash: string;
	raw_md5: string;
}

export interface HTMLMeta {
	description: string[];
	sessid: string[];
	viewport: string[];
}

export interface LastAnalysisResults {
	ADMINUSLabs: AdminusLabs;
	'AegisLab WebGuard': AdminusLabs;
	AlienVault: AdminusLabs;
	'Antiy-AVL': AdminusLabs;
	'Artists Against 419': AdminusLabs;
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

export interface LastHTTPResponseCookies {
	PHPSESSID: string;
	SameSite: string;
	__cfduid: string;
	sessid: string;
}

export interface TargetedBrand {
	Phishtank: string;
}

export interface TotalVotes {
	harmless: number;
	malicious: number;
}

export interface Trackers {
	'Google Tag Manager': GoogleTagManager[];
}

export interface GoogleTagManager {
	id: string;
	timestamp: number;
	url: string;
}

export interface Links {
	self: string;
}
