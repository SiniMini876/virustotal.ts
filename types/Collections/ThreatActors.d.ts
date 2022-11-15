import {ThreatActor} from '../ThreatActors/ThreatActor';

export interface ThreatActorCollections {
	data: ThreatActor[];
	links: Links;
	meta: Meta;
}

export interface Links {
	next?: string;
	self: string;
}

export interface Meta {
	count: number;
	cursor?: string;
}
