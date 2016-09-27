var Radio = require('./radio.js');

var station = {
	freq: '80.19', 
	name: 'Rock & Roll Radio',
};

var radio = new Radio(station);

radio.on('open', function(station){
	console.log("opened: ");
})