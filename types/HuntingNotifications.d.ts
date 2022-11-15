export interface HuntingNotifications {
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
	match_in_subfile: boolean;
	rule_name: string;
	rule_tags: any[];
	snippet: string;
	source_country: string;
	source_key: string;
	tags: string[];
}

export interface Links {
	self: string;
}
