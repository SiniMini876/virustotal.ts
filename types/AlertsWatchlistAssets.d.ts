export interface AlertsWatchlistAssets {
	meta: Meta;
	data: Datum[];
	links: AlertsWatchlistAssetsLinks;
}

export interface Datum {
	attributes: Attributes;
	type: string;
	id: string;
	links: DatumLinks;
}

export interface Attributes {
	last_modification_date: number;
	asset_type: string;
	value: string;
	creation_date: number;
}

export interface DatumLinks {
	self: string;
}

export interface AlertsWatchlistAssetsLinks {
	self: string;
	next: string;
}

export interface Meta {
	cursor: string;
}
