// jshint ignore: start
function getRealMarinBetween(el1, el2) {
	return el2.getBoundingClientRect().top - el1.getBoundingClientRect().bottom;
}


for (var i = 0; i < 6; i++) {
	var container = '#test' + (i + 1);

	var el1 = document.querySelector(container + ' > .first');
	var el2 = document.querySelector(container + ' > .second');

	var realDiff = getRealMarinBetween(el1, el2);
	var calcDiff = collapsedMargin(el1, el2);
	console.log(el1, el2)
	console.log('Real difference:', realDiff);
	console.log('Calculated difference:', calcDiff);

	if (realDiff === calcDiff) {
		console.log('Test Passed');
	} else {
		console.log('Test Failed');
	}
	console.log('\n');
}
