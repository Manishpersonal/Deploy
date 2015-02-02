(function() {
	var app = angular.module("analysisApp",['ngRoute'])
	// var personArray = [
	// 				{"name": "manish", "age": 25},
	// 				{"name": "rakesh", "age": 20},
	// 				{"name": "pranil", "age": 10},
	// 				{"name": "John", "age": 60},
	// 				{"name": "rohan", "age": 50},
	// 				{"name": "Ganesh", "age": 40},
	// 				{"name": "Sanket", "age": 55},
	// 				{"name": "Vaibhav", "age": 20},
	// 				{"name": "Mary", "age": 25},
	// 				{"name": "Mike", "age": 85},
	// 				{"name": "Adam", "age": 30},
	// 				{"name": "Julie", "age": 15},
	// 				{"name": "eve", "age": 25},
	// 				{"name": "rak", "age": 20},
	// 				{"name": "Shaun", "age": 10}
				//]
	app.directive ("data",function(){
		return {
			restrict: "E",
			templateUrl: "template/chart1.html",
			controller: function($scope,$http){
				console.log();
				$http.get("js/data.json").success(function(data){
					$scope.person = data;
				})
				

			}
		}	
	});

	// app.controller ("personController", function(){
	// 	this.person = personArray;
	// })
	// app.controller("chartOneCtrl", function() {
		
	// });

	// app.controller("chartTwoCtrl", function() {
	// 	var data = [10, 50, 80];
	// 	var r = 200;

	// 	var color = d3.scale.ordinal()
	// 	    .range(['red', 'blue', 'orange']);

	// 	var canvas = d3.select('#canvasTwo').append('svg')
	// 	    .attr('width', 500)
	// 	    .attr('height', 500);

	// 	var group = canvas.append('g')
	// 	    .attr('transform', 'translate(300, 300)');

	// 	var arc = d3.svg.arc()
	// 	    .innerRadius(100)
	// 	    .outerRadius(r);

	// 	var pie = d3.layout.pie()
	// 	    .value(function (d) {
	// 	    return d;
	// 	});

	// 	var arcs = group.selectAll('.arc')
	// 	    .data(pie(data))
	// 	    .enter()
	// 	    .append('g')
	// 	    .attr('class', 'arc');

	// 	arcs.append('path')
	// 	    .attr('d', arc)
	// 	    .attr('fill', function (d) {
	// 	    return color(d.data);
	// 	});

	// 	arcs.append('text')
	// 	    .attr('transform', function (d) {
	// 	    return 'translate(' + arc.centroid(d) + ')';
	// 	})
	// 	    .attr('text-anchor', 'middle')
	// 	    .attr('font-size', '1.5em')
	// 	    .text(function (d) {
	// 	    return d.data;
	// 	});
	// });

	// app.controller("chartThreeCtrl", function() {

	// });

	// app.controller("chartFourCtrl", function() {
	// 	d3.json("js/data.json", function(data) {

 //  			var color = d3.scale.linear()
 //                    		.domain([0, 60])
 //                    		.range(["red","blue"])

 //  			var canvas = d3.select("#canvasFour").append("svg")
 //  							.attr("width", 500)
 //  							.attr("height", 500)

 //  			canvas.selectAll("rect")
 //  						.data(data)
 //  						.enter()
 //  							.append("rect")
 //  							.attr("width", function(d) { return d.age*10;})
 //  							.attr("height", 40)
 //  							.attr("y", function(d, i) { return i*50;})
 //  							.attr("fill", function(d) { return color(d);})

 //  			canvas.selectAll("text")
 //  						.data(data)
 //  						.enter()
 //  							.append("text")
 //  							.attr("fill","white")
 //  							.attr("y",function(d, i) { return i*50 + 20;})
 //  							.text(function(d) { return d.name;})
 //  		});
	// });

	// app.config(['$routeProvider',
	// 	function($routeProvider) {
	// 		$routeProvider.
	// 			when("/chart1", {
	// 				templateUrl: "template/chart1.html",
	// 				controller: "chartOneCtrl"
	// 			}).
	// 			when("/chart2", {
	// 				templateUrl: "template/chart2.html",
	// 				controller: "chartTwoCtrl"
	// 			}).
	// 			when("/chart3", {
	// 				templateUrl: "template/chart3.html",
	// 				controller: "chartThreeCtrl"
	// 			}).
	// 			when("/chart4", {
	// 				templateUrl: "template/chart4.html",
	// 				controller: "chartFourCtrl"
	// 			}).
	// 			otherwise({
	// 				redirectTo: "/chart1"
	// 			});
	// 	}
	// ]);


})();