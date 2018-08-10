const path = require('path');

module.exports = {
  entry: {
    main : ['./app/jhora.js'],
    cust : ['./app/jhora.js'],
    tran : ['./app/jhora.js'],
    pass : ['./app/jhora.js']
    
  }
  mode:"development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist3')
  }
};
