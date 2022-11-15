export interface Reference {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	type: string;
	id: string;
	links: Links;
}

export interface Attributes {
	last_modification_date: number;
	url: string;
	creation_date: number;
	author: string;
	title: string;
}

export interface Links {
	self: string;
}
