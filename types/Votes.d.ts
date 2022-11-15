export interface Vote {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	date: number;
	value: number;
	verdict: string;
}

export interface Links {
	self: string;
}

export type VoteType = 'harmless' | 'malicious';
