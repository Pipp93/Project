var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;




// Set the ranges
var x = d3.scaleLinear()
				.range([0, width]);
var y = d3.scaleLinear()
				.range([height, 0]);

// Define the axes
var xAxis = d3.axisBottom(x).ticks(23).tickFormat(d3.format("^20"));

var yAxis = d3.axisLeft(y).ticks(10).tickFormat(d3.format("^20"));

// Define the line
var valueline = d3.line()
    .x(function(d) { return x(d.years); })
    .y(function(d) { return y(d.values); });

// Adds the svg canvas
var svg = d3.select("body")
    .append("svg")
    .attr("width", "90%")
    .attr("height","70%")
                .attr("viewBox", "0 0 " + 1.5*height + " " + width )
                .attr("preserveAspectRatio","xMidYMid meet")
    .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");


// Get the data
d3.csv("data.csv", function(error, data) {
    data.forEach(function(d) {
        d.years = +d.years;
        d.values = +d.values;
    });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.years; }));
    y.domain([0, d3.max(data, function(d) { return d.values; })]);

    // Add the valueline path.
    svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

    // Add the scatterplot
    svg.selectAll("dot")
        .data(data)
      .enter().append("circle")
        .attr("r", 3.5)
        .attr("cx", function(d) { return x(d.years); })
        .attr("cy", function(d) { return y(d.values); });


    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

});
