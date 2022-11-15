export interface Submissions {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	city: string;
	country: string;
	date: number;
	interface: string;
	name: string;
	source_key: string;
}

export interface Links {
	self: string;
}
