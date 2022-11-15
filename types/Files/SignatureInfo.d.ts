export interface SignatureInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	signature_info: SignatureInfoClass;
}

export interface SignatureInfoClass {
	copyright: string;
	'counter signers': string;
	'counter signers details': CounterSignersDetail[];
	description: string;
	'file version': string;
	'internal name': string;
	'original name': string;
	product: string;
	signers: string;
	'signers details': CounterSignersDetail[];
	'signing date': string;
	verified: string;
	x509: CounterSignersDetail[];
}

export interface CounterSignersDetail {
	algorithm: string;
	'cert issuer': string;
	name: string;
	'serial number': string;
	status?: string;
	thumbprint: string;
	'valid from': string;
	'valid to': string;
	'valid usage'?: string;
	valid_usage?: string;
}
