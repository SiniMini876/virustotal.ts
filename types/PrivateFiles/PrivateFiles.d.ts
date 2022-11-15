export interface PrivateFile {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	type: string;
	id: string;
	links: Links;
}

export interface Attributes {
	sha1: string;
	magic: string;
	tags: string[];
	exiftool: Exiftool;
	trid: Trid[];
	vhash: string;
	sha256: string;
	ssdeep: string;
	md5: string;
	size: number;
}

export interface Exiftool {
	MIMEType: string;
	LineCount: string;
	MIMEEncoding: string;
	FileTypeExtension: string;
	FileType: string;
	WordCount: string;
	Newlines: string;
}

export interface Trid {
	file_type: string;
	probability: number;
}

export interface Links {
	self: string;
}
