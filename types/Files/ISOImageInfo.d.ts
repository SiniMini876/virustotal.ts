export interface ISOImageInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	isoimage_info: IsoimageInfo;
}

export interface IsoimageInfo {
	application_id: string;
	created: string;
	data_preparer_id: string;
	effective: string;
	expires: string;
	file_structure_version: number;
	max_date: string;
	min_date: string;
	modified: string;
	num_files: number;
	publisher_id: string;
	total_size: number;
	type_code: string;
	volume_id: string;
	volume_set_id: string;
}
