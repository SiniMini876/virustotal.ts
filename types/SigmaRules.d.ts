export interface SigmaRule {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	description: string;
	detection: Detection;
	false_positives: string[];
	fields: string[];
	level: string;
	log_source: LogSource;
	references: any[];
	source: string;
	status: string;
	tags: any[];
	title: string;
}

export interface Detection {
	condition: string;
	details: Details;
}

export interface Details {
	ini: string;
	intel: string;
	selection: string;
}

export interface LogSource {
	category: string;
	definition: string;
	product: string;
	service: string;
}

export interface Links {
	self: string;
}
