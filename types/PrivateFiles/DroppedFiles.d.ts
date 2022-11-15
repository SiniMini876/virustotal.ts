export interface DroppedFilesPrivateFiles {
	meta: Meta;
	data: Datum[];
	links: DroppedFilesPrivateFileLinks;
}

export interface Datum {
	attributes: Attributes;
	type: string;
	id: string;
	links: DatumLinks;
	context_attributes: ContextAttributes;
}

export interface Attributes {}

export interface ContextAttributes {
	paths: string[];
	type: string;
}

export interface DatumLinks {
	self: string;
}

export interface DroppedFilesPrivateFileLinks {
	self: string;
	next: string;
}

export interface Meta {
	count: number;
	cursor: string;
}
