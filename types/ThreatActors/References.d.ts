import {Reference} from '../References/Reference';

export interface ReferencesThreatActors {
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
