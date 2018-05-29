var button 			= document.querySelector("button");

button.onclick 	= function transpose() {
	var tbody		= document.getElementById('tbody');
	var tr 			= document.getElementsByTagName('tr');
	var baseTable 	= [];

	for(var row = 0; row < tr.length; row++) {
		var td 	= tr.item(row).getElementsByTagName("td");
		baseTable[row] = [];

		for(var cell = 0; cell < td.length; cell++) {
			baseTable[row][cell] = td.item(cell).innerText;
		}
	}

	while (tbody.lastChild) {
		tbody.removeChild(tbody.lastChild);
	}
	
	var newTable = [];
	
	for(var newRow = 0; newRow < baseTable[0].length; newRow++) {
		newTable[newRow] = [];
		var newTr = document.createElement('tr');
		tbody.appendChild(newTr);
	
		for(var col = 0; col < baseTable.length; col++) { 
			newTable[newRow][col] = baseTable[col][newRow];
			var newTd = document.createElement('td');
			newTr.appendChild(newTd);
			newTd.innerText = newTable[newRow][col];
		}
	}
}