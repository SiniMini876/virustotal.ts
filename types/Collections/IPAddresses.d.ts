import {IPAddress} from '../IPAddresses/IPAddress';

export interface IPAddressCollections {
	data: IPAddress[];
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
