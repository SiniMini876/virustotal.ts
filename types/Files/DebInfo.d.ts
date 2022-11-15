export interface DebInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	deb_info: DebInfoClass;
}

export interface DebInfoClass {
	changelog: Changelog;
	control_metadata: {[key: string]: string};
	control_scripts: ControlScripts;
	structural_metadata: StructuralMetadata;
}

export interface Changelog {
	Author: string;
	Date: string;
	'Debian revision': string;
	'Debian version': string;
	Distributions: string;
	'Full version': string;
	Package: string;
	Urgency: string;
	'Version history': string;
}

export interface ControlScripts {
	postinst: string;
	postrm: string;
	preinst: string;
	prerm: string;
}

export interface StructuralMetadata {
	contained_files: number;
	contained_items: number;
	max_date: string;
	min_date: string;
}
