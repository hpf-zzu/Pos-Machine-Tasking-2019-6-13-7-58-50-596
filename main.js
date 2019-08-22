const db = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
]
function countProducts(codes){
    var map = new Map();
    for(let index = 0; index < codes.length; index ++){
        var code = codes[index];
        
        if(!map.has(code)){
            var item = {code:code, count:1};
            map.set(code,item);
        }else{
            var item = map.get(code);
            item.count++;
            map.set(code,item);
    
        }

    }
    var re = [];
    map.forEach(function(itema){
        re.push({
            code:itema.code,
        count:itema.count

        })
    
    
        //re.push(itema);
    });
    return re;
}
function fetchProduct(code){
    var re = [];
    for(let index = 0; index < db.length; index ++){
        if(db[index].id == code){
            re.push({price:db[index].price,
                    name:db[index].name});
        }
    }
    return re;
}
function generatedReceiptItem(codes){
    var countCodes = countProducts(codes);
    var re = [];
    countCodes.forEach(function(item){
        
        var product = fetchProduct(item.code);
        re.push({
                "name":product[0].name,
                "price":product[0].price,
                "count":item.count

            });
    });
    console.log("re",re);
    return re;
}  
function countTotalPrice(Input){
    var sum = 0;
    Input.forEach(function(item){
        sum += item.price * item.count;

    });
    return sum; 
}
function assemble(assembleInput,sum){
    var str1 = "Receipt" + "\n";
    var str2 = "-----------------------\n"
    assembleInput.forEach(function(item){
        str2 += item.name + "\t" 
        + item.price + "\t" + item.count + "\n";
    })
    strout = str1 + str2 + "-------------------\n" + 
    "Price:" + sum;
    return strout;

}




module.exports = {countTotalPrice,countProducts,fetchProduct,assemble,generatedReceiptItem};

