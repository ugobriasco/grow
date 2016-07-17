app.service('ArrCalc',[function(){

	var balanceSheet = {
		currency: '€',
		arr: 100,
		arc: 30,
		churn: 1,
		acv_cost:0,
		gei: 1
	};


	//set currency
	var setCurrency 			= function(a){balanceSheet.currency = a;}
	//set arr
	var setRecurringRevenue 	= function(a){balanceSheet.arr = a;}
	//set arc
	var setRecurringCosts 		= function(a){balanceSheet.arc = a;}
	//set churn
	var setChurn 				= function(a){balanceSheet.churn = a;}
	//set ACVcost
	var setACVcost 				= function(a){balanceSheet.acv_cost = a;}
	//set GEI
	var setGEI 					= function(a){balanceSheet.gei = a;}


	//calc net RR
	var calcRR 					= function(arr, churn){
									var rr = arr - churn; 
									console.log("recurring revenue =" + rr);
									return rr;
								}
	//calc RPM
	var calcRPM 				= function(rr,rc){var rpm = rr-rc; return rpm}
	//calc acv
	var calcACV 				= function(acv_cost, gei){ var acv = acv_cost*gei; return acv;}
	//calc net income
	var calcIncome 				= function(rpm, acv_cost){ var income = rpm - acv_cost; return income;}
	//projection of annual recurring revenue
	var calcARR_n 				= function(arr, churn,acv){var arr_n = arr - churn +acv; return arr_n;}

	//calc all


	//get balanceSheet
	var getBalanceSheet = function(){

		balanceSheet.rr = calcRR(balanceSheet.arr, balanceSheet.churn);
		balanceSheet.rpm = calcRPM(balanceSheet.rr, balanceSheet.arc);
		balanceSheet.acv = calcACV(balanceSheet.acv_cost,balanceSheet.gei);
		balanceSheet.income = calcIncome(balanceSheet.rpm, balanceSheet.acv_cost);
		balanceSheet.arrn = calcARR_n(balanceSheet.arr, balanceSheet.churn, balanceSheet.acv);

		console.log(balanceSheet);
		return balanceSheet;
	}


	return{
		setCurrency: 			setCurrency,
		setRecurringRevenue: 	setRecurringRevenue,
		setRecurringCosts: 		setRecurringCosts,
		setChurn: 				setChurn,
		setACVcost: 			setACVcost,
		setGEI: 				setGEI,
		calcRPM: 				calcRPM,
		calcACV: 				calcACV,
		calcIncome: 			calcIncome,
		calcARR_n: 				calcARR_n,
		getBalanceSheet: 		getBalanceSheet


	}

	





}]);