			var dvListVal = new Array();
			var dvList = new Array();
			var dsalArrayPaul = [];
			dvListVal[0] = "simpleWater.agriculturalDemand";
				dvListVal[1] = "simpleWater.changeInAgriculturalDemand()";
				dvListVal[2] = "simpleWater.changeInEconomicWaterIntensity()";
				dvListVal[3] = "simpleWater.decreaseToWaterSupplyCapacity()";
				dvListVal[4] = "simpleWater.economicWaterDemand()";
				dvListVal[5] = "simpleWater.economicWaterIntensity";
				dvListVal[6] = "simpleWater.gdp";
				dvListVal[7] = "simpleWater.increaseInWaterSupplyCapacity()";
				dvListVal[8] = "simpleWater.infrastructureCapacityOnOrder";
				dvListVal[9] = "simpleWater.netChangeInGDP()";
				
				dvListVal[10] = "simpleWater.netChangeInPerCapitaDemand()";
				dvListVal[11] = "simpleWater.netPopulationChange()"; // hide this
				dvListVal[12] = "simpleWater.normalFractionalChangeInEconomicWaterIntensity()";
				dvListVal[13] = "simpleWater.normalFractionalChangeInGDP()";
				dvListVal[14] = "simpleWater.normalFractionalChangeInPerCapitaDemand()";
				dvListVal[15] = "simpleWater.normalFractionalChangeInPopulation()"; // hide this
				dvListVal[16] = "simpleWater.normalFractionalChangeInWaterSupplyCapacity()";
				dvListVal[17] = "simpleWater.normalFractionalDeteriorationRate()";
				dvListVal[18] = "simpleWater.normalFractionalGrowthInAgriculturalWaterDemand()";
				dvListVal[19] = "simpleWater.orderRateForInfrastructure()";
				
				dvListVal[20] = "simpleWater.perCapitaResidentialDemand";
				dvListVal[21] = "simpleWater.population";
				dvListVal[22] = "simpleWater.shortfallInDemand()";
				dvListVal[23] = "simpleWater.modelTime";
				dvListVal[24] = "simpleWater.timeToRecognizeDeterioration()";
				dvListVal[25] = "simpleWater.totalResidentialDemand()";
				dvListVal[26] = "simpleWater.totalWaterAvailable";
				dvListVal[27] = "simpleWater.totalWaterDemand()";
				dvListVal[28] = "simpleWater.totalWaterProductionCapacity";
				dvListVal[29] = "simpleWater.waterProduction()";
				
				dvListVal[30] = "simpleWater.waterWithdrawals()";
				
				
				//var dvList = new Array();
				
				dvList[0] = "agriculturalDemand";
				dvList[1] = "changeInAgriculturalDemand";
				dvList[2] = "changeInEconomicWaterIntensity";
				dvList[3] = "decreaseToWaterSupplyCapacity";
				dvList[4] = "economicWaterDemand";
				dvList[5] = "economicWaterIntensity";
				dvList[6] = "gdp";
				dvList[7] = "increaseInWaterSupplyCapacity";
				dvList[8] = "infrastructureCapacityOnOrder";
				dvList[9] = "netChangeInGDP";
				
				dvList[10] = "netChangeInPerCapitaDemand";
				//dvList[11] = "netPopulationChange";
				dvList[12] = "normalFractionalChangeInEconomicWaterIntensity";
				dvList[13] = "normalFractionalChangeInGDP";
				dvList[14] = "normalFractionalChangeInPerCapitaDemand";
				//dvList[15] = "normalFractionalChangeInPopulation";
				dvList[16] = "normalFractionalChangeInWaterSupplyCapacity";
				dvList[17] = "normalFractionalDeteriorationRate";
				dvList[18] = "normalFractionalGrowthInAgriculturalWaterDemand";
				dvList[19] = "orderRateForInfrastructure";
				
				dvList[20] = "perCapitaResidentialDemand";
				dvList[21] = "population";
				dvList[22] = "shortfallInDemand";
				dvList[23] = "modelTime";
				dvList[24] = "timeToRecognizeDeterioration";
				dvList[25] = "totalResidentialDemand";
				dvList[26] = "totalWaterAvailable";
				dvList[27] = "totalWaterDemand";
				dvList[28] = "totalWaterProductionCapacity";
				dvList[29] = "waterProduction";
				
				dvList[30] = "waterWithdrawals";
				
				
			function initPaul() {
				simpleWater = new $cces.sips.SimpleWater();
				variables = [];
				data = [];
				plots = [];
				//logData();
				
				var cons = 0;
				var cons1 = 0;
				
				//var dvListVal = new Array();
				
				
				
				
			};
			function tick() {
				//document.getElementById('selectVariable').disabled = true;
				//document.getElementById('add').disabled = true;
				
				if(simpleWater.modelTime < 2050) {
					simpleWater.tick();
					
					logData();
				} else {
					stop();
				}
			};
			timer = null;
			function run() {
				isRunning = true;
				//document.getElementById('tick').disabled = true;
				//document.getElementById('start').disabled = true;
				//document.getElementById('stop').disabled = false;
				//document.getElementById('reset').disabled = true;
				timer = setInterval(tick, 10);
			};
			function stop() {
				isRunning = false;
				//document.getElementById('tick').disabled = false;
				//document.getElementById('start').disabled = false;
				//document.getElementById('stop').disabled = true;
				//document.getElementById('reset').disabled = false;
				clearInterval(timer);
			};
			function preset() {
				while (document.getElementById('plots').hasChildNodes()) {
				    document.getElementById('plots').removeChild(document.getElementById('plots').lastChild);
				}
				initPaul();
				//document.getElementById('selectVariable').disabled = false;
				//document.getElementById('add').disabled = false;
			}
			
			function logData() {
				for(var i = 0; i < variables.length; i++) {
					// [(x-axis, y-axis)]
					//data[i].push([simpleWater.modelTime, eval(variables[i])]);
					//datapp.addRows([[simpleWater.modelTime.toString(), eval(variables[i])]]);
					datappList[i].addRows([[simpleWater.modelTime.toString(), eval(variables[i])]]);
					//chartpp.draw(datapp, optionspp);
			//		chartppList[i].draw(datappList[i], optionspp);
					//$.plot(plots[i], [ data[i] ]);
					//riyadh.setOptions({fillColor: 'rgb('+Math.round(((simpleWater.modelTime - 1950)/100) * 255)+','+0+','+0+')'});
					
					cons = Math.round(((simpleWater.modelTime - 1950)/100) * 255)
					
					cons1 = cons+30
					
					if(cons1 > 255){
						cons1 = 150//cons1 - Math.round(((simpleWater.modelTime - 1950)/100) *80);
					}
					
					if(cons1 < 0){
						cons1 = cons1 + Math.round(((simpleWater.modelTime - 1950)/100) *80);
					}
					
					//ksa_s.setOptions({fillColor: 'rgb('+0+','+0+','+cons+')'});
					asir_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+0+','+cons1+','+0+')'});
					asir_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+0+','+cons1+','+0+')'});
					baha_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+cons1+','+cons1+','+0+')'});
					shamaliyah_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+cons1+','+0+','+0+')'});
					jawf_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+cons+','+0+','+0+')'});
					
					madinah_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+cons1+','+cons1+','+0+')'});
					qasim_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+cons1+','+0+','+0+')'});
					
					qurayyat_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+cons1+','+cons1+','+0+')'});
					riyad_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+0+','+cons1+','+0+')'});
					sharqiyah_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+0+','+cons+','+0+')'});
					
					hail_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+cons+','+0+','+0+')'});
					jizan_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+cons+','+cons+','+0+')'});
					makkah_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+0+','+cons1+','+0+')'});
					najran_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+cons1+','+0+','+0+')'});
					
					tabuk_s.setOptions({fillOpacity: 0.5, fillColor: 'rgb('+cons1+','+cons1+','+0+')'});
					//heatmap.setMap(map);
					
					//select element
					
					
					// show heatmap
					/*
					var dsalPoints3 = [];
					for(var y=0; y<10; y++){
					
						if(dsalObjectArray[y].contractDate < simpleWater.modelTime){
							dsalPoints3.push(new google.maps.LatLng(dsalObjectArray[y].latitude, dsalObjectArray[y].longitude))
						}
						
					}
					 var pointArray3 = new google.maps.MVCArray(dsalPoints3);
					 if(i!=0){heatmap3.setMap(null);}
					 var heatmap3 = new google.maps.visualization.HeatmapLayer({
			          data: pointArray3,
			          radius: 5
			        });
			        
			        heatmap3.setMap(map);
					*/
					
					for(var m=0; m<dsalObjectArray.length; m++){
						if(dsalObjectArray[m].contractDate == simpleWater.modelTime){
							
							dsalArrayPaul.push({location: new google.maps.LatLng(dsalObjectArray[m].latitude, dsalObjectArray[m].longitude), weight: 10})
						}
					}
					heatmap4.setData(dsalArrayPaul)
					// time slider
					//$(document).ready(function() {
						$( "span.time-label" ).text( Math.floor(simpleWater.modelTime) );
						$("span.time-mark").css('left',''+simpleWater.modelTime-1950-0.1+'%');
						//$("span.time-mark").css('background-color','#ff0000');
						
						
						$('#sim-loading span.sim-time-loader').css('width',''+simpleWater.modelTime-1950+'%');
						//$('#sim-loading span.sim-time-loader').css('background-color','#ff0000');
						
						if(simpleWater.modelTime == 2050){
							$('#sim-loading').css('display', 'none')
							$('#sim-time-control-left').css('display', 'block')
							$('#sim-time-control-right').css('display', 'block')
							}
					//});
					
				}
			}
			function addPlot() {
				var labelh = document.createElement('header');
				var label = document.createElement('p');
				label.innerHTML = "hello";//document.getElementById('selectVariable').options[document.getElementById('selectVariable').selectedIndex].text;
				document.getElementById('plots').appendChild(labelh).appendChild(label);
				//document.getElementById('plots');
				//pauljs.simpleWater.gdp
				variables.push("simpleWater.shortfallInDemand()");
				var plot = document.createElement('div');
				plot.style.width = '600';
				plot.style.height = '300';
				plot.style.border = '2px solid #F00';
				document.getElementById('plots').appendChild(plot);
				//document.getElementById('plots').appendChild(plot);
				plots.push(plot);
				data.push([]);
			}
			
				
				



				
				