export interface TrafficInspection {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	traffic_inspection: TrafficInspectionClass;
}

export interface TrafficInspectionClass {
	http: HTTP[];
}

export interface HTTP {
	binary_hash: string;
	binary_magic: string;
	datetime: string;
	interesting_magic: number;
	method: string;
	remote_host: string;
	response_code: string;
	response_size: number;
	url: string;
	'user-agent': string;
}
