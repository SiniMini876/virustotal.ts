import {AttackTechnique} from '../AttackTechniques/AttackTechnique';

export interface AttackTechniquesPrivateFileBehaviours {
	data: AttackTechnique[];
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
