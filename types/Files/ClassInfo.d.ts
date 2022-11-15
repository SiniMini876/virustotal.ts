export interface ClassInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	class_info: ClassInfoClass;
}

export interface ClassInfoClass {
	constants: string[];
	extends: string;
	implements: string[];
	methods: string[];
	name: string;
	platform: string;
	provides: string[];
	requires: string[];
}
