/* const $element = $('.eye-animation');
const imagePath = './assets/image/Girl_Card/';
const totalFrames = 90;
const animationDuration =4000;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;

// 'step' function will be called each time browser rerender the content
// we achieve that by passing 'step' as a parameter to the 'requestAnimationFrame' function
function step(startTime) {
  // 'startTime' is provided by requestAnimationName function, and we can consider it as current time
  // first of all we calculate how much time has passed from the last time when frame was update
  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
  timeFromLastUpdate = startTime - timeWhenLastUpdate;

  // then we check if it is time to update the frame
  if (timeFromLastUpdate > timePerFrame) {
    // and update it accordingly
    $element.attr('src', imagePath + `${frameNumber}.png`);
    // reset the last update time
    timeWhenLastUpdate = startTime;

    // then increase the frame number or reset it if it is the last frame
    if (frameNumber >= totalFrames) {
      frameNumber = 1;
    } else {
      frameNumber = frameNumber + 1;
    }
  }

  requestAnimationFrame(step);
} */
! function(u) {
    u(window).on("load", function() {
        u("[data-paroller-factor]").paroller(), u(".preloader").fadeOut(1e3), u(".bg_img").css("background-image", function() {
            return "url(" + u(this).data("background") + ")"
        })
        
        //requestAnimationFrame(step);
    }), u(document).ready(function() {
     
        (new WOW).init(), u(".faq-wrapper .faq-title").on("click", function(e) {
            var a = u(this).parent(".faq-item");
            a.hasClass("open") ? (a.removeClass("open"), a.find(".faq-content").removeClass("open"), a.find(".faq-content").slideUp(300, "swing")) : (a.addClass("open"), a.children(".faq-content").slideDown(300, "swing"), a.siblings(".faq-item").children(".faq-content").slideUp(300, "swing"), a.siblings(".faq-item").removeClass("open"), a.siblings(".faq-item").find(".faq-title").removeClass("open"), a.siblings(".faq-item").find(".faq-content").slideUp(300, "swing"))
        }), u("ul>li>.submenu").parent("li").addClass("menu-item-has-children"), u(".submenu").parent("li").hover(function() {
            var e, a = u(this).find("ul");
            u(a).offset().left + a.width() > u(window).width() && (e = -u(a).width(), a.css({
                left: e
            }))
        }), u(".menu li a").on("click", function(e) {
            var a = u(this).parent("li");
            a.hasClass("open") ? (a.removeClass("open"), a.find("li").removeClass("open"), a.find("ul").slideUp(300, "swing")) : (a.addClass("open"), a.children("ul").slideDown(300, "swing"), a.siblings("li").children("ul").slideUp(300, "swing"), a.siblings("li").removeClass("open"), a.siblings("li").find("li").removeClass("open"), a.siblings("li").find("ul").slideUp(300, "swing"))
        })
        var a = u(".scrollToTop");
        u(window).on("scroll", function() {
            u(this).scrollTop() < 500 ? a.removeClass("active") : a.addClass("active")
        }), u(".scrollToTop").on("click", function() {
            return u("html, body").animate({
                scrollTop: 0
            }, 500), !1
        }), u(".header-bar").on("click", function() {
            u(this).toggleClass("active"), u(".overlay").toggleClass("active"), u(".menu").toggleClass("active")
        }), u(".overlay").on("click", function() {
            u(this).removeClass("active"), u(".header-bar").removeClass("active"), u(".menu").removeClass("active")
        }), 1 <= window.scrollY && (u(".header-bottom").addClass("active"), u(".header-section-2").removeClass("plan-header"));
        var o = u(".header-section");
        u(window).on("scroll", function() {
            u(this).scrollTop() < 1 ? o.removeClass("active") : o.addClass("active")
        }), u(".tab ul.tab-menu li").on("click", function(e) {
            var a = u(this).closest(".tab"),
                o = u(this).closest("li").index();
            a.find("li").siblings("li").removeClass("active"), u(this).closest("li").addClass("active"), a.find(".tab-area").find("div.tab-item").not("div.tab-item:eq(" + o + ")").hide(10), a.find(".tab-area").find("div.tab-item:eq(" + o + ")").fadeIn(10), e.preventDefault()
        }), u(".tab-up ul.tab-menu li").on("click", function(e) {
            var a = u(this).closest(".tab-up"),
                o = u(this).closest("li").index();
            a.find("li").siblings("li").removeClass("active"), u(this).closest("li").addClass("active"), a.find(".tab-area").find("div.tab-item").not("div.tab-item:eq(" + o + ")").slideUp(400), a.find(".tab-area").find("div.tab-item:eq(" + o + ")").slideDown(400), e.preventDefault()
        }), u(".counter").countUp({
            time: 1500,
            delay: 10
        }), u(".social-icons li a").on("mouseover", function(e) {
            var a = u(this).parent("li");
            a.children("a").hasClass("active"), a.siblings("li").children("a").removeClass("active"), u(this).addClass("active")
        }), u(".testi-prev").on("click", function() {
            i.trigger("next.owl.carousel", [300])
        }),  u(".banner-1-slider").owlCarousel({
            loop: !0,
            nav: !1,
            dots: !1,
            items: 1,
            autoplay:true,
            autoplayTimeout:2000,
            mouseDrag: !1,
            touchDrag: !1,
            animateOut: "fadeOut",
            animateIn: "fadeIn"
        });
           //Faq
      $('.faq--area .faq-title').on('click', function (e) {
        var element = $(this).parent('.faq--item');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('.faq-content').removeClass('open');
          element.find('.faq-content').slideUp(300, "swing");
        } else {
          element.addClass('open');
          element.children('.faq-content').slideDown(300, "swing");
          element.siblings('.faq--item').children('.faq-content').slideUp(300, "swing");
          element.siblings('.faq--item').removeClass('open');
          element.siblings('.faq--item').find('.faq-title').removeClass('open');
          element.siblings('.faq--item').find('.faq-content').slideUp(300, "swing");
        }
      });
        $('.banner-1-slider').on('translate.owl.carousel', function(e){
            idx = e.item.index;
            if(idx==2 ){
                $('.banner-1').css('background','#000')
            }
            if(idx==4 || idx== 3 ){
                $('.banner-1').css('background','#0f036f')
            }
           
        });
        $(window).on('focus', function () {
            $('.owl-next').trigger('click');
        });
        var n = u(".banner-1-slider");
        n.owlCarousel(), u(".ban-click").on("click", function() {
            n.trigger("next.owl.carousel")
        }), u(function() {
            u("#usd-range").slider({
                range: "min",
                value: 500,
                min: 1,
                max: 500,
                slide: function(e, a) {
                    u("#usd-amount").val(a.value + " Users")
                }
            }), u("#usd-amount").val(u("#usd-range").slider("value") + " Users")
        }), u(".sponsor-slider").owlCarousel({
            loop: !0,
            margin: 0,
            responsiveClass: !0,
            nav: !1,
            dots: !1,
            autoplay:true,
            autoplayTimeout:2000,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                }
            }
        }),    u(".feat-slider").length && u(".feat-slider").owlCarousel({
            center: !0,
            items: 1,
            loop: !0,
            margin: 0,
            singleItem: !0,
            nav: !1,
            dots: !1,
            thumbs: !0,
            mouseDrag: !1,
            touchDrag: !0,
            thumbsPrerendered: !0,
            animateOut: "fadeOut",
            animateIn: "fadeIn"
        });
        var r = u(".feat-slider");
        u(".feat-prev").on("click", function() {
            r.trigger("prev.owl.carousel")
        }), u(".feat-next").on("click", function() {
            r.trigger("next.owl.carousel", [300])
        }),  
        u(".client-item-16 .client-thumb").on("mouseover", function(e) {
            var a = u(this).parent(".client-item-16");
            a.hasClass("open") ? (a.removeClass("open"), a.removeClass("active")) : (a.siblings(".client-item-16").find(".client-content").removeClass("active"), a.siblings(".client-item-16").removeClass("active"), a.children(".client-content").addClass("active"), a.addClass("active"))
        })
    })
}(jQuery);

var vsOpts = {
    $slides: $('.v-slide'),
    $list: $('.v-slides'),
    duration: 6,
    lineHeight: 70
  }
  
  var vSlide = new TimelineMax({
    paused: true,
    repeat: -1
  })
  
  vsOpts.$slides.each(function(i) {
    vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
      y: i * -1 * vsOpts.lineHeight,
      ease: Elastic.easeOut.config(1, 0.4)
    })
  })
  vSlide.play()
  /* window.setInterval(function(){    
    window.setTimeout(function(){
        console.log("1")
        $('.banner-1').css('background','#0f036f');
    },800);
 
      window.setTimeout(function(){
        console.log("3")
        $('.banner-1').css('background','#000');
    },2500); 
 },2500); */
