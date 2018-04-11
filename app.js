var qs=require('qs')
var fs=require('fs')
var logger=require('./log-config')

//fs同步读取文件内容
var json_str=fs.readFileSync('package.json',
		{
			encoding:'utf8',
			flag:'r',
		}
)

//使用qs包
var qs_str=qs.stringify(JSON.parse(json_str))

logger.info(qs_str);
