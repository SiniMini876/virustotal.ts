export interface FilesCopied {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	files_copied: FilesCopiedElement[];
}

export interface FilesCopiedElement {
	destination: string;
	source: string;
}
