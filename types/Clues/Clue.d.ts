export interface Clue {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	features: Feature[];
	label: string;
	last_month: number;
	last_month_positive_rate: number;
	last_month_total_log10_count: number;
}

export interface Feature {
	feature_type: string;
	objects: string[];
}

export interface Links {
	self: string;
}
