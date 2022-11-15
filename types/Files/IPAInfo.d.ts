export interface IPAInfo {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	ipa_info: IpaInfo;
}

export interface IpaInfo {
	apps: App[];
	plist: Plist;
	provision: Provision;
}

export interface App {
	commands: Command[];
	headers: Headers;
	libs: string[];
	segments: Segment[];
	tags: string[];
	vhash: string;
}

export interface Command {
	type: string;
}

export interface Headers {
	cpu_subtype: string;
	cpu_type: string;
	entrypoint: string;
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

export interface Plist {
	AppuploaderNet: string;
	BuildMachineOSBuild: string;
	CFBundleDevelopmentRegion: string;
	CFBundleDisplayName: string;
	CFBundleExecutable: string;
	CFBundleIcons: CFBundleIcons;
	'CFBundleIcons~ipad': CFBundleIcons;
	CFBundleIdentifier: string;
	CFBundleInfoDictionaryVersion: string;
	CFBundleName: string;
	CFBundlePackageType: string;
	CFBundleShortVersionString: string;
	CFBundleSignature: string;
	CFBundleSupportedPlatforms: string[];
	CFBundleURLTypes: CFBundleURLType[];
	CFBundleVersion: string;
	DTCompiler: string;
	DTPlatformBuild: string;
	DTPlatformName: string;
	DTPlatformVersion: string;
	DTSDKBuild: string;
	DTSDKName: string;
	DTXcode: string;
	DTXcodeBuild: string;
	LSApplicationQueriesSchemes: string[];
	LSRequiresIPhoneOS: boolean;
	'Localizedresources can be mixed': boolean;
	MinimumOSVersion: string;
	NSAppTransportSecurity: NSAppTransportSecurity;
	NSCameraUsageDescription: string;
	NSPhotoLibraryAddUsageDescription: string;
	NSPhotoLibraryUsageDescription: string;
	UIBackgroundModes: string[];
	UIDeviceFamily: number[];
	UILaunchStoryboardName: string;
	UIPrerenderedIcon: boolean;
	UIRequiredDeviceCapabilities: UIRequiredDeviceCapabilities;
	UIRequiresFullScreen: boolean;
	UIStatusBarHidden: boolean;
	UISupportedInterfaceOrientations: string[];
	UIViewControllerBasedStatusBarAppearance: boolean;
}

export interface CFBundleIcons {
	CFBundlePrimaryIcon: CFBundlePrimaryIcon;
}

export interface CFBundlePrimaryIcon {
	CFBundleIconFiles: string[];
	CFBundleIconName: string;
}

export interface CFBundleURLType {
	CFBundleTypeRole: string;
	CFBundleURLName: string;
	CFBundleURLSchemes: string[];
}

export interface NSAppTransportSecurity {
	NSAllowsArbitraryLoads: boolean;
	NSExceptionDomains: NSExceptionDomains;
}

export interface NSExceptionDomains {
	'blabla.cn': BlablaCN;
}

export interface BlablaCN {
	NSExceptionAllowsInsecureHTTPLoads: boolean;
	NSIncludesSubdomains: boolean;
}

export interface UIRequiredDeviceCapabilities {
	accelerometer: boolean;
	'opengles-1': boolean;
}

export interface Provision {
	AppIDName: string;
	ApplicationIdentifierPrefix: string[];
	CreationDate: string;
	Entitlements: Entitlements;
	ExpirationDate: string;
	IsXcodeManaged: boolean;
	Name: string;
	Platform: string[];
	ProvisionsAllDevices: boolean;
	TeamIdentifier: string[];
	TeamName: string;
	TimeToLive: number;
	UUID: string;
	Version: number;
}

export interface Entitlements {
	'application-identifier': string;
	'com.apple.developer.default-data-protection': string;
	'com.apple.developer.networking.networkextension': string[];
	'com.apple.developer.pass-type-identifiers': string[];
	'com.apple.developer.team-identifier': string;
	'com.apple.developer.ubiquity-container-identifiers': string[];
	'com.apple.developer.ubiquity-kvstore-identifier': string;
	'get-task-allow': boolean;
	'inter-app-audio': boolean;
	'keychain-access-groups': string[];
}
