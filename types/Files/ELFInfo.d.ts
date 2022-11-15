export interface ELFInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	elf_info: ELFInfoClass;
}

export interface ELFInfoClass {
	export_list: PortList[];
	header: Header;
	import_list: PortList[];
	packers: string[];
	section_list: SectionList[];
	segment_list: SegmentList[];
	shared_libraries: string[];
}

export interface PortList {
	name: string;
	type: string;
}

export interface Header {
	abi_version: number;
	class: string;
	data: string;
	entrypoint: number;
	hdr_version: string;
	machine: string;
	num_prog_headers: number;
	num_section_headers: number;
	obj_version: string;
	os_abi: string;
	type: string;
}

export interface SectionList {
	virtual_address: number;
	flags: string;
	name: string;
	physical_offset: number;
	size: number;
	section_type: string;
}

export interface SegmentList {
	segment_type: string;
	resources: string[];
}
