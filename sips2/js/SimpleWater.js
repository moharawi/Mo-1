/**
 * The <code>cces</code> object is a top-level package for storing classes and methods for the CCES.
 * 
 * @author Paul T. Grogan, ptgrogan@mit.edu 
 */
$cces = new Object();

/**
 * The <code>util</code> object is a package for storing utility classes and methods.
 * 
 * @author Paul T. Grogan, ptgrogan@mit.edu 
 */
$cces.util = new function() {
	/**
	 * The <code>DataTable</code> is a utility object to look up and retrieve values. The
	 * implementation uses linear interpolation to get values between specified points.
	 * 
	 * The <code>DataTable</code> constructor takes two arguments: <code>x</code>, the 
	 * list of domain values (keys), and <code>y</code>, the list of range values (values).
	 * 
	 * @author Paul T. Grogan, ptgrogan@mit.edu 
	 */
	this.DataTable = function(x,y) {
		/**
		 * <code>x</code> is a sorted array of numbers representing the domain of points (keys).
		 */
		this.x = x;
		
		/**
		 * <code>y</code> is an array of numbers representing the range of points (values).
		 */
		this.y = y;
		
		/**
		 * The <code>lookup</code> function looks up the value of a point, using linear
		 * interpolation if necessary. 
		 */
		this.lookup = function(x) {
			// if lookup value is less than first point, return the first value
			if (x <= this.x[0]) {
				return this.y[0];
			}
			for(var i = 1; i < this.x.length; i++) {
				// if lookup value is less than or equal to this key, return
				// interpolated value
				if (x <= this.x[i]) {
					return this.y[i-1] + (this.y[i] - this.y[i-1]) 
						* (x - this.x[i-1])/(this.x[i] - this.x[i-1]);
				}
			}
			// if lookup value is larger than last point, return last value
			return this.y[this.y.length-1];
		}	
	}
}

/**
 * The <code>sips</code> object is a package for storing classes and methods for the SIPS project.
 * 
 * @author Paul T. Grogan, ptgrogan@mit.edu 
 */
$cces.sips = new Object();

/*
 * Simple Water SD Model
 * 
 * Original model authored by Karen Noiva and Jennifer Green
 * JavaScript port authored by Paul T. Grogan, ptgrogan@mit.edu, August 2012
 * 
 * @author Paul T. Grogan, ptgrogan@mit.edu 
 */
