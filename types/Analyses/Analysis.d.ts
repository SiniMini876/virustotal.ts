export interface Analysis {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	type: string;
}

export interface Attributes {
	date: number;
	results: Results;
	stats: Stats;
	status: string;
}

export interface Results {
	[AV: string]: Result;
}

export interface Result {
	category: string;
	engine_name: string;
	engine_update: string;
	engine_version: string;
	method: string;
	result: null | string;
}

export interface Stats {
	'confirmed-timeout': number;
	failure: number;
	harmless: number;
	malicious: number;
	suspicious: number;
	timeout: number;
	'type-unsupported'?: number;
	undetected: number;
}
