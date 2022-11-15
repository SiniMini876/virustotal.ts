import {Collection} from '../Collections/Collection';

export interface CollectionsThreatActors {
	data: Collection[];
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
