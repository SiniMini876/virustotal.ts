export interface VBAInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	vba_info: VBAInfoClass;
}

export interface VBAInfoClass {
	deobfuscated_strings: string[];
	strings: string[];
}
