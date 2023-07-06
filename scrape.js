import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

// URL of the website you want to scrape
const url = 'https://www.iana.org/domains/reserved';

// Make a HTTP GET request to fetch the HTML content
fetch(url)
    .then(response => response.text())
    .then(html => {
        // Parse the HTML content
        const root = parse(html);

        // Select elements using CSS selectors and extract data
        const title = root.querySelector('title').text; 
        const headings = root.querySelectorAll('h1, h2, h3').map(h => h.text);

        // Print the extracted data
        console.log('Title:', title);
        console.log('Headings:', headings);
    })
    .catch(error => {
        console.error('Error:', error);
    });