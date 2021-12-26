const  config = require('./dbconfig');
const  sql = require('mssql');

  async  function getWords() {
    try {
      console.log(config.config)
      let  pool = await  sql.connect(config.config);
      let  wordList = await sql.query`select * from wordList`
      return  wordList.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

 

  module.exports = {
   
    getWords: getWords
}
