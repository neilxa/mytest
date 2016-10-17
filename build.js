#!/usr/bin/env node
var cp = require('child_process'),
	fs = require('fs'),
	path = require('path');

	build();

// Build it
function build() {
	cp.spawn(
		process.platform === 'win32' ? 'node-gyp.cmd' : 'node-gyp',
		['rebuild'],
{stdio: [process.stdin, process.stdout, process.stderr]})
	.on('exit', function(err) {
		if (err) {
			if (err === 127) {
				console.error(
					'node-gyp not found! Please upgrade your install of npm! You need at least 1.1.5.'
				);
			} else {
				console.error('Build failed');
			}
			return process.exit(err);
		}

	})
        .on('error', function(err) {

            console.error(
            'node-gyp not found! Please ensure node-gyp is in your PATH--\n'+
            'Try running: `sudo npm install -g node-gyp`'
        );
        console.log(err.message);
        process.exit(1);


        });
}

