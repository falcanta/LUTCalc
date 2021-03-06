/* splash.js
* Changes Javascript warning into a splash screen in the LUTCalc Web App.
* 7th October 2014
*
* LUTCalc generates 1D and 3D Lookup Tables (LUTs) for video cameras that shoot log gammas, 
* principally the Sony CineAlta line.
*
* By Ben Turley, http://turley.tv
* First License: GPLv2
* Github: https://github.com/cameramanben/LUTCalc
*/
lutInputs.addInput('version','v2.1');
lutInputs.addInput('date','September 2015');
var splash = document.getElementById('javascriptwarning');
splash.removeChild(splash.firstChild);
splash.className = 'splash';
splashTxt();

function splashTxt() {
	var splashText = document.createElement('div');
	var splashTitle =  document.createElement('h1');
	splashTitle.innerHTML = 'LUTCalc ' + lutInputs.version;
	splashText.appendChild(splashTitle);
	splashText.appendChild(document.createElement('br'));
	var splashCredit =  document.createElement('h5');
	splashCredit.innerHTML = 'Ben Turley ' + lutInputs.date;
	splashText.appendChild(splashCredit);
	splash.appendChild(splashText);
}