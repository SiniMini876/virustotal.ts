export interface YARARuleset {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	name: string;
	rules: string;
	source: string;
}

export interface Links {
	self: string;
}
