export interface ProcessesTree {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	processes_tree: ProcessesTreeElement[];
}

export interface ProcessesTreeElement {
	children: Child[];
	name: string;
	process_id: string;
}

export interface Child {
	name: string;
	process_id: string;
}
