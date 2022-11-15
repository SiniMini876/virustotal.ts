export interface Domain {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	categories: Categories;
	creation_date: number;
	favicon: Favicon;
	jarm: string;
	last_analysis_results: LastAnalysisResults;
	last_analysis_stats: LastAnalysisStats;
	last_dns_records: LastDNSRecord[];
	last_dns_records_date: number;
	last_https_certificate: LastHTTPSCertificate;
	last_https_certificate_date: number;
	last_modification_date: number;
	last_update_date: number;
	popularity_ranks: PopularityRanks;
	registrar: string;
	reputation: number;
	tags: string[];
	total_votes: TotalVotes;
	whois: string;
}

export interface Categories {
	'Dr.Web': string;
	'Forcepoint ThreatSeeker': string;
}

export interface Favicon {
	dhash: string;
	raw_md5: string;
}

export interface LastAnalysisResults {
	ADMINUSLabs: AdminusLabs;
	'AegisLab WebGuard': AdminusLabs;
	AlienVault: AdminusLabs;
}

export interface AdminusLabs {
	category: string;
	engine_name: string;
	method: string;
	result: string;
}

export interface LastAnalysisStats {
	harmless: number;
	malicious: number;
	suspicious: number;
	timeout: number;
	undetected: number;
}

export interface LastDNSRecord {
	expire?: number;
	minimum?: number;
	refresh?: number;
	retry?: number;
	rname?: string;
	serial?: number;
	ttl: number;
	type: string;
	value: string;
	priority?: number;
	flag?: number;
	tag?: string;
}

export interface LastHTTPSCertificate {
	cert_signature: CERTSignature;
	extensions: Extensions;
	issuer: Issuer;
	public_key: PublicKey;
	serial_number: string;
	signature_algorithm: string;
	size: number;
	subject: Subject;
	tags: any[];
	thumbprint: string;
	thumbprint_sha256: string;
	validity: Validity;
	version: string;
}

export interface CERTSignature {
	signature: string;
	signature_algorithm: string;
}

export interface Extensions {
	'1.3.6.1.4.1.11129.2.4.2': string;
	CA: boolean;
	authority_key_identifier: AuthorityKeyIdentifier;
	ca_information_access: CAInformationAccess;
	certificate_policies: string[];
	crl_distribution_points: string[];
	extended_key_usage: string[];
	key_usage: string[];
	subject_alternative_name: string[];
	subject_key_identifier: string;
	tags: any[];
}

export interface AuthorityKeyIdentifier {
	keyid: string;
}

export interface CAInformationAccess {
	'CA Issuers': string;
	OCSP: string;
}

export interface Issuer {
	C: string;
	CN: string;
	O: string;
}

export interface PublicKey {
	algorithm: string;
	ec: Ec;
}

export interface Ec {
	oid: string;
	pub: string;
}

export interface Subject {
	C: string;
	CN: string;
	L: string;
	O: string;
	ST: string;
}

export interface Validity {
	not_after: string;
	not_before: string;
}

export interface PopularityRanks {
	Alexa: Alexa;
	'Cisco Umbrella': Alexa;
	Majestic: Alexa;
	Statvoo: Alexa;
}

export interface Alexa {
	rank: number;
	timestamp: number;
}

export interface TotalVotes {
	harmless: number;
	malicious: number;
}

export interface Links {
	self: string;
}
