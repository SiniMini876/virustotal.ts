import {AttackTactic} from '../AttackTactics/AttackTactic';

export interface AttackTacticsAttackTechniques {
	data: AttackTactic[];
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
