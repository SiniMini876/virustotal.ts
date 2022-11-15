import {Graph} from '../Graphs/Graph';

export interface GroupsGraphs {
	data: Graph[];
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
