multiArray_Taux=[
           values_1993=[],
           values_1994=[],
           values_1995=[],
           values_1996=[],
           values_1997=[],
           values_1998=[],
           values_1999=[],
           values_2000=[],
           values_2001=[],
           values_2002=[],
           values_2003=[],
           values_2004=[],
           values_2005=[],
           values_2006=[],
           values_2007=[],
           values_2008=[],
           values_2009=[],
           values_2010=[],
           values_2011=[],
           values_2012=[],
           values_2013=[],
           values_2014=[],
           values_2015=[],
           values_2016=[]
         ]

         jeunesToTranspose=[
         values_1993_jeunes=[],
         values_1994_jeunes=[],
         values_1995_jeunes=[],
         values_1996_jeunes=[],
         values_1997_jeunes=[],
         values_1998_jeunes=[],
         values_1999_jeunes=[],
         values_2000_jeunes=[],
         values_2001_jeunes=[],
         values_2002_jeunes=[],
         values_2003_jeunes=[],
         values_2004_jeunes=[],
         values_2005_jeunes=[],
         values_2006_jeunes=[],
         values_2007_jeunes=[],
         values_2008_jeunes=[],
         values_2009_jeunes=[],
         values_2010_jeunes=[],
         values_2011_jeunes=[],
         values_2012_jeunes=[],
         values_2013_jeunes=[],
         values_2014_jeunes=[],
         values_2015_jeunes=[],
         values_2016_jeunes=[]
       ]

       absoluToTranspose=[
       values_1993_absolu=[],
       values_1994_absolu=[],
       values_1995_absolu=[],
       values_1996_absolu=[],
       values_1997_absolu=[],
       values_1998_absolu=[],
       values_1999_absolu=[],
       values_2000_absolu=[],
       values_2001_absolu=[],
       values_2002_absolu=[],
       values_2003_absolu=[],
       values_2004_absolu=[],
       values_2005_absolu=[],
       values_2006_absolu=[],
       values_2007_absolu=[],
       values_2008_absolu=[],
       values_2009_absolu=[],
       values_2010_absolu=[],
       values_2011_absolu=[],
       values_2012_absolu=[],
       values_2013_absolu=[],
       values_2014_absolu=[],
       values_2015_absolu=[],
       values_2016_absolu=[]
     ]

           var cantons = [
               {name:'Berne'},
               {name:'Soleure'},
               {name:'Bäle-Ville'},
               {name:'Bäle-Campagne'},
               {name:'Argovie'},
               {name:'Zurich'},
               {name:'Glaris'},
               {name:'Schaffhouse'},
               {name:'Appenzell Rh.-Ext.'},
               {name:'Appenzell Rh.-Int.'},
               {name:'Saint-Gall'},
               {name:'Grisons'},
               {name:'Thurgovie'},
               {name:'Lucerne'},
               {name:'Uri'},
               {name:'Schwytz'},
               {name:'Obwald'},
               {name:'Nidwald'},
               {name:'Zoug'},
               {name:'Vaud'},
               {name:'Valais'},
               {name:'Genève'},
               {name:'Fribourg'},
               {name:'Neuchâtel'},
               {name:'Jura'},
               {name:'Tessin'},
           ]

           d3.json('chomage.json', function (err,data) {
               if(err) throw err;

               cantons.forEach(function(canton){
                   for(prop in data[1993]) {
                       if(prop == canton.name) {
                           canton.chomage = data[1993][prop]

                           var myArray93 = [];
                           myArray93.push({name:prop,values:data[1993][prop]})
                           var myArray94 = [];
                           myArray94.push({name:prop,values:data[1994][prop]})
                           var myArray95 = [];
                           myArray95.push({name:prop,values:data[1995][prop]})
                           var myArray96 = [];
                           myArray96.push({name:prop,values:data[1996][prop]})
                           var myArray97 = [];
                           myArray97.push({name:prop,values:data[1997][prop]})
                           var myArray98 = [];
                           myArray98.push({name:prop,values:data[1998][prop]})
                           var myArray99 = [];
                           myArray99.push({name:prop,values:data[1999][prop]})
                           var myArray00 = [];
                           myArray00.push({name:prop,values:data[2000][prop]})
                           var myArray01 = [];
                           myArray01.push({name:prop,values:data[2001][prop]})
                           var myArray02 = [];
                           myArray02.push({name:prop,values:data[2002][prop]})
                           var myArray03 = [];
                           myArray03.push({name:prop,values:data[2003][prop]})
                           var myArray04 = [];
                           myArray04.push({name:prop,values:data[2004][prop]})
                           var myArray05 = [];
                           myArray05.push({name:prop,values:data[2005][prop]})
                           var myArray06 = [];
                           myArray06.push({name:prop,values:data[2006][prop]})
                           var myArray07 = [];
                           myArray07.push({name:prop,values:data[2007][prop]})
                           var myArray08 = [];
                           myArray08.push({name:prop,values:data[2008][prop]})
                           var myArray09 = [];
                           myArray09.push({name:prop,values:data[2009][prop]})
                           var myArray10 = [];
                           myArray10.push({name:prop,values:data[2010][prop]})
                           var myArray11 = [];
                           myArray11.push({name:prop,values:data[2011][prop]})
                           var myArray12 = [];
                           myArray12.push({name:prop,values:data[2012][prop]})
                           var myArray13 = [];
                           myArray13.push({name:prop,values:data[2013][prop]})
                           var myArray14 = [];
                           myArray14.push({name:prop,values:data[2014][prop]})
                           var myArray15 = [];
                           myArray15.push({name:prop,values:data[2015][prop]})
                           var myArray16 = [];
                           myArray16.push({name:prop,values:data[2016][prop]})

                         }


                       }

                   values_1993_absolu.push(parseFloat(myArray93[0].values.absolu))
                   values_1994_absolu.push(parseFloat(myArray94[0].values.absolu))
                   values_1995_absolu.push(parseFloat(myArray95[0].values.absolu))
                   values_1996_absolu.push(parseFloat(myArray96[0].values.absolu))
                   values_1997_absolu.push(parseFloat(myArray97[0].values.absolu))
                   values_1998_absolu.push(parseFloat(myArray98[0].values.absolu))
                   values_1999_absolu.push(parseFloat(myArray99[0].values.absolu))
                   values_2000_absolu.push(parseFloat(myArray00[0].values.absolu))
                   values_2001_absolu.push(parseFloat(myArray01[0].values.absolu))
                   values_2002_absolu.push(parseFloat(myArray02[0].values.absolu))
                   values_2003_absolu.push(parseFloat(myArray03[0].values.absolu))
                   values_2004_absolu.push(parseFloat(myArray04[0].values.absolu))
                   values_2005_absolu.push(parseFloat(myArray05[0].values.absolu))
                   values_2006_absolu.push(parseFloat(myArray06[0].values.absolu))
                   values_2007_absolu.push(parseFloat(myArray07[0].values.absolu))
                   values_2008_absolu.push(parseFloat(myArray08[0].values.absolu))
                   values_2009_absolu.push(parseFloat(myArray09[0].values.absolu))
                   values_2010_absolu.push(parseFloat(myArray10[0].values.absolu))
                   values_2011_absolu.push(parseFloat(myArray11[0].values.absolu))
                   values_2012_absolu.push(parseFloat(myArray12[0].values.absolu))
                   values_2013_absolu.push(parseFloat(myArray13[0].values.absolu))
                   values_2014_absolu.push(parseFloat(myArray14[0].values.absolu))
                   values_2015_absolu.push(parseFloat(myArray15[0].values.absolu))
                   values_2016_absolu.push(parseFloat(myArray16[0].values.absolu))

                   values_1993_jeunes.push(parseFloat(myArray93[0].values.jeunes))
                   values_1994_jeunes.push(parseFloat(myArray94[0].values.jeunes))
                   values_1995_jeunes.push(parseFloat(myArray95[0].values.jeunes))
                   values_1996_jeunes.push(parseFloat(myArray96[0].values.jeunes))
                   values_1997_jeunes.push(parseFloat(myArray97[0].values.jeunes))
                   values_1998_jeunes.push(parseFloat(myArray98[0].values.jeunes))
                   values_1999_jeunes.push(parseFloat(myArray99[0].values.jeunes))
                   values_2000_jeunes.push(parseFloat(myArray00[0].values.jeunes))
                   values_2001_jeunes.push(parseFloat(myArray01[0].values.jeunes))
                   values_2002_jeunes.push(parseFloat(myArray02[0].values.jeunes))
                   values_2003_jeunes.push(parseFloat(myArray03[0].values.jeunes))
                   values_2004_jeunes.push(parseFloat(myArray04[0].values.jeunes))
                   values_2005_jeunes.push(parseFloat(myArray05[0].values.jeunes))
                   values_2006_jeunes.push(parseFloat(myArray06[0].values.jeunes))
                   values_2007_jeunes.push(parseFloat(myArray07[0].values.jeunes))
                   values_2008_jeunes.push(parseFloat(myArray08[0].values.jeunes))
                   values_2009_jeunes.push(parseFloat(myArray09[0].values.jeunes))
                   values_2010_jeunes.push(parseFloat(myArray10[0].values.jeunes))
                   values_2011_jeunes.push(parseFloat(myArray11[0].values.jeunes))
                   values_2012_jeunes.push(parseFloat(myArray12[0].values.jeunes))
                   values_2013_jeunes.push(parseFloat(myArray13[0].values.jeunes))
                   values_2014_jeunes.push(parseFloat(myArray14[0].values.jeunes))
                   values_2015_jeunes.push(parseFloat(myArray15[0].values.jeunes))
                   values_2016_jeunes.push(parseFloat(myArray16[0].values.jeunes))

                   values_1993.push(parseFloat(myArray93[0].values.percentuale))
                   values_1994.push(parseFloat(myArray94[0].values.percentuale))
                   values_1995.push(parseFloat(myArray95[0].values.percentuale))
                   values_1996.push(parseFloat(myArray96[0].values.percentuale))
                   values_1997.push(parseFloat(myArray97[0].values.percentuale))
                   values_1998.push(parseFloat(myArray98[0].values.percentuale))
                   values_1999.push(parseFloat(myArray99[0].values.percentuale))
                   values_2000.push(parseFloat(myArray00[0].values.percentuale))
                   values_2001.push(parseFloat(myArray01[0].values.percentuale))
                   values_2002.push(parseFloat(myArray02[0].values.percentuale))
                   values_2003.push(parseFloat(myArray03[0].values.percentuale))
                   values_2004.push(parseFloat(myArray04[0].values.percentuale))
                   values_2005.push(parseFloat(myArray05[0].values.percentuale))
                   values_2006.push(parseFloat(myArray06[0].values.percentuale))
                   values_2007.push(parseFloat(myArray07[0].values.percentuale))
                   values_2008.push(parseFloat(myArray08[0].values.percentuale))
                   values_2009.push(parseFloat(myArray09[0].values.percentuale))
                   values_2010.push(parseFloat(myArray10[0].values.percentuale))
                   values_2011.push(parseFloat(myArray11[0].values.percentuale))
                   values_2012.push(parseFloat(myArray12[0].values.percentuale))
                   values_2013.push(parseFloat(myArray13[0].values.percentuale))
                   values_2014.push(parseFloat(myArray14[0].values.percentuale))
                   values_2015.push(parseFloat(myArray15[0].values.percentuale))
                   values_2016.push(parseFloat(myArray16[0].values.percentuale))

               })





               function transpose(a) {
                   return Object.keys(a[0]).map(function (c) {
                       return a.map(function (r) {
                           return r[c];
                       });
                   });
               }
               multiArray_Jeunes= transpose(jeunesToTranspose)
               multiArray_Absolu=transpose(absoluToTranspose)

               console.log(multiArray_Jeunes)
               console.log(multiArray_Absolu)
               console.log(multiArray_Taux)



         })

         function data_graph(stringa){
           if(stringa=="Berne"){
             data_lines=[multiArray_Absolu[0],multiArray_Jeunes[0]]
             return data_lines
           }
           else if (stringa=="Soleure"){
             data_lines=[multiArray_Absolu[1],multiArray_Jeunes[1]]
             return data_lines

           }
           else if (stringa=="Bâle-Ville"){
             data_lines=[multiArray_Absolu[2],multiArray_Jeunes[2]]
             return data_lines

           }
           else if (stringa=="Bâle-Campagne"){
             data_lines=[multiArray_Absolu[3],multiArray_Jeunes[3]]
             return data_lines

           }
           else if (stringa=="Argovie"){
             data_lines=[multiArray_Absolu[4],multiArray_Jeunes[4]]
             return data_lines

           }
           else if (stringa=="Zurich"){
             data_lines=[multiArray_Absolu[5],multiArray_Jeunes[5]]
             return data_lines

           }
           else if (stringa=="Glaris"){
             data_lines=[multiArray_Absolu[6],multiArray_Jeunes[6]]
             return data_lines

           }
           else if (stringa=="Schaffhouse"){
             data_lines=[multiArray_Absolu[7],multiArray_Jeunes[7]]
             return data_lines

           }
           else if (stringa=="Appenzell Rh.-Ext."){
             data_lines=[multiArray_Absolu[8],multiArray_Jeunes[8]]
             return data_lines

           }
           else if (stringa=="Appenzell Rh.-Int."){
             data_lines=[multiArray_Absolu[9],multiArray_Jeunes[9]]
             return data_lines

           }
           else if (stringa=="Saint-Gall"){
             data_lines=[multiArray_Absolu[10],multiArray_Jeunes[10]]
             return data_lines

           }
           else if (stringa=="Grisons"){
             data_lines=[multiArray_Absolu[11],multiArray_Jeunes[11]]
             return data_lines

           }
           else if (stringa=="Thurgovie"){
             data_lines=[multiArray_Absolu[12],multiArray_Jeunes[12]]
             return data_lines

           }
           else if (stringa=="Lucerne"){
             data_lines=[multiArray_Absolu[13],multiArray_Jeunes[13]]
             return data_lines

           }
           else if (stringa=="Uri"){
             data_lines=[multiArray_Absolu[14],multiArray_Jeunes[14]]
             return data_lines

           }
           else if (stringa=="Schwytz"){
             data_lines=[multiArray_Absolu[15],multiArray_Jeunes[15]]
             return data_lines

           }
           else if (stringa=="Obwald"){
             data_lines=[multiArray_Absolu[16],multiArray_Jeunes[16]]
             return data_lines

           }
           else if (stringa=="Nidwald"){
             data_lines=[multiArray_Absolu[17],multiArray_Jeunes[17]]
             return data_lines

           }
           else if (stringa=="Zoug"){
             data_lines=[multiArray_Absolu[18],multiArray_Jeunes[18]]
             return data_lines

           }
           else if (stringa=="Vaud"){
             data_lines=[multiArray_Absolu[19],multiArray_Jeunes[19]]
             return data_lines

           }
           else if (stringa=="Valais"){
             data_lines=[multiArray_Absolu[20],multiArray_Jeunes[20]]
             return data_lines

           }
           else if (stringa=="Genève"){
             data_lines=[multiArray_Absolu[21],multiArray_Jeunes[21]]
             return data_lines

           }
           else if (stringa=="Fribourg"){
             data_lines=[multiArray_Absolu[22],multiArray_Jeunes[22]]
             return data_lines

           }
           else if (stringa=="Neuchâtel"){
             data_lines=[multiArray_Absolu[23],multiArray_Jeunes[23]]
             return data_lines

           }
           else if (stringa=="Jura"){
             data_lines=[multiArray_Absolu[24],multiArray_Jeunes[24]]
             return data_lines

           }
           else if (stringa=="Tessin"){
             data_lines=[multiArray_Absolu[25],multiArray_Jeunes[25]]
             return data_lines

           }
}



