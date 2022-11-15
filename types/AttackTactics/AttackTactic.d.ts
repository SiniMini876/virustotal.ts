export interface AttackTactic {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	type: string;
	id: string;
	links: Links;
}

export interface Attributes {
	description: string;
	creation_date: number;
	link: string;
	stix_id: string;
	last_modification_date: number;
	name: string;
}

export interface Links {
	self: string;
}
