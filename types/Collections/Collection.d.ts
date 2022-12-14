export interface CollectionType {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	alt_names: string[];
	autogenerated_tags: string[];
	creation_date: number;
	description: string;
	description_html: string;
	domains_count: number;
	files_count: number;
	ip_addresses_count: number;
	last_modification_date: number;
	link: string;
	name: string;
	references_count: number;
	status: string;
	tags: string[];
	targeted_industries: string[];
	targeted_regions: string[];
	tlp: string;
	top_icon_md5: string[];
	urls_count: number;
}

export interface Links {
	self: string;
}
