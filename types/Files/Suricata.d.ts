export interface Suricata {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	suricata: {[key: string]: SuricataValue};
}

export interface SuricataValue {
	alert: string;
	classification: string;
	destinations: string[];
}
