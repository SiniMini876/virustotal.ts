export interface RetrohuntJob {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	corpus: string;
	creation_date: number;
	eta_seconds: number;
	notification_email: string;
	num_matches: number;
	num_matches_outside_time_range: number;
	progress: number;
	rules: string;
	scanned_bytes: number;
	start_date: number;
	status: string;
}

export interface Links {
	self: string;
}
