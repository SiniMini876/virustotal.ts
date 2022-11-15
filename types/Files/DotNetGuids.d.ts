export interface DotNetGuids {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	dot_net_guids: DotNetGuidsClass;
}

export interface DotNetGuidsClass {
	mvid: string;
	typelib_id: string;
}
