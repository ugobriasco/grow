app.service('MrrCalc',[function(){

	var balanceSheet = {
		currency: '€',
		mrr: 100,
		mrc: 30,
		churn: 1,
		cac:0,
		gei: 0.8,
		mcv: 0
	};

	var kpi = {
		gei: {success: 0, warning: 0}, rpm: {success: 0, warning: 0}, churn: {success: 0, warning: 0}
	};

	var setCurrency 			= function(a){balanceSheet.currency = a;}

	var setMRR					= function(m){balanceSheet.mrr = m;} 	//monthly recurring costs
	var setMRC					= function(m){balanceSheet.mrc = m;} 	//monthly recurring costs
	var setMonthlyChurn			= function(m){balanceSheet.churn = m;}
	var setMonthlyCAC 			= function(m){balanceSheet.cac = m;} 	// CAC monthly
	var setGEI 					= function(m){balanceSheet.gei = m;}	//Growth Efficency index 

	var calcNetMRR 				= function(mrr, churn){ var net_mrr = mrr - churn; return net_mrr;}
	var calcRPM 				= function(net_mrr,rc){var rpm = net_mrr-rc; return rpm} //recurring profit margin
	var calcMCV 				= function(cac, gei){ 

									var mcv = 0;
									if(gei > 0){
										var mcv = cac/gei;
									}
									return mcv;
									} //monthly contractual value

	var calcIncome 				= function(rpm, cac){ var income = rpm - cac; return income;}
	var calcMRRnext 			= function(mrr, churn,mcv){var mrr_next = mrr - churn +mcv; return mrr_next;}


	var calcIndex = function(){
		
		balanceSheet.churnIndex 	= balanceSheet.churn / balanceSheet.mrr;
		balanceSheet.rpmIndex 		= balanceSheet.rpm / balanceSheet.mrr;
		balanceSheet.mrrIndex 		= (balanceSheet.mrr_next - balanceSheet.mrr) / balanceSheet.mrr;
		balanceSheet.incomeIndex 	= balanceSheet.income /balanceSheet.rpm;
		balanceSheet.cacIndex 		= balanceSheet.cac/balanceSheet.rpm;
		
		return balanceSheet;
	}

	
	//create a montly projection on a given span
	var doProjection = function(count){

		var array = [];



		var tmp = balanceSheet.mrr;
		//array.push(tmp);

		for(i = 0; i<count; i++){

			var a = calcMRRnext(tmp, balanceSheet.churn, balanceSheet.mcv);
			array.push(a);
			tmp = a;
		}

		balanceSheet.projection = array;

	}

	var calcKPI_GEI = function(){
		if(balanceSheet.rpm > 0 && balanceSheet.churn > 0){
			kpi.gei.warning = balanceSheet.rpm / balanceSheet.churn;
			kpi.gei.success = 1;
		} else {
			kpi.gei.warning = 2;
			kpi.gei.success = 1;
		}

		return kpi;
	};

	var calcKPI_RPM = function(){
		if(balanceSheet.churn > 0 && balanceSheet.gei > 0){
			kpi.rpm.warning =  balanceSheet.churnIndex * balanceSheet.gei;
			kpi.rpm.success = 0.5;
		} else {
			kpi.rpm.warning = 0;
			kpi.rpm.success = 0.5 ;
		}

		return kpi;
		
	}

	var calcKPI_churn = function(){
		if( balanceSheet.rpm > 0 && balanceSheet.gei > 0){
			kpi.churn.warning = balanceSheet.rpmIndex / balanceSheet.gei;
			kpi.churn.success = 0.1;
		} else {
			kpi.churn.warning = 0.3;
			kpi.churn.success = 0.1;
		}

		return kpi;

	}

		//get balanceSheet
	var getBalanceSheet = function(){

		balanceSheet.net_mrr = calcNetMRR(balanceSheet.mrr, balanceSheet.churn);
		balanceSheet.rpm = calcRPM(balanceSheet.net_mrr, balanceSheet.mrc);
		balanceSheet.mcv = calcMCV(balanceSheet.cac,balanceSheet.gei);
		balanceSheet.income = calcIncome(balanceSheet.rpm, balanceSheet.cac);
		balanceSheet.mrr_next = calcMRRnext(balanceSheet.mrr, balanceSheet.churn, balanceSheet.mcv);
		balanceSheet = calcIndex();
		doProjection(12);


		
		
		return balanceSheet;
	}

	var getKPI = function(){
		calcKPI_GEI();
		calcKPI_RPM();
		calcKPI_churn();
		return kpi;
		
	};

	return{
		setCurrency: 			setCurrency,
		setMRR:                 setMRR,
		setMRC: 				setMRC,
		setMonthlyChurn: 		setMonthlyChurn,
		setMonthlyCAC: 			setMonthlyCAC,
		setGEI: 				setGEI,
		getBalanceSheet: 		getBalanceSheet,
		getKPI: 				getKPI,
	
		
	}




}]);

