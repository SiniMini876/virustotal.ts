export interface AttackTechnique {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	type: string;
	id: string;
	links: Links;
}

export interface Attributes {
	info: Info;
	revoked: boolean;
	name: string;
	creation_date: number;
	link: string;
	stix_id: string;
	last_modification_date: number;
	description: string;
}

export interface Info {
	x_mitre_contributors: string[];
	x_mitre_platforms: string[];
	x_mitre_is_subtechnique: boolean;
	x_mitre_permissions_required: string[];
	x_mitre_version: string;
	x_mitre_data_sources: string[];
	x_mitre_detection: string;
}

export interface Links {
	self: string;
}
