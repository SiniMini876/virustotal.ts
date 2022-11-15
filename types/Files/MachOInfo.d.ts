export interface MachOInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	macho_info: MachoInfo[];
}

export interface MachoInfo {
	commands: Command[];
	headers: Headers;
	libs: string[];
	segments: Segment[];
}

export interface Command {
	type: string;
}

export interface Headers {
	cpu_subtype: string;
	cpu_type: string;
	file_type: string;
	flags: string[];
	magic: string;
	num_cmds: number;
	size_cmds: number;
}

export interface Segment {
	fileoff: string;
	filesize: string;
	name: string;
	sections: Section[];
	vmaddr: string;
	vmsize: string;
}

export interface Section {
	flags: string[];
	name: string;
	type: string;
}
