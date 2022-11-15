export interface DmgInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	dmg_info: DmgInfoClass;
}

export interface DmgInfoClass {
	blkx: Blkx[];
	data_fork_length: number;
	data_fork_offset: number;
	dmg_version: number;
	gpt: GPT;
	hfs: HFS;
	iso: ISO;
	plst: Blkx[];
	plst_context: string[];
	plst_keys: string[];
	resourcefork_keys: string[];
	rsrc_fork_length: number;
	rsrc_fork_offset: number;
	running_data_fork_offset: number;
	xml_length: number;
	xml_offset: number;
}

export interface Blkx {
	attributes: string;
	name: string;
}

export interface GPT {
	alternate_lba: number;
	disk_uuid: string;
	entries_crc32: number;
	entries_lba: number;
	first_usable_lba: number;
	header_crc32: number;
	last_usable_lba: number;
	my_lba: number;
	number_of_entries: number;
	partitions: Partition[];
	revision: string;
	signature: string;
	size: number;
	size_of_entry: number;
}

export interface Partition {
	attrs_flags: number;
	ending_lba: number;
	name: string;
	starting_lba: number;
	type_guid: string;
	unique_guid: string;
}

export interface HFS {
	info_plist: {[key: string]: string};
	main_executable: HFSMainExecutable;
	num_files: number;
	unreadable_files: number;
}

export interface HFSMainExecutable {
	path: string;
	sha256: string;
	size: number;
}

export interface ISO {
	info_plist: InfoPlist;
	main_executable: ISOMainExecutable;
	num_files: number;
	volume_data: VolumeData;
}

export interface InfoPlist {
	BuildMachineOSBuild: string;
	CFBundleDevelopmentRegion: string;
	CFBundleExecutable: string;
	CFBundleIdentifier: string;
	CFBundleInfoDictionaryVersion: string;
	CFBundleName: string;
	CFBundlePackageType: string;
	CFBundleShortVersionString: string;
	CFBundleSignature: string;
	CFBundleVersion: string;
	DTCompiler: string;
	DTPlatformBuild: string;
	DTPlatformVersion: string;
	DTSDKBuild: string;
	DTSDKName: string;
	DTXcode: string;
	DTXcodeBuild: string;
	LSMinimumSystemVersion: string;
	LSUIElement: boolean;
	NSHumanReadableCopyright: string;
	NSPrincipalClass: string;
}

export interface ISOMainExecutable {
	datetime: string;
	path: string;
	sha256: string;
	size: number;
	type: string;
}

export interface VolumeData {
	application_id: string;
	created: string;
	effective: string;
	expires: string;
	file_structure_version: number;
	max_date: string;
	min_date: string;
	modified: string;
	num_files: number;
	system_id: string;
	total_size: number;
	type_code: string;
	volume_id: string;
}
