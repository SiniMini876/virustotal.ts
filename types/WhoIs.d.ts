export interface WhoIs {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	first_seen_date: number;
	last_updated: number;
	whois_map: WhoisMap;
}

export interface WhoisMap {
	[key: string]: string;
}

export interface Links {
	self: string;
}
