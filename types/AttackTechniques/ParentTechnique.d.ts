import {AttackTechnique} from './AttackTechnique';

export interface ParentTechniqueAttackTechniques {
	data: AttackTechnique;
	links: Links;
	meta: Meta;
}

export interface Links {
	self: string;
}

export interface Meta {
	count: number;
}
