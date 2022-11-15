export interface Screenshots {
	data: Data;
}

export interface Data {
	type: string;
	id: string;
	attributes: Attributes;
}

export interface Attributes {
	sandbox_name: string;
	date: string;
	link: string;
	analysed_file_sha256: AnalysedFileSha256;
}

export interface AnalysedFileSha256 {}
