import {FileBehaviour} from '../FileBehaviour/FileBehaviour';

export interface BehaviourPrivateFiles {
	data: FileBehaviour[];
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
