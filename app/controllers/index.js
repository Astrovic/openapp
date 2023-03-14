var w = Ti.UI.createWindow({
	backgroundColor: 'blue'
});
var closeWinBtn = Ti.UI.createButton({
	title: 'Close'
});
closeWinBtn.addEventListener('click', () => {
	w.close();
})
w.add(closeWinBtn);

function doClick(e) {	
	w.open();
}

$.index.open();

setTimeout(() => {
	var act = Titanium.Android.rootActivity;
	console.log("Titanium.Android.rootActivity;");
	console.log(Titanium.Android.rootActivity);
	act.addEventListener("newintent", (e) => {
		console.log("******* newintent");
		console.log(e.intent.data);
		console.log(e);
		if (e.intent.data) {
			alert(e.intent.data);
		}		
	})
}, 1000);