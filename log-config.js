var log4js = require('log4js');

//配置log4js
log4js.configure({
  appenders: { 
	out: { 
		type: 'file', 
		filename: 'node-sample.log',
		layout: {
		  type: 'pattern',
		  pattern: '[%d{yyyy-MM-dd hh:mm:ss}][%p][%c][%X{user}]%m%n'
		}
	}
  },
  categories: { 
	  default: { appenders: ['out'], level: 'info' } 
  }
});

//指定log4js的category
var logger = log4js.getLogger()

module.exports=logger
