const download = require('image-downloader')
const sharp = require('sharp');
const fs = require('fs');
const resizeImg = require('resize-img');


image = (nun, prefix, hex_color) =>{
    const options = {
        url: `http://chart.apis.google.com/chart?chst=d_map_spin&chld=1|0|${hex_color}|12|_|${nun}`,
        dest: `./marker/point_${prefix}_${nun}.png`
    }
    download.image(options)
        .then(({ filename, image }) => {
            resizeImg(fs.readFileSync(filename), {width: 27, height: 42}).then(buf => {
                fs.writeFileSync(`${filename}`, buf);
            });    
        }).catch((err) => {
            throw err
        })
  
}
run = (total = 1000, prefix = 'blue', hex_color = '1874CD') => {
    for(var i = 1; i < total; i++){
        image(i, prefix, hex_color)
        if(i === (total -1)){
            console.log("END");
        }
    }
    
}


run(total = 1000, prefix = 'orange', hex_color = 'FF8C00');


