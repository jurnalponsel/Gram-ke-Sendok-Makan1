	function konversi(){
		var bilangan = document.getElementById("angka_input_small").value;
		try {
			var x = new BigNumber(bilangan, 10);
			document.getElementById("angka_input_small").style.backgroundColor = "#ffffff";
		} catch(err) {
			document.getElementById("angka_input_small").style.backgroundColor = "#dce4f2";
			return;
		}
		var xString = x.toFormat();
		x = x.times(0.01);
		var hasil = x.toFormat();
		
		var kalkulasi = "$$\\mathrm{" + "{" + xString + "}" + "\\;cm\\;\\times \\frac {1}{100}=" + "{" + hasil + "}" + "\\;m" + "}$$";
		
		document.getElementById("output_small").value = hasil;
		document.getElementById("MathInput").value = kalkulasi;
		//return MathJax.Hub.Typeset('MathInput');
	}
	$(document).ready(function(){
		$( "#angka_input_small" ).on('keyup change',function() {
		  //MathJax.Hub.Queue(konversi);
		  konversi();
		  Preview.Update();
		});
	});