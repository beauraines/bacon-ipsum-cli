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

  /**
   *  Returns an array of paragraphs from the Bacon Ipsum API
   * @param {String} apiUrlWithParams The bacon ipsum endpoint including any parameters
   * @returns {Array}
   */
  export const getBacon = async (apiUrlWithParams) => {
    try {
      let response = await fetch(apiUrlWithParams)
      if (response.ok) {
        return await response.json()
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  export const processOutput = (data, options) => {
  if (options.noClip) { // noClip is alias for no-clip
    // Display the fetched text in the console
    console.log(data.join('\n'));
  } else {
    // Copy the text to the clipboard
    copyPaste.copy(data.join('\n'), () => {
      console.log('Bacon ipsum text copied to the clipboard!');
    });
  }
}
