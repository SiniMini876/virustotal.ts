import {User} from '../Users/User';

export interface OwnerCollections {
	data: User;
	links: Links;
	meta: Meta;
}

export interface Links {
	self: string;
}

export interface Meta {
	count: number;
}
