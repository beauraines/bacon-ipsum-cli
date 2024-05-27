import copyPaste  from "copy-paste";
import debugClient from 'debug'
import fetch from "node-fetch";
import queryString from "query-string";

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

  export const getBacon = (apiUrlWithParams,noClip) => {
    fetch(apiUrlWithParams)
      .then((response) => response.json())
      .then((data) => {
        if (noClip) { // noClip is alias for no-clip
          // Display the fetched text in the console
          console.log(data.join('\n'));
        } else {
          // Copy the text to the clipboard
          copyPaste.copy(data.join('\n'), () => {
            console.log('Bacon ipsum text copied to the clipboard!');
          });
        }

      })
      .catch((error) => console.error('Error fetching data:', error));
  }