import queryString from "query-string";

export const buildQueryString = (argv,apiUrl) => {
    // Build the API URL with the specified options
    let queryParams = {type: argv.type, paras: argv.paras}
    const apiUrlWithParams = `${apiUrl}?${queryString.stringify(queryParams)}`;
    return apiUrlWithParams
  }