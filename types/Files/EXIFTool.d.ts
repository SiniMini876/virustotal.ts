export interface EXIFTool {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	exiftool: {[key: string]: string};
}
