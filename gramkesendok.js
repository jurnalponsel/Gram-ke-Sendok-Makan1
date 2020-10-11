function konversi(){
	var basis_input = document.getElementById('basis_input').innerText;
	var basis_output = document.getElementById('basis_output').innerText;
	var bilangan = document.getElementById("angka_input").value;
	try {
		var x = new BigNumber(bilangan, basis_input);
		document.getElementById("angka_input").style.backgroundColor = "#ffffff";
	} catch(err) {
		document.getElementById("angka_input").style.backgroundColor = "#dce4f2";
		return;
	}
	var result = x.toString(basis_output).toUpperCase();
	if(basis_input == 16 && basis_output == 2) {
		var result_length = result.length;
		var bits = 0;
		if(result_length <= 4){
			bits = 4 - result_length;
		} else {
			var bits = 4 - (result_length) % 4;
		}
		while (bits != 0) {
			result = "0" + result;
			bits = bits - 1;
		}
	}
	document.getElementById("output").value = result;
}

function reset(){
	document.getElementById("angka_input").value = "";
	document.getElementById("output").value = "";
}