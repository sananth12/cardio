window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');
		var data="";
		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					 data = reader.result;
					 data=data.split("\n");
					 console.log(data);
					 var d3= [];
					 for (var i = 0; i < 6000; i += 1) {
								d3.push([i,parseFloat(data[i])] );
							}
					 $(function() 
					 {

							var d1 = [];
							var d2 =[];							
							console.log(d3)
							$.plot("#placeholder", [ d1,d2,d3]);

						});

				}

				reader.readAsText(file);	
			} else {
				fileDisplayArea.innerText = "File not supported!";
			}
		});
}
