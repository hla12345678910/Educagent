function call(){
	$(document).ready(function(){
		
		$("#my-calendar").zabuto_calendar({
					        	language: "en",
					        	cell_border: true,
							    today: true,
							    show_days: false,
							    weekstartson: 0,
						     	ajax: {
							        url: "data/data.js",
							        modal: true
							    }

		});

		$.getJSON( "data/student.js", function( student ) {
		  	console.log("in getJSON");
			var items = [];
			var items2 = [];
			var tmp;

			for(var index = 0; index < student.data.length ; index++){
				tmp = student.data[index];
				items.push('<div class="col-md-2"' +'id="' + 'number_of_class' + index  + '"' + '>');


				for(var pos = 0; pos < tmp.schedule.length ; pos++){
					items.push('<div class=".col-xs-6"' + 'id="' + 'number_of_class' + index+pos + '"' + '>' + tmp.schedule[pos] + '</div>' );
				}

				items.push('</div>' );
			}
			$(".row-grid").append(items.join(''));
  		})

		function animateStudentStatus(index2){
		  	$(".thumbnail").click(function(){
		  		$("#student_status_" + this.id).fadeIn();
		  	})
			$(".student").mouseleave(function(){
				$("#student_status_" + index2).fadeOut();
			})
		}

		console.log("in Call Funtion");
		
		$.getJSON( "/data/student.js", function( student ) {
		  	console.log("in getJSON");
			var items = [];
			var tmp;
			for(var index = 0; index < student.data.length; index++){
				tmp = student.data[index];

				items.push( '<div class="student">' + '<a class="thumbnail" id="'+ index + ' ">' + '<img src="' + tmp.photo + '"alt="' + tmp.name + '"/>' + "</a>" + '<div id="student_status_' + index + '">' + '<div class="alert alert-danger">' + '<p id="student_status_absent"> absent </p> </div>' + '<div class="alert alert-success">' + '<p id="student_status_present"> present </p></div><div class="alert alert-info">' + '<p id="student_status_excused"> excused </p></div></div></div>');
				console.log("student_status_" + index);
			}
			$("#thumbnail_S").append(items.join(''));  			
  			for(var index2 = 0; index2 < student.data.length; index2++){
  				$("#student_status_" + index2).hide();
  				console.log("hide");
  			}
  			for(var index2 = 0; index2 < student.data.length; index2++){
				animateStudentStatus(index2);
				console.log("animation success");
			}
  		})
	})
}