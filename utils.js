import queryString from "query-string";
import debugClient from 'debug'
const debug = debugClient('bacon-ipsum-cli-utils');

export const buildQueryString = (argv) => {
    // Build the API URL with the specified options
    let queryParams = {
      type: argv.type, 
      paras: argv.paras, 
      sentences: argv.sentences,
      "start-with-lorem" : argv['start-with-lorem'] ? 1 : undefined
    }
    const qs = queryString.stringify(queryParams);
    debug(qs)
    return qs
  }