update(0)
function update(anni){
  d3.select(".map").remove()



var w = 1250;
var h = 600;
var projection = d3.geoMercator()
    .center([10.4, 46.5])
    .scale(7500)
    .translate([w / 2, h / 2])

var path = d3.geoPath(projection);

var color = d3.scaleQuantize()
          .range([
                "rgb(3,54,166)",
                "rgb(13,85,230)",
                "rgb(60,141,253)",
                "rgb(133,190,253)",
                "rgb(222,237,254)"
                ].reverse());

var svg = d3.select("body")
      .append("svg")
      .attr("width", "90%")
      .attr("height","90%")
      .attr("class", "map")
                  .attr("viewBox", "0 0 " + 1.5*h + " " + w/2 )
                  .attr("preserveAspectRatio","xMidYMid meet")

d3.csv("taux_chomage.csv", function(data) {
  color.domain([0.000,6.900])

  d3.json("cantons_suisse.json", function(json) {
      for (var i = 0; i < 26; i++) {
        var dataState = data[i].canton;
        var dataValue = parseFloat(multiArray_Taux[anni][i]);
          for (var j = 0; j < 26; j++) {
            var jsonState = json.features[j].properties.canton;
            if (dataState == jsonState) {
                json.features[j].properties.etichetta = dataValue;
            break;

        }
      }
    }

      svg.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("class", "path1")
        .attr("d", path)


        .on("click", function(d) {
           var x = 50;
           var y = 10;
           var x1=947.5;
           var y1=10;
           d3.select("#slider")
            .classed("sl", true)
           d3.select("#index")
            .classed("in", true)
           d3.select("#tooltip1")
             .style("left", x + "px")
             .style("top", y + "px")
             .classed("hidden1", false)
             .select("#canton")
             .text(d.properties.canton)


        var margin = {top:2 , right: 2, bottom: 3, left: 0},
        width = 700 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;


        var x = d3.scaleLinear()
            .range([0, width]);
        var y = d3.scaleLinear()
            .range([height, 0]);

        var xAxis = d3.axisBottom(x).ticks(17).tickFormat(d3.format("^20")).tickPadding(10).tickSizeInner(-height).tickSizeOuter(0);
        var yAxis = d3.axisLeft(y).ticks(11).tickFormat(d3.format("^20")).tickPadding(20).tickSizeInner(-width).tickSizeOuter(0);


  var valueline=d3.line()
        .x(function(d,i){return x(i+1993)})
        .y(function(d){return y(d)})

  var valueline_2=d3.line()
        .x(function(d,i){return x(1993+i)})
        .y(function(d){return y(d)})



        d3.select('#tooltip1 svg').remove();
        var svg = d3.select("#tooltip1")
            .append("svg")
            .attr("class", "graph")
            .attr("width", "100%")
            .attr("height","100%")
            .attr("viewBox", "0 0 " + 1.9*height + " " + width )
            .attr("preserveAspectRatio","xMidYMid meet")
            .append("g")
            .attr("transform","translate(" + margin.left + "," + margin.top + ")");


            maximum = Math.max.apply(null, data_graph(d.properties.canton)[0],data_graph(d.properties.canton)[1] )


            x.domain([1993,2016]);
            y.domain([0, maximum+1/20 *maximum]);

            svg.append("path")
                .attr("class", "line1")
                .attr("d", valueline(data_graph(d.properties.canton)[0]));

            svg.append("path")
                .attr("class", "line2")
                .style("stroke", "red")
                  .attr("d", valueline_2(data_graph(d.properties.canton)[1]));

              svg.selectAll("dot")
                    .data(data_graph(d.properties.canton)[0])
                    .enter().append("circle")
                    .attr("class", "circle1")
                    .attr("r", 3.5)
                    .attr("cx", function(d,i) { return x(i+1993); })
                    .attr("cy", function(d) { return y(d); })
                    .on("mouseover", function(d){
                      var mouseX = Math.round (event.clientX);
                      var mouseY = Math.round (event.clientY);

                      d3.select("#tooltip1").append("path")
                          .attr("class", "mouse-line")
                          .style("stroke", "green")
                          .style("stroke-width", "1px")
                          .style("opacity", "1");
                      d3.select("#tooltip2")
                        .text("Valeur total: " + d)
                        .style("left", (mouseX -40) + "px")
                        .style("top", (mouseY-30) + "px")
                        .classed("hidden", function() {
                          if (d3.select("#tooltip2").style("display") == "none") {
                            return false
                          }
                          else {
                            return true
                          }
                        })
                        })
                    .on("mouseout", function(d) {
                        d3.select("#tooltip2").classed("hidden", true);
                        })


         svg.selectAll("dot")
                  .data(data_graph(d.properties.canton)[1])
                  .enter().append("circle")
                  .attr("class", "circle2")
                  .attr("r", 3.5)
                  .attr("cx", function(d,i){return x(1993+i);})
                  .attr("cy", function(d){return y(d);})
                  .on("mouseover", function(d){
                    var mouseX = Math.round (event.clientX);
                    var mouseY = Math.round (event.clientY);
                    d3.select("#tooltip2")
                    .style("left", (mouseX-40) + "px")
                    .style("top", (mouseY-30) + "px")
                      .text("Jeunes: " + d)
                      .classed("hidden", function() {
                        if (d3.select("#tooltip2").style("display") == "none") {
                          return false
                        }
                        else {
                          return true
                        }
                      })
                      })
                  .on("mouseout", function(d) {
                      d3.select("#tooltip2").classed("hidden", true);
                      })

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);



        d3.select("#bf")
            .style("left", x1+"px")
            .style("top", y1+"px")
            .classed("bf1", false)
            .on("click", function(d){
                d3.select("#tooltip1")
                    .classed("hidden1", true)
                d3.select("#bf")
                    .classed("bf1", true)
                d3.select("#index")
                    .classed("in", false)
                d3.select("#slider")
                  .classed("sl", false)
              }
            )

          }//chiusura funzione onclick tooltip1

        )
            .style("fill", function(d) {
                  var value = d.properties.etichetta;

                  if (value) {
                    return color(value);
                  } else {
                    return "#ccc";
                  }
               })
               .on("mouseover", function(d) {
                 var coordinates = [0, 0];
                 coordinates = d3.mouse(this);
                 var x = coordinates[0];
                 var y = coordinates[1];

                 d3.select("#tooltip")
                   .style("left", x + "px")
                   .style("top", 1.5*y + "px")
                   .classed("hidden", function() {
                     if (d3.select("#tooltip1").style("display") == "none") {
                       return false
                     }
                     else {
                       return true
                     }
                   })
                   .select("#canton")
                     .text(d.properties.canton)
                 d3.select("#value")
                   .text(d.properties.etichetta)
                  d3.select("#anni_tooltip")
                    .text(parseInt(anni)+1993)
               })
               .on("mouseout", function(d) {
                 d3.select("#tooltip").classed("hidden", true);
               })


        svg.selectAll("text")
        .data(json.features)
        .enter().append("text")
          .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
          .attr("dy", ".35em")
          .text(function(d) { return d.properties.canton; })

        d3.select("#slider")
          .classed("sl", false)

        d3.select("#years_title")
            .text(parseInt(anni)+1993)

      //  d3.select("#anni_slider")
        //    .text("93 94")


        var i1=1030
        var i2=210

        d3.select("#index")
          .style("left", i1 + "px")
          .style("top", i2 + "px")
          .classed("in", false )
          .text("Index:")


        var datacolor=[25,25,25,25,25]
        var datacolors=[ "rgb(3,54,166)",
          "rgb(13,85,230)",
          "rgb(60,141,253)",
          "rgb(133,190,253)",
          "rgb(222,237,254)"].reverse()

        var canvas=d3.select("#index")
                      .append("svg")
                      .attr("width", 150)
                      .attr("height", 260)
                      .append("g")

        var bars=canvas.selectAll("rect")
                      .data(datacolor)
                      .enter()
                      .append("g")
                      .attr("width", 145)
                      .attr("height", 25)
                          .append("rect")
                          .attr("width", function(d){return d;})
                          .attr("height", 25 )
                          .attr("y", function (d,i) {return 15 + i*55;})
                          .attr("fill", function (d,i) { return datacolors[i]})

              canvas.selectAll("g")
                    .append("text")
                    .style("font-size", "16px")
                    .attr("x", 70)
                    .attr("y", 32)
                    .text("< 1.4%")
              canvas.selectAll("g")
                    .append("text")
                    .style("font-size", "16px")
                    .attr("x", 85)
                    .attr("y", 87)
                    .text("1.4 - 2.7 %")
              canvas.selectAll("g")
                    .append("text")
                    .style("font-size", "16px")
                    .attr("x", 85)
                    .attr("y", 142)
                    .text("2.8 - 4.1%")
              canvas.selectAll("g")
                      .append("text")
                      .style("font-size", "16px")
                      .attr("x", 85)
                      .attr("y", 197)
                      .text("4.2 - 5.5 %")
              canvas.selectAll("g")
                      .append("text")
                      .style("font-size", "16px")
                      .attr("x", 70)
                      .attr("y", 252)
                      .text("> 5.5 %")


        d3.select("#button1")
                .on("click", function(d) {
                    d3.select("path.line1")
                        .classed("hidingline", function(){
                            if (d3.select("path.line1").classed("hidingline") == false) {
                              d3.selectAll("circle.circle1").classed("hidingcircle", true)
                                return true
                                }
                            else {
                              d3.selectAll("circle.circle1").classed("hidingcircle", false)
                                return false
                                }
                            }
                          )
                  }
                );

        d3.select("#button2")
        .on("click", function(d) {
            d3.select("path.line2")
                .classed("hidingline", function(){
                    if (d3.select("path.line2").classed("hidingline") == false) {
                      d3.selectAll("circle.circle2").classed("hidingcircle", true)
                        return true
                        }
                    else {
                      d3.selectAll("circle.circle2").classed("hidingcircle", false)
                        return false
                        }
                    }
                  )
          }
        )


        }  //parentesi chiusura funzione json cartina
    );   //parentesi chiusura json cartina

  }   //parentesi chiusura funzione csv taux_chomage
);//parentesi chiurusa csv taux_chomage
}
