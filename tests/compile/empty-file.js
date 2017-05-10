module.exports = {
  label: 'Turn a folder containing an empty file into a template',
  folder: {'index.html': ''},
  compare: 'templates',
  expected: {
    "index.html": {
      "body": "",
      "locals": {},
      "partials": {},
      "retrieve": {}
    }
  }
};