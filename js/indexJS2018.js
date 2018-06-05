	function getValue(e){
		var input_id = e.id;
		var value = e.value;
		console.log(input_id, e.value);
		$(this).prop('value', value);
		
	}

	var datas;

	var xmlhttp = new XMLHttpRequest();

	var url = './data/data.json';

	xmlhttp.onreadystatechange=function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        myFunction(xmlhttp.responseText);
	    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) { 
	    var dataJSON = JSON.parse(response);
	    datas = dataJSON;

	    var teams_id = ['0']; 
	    var teams_name = ['0'];
	    var teams_flag_url = ['0'];

	    $.each(datas.teams, function(index, value){	    	
	    	teams_id.push(value.id);
	    	teams_name.push(value.name);
	    	teams_flag_url.push(value.flag);
	    });

    	var group = datas.groups.a;
    	var number_of_matches = group.matches.length;

    	$('div#groupA').find('tbody').html('');
	    for (var i = 0; i< number_of_matches; i++) {  	    		    	

	    	var new_row = '<tr><th scope="row">Match '+group.matches[i].name+'</th>';
	    	    new_row+= '<td>'+teams_name[group.matches[i].home_team]+' <img class="flag" src="'+teams_flag_url[group.matches[i].home_team]+'" alt="'+teams_name[group.matches[i].home_team]+'"></td>'
	    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score1" value="" min="0"></td>';
	    	    new_row+= '<td>-</td>';
	    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score2" value="" min="0"></td>';
	    	    new_row+= '<td><img class="flag" src="'+teams_flag_url[group.matches[i].away_team]+'" alt="'+teams_name[group.matches[i].away_team]+'"> '+teams_name[group.matches[i].away_team]+' </td></tr>'; 
    		$('div#groupA').find('tbody').append(new_row);
	    }	    

	    $('a#grpA').click(function(){

	    	var group = datas.groups.a;
	    	var number_of_matches = group.matches.length;

	    	$('div#groupA').find('tbody').html('');
		    for (var i = 0; i< number_of_matches; i++) {  	    		    	
	
		    	var new_row = '<tr><th scope="row">Match '+group.matches[i].name+'</th>';
		    	    new_row+= '<td>'+teams_name[group.matches[i].home_team]+' <img class="flag" src="'+teams_flag_url[group.matches[i].home_team]+'" alt="'+teams_name[group.matches[i].home_team]+'"></td>'
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score1" value="" min="0"></td>';
		    	    new_row+= '<td>-</td>';
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score2" value="" min="0"></td>';
		    	    new_row+= '<td><img class="flag" src="'+teams_flag_url[group.matches[i].away_team]+'" alt="'+teams_name[group.matches[i].away_team]+'"> '+teams_name[group.matches[i].away_team]+' </td></tr>'; 
	    		$('div#groupA').find('tbody').append(new_row);
		    }

	    });	    

	    $('a#grpB').click(function(){
	    	var group = datas.groups.b;
	    	var number_of_matches = group.matches.length;	
	    	$('div#groupB').find('tbody').html('');
		    for (var i = 0; i< number_of_matches; i++) {  	    		    	
	
		    	var new_row = '<tr><th scope="row">Match '+group.matches[i].name+'</th>';
		    	    new_row+= '<td>'+teams_name[group.matches[i].home_team]+' <img class="flag" src="'+teams_flag_url[group.matches[i].home_team]+'" alt="'+teams_name[group.matches[i].home_team]+'"></td>'
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score1" value="" min="0"></td>';
		    	    new_row+= '<td>-</td>';
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score2" value="" min="0"></td>';
		    	    new_row+= '<td><img class="flag" src="'+teams_flag_url[group.matches[i].away_team]+'" alt="'+teams_name[group.matches[i].away_team]+'"> '+teams_name[group.matches[i].away_team]+' </td></tr>'; 

	    		$('div#groupB').find('tbody').append(new_row);
		    }

	    });

	    $('a#grpC').click(function(){
	    	var group = datas.groups.c;
	    	var number_of_matches = group.matches.length;	
	    	$('div#groupC').find('tbody').html('');
		    for (var i = 0; i< number_of_matches; i++) {  	    		    	
	
		    	var new_row = '<tr><th scope="row">Match '+group.matches[i].name+'</th>';
		    	    new_row+= '<td>'+teams_name[group.matches[i].home_team]+' <img class="flag" src="'+teams_flag_url[group.matches[i].home_team]+'" alt="'+teams_name[group.matches[i].home_team]+'"></td>'
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score1" value="" min="0"></td>';
		    	    new_row+= '<td>-</td>';
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score2" value="" min="0"></td>';
		    	    new_row+= '<td><img class="flag" src="'+teams_flag_url[group.matches[i].away_team]+'" alt="'+teams_name[group.matches[i].away_team]+'"> '+teams_name[group.matches[i].away_team]+' </td></tr>'; 
	    		$('div#groupC').find('tbody').append(new_row);
		    }

	    });

	    $('a#grpD').click(function(){
	    	var group = datas.groups.d;
	    	var number_of_matches = group.matches.length;	
	    	$('div#groupD').find('tbody').html('');
		    for (var i = 0; i< number_of_matches; i++) {  	    		    	
	
		    	var new_row = '<tr><th scope="row">Match '+group.matches[i].name+'</th>';
		    	    new_row+= '<td>'+teams_name[group.matches[i].home_team]+' <img class="flag" src="'+teams_flag_url[group.matches[i].home_team]+'" alt="'+teams_name[group.matches[i].home_team]+'"></td>'
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score1" value="" min="0"></td>';
		    	    new_row+= '<td>-</td>';
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score2" value="" min="0"></td>';
		    	    new_row+= '<td><img class="flag" src="'+teams_flag_url[group.matches[i].away_team]+'" alt="'+teams_name[group.matches[i].away_team]+'"> '+teams_name[group.matches[i].away_team]+' </td></tr>'; 
	    		$('div#groupD').find('tbody').append(new_row);
		    }

	    });	    

	    $('a#grpE').click(function(){
	    	var group = datas.groups.e;
	    	var number_of_matches = group.matches.length;	
	    	$('div#groupE').find('tbody').html('');
		    for (var i = 0; i< number_of_matches; i++) {  	    		    	
	
		    	var new_row = '<tr><th scope="row">Match '+group.matches[i].name+'</th>';
		    	    new_row+= '<td>'+teams_name[group.matches[i].home_team]+' <img class="flag" src="'+teams_flag_url[group.matches[i].home_team]+'" alt="'+teams_name[group.matches[i].home_team]+'"></td>'
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score1" value="" min="0"></td>';
		    	    new_row+= '<td>-</td>';
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score2" value="" min="0"></td>';
		    	    new_row+= '<td><img class="flag" src="'+teams_flag_url[group.matches[i].away_team]+'" alt="'+teams_name[group.matches[i].away_team]+'"> '+teams_name[group.matches[i].away_team]+' </td></tr>'; 
	    		$('div#groupE').find('tbody').append(new_row);
		    }

	    });	  

	    $('a#grpF').click(function(){
	    	var group = datas.groups.f;
	    	var number_of_matches = group.matches.length;	
	    	$('div#groupF').find('tbody').html('');
		    for (var i = 0; i< number_of_matches; i++) {  	    		    	
	
		    	var new_row = '<tr><th scope="row">Match '+group.matches[i].name+'</th>';
		    	    new_row+= '<td>'+teams_name[group.matches[i].home_team]+' <img class="flag" src="'+teams_flag_url[group.matches[i].home_team]+'" alt="'+teams_name[group.matches[i].home_team]+'"></td>'
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score1" value="" min="0"></td>';
		    	    new_row+= '<td>-</td>';
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score2" value="" min="0"></td>';
		    	    new_row+= '<td><img class="flag" src="'+teams_flag_url[group.matches[i].away_team]+'" alt="'+teams_name[group.matches[i].away_team]+'"> '+teams_name[group.matches[i].away_team]+' </td></tr>'; 
	    		$('div#groupF').find('tbody').append(new_row);
		    }

	    });

	    $('a#grpG').click(function(){
	    	var group = datas.groups.g;
	    	var number_of_matches = group.matches.length;	
	    	$('div#groupG').find('tbody').html('');
		    for (var i = 0; i< number_of_matches; i++) {  	    		    	
	
		    	var new_row = '<tr><th scope="row">Match '+group.matches[i].name+'</th>';
		    	    new_row+= '<td>'+teams_name[group.matches[i].home_team]+' <img class="flag" src="'+teams_flag_url[group.matches[i].home_team]+'" alt="'+teams_name[group.matches[i].home_team]+'"></td>'
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score1" value="" min="0"></td>';
		    	    new_row+= '<td>-</td>';
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score2" value="" min="0"></td>';
		    	    new_row+= '<td><img class="flag" src="'+teams_flag_url[group.matches[i].away_team]+'" alt="'+teams_name[group.matches[i].away_team]+'"> '+teams_name[group.matches[i].away_team]+' </td></tr>'; 
	    		$('div#groupG').find('tbody').append(new_row);
		    }

	    });		    	

	    $('a#grpH').click(function(){
	    	var group = datas.groups.h;
	    	var number_of_matches = group.matches.length;	
	    	$('div#groupH').find('tbody').html('');
		    for (var i = 0; i< number_of_matches; i++) {  	    		    	
	
		    	var new_row = '<tr><th scope="row">Match '+group.matches[i].name+'</th>';
		    	    new_row+= '<td>'+teams_name[group.matches[i].home_team]+' <img class="flag" src="'+teams_flag_url[group.matches[i].home_team]+'" alt="'+teams_name[group.matches[i].home_team]+'"></td>'
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score1" value="" min="0"></td>';
		    	    new_row+= '<td>-</td>';
		    	    new_row+= '<td><input class="form-control" onchange="getValue(this)" type="number" maxlength="2" id="'+group.matches[i].name+'_score2" value="" min="0"></td>';
		    	    new_row+= '<td><img class="flag" src="'+teams_flag_url[group.matches[i].away_team]+'" alt="'+teams_name[group.matches[i].away_team]+'"> '+teams_name[group.matches[i].away_team]+' </td></tr>'; 
	    		$('div#groupH').find('tbody').append(new_row);
		    }

	    });	

	}

$(document).ready(function(){

	$('#getthevalue').click(function(){
		console.log($('#1_score1').val());
	});

});