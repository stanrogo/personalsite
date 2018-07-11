/**
 * @file index.js
 * @description Single point of access for user coming in to server
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');

// Obtain the required files for rendering
const serverBundlePath = path.join(process.cwd(), 'public', 'dist', 'vue-ssr-server-bundle.json');
const clientBundlePath = path.join(process.cwd(), 'public', 'dist', 'vue-ssr-client-manifest.json');
const templatePath = path.join(process.cwd(), 'public', 'template.html');

const template = fs.readFileSync(templatePath, 'utf-8');
const serverBundle = require(serverBundlePath);
const clientManifest = require(clientBundlePath);

// Create the renderer
const renderer = createBundleRenderer(serverBundle, {
	template,
	clientManifest,
});

// Create server and set up the public directories used for fetching assets
const server = express();
server.use(express.static('public'));
server.use(express.static('public/dist'));

// Listen to all paths
server.get('*', (req, res) => {
	// Store the request URL in the context for vue-router
	const context = { url: req.url };

	// Render the HTML to the user
	renderer.renderToString(context, (err, html) => {
		if (err) {
			if (err.code === 404) {
				res.status(404).end('Page not found');
			} else {
				res.status(500).end('Internal Server Error');
			}
		} else{
			res.end(html)
		}
	})
});

// Start the server
server.listen(8080);
