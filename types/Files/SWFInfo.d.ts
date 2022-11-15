export interface SWFInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	swf_info: SWFInfoClass;
}

export interface SWFInfoClass {
	compression: string;
	duration: number;
	file_attributes: string[];
	flash_packages: string[];
	frame_count: number;
	frame_size: string;
	metadata: string;
	num_swf_tags: number;
	num_unrecognized_tags: number;
	suspicious_strings: string[];
	suspicious_urls: string[];
	version: number;
}
