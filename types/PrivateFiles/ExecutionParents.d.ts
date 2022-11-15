export interface ExecutionParentsPrivateFiles {
	meta: Meta;
	data: Datum[];
	links: Links;
}

export interface Datum {
	attributes: Attributes;
	type: string;
	id: string;
	links: Links;
	context_attributes: ContextAttributes;
}

export interface Attributes {}

export interface ContextAttributes {
	paths: string[];
	type: string;
}

export interface Links {
	self: string;
}

export interface Meta {
	count: number;
}
