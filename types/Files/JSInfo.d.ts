export interface JSInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	javascript_info: JavascriptInfo;
}

export interface JavascriptInfo {
	tags: string[];
}
