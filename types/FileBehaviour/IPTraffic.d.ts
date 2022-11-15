export interface IPTraffic {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	dns_lookups: DNSLookup[];
}

export interface DNSLookup {
	destination_ip: string;
	destination_port: number;
	transport_layer_protocol: string;
}
