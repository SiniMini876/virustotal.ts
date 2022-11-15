export interface PEInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	pe_info: PEInfoClass;
}

export interface PEInfoClass {
	debug: Debug[];
	entry_point: number;
	exports: string[];
	imphash: string;
	import_list: ImportList[];
	machine_type: number;
	overlay: Overlay;
	resource_details: ResourceDetail[];
	resource_langs: ResourceLangs;
	resource_types: ResourceTypes;
	sections: Section[];
	timestamp: number;
}

export interface Debug {
	codeview?: Codeview;
	offset: number;
	size: number;
	timestamp: string;
	type: number;
	type_str: string;
}

export interface Codeview {
	age: number;
	guid: string;
	name: string;
	signature: string;
}

export interface ImportList {
	imported_functions: string[];
	library_name: string;
}

export interface Overlay {
	chi2: number;
	entropy: number;
	filetype: string;
	md5: string;
	offset: number;
	size: number;
}

export interface ResourceDetail {
	chi2: number;
	entropy: number;
	filetype: string;
	lang: string;
	sha256: string;
	type: string;
}

export interface ResourceLangs {
	NEUTRAL: number;
}

export interface ResourceTypes {
	RT_GROUP_ICON: number;
	RT_ICON: number;
	RT_RCDATA: number;
	RT_STRING: number;
	RT_VERSION: number;
}

export interface Section {
	chi2: number;
	entropy: number;
	flags: string;
	md5: string;
	name: string;
	raw_size: number;
	virtual_address: number;
	virtual_size: number;
}
