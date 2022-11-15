export interface Snort {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	snort: {[key: string]: SnortValue};
}

export interface SnortValue {
	alert: string;
	classification: string;
	destinations: string[];
}
