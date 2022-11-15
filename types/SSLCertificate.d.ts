export interface SSLCertificate {
	type: string;
	id: string;
	attributes: Attributes;
	links: Links;
}

export interface Attributes {
	cert_signature: CERTSignature;
	extensions: Extensions;
	first_seen_date: number;
	issuer: Issuer;
	public_key: PublicKey;
	serial_number: string;
	signature_algorithm: string;
	size: number;
	subject: Issuer;
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
	CA: boolean;
	authority_key_identifier: AuthorityKeyIdentifier;
	ca_information_access: CAInformationAccess;
	certificate_policies: string[];
	cert_template_name_dc: string;
	crl_distribution_points: string[];
	extended_key_usage: string[];
	key_usage: string[];
	netscape_cert_comment: string;
	netscape_certificate: boolean;
	old_authority_key_identifier: boolean;
	pe_logotype: boolean;
	subject_alternative_name: string[];
	subject_key_identifier: string;
	tags: string[];
	'<additional extensions:string>': string;
}

export interface AuthorityKeyIdentifier {
	keyid: string;
	serial_number: string;
}

export interface CAInformationAccess {
	'<string>': string;
}

export interface Issuer {
	C: string;
	CN: string;
	L: string;
	O: string;
	OU: string;
	ST: string;
}

export interface PublicKey {
	algorithm: string;
	rsa: RSA;
	dsa: DSA;
	ec: Ec;
}

export interface DSA {
	p: string;
	q: string;
	g: string;
	pub: string;
}

export interface Ec {
	oid: string;
	pub: string;
}

export interface RSA {
	key_size: number;
	modulus: string;
	exponent: string;
}

export interface Validity {
	not_after: string;
	not_before: string;
}

export interface Links {
	self: string;
}
