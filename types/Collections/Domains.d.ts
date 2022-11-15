import {Domain} from '../Domains/Domain';

export interface DomainsCollections {
	data: Domain[];
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
