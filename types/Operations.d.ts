export interface Operations {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	status: string;
}

export interface Links {
	self: string;
}
