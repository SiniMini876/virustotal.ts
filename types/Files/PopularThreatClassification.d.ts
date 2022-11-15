export interface PopularThreatClassification {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	popular_threat_classification: PopularThreatClassificationClass;
}

export interface PopularThreatClassificationClass {
	suggested_threat_label: string;
	popular_threat_category: PopularThreat[];
	popular_threat_name: PopularThreat[];
}

export interface PopularThreat {
	count: number;
	value: string;
}
