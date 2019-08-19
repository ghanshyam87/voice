// JavaScript Document

$(document).ready(function() {
    $(".form-group-gsp").hide(), $("#sea a").on("click", function() {
        $("#srcbox").is(":visible") ? ($(".form-group-gsp").hide("slow"), $("#srch1").removeClass("fa-close").addClass("fa-search")) : ($(".form-group-gsp").show("slow"), $("#srch1").removeClass("fa-search").addClass("fa-close"))
    })
});


$("#sea1 a").click(function(){
    $(".navbar-header-m").hide();
	$(".search-block-m").show();
});

$("#sea6 a").click(function(){
	$(".navbar-header-m").show();
	$(".search-block-m").hide();
	
});


/*$(document).ready(function() {
    $(".form-group-gsp1").hide(), $("#sea1 a").on("click", function() {
        $("#srcbox1").is(":visible") ? ($(".form-group-gsp1").hide("slow"),
		$(".signin-block").show("fast"),
		$(".navbar-toggle-voice").show("fast"),
		$(".navbar-brand-voice").show("fast"),
		$("#mbr").removeClass("mobile-right-block1").addClass("mobile-right-block"),
	
		$(".up-mobile").show("fast"),
		
		
		$("#srch2").removeClass("fa-close").addClass("fa-search")) : ($(".form-group-gsp1").show("slow"), 
		$(".signin-block").hide("fast"),
		$(".navbar-toggle-voice").hide("fast"),
		$(".navbar-brand-voice").hide("fast"),
		$(".up-mobile").hide("fast"),
		$("#mbr").removeClass("mobile-right-block").addClass("mobile-right-block1"),
		$("#srch2").removeClass("fa-search").addClass("fa-close"))
    })
	
});


$( document ).ready(function() {      
    $("#sea1 a").on("click", function() {
		$("#srch1").removeClass("mobile-right-block").addClass("mobile-right-block1"); 
        //$(this).addClass("mobile-right-block1")  
        //$(this).removeClass("mobile-right-block");
    });  
});
*/
 

$(window).scroll(function() {
    $(this).scrollTop() > 60 ? $(".main-navbar").addClass("nav-tran") : $(".main-navbar").removeClass("nav-tran")
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

$("input:radio").on("click",function (e) {
        var inp=$(this);
    if (inp.is(".theone")) {
        inp.prop("checked",false).removeClass("theone");
    } else {
        $("input:radio[name='"+inp.prop("name")+"'].theone").removeClass("theone");
        inp.addClass("theone");
    }

});




/*$(".profile-pic").hover(function(){
    $('.profile-edit-block').show();
},function(){
    $('.profile-edit-block').hide();
});
*/

$(document).ready(function() {
        $(".slider1").bxSlider({
            slideWidth: 200,
            minSlides: 2,
            maxSlides: 5,
            slideMargin: 40,
            touchEnabled: true,
			controls: false,
			pager:false
		}), $(".sliderv-d").bxSlider({
            slideWidth: 360,
            minSlides: 1,
            maxSlides: 3,
            slideMargin: 30,
            touchEnabled: true,
			pager:false
        }), $(".bxslider-ar").bxSlider({
            nextSelector: "#slider-next",
            prevSelector: "#slider-prev",
            nextText: "→",
            prevText: "←",
            minSlides: 2,
            maxSlides: 5,
            slideWidth: 110,
            slideMargin: 10,
            touchEnabled: true,
            Controls: !1,
            pager: false
        }), $(".bxslider-ar1").bxSlider({
            nextSelector: "#slider-next2",
            prevSelector: "#slider-prev2",
            nextText: "→",
            prevText: "←",
            minSlides: 2,
            maxSlides: 5,
            slideWidth: 110,
            slideMargin: 10,
            touchEnabled: true,
            Controls: !1,
            pager: !1
        })
    }

);

$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

$(document).ready(function() {
    $('#contact_form2').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            password: {
                validators: {
                     stringLength: {
                        min: 8, message: 'Please supply min. 8 character'
                    },
                    notEmpty: {
                        message: 'Please supply min. 8 character'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});
