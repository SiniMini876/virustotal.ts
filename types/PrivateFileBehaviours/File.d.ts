import {PrivateFile} from '../PrivateFiles/PrivateFiles';

export interface FilePrivateFileBehaviours {
	data: PrivateFile;
	links: Links;
	meta: Meta;
}

export interface Links {
	self: string;
}

export interface Meta {
	count: number;
}
