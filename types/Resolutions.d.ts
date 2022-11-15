export interface Resolutions {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	date: number;
	host_name: string;
	host_name_last_analysis_stats: LastAnalysisStats;
	ip_address: string;
	ip_address_last_analysis_stats: LastAnalysisStats;
	resolver: string;
}

export interface LastAnalysisStats {
	harmless: number;
	malicious: number;
	suspicious: number;
	undetected: number;
	timeout: number;
}

export interface Links {
	self: string;
}
