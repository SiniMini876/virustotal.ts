import {File} from '../Files/File.d.ts';
import {URL} from '../URLs/URL.d.ts';

export interface AnalysesItem {
	data: File | URL;
	links: Links;
	meta: Meta;
}

export interface Links {
	self: string;
}

export interface Meta {
	count: number;
}
