export interface File {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	capabilities_tags: string[];
	creation_date: number;
	crowdsourced_ids_results: CrowdsourcedIDSResult[];
	crowdsourced_ids_stats: CrowdsourcedIDSStats;
	crowdsourced_yara_results: CrowdsourcedYaraResult[];
	downloadable: boolean;
	first_submission_date: number;
	last_analysis_date: number;
	last_analysis_results: LastAnalysisResults;
	last_analysis_stats: LastAnalysisStats;
	last_modification_date: number;
	last_submission_date: number;
	md5: string;
	meaningful_name: string;
	names: string[];
	reputation: number;
	sandbox_verdicts: SandboxVerdicts;
	sha1: string;
	sha256: string;
	sigma_analysis_summary: SigmaAnalysisSummary;
	sigma_analysis_stats: CrowdsourcedIDSStats;
	sigma_analysis_results: SigmaAnalysisResult[];
	size: number;
	tags: string[];
	times_submitted: number;
	total_votes: TotalVotes;
	type_description: string;
	type_tag: string;
	unique_sources: number;
	vhash: string;
}

export interface CrowdsourcedIDSResult {
	alert_context: AlertContext[];
	alert_severity: string;
	rule_category: string;
	rule_id: string;
	rule_msg: string;
	rule_source: string;
}

export interface AlertContext {
	proto: string;
	src_ip: string;
	src_port: number;
}

export interface CrowdsourcedIDSStats {
	high: number;
	info?: number;
	low: number;
	medium: number;
	critical?: number;
}

export interface CrowdsourcedYaraResult {
	description: string;
	match_in_subfile: boolean;
	rule_name: string;
	ruleset_id: string;
	ruleset_name: string;
	source: string;
}

export interface LastAnalysisResults {
	ALYac: AlYac;
	APEX: AlYac;
	AVG: AlYac;
	Acronis: AlYac;
}

export interface AlYac {
	category: string;
	engine_name: string;
	engine_update: string;
	engine_version: string;
	method: string;
	result: null | string;
}

export interface LastAnalysisStats {
	'confirmed-timeout': number;
	failure: number;
	harmless: number;
	malicious: number;
	suspicious: number;
	timeout: number;
	'type-unsupported': number;
	undetected: number;
}

export interface SandboxVerdicts {
	'VirusTotal Jujubox': VirusTotalJujubox;
}

export interface VirusTotalJujubox {
	category: string;
	confidence: number;
	malware_classification: string[];
	malware_names: string[];
	sandbox_name: string;
}

export interface SigmaAnalysisResult {
	rule_title: string;
	rule_source: string;
	match_context: MatchContext[];
	rule_level: string;
	rule_description: string;
	rule_author: string;
	rule_id: string;
}

export interface MatchContext {
	values: {[key: string]: string};
}

export interface SigmaAnalysisSummary {
	'Sigma Integrated Rule Set (GitHub)': CrowdsourcedIDSStats;
	'SOC Prime Threat Detection Marketplace': CrowdsourcedIDSStats;
}

export interface TotalVotes {
	harmless: number;
	malicious: number;
}

export interface Links {
	self: string;
}
