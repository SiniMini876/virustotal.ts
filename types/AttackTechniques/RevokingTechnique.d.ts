import {AttackTechnique} from './AttackTechnique';

export interface RevokingTechniqueAttackTechniques {
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
