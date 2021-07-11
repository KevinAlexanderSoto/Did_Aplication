const fs = require('fs'); 
let inter = [];
const archivo = './data.json';
const saveData = (data)=>{
    const dbData = fs.readFileSync(archivo,{encoding: 'utf-8'});
    if (!dbData == '') {// trae la data ya existente 
        const dataObj = JSON.parse(dbData);
        inter = dataObj;
    }

    inter.push(data);
     
    fs.writeFileSync(archivo,JSON.stringify(inter));
}


const showData = ()=>{
    
    if (!fs.existsSync(archivo)) {
        return null
    } 
     const dbData = fs.readFileSync(archivo,{encoding: 'utf-8'});
    const dataObj = JSON.parse(dbData);
    return dataObj;
    
}

module.exports = {
    saveData,
    showData
}