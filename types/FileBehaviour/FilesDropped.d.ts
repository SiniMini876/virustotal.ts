export interface FilesDroppedDTs {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	files_dropped: FilesDropped[];
}

export interface FilesDropped {
	path: string;
	sha256: string;
}
