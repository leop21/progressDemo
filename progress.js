var progress = document.getElementById("progress");
var progressLabel = document.querySelector("#progress-label");
var progressSymbol = document.querySelector("#progress-symbol");
var fullProgress = 125;
var finalProgress = 56;
var currentProgress = 0;
var interval = setInterval(function() {
	if(currentProgress <= finalProgress) {
		currentProgress ++;
		progress.style.width = currentProgress*100/fullProgress + "%";
		progressSymbol.textContent = "^";
		progressLabel.textContent = "$" + currentProgress;
		progressSymbol.style.marginLeft = 85 + (currentProgress*100/fullProgress)*2 + "px";
		progressLabel.style.marginLeft = 85 + (currentProgress*100/fullProgress)*2 - 10 + "px";
		if(currentProgress == finalProgress)
			clearInterval(interval);
	}
}, 50);