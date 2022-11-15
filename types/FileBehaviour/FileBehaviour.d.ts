export interface FileBehaviour {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	activities_started: string[];
	analysis_date: number;
	behash: string;
	calls_highlighted: string[];
	command_executions: string[];
	files_opened: string[];
	files_written: string[];
	has_html_report: boolean;
	has_pcap: boolean;
	ids_results: IDSResult[];
	last_modification_date: number;
	modules_loaded: string[];
	mutexes_created: string[];
	mutexes_opened: string[];
	processes_created: string[];
	processes_terminated: string[];
	registry_keys_deleted: string[];
	registry_keys_opened: string[];
	registry_keys_set: SSet[];
	sandbox_name: string;
	shared_preferences_sets: SSet[];
	sigma_analysis_results: SigmaAnalysisResult[];
	tags: string[];
	text_highlighted: string[];
	tls: Tl[];
	verdicts: string[];
}

export interface IDSResult {
	alert_context: AlertContext;
	alert_severity: string;
	rule_id: string;
	rule_msg: string;
	rule_source: string;
}

export interface AlertContext {
	dest_ip: string;
	dest_port: number;
	hostname: string;
	protocol: string;
	src_ip: string;
	src_port: number;
	url: string;
}

export interface SSet {
	key: string;
	value: string;
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
	values: Issuer;
}

export interface Issuer {
	'<string>': string;
}

export interface Tl {
	issuer: Issuer;
	ja3: string;
	ja3s: string;
	serial_number: string;
	sni: string;
	subject: Issuer;
	thumbprint: string;
	version: string;
}

export interface Links {
	self: string;
}
