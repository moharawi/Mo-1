var datap ;
var datapp ;
var datappList = [];
var datap2 ;
var chartp;
var chartpp;
var chartppList = [];
var datep = 1990;
var gdpp = 540;
var gdpp1 =1;
var gdpp2 =1;
var optionsp;
var optionspp;


google.load('visualization', '1', {'packages':['motionchart']});
			google.setOnLoadCallback(drawChart1);
			
			function drawChart1() {
				var data = new google.visualization.DataTable();
				data.addColumn('string', 'Fruit');
				data.addColumn('date', 'Date');
				data.addColumn('number', 'Sales');
				data.addColumn('number', 'Expenses');
				data.addColumn('string', 'Location');
				data.addRows([
					['Apples',  new Date (1988,0,1), 1000, 300, 'East'],
					['Oranges', new Date (1988,0,1), 1150, 200, 'West'],
					['Bananas', new Date (1988,0,1), 300,  250, 'West'],
					['Apples',  new Date (1989,6,1), 1200, 400, 'East'],
					['Oranges', new Date (1989,6,1), 750,  150, 'West'],
					['Bananas', new Date (1989,6,1), 788,  617, 'West']
				]);
				//var chart = new google.visualization.MotionChart(document.getElementById('myLine'));
				var chart1 = new google.visualization.MotionChart(document.getElementById('myLine1'));
				//var chart2 = new google.visualization.MotionChart(document.getElementById('myLine2'));
				
				//chart.draw(data, {width: 600, height:300});
				//chart1.draw(data, {width: 600, height:300});
				//chart2.draw(data, {width: 600, height:300});
			}
			
if ((navigator.userAgent.match(/iPad/i) != null) || (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)) {
	document.getElementById("myLine1").style.display = "none";
	document.getElementById("myLine2").style.display = "none";
	}
	
	
	
	
// Load the Visualization API and the piechart package.
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        datapp = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['1940',  0],
          
        ]);

        optionspp = {
          'backgroundColor':'none', 'backgroundColor.strokeWidth':'0', 'backgroundColor.stroke':'none'
        };

        //chartpp = new google.visualization.LineChart(document.getElementById('myLine2'));
        //chartpp.draw(datapp, optionspp);
      }