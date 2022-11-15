export interface PSInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	powershell_info: PowershellInfo;
}

export interface PowershellInfo {
	cmdlets: string[];
	cmdlets_alias: string[];
	dotnet_calls: string[];
	functions: string[];
	ps_variables: string[];
}
