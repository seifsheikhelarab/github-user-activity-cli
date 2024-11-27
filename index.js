#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const arg = process.argv[2];

const https = require('https');

function fetchGitHubActivity(username) {
    const options = {
        hostname: 'api.github.com',
        path: `/users/${username}/events`,
        method: 'GET',
        headers: {
            'User-Agent': 'Node.js',
            'Accept': 'application/vnd.github.v3+json'
        }
    };

    const req = https.request(options, res => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            if (res.statusCode === 200) {
                const events = JSON.parse(data);
                // Parse and display the fetched activity
                events.forEach(event => {
                    switch (event.type) {
                        case 'PushEvent':
                            console.log(`Pushed ${event.payload.commits.length} commits to ${event.repo.name}`);
                            break;
                        case 'IssuesEvent':
                            console.log(`${event.payload.action.charAt(0).toUpperCase() + event.payload.action.slice(1)} an issue in ${event.repo.name}`);
                            break;
                        case 'WatchEvent':
                            console.log(`Starred ${event.repo.name}`);
                            break;
                        case 'ForkEvent':
                            console.log(`Forked ${event.repo.name}`);
                            break;
                        case 'PullRequestEvent':
                            console.log(`${event.payload.action.charAt(0).toUpperCase() + event.payload.action.slice(1)} a pull request in ${event.repo.name}`);
                            break;
                        case 'CreateEvent':
                            console.log(`Created a ${event.payload.ref_type} (${event.payload.ref || 'repository'}) in ${event.repo.name}`);  
                      default:
                            console.log(`${event.type} in ${event.repo.name}`);
                    }
                });
            } else {
                console.error(`Error: ${res.statusCode} - ${res.statusMessage}`);
            }
        });
    });
    req.on('error', error => {
        console.error('Error fetching activity:', error.message);
    });

    req.end();
}
fetchGitHubActivity(arg);
