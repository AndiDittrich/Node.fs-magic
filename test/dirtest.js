const _fs = require('../fs-magic');

(async function(){
    //const [files, dirs] = await _fs.scandir('../');

    //console.log("Directories", dirs);
    //console.log("Files", files);


    try{
        // delete subdir
        await _fs.rmrf('./my/');
    }catch (e){
        console.error(e.message);
    }

})();