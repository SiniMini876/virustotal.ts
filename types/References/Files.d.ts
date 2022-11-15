import {File} from '../Files/File';

export interface FilesReferences {
	data: File[];
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
