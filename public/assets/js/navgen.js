$(document).ready(function() {
	console.log('asd');
	var topSections = $('.content-inner > section[markdown]');
	for(var i = 0; i < topSections.length; i++) {
		var currentID = topSections[i].id;
		var title = $('#'+ currentID + ' > h2').first().text();
		var li = '<li><a class="scrollto" href="#' + currentID + '">' + title + '</a>';
		var subSection = $('#'+ currentID + ' > div[id]');
		if(subSection.length > 0) {
			var ul = '<ul class="nav doc-sub-menu">';
			for(var j = 0; j < subSection.length; j++) {
				var subID = subSection[j].id;
				var subTitle = $('#'+ subID + ' > h3').first().text();
				ul += '<li><a class="scrollto" href="#'+ subID +'">' + subTitle + '</a></li>';
			}
			ul += '</ul>';
			li += ul;
		}
		li += '</li>';
		$('#doc-menu').append(li);
	}

	$('body').scrollspy('refresh');
});
