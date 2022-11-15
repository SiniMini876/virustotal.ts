export interface PasswordInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	password_info: PasswordInfoClass;
}

export interface PasswordInfoClass {
	type: string;
	value: string;
}
