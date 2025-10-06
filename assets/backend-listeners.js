var reassignVars = function () {
  html_tag = document.documentElement;
  root_styles = html_tag;
  top_id = document.querySelector('.shopify-section-header');
  nav_top_id = top_id.querySelector('#nav-top') || null;
  header_outer = top_id.querySelector('#header-outer');
  header_id = header_outer.querySelector('#header');
  header_inner = top_id.querySelector('#header-inner');
  logo_id = top_id.querySelector('#logo');
  logo_img = logo_id.querySelector('img');
  search_id = top_id.querySelector('#search');
  nav_outer = header_outer.querySelector('#nav-outer');
  nav_bar_id = header_outer.querySelector('#nav-bar');
  nav_id = header_outer.querySelector('#nav');
  content_id = document.getElementById('content');
  html_width = html_tag.getBoundingClientRect().width;
  nav_main = nav_bar_id ?? nav_id;
  footer_id = document.querySelector('.shopify-section-footer');
  nav_user_id = document.getElementById('nav-user');
  root_id = document.getElementById('root');
  all_list_drop = document.querySelectorAll('.l4dr');
  neq = document.querySelectorAll('a[aria-controls="nav"]');
  if (search_id) {
      search_input = search_id.getElementsByTagName('input');
  }
}
document.addEventListener("shopify:section:load", function (event) {
  var section = event.srcElement;
  console.log("section load:", section);
  if (Shopify.visualPreviewMode && section.closest('shopify-editor') != null) {
    section.closest('shopify-editor').id = 'root';
  }
  reassignVars();
  window.dispatchEvent(createColsEvt);
  if (event.srcElement.classList.contains('shopify-section-announcement-bar-container')) {
    window.dispatchEvent(stickyNavEvt);
  }
  if (event.srcElement.getElementsByClassName("l4us").length) {
    window.dispatchEvent(listUspSliderEvt);
  }
  if (event.srcElement.getElementsByClassName("f8vl").length) {
    window.dispatchEvent(accordeonEvt);
    window.dispatchEvent(semanticInputEvt);
    window.dispatchEvent(formValidateEvt);
    ajaxCart.init();
  }
  if (event.srcElement.classList.contains("shopify-section-header")) {
    userNavIntoNavExecuted = false;
    footerIntoNavExecuted = false;
    html_tag.classList.remove('t1sr');
    html_tag.classList.remove('t1sn');
    html_tag.classList.remove('t1nb');
    html_tag.classList.remove('t1nn');
    html_tag.classList.remove('t1mn');
    if (html_tag.classList.contains('m2a')) {
      html_tag.classList.remove('m2a');
      if (mediaMax1000.matches) {
        nav_burger();
      }
    } else {
      html_tag.classList.remove('m2a');
    }
    window.dispatchEvent(navScrollEvt);
    window.dispatchEvent(navEvt);
    window.dispatchEvent(navtopEvt);
    window.dispatchEvent(searchClassesEvt);
    window.dispatchEvent(searchEvt);
    window.dispatchEvent(stickyNavEvt);
    window.dispatchEvent(topEvt);
    window.dispatchEvent(popupsEvt);
  }
  if (event.detail.sectionId.endsWith("main-password") || event.detail.sectionId.endsWith("main-giftcard")) {
    window.dispatchEvent(backgroundEvt);
  }
  if (event.srcElement.getElementsByClassName("product-recommendations").length) {
    setTimeout(function () {
      window.dispatchEvent(recommendedProductsEvt);
    }, 50);
  }
  if (event.srcElement.querySelector(".l4cl.slider") != null) {
    window.dispatchEvent(listCollectionSliderEvt);
  }
  if (event.srcElement.getElementsByClassName("l4cl").length) {
    window.dispatchEvent(ratingsEvt);
    window.dispatchEvent(formZindexEvt);
    window.dispatchEvent(semanticInputEvt);
    window.dispatchEvent(schemeTooltipEvt);
    window.dispatchEvent(popupsEvt);
    window.dispatchEvent(listScrollableEvt);
    window.dispatchEvent(productcardVariantsEvt);
    upsellPopup.init();
    window.check_limit_event();
    ajaxCart.init();
    quickShop.init();
  }
  if (event.srcElement.getElementsByClassName("l4hs").length) {
    window.dispatchEvent(hotspotsEvt);
    ajaxCart.init();
    quickShop.init();
  }
  if (event.srcElement.getElementsByClassName("m6tb").length) {
    window.dispatchEvent(moduleTabsEvt);
  }
  if (event.srcElement.getElementsByClassName("m6fr").length) {
    window.dispatchEvent(moduleFeaturedSliderEvt);
  }
  if (event.srcElement.querySelector(".l4ft.cols") != null) {
    window.dispatchEvent(masonryEvt);
  }
  if (event.srcElement.querySelector(".l4ft.static") != null) {
    window.dispatchEvent(fancyboxEvt);
  }
  if (event.srcElement.getElementsByClassName("m6cu").length || event.srcElement.getElementsByClassName('countdown-container').length) {
    window.dispatchEvent(countdownEvt);
  }
  if (event.srcElement.getElementsByClassName("l4ts").length) {
    window.dispatchEvent(ratingsEvt);
    window.dispatchEvent(listTestimonialsSliderEvt);
  }
  if (event.srcElement.getElementsByClassName("img-compare").length) {
    window.dispatchEvent(imageCompareEvt);
  }
  if (event.srcElement.getElementsByClassName("l4st").length) {
    window.dispatchEvent(listStaticSliderEvt);
  }
  if (event.srcElement.querySelectorAll("input[type='date']").length) {
    window.dispatchEvent(inputDateEvt);
  }
  if (event.srcElement.getElementsByClassName("m6lm").length) {
    window.dispatchEvent(heightLimitEvt);
    linkMore();
  }
  if (event.srcElement.getElementsByClassName("n6as").length) {
    window.dispatchEvent(navAsideEvt);
  }
  if (event.srcElement.getElementsByClassName("f8pr-urgency").length) {
    window.dispatchEvent(rangeSliderEvt);
  }
  if (event.srcElement.querySelectorAll('video.lazy').length) {
    window.dispatchEvent(lazyVideoEvt);
  }
  console.log(event.detail.sectionId);
  if (event.detail.sectionId.includes("recently_viewed") || event.detail.sectionId.includes("recently-viewed")) {
    window.dispatchEvent(recentlyViewedProductsEvt);
  }
  if (event.detail.sectionId.endsWith("sticky-add-to-cart")) {
    window.dispatchEvent(productVariantsEvt);
    window.dispatchEvent(semanticSelectEvt);
    window.dispatchEvent(stickyAddToCartEvt);
    ajaxCart.init();
  }
  if (event.srcElement.getElementsByClassName('m6pr').length) {
    window.dispatchEvent(stickyAddToCartEvt);
    window.dispatchEvent(ratingsEvt);
    window.dispatchEvent(productVariantsEvt);
    window.dispatchEvent(listProductSliderEvt);
    window.dispatchEvent(listDropEvt);
    window.dispatchEvent(semanticSelectEvt);
    window.dispatchEvent(showHideDataElementEvt);
    window.dispatchEvent(sellingplansEvt);
    window.dispatchEvent(pickupAvailabilityEvt);
    window.dispatchEvent(modulePanelEvt);
    window.dispatchEvent(modulePanelAnchorEvt);
    window.dispatchEvent(formZindexEvt);
    window.dispatchEvent(fancyboxEvt);
    window.dispatchEvent(dataChangeEvt);
    window.dispatchEvent(schemeTooltipEvt);
    window.dispatchEvent(popupsEvt);
    window.dispatchEvent(moduleProductBackgroundEvt);
    linkMore();
  }
  if (event.detail.sectionId.endsWith("main-collection") || event.detail.sectionId.endsWith("main-search") ) {
    console.log(2);
    window.dispatchEvent(rangeSliderEvt);
    window.dispatchEvent(initFiltersEvt);
    window.dispatchEvent(filtersEvt);
    window.dispatchEvent(collectionSortEvt);
    window.dispatchEvent(collectionLoadMoreEvt);
    linkMore();
    // window.dispatchEvent(gridListSwitchEvt);
    // window.dispatchEvent(mobileFiltersEvt);
  }
  if (event.detail.sectionId.endsWith("main-giftcard")) {
    if (document.getElementById("background")) {
      document.documentElement.classList.add("t1as");
      document.documentElement.classList.remove("t1pl");
    } else {
      document.documentElement.classList.remove("t1as");
      document.documentElement.classList.add("t1pl");
    }
  }
  if (event.srcElement.querySelectorAll('a[data-shopthelook]').length) {
    shopTheLookDrawer.init();
    let panel =  document.querySelector('#add-products-to-banner ul');
    if(panel.closest('.m6pn').classList.contains('toggle')) {
      let block = panel.className.split(' ')[0];
      panel.style.opacity = 0;
      block = document.querySelector(`.${block} [data-shopthelook]`);
      shopTheLookDrawer.load(block);
    }
  }
});

