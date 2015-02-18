var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
    var jSonObj = [];
    var toArray = data.toString().split('\n');
    var keys = toArray[0].split(','); 
    (function compiler(){
        for(var i = 1; i <= toArray.length -1; i++){
            var item = {};
            var objects = toArray[i].split(',');
            for(var j = 0; j <= keys.length -1; j++){
                item[keys[j]] = objects[j];
            }
            jSonObj.push(item);
        }    
    })(); 
    fs.writeFileSync(process.argv[3], JSON.stringify(jSonObj));
});