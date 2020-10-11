
	function togglePecahan(currentChoice) {
		var choice = document.getElementById(currentChoice);
		if(choice.classList.contains("active")) {
			return;
		} else {
			if(choice.id == "pecahan-biasa") {
				var choosen = document.getElementById("pecahan-biasa");
				var disable = document.getElementById("pecahan-campuran");
				choosen.classList.add("active");
				disable.classList.remove("active");
				document.getElementById("box-campuran-1").classList.add("hidden");
				document.getElementById("box-campuran-2").classList.add("hidden");
				document.getElementById("box-campuran-1").value = "";
				document.getElementById("box-campuran-2").value = "";
			}else if(choice.id == "pecahan-campuran") {
				var choosen = document.getElementById("pecahan-campuran");
				var disable = document.getElementById("pecahan-biasa");
				choosen.classList.add("active");
				disable.classList.remove("active");
				document.getElementById("box-campuran-1").classList.remove("hidden");
				document.getElementById("box-campuran-2").classList.remove("hidden");
			}
		}
	}
	
	function hitung(){
		
		var operators = {
			'penjumlahan': function(a, b) { return a + b },
			'pengurangan': function(a, b) { return a - b },
			'perkalian': function(a, b) { return a * b },
			'pembagian': function(a, b) { return a / b }
		};
		
		var operasi = document.getElementById("operasi").value;
		
		if(document.getElementById("pecahan-biasa").classList.contains("active")) {
			var pembilang1 = document.getElementById("pembilang-1").value;
			var pembilang2 = document.getElementById("pembilang-2").value;
			var penyebut1 = document.getElementById("penyebut-1").value;
			var penyebut2 = document.getElementById("penyebut-2").value;
			
			try {
				var a = new BigNumber(pembilang1, 10);
				var b = new BigNumber(pembilang2, 10);
				var c = new BigNumber(penyebut1, 10);
				var d = new BigNumber(penyebut2, 10);
				document.getElementById("pembilang-1").style.backgroundColor = "#ffffff";
				document.getElementById("pembilang-2").style.backgroundColor = "#ffffff";
				document.getElementById("penyebut-1").style.backgroundColor = "#ffffff";
				document.getElementById("penyebut-2").style.backgroundColor = "#ffffff";
			} catch(err) {
				document.getElementById("pembilang-1").style.backgroundColor = "#dce4f2";
				document.getElementById("pembilang-2").style.backgroundColor = "#dce4f2";
				document.getElementById("penyebut-1").style.backgroundColor = "#dce4f2";
				document.getElementById("penyebut-2").style.backgroundColor = "#dce4f2";
				return;
			}
			
			var pembilang1 = parseFloat(pembilang1);
			var pembilang2 = parseFloat(pembilang2);
			var penyebut1 = parseFloat(penyebut1);
			var penyebut2 = parseFloat(penyebut2);
			
			var x = (pembilang1/penyebut1);
			var y = (pembilang2/penyebut2);
			var pembilang;
			var penyebut;
			var kalkulasi;
			
			var z = operators[operasi](x,y);
			z = z.toPrecision(10);
			z = parseFloat(z);
			
			if(operasi == "penjumlahan") {
				if(penyebut1 == penyebut2) {
					pembilang = pembilang1+pembilang2;
					kalkulasi = "(" + pembilang1 + "/" + penyebut1 + ")" + "+" + "(" + pembilang2 + "/" + penyebut2 + ")" + " = " + pembilang + "/" + penyebut1 + " = " + z;
				}else {
					pembilangkiri = pembilang1*penyebut2;
					pembilangkanan = pembilang2*penyebut1;
					pembilang = pembilangkiri+pembilangkanan;
					penyebut = penyebut1*penyebut2;
					kalkulasi = "(" + pembilang1 + "/" + penyebut1 + ")" + "+" + "(" + pembilang2 + "/" + penyebut2 + ")" + " = " + "(" + pembilangkiri + "/" + penyebut + ")" + "+" + "(" + pembilangkanan + "/" + penyebut + ")" + " = " + pembilang + "/" + penyebut + " = " + z;
				}
			}else if (operasi == "pengurangan") {
				if(penyebut1 == penyebut2) {
					pembilang = pembilang1-pembilang2;
					kalkulasi = "(" + pembilang1 + "/" + penyebut1 + ")" + "-" + "(" + pembilang2 + "/" + penyebut2 + ")" + " = " + pembilang + "/" + penyebut + " = " + z;
				}else {
					pembilangkiri = pembilang1*penyebut2;
					pembilangkanan = pembilang2*penyebut1;
					pembilang = pembilangkiri-pembilangkanan;
					penyebut = penyebut1*penyebut2;
					kalkulasi = "(" + pembilang1 + "/" + penyebut1 + ")" + "-" + "(" + pembilang2 + "/" + penyebut2 + ")" + " = " + "(" + pembilangkiri + "/" + penyebut + ")" + "-" + "(" + pembilangkanan + "/" + penyebut + ")" + " = " + pembilang + "/" + penyebut + " = " + z;
				}
			}else if (operasi == "perkalian") {
				pembilang = (pembilang1*pembilang2);
				penyebut = (penyebut1*penyebut2);
				kalkulasi = "(" + pembilang1 + "/" + penyebut1 + ")" + "*" + "(" + pembilang2 + "/" + penyebut2 + ")" + " = " + pembilang + "/" + penyebut + " = " + z;
			}else if (operasi == "pembagian") {
				pembilang = (pembilang1*penyebut2);
				penyebut = (penyebut1*pembilang2);
				kalkulasi = "(" + pembilang1 + "/" + penyebut1 + ")" + "/" + "(" + pembilang2 + "/" + penyebut2 + ")" + " = " + "(" + pembilang1 + "/" + penyebut1 + ")" + "*" + "(" + penyebut2 + "/" + pembilang2 + ")" + " = " + pembilang + "/" + penyebut + " = " + z;
			}
			
			document.getElementById("hasil").value = z;
			document.getElementById("kalkulasi").value = kalkulasi;
			
		}else if (document.getElementById("pecahan-campuran").classList.contains("active")) {
			var bilanganBulat1 = document.getElementById("bilangan-bulat-1").value;
			var pembilang1 = document.getElementById("pembilang-1").value;
			var pembilang2 = document.getElementById("pembilang-2").value;
			var bilanganBulat2 = document.getElementById("bilangan-bulat-2").value;
			var penyebut1 = document.getElementById("penyebut-1").value;
			var penyebut2 = document.getElementById("penyebut-2").value;
			
			try {
				var a = new BigNumber(pembilang1, 10);
				var b = new BigNumber(pembilang2, 10);
				var c = new BigNumber(penyebut1, 10);
				var d = new BigNumber(penyebut2, 10);
				var e = new BigNumber(bilanganBulat1, 10);
				var f = new BigNumber(bilanganBulat2, 10);
				document.getElementById("pembilang-1").style.backgroundColor = "#ffffff";
				document.getElementById("pembilang-2").style.backgroundColor = "#ffffff";
				document.getElementById("penyebut-1").style.backgroundColor = "#ffffff";
				document.getElementById("penyebut-2").style.backgroundColor = "#ffffff";
				document.getElementById("bilangan-bulat-1").style.backgroundColor = "#ffffff";
				document.getElementById("bilangan-bulat-2").style.backgroundColor = "#ffffff";
			} catch(err) {
				document.getElementById("pembilang-1").style.backgroundColor = "#dce4f2";
				document.getElementById("pembilang-2").style.backgroundColor = "#dce4f2";
				document.getElementById("penyebut-1").style.backgroundColor = "#dce4f2";
				document.getElementById("penyebut-2").style.backgroundColor = "#dce4f2";
				document.getElementById("bilangan-bulat-1").style.backgroundColor = "#dce4f2";
				document.getElementById("bilangan-bulat-2").style.backgroundColor = "#dce4f2";
				return;
			}
			
			var bilanganBulat1 = parseFloat(bilanganBulat1);
			var pembilang1 = parseFloat(pembilang1);
			var pembilang2 = parseFloat(pembilang2);
			var bilanganBulat2 = parseFloat(bilanganBulat2);
			var penyebut1 = parseFloat(penyebut1);
			var penyebut2 = parseFloat(penyebut2);
			
			
			var pembilangCampuran1 = (bilanganBulat1*penyebut1)+pembilang1;
			var pembilangCampuran2 = (bilanganBulat2*penyebut2)+pembilang2;
			
			var x = (pembilangCampuran1/penyebut1);
			var y = (pembilangCampuran2/penyebut2);
			var pembilang;
			var penyebut;
			var kalkulasi;
			
			var z = operators[operasi](x,y);
			z = z.toPrecision(10);
			z = parseFloat(z);
			
			if(operasi == "penjumlahan") {
				if(penyebut1 == penyebut2) {
					pembilang = pembilangCampuran1+pembilangCampuran2;
					kalkulasi = "(" + bilanganBulat1 + " " + pembilang1 + "/" + penyebut1 + " + " + bilanganBulat2 + " " + pembilang2 + "/" + penyebut2 + ")" + " = " + "(" + pembilangCampuran1 + "/" + penyebut1 + ")+(" + pembilangCampuran2 + "/" + penyebut2 + ")" + " = " + pembilang + "/"+ penyebut1 + " = " + z;
				} else {
					pembilangkiri = pembilangCampuran1*penyebut2;
					pembilangkanan = pembilangCampuran2*penyebut1;
					pembilang = pembilangkiri+pembilangkanan;
					penyebut = penyebut1*penyebut2;
					kalkulasi = "(" + bilanganBulat1 + " " + pembilang1 + "/" + penyebut1 + " + " + bilanganBulat2 + " " + pembilang2 + "/" + penyebut2 + ")" + " = " + "(" + pembilangCampuran1 + "/" + penyebut1 + ")+(" + pembilangCampuran2 + "/" + penyebut2 + ")" + " = " + "(" + pembilangkiri + "/" + penyebut + ")" + "+" + "(" + pembilangkanan + "/" + penyebut + ")" + " = " + pembilang + "/" + penyebut + " = " + z;
				}
			}else if (operasi == "pengurangan") {
				if(penyebut1 == penyebut2) {
					pembilang = pembilangCampuran1-pembilangCampuran2;
					kalkulasi = "(" + bilanganBulat1 + " " + pembilang1 + "/" + penyebut1 + " - " + bilanganBulat2 + " " + pembilang2 + "/" + penyebut2 + ")" + " = " + "(" + pembilangCampuran1 + "/" + penyebut1 + ")-(" + pembilangCampuran2 + "/" + penyebut2 + ")" + " = " + pembilang + "/"+ penyebut1 + " = " + z;
				} else {
					pembilangkiri = pembilangCampuran1*penyebut2;
					pembilangkanan = pembilangCampuran2*penyebut1;
					pembilang = pembilangkiri-pembilangkanan;
					penyebut = penyebut1*penyebut2;
					kalkulasi = "(" + bilanganBulat1 + " " + pembilang1 + "/" + penyebut1 + " - " + bilanganBulat2 + " " + pembilang2 + "/" + penyebut2 + ")" + " = " + "(" + pembilangCampuran1 + "/" + penyebut1 + ")-(" + pembilangCampuran2 + "/" + penyebut2 + ")" + " = " + "(" + pembilangkiri + "/" + penyebut + ")" + "-" + "(" + pembilangkanan + "/" + penyebut + ")" + " = " + pembilang + "/" + penyebut + " = " + z;
				}
			}else if (operasi == "perkalian") {
				pembilang =  pembilangCampuran1*pembilangCampuran2;
				penyebut = penyebut1*penyebut2;
				kalkulasi = "(" + bilanganBulat1 + " " + pembilang1 + "/" + penyebut1 + " * " + bilanganBulat2 + " " + pembilang2 + "/" + penyebut2 + ")" + " = " + "(" + pembilangCampuran1 + "/" + penyebut1 + ")*(" + pembilangCampuran2 + "/" + penyebut2 + ")" + " = " + pembilang + "/"+ penyebut + " = " + z;
			}else if (operasi == "pembagian") {
				pembilang =  pembilangCampuran1*penyebut2;
				penyebut = penyebut1*pembilangCampuran2;
				kalkulasi = "(" + bilanganBulat1 + " " + pembilang1 + "/" + penyebut1 + " / " + bilanganBulat2 + " " + pembilang2 + "/" + penyebut2 + ")" + " = " + "(" + pembilangCampuran1 + "/" + penyebut1 + ")/(" + pembilangCampuran2 + "/" + penyebut2 + ")" + " = " + pembilang + "/"+ penyebut + " = " + z;
			}
			
			document.getElementById("hasil").value = z;
			document.getElementById("kalkulasi").value = kalkulasi;
			
		}
	}
