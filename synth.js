import AudioKeys from "audiokeys";
import Tone from "tone";
import { scale } from "@tonaljs/scale";
import { sample } from "lodash";

let scaleType1 = 'c3 hirajoshi';
let scaleType2 = 'c4 hirajoshi';
let scaleType3 = 'c5 hirajoshi';

console.log(scale(scaleType1));

let { notes: n1 } = scale(scaleType1);
let { notes: n2 } = scale(scaleType2);
let { notes: n3 } = scale(scaleType3);
let notes = [...n1, ...n2, ...n3];

//create a synth and connect it to the master output (your speakers)
var synth = new Tone.PolySynth(6,Tone.Synth, {
	oscillator: {
		type: "sine"
	}
}).toMaster();

var loop = new Tone.Loop(function(time){
	let note = sample(notes);
	console.log(time,note);
	synth.triggerAttackRelease(note, '8n', time);
}, "8n").start(0);
Tone.Transport.start();

var keyboard = new AudioKeys();
let ctx = new AudioContext();

keyboard.down(function() {
	//play a middle 'C' for the duration of an 8th note
	let note = sample(notes);
	synth.triggerAttackRelease('C4', '8n');

	console.log("down",note)
});

keyboard.up(function(note) {
});
