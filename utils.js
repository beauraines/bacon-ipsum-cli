import queryString from "query-string";

export const buildQueryString = (argv) => {
    // Build the API URL with the specified options
    let queryParams = {
      type: argv.type, 
      paras: argv.paras, 
      sentences: argv.sentences
    }
    const qs = queryString.stringify(queryParams);
    return qs
  }