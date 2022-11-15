export interface RelatedReferencesThreatActors {
	meta: Meta;
	data: Datum[];
	links: RelatedReferencesThreatActorsLinks;
}

export interface Datum {
	attributes: DatumAttributes;
	type: string;
	id: string;
	context_attributes: ContextAttributes;
	links: DatumLinks;
}

export interface DatumAttributes {
	last_modification_date: number;
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

export interface RelatedReferencesThreatActorsLinks {
	self: string;
	next: string;
}

export interface Meta {
	count: number;
	cursor: string;
}