$cces.sips.SimpleWater = function() {
	
	/**
	 * <code>populationData</code> is a data table to store the values of the 
	 * Saudi population in each year. 
	 */
	this.populationData = new $cces.util.DataTable(
		[1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050],
		[3.12134e+006, 3.19459e+006, 3.2749e+006, 3.35946e+006, 3.44643e+006, 3.53501e+006, 3.62545e+006, 3.71898e+006, 3.8177e+006, 3.92433e+006, 4.04142e+006, 4.17064e+006, 4.31199e+006, 4.46359e+006, 4.62246e+006, 4.78703e+006, 4.95764e+006, 5.13704e+006, 5.32921e+006, 5.53933e+006, 5.77185e+006, 6.02869e+006, 6.31121e+006, 6.62257e+006, 6.96614e+006, 7.34464e+006, 7.75607e+006, 8.20052e+006, 8.68465e+006, 9.21702e+006, 9.80148e+006, 1.04409e+007, 1.11266e+007, 1.18368e+007, 1.25421e+007, 1.32205e+007, 1.38622e+007, 1.44693e+007, 1.50457e+007, 1.56003e+007, 1.61391e+007, 1.66698e+007, 1.71891e+007, 1.76797e+007, 1.8118e+007, 1.84918e+007, 1.87865e+007, 1.90206e+007, 1.92566e+007, 1.95789e+007, 2.00453e+007, 2.06816e+007, 2.14631e+007, 2.23344e+007, 2.32138e+007, 2.40411e+007, 2.47994e+007, 2.55042e+007, 2.61666e+007, 2.68091e+007, 2.74481e+007, 2.78802e+007, 2.83191e+007, 2.8765e+007, 2.92178e+007, 2.96778e+007, 3.0145e+007, 3.06196e+007, 3.11017e+007, 3.15913e+007, 3.20886e+007, 3.25938e+007, 3.3107e+007, 3.36282e+007, 3.41576e+007, 3.46953e+007, 3.52415e+007, 3.57964e+007, 3.63599e+007, 3.69323e+007, 3.75138e+007, 3.81043e+007, 3.87042e+007, 3.93136e+007, 3.99325e+007, 4.05611e+007, 4.11997e+007, 4.18483e+007, 4.25071e+007, 4.31763e+007, 4.38561e+007, 4.45465e+007, 4.52478e+007, 4.59602e+007, 4.66837e+007, 4.74187e+007, 4.81652e+007, 4.89235e+007, 4.96937e+007, 5.0476e+007, 5.12707e+007]
		//[3121337, 3236509, 3355931, 3479760, 3608157, 3741292, 3879340, 4022481, 4170904, 4324803, 4484382, 4649848, 4821420, 4999322, 5183789, 5375062, 5573394, 5779043, 5992280, 6213385, 6442649, 6680372, 6926867, 7182457, 7447478, 7722278, 8007217, 8302671, 8609025, 8926684, 9256065, 9597598, 9951734, 10318937, 10699689, 11094490, 11503858, 11928332, 12368468, 12824844, 13298060, 13788736, 14297518, 14825073, 15372094, 15939300, 16527434, 17137269, 17769606, 18425276, 19105138, 19810087, 20541046, 21298978, 22084875, 22899771, 23744735, 24620877, 25529347, 26471338, 27448087, 28460877, 29511037, 30599946, 31729034, 32899784, 34113732, 35372473, 36677659, 38031005, 39434287, 40889348, 42398098, 43962519, 45584664, 47266663, 49010726, 50819142, 52694285, 54638618, 56654694, 58745160, 60912760, 63160342, 65490855, 67907361, 70413031, 73011157, 75705150, 78498546, 81395014, 84398357, 87512519, 90741588, 94089804, 97561564, 101161427, 104894118, 108764540, 112777774, 116939090]
	);
	
	/**
	 * <code>modelTime</code> is a variable to store the current model execution time. 
	 */
	this.modelTime = 1950;
	
	
	/**
	 * <code>modelTimeStep</code> is a variable to store the model time step. 
	 */
	this.modelTimeStep = 0.25;
	
	/**
	 * <code>population</code> is a variable to store the current model population state. 
	 */
	this.population = this.populationData.lookup(this.modelTime); // 1e6;
	
	/**
	 * <code>perCapitaResidentialDemand</code> is a variable to store the current 
	 * model per-capita residential demand. 
	 */
	this.perCapitaResidentialDemand = 15; // 100;
	
	/**
	 * <code>economicWaterIntensity</code> is a variable to store the current 
	 * model economic water intensity. 
	 */
	this.economicWaterIntensity = 0.003; // 1;
	
	/**
	 * <code>gdp</code> is a variable to store the current 
	 * model gross domestic product. 
	 */
	this.gdp = 1.61398e+010; // 1e8;
	
	/**
	 * <code>agriculturalDemand</code> is a variable to store the current 
	 * model agricultural demand. 
	 */
	this.agriculturalDemand = 7.71e+008; // 1e5;
	
	/**
	 * <code>totalWaterAvailable</code> is a variable to store the current 
	 * model total water available. 
	 */
	this.totalWaterAvailable = 1e+006; // 1e7;
	
	/**
	 * <code>infrastructureCapacityOnOrder</code> is a variable to store the current 
	 * model infrastructure capacity on order. 
	 */
	this.infrastructureCapacityOnOrder = 0; // 8e5;
	
	/**
	 * <code>totalWaterProductionCapacity</code> is a variable to store the current 
	 * model total water production capacity. 
	 */
	this.totalWaterProductionCapacity = 1e6;
	
	/**
	 * <code>netChangeInPerCapitaDemand</code> is a function to evaluate the model
	 * net change in per capita demand.
	 */
	this.netChangeInPerCapitaDemand = function() {
		return this.normalFractionalChangeInPerCapitaDemand() * this.perCapitaResidentialDemand;
	}
	
	/**
	 * <code>normalFractionalChangeInPerCapitaDemand</code> is a function to evaluate the model
	 * normal fractional change in per capita demand.
	 */
	this.normalFractionalChangeInPerCapitaDemand = function() {
		//return 0.01;
		return 0.0291901;
	}
	
	/**
	 * <code>totalResidentialDemand</code> is a function to evaluate the model
	 * total residential demand.
	 */
	this.totalResidentialDemand = function() {
		return this.population * this.perCapitaResidentialDemand;
	}
	
	/**
	 * <code>changeInEconomicWaterIntensity</code> is a function to evaluate the model
	 * change in economic water intensity.
	 */
	this.changeInEconomicWaterIntensity = function() {
		return this.economicWaterIntensity * this.normalFractionalChangeInEconomicWaterIntensity();
	}
	
	/**
	 * <code>normalFractionalChangeInEconomicWaterIntensity</code> is a function to evaluate the model
	 * normal fractional chagne in economic water intensity.
	 */
	this.normalFractionalChangeInEconomicWaterIntensity = function() {
		//return -0.07;
		return -0.0005;
	}
	
	/**
	 * <code>normalFractionalChangeInGDP</code> is a function to evaluate the model
	 * normal fractional change in gross domestic product.
	 */
	this.normalFractionalChangeInGDP = function() {
		//return 0.03;
		return 0.0473258;
	}
	
	/**
	 * <code>netChangeInGDP</code> is a function to evaluate the model
	 * net change in gross domestic product.
	 */
	this.netChangeInGDP = function() {
		return this.gdp * this.normalFractionalChangeInGDP();
	}
	
	/**
	 * <code>economicWaterDemand</code> is a function to evaluate the model
	 * economic water demand.
	 */
	this.economicWaterDemand = function() {
		return this.economicWaterIntensity * this.gdp;
	}
	
	/**
	 * <code>normalFractionalGrowthInAgriculturalWaterDemand</code> is a function to evaluate the model
	 * normal fractional growth in agricultural water demand.
	 */
	this.normalFractionalGrowthInAgriculturalWaterDemand = function() {
		return 0.05;
	}
	
	/**
	 * <code>changeInAgriculturalDemand</code> is a function to evaluate the model
	 * change in agricultural demand.
	 */
	this.changeInAgriculturalDemand = function() {
		return this.agriculturalDemand * this.normalFractionalGrowthInAgriculturalWaterDemand();
	}
	
	/**
	 * <code>totalWaterDemand</code> is a function to evaluate the model
	 * total water demand.
	 */
	this.totalWaterDemand = function() {
		return this.agriculturalDemand + this.economicWaterDemand() + this.totalResidentialDemand();
	}
	
	/**
	 * <code>shortfallInDemand</code> is a function to evaluate the model
	 * shortfall in demand.
	 */
	this.shortfallInDemand = function() {
		return this.totalWaterDemand() - this.waterWithdrawals();
	}
	
	/**
	 * <code>waterProduction</code> is a function to evaluate the model
	 * water production.
	 */
	this.waterProduction = function() {
		return Math.min(this.totalWaterDemand(), this.totalWaterProductionCapacity);
	}
	
	/**
	 * <code>waterWithdrawals</code> is a function to evaluate the model
	 * water withdrawals.
	 */
	this.waterWithdrawals = function() {
		return Math.min(this.totalWaterDemand(), this.totalWaterAvailable/this.modelTime);
	}
	
	/**
	 * <code>timeToRecognizeDeterioration</code> is a function to evaluate the model
	 * time to recognize deterioration.
	 */
	this.timeToRecognizeDeterioration = function() {
		return 0.5;
	}
	
	/**
	 * <code>orderRateForInfrastructure</code> is a function to evaluate the model
	 * order rate for infrastructure.
	 */
	this.orderRateForInfrastructure = function() {
		return this.decreaseToWaterSupplyCapacity() * this.timeToRecognizeDeterioration() + this.shortfallInDemand();
	}
	
	/**
	 * <code>increaseInWaterSupplyCapacity</code> is a function to evaluate the model
	 * increase in water supply capacity.
	 */
	this.increaseInWaterSupplyCapacity = function() {
		return this.infrastructureCapacityOnOrder * this.normalFractionalChangeInWaterSupplyCapacity();
	}
	
	/**
	 * <code>normalFractionalChangeInWaterSupplyCapacity</code> is a function to evaluate the model
	 * normal fractional change in water supply capacity.
	 */
	this.normalFractionalChangeInWaterSupplyCapacity = function() {
		//return 0.2;
		return 0.001;
	}
	
	/**
	 * <code>decreaseToWaterSupplyCapacity</code> is a function to evaluate the model
	 * decrease to water supply capacity.
	 */
	this.decreaseToWaterSupplyCapacity = function() {
		return this.normalFractionalDeteriorationRate() * this.totalWaterProductionCapacity;
	}
	
	/**
	 * <code>normalFractionalDeteriorationRate</code> is a function to evaluate the model
	 * normal fractional deterioration rate.
	 */
	this.normalFractionalDeteriorationRate = function() {
		//return 0.01;
		return 0.005;
	}
	
	/* DEPRECATED IN AUG-22 VERSION OF THIS MODEL
	this.netPopulationChange = function() {
		return this.normalFractionalChangeInPopulation() * this.population;
	}
	this.normalFractionalChangeInPopulation = function() {
		return 0.03;
	}
	*/
	
	/**
	 * <code>tick</code> is a function to advance time by calculating the updated state variables
	 * and storing them in temporary variables. This is necessary because update order may matter when
	 * state variables may depend on the value of others.
	 * 
	 * In this case, the <code>tick</code> function automatically calls the <code>tock</code> 
	 * function to load the temporary variables back into the state variables. 
	 */
	this.tick = function() {
		this.modelTimeTemp = this.modelTime + this.modelTimeStep;
		// this.populationTemp = this.population + this.netPopulationChange() * deltaT;
		this.populationTemp = this.populationData.lookup(this.modelTimeTemp);
		this.perCapitaResidentialDemandTemp = this.perCapitaResidentialDemand + this.netChangeInPerCapitaDemand() * this.modelTimeStep;
		this.economicWaterIntensityTemp = this.economicWaterIntensity + this.changeInEconomicWaterIntensity() * this.modelTimeStep;
		this.gdpTemp = this.gdp + this.netChangeInGDP() * this.modelTimeStep;
		this.agriculturalDemandTemp = this.agriculturalDemand + this.changeInAgriculturalDemand() * this.modelTimeStep;
		this.totalWaterAvailableTemp = this.totalWaterAvailable + (this.waterProduction() - this.waterWithdrawals()) * this.modelTimeStep;
		this.infrastructureCapacityOnOrderTemp = this.infrastructureCapacityOnOrder + (this.orderRateForInfrastructure() - this.increaseInWaterSupplyCapacity()) * this.modelTimeStep;
		this.totalWaterProductionCapacityTemp = this.totalWaterProductionCapacity + (this.increaseInWaterSupplyCapacity() - this.decreaseToWaterSupplyCapacity()) * this.modelTimeStep;
		this.tock();
	}
	
	/**
	 * <code>tock</code> is a function to restore the temporary state variables after being advanced in the
	 * <code>tick</code> function.
	 */
	this.tock = function() {
		this.modelTime = this.modelTimeTemp;
		this.population = this.populationTemp;
		this.perCapitaResidentialDemand = this.perCapitaResidentialDemandTemp;
		this.economicWaterIntensity = this.economicWaterIntensityTemp;
		this.gdp = this.gdpTemp;
		this.agriculturalDemand = this.agriculturalDemandTemp;
		this.totalWaterAvailable = this.totalWaterAvailableTemp;
		this.infrastructureCapacityOnOrder = this.infrastructureCapacityOnOrderTemp;
		this.totalWaterProductionCapacity = this.totalWaterProductionCapacityTemp;
	}
}