export interface OpenXMLInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	openxml_info: OpenxmlInfo;
}

export interface OpenxmlInfo {
	content_types: string[];
	docprops_app: {[key: string]: string};
	docprops_core: DocpropsCore;
	file_type: string;
	ole: OLE;
	rels: string[];
	type_content: TypeContent;
}

export interface DocpropsCore {
	'cp:lastModifiedBy': string;
	'cp:revision': string;
	'dc:creator': string;
	'dcterms:created': string;
	'dcterms:modified': string;
}

export interface OLE {
	macros: Macro[];
	num_macros: number;
}

export interface Macro {
	length: number;
	patterns: string[];
	properties: string[];
	stream_path: string;
	subfilename: string;
	vba_code: string;
	vba_filename: string;
}

export interface TypeContent {
	languages: Languages;
}

export interface Languages {
	[key: string]: number;
}
