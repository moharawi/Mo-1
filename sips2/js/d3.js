$(document).ready(function(){
	
var data = [7166954307.31, 7605078553.02, 8649619950.55],//32, 57, 112],
    dataEnter = data.concat(293),
    dataExit = data.slice(0, 2),
    w = 360,
    h = 180,
    x = d3.scale.ordinal().domain([57, 32, 112]).rangePoints([0, w], 1),
    y = d3.scale.ordinal().domain(data).rangePoints([0, h], 2);


/*
(function() {

/*
//Width and height
	var w = 500;
	var h = 100;
	var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
    
    var data = [5, 10, 15, 20, 25];
                
	//Create SVG element
	var svg1 = d3.select("#myd3test")
	            .append("svg")
	            .attr("width", w)
	            .attr("height", h);
	
	var circle = svg1.selectAll("circle")
                 .data(data)
                 .enter()
                 .append("circle");
                
    circle.attr("cx", function(d, i) {
            return (i * 50) + 25;
        })
       .attr("cy", h/2)
       .attr("r", function(d) {
            return d;
       });
      
*/
/*
	var n = 40,
    random = d3.random.normal(0, .2),
    data = d3.range(n).map(random);
    var startM = 0;
    var endM = 40;

var margin = {top: 10, right: 10, bottom: 20, left: 40},
    width = 300 - margin.left - margin.right,
    height = 180 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .domain([0, n - 1])
    .range([0, width]);
    
var x2 = d3.scale.linear()
    .domain([0, n - 1])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([-1, 1])
    .range([height, 0]);

var line = d3.svg.line()
    .x(function(d, i) { return x(i); })
    .y(function(d, i) { return y(d); });

var svg = d3.select("#myd3test").append("svg")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);

var xax = svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.svg.axis().scale(x).orient("bottom"));

svg.append("g")
    .attr("class", "y axis")
    .call(d3.svg.axis().scale(y).orient("left"));

var path = svg.append("g")
    .attr("clip-path", "url(#clip)")
  .append("path")
    .data([data])
    .attr("class", "line")
    .attr("d", line);

tick();

function tick() {

  // push a new data point onto the back
  data.push(random());

  // redraw the line, and slide it to the left
  //x.domain([0,data.length])
  x2.domain([startM,endM])
  	.range([0, width]);
  
  xax.attr("transform", "translate(0," + height + ")")
  	.call(d3.svg.axis().scale(x2).orient("bottom"));
  
  startM++;
  endM++;
  console.log(startM+"::"+endM);
  
  path
      .attr("d", line)
      .attr("transform", null)
      .data([data])
    .transition()
      .duration(500)
      .ease("linear")
      .attr("transform", "translate(" + x(-1) + ")")
      .each("end", tickD3js);

  // pop the old data point off the front
  data.shift();
  

}
      
	
})();
*/
/*
(function() {
  var svg = d3.select("#chart-2").append("svg")
      .attr("width", w)
      .attr("height", h);

  svg.selectAll(".little")
      .data(data)
    .enter().append("circle")
      .attr("class", "little")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 12);

  d3.select("#chart-2 button").on("click", function() {
    svg.selectAll(".select").remove();

    svg.selectAll(".select")
        .data(data)
      .enter().append("circle")
        .attr("class", "select")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 60)
        .style("fill", "none")
        .style("stroke", "red")
        .style("stroke-opacity", 1e-6)
        .style("stroke-width", 3)
      .transition()
        .duration(750)
        .attr("r", 12)
        .style("stroke-opacity", 1);
  });
})();
*/
/*

(function() {
  var svg = d3.select("#chart-13").append("svg")
      .attr("width", w)
      .attr("height", h);

  var gd = svg.selectAll(".data")
      .data([32, 57, 293])
    .enter().append("g")
      .attr("class", "data")
      .attr("transform", function(d, i) { return "translate(" + 20 * (i + 1) + ",20)"; });

  var ed = gd.filter(function(d, i) { return i == 2; }),
      ud = gd.filter(function(d, i) { return i != 2; });

  ed.append("circle")
      .attr("class", "little")
      .attr("r", 1e-6);

  gd.append("rect")
      .attr("x", -10)
      .attr("y", -10)
      .attr("width", 20)
      .attr("height", 20);

  gd.append("text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text(String);

  var ge = svg.selectAll(".element")
      .data(data)
    .enter().append("g")
      .attr("class", "element")
      .attr("transform", function(d) { return "translate(" + d + ",90)"; });

  ge.append("circle")
      .attr("class", "little")
      .attr("r", Math.sqrt);

  ge.append("text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text(String);

  ed.select("rect")
      .style("fill", "lightgreen")
      .style("stroke", "green");

  var xe = ge.filter(function(d, i) { return i == 2; });

  xe.select("circle")
      .style("fill", "lightcoral")
      .style("stroke", "red");

  d3.select("#chart-13 button").on("click", function() {
    gd
        .attr("transform", function(d, i) { return "translate(" + 20 * (i + 1) + ",20)"; })
      .transition()
        .duration(750)
        .attr("transform", function(d) { return "translate(" + d + ",90)"; });

    gd.select("rect")
        .style("opacity", 1)
      .transition()
        .duration(750)
        .style("opacity", 1e-6);

    ed.select("circle")
        .attr("r", 1e-6)
      .transition()
        .duration(750)
        .attr("r", Math.sqrt);

    xe.select("circle")
        .attr("r", Math.sqrt)
      .transition()
        .duration(750)
        .attr("r", 1e-6);

    xe.select("text")
        .style("opacity", 1)
      .transition()
        .duration(750)
        .style("opacity", 1e-6);
  });
})();

*/
});




