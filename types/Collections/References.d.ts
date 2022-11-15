import {Reference} from '../References/Reference.js';

export interface ReferencesCollections {
	data: Reference[];
	links: Links;
	meta: Meta;
}

export interface Links {
	next?: string;
	self: string;
}

export interface Meta {
	count: number;
	cursor?: string;
}
