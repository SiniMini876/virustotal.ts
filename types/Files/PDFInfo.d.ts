export interface PDFInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	pdf_info: PDFInfoClass;
}

export interface PDFInfoClass {
	acroform: number;
	autoaction: number;
	embedded_file: number;
	encrypted: number;
	flash: number;
	header: string;
	javascript: number;
	jbig2_compression: number;
	js: number;
	num_endobj: number;
	num_endstream: number;
	num_launch_actions: number;
	num_obj: number;
	num_object_streams: number;
	num_pages: number;
	num_stream: number;
	openaction: number;
	startxref: number;
	suspicious_colors: number;
	trailer: number;
	xfa: number;
	xref: number;
}