//Functions
/*
function drawd3js(myDvId){
	
		var w = 500;
		var h = 100;
		var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
    
                var data = [5, 10, 15, 20, 25];
                
                //Create SVG element
                var mydvid22 = myDvId.substring(0,myDvId.length-2)
		var svg1 = d3.select("#"+mydvid22+"-vis")
	            .append("svg")
	            .attr("width", w)
	            .attr("height", h);
		
		var circle = svg1.selectAll("circle")
                 .data(data)
                 .enter()
                 .append("circle");
                
	    circle.attr("cx", function(d, i) {
            return (i * 50) + 25;
        })
       .attr("cy", h/2)
       .attr("r", function(d) {
            return d;
       });

};
*/
var dataD3jsList = [];
var chartD3jsList = [];
var temporalStep = 1950;
var xN = [];
var x2N = [];
var xaxN = [];
var yN = [];
var lineN = [];
var svgN = [];
var pathN = [];
var variablesN = [];

var dataAdate = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165];

var dataAval = [7166954307.31, 7605078553.02, 8649619950.55, 9933759050.46, 11380033489.87, 13057884167.72, 15079597996.89, 17154715948.95, 19288080356.64, 21485497943.09, 23774785455.03, 26178640572.28, 28712883033.69, 31394339185.21, 34241029804.69, 37350391082.13, 42244766817.48, 47274066585.74, 51335460672.26, 54662166885.21, 57566129696.64, 60235398196.55, 62781850380.37, 65273016470.84, 67749771414.61, 70238075838.17, 72745378414.79, 75277954758.37, 77850280968.34, 80472322195.99, 83151720270.80, 85894721876.52, 88707023207.62, 91593672819.60, 94559760499.94, 97609870222.26, 100748890405.35, 103981182012.50, 107311553342.07, 110744246114.82, 114284001076.01, 117935027545.69, 121701928560.62, 125588806293.10, 137443977571.84, 134135995394.30, 131318202288.86, 135590004683.49, 145367961673.10, 154363975804.44, 160241371317.65, 162183586433.03, 166274874997.06, 171086897890.95, 175654415469.56, 180372831705.46, 185381177116.27, 190754931474.35, 196543206981.83, 202762279970.34, 209415163283.81, 216477110397.87, 223918769632.57, 231691195062.23, 239753190696.30, 248053712479.28, 256707123248.05, 265584279695.36, 274591035670.89, 283706161803.81, 292926137488.52, 302244917057.62, 311609034976.95, 321121010688.97, 330864390427.75, 340872101964.44, 351163851279.20, 361663652363.70, 372395490061.52, 383408886439.46, 394743308457.75, 406418835631.19, 418456791227.05, 430862535105.69, 443644217874.18, 456796105359.64, 470317373633.35, 484197324887.42, 498432858297.38, 513015593732.75, 527946037869.48, 543222975833.56, 558852424935.42, 573627264949.18, 587344433752.45, 601355352152.35, 616933467636.95, 633161622366.93, 649917354849.61, 667239513446.71, 685165560265.64, 703717484430.84, 722914725092.77, 742761310233.69, 763259414016.95, 784397724060.55, 806165316847.77, 828540872090.17, 851506512256.95, 875037293659.49, 899114785899.06, 923716278334.76, 948828089189.72, 974434052215.15, 1000528730620.02, 1027104902992.42, 1054166944681.89, 1060942842653.56, 1066304694784.60, 1074652354083.49, 1086999998335.01, 1104054075023.63, 1126212907386.29, 1153569440702.33, 1185931104041.17, 1222854285190.80, 1263690646165.88, 1307642210736.92, 1353800664444.12, 1401106548490.54, 1448528638034.23, 1495192325725.76, 1540430925038.65, 1583815874611.39, 1625165783951.57, 1664535741044.58, 1702189657690.50, 1738559441332.98, 1774195411484.21, 1809712615047.70, 1845737557634.43, 1882851298437.31, 1921503843321.54, 1962037779108.41, 2004703845468.43, 2049653237396.62, 2096936930103.30, 2146511637627.70, 2198251496512.25, 2251964270632.77, 2307405069117.03, 2364264877258.10, 2422223964534.97, 2480996429176.33, 2540350637673.54, 2600123207536.60];

