export interface HTMLInfo {
	data: Data;
}

export interface Data {
	attributes: DataAttributes;
}

export interface DataAttributes {
	html_info: HTMLInfoClass;
}

export interface HTMLInfoClass {
	hrefs: string[];
	meta: Meta[];
	scripts: Script[];
	title: string;
	trackers: HTMLInfoTracker[];
}

export interface Meta {
	content: string[];
	name: string;
}

export interface Script {
	attributes: ScriptAttributes;
	sha256?: string;
}

export interface ScriptAttributes {
	src?: string;
	type?: string;
}

export interface HTMLInfoTracker {
	name: string;
	trackers: TrackerTracker[];
}

export interface TrackerTracker {
	tracker_id: string;
	url: string;
}
