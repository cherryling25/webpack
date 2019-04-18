//document.write(require('./str.js'));

//var json=require('./str.js');
//document.write(json.str);
require("../css/style.css"); 
var fnstr=require('./str.js');

var $=require("jquery");




document.write(fnstr('<div>you like me</div>'));
$("div").html("第二次修改");
