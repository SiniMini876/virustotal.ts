export interface SMSSent {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	sms_sent: SMSSentElement[];
}

export interface SMSSentElement {
	body: string;
	destination: string;
}
