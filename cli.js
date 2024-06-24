#!/usr/bin/env node

import yargs from "yargs";
import debugClient from 'debug'
import { buildQueryString, getBacon, processOutput } from './utils.js';

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
  .option('sentences',{
    alias: 's',
    describe: 'Number of sentences. This overrides paragraphs.',
    type: 'number'
  })
  .option('start-with-lorem',{
    alias: ['l','lorem'],
    describe: 'Starts the first paragraph with ‘Bacon ipsum dolor sit amet’',
    type: 'boolean'
  })
  .option('format',{
    alias: 'f',
    describe:'Output format. Defaults to `text`',
    default: 'text',
    choices: ['text','json','html']
  })
  .option('nc',{
    alias: 'nc',
    describe:'Only outputs to console, bypassing the clipboard.',
    type: 'boolean'
  })
  .completion()
  .help()
  .argv;

debug(argv)
const apiUrlWithParams = `${apiUrl}?${buildQueryString(argv)}`
debug(apiUrlWithParams)

// Fetch data from the Bacon Ipsum API
let noClip = argv.nc
let format = argv.format

let bacon = await getBacon(apiUrlWithParams,format)
debug(bacon)
let outputOptions = {
  noClip
}
debug(outputOptions)
await processOutput(bacon, outputOptions);
