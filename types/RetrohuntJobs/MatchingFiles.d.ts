export interface RetrohuntJobsMatchingFiles {
	data: Datum[];
	links: RetrohuntJobsMatchingFilesLinks;
	meta: Meta;
}

export interface Datum {
	attributes: File;
	context_attributes: ContextAttributes;
	id: string;
	links: DatumLinks;
	type: string;
}

export interface Exiftool {
	FileType: string;
	FileTypeExtension: string;
	LineCount: string;
	MIMEEncoding: string;
	MIMEType: string;
	Newlines: string;
	WordCount: string;
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

export interface TotalVotes {
	harmless: number;
	malicious: number;
}

export interface ContextAttributes {
	match_in_subfile: boolean;
	rule_name: string;
}

export interface DatumLinks {
	self: string;
}

export interface RetrohuntJobsMatchingFilesLinks {
	next: string;
	self: string;
}

export interface Meta {
	count: number;
	cursor: string;
}
