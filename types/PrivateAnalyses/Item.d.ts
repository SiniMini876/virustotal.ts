export interface ItemPrivateAnalyses {
	meta: Meta;
	data: object;
	links: Links;
}

export interface Links {
	self: string;
}

export interface Meta {
	count: number;
}
