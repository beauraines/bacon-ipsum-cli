#!/usr/bin/env node

import fetch from "node-fetch";
import yargs from "yargs";
import copyPaste  from "copy-paste";
import queryString from "query-string";
import debugClient from 'debug'

const debug = debugClient('bacon-ipsum-cli');
const apiUrl = 'https://baconipsum.com/api/';

// Define command-line options using yargs
const argv = yargs(process.argv.slice(2))
  .scriptName('bacon')
  .option('type', {
    alias: 't',
    describe: 'Type of meat',
    default: 'all-meat',
    choices: ['all-meat', 'meat-and-filler'],
  })
  .option('paras', {
    alias: 'p',
    describe: 'Number of paragraphs',
    default: 1,
    type: 'number',
  })
  // .option('sentences',{
  //   alias: 's',
  //   describe: 'Number of sentences. This overrides paragraphs.',
  //   type: 'number'
  // })
  // .option('start-with-lorem',{
  //   alias: ['l','lorem'],
  //   describe: 'Starts the first paragraph with ‘Bacon ipsum dolor sit amet’',
  //   type: 'boolean'
  // })
  // .option('format',{
  //   alias: 'f',
  //   describe:'Output format. Defaults to `text`',
  //   default: 'text',
  //   choices: ['text','json','html']
  // })
  // .option('no-clip',{
  //   alias: 'nc',
  //   describe:'Only outputs to console, bypassing the clipboard.',
  //   type: 'boolean'
  // })
  .help()
  .argv;
  
// Build the API URL with the specified options
let queryParams = {type: argv.type, paras: argv.paras}
const apiUrlWithParams = `${apiUrl}?${queryString.stringify(queryParams)}`;
debug(apiUrlWithParams)

// Fetch data from the Bacon Ipsum API
fetch(apiUrlWithParams)
  .then((response) => response.json())
  .then((data) => {
    // Display the fetched text in the console
    console.log(data.join('\n'));

    // Copy the text to the clipboard
    copyPaste.copy(data.join('\n'), () => {
      console.log('Text copied to clipboard!');
    });
  })
  .catch((error) => console.error('Error fetching data:', error));
