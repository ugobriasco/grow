app.service('ArrCalc',[function(){

	//preset
	var balanceSheet = {
		currency: '€',
		arr: 100,
		arc: 30,
		churn: 1,
		acv_cost:0,
		gei: 0.8
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

	//calc %
	var calcIndex = function(){
		
		balanceSheet.churnIndex = balanceSheet.churn / balanceSheet.arr;
		balanceSheet.rpmIndex = balanceSheet.rpm / balanceSheet.arr;
		balanceSheet.arrnIndex = (balanceSheet.arrn - balanceSheet.arr) / balanceSheet.arr;
		balanceSheet.incomeIndex = balanceSheet.income /balanceSheet.rpm;
		balanceSheet.acv_costIndex = balanceSheet.acv_cost/balanceSheet.rpm
		
		return balanceSheet;
	}


	//get balanceSheet
	var getBalanceSheet = function(){

		balanceSheet.rr = calcRR(balanceSheet.arr, balanceSheet.churn);
		balanceSheet.rpm = calcRPM(balanceSheet.rr, balanceSheet.arc);
		balanceSheet.acv = calcACV(balanceSheet.acv_cost,balanceSheet.gei);
		balanceSheet.income = calcIncome(balanceSheet.rpm, balanceSheet.acv_cost);
		balanceSheet.arrn = calcARR_n(balanceSheet.arr, balanceSheet.churn, balanceSheet.acv);

		balanceSheet = calcIndex();

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
		getBalanceSheet: 		getBalanceSheet


	}

}]);


