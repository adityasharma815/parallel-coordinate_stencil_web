var serviceFullList = serviceLists2serviceFullList(serviceLists);
var serviceLists = [{ "text": "Temperature", "id": 0, "enable": true, "sub": [{ "text": "CPU1 Temp", "id": 0, "enable": true, "idroot": 0, "angle": 5.834386356666759, "range": [3, 98] }, { "text": "CPU2 Temp", "id": 1, "enable": true, "idroot": 0, "angle": 0, "range": [3, 98] }, { "text": "Inlet Temp", "id": 2, "enable": true, "idroot": 0, "angle": 0.4487989505128276, "range": [3, 98] }] }, { "text": "Job_load", "id": 1, "enable": true, "sub": [{ "text": "Job load", "id": 0, "enable": true, "idroot": 1, "angle": 1.2566370614359172, "range": [0, 10] }] }, { "text": "Memory_usage", "id": 2, "enable": true, "sub": [{ "text": "Memory usage", "id": 0, "enable": true, "idroot": 2, "angle": 1.8849555921538759, "range": [0, 99] }] }, { "text": "Fans_speed", "id": 3, "enable": true, "sub": [{ "text": "Fan1 speed", "id": 0, "enable": true, "idroot": 3, "angle": 2.4751942119192307, "range": [1050, 17850] }, { "text": "Fan2 speed", "id": 1, "enable": true, "idroot": 3, "angle": 2.9239931624320583, "range": [1050, 17850] }, { "text": "Fan3 speed", "id": 2, "enable": true, "idroot": 3, "angle": 3.372792112944886, "range": [1050, 17850] }, { "text": "Fan4 speed", "id": 3, "enable": true, "idroot": 3, "angle": 3.8215910634577135, "range": [1050, 17850] }] }, { "text": "Power_consum", "id": 4, "enable": true, "sub": [{ "text": "Power consumption", "id": 0, "enable": true, "idroot": 4, "angle": 4.71238898038469, "range": [0, 200] }] }];

function serviceLists2serviceFullList(serviceLists) {
    let temp = [];
    serviceLists.forEach(s => s.sub.forEach(sub => {
        sub.idroot = s.id;
        sub.enable = s.enable && (sub.enable === undefined ? true : sub.enable);
        temp.push(sub);
    }));
    return temp;
}