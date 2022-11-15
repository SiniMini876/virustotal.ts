export interface DetectItEasy {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	detectiteasy: Detectiteasy;
}

export interface Detectiteasy {
	filetype: string;
	values: Value[];
}

export interface Value {
	version?: string;
	type: string;
	name: string;
	info?: string;
}
