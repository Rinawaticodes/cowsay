const userInfo = require('./informations');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi my name is ${userInfo.nom} and I'm student in ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));

// or cowsay.think()