/* The solution can be arrived at in two ways. The submitted answer = by named Function.
function saturdayFun(activity = "roller-skate") {
	return `This Saturday, I want to ${activity}!`
}
*/
const saturdayFun = function (activity = "roller-skate") {
	return `This Saturday, I want to ${activity}!`;
};

/* The solution can be arrived at in two ways. The submitted answer = by Function Expression.
	function mondayWork(work = "go to the office") {
	return `This Monday, I will ${work}.`
}
*/
const mondayWork = function (work = "go to the office") {
	return `This Monday, I will ${work}.`;
};

/* console.log(mondayWork());
*/

function wrapAdjective(symbol = "*") {
	const howeverYouWant = function (adjective = "special") {
		return `You are ${symbol}${adjective}${symbol}!`;
	};
	return howeverYouWant;
}

/*wrapAdjective();
 */
