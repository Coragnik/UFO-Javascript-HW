// From data.js
var tableData = data;

// tbody
var tbody = d3.select("#tbody");

// filter all references
var filterBtn = d3.select("#filter-btn");
var inputField = d3.select("#datetime");
var submit = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");

function loadTableData(dataRows) {
  document.getElementById('table-content').innerHTML=""
  d3.select("tbody")
    .selectAll("tr")
    .data(dataRows)
    .enter()
    .append("tr")
    .html(function(d) {

      return `<td>${d.datetime}</td> <td>${d.city}</td> <td>${d.state}</td> <td>${d.country}</td>

              <td>${d.shape}</td> <td>${d.durationMinutes}</td> <td>${d.comments}</td>     `;

    });


  }

loadTableData(tableData);

// insert clicks

submit.on("click", function() {

  // make sure the page does not refresh
  d3.event.preventDefault();

  // get input
  var inputValue = inputDate.property("value");
  console.log("checksubmit1")
  console.log(inputValue);
  console.log("checksubmit2")

  if (inputValue) {
  var filterdata = tableData.filter(onerec => onerec.datetime === inputValue);}
  console.log('Filtering Data');
  console.log(filterdata);

  // new table
  // buildvTable
  tbody.html("");
  loadTableData(filterdata);
});
