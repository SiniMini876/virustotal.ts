import {User} from '../Users/User';

export interface RetrohuntJobsOwner {
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
