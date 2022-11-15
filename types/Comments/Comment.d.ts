export interface Comment {
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
	html: string;
	tags: string[];
	text: string;
	votes: Votes;
}

export interface Votes {
	abuse: number;
	negative: number;
	positive: number;
}

export interface Links {
	self: string;
}
