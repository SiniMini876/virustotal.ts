export interface Clusters {
	data: Datum[];
}

export interface Datum {
	attributes: Attributes;
	type: string;
	id: string;
}

export interface Attributes {
	files: number;
	discriminator: string;
	vector: string;
	mean_positives: number;
	name: string;
}
