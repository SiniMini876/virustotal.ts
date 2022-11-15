export interface Trid {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	trid: TridElement[];
}

export interface TridElement {
	file_type: string;
	probability: number;
}