var currentDate = [2010, 2011, 2012];
var indexA = 3;
function plotD3js(dvid, dvName, xData){

	var myDvId = dvid;//.substring(0,dvid.length-2)
	
	
	var n = 40,
    random = d3.random.normal(0, .2),
    data = d3.range(n).map(random);
    var startM = 0;
    var endM = 40;

var margin = {top: 10, right: 10, bottom: 20, left: 40},
    width = 300 - margin.left - margin.right,
    height = 180 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .domain([0, n - 1])
    .range([0, width]);
    
var x2 = d3.scale.linear()
    .domain([0, n - 1])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([-1, 1])
    .range([height, 0]);

var line = d3.svg.line()
    .x(function(d, i) { return x(i); })
    .y(function(d, i) { return y(d); });

var svg = d3.select("#"+myDvId+"-vis").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);

var xax = svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.svg.axis().scale(x).orient("bottom"));

svg.append("g")
    .attr("class", "y axis")
    .call(d3.svg.axis().scale(y).orient("left"));

var path = svg.append("g")
    .attr("clip-path", "url(#clip)")
  .append("path")
    .data([data])
    .attr("class", "line")
    .attr("d", line);

tick();

function tick() {

  // push a new data point onto the back
  data.push(random());

  // redraw the line, and slide it to the left
  //x.domain([0,data.length])
  x2.domain([startM,endM])
  	.range([0, width]);
  
  xax.attr("transform", "translate(0," + height + ")")
  	.call(d3.svg.axis().scale(x2).orient("bottom"));
  
  startM++;
  endM++;
  console.log(startM+"::"+endM);
  
  path
      .attr("d", line)
      .attr("transform", null)
      .data([data])
    .transition()
      .duration(500)
      .ease("linear")
      .attr("transform", "translate(" + x(-1) + ")")
      .each("end", tick);

  // pop the old data point off the front
  data.shift();
  

}
     
	/*
	variablesN.push("#"+myDvId+"-vis");
	
	var marginN = {top: 20, right: 20, bottom: 20, left: 40},
		widthN = 280 - marginN.left - marginN.right,
		heightN = 180 - marginN.top - marginN.bottom;
	
	xN.push(d3.scale.linear()
	    .domain([1940, 1950])
	    .range([0, widthN])
	    );
	
	x2N.push(d3.scale.linear()
	    .domain([0, 1])
	    .range([0, widthN])
	    );
	
	yN.push(d3.scale.linear()
	    .domain([0, 1000])
	    .range([heightN, 0])
	    );
	
	lineN.push(d3.svg.line()
	    .x(function(d, i) { return x(i); })
	    .y(function(d, i) { return y(d); })
	    );

    svgN.push(d3.select("#"+myDvId+"-vis")
      .append("svg")
        .attr("width", widthN + marginN.left + marginN.right)
        .attr("height", heightN + marginN.top + marginN.bottom)
      .append("g")
      	.attr("transform", "translate(" + marginN.left + "," + marginN.top + ")"));
      	
    svgN[variablesN.length-1].append("defs")
      .append("clipPath")
		.attr("id", "clip")
	  .append("rect")
	  	.attr("width", widthN)
	    .attr("height", heightN).
	    
	svgN[variablesN.length-1].append("g")
	    .attr("class", "y axis")
	    .call(d3.svg.axis().scale(y[variablesN.length-1]).orient("left"));

	pathN.push(svgN[variablesN.length-1].append("g")
	    .attr("clip-path", "url(#clip)")
	  .append("path")
	    //.data([xData])
	    .attr("class", "line")
	    .attr("d", lineN[this]));
	*/
	//tickD3js();
	
}

function drawD3jsNew(plotNum) {
	
  // redraw the line, and slide it to the left
  //x.domain([0,data.length])
  x2N[plotNum].domain([1940,temporalStep])
  	.range([0, width]);
  
  xaxN[plotNum].attr("transform", "translate(0," + height + ")")
  	.call(d3.svg.axis().scale(x2[plotNum]).orient("bottom"));
  
  pathN[plotNum]
      .attr("d", lineN[plotNum])
      .attr("transform", null)
      .data([dataD3jsList[plotNum]])
    .transition()
      .duration(500)
      .data([dataD3jsList[this]])
      .ease("linear")
      .attr("transform", "translate(" + x(-1) + ")")
      //.each("end", tickD3js);

  // pop the old data point off the front
  //data[i].shift();
  

}

function tickD3js() {
	if(temporalStep < 2050) {
		//simpleWater.tick();
		logDataD3js();
	} else {
		stopD3js();
	}
};

timerN = null;

function runD3js() {
	isRunningN = true;
	timerN = setInterval(tickD3js, 10);
};

function stopD3js() {
	isRunningN = false;
	clearInterval(timerN);
	temporalStep = 1940;
};

function logDataD3js() {
	for(var i = 0; i < variablesN.length; i++) {
		
		// [(x-axis, y-axis)]
		dataD3jsList[i].push(eval(variables[i]));
		tickD3jsNew(chartD3jsList[i], dataD3jsList[i])
		drawD3jsNew(i);
		
	}
}
