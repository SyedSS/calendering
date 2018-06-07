function populateTable(object) {

    var obj = object;
    var table = $("<table />");
    table[0].border = "1";
    var columns = Object.keys(obj[0]);
    var columnCount = columns.length;
    var row = $(table[0].insertRow(-1));
    for (var i = 0; i < columnCount; i++) {
        var headerCell = $("<th />");
        headerCell.html([columns[i]]);
        row.append(headerCell);
    }

    for (var i = 0; i < obj.length; i++) {
        row = $(table[0].insertRow(-1));
        for (var j = 0; j < columnCount; j++) {
            var cell = $("<td />");
            cell.html(obj[i][columns[j]]);
            row.append(cell);
        }
    }
    
    var dvTable = $("#NP");
    dvTable.html("");
    dvTable.append(table);

}

populateTable(mockData)