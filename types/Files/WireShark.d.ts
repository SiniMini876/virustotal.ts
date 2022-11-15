export interface WireShark {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	wireshark: Wireshark;
}

export interface Wireshark {
	dns: Array<Array<string[] | string>>;
	pcap: Pcap;
}

export interface Pcap {
	'Capture duration': string;
	'Data size': string;
	'End time': string;
	'File encapsulation': string;
	'File type': string;
	'Number of packets': string;
	'Start time': string;
}
