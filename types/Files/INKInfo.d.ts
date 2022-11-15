export interface INKInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	lnk_info: LnkInfo;
}

export interface LnkInfo {
	mac_vendor_name: string;
	machine_id: string;
	link_flags: string[];
	modification_date: string;
	creation_date: string;
	target_path: string;
	relative_path: string;
	local_path: string;
	working_directory: string;
	mac_address: string;
	access_date: string;
	volume_serial_number: string;
}
