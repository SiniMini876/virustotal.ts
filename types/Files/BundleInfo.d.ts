export interface BundleInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	bundle_info: BundleInfoClass;
}

export interface BundleInfoClass {
	beginning: string;
	error: string;
	extensions: Extensions;
	file_types: Extensions;
	highest_datetime: string;
	lowest_datetime: string;
	num_children: number;
	password: string;
	type: string;
	uncompressed_size: number;
}

export interface Extensions {
	[key: string]: number;
}
