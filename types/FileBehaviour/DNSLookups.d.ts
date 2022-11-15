export interface DNSLookups {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	dns_lookups: DNSLookup[];
}

export interface DNSLookup {
	hostname: string;
	resolved_ips?: string[];
}
