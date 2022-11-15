export interface ThreatActor {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	type: string;
	id: string;
	links: Links;
}

export interface Attributes {
	first_seen_date: number;
	description: string;
	targeted_regions: string[];
	aliases: string[];
	last_seen_date: number;
	related_entities_count: number;
	targeted_industries: string[];
	source_region: string;
	last_modification_date: number;
	sponsor_region: string;
	name: string;
}

export interface Links {
	self: string;
}
