export interface KnownDIstributors {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	known_distributors: KnownDistributors;
}

export interface KnownDistributors {
	filenames: string[];
	products: string[];
	distributors: string[];
	data_sources: string[];
}
