const dataTesting = ['11','12','cii','001','2','1998','7','89','iia','fii'];

const testingString = dataTesting.filter((value, index) => {
    if(!parseInt(value)){
        return value;
    }
});

var result = {};
var all = [];

testingString.forEach((value) => {
    var arrayOfChars = Array.from(value);
    var lengthArrChars = arrayOfChars.length;

    var arrangeChars = [];
    arrayOfChars.forEach((char, index) => {
        arrangeChars.push(char);
        all.push(char);

        var idxMainLoop = parseInt(index);
        for (let i in arrayOfChars) {
            idxMainLoop++;

            var str = arrangeChars[arrangeChars.length-1]+arrayOfChars[idxMainLoop]
            if(idxMainLoop < lengthArrChars){
                arrangeChars.push(str);
                all.push(str);
            }
        };
        arrangeChars = [...new Set(arrangeChars)];
    })
    result[value] = arrangeChars;
})
all = [...new Set(all)];
result['S'] = all;

console.log(result)