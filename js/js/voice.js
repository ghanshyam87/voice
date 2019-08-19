// JavaScript Document

$(document).ready(function(){$(".form-group-gsp").hide(),$("#sea a").on("click",function(){$("#srcbox").is(":visible")?($(".form-group-gsp").hide("slow"),$("#srch1").removeClass("fa-close").addClass("fa-search")):($(".form-group-gsp").show("slow"),$("#srch1").removeClass("fa-search").addClass("fa-close"))})});

$(window).scroll(function(){$(this).scrollTop()>60?$(".main-navbar").addClass("nav-tran"):$(".main-navbar").removeClass("nav-tran")});

$(document).ready(function(){$(".slider1").bxSlider({slideWidth:200,minSlides:2,maxSlides:5,slideMargin:40,touchEnabled:!0}),$(".bxslider-ar").bxSlider({nextSelector:"#slider-next",prevSelector:"#slider-prev",nextText:"→",prevText:"←",minSlides:2,maxSlides:5,slideWidth:110,slideMargin:10,touchEnabled:!0,Controls:!1,pager:!1}),$(".bxslider-ar1").bxSlider({nextSelector:"#slider-next2",prevSelector:"#slider-prev2",nextText:"→",prevText:"←",minSlides:2,maxSlides:5,slideWidth:110,slideMargin:10,touchEnabled:!0,Controls:!1,pager:!1})});

