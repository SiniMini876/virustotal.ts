import {Comment} from '../Comments/Comment';

export interface CommentsThreatActors {
	data: Comment[];
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
