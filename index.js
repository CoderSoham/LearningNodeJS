const a={
    avg:(a,b) =>{
        console.log((a+b)/2);
    },
    per:(a,b) =>{
        console.log((a/b)*100 + "%");
    }
};

module.exports = a;