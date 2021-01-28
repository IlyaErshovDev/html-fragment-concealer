import * as React from "react";

let values = ['\x61', '\x6F', '\x63', '\x4D'];

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
  }
function makeSubstitution(text) {
	let subn = text.replace(/[а]/g, values[0]);
	subn = subn.replace(/[о]/g, values[1]);
	subn = subn.replace(/[с]/g, values[2]);
	subn = subn.replace(/[М]/g, values[3]);

	return subn;
}
 
function textDisguise(text) {
	let strLength = text.length;
	let interval = randomInteger(1, strLength-1);
	// заменяем русские символы на похожие латинские
	let substitution = makeSubstitution(text);
	// экранируем символом U+FEFF ZERO WIDTH NO-BREAK SPACE в рандомной позиции
	let result = substitution.split(substitution[interval]).join(`\uFEFF${substitution[interval]}\uFEFF`);
	return result;
}

export default ({children}) => {
	return textDisguise(children);
};
