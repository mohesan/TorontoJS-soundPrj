import AudioKeys from "audiokeys";

var keyboard = new AudioKeys();
let ctx = new AudioContext();

let oscMap = {
};

keyboard.down(function(note) {
	let osc = ctx.createOscillator();
	osc.frequency.value = note.frequency;
	osc.connect(ctx.destination);
	osc.start();
	oscMap[note.frequency]=osc;
	console.log("down",note)
});

keyboard.up(function(note) {
	let osc = oscMap[note.frequency];
	osc.stop();
});
