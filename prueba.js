var homeSectionOne = "Groopy is a social network entirely focused around digitalizing and reliving the experience of music concerts and shows.";
var homeSectionTwo = "Users can also check which concerts and festivals their friends have gone to, compare trinkets and get recommendations on shows, bands and albums.";
var aboutSectionOne = "Groopy allows users to follow their favorite bands, track tour dates and upcoming concerts. Then buy tickets to a concert. Buying tickets earns you rewards in the form of <em>Trinkets</em> and <em>Badges</em>, exclusively designed for the band.";
var aboutSectionTwo = "Groopy will be the ultimate destination for all concert-related information. Groopy is <b>not</b> designed to be a music player, but rather a discovery tool for new music, new shows and a biographical tool, where users can immortalize their concert experiences.";
$(document).ready(function(){
    $.backstretch("http://i.imgur.com/dRXUuFX.jpg");
	var sectionOne = $("#sectionOne");
	var sectionTwo = $("#sectionTwo");
	$("#about").click(function(){
		$(".active").toggleClass("active");
		$("#about").parents("li").toggleClass("active");
		$.backstretch("http://i.imgur.com/KrPKPMA.jpg", {fade:1000});
		sectionOne.fadeOut("slow");
		sectionTwo.fadeOut("slow");
		sectionOne.css('font-size', '24px');
		sectionOne.html(aboutSectionOne);
		sectionTwo.html(aboutSectionTwo);
		sectionOne.fadeIn("slow");
		sectionTwo.fadeIn("slow");
	    $(".marketing-hidden").slideDown("slow");
	});
	$("#home").click(function(){
		$(".active").toggleClass("active");
		$("#home").parents("li").toggleClass("active");
		$.backstretch("http://i.imgur.com/dRXUuFX.jpg", {fade: 1000});
		sectionOne.fadeOut("slow");
		sectionTwo.fadeOut("slow");
	    $(".marketing-hidden").slideUp("slow");
		sectionOne.css('font-size', '36px');
		sectionOne.html(homeSectionOne);
		sectionTwo.html(homeSectionTwo);
		sectionOne.fadeIn("slow");
		sectionTwo.fadeIn("slow");
	});
});
