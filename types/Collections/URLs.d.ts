import {URL} from '../URLs/URL';

export interface URLSCollections {
	data: URL[];
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
