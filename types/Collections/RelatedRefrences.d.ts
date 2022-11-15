export interface RelatedRefrencesCollections {
	meta: Meta;
	data: Datum[];
	links: RelatedRefrencesLinks;
}

export interface Datum {
	attributes: DatumAttributes;
	type: string;
	id: string;
	links: DatumLinks;
	context_attributes: ContextAttributes;
}

export interface DatumAttributes {
	url: string;
	creation_date: number;
	author: string;
	title: string;
}

export interface ContextAttributes {
	related_from: RelatedFrom[];
}

export interface RelatedFrom {
	attributes: RelatedFromAttributes;
	type: string;
	id: string;
}

export interface RelatedFromAttributes {
	name: string;
}

export interface DatumLinks {
	self: string;
}

export interface RelatedRefrencesLinks {
	self: string;
	next: string;
}

export interface Meta {
	count: number;
	cursor: string;
}
