export interface OfficeInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	office_info: OfficeInfoClass;
}

export interface OfficeInfoClass {
	document_summary_info: DocumentSummaryInfo;
	entries: Entry[];
	ole: OLE;
	summary_info: SummaryInfo;
}

export interface DocumentSummaryInfo {
	characters_with_spaces: number;
	code_page: string;
	hyperlinks_changed: boolean;
	line_count: number;
	links_dirty: boolean;
	paragraph_count: number;
	scale: boolean;
	shared_document: boolean;
	version: number;
}

export interface Entry {
	clsid?: string;
	clsid_literal?: string;
	name: string;
	sid: number;
	size: number;
	type_literal: string;
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
	vba_code: string;
	vba_filename: string;
}

export interface SummaryInfo {
	application_name: string;
	author: string;
	character_count: number;
	code_page: string;
	creation_datetime: string;
	edit_time: number;
	last_author: string;
	last_saved: string;
	page_count: number;
	revision_number: string;
	security: number;
	template: string;
	word_count: number;
}
