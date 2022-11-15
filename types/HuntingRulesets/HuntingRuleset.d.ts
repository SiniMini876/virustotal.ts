export interface HuntingRuleset {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	creation_date: number;
	enabled: boolean;
	limit: number;
	modification_date: number;
	name: string;
	notification_emails: any[];
	number_of_rules: number;
	rule_names: string[];
	rules: string;
}

export interface Links {
	self: string;
}
