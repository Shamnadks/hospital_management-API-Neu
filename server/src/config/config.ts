export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: '-RE6dQ77oVj9O1J_g180K',
    client_secret:
      'u37g7aJ2advzG0gWloXBjdxn0RvSJ5iJP0CeayROxwqtVcy5FMZi8H_UIm52u2hs8_j0nD9XFpK0hULKrEJw5Q',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
