export interface HTTPConversations {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	http_conversations: HTTPConversation[];
}

export interface HTTPConversation {
	request_headers: RequestHeaders;
	request_method: string;
	response_body_filetype: string;
	response_headers: ResponseHeaders;
	response_status_code: number;
	url: string;
}

export interface RequestHeaders {
	Accept: string;
	'User-Agent': string;
}

export interface ResponseHeaders {
	'Cache-Control': string;
	Connection: string;
	'Content-Type': string;
	Date: string;
	Server: string;
	'Status-Line': string;
	'Transfer-Encoding': string;
	Vary: string;
	'X-Powered-By': string;
}
