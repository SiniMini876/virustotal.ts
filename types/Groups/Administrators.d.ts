import {User} from '../Users/User';

export interface GroupsAdministrators {
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
