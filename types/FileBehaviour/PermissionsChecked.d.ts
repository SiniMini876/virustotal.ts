export interface PermissionsChecked {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	permissions_checked: PermissionsCheckedElement[];
}

export interface PermissionsCheckedElement {
	owner: string;
	permission: string;
}