document.addEventListener("shopify:block:select", function (event) {
  var section = document.getElementById(
    "shopify-section-" + event.detail.sectionId + ""
  );

  html_tag.classList.remove('editor-nav-hover')
  if (section.classList.contains('shopify-section-header') && event.srcElement.classList.contains('sub') && document.documentElement.getBoundingClientRect().width > 1000) {
    Array.from(section.querySelectorAll('.sub.toggle')).forEach(function (el) {
      el.classList.remove('toggle');
    });
    navSubHover(event.srcElement);
    event.srcElement.classList.add('toggle');
    html_tag.classList.add('editor-nav-hover')
  }

  if (section.querySelector(".m6fr") != null) {
    var slideIndex = event.srcElement.dataset.slideIndex;
    var swiper = section.querySelector(".m6fr .swiper-outer").swiper;
    if (swiper != null) {
      swiper.slideTo(slideIndex, 500);
    }
  }
  if (section.querySelector(".l4cl.slider") != null) {
    var slideIndex = event.srcElement.dataset.slideIndex;
    if (slideIndex) {
      var swiper = section.querySelector(".l4cl.slider .swiper-outer").swiper;
      if (swiper != null) {
        swiper.slideTo(slideIndex, 500);
      }
    }
  }
  if (section.querySelector(".accordion-a") != null) {
    window.dispatchEvent(accordeonEvt);
    Array.from(section.querySelectorAll("details")).forEach(function (el) {
      el.removeAttribute("open");
    });
    event.srcElement.setAttribute("open", "");

  }
});
document.addEventListener("shopify:section:reorder", function (event) {
  reassignVars();
  window.dispatchEvent(createColsEvt);
});