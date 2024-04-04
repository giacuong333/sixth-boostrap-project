$(document).ready(function () {
  function handleScroll() {
    const headerObj = $("header");
    const navbarLogoObj = $(".navbar > a");
    const navbarMenuItemsObj = $(".navbar > ul > li > a");

    headerObj.removeClass("bg-white");
    headerObj.removeClass("shadow-lg");
    navbarLogoObj.removeClass("text-dark");
    navbarMenuItemsObj.removeClass("text-dark");

    if ($(window).scrollTop() > 0) {
      headerObj.addClass("bg-white");
      headerObj.addClass("shadow-lg");
      navbarLogoObj.addClass("text-dark");
      navbarMenuItemsObj.addClass("text-dark");
    }
  }

  function handleActiveNav() {
    const currentPosition = $(window).scrollTop();
    const currentHrefs = $(".navbar > ul > li > a");

    currentHrefs.each(function () {
      const currentHref = $(this).attr("href");
      const idEOfHref = $(currentHref);

      if (idEOfHref.position().top <= currentPosition && idEOfHref.outerHeight() + idEOfHref.position().top >= currentPosition) {
        currentHrefs.removeClass("active");
        $(this).addClass("active");
      }
    });
  }
  handleActiveNav();

  // When scrolling
  $(window).scroll(() => {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      handleScroll();
    }

    handleActiveNav();
  });

  // When clicking
  const navItemObjs = $(".navbar > ul > li > a");
  navItemObjs.each(function () {
    $(this).click(function (e) {
      e.preventDefault();
      const currentHref = $(this).attr("href");
      const idEOfHref = $(currentHref);

      navItemObjs.removeClass("active");
      $(this).addClass("active");

      $(window).scrollTop(idEOfHref.position().top);

      handleActiveNav();
    });
  });
});
