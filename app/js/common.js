$(function() {

	// Всплывающее меню при скроле 
	function showDiv() {
		if ($(window).scrollTop() > 300 && $('#main_menu').data('positioned') == 'false') {
			$("#main_menu").hide().css({"position": "fixed"}).fadeIn(300).data('positioned', 'true');
			$("#main_menu").addClass('fix');
		} else if ($(window).scrollTop() <= 300 && $('#main_menu').data('positioned') == 'true') {
			$("#main_menu").fadeOut(100, function() {
				$(this).css({"position": "relative"}).show();
				$("#main_menu").removeClass('fix');
			}).data('positioned', 'false');
		}

	}
	$(window).scroll(showDiv);
	$('#main_menu').data('positioned', 'false');
	//end
	
	$('.main-nav__toggle').click(function() {
	 $(this).toggleClass('active');
	 $('#main_menu ul').toggleClass('open');
	});

	$('#main_menu ul li a').click(function() {
		$(this).parent().parent().toggleClass('open');
		$(".main-nav__toggle").toggleClass('active');
	});

	// });

	// Подключаем magnificPopup при нажатии картинкаа выпадает на полный экран
	$(".popup").magnificPopup();
	
	// E-mail Ajax Send
	// Documentation & Example: https://github.com/agragregra/uniMail

	$("#form_header").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Спасибо за заявку!");
			location.href="thanks.html"
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			// Закрытие всплывающего окна 
			$("#form_header").hide();
		});
		return false;
	});

	$("#form_team").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Спасибо за заявку!");
			location.href="thanks.html"
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			// Закрытие всплывающего окна 
			$("#form_header").hide();
		});
		return false;
	});

	$("#form_price_1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Спасибо за заявку!");
			location.href="thanks.html"
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			// Закрытие всплывающего окна 
			$("#form_header").hide();
		});
		return false;
	});

	$("#form_price_2").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Спасибо за заявку!");
			location.href="thanks.html"
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			// Закрытие всплывающего окна 
			$("#form_header").hide();
		});
		return false;
	});

	$("#form_price_3").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Спасибо за заявку!");
			location.href="thanks.html"
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			// Закрытие всплывающего окна 
			$("#form_header").hide();
		});
		return false;
	});

	$("#form_footer").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Спасибо за заявку!");
			location.href="thanks.html"
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	// Плавная навигация по landing-page
	$(".main_menu ul a[href*='#']").mPageScroll2id({ scrollSpeed: 700 });
	// $(".main_footer .button_up a[href*='#']").mPageScroll2id();
	// 	//кнопка сендвич-меню
	// $(".toggle_mnu").click(function() {
	// 	$(".sandwich").toggleClass("active");
	// });

	// $(".main_menu ul a").click(function() {
	// 	// $(".main_menu").fadeOut(600);
	// 	$(".sandwich").toggleClass("active");
	// 	$(".logo").css("opacity", "1");
	// }).append("<span>");

	// if (screen.width < 800){
	// 	$(".main_menu ul a").click(function() {
	// 		$(".main_menu").fadeOut(600);
	// 		$(".sandwich").toggleClass("active");
	// 		$(".logo").css("opacity", "1");
	// 	}).append("<span>");
	// }

	// $(".toggle_mnu").click(function() {
	// 	if ($(".main_menu").is(":visible")) {
	// 		$(".logo").css("opacity", "1");
	// 		$(".main_menu").fadeOut(600);
	// 		$(".main_menu li a").removeClass("fadeInUp animated");
	// 	} else {
	// 		$(".logo").css("opacity", ".1");
	// 		$(".main_menu").fadeIn(600);
	// 		$(".main_menu li a").addClass("fadeInUp animated");
	// 	};
	// });

});

// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });
// 		//при скролле лендинга делает активным пункты меню
// $(document).ready(function() {
// 	// $('#nav').onePageNav();
// });