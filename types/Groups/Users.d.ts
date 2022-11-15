import {User} from '../Users/User.js';

export interface GroupUsers {
	data: User[];
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
