export interface ROMBIOSInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	rombios_info: RombiosInfo;
}

export interface RombiosInfo {
	acpi_tables: string[];
	bios_information: BIOSInformation;
	certs: CERT[];
	contained_hash: string;
	executable_files: number;
	extra: string;
	firmware_volumes: number;
	format: string;
	manufacturer_strings: ManufacturerStrings;
	max_tree_level: number;
	nvar_variable_names: string[];
	raw_objects: number;
	raw_sections: number;
	sections: number;
	smbios_data: SMBIOSData;
	system_information: SystemInformation;
	win32_files: number;
}

export interface BIOSInformation {
	bios_release: string;
	characteristics: string[];
	release_date: string;
	rom_size: string;
	runtime_size: string;
	starting_address_segment: string;
	vendor: string;
	version: string;
}

export interface CERT {
	issuer: string;
	subject: string;
	valid_from: string;
	valid_to: string;
}

export interface ManufacturerStrings {
	ASUSTeK: number;
	Intel: number;
	Lenovo: number;
}

export interface SMBIOSData {
	structures_count: number;
	version: string;
}

export interface SystemInformation {
	family: string;
	manufacturer: string;
	product_name: string;
	serial_number: string;
	sku: string;
	uuid: string;
	version: string;
}
