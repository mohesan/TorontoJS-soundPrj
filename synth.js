import AudioKeys from "audiokeys";
import Tone from "tone";

//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

var keyboard = new AudioKeys();
let ctx = new AudioContext();

keyboard.down(function(note) {
	//play a middle 'C' for the duration of an 8th note
	synth.triggerAttackRelease('C4', '8n');

	console.log("down",note)
});

keyboard.up(function(note) {
});
