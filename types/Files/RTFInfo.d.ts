export interface RTFInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	rtf_info: RtfInfo;
}

export interface RtfInfo {
	document_properties: DocumentProperties;
	summary_info: SummaryInfo;
}

export interface DocumentProperties {
	custom_xml_data_properties: number;
	default_ansi_codepage: string;
	default_character_set: string;
	default_languages: string[];
	dos_stubs: number;
	embedded_drawings: number;
	embedded_pictures: number;
	longest_hex_string: number;
	non_ascii_characters: number;
	objects: Object[];
	read_only_protection: boolean;
	rtf_header: string;
	user_protection: boolean;
}

export interface Object {
	class: string;
	type: string;
}

export interface SummaryInfo {
	author: string;
	company: string;
	creation_time: string;
	editing_time: number;
	number_of_characters: number;
	number_of_non_whitespace_characters: number;
	number_of_pages: number;
	number_of_words: number;
	operator: string;
	print_time: string;
	revision_time: string;
	title: string;
	version: number;
	version_number: number;
}
