var options;$.prototype.justifiedGallery&&(options={rowHeight:140,margins:4,lastRow:"justify"},$(".article-gallery").justifiedGallery(options)),$(document).ready(function(){var o,e,t;$("#header > #nav > ul > .icon").click(function(){$("#header > #nav > ul").toggleClass("responsive")}),$(".post").length&&(o=$("#menu"),e=$("#menu-icon"),o.show(),e.addClass("active"),e.click(function(){return o.is(":hidden")?(o.show(),e.addClass("active")):(o.hide(),e.removeClass("active")),!1}),$("#footer-post").length&&(t=0,$(window).on("scroll",function(){var o=$(window).scrollTop();t<o?$("#footer-post").hide():$("#footer-post").show(),t=o,$("#nav-footer").hide(),$("#toc-footer").hide(),$("#share-footer").hide(),o<50?$("#actions-footer > #top").hide():100<o&&$("#actions-footer > #top").show()})))});