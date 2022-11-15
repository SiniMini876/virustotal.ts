export interface DotNetAsam {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	dot_net_assembly: DotNetAssembly;
}

export interface DotNetAssembly {
	assembly_data: AssemblyData;
	assembly_flags: number;
	assembly_flags_txt: string;
	assembly_name: string;
	clr_meta_version: string;
	clr_version: string;
	entry_point_rva: number;
	entry_point_token: number;
	external_assemblies: ExternalAssemblies;
	external_modules: string[];
	manifest_resource: string[];
	metadata_header_rva: number;
	resources_va: number;
	streams: Streams;
	strongname_va: number;
	tables_present: number;
	tables_present_map: string;
	tables_rows_map: string;
	tables_rows_map_log: string;
	type_definition_list: TypeDefinitionList[];
	unmanaged_method_list: UnmanagedMethodList[];
	unmanaged_methods: UnmanagedMethods;
}

export interface AssemblyData {
	buildnumber: number;
	culture: string;
	flags: number;
	flags_text: string;
	hashalgid: number;
	majorversion: number;
	minorversion: number;
	name: string;
	pubkey: string;
	revisionnumber: number;
}

export interface ExternalAssemblies {
	System: System;
	'System.Drawing': System;
}

export interface System {
	version: string;
}

export interface Streams {
	'#Blob': Blob;
	'#GUID': Blob;
	'#Strings': Blob;
	'#US': Blob;
	'#~': Blob;
}

export interface Blob {
	chi2: number;
	entropy: number;
	md5: string;
	size: number;
}

export interface TypeDefinitionList {
	namespace: string;
	type_definitions: string[];
}

export interface UnmanagedMethodList {
	methods: string[];
	name: string;
}

export interface UnmanagedMethods {
	'winmm.dll': string[];
}
