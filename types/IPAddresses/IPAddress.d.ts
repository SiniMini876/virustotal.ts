export interface IPAddress {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	as_owner: string;
	asn: number;
	continent: string;
	country: string;
	jarm: string;
	last_analysis_results: LastAnalysisResults;
	last_analysis_stats: LastAnalysisStats;
	last_https_certificate: LastHTTPSCertificate;
	last_https_certificate_date: number;
	last_modification_date: number;
	network: string;
	regional_internet_registry: string;
	reputation: number;
	tags: any[];
	total_votes: TotalVotes;
	whois: string;
	whois_date: number;
}

export interface LastAnalysisResults {
	ADMINUSLabs: AdminusLabs;
	'AegisLab WebGuard': AdminusLabs;
	AlienVault: AdminusLabs;
	'Antiy-AVL': AdminusLabs;
	AutoShun: AdminusLabs;
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

export interface LastHTTPSCertificate {
	cert_signature: CERTSignature;
	extensions: Extensions;
	issuer: Issuer;
	public_key: PublicKey;
	serial_number: string;
	signature_algorithm: string;
	size: number;
	subject: Subject;
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
	extended_key_usage: string[];
	key_usage: string[];
	subject_alternative_name: string[];
	subject_key_identifier: string;
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
	rsa: RSA;
}

export interface RSA {
	exponent: string;
	key_size: number;
	modulus: string;
}

export interface Subject {
	CN: string;
}

export interface Validity {
	not_after: string;
	not_before: string;
}

export interface TotalVotes {
	harmless: number;
	malicious: number;
}

export interface Links {
	self: string;
}
