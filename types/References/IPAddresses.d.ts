import {IPAddress} from '../IPAddresses/IPAddress';

export interface IPAddressReferences {
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
