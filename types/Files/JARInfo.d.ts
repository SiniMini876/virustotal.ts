export interface JARInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	jar_info: JarInfo;
}

export interface JarInfo {
	filenames: string[];
	files_by_type: FilesByType;
	manifest: string;
	max_date: string;
	max_depth: number;
	min_date: string;
	packages: string[];
	strings: string[];
	total_dirs: number;
	total_files: number;
}

export interface FilesByType {
	ascii: number;
	binary: number;
	class: number;
	jpg: number;
	ogg: number;
	png: number;
}
