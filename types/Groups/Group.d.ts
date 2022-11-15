export interface Group {
	data: Data;
}

export interface Data {
	attributes: Attributes;
	id: string;
	links: Links;
	type: string;
}

export interface Attributes {
	auto_add_users: string[];
	country: string;
	country_iso: string;
	domain_name: string;
	organization: string;
	preferences: Preferences;
	privileges: Privileges;
	quotas: Quotas;
}

export interface Preferences {}

export interface Privileges {
	admin: Admin;
	allinfo: Admin;
	'big-files': BigFiles;
	cases: Admin;
	click_to_accept: Admin;
}

export interface Admin {
	granted: boolean;
}

export interface BigFiles {
	expiration_date: number;
	granted: boolean;
}

export interface Quotas {
	api_requests_daily: APIRequestsDaily;
	api_requests_hourly: APIRequestsDaily;
	api_requests_monthly: APIRequestsDaily;
	cases_creation_monthly: APIRequestsDaily;
}

export interface APIRequestsDaily {
	allowed: number;
	used: number;
}

export interface Links {
	self: string;
}
