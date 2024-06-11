const path = require('path');

module.exports = {
  "mode": "development",
"devtool": "inline-source-map",
"output": {
   "filename": "[name].pack.js",
   "path": path.resolve(__dirname, 'public'),
},
  "entry": {
    "index": "./index"
  },
  "resolve": {
    "extensions": [
      ".ts",
      ".js",
      ".json"
    ]
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "ts-loader"
        },
        "exclude": /node_modules/,
        "test": /\.ts$/
      }
    ]
  }
};