export interface Packers {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	packers: PackersClass;
}

export interface PackersClass {
	'F-PROT': string;
	PEiD: string;
}
