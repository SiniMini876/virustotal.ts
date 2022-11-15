export interface RelatedFilesThreatActors {
	data: Datum[];
	links: RelatedFilesLinks;
	meta: Meta;
}

export interface Datum {
	attributes: DatumAttributes;
	context_attributes: ContextAttributes;
	id: string;
	links: DatumLinks;
	type: string;
}

export interface DatumAttributes {
	authentihash: string;
	creation_date: number;
	downloadable: boolean;
	exiftool: {[key: string]: string};
	first_submission_date: number;
	last_analysis_date: number;
	last_analysis_results: LastAnalysisResults;
	last_analysis_stats: LastAnalysisStats;
	last_modification_date: number;
	last_submission_date: number;
	magic: string;
	md5: string;
	meaningful_name: string;
	names: string[];
	pe_info: PEInfo;
	reputation: number;
	sha1: string;
	sha256: string;
	signature_info: SignatureInfo;
	size: number;
	ssdeep: string;
	tags: string[];
	times_submitted: number;
	total_votes: TotalVotes;
	trid: Trid[];
	type_description: string;
	type_tag: string;
	unique_sources: number;
	vhash: string;
}

export interface LastAnalysisResults {
	ALYac: AlYac;
	APEX: AlYac;
	AVG: AlYac;
	Acronis: AlYac;
	'Ad-Aware': AlYac;
	AegisLab: AlYac;
}

export interface AlYac {
	category: string;
	engine_name: string;
	engine_update: string;
	engine_version: string;
	method: string;
	result: null | string;
}

export interface LastAnalysisStats {
	'confirmed-timeout': number;
	failure: number;
	harmless: number;
	malicious: number;
	suspicious: number;
	timeout: number;
	'type-unsupported': number;
	undetected: number;
}

export interface PEInfo {
	debug: Debug[];
	entry_point: number;
	imphash: string;
	import_list: ImportList[];
	machine_type: number;
	resource_details: ResourceDetail[];
	resource_langs: ResourceLangs;
	resource_types: ResourceTypes;
	sections: Section[];
	timestamp: number;
}

export interface Debug {
	codeview: Codeview;
	offset: number;
	size: number;
	timestamp: string;
	type: number;
	type_str: string;
}

export interface Codeview {
	age: number;
	guid: string;
	name: string;
	signature: string;
}

export interface ImportList {
	imported_functions: string[];
	library_name: string;
}

export interface ResourceDetail {
	chi2: number;
	entropy: number;
	filetype: string;
	lang: string;
	sha256: string;
	type: string;
}

export interface ResourceLangs {
	NEUTRAL: number;
}

export interface ResourceTypes {
	RT_ICON: number;
}

export interface Section {
	chi2: number;
	entropy: number;
	flags: string;
	md5: string;
	name: string;
	raw_size: number;
	virtual_address: number;
	virtual_size: number;
}

export interface SignatureInfo {
	comments: string;
	copyright: string;
	description: string;
	'file version': string;
	'internal name': string;
	'original name': string;
	product: string;
}

export interface TotalVotes {
	harmless: number;
	malicious: number;
}

export interface Trid {
	file_type: string;
	probability: number;
}

export interface ContextAttributes {
	related_from: RelatedFrom[];
}

export interface RelatedFrom {
	attributes: RelatedFromAttributes;
	type: string;
	id: string;
}

export interface RelatedFromAttributes {
	name: string;
}

export interface DatumLinks {
	self: string;
}

export interface RelatedFilesLinks {
	self: string;
	next: string;
}

export interface Meta {
	count: number;
	cursor: string;
}
