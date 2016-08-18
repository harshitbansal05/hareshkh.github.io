var scrollactive = false;
function f () {
	if (!scrollactive) {
		scrollactive = true;
	}
	if (scrollactive) {
		scrollactive = false;
		var x = document.getElementsByTagName("BODY")[0];
		var i = 700, j=700, k=1.0;
		var l = setInterval(function(){
			x.scrollTop = j-i;
			i-=k;
			k+=0.07;
			if (i<=0) {
				clearInterval(l);
			}
		},1);
	}
};