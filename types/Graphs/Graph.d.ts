export interface Graph {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	comments_count: number;
	creation_date: number;
	graph_data: GraphData;
	last_modified_date: number;
	links: Link[];
	nodes: Node[];
	private: boolean;
	views_count: number;
}

export interface GraphData {
	description: string;
	version: string;
}

export interface Link {
	connection_type: string;
	source: string;
	target: string;
}

export interface Node {
	entity_attributes: EntityAttributes;
	entity_id: string;
	index: number;
	text: string;
	type: string;
	x: number;
	y: number;
	fx?: number;
	fy?: number;
}

export interface EntityAttributes {
	has_detections?: boolean;
	country?: string;
	type_tag?: string;
	intelligence_query?: string;
	relationship_type?: string;
	commonalities?: Commonality[];
	ruleset_id?: string;
}

export interface Commonality {
	commonality: string;
	value: string;
}

export interface Links {
	self: string;
}
