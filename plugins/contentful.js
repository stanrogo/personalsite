import { createClient } from 'contentful';

const config = {
	space: process.env.CTF_SPACE_ID,
	accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
};

const client = createClient(config);

// Inject instead of export to allow async property access
export default function(_, inject) {
	inject('contentful', client);
}
