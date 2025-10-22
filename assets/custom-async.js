const mediaMax760 = window.matchMedia('(max-width: 760px)');
const mediaMin760 = window.matchMedia('(min-width: 761px)');
const mediaTablet = window.matchMedia('(min-width: 761px) and (max-width: 1000px)');

let footer_id = document.querySelector('.shopify-section-footer');
let nav_user_id = document.getElementById('nav-user');
let root_id = document.getElementById('root');
let totop_id = document.getElementById('totop');
let all_list_drop = document.querySelectorAll('.l4dr');
let neq = document.querySelectorAll('a[aria-controls="nav"]');
var search_input,
    changeEvent = new Event('change'),
    navEvt = new CustomEvent("nav"),
    navtopEvt = new CustomEvent("navTop"),
    stickyNavEvt = new CustomEvent("stickyNav"),
    searchEvt = new CustomEvent("search"),
    semanticInputEvt = new CustomEvent("semanticInput"),
    semanticSelectEvt = new CustomEvent("semanticSelect"),
    moduleProductBackgroundEvt = new CustomEvent("moduleProductBackground"),
    fancyboxEvt = new CustomEvent("fancybox"),
    productVariantsEvt = new CustomEvent("productVariants"),
    productcardVariantsEvt = new CustomEvent("productcardVariants"),
    stickyAddToCartEvt = new CustomEvent("stickyAddToCart"),
    sellingplansEvt = new CustomEvent("sellingplans"),
    pickupAvailabilityEvt = new CustomEvent("pickupAvailability"),
    productBuybarBtnEvt = new CustomEvent("productBuybarBtn"),
    recommendedProductsEvt = new CustomEvent("recommendedProducts"),
    recentlyViewedProductsEvt = new CustomEvent("recentlyViewedProducts"),
    modulePanelEvt = new CustomEvent("modulePanel"),
    modulePanelAnchorEvt = new CustomEvent("modulePanelAnchor"),
    accordeonEvt = new CustomEvent("accordeon"),
    alertsEvt = new CustomEvent("alerts"),
    ratingsEvt = new CustomEvent("ratings"),
    mainProductSlideToEvt = new CustomEvent("mainProductSlideTo"),
    moduleFeaturedSlideToEvt = new CustomEvent("moduleFeaturedSlideTo"),
    listCollectionSliderUpdateEvt = new CustomEvent("listCollectionSliderUpdate"),
    showHideDataElementEvt = new CustomEvent("showHideDataElement"),
    listDropEvt = new CustomEvent("listDrop"),
    rangeSliderEvt = new CustomEvent("rangeSlider"),
    masonryEvt = new CustomEvent("masonry"),
    countdownEvt = new CustomEvent("countdown"),
    collectionSortEvt = new CustomEvent("collectionSort"),
    localizationFormEvt = new CustomEvent("localizationForm"),
    initFiltersEvt = new CustomEvent("initFilters"),
    collectionLoadMoreEvt = new CustomEvent("collectionLoadMore"),
    navAsideEvt = new CustomEvent("navAside"),
    filtersEvt = new CustomEvent("filters"),
    tooltipEvt = new CustomEvent("tooltip"),
    updateSlidersEvt = new CustomEvent("updateSliders"),
    popupsEvt = new CustomEvent("popups"),
    announcementEvt = new CustomEvent("announcement"),
    dataChangeEvt = new CustomEvent("dataChange"),
    removeSDCcssEvt = new CustomEvent("removeSDCcss"),
    schemeTooltipEvt = new CustomEvent("schemeTooltip"),
    listScrollableEvt = new CustomEvent("listScrollable"),
    imageCompareEvt = new CustomEvent("imageCompare"),
    inputDateEvt = new CustomEvent("inputDate"),
    listCartEvt = new CustomEvent("listCart"),
    heightLimitEvt = new CustomEvent("heightLimit"),
    hotspotsEvt = new CustomEvent("hotspots"),
    maqrueeEvt = new CustomEvent("maqruee"),
    bindInputEvt = new CustomEvent("bindInput"),
    muteVideoEvt = new CustomEvent("muteVideo"),
    formValidateEvt = new CustomEvent("formValidate"),
    navScrollEvt = new CustomEvent("navScroll");

if (search_id) {
  search_input = search_id.getElementsByTagName('input');
}

function close_dropdown(element) {
  html_tag.classList.remove('user-form-active');
  if (element.classList.contains('toggle') && !element.classList.contains('mtoggle')) {
    element.classList.remove('toggle');
    element.setAttribute('aria-expanded', false);
    return true;
  }
  return false;
}

/**
 * Close dropdown element
 * @param {HTMLElement} element Parent element that receives the aria-expanded attribute
 */
function toggle_dropdowns_simple(el) {
  if (el.classList.contains('toggle')) {
    el.classList.remove('toggle');
    //el.parentElement.setAttribute('aria-expanded', false);
  } else {
    el.classList.add('toggle');
    //el.parentElement.setAttribute('aria-expanded', true);
  }
}

function close_mobile_nav() {
  html_tag.classList.remove('m2a', 'nav-hover');
  Array.from(document.querySelectorAll('a[aria-controls="nav"]')).forEach(function (el) {
    el.setAttribute('aria-expanded', false);
  });
  /*enquire.register('screen and (max-width: 1000px)', function () {
      Array.from(document.getElementById('nav').querySelectorAll('a')).forEach(function (el) {
          el.setAttribute('tabindex', -1);
      });
  });*/
  function updateTabIndex() {
    if (mediaMax1000.matches) {
      Array.from(document.getElementById('nav').querySelectorAll('a')).forEach(function (el) {
        el.setAttribute('tabindex', '-1');
      });
    }
  }

  updateTabIndex();
  mediaMax1000.addEventListener('change', updateTabIndex);
}

function remove_active_submenus(el) {
  Array.from(el).forEach(function (el) {
    const parentElement = el.parentElement;
    if (parentElement.classList.contains('toggle')) {
      parentElement.classList.remove('toggle');
      parentElement.setAttribute('aria-expanded', false);
    }
  });
}

function clear_mobile_nav() {
  if (nav_top_id) {
    remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
  }
  if (nav_user_id) {
    remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
  }
  if (nav_bar_id) {
    remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
  }
  if (nav_id) {
    setTimeout(function () {
      Array.from(nav_id.querySelectorAll('a.toggle')).forEach(el => {
        if (el.parentElement.classList.contains('toggle')) {
          el.parentElement.classList.remove('toggle');
        }
      });
      if (nav_id.hasAttribute('data-type')) {
        nav_id.removeAttribute('data-type');
      }
      Array.from(nav_id.querySelectorAll('li.mtoggle')).forEach(function (el) {
        el.classList.remove('mtoggle');
      });
      Array.from(nav_id.querySelectorAll('ul.ul-toggle')).forEach(function (el) {
        el.classList.remove('ul-toggle');
      });
      Array.from(nav_id.getElementsByClassName('header-before')).forEach(function (el) {
        el.classList.remove('data-title-active');
      });
    }, 400);
  }
}

function toggle_dropdowns(el, selector) {
  var j = document.querySelectorAll(selector),
      i;
  html_tag.classList.remove('user-form-active');
  if (el.parentElement.classList.contains('toggle')) {
    el.parentElement.classList.remove('toggle');
    el.parentElement.setAttribute('aria-expanded', false);
    if (el.parentNode.classList.contains('has-form') && !el.parentNode.classList.contains('currency') && !el.parentNode.classList.contains('lang')) {
      html_tag.classList.remove('user-form-active');
    }
  } else {
    if (selector !== undefined) {
      Array.from(document.querySelectorAll(selector + ' li.toggle')).forEach(function (em) {
        em.classList.remove('toggle');
      });
    }
    if (el.parentNode.classList.contains('has-form')) {
      setTimeout(function () {
        html_tag.classList.add('user-form-active');
      }, 0);
    }
    Array.from(el.closest('ul').children).forEach(function (el) {
      el.classList.remove('toggle');
    });
    el.parentElement.classList.add('toggle');
    el.parentElement.setAttribute('aria-expanded', true);
    el.parentElement.focus();
  }
}
/**
 * @04
 * This function is super big and it's doing a lot of stuffs! If you start moving around to specific functions some pieces of that code, you'll end up with a smaller function and it will be easier to do future changes
 */

// #nav-top
window.addEventListener("navTop", function(evt) {
  if (nav_top_id) {
    // Handle #nav-top submenus
    Array.from(nav_top_id.querySelectorAll('a.toggle')).forEach(function (el) {

      function click_handler(el) {
        close_mobile_nav();
        if (nav_id) {
          remove_active_submenus(nav_id.querySelectorAll('a.toggle'));
        }
        if (nav_user_id) {
          remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
        }
        toggle_dropdowns(el);
      }
      el.addEventListener('click', function (e) {
        click_handler(el);
        e.preventDefault();
      });
      el.addEventListener('keyup', function (e) {
        if (e.key === ' ') {
          click_handler(el);
          e.preventDefault();
        }
      });
      if (!isMobile) {
        const nextSibling = el.nextElementSibling;
        if (nextSibling) {
          nextSibling.addEventListener('mouseleave', function () {
            close_dropdown(el.parentElement);
          });
        }
      }
    });
  }
});
window.dispatchEvent(navtopEvt);


// If #nav & .shopify-section-footer exists, create a contact module for mobile menu
var footerIntoNavExecuted = false;

function footerIntoNav() {
  if (!footerIntoNavExecuted && footer_id && nav_id) {
    const f_m6cn = footer_id.getElementsByClassName('m6cn');
    const f_l4sc = footer_id.getElementsByClassName('l4sc');

    function appendIfAbsent(className, sourceElements) {
      if (!nav_id.getElementsByClassName(className).length && sourceElements.length) {
        nav_id.appendChild(sourceElements[0].cloneNode(true));
      }
    }

    appendIfAbsent('m6cn', f_m6cn);
    appendIfAbsent('l4sc', f_l4sc);

    Array.from(nav_user_id.querySelectorAll('ul[data-type="user-nav"] > li:not(.cart, .lang, .currency) img:not(.desktop-only)')).forEach(function (el) {
      const cloneMe = el.parentNode.cloneNode(true);
      cloneMe.classList.add('has-img');
      cloneMe.classList.remove('mobile-hide');
      nav_id.appendChild(cloneMe);
    });
    footerIntoNavExecuted = true;
  }
}

// Run mobile lang/currency dropdown when related lang/currency icon in the footer is clicked
document.addEventListener('click', function (event) {
  if (event.target.matches('.shopify-section-footer li.lang a[aria-controls="nav"], .shopify-section-footer li.currency a[aria-controls="nav"], .shopify-section-footer li.lang a[aria-controls="nav"] *, .shopify-section-footer li.currency a[aria-controls="nav"] *')) {
    const targetLi = event.target.closest('li');
    if (targetLi && (targetLi.classList.contains('lang') || targetLi.classList.contains('currency'))) {
      const category = targetLi.classList.contains('lang') ? 'lang' : 'currency';
      const nv_cl = nav_id.querySelector(`.${category} > a.toggle:not(.toggle-back)`);

      if (nv_cl) {
        nv_cl.click();
        setTimeout(() => nv_cl.focus(), 100);
      }
    }
    event.preventDefault();
  }
});


// If #nav exists, create a #nav-user for mobile menu
var userNavIntoNavExecuted = false;

function userNavIntoNav() {
  if (!userNavIntoNavExecuted) {
    if (nav_id) {
      // Detect if category images are in use
      const ni = document.querySelectorAll('#nav > ul:first-child > li > a > img, #nav-bar > ul:first-child > li > a > img, #nav > ul:first-child > li > a > .img, #nav-bar > ul:first-child > li > a > .img');
      if (ni.length) {
        Array.from(ni).forEach(function (el) {
          var cl = 'category-img';
          el.closest('[id^="nav"]').classList.add(cl);
          el.closest('ul').classList.add(cl);
        });
      }

      const nb = document.createElement('a');
      nb.classList.add('close', 'close-nav');
      nb.innerHTML += 'Close';
      nb.setAttribute('href', './');
      nav_id.appendChild(nb);

      // #nav submenu
      if (nav_id.hasAttribute('aria-label')) {
        const nf = createElementWithClass('div', 'header');
        nf.innerHTML = nav_id.getAttribute('aria-label');
        nav_id.prepend(nf);
      }

      const ng = document.createElement('div');
      ng.classList.add('header-before', 'header');
      nav_id.prepend(ng);

      // Create a back link for mobile menu
      const processedElements = [];
      Array.from(document.querySelectorAll('#nav > ul > li > a.toggle')).forEach(function (el) {
        const clone_me = el.cloneNode(true);
        clone_me.classList.add('toggle-back');
        el.parentElement.prepend(clone_me);
        if (!processedElements.includes(el)) {
          const clone_me = el.cloneNode(true);
          clone_me.classList.add('toggle-back');
          el.parentElement.prepend(clone_me);
          processedElements.push(el);
        }
      });

      const ndContainer = nav_id.querySelector('ul[data-type]');

      if (ndContainer) {
        var nd = ndContainer.children;

        // Create nested desktop nav
        const na = document.createElement('ul');
        na.classList.add('inner', 'ul-inner');
        nav_id.appendChild(na);

        Array.from(nd).forEach(function (el) {
          na.appendChild(el.cloneNode(true));
        });

        na.addEventListener('mouseleave', function () {
          nav_id.classList.remove('ul-hover');
        });
      }
      if (nav_bar_id) {
        const nav_bar_li = [];
        const nav_id_btn = document.querySelectorAll('#header > .link-btn a, #header-inner > .link-btn a');
        Array.from(document.querySelectorAll('#nav-bar > ul > li')).forEach((el) => {
          const clone_me = el.cloneNode(true);
          clone_me.classList.add('nav-bar-element');
          nav_bar_li.push(clone_me);
        });
        if (nav_id_btn.length) {
          const nav_id_ul = document.querySelector('#nav > ul');
          const nav_id_sub_cont = document.createElement('li');
          nav_id_sub_cont.classList.add('nav-bar-element', 'nav-bar-element-main');
          if (document.querySelector('#nav-bar > ul > li:not(.show-all)') === null) {
            nav_id_sub_cont.classList.add('is-empty');
          }
          nav_id_sub_cont.innerHTML = '<a href="./" class="toggle-wide"><span>' + nav_id_btn[0].textContent + '</span> <span class="hidden">alle</span></a> <ul></ul>';
          if (nav_id_btn[0].classList.contains('mobile-hide')) {
            nav_id_sub_cont.classList.add('mobile-hide');
          }
          if (nav_id_btn[0].classList.contains('mobile-text-uppercase')) {
            nav_id_sub_cont.classList.add('mobile-text-uppercase');
          }
          const ariaLabel = nav_bar_id.getAttribute('aria-label');
          if (ariaLabel) {
            nav_id_sub_cont.querySelector('span.hidden').innerHTML = ariaLabel;
          }
          nav_id_ul.prepend(nav_id_sub_cont);
          nav_bar_li.forEach(function (el) {
            nav_id_ul.appendChild(el);
          });
        }
      }
      Array.from(document.querySelectorAll('#nav > ul > li > a.toggle')).forEach(function (el) {
        const clone_me = el.cloneNode(true);
        clone_me.classList.add('toggle-back');
        el.parentElement.prepend(clone_me);
      });
    }

    if (nav_user_id && nav_id) {
      const userNavElement = nav_user_id.querySelector('ul[data-type]');

      if (userNavElement) {
        const clonedUserNav = userNavElement.cloneNode(true);
        clonedUserNav.classList.add('nav-user');

        const removeElements = clonedUserNav.querySelectorAll('.currency, .lang');
        removeElements.forEach(element => element.remove());

        nav_id.appendChild(clonedUserNav);
      }

      const nav_user_form = nav_id.querySelector('.user-login');
      if (nav_user_form) {
        nav_user_form.remove();
      }
    }
    // If #nav exists, create a #nav-top for mobile menu
    if (nav_id && nav_top_id && !nav_id.querySelectorAll('ul.nav-top').length) {
      const navTopElement = nav_top_id.querySelector('ul[data-type]');

      if (navTopElement) {
        const cloneMe = navTopElement.cloneNode(true);
        cloneMe.classList.add('nav-top');
        nav_id.appendChild(cloneMe);
        nav_id.querySelectorAll('.currency .localization-form a').forEach(function (el) {
          el.classList.remove('listening');
        })
        window.dispatchEvent(localizationFormEvt);
      }
    }
    userNavIntoNavExecuted = true;
  }
}

// moved to custom-async.js (.m2a)
function customMega() {
  if (!nav_main) return;

  requestAnimationFrame(() => {
    root_styles.style.setProperty(
        '--mega_nav_mah',
        (window.innerHeight - nav_main.getBoundingClientRect().bottom) + 'px'
    );
  });
}

// #nav-bar
function nav_burger() {
  html_tag.classList.add('has-nav');
  Array.from(nav_id.querySelectorAll('a.toggle')).forEach(function (el) {
    el.parentElement.classList.remove('toggle');
  });
  if (nav_top_id) {
    remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
  }
  if (nav_user_id) {
    remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
  }
  if (nav_bar_id) {
    remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
  }
  html_tag.classList.remove('nav-hover');
  if (footer_id) {
    function checkLangCurrency(footerSelector, topSelector, className) {
      const footerElement = footer_id.querySelector(footerSelector);
      const topElement = top_id.querySelector(topSelector);
      if (!footerElement && topElement) {
        html_tag.classList.add(className);
      }
    }
    checkLangCurrency('li.lang', 'li.lang.mobile-nav-only.mobile-only', 'no-footer-lang');
    checkLangCurrency('li.currency', 'li.currency.mobile-nav-only.mobile-only', 'no-footer-curr');
  }
  if (html_tag.classList.contains('m2a')) {
    close_mobile_nav();
  } else {
    customMega();
    userNavIntoNav();
    footerIntoNav();
    html_tag.classList.add('m2a');
    html_tag.classList.remove('search-compact-active', 'search-full', 'search-full-mode', 'user-form-active');
    if (search_id) {
      search_id.classList.remove('full', 'has-text');
    }
    nav_id.querySelectorAll('a').item(1).focus();
    setTimeout(function () {
      nav_id.querySelectorAll('li:not(.nav-bar-element) > a:not(.toggle)')[0].focus();
    }, 100);
    Array.from(neq).forEach(function (el) {
      el.setAttribute('aria-expanded', true);
    });
    /*enquire.register('screen and (max-width: 1000px)', function () {
      Array.from(nav_id.querySelectorAll('a')).forEach(function (el) {
        el.removeAttribute('tabindex');
      });
    });*/
    function updateTabIndex() {
      if (mediaMax1000.matches) {
        Array.from(nav_id.querySelectorAll('a')).forEach(el => {
          el.removeAttribute('tabindex');
        });
      }
    }

    updateTabIndex();
    mediaMax1000.addEventListener('change', updateTabIndex);
    new_css('css-menu', window.filepaths['async_menu_css']);
  }
}

function navSubHover(el) {
  var nav_id = document.getElementById('nav');
  if (el.classList.contains('sub') || el.classList.contains('show-all')) {
    html_tag.classList.add('nav-hover');
  } else {
    html_tag.classList.remove('nav-hover');
  }
  const d = el.dataset.index;
  const p = el.closest('ul');
  if (el.classList.contains('sub')) {
    var ulInner = nav_id.querySelector('.ul-inner');
    if (ulInner && ulInner.children.length > 0) {
      Array.from(ulInner.children).forEach(function (el) {
        el.classList.remove('hover');
        el.setAttribute('aria-expanded', false);
        if (el.matches('[data-index="' + d + '"]')) {
          el.classList.add('hover');
          /*if (el.querySelectorAll('ul ul a:not(.toggle)')[0] !== undefined) {
            setTimeout(function () {
              el.querySelectorAll('ul ul a:not(.toggle)')[0].focus();
             }, 100);
          }*/
          el.setAttribute('aria-expanded', true);
        }
      });
    }
    Array.from(p.children).forEach(function (el) {
      el.parentElement.parentElement.classList.add('ul-hover');
      el.classList.remove('hover');
      el.setAttribute('aria-expanded', false);
    });
    el.classList.add('hover');
    Array.from(el.children).forEach(function (em) {
      if (em.tagName.toLowerCase() === 'ul') {
        p.parentElement.setAttribute('data-items', em.children.length);
        if (em.parentElement.classList.contains('sub-classic') && em.children.length > 5) {
          p.parentElement.setAttribute('data-items', 1);
        }
      }
    });
    el.setAttribute('aria-expanded', true);
  } else {
    Array.from(p.children).forEach(function (el) {
      el.removeAttribute('aria-expanded', false);
    });
  }
}

window.addEventListener("nav", function(evt) {
  var s,
      t;

  if (nav_id && !isMobile) {
    nav_id.addEventListener('mouseover', function () {
      new_css('css-menu', window.filepaths['async_menu_css']);
    });
  }
  if (top_id) {
    Array.from(top_id.querySelectorAll('a.toggle')).forEach(function (el) {
      el.addEventListener('click', function () {
        new_css('css-menu', window.filepaths['async_menu_css']);
      });
    });
  }
  if (nav_bar_id || nav_id ) {
    html_tag.classList.remove('t1mn');
    html_tag.classList.remove('t1nn');
  } else {
    html_tag.classList.add('t1mn');
    html_tag.classList.add('t1nn');
  }

  if (nav_bar_id) {
    append_url(nav_bar_id.children[0], 'Close', 'close');
    Array.from(nav_bar_id.querySelectorAll('a.toggle')).forEach(function (el) {
      el.parentElement.classList.add('sub');

      function click_handler(el) {
        close_mobile_nav();
        if (nav_id) {
          remove_active_submenus(nav_id.querySelectorAll('a.toggle'));
        }
        if (nav_top_id) {
          remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
        }
        if (nav_user_id) {
          remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
        }
        toggle_dropdowns(el);
        if (nav_bar_id.querySelectorAll('[data-type="horizontal-nav"] > li.sub.toggle').length) {
          html_tag.classList.add('nav-hover');
        } else {
          html_tag.classList.remove('nav-hover');
        }
      };
      el.addEventListener('click', function (e) {
        click_handler(el);
        e.preventDefault();
      });
      el.addEventListener('keyup', function (e) {
        if (e.key === ' ') {
          click_handler(el);
          e.preventDefault();
        }
      });
    });

    if (!isMobile) {
      nav_bar_id.addEventListener('mouseover', function () {
        new_css('css-menu', window.filepaths['async_menu_css']);
      });

      Array.from(document.querySelectorAll('#nav-bar > ul > li')).forEach((el) => {
        el.addEventListener('mouseover', function () {
          html_tag.classList.remove('m2a');
        });
      });
    }

    const nav_id_btn = document.querySelectorAll('#header > .link-btn a, #header-inner > .link-btn a');
    if (nav_id_btn.length) {
      html_tag.classList.remove('t1nb');
    } else {
      html_tag.classList.add('t1nb');
    }

    // handle mouseovers
    if (!isMobile && nav_bar_id.children[0] !== undefined) {
      Array.from(nav_bar_id.children[0].children).forEach(function (el) {
        el.addEventListener('mouseover', function (e) {
          if (el.classList.contains('sub') || el.classList.contains('show-all')) {
            html_tag.classList.add('nav-hover');
          } else {
            html_tag.classList.remove('nav-hover');
          }
        });
        el.addEventListener('mouseleave', function (e) {
          html_tag.classList.remove('nav-hover');
        });
      });
    }
  }

  if (nav_id) {
    Array.from(document.querySelectorAll('#nav > ul > li > a.toggle')).forEach(function (el) {
      if (!el.parentNode.querySelectorAll('li > ul:first-child').length) {
        el.parentElement.classList.add('sub-classic');
      }
    });

    // Handle #nav submenus for mobile
    Array.from(nav_id.querySelectorAll('a.toggle')).forEach(function (el) {
      el.parentElement.classList.add('sub');
    });

    const ndContainer = nav_id.querySelector('ul[data-type]');

    if (ndContainer) {
      var nd = ndContainer.children;

      Array.from(nd).forEach(function (el, index) {
        el.setAttribute('data-index', nd.length - index);
      });

      // #nav hover
      Array.from(nd).forEach(function (el) {
        if (!isMobile) {
          el.addEventListener('mouseover', function (e) {
            navSubHover(el);
            e.preventDefault();
          });
          el.addEventListener('mouseleave', function (e) {
            html_tag.classList.remove('nav-hover');
          });
        }
        Array.from(el.querySelectorAll('a.toggle:not(.toggle-back)')).forEach(function (em) {
          em.addEventListener('click', function (e) {
            navSubHover(el);
          });
        });
      });
      if (!isMobile) {
        Array.from(nd).forEach(function (el) {
          el.addEventListener('mouseover', function (e) {
            if (el.classList.contains('sub') || el.classList.contains('show-all')) {
              html_tag.classList.add('nav-hover');
            } else {
              html_tag.classList.remove('nav-hover');
            }
          });
          el.addEventListener('mouseleave', function (e) {
            html_tag.classList.remove('nav-hover');
          });
        });
      }
    }

    // #nav burger
    if (!html_tag.classList.contains('t1nn')) {
      html_tag.classList.remove('t1nn');
    }
  }
  if (neq) {
    const getDist = function (el, e) {
      const linkBtn = el.closest('.link-btn');
      if (linkBtn) {
        const container = linkBtn.offsetParent;
        if (container && container.id === 'header') {
          const l1 = linkBtn.getBoundingClientRect();
          const l2 = container.getBoundingClientRect();
          const dl = l1.left - l2.left;
          const dr = l2.right - l1.right;
          root_styles.style.setProperty('--nav_l', `${dl}px`);
          root_styles.style.setProperty('--nav_r', `${dr}px`);
        }
      }
    };
    Array.from(neq).forEach(function (el) {
      el.addEventListener('click', function (e) {
        nav_burger();
        getDist(el, e);
        e.preventDefault();
      });
      el.addEventListener('keyup', function (e) {
        if (e.key === ' ') {
          nav_burger();
          getDist(el, e);
          e.preventDefault();
        }
      });
    });
  }

  if ((!nav_id && !nav_bar_id) && !html_tag.classList.contains('t1nn')) {
    html_tag.classList.add('t1nn');
  }

  if (nav_id) {
    function navHandlerX(el) {
      clear_mobile_nav();
      close_mobile_nav();
    }
    function navHandlerWide(el) {
      html_tag.classList.toggle('nav-more-active');
    }
    function navHandler(el) {
      var parentElement = el.parentElement;
      var mobileHeader = nav_id.querySelector('.header-before');
      var parentList = el.closest('ul');
      if (nav_top_id) {
        remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
      }
      if (nav_bar_id) {
        remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
      }
      if (nav_user_id) {
        remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
      }
      if (parentElement.classList.contains('toggle')) {
        parentElement.classList.remove('toggle', 'mtoggle');
        parentList.classList.remove('ul-toggle');
        /*if (nav_id.hasAttribute('data-type')) {
          nav_id.removeAttribute('data-type');
        }*/
        if (parentElement.hasAttribute('data-title')) {
          mobileHeader.classList.remove('data-title-active');
        }
      } else {
        Array.from(parentList.children).forEach(function (el) {
          el.classList.remove('toggle');
        });
        parentElement.classList.add('toggle', 'mtoggle');
        parentList.classList.add('ul-toggle');
        nav_id.setAttribute('data-type', el.closest('[data-type]').getAttribute('data-type'));
        if (parentElement.hasAttribute('data-title')) {
          mobileHeader.innerHTML = parentElement.getAttribute('data-title');
          mobileHeader.classList.add('data-title-active');
        }
      }
      if (nav_id.querySelectorAll('.ul-toggle:not(.nav-user)').length === 0) {
        nav_id.removeAttribute('data-type');
      }
      if (nav_id.querySelectorAll('[data-type="main-nav"] > li.sub.toggle').length) {
        html_tag.classList.add('nav-hover');
      } else {
        html_tag.classList.remove('nav-hover');
      }
    }
    nav_id.addEventListener('click', function (event) {
      if (event.target.matches('a.toggle, a.toggle *')) {
        navHandler(event.target.closest('a.toggle'));
        event.preventDefault();
      }
      if (event.target.matches('a.toggle-wide, a.toggle-wide *')) {
        navHandlerWide(event.target.closest('a.toggle'));
        event.preventDefault();
      }
      if (event.target.matches('.check label, .check label *')) {
        const checkbox = event.target.closest('.check.inside').querySelector('input');
        if (checkbox) {
          const checked = checkbox.checked;
          checkbox.checked = !checked;
        }
      }
      if (event.target.matches('a.close-nav')) {
        navHandlerX(event.target);
        event.preventDefault();
      }
    });
    nav_id.addEventListener('keyup', function (event) {
      if (event.key === ' ') {
        if (event.target.matches('a.toggle, a.toggle *')) {
          navHandler(event.target.closest('a.toggle'));
        }
        if (event.target.matches('a.toggle-wide, a.toggle-wide *')) {
          navHandlerWide(event.target.closest('a.toggle'));
        }
        if (event.target.matches('a.close-nav')) {
          navHandlerX(event.target);
        }
        event.preventDefault();
      }
    });
  }

  // .sub-static
  if (top_id && !isMobile) {
    var sub_static = top_id.querySelectorAll('.sub-static li > ul:not(:first-child:last-child)');
    Array.from(sub_static).forEach(function (el) {
      el.parentElement.addEventListener('mouseenter', function () {
        if (el.parentElement.parentElement.clientHeight < (el.clientHeight + el.parentElement.offsetTop - Math.abs(el.offsetTop))) {
          el.classList.add('rounded-b2r');
        }
      });
    });
  }

  function linkSmallPopup(em) {

    requestAnimationFrame(() => {
      const inner = em.querySelector('.inner');
      const innerText = em.querySelector('.inner-text');

      if (!inner || !innerText) return;

      const innerW = inner.getBoundingClientRect().width;
      const textW = innerText.getBoundingClientRect().width;

      if (textW - innerW > 4) {
        em.classList.add('longer');
      } else {
        em.classList.remove('longer');
      }
    });
  }

  if (top_id) {
    function createLinkedPopup(em, innerText, dataIndex) {
      if (!document.querySelector('.popup-a[data-title="' + dataIndex + '"]')) {
        const linkedPopup = document.createElement('div');
        linkedPopup.classList.add('popup-a', 'w360');
        linkedPopup.setAttribute('data-title', dataIndex);
        linkedPopup.innerHTML = `<p>${innerText}</p>`;
        root_id.appendChild(linkedPopup);
      }
    }

    const list_usp_header = top_id.getElementsByClassName('l4us');
    if (list_usp_header.length) {
      Array.from(list_usp_header).forEach(function (el, in1) {
        Array.from(el.querySelectorAll('li')).forEach(function (em, in2) {
          const innerText = em.innerHTML;

          const dataIndex = 'usp-' + in1 + in2;

          em.innerHTML = '<span class="outer"><span class="inner">' + innerText + '</span> <a href="./" class="linked" data-popup="' + dataIndex + '">' + translations.readmore_text + '</a> <span class="inner-text">' + innerText + '</span></span>';
          Array.from(el.querySelectorAll('.inner-text a')).forEach(function (en) {
            en.setAttribute('tabindex', '-1');
          });
          if (isHasSelectorSupported()) {
            if (em.querySelector('img') || em.querySelector('svg')) {
              em.classList.add('has-img');
              el.classList.add('has-img');
            }
          }
          em.classList.add('rendered');

          requestAnimationFrame(() => {
            linkSmallPopup(em);
          });
          window.addEventListener('resize', throttle(() => {
            linkSmallPopup(em);
          }, 500));

          if (el.classList.contains('slider-single') && el.classList.contains('s4wi')) {
            const isSwiper = el.getElementsByClassName('swiper-outer')[0].swiper;
            if (isSwiper !== undefined) {
              append_url(em.querySelectorAll('.outer')[0], 'Next', 'next-item');
              Array.from(el.getElementsByClassName('next-item')).forEach(function (eo) {
                eo.addEventListener('click', function (e) {
                  isSwiper.slideNext();
                  e.preventDefault();
                });
              });
            }
          }
          if (!isMobile) {
            el.addEventListener('mouseover', function () {
              createLinkedPopup(em, innerText, dataIndex);
            });
          }
          document.addEventListener('keyup', function () {
            createLinkedPopup(em, innerText, dataIndex);
          });
          document.addEventListener('touchstart', function () {
            createLinkedPopup(em, innerText, dataIndex);
          });
        });
      });
    }
  }


  // #nav-user
  if (nav_user_id) {
    // Create a close links for form dropdown (login)
    Array.from(nav_user_id.querySelectorAll('li > form')).forEach(function (el) {
      el.parentNode.classList.add('has-form');
      el.closest('#nav-user').classList.add('has-form');
      append_url(el, 'Toggle', 'toggle');
      append_url(el.parentElement, 'Toggle', 'toggle');
    });

    // Handle #nav-user submenus
    Array.from(nav_user_id.querySelectorAll('a.toggle')).forEach(function (el) {

      function click_handler(el) {
        close_mobile_nav();
        if (nav_id) {
          remove_active_submenus(nav_id.querySelectorAll('a.toggle'));
        }
        if (nav_top_id) {
          remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
        }
        if (nav_bar_id) {
          remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
        }
        toggle_dropdowns(el);
      }
      el.addEventListener('click', function (e) {
        click_handler(el);
        e.preventDefault();
      });
      el.addEventListener('keyup', function (e) {
        if (e.key === ' ') {
          click_handler(el);
          e.preventDefault();
        }
      });
      if (!isMobile) {
        const nextElementSibling = el.nextElementSibling;
        if (nextElementSibling && nextElementSibling.tagName.toLowerCase() !== 'form') {
          nextElementSibling.addEventListener('mouseleave', function () {
            close_dropdown(el.parentElement);
          });
        }
      }
    });
  }

});
window.dispatchEvent(navEvt);

window.transparentHeaderAsync = function() {
  let content_id = document.getElementById('content');
  if (content_id && header_inner) {
    var ffa = content_id.children[0],
        ffc,
        ffd = false,
        ffe = false;
    if (ffa !== undefined) {
      ffc = ffa.children[0];
      if (ffa.classList.contains('shopify-section') && header_inner.hasAttribute('data-transparent')) {
        ffd = true;
      }
      if ((ffc !== undefined && ffc.classList.contains('m6bx') && ffc.classList.contains('wide')) || (ffc !== undefined && ffc.classList.contains('m6fr') && ffc.classList.contains('wide'))) {
        ffe = true;
        ffc.classList.add('im-tr');
      }
      if (document.querySelectorAll('.shopify-section-header ~ [class*="shopify-section-announcement-bar"]').length) {
        ffd = false;
      }
      if (ffd === true && ffe === true && ffc.classList.contains('wide-transparent')) {
        top_id.classList.add('transparent');
        html_tag.classList.add('has-first-m6fr-wide');
        if (ffc.classList.contains('m6bx')) {
          html_tag.classList.add('has-first-m6bx-wide');
        }
        if (ffc.classList.contains('flexible-section')) {
          html_tag.classList.add('has-first-flexbile-wide');
        } else {
          html_tag.classList.remove('has-first-flexbile-wide');
        }
        ffc.classList.add('is-first-m6fr-wide');
        var firstSlide =  ffa.querySelectorAll('.swiper-slide-active article').length > 0 ? ffa.querySelectorAll('.swiper-slide-active article')[0] : ffa.querySelectorAll('article')[0];
        var palette = firstSlide.getAttribute('data-color-palette') || ffa.querySelectorAll('.m6fr')[0].getAttribute('data-active-content-desktop');
        if (palette != null ) {
          setTimeout(function(){
            root_styles.style.setProperty('--transparent_header_fg', 'var(--' + palette.replace('_gradient', '') + '_fg)');
            root_styles.style.setProperty('--transparent_header_bg', 'var(--' + palette + '_bg)');
            root_styles.style.setProperty('--transparent_header_btn_bg', 'var(--' + palette.replace('_gradient', '') + '_btn_bg)');
            root_styles.style.setProperty('--transparent_header_btn_fg', 'var(--' + palette.replace('_gradient', '') + '_btn_fg)');
            if (palette.includes('white') || palette.includes('light')) {
              root_styles.style.setProperty('--transparent_header_bd', 'var(--header_border_color_light)');
            } else {
              root_styles.style.setProperty('--transparent_header_bd', 'var(--header_border_color_dark)');
            }

          }, 0);
        }
      } else {
        header_inner.classList.remove('transparent');
        html_tag.classList.remove('has-first-m6fr-wide', 'has-first-m6bx-wide');
      }
    }
  }
}
transparentHeaderAsync();

// Observes footer visibility to add toggle links to headers and handles their click to toggle dropdowns.
if (footer_id) {
  let isFooterIo = false;

  function footerIo(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isFooterIo) {
        Array.from(footer_id.querySelectorAll('h1, h2, h3, h4, h5, h6')).forEach(el => {
          append_url(el, 'Close', 'header-toggle');
        });
        isFooterIo = true;
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(footerIo);
  observer.observe(footer_id);

  footer_id.addEventListener('click', function (event) {
    if (event.target.matches('a.header-toggle')) {
      const closestHeader = event.target.closest('h1, h2, h3, h4, h5, h6');
      if (closestHeader) {
        toggle_dropdowns_simple(closestHeader.parentElement);
        event.preventDefault();
      }
    }
  });
}

// Mobile nav to be keyboard accessible only on mobile devices
if (nav_id) {
  /*enquire.register('screen and (max-width: 1000px)', function () {
          Array.from(nav_id.querySelectorAll('a')).forEach(function (el) {
          el.setAttribute('tabindex', -1);
      });
  }).register('screen and (min-width: 1001px)', function () {
          Array.from(nav_id.querySelectorAll('a')).forEach(function (el) {
          el.removeAttribute('tabindex');
      });
  });*/
  function navTabSet() {
    if (mediaMax1000.matches) {
      Array.from(nav_id.querySelectorAll('a')).forEach(el => {
        el.setAttribute('tabindex', '-1');
      });
    } else {
      Array.from(nav_id.querySelectorAll('a')).forEach(el => {
        el.removeAttribute('tabindex');
      });
    }
  }

  navTabSet();
  mediaMax1000.addEventListener('change', navTabSet);
}

// Closes mobile nav and clears search on Escape key, removing active submenu states from various navigation elements.
document.addEventListener('keydown', function (evt) {
  evt = evt || window.event;
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    close_mobile_nav();
    clearCompactSearch();
    if (nav_id) {
      remove_active_submenus(nav_id.querySelectorAll('a.toggle'));
    }
    if (nav_top_id) {
      remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
    }
    if (nav_user_id) {
      remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
    }
    if (nav_bar_id) {
      remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
    }
    if (all_list_drop.length > 0) {
      Array.from(all_list_drop).forEach(function (element) {
        //all_list_drop.forEach(element => {
        remove_active_submenus(element.querySelectorAll('a.toggle'));
      });
    }
  }
});

// Add Toggleable functionality to all ".l4dr" elements
window.addEventListener("listDrop", function(evt) {
  var all_list_drop = document.querySelectorAll('.l4dr');
  Array.from(all_list_drop).forEach(function (element) {
    Array.from(element.querySelectorAll('a.toggle')).forEach(function (el) {
      function click_handler(el) {
        toggle_dropdowns(el, '.l4dr');
        new_css('css-menu', window.filepaths['async_menu_css']);
      }
      el.addEventListener('click', function (e) {
        click_handler(el);
        e.preventDefault();
      });
      el.addEventListener('keyup', function (e) {
        if (e.key === ' ') {
          click_handler(el);
          e.preventDefault();
        }
      });
      if (!isMobile) {
        el.nextElementSibling.addEventListener('mouseleave', function () {
          close_dropdown(el.parentElement);
        });
      }
    });
  });
});
window.dispatchEvent(listDropEvt);


document.onclick = function (evt) {
  evt = evt || window.event;
  var clicked_element = evt.target;
  var all_aria_expanded = document.querySelectorAll('[aria-expanded="true"]'),
      el_aria_expanded,
      closest_link;
  // if there's no dropdown open, do nothing
  if (all_aria_expanded.length === 0) {
    return
  }

  // loop through all opened dropdowns and check if click was inside/outside of it to determine if keeps opened or not
  // it will keeps opened only if click in an inside element that's not a children of a clickable link
  for (el_aria_expanded of all_aria_expanded) {
    if (el_aria_expanded === clicked_element) {
      continue;
    }
    // .contains() will check if clicked_element belongs to el_aria_expanded
    // and if belongs to, don't do anything (leave dropdown opened)
    if (el_aria_expanded.contains(clicked_element)) {
      // close dropdown when clicked in any of the links <a> present in dropdown
      closest_link = clicked_element.closest("a:not(.toggle, .show)");
      if (closest_link && closest_link.contains(clicked_element)) {
        close_dropdown(el_aria_expanded);
      }
      continue;
    }

    close_dropdown(el_aria_expanded);
  }
};


/////////////////////////////////////

function aria_hide(el) {
  if (el) {
    el.setAttribute('aria-hidden', 'true');
    el.setAttribute('focusable', 'false');
  }
}

function aria_show(el) {
  if (el) {
    el.setAttribute('aria-hidden', 'false');
    el.setAttribute('focusable', 'true');
  }
}

// check if string ends with any of array suffixes
function endsWithAny(suffixes, string) {
  for (let suffix of suffixes) {
    if (string.endsWith(suffix))
      return true;
  }
  return false;
}

// Assign aria elements to the #skip links
const skip_id = document.getElementById('skip');
if (skip_id) {
  Array.from(skip_id.querySelectorAll('a')).forEach(function (el) {
    el.addEventListener('focus', function () {
      this.setAttribute('aria-hidden', false);
    });
    el.addEventListener('blur', function () {
      this.setAttribute('aria-hidden', true);
    });
  });
}

// Form validation
function validate_me(el) {

  // Create and append a new 'span' element with the 'invalid-feedback' class.
  Array.from(el.querySelectorAll('p:not(.s1pr, .r6rt), ul, span.input-amount')).forEach(em => {
    if (!em.classList.contains('form-group') && !em.classList.contains('l4us')) {
      em.appendChild(createElementWithClass('span', 'invalid-feedback'));
      em.classList.add('form-group');
      // If there is a previous sibling element, add the 'last-child' class to it.
      Array.from(em.getElementsByClassName('invalid-feedback')).forEach(en => {
        if (en.previousElementSibling !== null) {
          en.previousElementSibling.classList.add('last-child');
        }
      });
      // Move the 'invalid-feedback' element before its previous sibling.
      Array.from(em.querySelectorAll('span[class*="size-"] + .invalid-feedback')).forEach(en => {
        en.previousElementSibling.before(en);
      });
    }
  });
  loadRes(window.filepaths['plugin_validator_js'], function () {
    if (typeof Validator === 'function') {
      el.noValidate;
      var validationPlugin = new Validator(el, {
        autoScroll: false,
        showValid: true
      });

      if (!validationPlugin.hasError()) {
        validationPlugin.setSubmitEnabled();
      }
    }
    new_css('form-validation-css', window.filepaths['async_validation_css']);
  }, 'validator-loaded');

}
function validator_run(el) {

  // Check if there are any elements with the 'required' attribute.
  const requiredElements = el.querySelectorAll('[required]');

  if (requiredElements.length) {
    const submitButtons = el.querySelectorAll('button[type="submit"]');
    for (const en of requiredElements) {

      // Check if the element is an input or textarea.
      const isInputOrTextarea = en.tagName.toLowerCase() === 'input' || en.tagName.toLowerCase() === 'textarea';

      // If the element is an input or textarea and its value is empty.
      if (en.value === '' && isInputOrTextarea) {
        // Disable all submit buttons within the container.
        for (const em of submitButtons) {
          em.disabled = true;
        }

        break; // Exit the loop since one required element is empty.
      }
    }
  }

  /*if (el_required.length) {
      Array.from(el_required).forEach(en => {
        if (en.value === '' && (en.tagName.toLowerCase() === 'input' || en.tagName.toLowerCase() === 'textarea')) {
          Array.from(el.querySelectorAll('button[type="submit"]')).forEach(function (em) {
            em.disabled = true;
          });
        }*/
  /*	});*/
  /*if (el.querySelectorAll('.required-empty').length) {
      Array.from(el.querySelectorAll('button[type="submit"]')).forEach(function (em) {
        em.disabled = true;
      });
    }*/
  //	}

  /*Array.from(el.querySelectorAll('p, ul, span.input-amount')).forEach(em => {
      if (!em.classList.contains('form-group') && !em.classList.contains('l4ch')) {
        em.appendChild(createElementWithClass('span', 'invalid-feedback'));
        em.classList.add('form-group');
        Array.from(em.getElementsByClassName('invalid-feedback')).forEach(en => {
          if (en.previousElementSibling !== null) {
            en.previousElementSibling.classList.add('last-child');
          }
        });
        Array.from(em.querySelectorAll('span[class*="size-"] + .invalid-feedback')).forEach(en => {
          en.previousElementSibling.before(en);
        });
      }
    });*/
  /*if (el.hasAttribute('data-hold')) {
      validate_me(el);
    }*/
  Array.from(el.querySelectorAll('input, select, textarea, button')).forEach(function (formInputs) {
    formInputs.addEventListener('focus', function () {
      validate_me(el);
    });
    formInputs.addEventListener('change', function () {
      validate_me(el);
    });
  });
  if (!isMobile) {
    el.addEventListener('mouseover', function () {
      validate_me(el);
    });
    el.addEventListener('mouseenter', function () {
      validate_me(el);
    });
  }
  if (el.querySelectorAll('footer.hidden').length) {
    el.addEventListener('submit', function (e) {
      el.classList.add('submitted');
      e.preventDefault();
    });
  }
}

// Replaces obfuscated email text when the element enters the viewport.
const aEmailEls = document.querySelectorAll('.email');
const aEmailObs = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const tag = el.tagName.toLowerCase();

      if (tag !== 'input' && tag !== 'div') {
        const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.textContent = textNode.textContent.replace('//', '@').replace(/\//g, '.');
        }

        if (tag === 'a') {
          el.setAttribute('href', 'mailto:' + (textNode ? textNode.textContent.trim() : el.innerText.trim()));
        }
      }

      obs.unobserve(el);
    }
  });
});
aEmailEls.forEach(el => aEmailObs.observe(el));

window.addEventListener("formValidate", function (evt) {
  const form_validate = document.getElementsByClassName('f8vl');
  if (form_validate.length) {
    Array.from(form_validate).forEach(function (el) {
      validator_run(el);
    });
  }
});
window.dispatchEvent(formValidateEvt);

var changeInputsRequired = function(addAttribute, container) {
  Array.from(container.querySelectorAll('input, textarea')).forEach(function (el) {
    if (!addAttribute) {
      el.checked = false;
      el.setAttribute('disabled', 'disabled');
      if (el.getAttribute('data-required') != undefined) {
        el.removeAttribute('required');
      }
    } else {
      el.removeAttribute('disabled');
      if (el.getAttribute('data-required') != undefined) {
        el.setAttribute('required', 'required');
      }
    }
  });
};

// Show/hide/toggle [data-element]
function data_show_me(el) {
  el.addEventListener('click', function (e) {
    Array.from(document.querySelectorAll('[data-element]')).forEach(function (el) {
      el.classList.add('hidden');
    });
    Array.from(document.querySelectorAll('[data-element="' + el.getAttribute('data-enable') + '"]')).forEach(function (el) {
      el.classList.remove('hidden');
    });
    if (el.tagName.toLowerCase() === 'a') {
      e.preventDefault();
    }
  });
}

function data_hide_me(el) {
  el.addEventListener('click', function (e) {
    Array.from(document.querySelectorAll('[data-element="' + el.getAttribute('data-disable') + '"]')).forEach(function (el) {
      el.classList.add('hidden');
    });
    if (el.tagName.toLowerCase() === 'a') {
      e.preventDefault();
    }
  });
}

function data_togg_me(el) {
  el.addEventListener('click', function (e) {
    const parent = el.parentElement;
    Array.from(document.querySelectorAll('[data-element="' + el.getAttribute('data-toggle') + '"]')).forEach(function (el) {
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
      if (el.closest('.l4cl.box') !== null) {
        lastVis(el.closest('.l4cl.box'));
      }
    });
    if (el.tagName.toLowerCase() === 'a') {
      if (parent.classList.contains('link-toggle-clicked')) {
        parent.classList.remove('link-toggle-clicked');
      } else {
        parent.classList.add('link-toggle-clicked');
      }
      e.preventDefault();
    }
  });
}
window.addEventListener("showHideDataElement", function (evt) {
  var data_show = document.querySelectorAll('a[data-enable]:not(.data-enable-listening), input[data-enable]:not(.data-enable-listening), button[data-enable]:not(.data-enable-listening)'),
      data_hide = document.querySelectorAll('a[data-disable]:not(.data-disable-listening), input[data-disable]:not(.data-disable-listening), button[data-disable]:not(.data-disable-listening)'),
      data_toggle = document.querySelectorAll('a[data-toggle]:not(.data-toggle-listening), input[data-toggle]:not(.data-toggle-listening), button[data-toggle]:not(.data-toggle-listening)');
  if (data_show.length || data_hide.length || data_toggle.length) {
    Array.from(data_show).forEach(function (el) {
      el.classList.add('data-enable-listening');
      data_show_me(el);
    });
    Array.from(data_hide).forEach(function (el) {
      el.classList.add('data-disable-listening');
      data_hide_me(el);
    });
    Array.from(data_toggle).forEach(function (el) {
      el.classList.add('data-toggle-listening');
      data_togg_me(el);
    });
  }
});
window.dispatchEvent(showHideDataElementEvt);


// Toggle input type
const a_show = document.querySelectorAll('a.show');
if (a_show.length) {
  // renamed i to index. Below you do a for-loop and use the same variable name i. This can be really confusing
  // and, as you assign in the for loop the i variable, this i from the function(el, i) is never used - could be removed from code
  Array.from(a_show).forEach(function (el) {
    var c = el.children,
        d = el.parentElement.nextElementSibling,
        i,
        all;
    el.parentElement.classList.add('has-show');
    d.addEventListener('keyup', function (e) {
      if (d.value === '') {
        el.parentElement.classList.remove('not-empty');
      } else {
        el.parentElement.classList.add('not-empty');
      }
    });
    el.addEventListener('click', function (e) {
      el.classList.toggle('show-toggle');
      for (i = 0, all = c.length; i < all; i = i + 1) {
        c[i].classList.toggle('hidden');
      }
      if (d.getAttribute('type') === 'password') {
        d.setAttribute('type', 'text');
      } else {
        d.setAttribute('type', 'password');
      }
      e.preventDefault();
    });
  });
}

function amountRun(el) {
  el.classList.add('semantic-input-initialized');
  var inc = createElementWithClass('a', 'incr'),
      dec = createElementWithClass('a', 'decr');

  inc.setAttribute('role', 'button');
  dec.setAttribute('role', 'button');
  inc.setAttribute('aria-label', 'Increase by 1');
  dec.setAttribute('aria-label', 'Descrease by 1');
  const semAm = document.createElement('span');
  semAm.className = 'semantic-amount';
  while (el.firstChild) {
    semAm.appendChild(el.firstChild);
  }
  el.appendChild(semAm);

  Array.from(el.children).forEach(function (el) {
    var inp = el.querySelector('input');
    el.appendChild(inc);
    el.appendChild(dec);
    if (parseFloat(inp.value) === 1 || inp.value === '') {
      el.querySelector('.decr').classList.add('disabled');
    }
    if (inp.hasAttribute('min') && parseFloat(inp.value) < parseFloat(inp.getAttribute('min')) + 1) {
      el.querySelector('.decr').classList.add('disabled');
    }
    if (inp.hasAttribute('max') && parseFloat(inp.value) === parseFloat(inp.getAttribute('max'))) {
      el.querySelector('.incr').classList.add('disabled');
    }
  });
  if (el.parentNode.classList.contains('submit')) {
    Array.from(el.parentNode.querySelectorAll('button')).forEach(function (em) {
      if (em.classList.contains('size-m')) {
        el.classList.add('size-m');
      }
      if (em.classList.contains('size-l')) {
        el.classList.add('size-l');
      }
    });
  }
}

function amountClick(el) {
  Array.prototype.slice.call(el).map(function (el) {
    el.classList.add('input-amount-listening');
    return {
      input: el.querySelector('input'),
      decr: el.querySelector('.decr'),
      incr: el.querySelector('.incr'),
      get value() {
        return parseInt(this.input.value);
      },
      set value(newValue) {
        var input = el.querySelector("input"),
            decrElements,
            incrElements,
            dataLink,
            inputLink,
            decrElementLinkData,
            incrElementLinkData;
        input.value = newValue;

        decrElements = [this.decr]; // if has data-link, it will change decr for data-link element too
        incrElements = [this.incr]; // if has data-link, it will change decr for data-link element too

        // check if input has a data-link attribute. If it has, get element associated with and set new value
        dataLink = input.getAttribute("data-link");
        if (dataLink) {
          inputLink = document.querySelector(dataLink);
          if (inputLink) {
            inputLink.value = newValue;

            decrElementLinkData = inputLink.closest(".input-amount");
            incrElementLinkData = inputLink.closest(".input-amount");
            if (decrElementLinkData) {
              decrElementLinkData = decrElementLinkData.querySelector(".decr");
              decrElements.push(decrElementLinkData);
            }
            if (incrElementLinkData) {
              incrElementLinkData = incrElementLinkData.querySelector(".incr");
              incrElements.push(incrElementLinkData);
            }
          }
        }

        // loop through all decr elements to change its class if needed
        Array.from(decrElements).forEach(function (decrEl) {
          var st = 2;
          if (input.hasAttribute('min')) {
            st = parseFloat(input.getAttribute('min')) + 1;
          }
          if (parseFloat(newValue) < st) {
            decrEl.classList.add('disabled');
          } else {
            if (decrEl.classList.contains('disabled') && !input.classList.contains('disable-on-change')) {
              decrEl.classList.remove('disabled');
            }
          }
        });
        Array.from(incrElements).forEach(function (incrEl) {
          if (input.hasAttribute('max')) {
            if (parseFloat(newValue) >= parseFloat(input.getAttribute('max'))) {
              incrEl.classList.add('disabled');
            } else {
              if (incrEl.classList.contains('disabled') && !input.classList.contains('disable-on-change')) {
                incrEl.classList.remove('disabled');
              }
            }
          }
        });
      }
    };
  }).forEach(function (el) {
    var step = 1;
    if (el.input.hasAttribute('step')) {
      step = parseFloat(el.input.getAttribute('step'));
    }
    el.decr.addEventListener('click', function (e) {
      if (el.input.classList.contains('disable-on-change')) { el.decr.classList.add('disabled') }
      if (el.input.hasAttribute('min')) {
        if (el.value > parseFloat(el.input.getAttribute('min'))) {
          el.value -= step;
        }
      } else {
        if (el.value > 1) {
          el.value -= step;
        }
      }
      el.input.dispatchEvent(changeEvent);
      e.preventDefault();
    });
    el.incr.addEventListener('click', function (e) {
      if (el.input.classList.contains('disable-on-change')) { el.incr.classList.add('disabled') }
      if (el.input.hasAttribute('max')) {
        if (el.value < parseFloat(el.input.getAttribute('max'))) {
          el.value += step;
        }
      } else {
        el.value += step;
      }
      if (isNaN(el.value)) {
        el.value = 1;
      }
      el.input.dispatchEvent(changeEvent);
      e.preventDefault();
    });
    el.input.addEventListener('change', function () {
      el.value = parseFloat(el.value);
      if (isNaN(el.value)) {
        el.value = 1;
        el.decr.classList.add('disabled');
      }
    });
  });
}

// +/- input
window.addEventListener("semanticInput", function (evt) {
  const input_amount = document.querySelectorAll('.input-amount:not(.semantic-input-initialized, .in-popup)');
  if (input_amount.length) {
    Array.from(input_amount).forEach(function (el) {
      el.classList.add('semantic-input-initialized');
      if (el.closest('[class^="popup-inset"]:not(html)') === null) {
        amountRun(el);
      } else {
        el.classList.add('in-popup');
      }
    });
    amountClick(document.querySelectorAll('.input-amount:not(.in-popup, .input-amount-listening)'));
  }
});
window.dispatchEvent(semanticInputEvt);

// Togglable input
window.addEventListener("accordeon", function (evt) {
  const input_show = document.querySelectorAll('.input-show > label');
  if (input_show.length) {
    Array.from(input_show).forEach(function (el) {
      append_url(el, 'Toggle', 'toggle');
      el.querySelector('a.toggle').addEventListener('click', function (e) {
        el.parentElement.classList.toggle('toggle');
        setTimeout(function () {
          el.parentElement.querySelector('input, textarea').focus();
        }, 0);
        e.preventDefault();
      });
    });
  }
});
window.dispatchEvent(accordeonEvt);

// .l4ne.featured - prepend the big image before the list on mobile device (blog)
const list_news = document.getElementsByClassName('l4ne');
if (list_news.length) {
  Array.from(list_news).forEach(function (el) {
    if (el.classList.contains('featured')) {
      Array.from(el.querySelectorAll('li:first-child')).forEach(function (el) {
        var clone_me = el.cloneNode(true),
            clone_cont = document.createElement('ul'),
            list = el.closest('.l4ne');
        clone_cont.classList.add('mobile-only', 'l4ne', 'l4ne-figure-before');
        el.closest('li').classList.add('mobile-hide');
        list.before(clone_cont);
        if (list.previousElementSibling.classList.contains('l4ne-figure-before')) {
          list.previousElementSibling.append(clone_me);
        }
      });
    }
  });
}

// Update text based on title (product page)
function dataChange(el, en, eo = '.inner') {
  Array.from(document.querySelectorAll(en)).forEach(function (em) {
    Array.from(em.querySelectorAll(eo)).forEach(function (en) {
      en.innerHTML = el;
    });
  });
}
window.addEventListener("dataChange", function (evt) {
  var data_change = document.querySelectorAll('a[data-change][title]:not(.listening-data-change), input[data-change][title]:not(.listening-data-change)'),
      data_change_to = document.querySelectorAll('[class^="data-change-to"]:not(.listening-data-change)');

  if (data_change_to.length) {
    Array.from(data_change_to).forEach(function (el) {
      var oldCont = createElementWithClass('span', 'hidden');
      oldCont.innerHTML = el.innerHTML;
      const newCont = document.createElement('span');
      newCont.classList.add('inner');
      while (el.firstChild) {
        newCont.appendChild(el.firstChild);
      }
      el.appendChild(newCont);
      el.appendChild(oldCont);
      el.classList.add('listening-data-change');
    });
  }
  if (data_change.length) {
    Array.from(data_change).forEach(function (el) {
      el.classList.add('listening-data-change');
      el.addEventListener('click', function (e) {
        dataChange(el.getAttribute('title'), el.getAttribute('data-change'), ['.inner', '.hidden']);
        if (el.tagName.toLowerCase() === 'a') {
          e.preventDefault();
        }
      });
      if (!isMobile) {
        if (el.tagName.toLowerCase() === 'input' && el.nextElementSibling.tagName.toLowerCase() === 'label') {
          el.nextElementSibling.addEventListener('mouseenter', function (e) {
            dataChange(el.getAttribute('title'), el.getAttribute('data-change'));
          });
          el.nextElementSibling.addEventListener('mouseleave', function (e) {
            dataChange(document.querySelectorAll(el.getAttribute('data-change') + ' .hidden')[0].innerText, el.getAttribute('data-change'));
          });
        }
      }
    });
  }
});
window.dispatchEvent(dataChangeEvt);

// Self-embedded YouTube/Vimeo
const videoLinks = document.querySelectorAll('a[data-youtube], a[data-vimeo]');
if (videoLinks.length) {
  videoLinks.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      if (el.querySelector('iframe')) return;

      const iframe = document.createElement('iframe');
      iframe.classList.add('iframe-playing');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');

      let src = '';

      if (el.hasAttribute('data-youtube')) {
        src = 'https://www.youtube.com/embed/' + el.getAttribute('data-youtube') + '?autoplay=1&rel=0';
      } else if (el.hasAttribute('data-vimeo')) {
        src = 'https://player.vimeo.com/video/' + el.getAttribute('data-vimeo') + '?autoplay=1';
      }

      if (src) {
        iframe.setAttribute('src', src);
        el.appendChild(iframe);
      }
    });
  });
}

// play/mute video
window.addEventListener("muteVideo", function (evt) {
  const a_video = document.querySelectorAll('a video, a ~ video, a ~ picture video');
  if (a_video.length) {
    a_video.forEach(el => {
      const muteLink = document.createElement('span');
      muteLink.classList.add('link-mute');
      const anchor = document.createElement('a');
      anchor.href = './';
      anchor.textContent = 'Mute';
      muteLink.appendChild(anchor);
      const pictureEl = el.closest('picture');
      if (pictureEl) {
        const linkPicEl = pictureEl.closest('a');
        if (linkPicEl) {
          linkPicEl.insertAdjacentElement('afterend', muteLink);
        } else {
          pictureEl.insertAdjacentElement('afterend', muteLink);
        }
      }
      muteLink.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault();
        muteLink.classList.toggle('muted');
        el.muted = muteLink.classList.contains('muted');
      });
      const figureEl = el.closest('figure');
      const linkEl = el.closest('a');
      let av;
      if (figureEl !== null) {
        av = figureEl.querySelector('.link-overlay');
      }
      if (linkEl !== null) {
        av = linkEl;
      }
      if (av) {
        av.addEventListener('click', function (e) {
          if (av.classList.contains('video-clicked')) {
            av.classList.remove('video-clicked');
            el.pause();
          } else {
            av.classList.add('video-clicked');
            el.play();
          }
          //el.setAttribute('controls', true);
          e.preventDefault();
        });
      }
    });
  }
});
window.dispatchEvent(muteVideoEvt);

window.addEventListener("bindInput", function (evt) {
  var data_bind_input = document.querySelectorAll('input[data-bind], textarea[data-bind]');
  if (data_bind_input.length) {
    Array.from(data_bind_input).forEach(function (el) {
      el.addEventListener('change', function (e) {
        var binded = document.querySelectorAll('input[id="' + el.getAttribute('data-bind') + '"], textarea[id="' + el.getAttribute('data-bind') + '"]'),
            check_cont;
        Array.from(binded).forEach(function (em) {
          if (em.tagName === 'INPUT') {
            check_cont = em.closest('.check');
            em.checked = el.checked;
            if (check_cont !== null && el.checked === true) {
              check_cont.getElementsByClassName('invalid-feedback')[0].innerHTML = '';
            }
          } else if (em.tagName === 'TEXTAREA') {
            em.value = el.value;
            // em.setAttribute('xname', em.getAttribute('name'));
            em.removeAttribute('name');
          }
        });
      });
    });
  }
});
window.dispatchEvent(bindInputEvt);

// f8ps extra space & display (product page)
const form_product_sticky = document.querySelector('.f8ps');
const form_product = document.getElementsByClassName('f8pr');
// const headerHeight = top_id.offsetHeight;
if (form_product_sticky) {
  if (!form_product_sticky.classList.contains('align-top')) {
    html_tag.classList.add('has-f8ps');
  } else {
    html_tag.classList.add('has-f8ps-top');
  }
  html_tag.classList.add('product-not-scrolled');
  aria_hide(form_product_sticky);

  //root_styles.style.setProperty('--shopify_section_header_height', headerHeight + 'px');

  Array.from(form_product_sticky.querySelectorAll('a, input, button, select, textarea, [role="button"]')).forEach(function (childEl) {
    childEl.setAttribute('tabindex', -1);
  });
}

// Cookie bar
var cookie_id = document.getElementById('cookie-bar'),
    cookie_popup = document.querySelector('[data-title*="cookie"][data-popup-delay]'),
    cookiebanner_testmode = general.cookiebanner_testmode,
    age_verify_popup_testmode = general.age_verify_popup_testmode;

function updateCookieBanner(isVisible) {

  let getCookieHeightCalculated = false;

  function getCookieHeight() {
    if (!getCookieHeightCalculated) {
      let cookieHeight;
      if (cookie_id) {
        cookieHeight = cookie_id.offsetHeight + 'px';

        if (isVisible) {
          html_tag.classList.add('cookie-on');
        } else {
          html_tag.classList.remove('cookie-on');
        }

        root_styles.style.setProperty('--cookie_h', cookieHeight);
      } else {
        cookieHeight = '0px';
      }
      getCookieHeightCalculated = true;
    }
  }
  if (!isMobile) {
    document.addEventListener('mouseover', getCookieHeight);
  }
  document.addEventListener('keyup', getCookieHeight);
  document.addEventListener('touchstart', getCookieHeight);
  document.addEventListener('scroll', getCookieHeight);
}
updateCookieBanner(true);


if (cookie_id) {
  const cookieHeight = cookie_id.offsetHeight;
}

function hideCookieBanner() {
  if (cookie_popup) {
    cookie_popup.removeAttribute('data-popup-delay');
  }
  setTimeout(function () {
    updateCookieBanner(false);
  }, 400);
  /*if (!form_product_sticky.length) {
      root_id.removeAttribute('style');
      if (totop_id) {
        totop_id.removeAttribute('style');
      }
    }*/
}

function cookieClick(el) {
  html_tag.classList.add('cookie-toggle');
  if (el.classList.contains('cookie-accept')) {
    handleCookieAccept();
  } else if (el.classList.contains('cookie-decline')) {
    handleCookieDecline();
  } else {
    hideCookieBanner();
  }
  if (!form_product_sticky) {
    root_id.removeAttribute('style');
    if (totop_id) {
      totop_id.removeAttribute('style');
    }
  }
  setTimeout(function () {
    updateCookieBanner(false);
  }, 400);
  Cookies.set('cookie-bar', 'no', { expires: 30, sameSite: 'none', secure: true });
}

function handleCookieAccept() {
  Cookies.set('cookie-bar', 'no', { expires: 30, sameSite: 'none', secure: true });
  window.Shopify.customerPrivacy.setTrackingConsent(true, hideCookieBanner);
}

function handleCookieDecline() {
  Cookies.set('cookie-bar', 'no', { expires: 30, sameSite: 'none', secure: true });
  window.Shopify.customerPrivacy.setTrackingConsent(false, hideCookieBanner);
}

if (cookie_id || cookie_popup || document.querySelector('.popup-blocker[data-title="age-verifier-popup"] .age-verifier-popup-cookie-text') ) {
  window.Shopify.loadFeatures([
        {
          name: 'consent-tracking-api',
          version: '0.1',
        }
      ],
      function (error) {
        if (error) {
          throw error;
        }
        const shouldShowGDPRBanner = window.Shopify.customerPrivacy.shouldShowGDPRBanner();
        if (!shouldShowGDPRBanner) {
          Cookies.set('cookie-bar', 'no', { expires: 30, sameSite: 'none', secure: true });
        }
      });

  if (document.querySelector('.popup-blocker[data-title="age-verifier-popup"] .age-verifier-popup-cookie-text')) {
    if (age_verify_popup_testmode) {
      Cookies.remove('cookie-bar', { sameSite: 'none', secure: true });
    }
  } else if (cookiebanner_testmode) {
    Cookies.remove('cookie-bar', { sameSite: 'none', secure: true });
  }

  if (!form_product_sticky && cookie_id) {
    updateCookieBanner(true);
  }
  append_url(root_id, 'Close', 'cookie-close');
  Array.from(document.querySelectorAll('.cookie-close, .cookie-decline, .cookie-accept')).forEach(function (el) {
    el.addEventListener('click', function (e) {
      cookieClick(el);
      e.preventDefault();
    });
  });
}

if (Cookies.get('cookie-bar') === 'no' || document.getElementsByClassName('popup-blocker').length) {
  if (cookie_popup) {
    cookie_popup.removeAttribute('data-popup-delay');
  }
  if (Cookies.get('cookie-bar') === 'no' && document.querySelector('.popup-blocker[data-title="age-verifier-popup"] .age-verifier-popup-cookie-text')) {
    document.querySelector('.popup-blocker[data-title="age-verifier-popup"] .age-verifier-popup-cookie-text').remove();
    document.querySelector('.popup-blocker[data-title="age-verifier-popup"] .cookie-accept').classList.remove('cookie-accept');
  }
  updateCookieBanner(false);
} else {
  updateCookieBanner(true);
}

// f8pr - sticky compact form

function clearStickyForm() {
  Array.from(form_product).forEach((el) => {
    if (el.closest('.m6pr') !== null) {
      html_tag.classList.remove('product-scrolled');
      html_tag.classList.add('product-not-scrolled');
      if (form_product_sticky) {
        aria_hide(form_product_sticky);
      }
    }
  });
}

if (form_product.length) {
  function handleResizeAndScroll() {
    new_css('css-product-scrolled', window.filepaths['async_product_scrolled_css']);
  }

  function assignStyles() {
    if (form_product_sticky) {
      root_styles.style.setProperty('--f8ps_h', form_product_sticky.clientHeight + 'px');
    }
  }

  if (form_product_sticky) {
    window.addEventListener('resize', throttle(() => {
      handleResizeAndScroll();
      assignStyles();
    }, 500));
    window.addEventListener('scroll', function () {
      handleResizeAndScroll();
    });
  }

  let ho_h = false;
  if (header_outer) {
    window.addEventListener('scroll', function () {
      if (!ho_h) {
        root_styles.style.setProperty('--header_outer_height', header_outer.offsetHeight + 'px');
      }
      ho_h = true;
    });
  }

  Array.from(form_product).forEach((el) => {

    if (el.closest('.m6pr') !== null) {
      function io(entries) {
        entries.map((entry) => {
          const boundingRect = entry.boundingClientRect;
          handleResizeAndScroll();
          if (entry.isIntersecting) {
            //console.log('Element - on screen.');
            html_tag.classList.remove('product-scrolled');
            html_tag.classList.add('product-not-scrolled');
            if (form_product_sticky) {
              aria_hide(form_product_sticky);
            }
          } else {
            if (boundingRect.top < 0) {
              //console.log('Element - above screen.');
              html_tag.classList.add('product-scrolled', 'f8ps-css');
              html_tag.classList.remove('product-not-scrolled');
              if (form_product_sticky) {
                aria_show(form_product_sticky);
              }
              assignStyles();
              requestAnimationFrame(function () {
                assignStyles();
              });
            }
            /*if (boundingRect.bottom >= window.innerHeight) {
                console.log('Element - below screen.');
              }*/
          }
        });
      }

      new IntersectionObserver(io).observe(el);
    }
  });
}
// Custom look of select boxes
function selectRun(el) {
	let sp = '';

	if (el.hasAttribute('data-search-placeholder')) {
		sp = el.getAttribute('data-search-placeholder');
	}
	el.setAttribute('tabindex', -1);
	if (el.querySelectorAll('option[selected]:not([disabled], .disabled, [data-class="disabled"])').length) {
		el.parentNode.classList.add('done');
	}
	if (el.classList.contains('select-init')) return;
	if (!isMobile) {
		wrap(el, document.createElement('span'), 'select-wrapper');
		randomize(el);
		 const bvsel = new BVSelect({
			selector: '#' + el.getAttribute('id') + '[data-random="' + el.dataset.random + '"]',
			searchbox: true,
			search_placeholder: sp,
			search_autofocus: true,
			offset: false
		});
        Array.from(el.nextSibling.querySelectorAll('.bv_ul_inner a')).forEach(function (em) {
			em.addEventListener('click', function () {
        el.dispatchEvent(changeEvent);
				const closestFormGroup = em.closest('.form-group');

				if (closestFormGroup !== null) {
					closestFormGroup.classList.remove('is-invalid');
				}
				if (em.parentNode.classList.contains('has-scroll')) {
					document.querySelector(em.getAttribute('href')).scrollIntoView();
				}
				if (em.hasAttribute('data-slide-to')) {
					const closestLi = em.closest('li');
					if (closestLi !== null) {
						const findSwiper = closestLi.querySelector('.s4wi');
						if (findSwiper !== undefined) {
							findSwiper.children[0].swiper.slideTo(em.getAttribute('data-slide-to'));
						}
					}
				}
			});
		});
		const bvAtualElements = Array.from(el.parentNode.getElementsByClassName('bv_atual'));

		bvAtualElements.forEach((em) => {
			const applyCss = () => {
          new_css('css-select', window.filepaths['async_select_css']);
			};

			em.addEventListener('click', applyCss, {
				once: true
			});
			em.addEventListener('focus', applyCss, {
				once: true
			});
		});
		el.classList.add('select-init');
	}
}

// Custom look of select boxes
window.addEventListener("semanticSelect", function (evt) {
	var select_tag = document.querySelectorAll('select[id]:not(.semantic-select-initialized):not(.js-hidden)');
	if (select_tag.length && !isMobile) {
		loadRes(window.filepaths['plugin_selects_js'], function () {
			Array.from(select_tag).forEach((el) => {
				el.classList.add('semantic-select-initialized');
				const closestPopup = el.closest('[class^="popup-"]:not(html, .rendered)');
				const isBoxOuter = el.closest('.box-outer') !== null;
				if ((closestPopup === null || isBoxOuter) && el.querySelector('option')) {
					selectRun(el);
				}
			});
		}, 'selects-loaded');
	}
});
window.dispatchEvent(semanticSelectEvt);

window.addEventListener("moduleProductBackground", function (evt) {
  let module_product = document.querySelector('.m6pr');
  if (module_product || (module_collection && module_collection.classList && module_collection.classList.contains('sticky'))) {
    html_tag.classList.add('t1pr');

    if (module_product) {
      /*enquire.register('screen and (max-width: 760px)', function () {
          const module_product_bg = document.querySelector('.m6pr[style*="--m6pr_bg:"]');
          if (module_product_bg) {
              const module_product_bg_l4pr = module_product_bg.querySelector('.l4pr-container');
              if (module_product_bg_l4pr) {
                  module_product_bg.style.setProperty('--bg_dist', 0 - module_product_bg_l4pr.getBoundingClientRect().top + 'px');
              }
          }
      });*/
      function updateBgDist() {
        if (mediaMax760.matches) {
          requestAnimationFrame(() => {
            const module_product_bg = document.querySelector('.m6pr[style*="--m6pr_bg:"]');
            if (!module_product_bg) return;

            const module_product_bg_l4pr = module_product_bg.querySelector('.l4pr-container');
            if (!module_product_bg_l4pr) return;

            const offset = -module_product_bg_l4pr.getBoundingClientRect().top;
            module_product_bg.style.setProperty('--bg_dist', `${offset}px`);
          });
        }
      }

      updateBgDist();
      mediaMax760.addEventListener('change', updateBgDist);
    }

  }
});
window.dispatchEvent(moduleProductBackgroundEvt);

// sidebar sliding from the edge (product page, cart)
var module_panel = document.getElementsByClassName('m6pn'),
    a_module_panel = document.querySelectorAll('a[data-panel]');

function setTabindex(el, value) {
  Array.from(el.querySelectorAll('a, input, button, select, textarea, [role="button"]')).forEach(function (childEl) {
    childEl.setAttribute('tabindex', value);
  });
}

function negTabIn(el) {
  setTabindex(el, -1);
}

function posTabIn(el) {
  setTabindex(el, '');
}

function hidePanels() {
  html_tag.classList.remove('m6pn-open', 'm6cp-open', 'f8fl-open');
  Array.from(module_panel).forEach(function (el) {
    // negTabIn(el);
    el.classList.remove('toggle');
    el.setAttribute('aria-hidden', true);
    Array.from(el.querySelectorAll('a, input, button, select, textarea, [role="button"]')).forEach(function (el) {
      el.setAttribute('tabindex', -1);
    });
  });
  const m6pn_clicked = document.querySelector('.m6pn-clicked');
  if (m6pn_clicked) {
    setTimeout(() => {
      if (whatInput.ask() === 'keyboard') {
        m6pn_clicked.focus();
      }
      document.querySelectorAll('a[data-panel]').forEach(el => el.classList.remove('m6pn-clicked'));
    }, 100);
  }
}

//to check when element gets position sticky
function getStickyFooters() {
  var sticky_in_panel = document.querySelectorAll('.sticky-in-panel:not(.sticky-panel-initialized)');
  if (sticky_in_panel.length) {
    Array.from(sticky_in_panel).forEach(function (eo) {
      eo.classList.add('sticky-panel-initialized');
      if (eo.classList.contains('sticky-in-panel') && !eo.classList.contains('is-sticky')) {
        if (!eo.getElementsByClassName('offset-dist').length) {
          var trickDiv = createElementWithClass('div', 'offset-dist');
          eo.prepend(trickDiv);
        }
        const observer = new IntersectionObserver(
            ([e]) => e.target.parentElement.classList.toggle('is-sticky', e.intersectionRatio < 1), {
              threshold: [1, 0]
            }
        );
        observer.observe(eo.getElementsByClassName('offset-dist')[0]);
      }
    });
  }
}

var hidePanelsTimeout;
if (module_panel.length) {
  function openPanel(id) {
    const linked = document.querySelectorAll(`.m6pn[id="${id}"]`);
    const a_source = document.querySelectorAll(`a[data-panel="${id}"]`);

    overlayClose();
    asyncCSS();

    html_tag.classList.add('has-panels', 'm6pn-open');

    document.querySelectorAll('a[data-panel]').forEach(em => em.classList.remove('m6pn-clicked'));
    a_source.forEach(em => em.classList.add('m6pn-clicked'));
    Array.from(module_panel).forEach(function (el) {
      el.setAttribute('aria-hidden', true);
      if(!el.querySelector('.m6pn-close:not(.strong)')){
        append_url(el, 'Close', 'm6pn-close');
      }
      el.classList.remove('toggle');
      setTimeout(function () {
        negTabIn(el);
      }, 500);
      el.querySelectorAll('.l4pr.aside-pager').forEach(em => em.classList.remove('aside-pager'));
    });
    linked.forEach(el => {
      el.classList.add('toggle');
      el.setAttribute('aria-hidden', false);
      posTabIn(el);
      setTimeout(function () {
        el.querySelector('a, input, button, select, textarea, [role="button"]').focus();
        el.querySelectorAll('[style*="--fih:"]').forEach(slider => {
          const firstFig = slider.querySelector('.swiper-slide-active figure');
          if (firstFig) {
            if (firstFig.clientHeight === 0) {
              slider.style.removeProperty('--fih');
            } else {
              slider.style.setProperty('--fih', firstFig.offsetHeight + 'px');
            }
          }
        });
      }, 100);
    });
    if (document.getElementsByClassName('f8fl').length) {
      new_css('css-filters', window.filepaths['async_filters_css']);
      new_css('css-search', window.filepaths['async_search_css']);
    }
    getStickyFooters();
    new_css('css-panels', window.filepaths['async_panels_css']);
    if (linked[0].classList.contains('m6pr-compact')) {
      new_css('product-css', window.filepaths['page_product_css']);
    }
    if (linked[0].hasAttribute('data-delay')) {
      setTimeout(function () {
        hidePanels();
      }, parseFloat(linked[0].getAttribute('data-delay')));
    }

  }

  document.addEventListener('click', function (event) {
    if (event.target.matches('a.m6pn-close, a.m6pn-close *')) {
      hidePanels();
      event.preventDefault();
    }
  });
  document.addEventListener('keyup', function (event) {
    if (event.key === ' ') {
      if (event.target.matches('a.m6pn-close, a.m6pn-close *')) {
        hidePanels();
        event.preventDefault();
      }
    }
  });
  document.onkeydown = function (evt) {
      evt = evt || window.event;
    if (evt.key === 'Escape') {
      hidePanels();
    }
  };
  Array.from(a_module_panel).forEach(el => {
    const id = el.dataset.panel;
    const linked = document.querySelectorAll('.m6pn[id="' + id + '"]');

    if (linked.length) {
      el.setAttribute('aria-haspopup', true);
      el.setAttribute('aria-controls', id);
    }
  });
  window.dispatchEvent(modulePanelEvt);
}

function handlePanelEvents(e) {
  const el = e.target;
  const panelElement = el.closest('a[data-panel]') || el;
  const panelId = panelElement.dataset.panel;
  if ((el && el.matches('a[data-panel]')) || panelElement) {
    if (e.type === 'click' || (e.type === 'keyup' && e.key === ' ')) {
      const linked = document.querySelectorAll('.m6pn[id="' + panelId + '"]');
      if (linked.length) {
        if (panelId == 'cart') {
          if (general.enable_cart_drawer) {
            ajaxCart.load();
          } else {
            ajaxCart.load(false, true, false, true);
          }
        } else {
          openPanel(panelId);
        }
        e.preventDefault();
      }
      if (el.matches && el.matches('a[data-panel]') && e.type === 'click' && !el.href.includes('#')) {
        e.preventDefault();
      }
    }
  }
}

document.addEventListener('click', handlePanelEvents);
document.addEventListener('keyup', handlePanelEvents);

window.addEventListener("imageCompare", function(evt) {
  var image_compare = document.getElementsByClassName('img-compare');
  if (image_compare.length) {
    loadRes(window.filepaths['plugin_compare_js'], function () {
      new_css('compare-css', window.filepaths['async_compare_css']);
      Array.from(image_compare).forEach(function (el) {
        var a, b,
            opt_vertical = false,
            opt_start = 50,
            opt_labels = false,
            opt_labels_bef = 'Before',
            opt_labels_aft = 'After';

        if (el.querySelectorAll('img').length === 2) {
          if (el.classList.contains('vertical')) {
            opt_vertical = true;
          } else {
            if (global_dir[1] === false) {
              a = el.children[0],
                  b = a.cloneNode(true);
              el.appendChild(b);
              el.removeChild(a);
            }
          }
          if (el.getAttribute('data-start') !== null) {
            if (global_dir[1] === false) {
              opt_start = 100 - parseFloat(el.getAttribute('data-start'));
            } else {
              opt_start = parseFloat(el.getAttribute('data-start'));
            }
          }
          if (el.getAttribute('data-label-before') === '') {
            el.classList.add('no-label-before');
          }
          if (el.getAttribute('data-label-after') === '') {
            el.classList.add('no-label-after');
          }
          if (el.getAttribute('data-label-before') !== null || el.getAttribute('data-label-after') !== null) {
            opt_labels = true;
            if (el.getAttribute('data-label-before') !== null) {
              opt_labels_bef = el.getAttribute('data-label-before');
            } else {
              el.classList.add('no-label-before');
            }
            if (el.getAttribute('data-label-after') !== null) {
              opt_labels_aft = el.getAttribute('data-label-after');
            } else {
              el.classList.add('no-label-after');
            }
          }
          if (el.children.length === 2) {
            new ImageCompare(el, {
              verticalMode: opt_vertical,
              startingPoint: opt_start,
              showLabels: opt_labels,
              labelOptions: {
                before: opt_labels_bef,
                after: opt_labels_aft
              }
            }).mount();
          }
        }
      }, 'compare-loaded');
    });
  }
});
window.dispatchEvent(imageCompareEvt);

window.addEventListener("inputDate", function(evt) {
  var input_date = document.querySelectorAll('input[type="date"]:not(.datepicker-initialized)'),
      global_lang = general.language;
  if (input_date.length && !isMobile) {
    var datepicker_path,
        datepicker_langs = ['ar', 'az', 'bg', 'bm', 'bn', 'br', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr', 'gl', 'he', 'hi', 'hr', 'hu', 'hy', 'id', 'is', 'it', 'ja', 'ka', 'kk', 'km', 'ko', 'lt', 'lv', 'me', 'mk', 'mn', 'mr', 'ms', 'nl', 'no', 'oc', 'pl', 'pt', 'ro', 'ru', 'si', 'sk', 'sl', 'sq', 'sr', 'sv', 'sw', 'ta', 'tg', 'th', 'tk', 'tr', 'uk', 'uz', 'vi'],
        datepicker_options = {
          orientation: 'bottom',
          format: 'yyyy-mm-dd',
          todayHighlight: true,
          language: global_lang
        };
    new_css('datepicker-css', window.filepaths['async_datepicker_css']);
    if (datepicker_langs.includes(global_lang)) {
      if (window.Shopify === undefined) {
        datepicker_path = 'js/datepicker-lang/datepicker-lang-' + global_lang + '.js';
      } else {
        datepicker_path = datepicker_path_global;
      }
      loadRes(window.filepaths['plugin_datepicker_js'], function () {
        loadRes(datepicker_path, function () {
          Array.from(input_date).forEach(function (el) {
            var minDate = null,
                maxDate = null;
            if (el.getAttribute('data-min-date') == 'today') {
              minDate = new Date();
            }
            if (el.getAttribute('data-max-days') != null) {
              maxDate = new Date();
              maxDate.setDate(maxDate.getDate() + parseInt(el.getAttribute('data-max-days')));
            }
            datepicker_options['minDate'] = minDate;
            datepicker_options['maxDate'] = maxDate;
            el.classList.add('datepicker-initialized');
            el.setAttribute('type', 'text');
            new Datepicker(el, datepicker_options);
          }, 'datepicker-loaded');
        }, 'datepicker-lang-loaded');
      });
    } else {
      loadRes(window.filepaths['plugin_datepicker_js'], function () {
        Array.from(input_date).forEach(function (el) {
          var minDate = null,
              maxDate = null;
          if (el.getAttribute('data-min-date') == 'today') {
            minDate = new Date();
          }
          if (el.getAttribute('data-max-days') != null) {
            maxDate = new Date();
            maxDate.setDate(maxDate.getDate() + parseInt(el.getAttribute('data-max-days')));
          }
          datepicker_options['minDate'] = minDate;
          datepicker_options['maxDate'] = maxDate;
          el.classList.add('datepicker-initialized');
          el.setAttribute('type', 'text');
          new Datepicker(el, datepicker_options);
        }, 'datepicker-loaded');
      });
    }
  }
});
window.dispatchEvent(inputDateEvt);

window.addEventListener("listCart", function(evt) {
  const list_cart = document.getElementsByClassName('l4ca');
  const list_mult = document.getElementsByClassName('l4ml');
  if (list_cart.length) {
    var removeHidden = function() {
      if (document.querySelector('#cart .empty.hidden') && document.querySelector('#cart .l4ca > li') === null) {
        document.querySelector('#cart .empty').classList.remove('hidden');
      }
      if (document.querySelector('.cart-empty.hidden') && document.querySelector('.form-cart .l4ca > li') === null) {
        document.querySelector('.cart-empty').classList.remove('hidden');
        document.querySelector('.cart-empty ~ *').classList.add('hidden');
      }
    };
  }
  function cart_remove(el) {
    const hide_delay = el.hasAttribute('data-delay') ? parseFloat(el.getAttribute('data-delay')) : 1000 * 1000;
    Array.from(el.querySelectorAll('a .icon-trash, a .icon-x-circle')).forEach(em => {
      em.closest('a').classList.add('remove');
    });
    if(el.classList.contains('in-panel')){
      Array.from(el.children).forEach(em => {
        if (em.querySelector('select')) {
          em.classList.add('has-select');
        }
      });
    }
    Array.from(el.querySelectorAll('a.remove')).forEach(function (em) {
      const par = em.closest('li');
      let timeout;
      if (par) {
        par.addEventListener('removing', function (e) {
          asyncCSS();
          if (!par.classList.contains('removing')) {
            par.classList.add('removing');
            timeout = setTimeout(function () {
              if (par.classList.contains('removing')) {
                par.classList.add('removing2');
                setTimeout(function () {
                  const ul = par.closest('ul');
                  const ul_li = Array.from(ul.children);
                  const ul_li_class = ul_li.filter(li =>
                      Array.from(li.classList).every(className => !className.startsWith('has-l4'))
                  );
                  if (ul_li_class.length < 2) {
                    ul.classList.add('is-empty');
                  }
                  const parNext = par.nextElementSibling;
                  if (parNext && Array.from(parNext.classList).some(className => className.startsWith('has-l4'))) {
                    parNext.remove();
                  }
                  par.remove();
                  // const ul_li_first = ul_li.find(li =>
                  //     Array.from(li.classList).every(className => !className.startsWith('has-l4'))
                  // );
                  // if (ul_li_first) {
                  //   ul_li_first.classList.add('first-child');
                  // }
                }, 400);
              }
            }, hide_delay);
          } else {
            par.classList.remove('removing');
            removeHidden();
            clearTimeout(timeout);
          }
          e.preventDefault();
        });
      }
    });
  }
  if (list_cart.length) {
    Array.from(list_cart).forEach(function (el) {
      cart_remove(el);
    });
  }
  const list_cart_inner_link = document.querySelectorAll('.show-l4ca:not(.toggle-l4ca-initialized)');
  Array.from(list_cart_inner_link).forEach(function (el) {
    el.classList.add('toggle-l4ca-initialized');
    el.addEventListener('click', function (e) {
      el.closest('li').classList.toggle('toggle-l4ca');
      e.preventDefault();
    });
  });
  if (list_mult.length) {
    Array.from(list_mult).forEach(function (el) {
      if (el.closest('.l4ca') === null) {
        cart_remove(el);
      }
    });
  }
});
window.dispatchEvent(listCartEvt);

// Searchbox
function removeTextSearch() {
  html_tag.classList.remove('search-full', 'user-form-active');
  html_tag.classList.add('search-cleared');
  search_id.classList.remove('has-text', 'not-empty');
  search_input[0].value = '';
  search_input[0].focus();
  if (!search_input[0] === document.activeElement) {
    setTimeout(function () {
      search_input[0].focus();
    }, 250);
  }
}

function overlayClose(n) {
  html_tag.classList.remove('search-compact-active', 'search-full', 'search-full-mode', 'user-form-active', 'm2a', 'nav-hover', 'f8fl-open');
  if (search_id) { search_id.classList.remove('full', 'has-text', 'not-empty'); }
  if (search_input) { search_input[0].value = ''; }

  if (nav_id) {
    clear_mobile_nav();
  }
  if (nav_top_id) {
    remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
  }
  if (nav_bar_id) {
    remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
  }
  if (nav_user_id) {
    remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
  }
  if (!n && module_panel.length) {
    hidePanels();
  }
}

function clearCompactSearch() {
  html_tag.classList.remove('search-compact-active', 'search-full', 'search-full-mode', 'user-form-active');
  search_id.classList.remove('full', 'has-text', 'not-empty');
  negTabIn(search_id.querySelector('fieldset'));
  search_input[0].value = '';
}

window.addEventListener("search", function(evt) {
  if (search_id) {
    let searchLinksAppended = false;

    function appendSearchLinks() {
      if (!searchLinksAppended) {
        append_url(search_id, 'Toggle', 'toggle');
        append_url(search_id, 'Toggle', 'toggle');

        const formP = search_id.querySelector('form > p, fieldset > p');
        append_url(formP, 'Clear', 'clear-toggle');
        append_url(formP, 'Clear', 'search-back');

        const searchBack = search_id.querySelector('.search-back');
        if (searchBack) {
          searchBack.setAttribute('aria-controls', 'search');
          searchBack.setAttribute('href', '#' + search_id.getAttribute('id'));
        }

        searchLinksAppended = true;
      }
    }

    if (!isMobile) {
      search_id.addEventListener('mousemove', appendSearchLinks);
    }

    search_id.addEventListener('keyup', appendSearchLinks);
    search_id.addEventListener('touchstart', appendSearchLinks, {
      passive: true
    });
    search_id.addEventListener('scroll', appendSearchLinks);

    if (search_id.classList.contains('compact')) {
      var search_compact_cont = document.createElement('span'),
          v_cm; //,
      if (nav_user_id) {
        if (nav_user_id.querySelectorAll('li.search.mobile-only').length) {
          v_cm = false;
        }
      }
      search_compact_cont.classList.add('search-compact-cont');
      append_url(search_compact_cont, 'Close', 'search-compact-toggle', '#search');
      search_compact_cont.getElementsByClassName('search-compact-toggle')[0].setAttribute('aria-controls', 'search');
      if (v_cm === false) {
        search_compact_cont.classList.add('mobile-hide');
        html_tag.classList.add('t1srn');
      }
      if (search_id.classList.contains('blur')) {
        html_tag.classList.add('search-blur');
      }
    }
    if (search_id.classList.contains('compact') && !search_id.classList.contains('compact-desktop') && !search_id.classList.contains('compact-mobile')) {
      negTabIn(search_id.querySelector('fieldset'));
    } else if (search_id.classList.contains('compact-mobile')) {
      /*enquire.register('screen and (max-width: 760px)', function () {
          negTabIn(search_id.querySelector('fieldset'));
      });*/
      function negTabIn1() {
        if (mediaMax760.matches) {
          negTabIn(search_id.querySelector('fieldset'));
        }
      }

      negTabIn1();
      mediaMax760.addEventListener('change', negTabIn1);
    } else if (search_id.classList.contains('compact-desktop')) {
      html_tag.classList.add('compact-desktop');
      /*enquire.register('screen and (min-width: 761px)', function () {
          negTabIn(search_id.querySelector('fieldset'));
      });*/
      function negTabIn2() {
        if (mediaMin760.matches) {
          negTabIn(search_id.querySelector('fieldset'));
        }
      }

      negTabIn2();
      mediaMin760.addEventListener('change', negTabIn2);
    }
    if (search_id.classList.contains('no-overlay')) {
      html_tag.classList.add('no-search-overlay');
    }
    search_id.addEventListener('click', function (e) {
      const target = e.target;
      if (target.matches('a.clear-toggle')) {
        removeTextSearch();
        e.preventDefault();
      }
      if (target.matches('a.toggle')) {
        clearCompactSearch();
        search_id.classList.remove('full', 'has-text', 'not-empty');
        html_tag.classList.remove('search-focus', 'search-full', 'search-full-mode', 'user-form-active');
        e.preventDefault();
      }
    });
    search_id.addEventListener('submit', function (e) {
      search_id.classList.add('processing');
    });
    var livesearchEl = document.getElementById('livesearch'),
        livesearch_placeholders = livesearchEl.querySelector('.search-placeholders');
    Array.from(search_input).forEach(function (el) {
      el.addEventListener('keyup', function () {
        html_tag.classList.remove('m2a');
        if (el.value.length === 0 && !livesearch_placeholders) {
          html_tag.classList.remove('search-full', 'search-full-mode', 'user-form-active');
          search_id.classList.remove('full', 'has-text', 'not-empty', 'processing');
        } else {
          html_tag.classList.add('search-full', 'search-full-mode');
          search_id.classList.add('full', 'has-text', 'not-empty');
          if (!search_id.classList.contains('no-autocomplete')) {
            search_id.classList.add('processing');
            setTimeout(function () {
              liveSearch(el, livesearch_placeholders);
            }, 300);
          }
        }
      });
      el.addEventListener('focus', function () {
        html_tag.classList.add('search-focus');
        html_tag.classList.remove('nav-hover');
        if (nav_id) {
          remove_active_submenus(nav_id.querySelectorAll('a.toggle'));
        }
        if (nav_top_id) {
          remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
        }
        if (nav_user_id) {
          remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
        }
        if (nav_bar_id) {
          remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
        }

        new_css('css-search', window.filepaths['async_search_css']);

        if (livesearch_placeholders) {
          livesearchEl.innerHTML = '';
          livesearchEl.appendChild(livesearch_placeholders);
          html_tag.classList.add('search-full', 'search-full-mode');
          search_id.classList.add('full', 'has-text');
        }
      });
    });
    Array.from(top_id.querySelectorAll('[aria-controls="search"]')).forEach(el => {
      el.setAttribute('href', '#' + search_id.getAttribute('id'));
    });
    /*if (!isMobile) {
			search_id.addEventListener('mouseover', () => new_css('css-search',  window.filepaths['async_search_css']));
		}*/
    top_id.addEventListener('click', function (e) {
      const target = e.target;
      if (target.matches('[aria-controls="search"]')) {
        compactSearch();
        appendSearchLinks();
        e.preventDefault();
      }
    });
    if (!isMobile) {
      top_id.addEventListener('mouseover', function (e) {
        new_css('css-search', window.filepaths['async_search_css']);
      });
      Array.from(top_id.querySelectorAll('[aria-controls="cart"]')).forEach(el => {
        el.addEventListener('mouseover', () => html_tag.classList.add('cart-hover'));
        el.addEventListener('mouseout', () => html_tag.classList.remove('cart-hover'));
      });
    }

    // Hide #search when clicked outside;
    /*enquire.register('screen and (min-width: 761px)', function () {
        document.addEventListener('click', function (event) {
            if (!(event.target.getAttribute('aria-controls') === 'search' || (event.target.closest('a[aria-controls]') !== null && event.target.closest('a[aria-controls]').getAttribute('aria-controls') === 'search') || event.target.closest('#search') !== null || event.target.closest('.user-login') !== null)) {
                clearCompactSearch();
            }
        });
    });*/
    function hideSearch(event) {
      if (!(event.target.getAttribute('aria-controls') === 'search' || (event.target.closest('a[aria-controls]') !== null && event.target.closest('a[aria-controls]').getAttribute('aria-controls') === 'search') || event.target.closest('#search') !== null || event.target.closest('.user-login') !== null)) {
        clearCompactSearch();
      }
    }

    function setupListener(e) {
      if (e.matches) {
        document.addEventListener('click', hideSearch);
      } else {
        document.removeEventListener('click', hideSearch);
      }
    }

    mediaMin760.addEventListener('change', setupListener);
    setupListener(mediaMin760);

    function compactSearch() {
      if (html_tag.classList.contains('search-compact-active')) {
        clearCompactSearch();
      } else {
        new_css('css-search', window.filepaths['async_search_css']);
        if (search_id.classList.contains('wide') && search_id.classList.contains('text-center-sticky')) {
          html_tag.classList.add('has-search-wide');
        }
        if (search_id.classList.contains('m-pos-up')) {
          html_tag.classList.add('m-pos-up');
        }
        html_tag.classList.add('search-compact-active');
        html_tag.classList.remove('user-form-active', 'm2a', 'nav-hover', 'search-full-mode', 'f8fl-open');
        search_id.classList.remove('full', 'has-text', 'not-empty');
        search_input[0].value = '';
        search_input[0].focus();
        if (!search_input[0] === document.activeElement) {
          setTimeout(function () {
            search_input[0].focus();
          }, 250);
        }
        posTabIn(search_id.querySelector('fieldset'));
      }
    }

  }
});
window.dispatchEvent(searchEvt);

// Newsletter pop-up
var newsletter_popup = document.querySelector('.popup-a[data-title="newsletter-popup"]');

function runTooltips(el, in1) {
  if (!el.classList.contains('ready')) {
    const innerText = el.innerHTML;

    const parentHeading = el.closest('p, h1, h2, h3, h4, h5, h6');
    if (parentHeading) {
      parentHeading.classList.add('s1tt-cont');
    }

    if (!(el.getAttribute('data-panel') || el.getAttribute('data-popup'))) {
      const dataIndexValue = 'tip-' + in1;
      // el.setAttribute('data-index', dataIndexValue);

      if (el.tagName.toLowerCase() === 'a') {
        el.setAttribute('data-popup', 'tip-' + in1);
      } else {
        append_url(el, 'Popup', 's1tt-popup');
        el.querySelector('.s1tt-popup').setAttribute('data-popup', 'tip-' + in1);
      }
      const linkedPopup = document.createElement('div');
      linkedPopup.classList.add('popup-a', 'w360');
      linkedPopup.setAttribute('data-title', dataIndexValue);
      const p = document.createElement('p');
      p.innerHTML = innerText;

      linkedPopup.appendChild(p);

      root_id.appendChild(linkedPopup);
    }
    const icon = createElementWithClass('i', 'icon-info');
    icon.setAttribute('aria-hidden', 'true');
    el.appendChild(icon);
    el.classList.add('ready');
  }
}

window.addEventListener("schemeTooltip", function (evt) {
  // Create tooltips
  var scheme_tooltip = document.querySelectorAll('.s1tt:not(.ready)');
  scheme_tooltip.forEach((el, in1) => runTooltips(el, in1));
});
window.dispatchEvent(schemeTooltipEvt);

// Popups async (move the loaded function at the top of scripts-async + delete the below if buggy)
var loadPopup = function (id, c) {
  loadRes(window.filepaths['plugin_popups_js'], function () {
    var allPopups = document.querySelectorAll('[class^="popup-"]:not(html):not(.ready, .initialized-popup)'),
        i_amount;
    if (allPopups.length > 0) {
      allPopups.semanticPopup();
    }
    openPopup(id);
    Array.from(document.getElementById(id).querySelectorAll('[tabindex="-1"]')).forEach(function (el) {
      el.removeAttribute('tabindex');
    });
    Array.from(allPopups).forEach(function (el) {
      if (!el.classList.contains('rendered')) {
        Array.from(el.getElementsByClassName('m6tb')).forEach(function (em) {
          if (typeof semanticTabs === 'function' && !el.classList.contains('tabs-initialized')) {
            semanticTabs(em);
          }
          em.classList.add('tabs-initialized');
        });

        Array.from(el.querySelectorAll('.f8vl')).forEach(em => validator_run(em));

        Array.from(el.querySelectorAll('a[data-enable], input[data-enable], button[data-enable]')).forEach(em => data_show_me(em));
        Array.from(el.querySelectorAll('a[data-disable], input[data-disable], button[data-disable]')).forEach(em => data_hide_me(em));
        Array.from(el.querySelectorAll('a[data-toggle], input[data-toggle], button[data-toggle]')).forEach(em => data_togg_me(em));

        Array.from(el.querySelectorAll('.s1tt')).forEach((el, in1) => runTooltips(el, in1));

        var select_tag = el.getElementsByTagName('select');
        if (select_tag.length && !isMobile) {
          loadRes(window.filepaths['plugin_selects_js'], function () {
            Array.from(el.getElementsByTagName('select')).forEach(function (el) {
              const hasOptionAttribute = el.querySelector('option') !== null;
              if (hasOptionAttribute) {
                selectRun(el);
              }
              selectRun(el);
            });
          }, 'selects-loaded');
        }
        const form_children = el.querySelectorAll('form > *, fieldset > *, .no-zindex, .no-zindex > *, .has-select, .f8pr > *, .l4ca.compact.in-panel > *, .l4cl.box > li, .f8pr-bulk > *');
        if (form_children.length) {
          assignIndex(form_children);
        }
        i_amount = el.getElementsByClassName('input-amount');
        if (i_amount.length) {
          Array.from(el.getElementsByClassName('input-amount')).forEach(function (el) {
            amountRun(el);
          });
          amountClick(i_amount);
        }
      }
    });
    if (cookie_popup) {
      Array.from(cookie_popup.querySelectorAll('.cookie-decline, .cookie-accept')).forEach(function (el) {
        el.addEventListener('click', function (e) {
          cookieClick(el);
          e.preventDefault();
        });
      });
    }
    if (newsletter_popup) {
      Array.from(newsletter_popup.querySelectorAll('a.close')).forEach(function (el) {
        el.addEventListener("click", function(event) {
          Cookies.set('has-newsletter', 'no', { sameSite: 'none', secure: true });
        });
      });
      newsletter_popup.querySelector('form').addEventListener("submit", function(event) {
        Cookies.set('has-newsletter', 'no', { sameSite: 'none', secure: true });
      });
    }
    if (document.getElementById(id).classList.contains('popup-blocker')) {
      html_tag.classList.add('page-blocked');
      Array.from(document.querySelectorAll('.popup-blocker a.close')).forEach(function (el) {
        var popup_delay_not_blocker = document.querySelectorAll('[data-popup-delay][data-title]:not(.popup-blocker)');
        el.addEventListener('click', function (e) {
          Cookies.set('age', 'old', { sameSite: 'none', secure: true });
          cookieClick(el);
          html_tag.classList.remove('page-blocked');
          if (popup_delay_not_blocker.length) {
            delayHandler(popup_delay_not_blocker[0]);
          }
        });
      });
    }
    if (!html_tag.classList.contains(id + '-loaded') && typeof c === 'function') {
      c();
      return true;
    }
    if (!html_tag.classList.contains(id + '-loaded')) {
      html_tag.classList.add(id + '-loaded');
    }
    return true;
  }, 'popup-loaded');
};

var allApopups = document.querySelectorAll('a[data-popup], form[data-popup]'),
    formPopups = document.querySelectorAll('form[data-popup]'),
    age_verify_popup_testmode  = general.age_verify_popup_testmode,
    newsletter_popup_testmode = general.newsletter_popup_testmode;

function popupFocus(im) {
  setTimeout(function () {
    if (document.querySelectorAll('[data-title="' + im + '"]')[0].querySelectorAll('a, input, button, select, textarea, [role="button"]')[0] != undefined) {
      document.querySelectorAll('[data-title="' + im + '"]')[0].querySelector('a, input, button, select, textarea, [role="button"]').focus();
    }
  }, 100);
}

function delayHandler(el) {
  var proceed = false;
  if (el.getAttribute('data-title') === 'newsletter-popup') {
    if (Cookies.get('has-newsletter') != 'no' || newsletter_popup_testmode) {
      proceed = true;
    }
  } else {
    proceed = true;
  }
  if (proceed) {
    if (parseFloat(el.getAttribute('data-popup-delay')) === 0) {
      loadPopup(el.getAttribute('data-title'));
      popupFocus(el.getAttribute('data-title'));
    } else {
      setTimeout(function () {
        loadPopup(el.getAttribute('data-title'));
        popupFocus(el.getAttribute('data-title'));
      }, el.getAttribute('data-popup-delay'));
    }
  }
}
window.addEventListener("popups", function(evt) {
  allApopups = document.querySelectorAll('a[data-popup]:not(.initialized-popup), form[data-popup]'),
      formPopups = document.querySelectorAll('form[data-popup]');
  for (var i = 0; i < allApopups.length; i++) {
    allApopups[i].classList.add('initialized-popup');
    allApopups[i].addEventListener('click', function (event) {
      event.preventDefault();
      hidePanels();
      loadPopup(this.getAttribute('data-popup'), function () {
        setTimeout(function () {
          linkMore();
        }, 300);
        window.dispatchEvent(productVariantsEvt);
        window.dispatchEvent(formValidateEvt);
        ajaxCart.init();
        quickShop.init();
      });
      popupFocus(this.getAttribute('data-popup'));
    });
    Array.from(formPopups).forEach(function (el) {
      if (!el.classList.contains('f8vl')) {
        el.addEventListener('submit', function (event) {
          event.preventDefault();
          loadPopup(this.getAttribute('data-popup'));
          popupFocus(this.getAttribute('data-popup'));
        });
      }
    });
  }
  const popup_delay = document.querySelectorAll('[data-popup-delay][data-title]');
  if (popup_delay.length) {
    Array.from(popup_delay).forEach(function (el) {
      if (el.classList.contains('popup-blocker')) {
        if (Cookies.get('age') === undefined || age_verify_popup_testmode) {
          delayHandler(el);
        } else if (document.querySelectorAll('[data-popup-delay][data-title]:not(.popup-blocker)')[0]) {
          delayHandler(document.querySelectorAll('[data-popup-delay][data-title]:not(.popup-blocker)')[0]);
        }
      } else {
        if (!document.getElementsByClassName('popup-blocker').length) {
          delayHandler(el);
        }
      }
    });
  }
});
window.dispatchEvent(popupsEvt);

window.addEventListener("listScrollable", function(evt) {
  // .l4cl
  var list_collection = document.getElementsByClassName('l4cl');
  if (list_collection.length) {
    Array.from(list_collection).forEach(function (el) {

      var data_li = el.querySelectorAll('li');

      if (el.classList.contains('box')) {
        lastVis(el);
      }

      /*if (el.parentNode.tagName.toLowerCase() === 'li') {
        el.parentNode.classList.add('has-l4cl', 'has-ul-class');
      }*/

      if (data_li.length) {
        Array.from(data_li).forEach(function (em) {
          var data_img = em.querySelectorAll('.check.color li[data-img]'),
              any_img = em.querySelectorAll('img:not(.color-variant-img)'),
              first_img = any_img[0],
              second_img = first_img;

          if (em.querySelectorAll('picture ~ picture').length && em.classList.contains('second-img-hover')) {
            if (em.classList.contains('second-img-first')) {
              first_img = em.querySelectorAll('picture ~ picture img')[0];
              second_img = em.querySelectorAll('picture img')[0];
            } else {
              first_img = em.querySelectorAll('picture img')[0];
              second_img = em.querySelectorAll('picture ~ picture img')[0];
            }
          }
          if (data_img.length && first_img !== undefined) {
            var productCard = em.closest('.product-card');
            // Check if variant picker is present
            if(productCard.querySelector('.variant-picker')) {
              console.log('variant picker present');
              Array.from(data_img).forEach(function (en) {
                en.addEventListener('click', function () {
                  Array.from(any_img).forEach(function (eo) {
                    eo.setAttribute('src', en.getAttribute('data-img'));
                    if (eo.hasAttribute('srcset')) {
                      eo.removeAttribute('srcset');
                    }
                  });
                });
              });
            } else {
              if (first_img !== undefined) {
                em.addEventListener('mouseover', function () {
                  Array.from(em.querySelectorAll('picture img')).forEach(function (eo) {
                    if (!eo.hasAttribute('data-src-initial')) {
                      eo.setAttribute('data-src-initial', eo.getAttribute('src'));
                    }
                    if (!eo.hasAttribute('data-srcset-initial') && eo.hasAttribute('srcset')) {
                      eo.setAttribute('data-srcset-initial', eo.getAttribute('srcset'));
                    }
                  });
                });
                em.addEventListener('mouseleave', function () {
                  Array.from(em.querySelectorAll('picture img')).forEach(function (eo) {
                    eo.setAttribute('src', eo.getAttribute('data-src-initial'));
                    if (eo.hasAttribute('data-srcset-initial')) {
                      eo.setAttribute('srcset', eo.getAttribute('data-srcset-initial'));
                    }
                  });
                });
              }
              Array.from(data_img).forEach(function (en) {
                en.addEventListener('mouseover', function () {
                  Array.from(any_img).forEach(function (eo) {
                    eo.setAttribute('src', en.getAttribute('data-img'));
                    if (eo.hasAttribute('srcset')) {
                      eo.removeAttribute('srcset');
                    }
                    if (en.hasAttribute('data-srcset-initial')) {
                      eo.setAttribute('srcset', en.getAttribute('data-srcset-initial'));
                    } else {
                      eo.removeAttribute('srcset');
                    }
                  });
                });
              });
            }
          }
        });
      }

      // Prepend big image before the list on mobile (index)
      Array.from(el.querySelectorAll('li:first-child figure.overlay')).forEach(function (el) {
        var clone_me = el.cloneNode(true);
        clone_me.classList.add('mobile-only', 'l4cl-figure-before');
        el.closest('li').classList.add('mobile-hide');
        el.closest('.l4cl').before(clone_me);
      });

      // Slider in popup (product)
      if (el.classList.contains('in-popup') && el.classList.contains('slider')) {
        if (el.children.length > 3) {
          el.classList.add('im-sliding');
        }
      }
      Array.from(el.querySelectorAll('picture.slider')).forEach(function (em) {
        var closestFig = em.closest('figure'),
            closestLi = em.closest('li'),
            let_touch_d = false,
            let_touch_m = false,
            has_bg = false,
            lbOverlays = [];
        if (el.classList.contains('mobile-scroll')) {
          let_touch_m = true;
        }
        if (!el.classList.contains('slider')) {
          let_touch_d = true;
        }
        if (closestFig !== null && closestLi !== null) {
          function initializeSlider() {
            if (!closestFig.classList.contains('slider-ready')) {
              randomize(closestFig);
              if (em.getElementsByClassName('s1lb').length) {
                Array.from(em.getElementsByClassName('s1lb')).forEach(function (child) {
                  has_bg = true;
                  lbOverlays.push(child);
                  child.remove();
                });
              }
              create_slider(em, {
                direction: 'horizontal',
                allowTouchMove: false,
                loop: false,
                autoHeight: true,
                slidesPerView: 1,
                spaceBetween: 1,
                lazy: {
                  loadPrevNext: true
                },
                breakpoints: {
                  0: {
                    allowTouchMove: let_touch_m
                  },
                  760: {
                    allowTouchMove: let_touch_d
                  }
                }
              });
            }
            if (has_bg = true) {
              lbOverlays.forEach(function (imgOverlay) {
                em.appendChild(imgOverlay);
              });
            }
            closestFig.classList.add('slider-ready');
          }
          if (!isMobile) {
            closestLi.addEventListener('mouseenter', function () {
              initializeSlider();
            });
          } else {
            function io(entries) {
              entries.map((entry) => {
                if (entry.isIntersecting) {
                  initializeSlider();
                }
              });
            }
            new IntersectionObserver(io).observe(closestLi);
          }
        }
      });
      Array.from(el.querySelectorAll('figure select')).forEach(function (em) {
        var closestFig = em.closest('figure'),
            closestLi = em.closest('li'),
            closestForm = em.closest('form');
        if (closestFig !== null && closestLi !== null && closestForm !== null) {
          closestLi.addEventListener('mouseenter', function () {
            closestLi.style.setProperty('--dh', closestFig.offsetHeight - closestForm.offsetHeight + 'px');
          });
          window.addEventListener('resize', throttle(() => {
            closestLi.style.setProperty('--dh', closestFig.offsetHeight - closestForm.offsetHeight + 'px');
          }, 500));
        }
      });
    });
  }
});
window.dispatchEvent(listScrollableEvt);

function lastVis(cont) {
  var other_li = cont.children,
      last_visible = Array.from(cont.querySelectorAll('li:not(.hidden, .has-link-more)')).pop();
  Array.from(other_li).forEach(function (el) {
    el.classList.remove('last-visible');
  });
  if (last_visible !== undefined) {
    last_visible.classList.add('last-visible');
  }
}

// More link
function detectLong(el, em) {
  if (el.clientHeight < el.scrollHeight) {
    em.classList.add('long');
  } else {
    em.classList.remove('long');
  }
}

function handleInfoAndList(el) {
  const inInfo = el.closest('.info');
  const inL4clHr = inInfo && inInfo.closest('.l4cl.list');
  if (inL4clHr) {
    const inner_p = inInfo.children[0];
    const hiddenParagraphs = inInfo.querySelectorAll('p.hidden, p:not(.link-more) .hidden');
    inInfo.classList.toggle('long', hiddenParagraphs.length > 0);
    /*const theme = html_tag.getAttribute('data-theme');
    if ((theme === 'xtra' || theme === 'xclusive') && hiddenParagraphs.length === 0) {
      if (!hiddenParagraphs.length) {
        detectLong(inner_p, inInfo);
        window.addEventListener('resize', function () {
          detectLong(inner_p, inInfo);
        });
      }
    }*/
    if (hiddenParagraphs.length === 0) {
      detectLong(inner_p, inInfo);
      window.addEventListener('resize', throttle(() => {
        detectLong(inner_p, inInfo);
      }, 500));
    }
  }
}


function linkMore() {

  var a_more = document.querySelectorAll('a.link-more:not(.link-more-initialized, .in-popup), .popup-a.shown a.link-more:not(.link-more-initialized)');

  if (a_more.length) {
    for (const el of a_more) {
      el.classList.add('link-more-initialized');
      if (el.tagName.toLowerCase() === 'a') {
        const parent = el.parentElement;
        const parents = parent.parentElement;
        const other_links = Array.from(parents.querySelectorAll('a.link-more'));
        const limit = parseFloat(el.getAttribute('data-limit')) || 5; // Use default if not specified

        const inCheck = el.closest('.check');
        if (inCheck) {
          const hiddenElements = Array.from(inCheck.querySelectorAll(`li:nth-child(n+${limit + 1})`));
          hiddenElements.forEach(em => {
            if (!em.classList.contains('link-more')) {
              em.classList.add('hidden');
            }
          });
        }

        handleInfoAndList(el);

        parent.classList.add('has-link-more');

        const closestBox = el.closest('.l4cl.box');
        if (closestBox) {
          lastVis(closestBox);
        }

        other_links.forEach((link, index) => {
          link.setAttribute('data-no', other_links.length - index);
        });

        const hrefAttribute = el.getAttribute('href');
        if (hrefAttribute === './' || hrefAttribute === '#' || hrefAttribute === null) {
          el.addEventListener('click', handleLinkClick);
        }
      }
    }
  }

  function handleLinkClick(e) {
    const parent = e.currentTarget.parentElement.parentElement;
    const hiddenElements = parent.querySelectorAll('.hidden, .was-hidden');

    hiddenElements.forEach(function (em) {
      em.classList.toggle('hidden');
      em.classList.toggle('was-hidden');
    });

    parent.classList.toggle('link-more-clicked');

    if (e.currentTarget.closest('.l4cl.box') !== null) {
      lastVis(e.currentTarget.closest('.l4cl.box'));
    }

    e.preventDefault();
  }
}
linkMore();

// .n6as (collection)
window.addEventListener("navAside", function(evt) {
  const nav_aside = document.querySelectorAll('.n6as a.toggle:not(.n6as-initalized)');
  if (nav_aside.length) {
    nav_aside.forEach(function (el) {
      el.classList.add('n6as-initalized');
      el.addEventListener('click', function (e) {
        toggle_dropdowns_simple(el.parentElement);
        e.preventDefault();
      });
    });
  }
});
window.dispatchEvent(navAsideEvt);

// .input-range (collection)
window.addEventListener("rangeSlider", function(evt) {
  const input_range = document.getElementsByClassName('input-range');
  if (input_range.length) {
    const input_range_steps = document.getElementsByClassName('input-range-steps');
    loadRes(window.filepaths['plugin_sliders_js'], function () {
      new_css('form-sliders-css', window.filepaths['async_ui_sliders_css']);
      Array.from(input_range).forEach(el => {
        const rangeInner = createElementWithClass('div', 'range-inner');
        el.appendChild(rangeInner);

        const dataMin = el.querySelector('input[min]');
        const dataMax = el.querySelector('input[max]');
        const dataEl = el.querySelector('input');
        const evt = new Event('change');
        let optConnect = true;
        let optStart = [parseFloat(dataMin.value), parseFloat(dataMax.value)];
        let isTooltip = false;

        if (el.classList.contains('single')) {
          optConnect = 'lower';
          optStart = parseFloat(dataEl.value);
        }

        if (el.classList.contains('tip')) {
          isTooltip = true;
        }

        if (!el.classList.contains('slider-is-here')) {
          noUiSlider.create(rangeInner, {
            start: optStart,
            connect: optConnect,
            step: 1,
            direction: global_dir[0],
            range: {
              'min': [parseFloat(dataMin.getAttribute('min'))],
              'max': [parseFloat(dataMax.getAttribute('max'))]
            },
            tooltips: isTooltip,
            format: {
              to: value => Math.round(value),
              from: value => Math.round(value)
            }
          });

          rangeInner.noUiSlider.on('update', (values, handle) => {
            const target = handle ? dataMax : dataMin;
            target.value = parseFloat(values[handle]).toFixed();
          });

          rangeInner.noUiSlider.on('change', (handle) => {
            const target = handle ? dataMax : dataMin;
            target.dispatchEvent(evt);
          });

          rangeInner.querySelectorAll('[role="slider"]').forEach(em => {
            em.setAttribute('aria-label', 'slider');
          });

          el.querySelectorAll('input').forEach(input => {
            input.addEventListener('blur', () => {
              const value = input.value.trim();
              if (value !== '') {
                const numValue = parseFloat(value);
                if (input.hasAttribute('min')) {
                  rangeInner.noUiSlider.set([numValue, null]);
                } else if (input.hasAttribute('max')) {
                  rangeInner.noUiSlider.set([null, numValue]);
                }
              }
            });
          });
        }

        el.classList.add('slider-is-here');
      });

      if (input_range_steps.length) {
        Array.from(input_range_steps).forEach(function (el) {
          Array.from(el.children).forEach(child => {
            const wrapper = document.createElement('span');
            wrapper.className = 'inner';
            while (child.firstChild) {
              wrapper.appendChild(child.firstChild);
            }
            child.appendChild(wrapper);
          });
          const prevEl = el.previousElementSibling;
          if (prevEl && prevEl.classList.contains('input-range')) {
            const cloneMe = el.cloneNode(true);
            cloneMe.removeAttribute('class');
            cloneMe.classList.add('range-cloned');

            const noUiBase = prevEl.querySelector('.noUi-base');
            if (noUiBase) {
              noUiBase.appendChild(cloneMe);
            }
          }
        });
      }
    }, 'sliders-loaded');
  }
});
window.dispatchEvent(rangeSliderEvt);

let isCustomStickyNavExecuted = false;
let scheduledStickyNav = false;

function customStickyNav() {
  if (scheduledStickyNav || isCustomStickyNavExecuted) return;

  scheduledStickyNav = true;

  requestAnimationFrame(() => {
    if (nav_main) {
      const winHeight = window.innerHeight;
      const navHeight = nav_main.clientHeight;
      const navOffset = nav_main.offsetTop;

      if (nav_main.closest('#nav-outer')) {
        root_styles.style.setProperty('--drop_nav_mah', `${winHeight - navHeight}px`);
      } else {
        root_styles.style.setProperty('--drop_nav_mah', `${winHeight - navHeight - nav_main.getBoundingClientRect().bottom}px`);
      }

      root_styles.style.setProperty('--drop_nav_mah_fixed', `${winHeight - navHeight - navOffset}px`);
      root_styles.style.setProperty('--mega_nav_mah_fixed', `${winHeight - navOffset}px`);
      root_styles.style.setProperty('--sticky_nav_mah', `${winHeight - navHeight}px`);

      isCustomStickyNavExecuted = true;
    }
    scheduledStickyNav = false;
  });
}

window.addEventListener('resize', throttle(() => {
  isCustomStickyNavExecuted = false;
  customStickyNav();
}, 500));

// sticky header
// [Violation] Forced reflow while executing JavaScript
window.addEventListener("stickyNav", function(evt) {
  if (top_id) {

    if (document.querySelector('#nav-top:not(.no-js)')) {
      html_tag.classList.remove('t1nt');
    } else {
      html_tag.classList.add('t1nt');
    }

    if (nav_id) {
      if (nav_id.classList.contains('sticky-menu')) {
        html_tag.classList.add('t1sn');
      } else {
        html_tag.classList.remove('t1sn');
      }
    }

    let sa = 0;
    let le = top_id;
    let n_el;

    if (nav_bar_id) {
      if (nav_bar_id.closest('#header-inner') !== null) {
        if (nav_id) {
          n_el = nav_id;
        } else {
          n_el = header_id;
        }
      } else {
        n_el = nav_bar_id;
      }
    } else {
      n_el = nav_id;
    }
    if (html_tag.classList.contains('t1sn') || n_el && n_el.classList.contains('sticky') || header_inner && header_inner.classList.contains('sticky-nav')) {
      html_tag.classList.add('t1sn');
      le = n_el;
      sa = 0;
    } else {
      le = top_id;
    }

    function io(entries) {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          le.classList.remove('fixed');
        } else {
          le.classList.add('fixed');
          customStickyNav();
          if (le.id === 'nav' || le.id === 'nav-bar') {
            /*enquire.register('screen and (min-width: 1000px)', function () {
                overlayClose(true);
            });*/
            function runOverlayClose() {
              if (mediaMin1000.matches) {
                overlayClose(true);
              }
            }

            runOverlayClose();
            mediaMin1000.addEventListener('change', runOverlayClose);
          }
          new_css('css-menu', window.filepaths['async_menu_css']);
        }
      });
    }

    const distance_counter = document.createElement('div');
    distance_counter.setAttribute('id', 'distance-counter');

    let distanceSpacerCreated = false;

    function createDistanceSpacer() {
      if (!distanceSpacerCreated) {
        const distance_spacer = document.createElement('div');
        distance_spacer.setAttribute('id', 'distance-spacer');

        distance_spacer.style.height = le.clientHeight + 'px';

        le.after(distance_spacer);

        distanceSpacerCreated = true;
      }
    }
    if (!isMobile) {
      document.addEventListener('mouseover', createDistanceSpacer, asyncOnce);
    }

    document.addEventListener('keyup', createDistanceSpacer, asyncOnce);
    document.addEventListener('touchstart', createDistanceSpacer, asyncPass);
    document.addEventListener('scroll', createDistanceSpacer, asyncPass);

    window.addEventListener('resize', throttle(() => {
      const distance_spacer = document.getElementById('distance-spacer');
      if (distance_spacer) {
        distance_spacer.style.height = le.clientHeight + 'px';
      }
    }, 500));

    let updateDistanceCounterCalculated = false;
    function updateDistanceCounterPosition() {
      if (!updateDistanceCounterCalculated) {
        if ((nav_top_id !== null || html_tag.classList.contains('t1nt')) && nav_top_id !== null) {
          sa = nav_top_id.offsetHeight;
        }
        if (!html_tag.classList.contains('t1sn')) {
          distance_counter.style.top = /*window.scrollY +*/ sa + 'px';
        }
        updateDistanceCounterCalculated = true;
      }
    }

    if (html_tag.classList.contains('t1sn')) {
      header_id.append(distance_counter);
    } else {
      root_id.append(distance_counter);
    }

    if (!isMobile) {
      document.addEventListener('mouseover', updateDistanceCounterPosition, asyncOnce);
    }
    document.addEventListener('keyup', updateDistanceCounterPosition, asyncOnce);
    document.addEventListener('touchstart', updateDistanceCounterPosition, asyncPass);
    document.addEventListener('scroll', updateDistanceCounterPosition, asyncPass);

    if (header_inner.classList.contains('no-sticky')) {
      header_id.classList.add('no-sticky');
      html_tag.classList.add('no-sticky');
    } else {
      header_id.classList.remove('no-sticky');
      html_tag.classList.remove('no-sticky');
    }
    if (header_inner.classList.contains('mobile-visible-search')) {
      top_id.classList.add('has-mobile-visible-search');
    }
    if (header_inner.classList.contains('hide-btn-mobile')) {
      top_id.classList.add('hide-btn-mobile');
    }
    if (header_inner.classList.contains('tr_h') && !isMobile) {
      top_id.classList.add('tr_h');
      header_outer.addEventListener('mouseenter', function (e) {
        html_tag.classList.add('tr_hh');
      });
      header_outer.addEventListener('mouseleave', function (e) {
        if(!html_tag.classList.contains('search-full') && !html_tag.classList.contains('search-compact-active')){
          html_tag.classList.remove('tr_hh');
        }
      });
    }
    if (header_id.classList.contains('no-sticky')) {
      html_tag.classList.add('t1ns');
    }

    if (header_id && !header_id.classList.contains('no-sticky')) {
      new IntersectionObserver(io, {
        root: null,
        rootMargin: '0px',
        threshold: 0.9
      }).observe(distance_counter);
    } else {
      html_tag.classList.add('t1st');
    }
  }

  // Closeable top bar
  let top_bar = document.getElementsByClassName('shopify-section-announcement-bar')[0];
  if (top_bar) {
    append_url(top_bar, 'Close', 'close');
    top_bar.querySelector('a.close').addEventListener('click', function (e) {
      top_bar.parentNode.removeChild(top_bar);
      if (typeof Shopify !== 'undefined' && Shopify.designMode) { } else {
        Cookies.set('notice', 'closed');
      }
      e.preventDefault();
    });
    if (Cookies.get('notice', { sameSite: 'none', secure: true }) === 'closed') {
      if (top_bar.parentNode !== null) {
        top_bar.parentNode.removeChild(top_bar);
      }
    } else {
      new_css('announcement-css', window.filepaths['async_announcement_css']);
      html_tag.classList.add('show-notice');
    }
  }

  function addOverlayClose(element) {
    if (element) {
      append_url(element, 'Close', 'overlay-close');
    }
  }
  // addOverlayClose(top_bar);

  if (top_id === null) {
    top_id = document.querySelector('.shopify-section-header-custom');
  }

  if (top_id) {
    let overlaysAppended = false;
    function appendOverlays() {
      if (!overlaysAppended) {
        addOverlayClose(top_bar);
        addOverlayClose(root_id);
        addOverlayClose(top_id);
        addOverlayClose(nav_id);
        addOverlayClose(nav_bar_id);
        addOverlayClose(header_outer);
        addOverlayClose(nav_top_id);
        addOverlayClose(header_id);
        append_url(root_id, 'Close', 'overlay-close-clipping');

        overlaysAppended = true;
      }
    }

    if (!isMobile) {
      document.addEventListener('mouseover', appendOverlays, asyncOnce);
    }
    document.addEventListener('keyup', appendOverlays, asyncOnce);
    document.addEventListener('touchstart', appendOverlays, asyncPass);
    document.addEventListener('scroll', appendOverlays, asyncPass);

    Array.from(document.querySelectorAll('a.overlay-close')).forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
      });
    });
    document.addEventListener('click', function (event) {
      if (event.target.matches('a.overlay-close, a.overlay-close-clipping')) {
        overlayClose();
        event.preventDefault();
      }
    });
  }
});
window.dispatchEvent(stickyNavEvt);

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function removeClassByPrefix(node, prefix) {
  var regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
  node.className = node.className.replace(regx, '');
  return node;
}

let forceFormFilterRender = false;
window.addEventListener("filters", function(evt) {
  // .f8sr (collection)
  var form_sort = document.getElementsByClassName('f8sr'),
      form_sort_list_view,
      form_sort_list_inline;

  function clearSortForm() {
    Array.from(form_sort).forEach((el) => {
      el.classList.remove('fixed');
      html_tag.classList.remove('f8sr-fixed');
    });
  }

  if (form_sort.length) {
    Array.from(form_sort).forEach(function (form_cont) {
      html_tag.classList.add('t1cl');
      if (form_cont.classList.contains('mobile-sticky') || form_cont.classList.contains('sticky')) {
        const trickDiv = createElementWithClass('div', 'offset-dist');
        const trickDist = createElementWithClass('div', 'inner-dist');

        function updateTrickDistHeight(div) {
          if (!div.hasHeight) {
            div.style.height = form_cont.offsetHeight + 'px';
            div.hasHeight = true;
            root_styles.style.setProperty('--f8sr_height', form_cont.offsetHeight + 'px');
          }
        }

        let updateSearchHeightExecuted = false;
        function updateSearchHeight() {
          if (search_id && search_id.clientHeight > 0) {
            root_styles.style.setProperty('--search_height', search_id.clientHeight + 'px');
            updateSearchHeightExecuted = true;
          }
        }

        function createEventListeners(element) {
          window.addEventListener('scroll', function () {
            updateTrickDistHeight(element);
            updateSearchHeight();
          });
          window.addEventListener('resize', throttle(() => {
            updateTrickDistHeight(element);
            updateSearchHeightExecuted = false;
            updateSearchHeight();
          }, 500));
          window.addEventListener('touchstart', function () {
            updateTrickDistHeight(element);
            updateSearchHeight();
          });
          window.addEventListener('keyup', function () {
            updateTrickDistHeight(element);
            updateSearchHeight();
          });
        }

        const observer = new IntersectionObserver(
            ([e]) => {
              const boundingRect = e.boundingClientRect;

              if (e.isIntersecting) {
                //console.log('Element - on screen.');
                const el_mod = form_cont.classList.contains('sticky') ? e.target.nextElementSibling : form_cont;
                el_mod.classList.remove('fixed');
                html_tag.classList.remove('f8sr-fixed');
              } else {
                const el_mod = form_cont.classList.contains('sticky') ? e.target.nextElementSibling : form_cont;
                if (boundingRect.top < 0) {
                  //console.log('Element - above screen.');
                  el_mod.classList.add('fixed');
                  html_tag.classList.add('f8sr-fixed');
                }
                if (boundingRect.bottom >= window.innerHeight) {
                  //console.log('Element - below screen.');
                  el_mod.classList.remove('fixed');
                  html_tag.classList.remove('f8sr-fixed');
                }
              }
            }, {
              threshold: [0, 1],
              rootMargin: "0px 0px 0px 0px"
            }
        );

        if (form_cont.classList.contains('sticky')) {
          const trg = form_cont;

          trickDist.classList.add('before-f8sr');
          form_cont.after(trickDiv);
          form_cont.before(trickDist);

          createEventListeners(form_cont.nextElementSibling);

          observer.observe(form_cont.previousElementSibling);
        } else if (form_cont.classList.contains('mobile-sticky') && form_cont.classList.contains('mobile-compact')) {
          const trg = form_cont.querySelector('.link-btn');

          if (trg) {
            if (trg.classList.contains('mobile-hide')) {
              form_cont.classList.add('btn-mobile-hide');
            }
          }
          
          form_cont.prepend(trickDiv);
          form_cont.prepend(trickDist);

          createEventListeners(form_cont.querySelector('.inner-dist'));

          observer.observe(form_cont.querySelector('.offset-dist'));
          if (trg !== undefined && trg !== null) {
            const clone_me = trg.cloneNode(true);
            clone_me.classList.add('clone');
            insertAfter(trg, clone_me);
          }
        }
      }
      form_sort_list_view = form_cont.getElementsByClassName('l4vw');
      form_sort_list_inline = form_cont.getElementsByClassName('l4in');

      if (form_sort_list_view.length) {
        Array.from(form_sort_list_view).forEach(function (el) {
          html_tag.classList.add('t1cl');
          if (el.getAttribute('aria-controls') !== null) {
            var im = el,
                view_item = el.querySelectorAll('li'),
                view_list = document.getElementById(im.getAttribute('aria-controls'));
            el.querySelectorAll('a > i[class*="icon-view-"]').forEach(function (el) {
              el.parentElement.addEventListener('click', function (e) {
                view_item.forEach(function (el) {
                  el.classList.remove('active');
                });
                if (el.classList.contains('icon-view-list')) {
                  saveCollectionview('collection_view', 'list');
                  view_list.classList.add('list');
                  form_cont.classList.add('list');
                  im.querySelectorAll('a > i.icon-view-list').forEach(function (el) {
                    el.closest('li').classList.add('active');
                  });
                  view_list.querySelectorAll('a.link-more').forEach(function (linkMore) {
                    handleInfoAndList(linkMore);
                  });
                }
                if (el.classList.contains('icon-view-grid')) {
                  saveCollectionview('collection_view', 'grid');
                  view_list.classList.remove('list');
                  form_cont.classList.remove('list');
                  im.querySelectorAll('a > i.icon-view-grid').forEach(function (el) {
                    el.closest('li').classList.add('active');
                  });
                }
                e.preventDefault();
              });
            });
          }
        });
      }

      if (form_sort_list_inline.length) {
        Array.from(form_sort_list_inline).forEach(function (el) {
          if (el.getAttribute('aria-controls') !== null) {
            var im = el,
                view_list = document.getElementById(im.getAttribute('aria-controls'));
            el.querySelectorAll('input').forEach(function (el) {
              el.parentElement.addEventListener('click', function (e) {
                removeClassByPrefix(view_list, 'w');
                saveCollectionview('collection_grid_view', el.getAttribute('data-width'));
                const classes = el.getAttribute('data-width').split(' ');
                classes.forEach(className => {
                  view_list.classList.add(className);
                });
              });
            });
          }
        });
      }
    });
  }

  // .f8fl (collection)
  const form_filter = document.getElementsByClassName('f8fl');
  if (form_filter.length) {
    html_tag.classList.add('t1cl');
    let formFilterRendered = false;
    function renderFormFilter() {
      if (!formFilterRendered) {
        Array.from(form_filter).forEach(function (el) {
          append_url(el, 'Close', 'f8fl-toggle');

          const elementId = el.getAttribute('id');

          if (elementId) {
            Array.from(document.querySelectorAll(`[href="#${elementId}"]`)).forEach(link => {
              link.classList.add('f8fl-toggle');
            });
          }
          Array.from(el.querySelectorAll('h1, h2, h3, h4, h5, h6')).forEach(function (el) {
            append_url(el, 'Close', 'header-toggle');
          });
        });
        Array.from(document.getElementsByClassName('f8fl-toggle')).forEach(function (el) {
          el.setAttribute('aria-controls', 'filter');
        });
        formFilterRendered = true;
      }
    }

    function handleFilterClick(event) {
      renderFormFilter();
      if (event.target.matches('a[aria-controls="filter"], a[aria-controls="filter"] *')) {
        html_tag.classList.add('has-filters');
        if (!html_tag.classList.contains('f8fl-open')) {
          hidePanels();
          html_tag.classList.add('f8fl-open');
        } else {
          html_tag.classList.remove('f8fl-open');
        }
        if (event.target.closest('.m6pn') !== null) {
          overlayClose();
        }
        getStickyFooters();
        new_css('css-filters', window.filepaths['async_filters_css']);
        new_css('css-search', window.filepaths['async_search_css']);
        event.preventDefault();
      }
    }

    function handleFilterSub(event) {
      if (event.target.matches('.f8fl a.header-toggle, .f8fl a.header-toggle *')) {
        const closestH = event.target.closest('h1, h2, h3, h4, h5, h6');
        toggle_dropdowns_simple(closestH);
        if (closestH.classList.contains('toggle') && typeof runPaddingsForInputs === 'function') {
          Array.from(nextUntil(closestH, 'h1, h2, h3, h4, h5, h6')).forEach(function (el) {
            Array.from(el.querySelectorAll('[class*="input-"][class*="fix"]')).forEach(runPaddingsForInputs);
          });
        }
        if (!closestH.hasAttribute('id')) {
          event.preventDefault();
        }
      }
    }
    if (forceFormFilterRender) {
      renderFormFilter();
      forceFormFilterRender = false;
    }
    if (!formFilterRendered) {
      document.addEventListener('click', handleFilterClick);
      document.addEventListener('click', handleFilterSub);
      document.addEventListener('keyup', function (event) {
        if (event.key === ' ') {
          handleFilterClick(event);
          handleFilterSub(event);
        }
      });
    }
  }
});
window.dispatchEvent(filtersEvt);

// Countdown timer
window.addEventListener("countdown", function(evt) {
  const countdown_tag = document.querySelectorAll('.countdown:not(.countdown-initialized)');
  var countdown_container = document.getElementsByClassName('f8pr-shipping-timer');
  if (countdown_container.length) {
    Array.from(countdown_container).forEach(function (el) {
      if (el.children.length == 0) {
        el.remove();
      }
    });
  }
  if (countdown_tag.length) {
    loadRes(window.filepaths['plugin_countdown_js'], function () {
      Array.from(countdown_tag).forEach(function (el) {
        el.classList.add('countdown-initialized');
        var container = el.closest('li, article'),
            now = new Date(),
            nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()),
            show_until = new Date(el.getAttribute('data-show-until')),
            show_from = new Date(el.getAttribute('data-show-from')),
            show_days = el.getAttribute('data-show-days'),
            word_day,
            word_days,
            word_hour,
            word_hours,
            word_min,
            word_mins,
            word_sec,
            word_secs;

        var ended = function() {
          if (container.querySelector('.countdown-ended-show') !== null) {
            el.remove();
            container.querySelector('.countdown-ended-hide').remove();
            container.querySelector('.countdown-ended-show').classList.remove('hidden');
          } else {
            container.remove();
          }
        }
        if (show_from > now || now > show_until || !show_days.includes(nowUTC.getDay())) {
          ended();
          return;
        }

        //el.innerHTML = '<span class="hidden">' + el.innerHTML + '</span>';
        const wrapper = document.createElement('span');
        wrapper.className = 'hidden';
        while (el.firstChild) {
          wrapper.appendChild(el.firstChild);
        }
        el.appendChild(wrapper);

        if (el.getAttribute('data-day') !== null) {
          word_day = el.getAttribute('data-day');
        } else {
          word_day = 'day';
        }
        if (el.getAttribute('data-days') !== null) {
          word_days = el.getAttribute('data-days');
        } else {
          word_days = 'days';
        }
        if (el.getAttribute('data-hour') !== null) {
          word_hour = el.getAttribute('data-hour');
        } else {
          word_hour = 'hour';
        }
        if (el.getAttribute('data-hours') !== null) {
          word_hours = el.getAttribute('data-hours');
        } else {
          word_hours = 'hours';
        }
        if (el.getAttribute('data-minute') !== null) {
          word_min = el.getAttribute('data-minute');
        } else {
          word_min = 'minute';
        }
        if (el.getAttribute('data-minutes') !== null) {
          word_mins = el.getAttribute('data-minutes');
        } else {
          word_mins = 'minutes';
        }
        if (el.getAttribute('data-second') !== null) {
          word_sec = el.getAttribute('data-second');
        } else {
          word_sec = 'second';
        }
        if (el.getAttribute('data-seconds') !== null) {
          word_secs = el.getAttribute('data-seconds');
        } else {
          word_secs = 'seconds';
        }

        function renderMe() {
          if (!el.classList.contains('done')) {
            simplyCountdown(el, {
              year: show_until.getFullYear(),
              month: show_until.getMonth() + 1,
              day: show_until.getDate(),
              hours: show_until.getHours(),
              minutes: show_until.getMinutes(),
              seconds: show_until.getSeconds(),
              enableUtc: false,
              zeroPad: true,
              onEnd: function() {
                ended();
              },
              words: {
                days: {
                  singular: word_day,
                  plural: word_days
                },
                hours: {
                  singular: word_hour,
                  plural: word_hours
                },
                minutes: {
                  singular: word_min,
                  plural: word_mins
                },
                seconds: {
                  singular: word_sec,
                  plural: word_secs
                }
              }
            });
            el.classList.add('done');
            container.classList.add('done');
          }

        }
        renderMe();
      });
    }, 'countdown-loaded');
  }
});
window.dispatchEvent(countdownEvt);

// Count up (l4cu)
const list_count = document.getElementsByClassName('l4cu');
if (list_count.length) {
  function renderListCount(em) {
    function checkSpecialCharacters(str) {
      var pattern = /[+!$€£¥₹%★]/;
      return pattern.test(str);
    }
    function removeSpecialCharacter(str, char) {
      return str.replace(new RegExp("\\" + char, "g"), '');
    }
    function addClassIfContains(el, str, char, className) {
      if (str.includes(char)) {
        el.innerHTML = removeSpecialCharacter(str, char);
        el.classList.add(className);
      }
    }
    function parseCurrency(text) {
      var cleanedText = text.replace(/[^\d.-]/g, '');
      return parseFloat(cleanedText);
    }
    Array.from(em.querySelectorAll('span.clone')).forEach(function (el) {
      const str = el.innerHTML;
      const decimals = str.includes('.') ? str.split('.')[1].length : 0;
      let counting;
      if (checkSpecialCharacters(str)) {
        addClassIfContains(el, str, '+', 'has-plus');
        addClassIfContains(el, str, '!', 'has-exc');
        addClassIfContains(el, str, '$', 'has-usd');
        addClassIfContains(el, str, '€', 'has-eur');
        addClassIfContains(el, str, '£', 'has-gbp');
        addClassIfContains(el, str, '¥', 'has-jpy');
        addClassIfContains(el, str, '₹', 'has-inr');
        addClassIfContains(el, str, '%', 'has-per');
        addClassIfContains(el, str, '★', 'has-str');
      }

      function logIfSpecialCharacterAtEnd(str) {
        return /[+!$€£¥₹%★]$/.test(str);
      }
      if (logIfSpecialCharacterAtEnd(str)) {
        el.classList.add('after');
      }
      const sts = parseCurrency(el.getAttribute('data-val'));
      if (typeof CountUp === 'function') {
        counting = new CountUp(el, parseFloat(el.getAttribute('data-val')), {
          decimalPlaces: decimals,
          duration: 3
        });
        if (!counting.error) {
          counting.start();
        }
      }
    });
  }
  loadRes(window.filepaths['plugin_countup_js'], function () {
    Array.from(list_count).forEach(function (em) {
      Array.from(em.querySelectorAll('span:first-child')).forEach(function (el) {
        const cloneMe = el.cloneNode(true);
        const str = el.innerHTML;

        const wrapper = document.createElement('span');
        wrapper.className = 'main';
        while (el.firstChild) {
          wrapper.appendChild(el.firstChild);
        }
        el.appendChild(wrapper);

        cloneMe.classList.add('clone');
        cloneMe.setAttribute('data-val', str);
        el.appendChild(cloneMe);
        el.classList.add('cont');
      });

      if (em.getBoundingClientRect().y < window.innerHeight) {
        renderListCount(em);
      }

      function io(entries) {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            renderListCount(em);
          }
        });
      }
      new IntersectionObserver(io).observe(em);
    });
  }, 'countup-loaded');
}


function updateSliders(el) {
  if (el.classList.contains('s4wi')) {
    var sl_el = el.querySelector('.swiper-outer');

    function io(entries) {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          if (sl_el.swiper !== null) {
            sl_el.swiper.updateAutoHeight();
          }
        }
      });
    }
    new IntersectionObserver(io).observe(el);
    setTimeout(function () {
      if (sl_el.swiper !== null && sl_el.swiper !== undefined) {
        sl_el.swiper.updateAutoHeight();
      }
    }, 300);
  }
}
window.addEventListener("updateSliders", function(evt) {
  var list_collection_slider = document.querySelectorAll('.l4cl.slider:not(.in-popup)');
  if (list_collection_slider.length) {
    Array.from(list_collection_slider).forEach(function (em) {
      updateSliders(em);
    });
  }
  var module_featured = document.querySelectorAll('.m6fr');
  if (module_featured.length) {
    Array.from(module_featured).forEach(function (em) {
      updateSliders(em);
    });
  }
});
window.dispatchEvent(updateSlidersEvt);

// Floating alerts (l4al)
window.addEventListener("alerts", function(evt) {
  var list_alerts = document.querySelectorAll('.l4al:not(.inline):not(.l4al-trustbadge)');
  function countUs(element) {
    if (element.children.length === element.querySelectorAll('li.hidden').length) {
      element.classList.add('all-hidden');
    } else {
      element.classList.remove('all-hidden');
    }
  }
  if (list_alerts.length) {
    Array.from(list_alerts).forEach(function (em) {
      countUs(em);
      Array.from(em.querySelectorAll('a.close')).forEach(function (el) {
        asyncCSS();
        el.addEventListener('click', function (e) {
          el.closest('li').classList.add('fade-me-out');
          setTimeout(function () {
            el.closest('li').classList.add('hidden');
          }, 400);
          e.preventDefault();
        });
      });
      Array.from(em.querySelectorAll('li')).forEach(function (es) {
        if (em.parentNode.id === 'root') {
          var dl = 5000;
          asyncCSS();
          setTimeout(function () {
            es.classList.add('fade-me-out');
          }, dl);
          setTimeout(function () {
            es.classList.add('hidden');
            countUs(em);
          }, dl + 400);
        }
      });
    });
  }
});
window.dispatchEvent(alertsEvt);

// Load print CSS on clicking print links or pressing Ctrl/Cmd+P, then trigger print dialog
const link_print = document.querySelectorAll('.link-print');
if (link_print.length) {
  link_print.forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      new_css('css-print', window.filepaths['async_print_css'], 'print');
      setTimeout(() => window.print(), 400);
    });
  });
}
document.addEventListener('keydown', function (event) {
  if ((event.ctrlKey || event.metaKey) && (event.key === 'p' || event.keyCode === 80)) {
    new_css('css-print', window.filepaths['async_print_css'], 'print');
  }
});

const link_copy = document.querySelectorAll('a[data-copy]');
if (link_copy.length) {
  const copyToClipboardAsync = str => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(str);
    }
    return Promise.reject('The Clipboard API is not available.');
  };
  Array.from(link_copy).forEach(function (el) {
    el.addEventListener('click', function (e) {
      el.classList.add('clicked');
      copyToClipboardAsync(el.dataset.copy);
      setTimeout(function () {
        el.classList.remove('clicked');
      }, 2000);
      e.preventDefault();
    });
  });
}

// tooltip
window.addEventListener("tooltip", function (evt) {
  const scheme_tip = document.getElementsByClassName('scheme-tip');
  Array.from(scheme_tip).forEach(function (el) {
    el.innerHTML = '<a class="tip-toggle" href="./"></a> <span class="tip"><span class="tip-inner">' + el.innerHTML + '</span> <a class="tip-toggle" href="./">Close</a></span>';
    const tipToggle = el.querySelector('a.tip-toggle');
    if (tipToggle) {
      tipToggle.addEventListener('click', function (e) {
        el.classList.toggle('toggle');
        e.preventDefault();
      });
    }
    el.classList.add('ready');
  });
});
window.dispatchEvent(tooltipEvt);

window.addEventListener("fancybox", function (evt) {
  // has-more toggles fancybox
  const swipper_bullets = document.querySelectorAll('a.swiper-pagination-bullet');
  Array.from(swipper_bullets).forEach(function (el, index) {
    el.addEventListener('click', function (e) {
      if (el.classList.contains('has-more')) {
        var data_fancybox = document.querySelectorAll('[data-fancybox]');
        data_fancybox[index].click();
      }
      return true;
    });
  });

  // Fancybox
  function createFancyboxAndShowItem(itemIndex, fancyName) {
    // Enable/disable swipe support for fancybox based on the type of the displayed item
    function toogleTouchSupportOnItem(item, fancybox) {
      var touchStateForItem = true;
      if (item.type !== "image") {
        touchStateForItem = false;
      }

      if (fancybox.Carousel.Panzoom.options.touch !== touchStateForItem) {
        fancybox.Carousel.Panzoom.options.touch = touchStateForItem;
        fancybox.Carousel.updatePanzoom();
      }
    }
    var showItems = [],
        all_items = document.querySelectorAll(`[data-fancybox="${fancyName}"]`),
        item,
        fbox;

    all_items.forEach(item => {
      var src_type = null,
          hrefItem = item.getAttribute('href'),
          thumbImg = null, //item.querySelector('img').getAttribute('data-src'),
          caption = item.getAttribute('data-caption'),
          alt = item.getAttribute('data-alt'),
          title = item.getAttribute('data-title');

      const imgElement = item.querySelector('img');
      if (imgElement) {
        thumbImg = imgElement.getAttribute('data-src');
      }
      if (endsWithAny(['jpg', 'jpeg', '.gif', '.png', '.webp'], hrefItem)) {
        src_type = 'image';
      }
      if (hrefItem.indexOf('youtube.com/watch') !== -1 || hrefItem.indexOf('vimeo.com/') !== -1) {
        src_type = 'video';
      }
      if (endsWithAny(['mp4', 'webm', 'ogg'], hrefItem)) {
        src_type = 'html5video';
      }
      // check if item was already added to showItems array to avoid duplication
      if (!showItems.find(_item => _item.src === hrefItem)) {
        showItems.push({
          src: hrefItem,
          type: src_type,
          preload: false,
          animated: false,
          caption: caption,
          thumb: thumbImg,
          baseClass: 'myCustomClass'
        });
      }
    });
    fbox = new Fancybox(showItems, {
      startIndex: itemIndex || 0,
      Carousel: {
        Panzoom: {
          touch: true
        }
      },
      Html: {
        video: {
          autoplay: false
        }
      },
      slug: 'gallery',
      hash: true,
      on: {
        ready: function (_fancybox) {
          toogleTouchSupportOnItem(_fancybox.items[_fancybox.Carousel.page], _fancybox);
          // show thumbs
          _fancybox.plugins.Thumbs.toggle();
          if (_fancybox.plugins.Thumbs.state == 'hidden') {
            _fancybox.plugins.Thumbs.show();
          }
        },
        done: function (_fancybox, carousel, slide) {
          // check if there's model-viewer
          var slides = _fancybox.$container.querySelectorAll('div.fancybox__thumbs div.carousel__slide'),
              all_items = document.querySelectorAll('[data-fancybox]'),
              getClass = _fancybox.$container.querySelectorAll('.fancybox__slide.is-selected')[0];
          if (slides.length < all_items.length) {
            return;
          }
          var ar_buttons = _fancybox.$container.querySelectorAll('div.fancybox__carousel model-viewer + [data-shopify-xr]');
          if (ar_buttons.length) {
            ar_buttons.forEach(function (el, index) {
              el.style.bottom = _fancybox.$container.querySelectorAll('div.fancybox__thumbs')[0].offsetHeight + 23 + "px";
            });
          }
          all_items.forEach(function (el, index) {
            if (el.querySelectorAll('model-viewer').length > 0) {
              slides[index].classList.add("has-cube");
            }
          });
          if (getClass !== undefined) {
            _fancybox.$container.setAttribute('data-class', getClass.getAttribute('class'));
            if (getClass.querySelector('video')) {
              getClass.querySelector('video').play();
            }
          }
        },
        "Carousel.change": function (_fancybox, carousel, slide) {
          var getClass;
          var iframe = _fancybox.$container.getElementsByTagName("iframe");
          Array.from(iframe).forEach(function (el) {
            var url = el.getAttribute('src');
            el.setAttribute('src', '');
            el.setAttribute('src', url);
          });
          setTimeout(function () {
            getClass = _fancybox.$container.querySelectorAll('.fancybox__slide.is-selected')[0];
            if (getClass !== undefined) {
              _fancybox.$container.setAttribute('data-class', getClass.getAttribute('class'));
              if (getClass.querySelector('video')) {
                getClass.querySelector('video').play();
              }
            }
          }, 100);
          toogleTouchSupportOnItem(_fancybox.items[carousel.page], _fancybox);

        }
      }
    });
  }
  var data_fancybox = document.querySelectorAll('[data-fancybox]:not(.fancybox-initialized)');
  if (data_fancybox.length) {
    Array.from(data_fancybox).forEach(function (el, index) {
      el.classList.add('fancybox-initialized');
      const hrefItem = el.getAttribute('href');

      if (hrefItem.includes('youtube.com/watch') || hrefItem.includes('vimeo.com/')) {
        el.setAttribute('data-type', 'video');
      }
      if (endsWithAny(['mp4', 'webm', 'ogg'], hrefItem)) {
        el.setAttribute('data-type', 'html5video');
      }
      el.addEventListener('click', function (e) {
        const fancybox_name = el.getAttribute('data-fancybox');
        if (fancybox_name) {
          const list = document.querySelectorAll('[data-fancybox="' + el.getAttribute('data-fancybox') + '"]');
          let itemIndex = Array.from(list).indexOf(el);

          const zoom = el.getAttribute('data-zoom');
          if (zoom === 'false') {
            html_tag.classList.add('fb-no-zoom');
          }

          Array.from(document.querySelectorAll('[data-fancybox="' + el.getAttribute('data-fancybox') + '"] model-viewer')).forEach(function (el) {
            el.addEventListener('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
              e.cancelBubble = true;
              return false;
            });
          });
          loadRes(window.filepaths['plugin_fancybox_js'], function () {
            new_css('css-fancybox', window.filepaths['async_fancybox_css']);
            createFancyboxAndShowItem(itemIndex, fancybox_name);
          }, 'fancybox-loaded');
        }
        e.preventDefault();
      });
    });
    document.addEventListener('click', function (event) {
      if (event.target.closest('.carousel__button.fancybox__button--close')) {
        html_tag.classList.remove('fb-no-zoom');
        //Fancybox.close();
      }
    });
  }
});
window.dispatchEvent(fancyboxEvt);


var nextUntil = function (elem, selector, filter) {
  var siblings = [];
  elem = elem.nextElementSibling;
  while (elem) {
    if (elem.matches(selector)) {
      break;
    }
    if (filter && !elem.matches(filter)) {
      elem = elem.nextElementSibling;
      continue;
    }
    siblings.push(elem);
    elem = elem.nextElementSibling;
  }
  return siblings;
};


const table_drop = document.getElementsByClassName('table-drop');
if (table_drop.length) {
  Array.from(table_drop).forEach(function (el) {
    Array.from(el.querySelectorAll('tr:not(.sub)')).forEach(et => {
      et.classList.add('not-sub');
    });

    Array.from(el.querySelectorAll('a.toggle')).forEach(em => {
      em.addEventListener('click', function (e) {
        const nextRows = nextUntil(em.closest('tr'), '.not-sub');
        em.classList.toggle('active');

        Array.from(nextRows).forEach(en => {
          en.classList.toggle('hidden');
          en.classList.toggle('active');
        });
        e.preventDefault();
      });
    });
  });
}

// Moves section ID into a span for accurate scroll anchoring.
const anchorEl = document.querySelectorAll('[id^="section-"]');
if (anchorEl.length) {
  anchorEl.forEach(el => {
    if (el.classList.contains('has-anchor')) return;

    const span = document.createElement('span');
    span.className = 'anchor';
    span.id = el.id;

    el.classList.add('has-anchor');
    el.removeAttribute('id');
    el.appendChild(span);
  });
}

function checkHeight(el) {
  requestAnimationFrame(() => {
    if (!el.closest('.link-more-clicked')) {
      el.classList.toggle('high', el.scrollHeight > el.clientHeight);
    }
  });
}
window.addEventListener("heightLimit", function (evt) {
  var module_limit = document.querySelectorAll('.m6lm:not(.m6lm-initialized)');
  if (module_limit.length) {
    Array.from(module_limit).forEach(function (el) {

      checkHeight(el);

      window.addEventListener('resize', throttle(() => {
        checkHeight(el);
      }, 500));

      const m6tbParent = el.closest('.m6tb');

      if (m6tbParent !== null) {
        Array.from(m6tbParent.querySelectorAll('.tabs-header')).forEach(function (en) {
          en.addEventListener('click', function (e) {
            checkHeight(el);
          });
        });
      }
    });
  }
});
window.dispatchEvent(heightLimitEvt);

window.addEventListener("hotspots", function (evt) {
  var list_hotspots = document.querySelectorAll('.l4hs:not(.l4hs-initialized)');
  if (list_hotspots.length) {
    new_css('css-hotspots', window.filepaths['async_hotspots_css']);
    Array.from(list_hotspots).forEach(function (el) {
      el.classList.add('l4hs-initialized');
      const figure = el.closest('figure');
      if (figure) {
        figure.classList.add('has-l4hs');
      }
      var hotspot_panels = el.getElementsByClassName('m6pn');
      if (hotspot_panels.length) {
        Array.from(hotspot_panels).forEach(function (el) {
          document.querySelector('#root').appendChild(el);
        })

      }

      let closest;
      const list_hs_legend = document.getElementsByClassName('l4hs-l');
      if (list_hs_legend.length) {
        closest = el.closest('article, .m6as, .m6ac, .m6fr, [class*="shopify-section"]');
      }

      Array.from(el.getElementsByClassName('toggle')).forEach(function (en) {
        if (en.tagName.toLowerCase() === 'a') {
          en.addEventListener('click', function (e) {
            const pt = en.parentNode;
            const pt_leg = closest ? closest.querySelector('.l4hs-l') : null;
            let pt_index;
            let pt_lg_ind;
            if (pt_leg) {
              pt_index = Array.from(pt.parentNode.children).indexOf(pt) + 1;
              pt_lg_ind = pt_leg.querySelector('li:nth-child(' + pt_index + ')');
            }
            new_css('css-hotspots', window.filepaths['async_hotspots_css']);
            if (!en.hasAttribute('data-panel') && !en.hasAttribute('data-popup')) {
              if (pt.classList.contains('toggle')) {
                pt.classList.remove('toggle');
                if (pt_leg) {
                  pt_lg_ind.classList.remove('toggle');
                }
              } else {
                Array.from(el.children).forEach(function (em) {
                  em.classList.remove('toggle');
                });
                pt.classList.add('toggle');
                if (pt_leg) {
                  Array.from(pt_leg.children).forEach(function (legLi) {
                    legLi.classList.remove('toggle');
                  });
                  pt_lg_ind.classList.add('toggle');
                }
              }
            }
            e.preventDefault();
          });
        }
      });
      Array.from(el.children).forEach(em => {
        let hds = em.offsetLeft;

        if (em.querySelector('.info')) {
          em.classList.add('has-info');
        }

        if (!global_dir[1]) {
          hds = el.clientWidth - em.offsetLeft;
        }

        if (hds > el.clientWidth * 0.5) {
          em.classList.add('inv');
        }

        if (em.offsetTop > el.clientHeight * 0.5) {
          em.classList.add('inv-v');
        }
      });
      if (list_hs_legend.length) {
        if (closest) {
          const legends = closest.querySelectorAll('[class*="l4hs"] > li');

          if (legends.length) {
            Array.from(legends).forEach(function (li) {
              const closestLeg = li.closest('.l4hs-l');

              if (closestLeg) {
                append_url(li, 'toggle', 'toggle');
              }

              const closestDef = li.closest('.l4hs');
              const index = Array.from(li.parentNode.children).indexOf(li);

              if (closestDef) {
                const mobileLink = li.querySelector('a.desktop-hide');
                const relatedLi = closest.querySelector(`[class*="l4hs-l"] li:nth-child(${index + 1})`);

                if (mobileLink && relatedLi) {
                  const clone = mobileLink.cloneNode(true);
                  clone.classList.replace('desktop-hide', 'toggle-mobile');
                  clone.classList.remove('toggle');

                  relatedLi.appendChild(clone);
                }
              }

              const relatedLis = closest.querySelectorAll(`[class*="l4hs"] li:nth-child(${index + 1})`);

              if (relatedLis.length) {
                const toggleAnchor = li.querySelector('a.toggle');

                if (toggleAnchor) {
                  toggleAnchor.addEventListener('mouseover', function () {
                    relatedLis.forEach(function (el) {
                      el.classList.add('hover');
                    });
                  });

                  toggleAnchor.addEventListener('mouseout', function () {
                    relatedLis.forEach(function (el) {
                      el.classList.remove('hover');
                    });
                  });
                  if (closestLeg) {
                    toggleAnchor.addEventListener('click', function (e) {
                      if (toggleAnchor.parentElement.classList.contains('toggle')) {
                        relatedLis.forEach(function (el) {
                          el.classList.remove('toggle');
                        });
                      } else {
                        legends.forEach(function (legend) {
                          legend.classList.remove('toggle');
                        });
                        relatedLis.forEach(function (el) {
                          el.classList.add('toggle');
                        });
                      }
                      e.preventDefault();
                    });
                  }
                }
              }
            });
          }
        }
      }
    });
  }
});
window.dispatchEvent(hotspotsEvt);

window.addEventListener("maqruee", function (evt) {
  const module_maqruee = document.querySelectorAll('.m6kn:not(.m6kn-initialized)');
  if (module_maqruee.length) {
    new_css('css-marquee', window.filepaths['async_marquee_css']);

    const mqType = [];
    const mqNorm = [];

    Array.from(module_maqruee).forEach(el => {
      el.classList.add('m6kn-initialized');
      if (el.classList.contains('type')) {
        mqType.push(el);
      } else {
        mqNorm.push(el);
      }
    });

    mqNorm.forEach(el => {
      let clone_me;
      const ul = el.children[0];
      const li = ul.children;

      el.parentElement.classList.add('has-m6kn');
      el.style.setProperty('--items', li.length);

      requestAnimationFrame(() => {
        if (ul && ul.clientWidth > 0) {
          const div_by = ul.clientWidth || ((typeof root_id !== 'undefined' && root_id.clientWidth) || 1);
          const containerWidth = (typeof root_id !== 'undefined' && root_id.clientWidth) || window.innerWidth;
          const clonesNeeded = Math.max(3, Math.ceil(containerWidth / div_by) + 2);

          for (let i = 0; i < clonesNeeded; i++) {
            clone_me = ul.cloneNode(true);
            el.appendChild(clone_me);
          }
          el.children[0].classList.add('clone');
        }
      });

      el.classList.add('done');
    });

    if (mqType.length) {
      loadRes(window.filepaths['plugin_typewriter_js'], () => {
        mqType.forEach(el => {
          const alias = [];
          const ul = el.children[0];
          const li = ul.children;
          let typing_delay = 'natural';
          let typewriter;

          const wrapper = document.createElement('span');
          wrapper.className = 'inner';

          while (el.firstChild) {
            wrapper.appendChild(el.firstChild);
          }
          el.appendChild(wrapper);

          for (let i = 0; i < li.length; i++) {
            alias.push(li[i].innerText);
          }

          if (el.classList.contains('fast')) typing_delay = 50;
          if (el.classList.contains('slow')) typing_delay = 200;
          if (el.hasAttribute('data-speed')) typing_delay = parseFloat(el.getAttribute('data-speed'));

          if (typeof Typewriter === 'function') {
            typewriter = new Typewriter(el.children[0], {
              loop: true,
              strings: alias,
              autoStart: true,
              delay: typing_delay
            });
          }

          el.classList.add('done');
        });
      });
    }
  }
});
window.dispatchEvent(maqrueeEvt);

// Toggles 'm6cp-open' class on the html element when the compare module's button is clicked.
const moduleCompare = document.querySelectorAll('.m6cp');
if (moduleCompare.length) {
  moduleCompare.forEach(el => {
    const linkBtn = el.querySelector('.link-btn a[role="button"]');
    if (!linkBtn) return;

    linkBtn.addEventListener('click', e => {
      e.preventDefault();
      html_tag.classList.toggle('m6cp-open');
    });
  });
}


// Enables native share functionality on links with data-share attribute using the Web Share API.
const shareBtns = document.querySelectorAll('a[data-share]');
if (shareBtns.length && navigator.share) {
  shareBtns.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigator.share({
        title: document.title,
        url: el.getAttribute('data-share')
      });
    });
  });
}


// Scrolls the page to target elements specified in data-scroll on option change or element click, preventing default for links.
const data_scroll_product_slider = document.querySelectorAll('[data-scroll]');
if (data_scroll_product_slider.length) {
  Array.from(data_scroll_product_slider).forEach(el => {
    const isOption = el.tagName.toLowerCase() === 'option';
    const selector = el.getAttribute('data-scroll');

    const scrollHandler = () => {
      const targetElements = document.querySelectorAll(selector);
      if (targetElements.length > 0) {
        targetElements[0].scrollIntoView();
      }
    };

    if (isOption) {
      const em = el.parentNode;
      em.addEventListener('change', () => {
        const dx = em.options[em.selectedIndex].getAttribute('data-scroll');
        if (dx !== null) {
          const targetElements = document.querySelectorAll(dx);
          if (targetElements.length > 0) {
            targetElements[0].scrollIntoView();
          }
        }
      });
    } else {
      el.addEventListener('click', e => {
        scrollHandler();
        if (el.tagName.toLowerCase() === 'a') {
          e.preventDefault();
        }
      });
    }
  });
}

// Syncs select option changes with a Swiper slider, navigating to the specified slide index.
const data_update_generic_slider = document.querySelectorAll('[data-slide-to]');
if (data_update_generic_slider.length) {
  Array.from(data_update_generic_slider).forEach(el => {
    if (el.tagName.toLowerCase() !== 'option') {
      return;
    }

    const em = el.parentNode;
    const closestLi = el.closest('li');

    if (closestLi !== null) {
      em.addEventListener('change', () => {
        const dx = em.options[em.selectedIndex].getAttribute('data-slide-to');
        if (dx !== null) {
          const findSwiper = closestLi.querySelector('.s4wi');

          if (findSwiper && findSwiper.children[0].swiper) {
            findSwiper.children[0].swiper.slideTo(dx);
          }
        }
      });
    }
  });
}

window.addEventListener("removeSDCcss", function(event) {
  const shopify_default_css = document.getElementById('shopify-dynamic-checkout');
  if (shopify_default_css) {
    shopify_default_css.remove();
  }
});
window.dispatchEvent(removeSDCcssEvt);

// Toggle 'scrolled' class on html_tag on scroll/touchmove, remove on resize.
if (!html_tag.classList.contains('scrolled')) {
  window.addEventListener('resize', throttle(() => {
    html_tag.classList.remove('scrolled');
  }, 500));
  window.addEventListener('scroll', function () {
    html_tag.classList.add('scrolled');
  }, asyncPass);
  window.addEventListener('touchmove', function () {
    html_tag.classList.add('scrolled');
  }, asyncPass);
}


// Manages CSS custom properties for header heights on different screen sizes (tablet and mobile).
let customHeaderT_ready = false;
function customHeaderT() {
  if (!customHeaderT_ready && top_id && nav_main) {
    root_styles.style.setProperty('--header_mih_c', top_id.clientHeight + 'px');
  }
  customHeaderT_ready = true;
}
let customHeaderM_ready = false;
function customHeaderM() {
  if (!customHeaderM_ready && header_outer && header_inner) {
    root_styles.style.setProperty('--sticky_offset_m', header_outer.clientHeight + 'px');
  }
  customHeaderM_ready = true;
}

function navMediaTab() {
  if (!isMobile) {
    document.addEventListener('mouseover', customHeaderT, asyncOnce);
  }
  document.addEventListener('keyup', customHeaderT, asyncOnce);
  document.addEventListener('touchstart', customHeaderT, asyncPass);
  document.addEventListener('scroll', customHeaderT, asyncPass);
  window.addEventListener('resize', throttle(() => {
    customHeaderT_ready = false;
    customHeaderT();
  }, 500));
}

function navMediaM() {
  if (!isMobile) {
    document.addEventListener('mouseover', customHeaderM, asyncOnce);
  }
  document.addEventListener('keyup', customHeaderM, asyncOnce);
  document.addEventListener('touchstart', customHeaderM, asyncPass);
  document.addEventListener('scroll', customHeaderM, asyncPass);
  window.addEventListener('resize', throttle(() => {
    customHeaderM_ready = false;
    customHeaderM();
  }, 500));
}

if (nav_main) {
  if (mediaTablet.matches) {
    navMediaTab();
  }

  mediaTablet.addEventListener('change', e => {
    if (e.matches) {
      navMediaTab();
    }
  });

  if (mediaMax760.matches) {
    navMediaM();
  }

  mediaMax760.addEventListener('change', e => {
    if (e.matches) {
      navMediaM();
    }
  });
}

var listProductSliderClick = function() {
  var list_product_slider = document.getElementsByClassName('l4pr');
  if (list_product_slider.length) {
    function l4prClick(element) {
      let index = parseInt(element.dataset.l4prIndex);

      if (isNaN(index)) {
        return;
      }
      const m6prElement = element.closest('.m6pr');
      let findSwiper;

      if (m6prElement !== null) {
        findSwiper = m6prElement.querySelector('.l4pr.s4wi').children[0].swiper;
      } else {
        findSwiper = document.querySelector('.l4pr.s4wi').children[0].swiper;
      }
      if (findSwiper !== undefined) {
        findSwiper.slideTo(index);
      }
    }

    document.addEventListener('click', function (event) {
      const isOption = event.target.tagName.toLowerCase() === 'option';
      if (!isOption && event.target.matches('[data-l4pr-index], [data-l4pr-index] *')) {
        l4prClick(event.target.closest('[data-l4pr-index]'));
        if (event.target.tagName.toLowerCase() === 'a') {
          if (event.target.classList.contains('swiper-pagination-bullet')) {
            const slide = event.target.closest('.swiper-slide');
            const siblings = Array.from(getSiblings(slide));
            siblings.forEach(em => {
              em.firstElementChild.classList.remove('swiper-pagination-bullet-active');
            });
            event.target.classList.add('swiper-pagination-bullet-active');
          }
          event.preventDefault();
        }
      }
    });
    document.addEventListener('change', function (event) {
      const isSelect = event.target.tagName.toLowerCase() === 'select';
      if (isSelect) {
        const selectedOption = event.target.options[event.target.selectedIndex];
        l4prClick(selectedOption);
      }
    });
  }
}
listProductSliderClick();

// Adds 'limit-clicked' class to parent on clicking limited links inside .check elements and prevents default action.
document.addEventListener('click', function (e) {
  const target = e.target.closest('.check[data-limit] a.limit, .check[data-limit] .limit a');
  if (target) {
    target.closest('.check').classList.add('limit-clicked');
    e.preventDefault();
  }
});

// Live search
var liveSearch = function (elem, livesearch_placeholders) {
  const searchTerm = elem.value.trim();
  getSearchResults(searchTerm, livesearch_placeholders);
}
var getSearchResults = function (searchTerm, livesearch_placeholders) {
  var liveSearchEl = document.getElementById('livesearch');
  if (searchTerm.length > 0) {
    fetch(routes.predictive_search_url + "?q=" + searchTerm + "&resources[limit]=4&resources[limit_scope]=each&section_id=livesearch")
        .then((response) => {
          if (!response.ok) {
            var error = new Error(response.status);
            throw error;
          }
          return response.text();
        })
        .then((text) => {
          const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-livesearch').innerHTML;
          liveSearchEl.innerHTML = resultsMarkup;
          search_id.classList.remove('processing');
          if (liveSearchEl.querySelectorAll('[data-search-suggestion]')) {
            Array.from(liveSearchEl.querySelectorAll('[data-search-suggestion]')).forEach(function (el) {
              el.addEventListener('click', function (e) {
                e.preventDefault();
                search_input = search_id.getElementsByTagName('input');
                search_input[0].value = el.dataset.searchSuggestion;
                search_id.classList.add('processing');
                liveSearch(search_input[0]);
              });
            });
          }
          window.dispatchEvent(ratingsEvt);
        })
        .catch((error) => {
          // this.close();
          throw error;
        });
  } else if (livesearch_placeholders) {
    liveSearchEl.innerHTML = ''
    liveSearchEl.appendChild(livesearch_placeholders);
    html_tag.classList.add('search-full', 'search-full-mode');
    search_id.classList.remove('processing');
  } else {
    search_id.classList.remove('processing');
  }
};

// Ajax cart
var ajaxCart = (function(module) {
  var init, formOverride, addCartItem, handleCartPanel, updateCartPanel, handleCartPage, updateCartPage, showCartPanel, updateItemQty, updateDiscount, handleCartUpdates, removeItem, updateCartCount, handleErrorMessage, mainProductAddToCart, addNote; // Define the functions
  var productFormContainer, cartPageContainer, sideCartContainer, cartPageTemplate, sticky, countElement, totalElement, itemsQueue, formData, formObject, line, quantity, count, config, checkedProducts, upsellElement, upsellItems, noteElement; // Define the data and elements

  init = function () {
    productFormContainer = document.querySelectorAll('form.f8pr:not(.cart-initialized), form.form-card:not(.initialized)');
    cartPageContainer = document.querySelector('.form-cart, .cart-empty');
    sticky = document.getElementById('sticky-add-to-cart');
    sideCartContainer = document.getElementById('cart');
    countElement = document.getElementById('cart-count');
    totalElement = document.getElementById('cart-total');

    if (productFormContainer.length) { formOverride();	} // when there is an product form, initialize the ajax cart for the entire form
    if (cartPageContainer != null) { // when there is an cart form, initialize the ajax cart for the inputs in the form
      cartPageContainer = cartPageContainer.parentElement;
      cartPageTemplate = cartPageContainer.id.replace('shopify-section-', '');
      handleCartUpdates(cartPageContainer);
    }
  };

  formOverride = function () {
    Array.from(productFormContainer).forEach(function (form) {
      form.classList.add('cart-initialized');
      form.addEventListener('submit', function (e) {
        new_css('form-validation-css', window.filepaths['async_validation_css']);
        form.classList.add('processing');
        if (sticky) { sticky.classList.add('processing'); }
        e.preventDefault();
        addCartItem(form);
      });
    });
  };

  addCartItem = function(form, listItem) {

    if (form.classList.contains('f8pr-buy-button')) {
      upsellElement = form.closest('div.f8pr').querySelector('.upsell-items');
    }
    // check if bulk
    (upsellElement) ? upsellItems = upsellElement.querySelectorAll('input:checked') : upsellElement = false;

    if(upsellElement && upsellItems.length > 0){
      itemsQueue = {
        items: Array.from(upsellItems).map((element) => ({
          id: parseInt(element.dataset.id),
          quantity: 1
        }))
      };
      config = {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(itemsQueue),
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With':'xmlhttprequest'
        }
      };
      fetch('/cart/add.js', config)
          .then((response) => { return response.json(); })
          .then((response) => {

            if(response.status){
              form.classList.remove('processing');
              hidePanels();
              if (typeof response.description == 'object') {
                let keys = Object.keys(response.description);
                let messages = Object.values(response.description);
                for (let i = 0; i < keys.length; i++) {
                  if (document.querySelector('[data-error-key="' + keys[i] + '"]')) {
                    document.querySelector('[data-error-key="' + keys[i] + '"]').classList.add('is-invalid');
                  }
                }
                for (let i = 0; i < messages.length; i++) {
                  handleErrorMessage(messages[i]);
                }
              } else {
                handleErrorMessage(response.description);
              }
              return;
            }

            // main product add to cart
            mainProductAddToCart(form);

            // uncheck bulk items
            upsellItems.forEach(checkbox => {
              checkbox.checked = false;
            });
          }).catch((err) => {
        console.error(err)
      });
    } else {
      mainProductAddToCart(form, listItem);
    }
  }

  mainProductAddToCart = function(form, listItem) {
    formData = new FormData(form);
    if (general.template == 'cart') {
      formData.append('sections', 'side-cart,' + cartPageTemplate);
    } else {
      formData.append('sections', 'side-cart');
    }
    config = {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/javascript'
      }
    };
    fetch(routes.cart_add_url, config)
        .then((response) => response.json())
        .then((response) => {
          form.classList.remove('processing');
          document.querySelectorAll('[data-error-key]').forEach(function (el) { el.classList.remove('is-invalid'); });
          if (sticky) { sticky.classList.remove('processing'); }
          if (response.status) {
            if (listItem) {
              listItem.remove();
            }
            hidePanels();
            if (typeof response.description == 'object') {
              let keys = Object.keys(response.description);
              let messages = Object.values(response.description);
              for (let i = 0; i < keys.length; i++) {
                if (document.querySelector('[data-error-key="' + keys[i] + '"]')) {
                  document.querySelector('[data-error-key="' + keys[i] + '"]').classList.add('is-invalid');
                }
              }
              for (let i = 0; i < messages.length; i++) {
                handleErrorMessage(messages[i]);
              }
            } else {
              handleErrorMessage(response.description);
            }
            return;
          }
          if (general.enable_cart_drawer) {
            if (listItem) {
              listItem.remove();
              updateCartPanel(response, true, true);
            } else {
              updateCartPanel(response);
            }
            if (general.template == 'cart') {
              updateCartPage(response);
            }
          } else {
            var count = new DOMParser().parseFromString(response.sections["side-cart"], 'text/html').querySelector('#shopify-section-side-cart').querySelector('[data-totalqty]').dataset.totalqty;
            var total = new DOMParser().parseFromString(response.sections["side-cart"], 'text/html').querySelector('#shopify-section-side-cart').querySelector('[data-totalprice]').dataset.totalprice;
            updateCartCount(count, total);
            window.location.href = routes.cart_url;
          }
        })
        .catch((error) => {
          console.log("addCartItem error", error);
        });
  }

  handleErrorMessage = function(errorMessage = false) {
    if (errorMessage) {
      var alertAttributes = { message: errorMessage, type: "error" },
          showAlertEvent = new CustomEvent("showAlert", {detail: alertAttributes});
      window.dispatchEvent(showAlertEvent);
    }
  }

  showCartPanel = function() {
    openPanel('cart');
    window.dispatchEvent(new CustomEvent("themeCartOpened"));
  }

  updateCartPage = function(response = false) {
    if (response) {
      const resultsMarkup = new DOMParser().parseFromString(response.sections[cartPageTemplate], 'text/html').querySelector("#shopify-section-" + cartPageTemplate).innerHTML;
      handleCartPage(resultsMarkup);
    }
  }

  updateCartPanel = function(response = false, openCartPanel = true, undoRemove = false, forceRefetch = false) {
    if (response) {
      const resultsMarkup = new DOMParser().parseFromString(response.sections["side-cart"], 'text/html').querySelector('#shopify-section-side-cart').innerHTML;
      handleCartPanel(resultsMarkup, openCartPanel, undoRemove);
    } else if (sideCartContainer.childNodes.length < 3 || forceRefetch){
      fetch(window.Shopify.routes.root + "?section_id=side-cart")
          .then((response) => {
            if (!response.ok) {
              var error = new Error(response.status);
              throw error;
            }
            return response.text();
          })
          .then((text) => {
            const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-side-cart').innerHTML;
            handleCartPanel(resultsMarkup, openCartPanel);
          })
          .catch((error) => {
            console.log("updateCartPanel error", error);
            throw error;
          });
    } else {
      showCartPanel();
    }
  }

  handleCartPage = function(resultsMarkup) {
    cartPageContainer.innerHTML = resultsMarkup;
    window.dispatchEvent(semanticInputEvt);
    window.dispatchEvent(formValidateEvt);
    window.dispatchEvent(accordeonEvt);
    window.dispatchEvent(countdownEvt);
    window.dispatchEvent(bindInputEvt);
    window.dispatchEvent(schemeTooltipEvt);
    window.dispatchEvent(popupsEvt);
    handleCartUpdates(cartPageContainer);
    updateCartCount();
  }

  handleCartPanel = function(resultsMarkup, openCartPanel, undoRemove) {
    let items = sideCartContainer.querySelectorAll('.l4ca > li');
    sideCartContainer.innerHTML = resultsMarkup;
    Array.from(items).forEach(function (item, index) {
      if (item.classList.contains('removing')) {
        if (undoRemove && sideCartContainer.querySelectorAll('.l4ca > li')[(index + 1)]) {
          sideCartContainer.querySelector('.l4ca').insertBefore(item, sideCartContainer.querySelectorAll('.l4ca > li')[(index + 1)]);
        } else if (undoRemove ) {
          sideCartContainer.querySelector('.l4ca').append(item);
        } else {
          sideCartContainer.querySelector('.l4ca').insertBefore(item, sideCartContainer.querySelectorAll('.l4ca > li')[(index)]);
        }
        if (sideCartContainer.querySelector('.empty:not(.hidden)')) {
          sideCartContainer.querySelector('.empty').classList.add('hidden');
        }
      }
    });

    if (sideCartContainer.querySelector('.product-recommendations:not(.product-recommendations-initialized)')) {
      window.dispatchEvent(recommendedProductsEvt);
    }

    window.dispatchEvent(modulePanelEvt);
    window.dispatchEvent(listCartEvt);
    window.dispatchEvent(semanticInputEvt);
    handleCartUpdates(sideCartContainer);
    window.dispatchEvent(formValidateEvt);
    window.dispatchEvent(accordeonEvt);
    updateCartCount();
    if (openCartPanel) { showCartPanel(); }
  }

  handleCartUpdates = function(container) {
    var updateItemInput = container.querySelectorAll('input[name="updates[]"]'),
        removeItemLink 	= container.getElementsByClassName('remove-from-cart-link'),
        noteElement = container.querySelector('textarea[name="note"]'),
        submitButtons = container.querySelectorAll('.link-btn a, .link-btn button'),
        discountForm = container.querySelectorAll('.discount-form:not(.listening)'),
        removeDiscountLink = container.querySelectorAll('.remove-discount:not(.listening)');

    Array.from(updateItemInput).forEach(function (input) {
      input.addEventListener('change', function (e) {
        updateItemQty(e.target, container);
      });
    });

    Array.from(discountForm).forEach(function (form) {
      form.classList.add('listening');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        updateDiscount(form, form.querySelector('input[name="discount"]').value, 'add', container);
      });
    });
    Array.from(removeDiscountLink).forEach(function (link) {
      link.classList.add('listening');
      link.addEventListener('click', function (e) {
        e.preventDefault();
        updateDiscount(link, link.dataset.discountCode, 'remove', container);
      });
    });

    if (noteElement) {
      // Debounced function to handle the input event
      const debouncedAddNote = debounce(async function (e) {
        try {
          await addNote(e.target, container);
          submitButtons.forEach(button => {
            button.disabled = false;
            button.classList.remove('disabled');
          });
          noteElement.focus();
        } catch (error) {
          console.error('Error:', error);
        }
      }, 1000);

      noteElement.addEventListener('input', function (e) {
        submitButtons.forEach(button => {
          button.disabled = true;
          button.classList.add('disabled');
        });
        debouncedAddNote(e);
      });
    }
    function debounce(func, delay) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
      };
    }
    // if (noteElement) {
    //   noteElement.addEventListener('blur', function (e) {
    //     addNote(e.target, container);
    //   });
    // }

    Array.from(removeItemLink).forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        removeItem(e.target, container);
      });
    });
  }

  addNote = function(attribute, container) {
    config = {
      method: 'POST',
      body: JSON.stringify({
        'note': attribute.value,
        'sections': 'side-cart,' + cartPageTemplate
      }),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/javascript'
      }
    };
    fetch(routes.cart_update_url, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            handleErrorMessage(response.description);
            return;
          }
          if (container === sideCartContainer && cartPageContainer != null) {
            updateCartPage(response);
          }
          if (cartPageContainer != null ) {
            if (container != sideCartContainer) {
              updateCartPanel(response, false);
            }
          }
        })
        .catch((error) => {
          console.log("addNote error", error);
        });
    }

  updateDiscount = function(element, discountCode, action, container) {
    if (!discountCode) return;
    discountCode = discountCode.toLowerCase();
    let discounts = [];
    const existingDiscounts = container.querySelectorAll('.remove-discount');
    for (const discount of existingDiscounts) {
      discounts.push(discount.dataset.discountCode.toLowerCase());
    }
    if (action === 'add') {
      if (discounts.includes(discountCode)) {
        handleErrorMessage(container.querySelector('.discount-form .already-applied-error-message ').innerText);
        return;
      }
      discounts.push(discountCode);
    } else if (action === 'remove') {
      const index = discounts.indexOf(discountCode);
      if (index === -1) return;
      discounts.splice(index, 1);
    }
    element.classList.add('processing');
    config = {
      method: 'POST',
      body: JSON.stringify({
        'discount': discounts.join(','),
        'sections': 'side-cart,' + cartPageTemplate
      }),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/javascript'
      }
    };
    fetch(routes.cart_update_url, config)
      .then((response) => response.json())
      .then((response) => {
        element.classList.remove('processing');
        if (response.status) {
          handleErrorMessage(response.description);
          return;
        }
        if (response.discount_codes.find((discount) => { return discount.code === discountCode && discount.applicable === false; })) {
          if (container.querySelector('.discount-form')) {
            container.querySelector('.discount-form input[name="discount"]').value = '';
            handleErrorMessage(container.querySelector('.discount-form .not-applicable-error-message ').innerText);
          }
          return;
        }
        if (container === sideCartContainer) {
          updateCartPanel(response);
        }
        if (cartPageContainer != null ) {
          updateCartPage(response);
          if (container != sideCartContainer) {
            updateCartPanel(response, false);
          }
        }
      })
      .catch((error) => {
        console.log("updateDiscount error", error);
      });
  };


  updateItemQty = function(input, container) {
    line = parseInt(input.dataset.line);
        quantity = parseInt(input.value);
    config = {
      method: 'POST',
      body: JSON.stringify({
        'line': line,
        'quantity': quantity,
        'sections': 'side-cart,' + cartPageTemplate
      }),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/javascript'
      }
    };
    fetch(routes.cart_change_url, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            handleErrorMessage(response.description);
            return;
          }
          if (container === sideCartContainer) {
            updateCartPanel(response);
          }
          if (cartPageContainer != null ) {
            updateCartPage(response);
            if (container != sideCartContainer) {
              updateCartPanel(response, false);
            }
          }
        })
        .catch((error) => {
          console.log("updateItemQty error", error);
        });
  };

  removeItem = function(link, container) {
    line = parseInt(link.dataset.line);
    let item = link.closest('li');
    if (container === sideCartContainer) {
      if (item.querySelector('.removed') != null) {
        item.classList.add('processing');
      }
    }
    config = {
      method: 'POST',
      body: JSON.stringify({
        'line': line,
        'quantity': 0,
        'sections': 'side-cart,' + cartPageTemplate
      }),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/javascript'
      }
    };
    fetch(routes.cart_change_url, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            handleErrorMessage(response.description);
            return;
          }
          if (container === sideCartContainer) {
            if (item.querySelector('.removed') != null) {
              item.dispatchEvent(new CustomEvent("removing"));
              item.classList.add('removing');
              item.classList.remove('processing');
              item.querySelector('.removed a').addEventListener('click', function (e) {
                item.classList.add('processing');
                let tempForm = document.createElement('form');
                tempForm.innerHTML = '<input type="hidden" name="id" value="' + e.target.dataset.id + '"><input type="hidden" name="quantity" value="' + e.target.dataset.qty + '">';
                if (e.target.dataset.selling_plan) {
                  tempForm.innerHTML += '<input type="hidden" name="selling_plan" value="' + e.target.dataset.selling_plan + '">';
                }
                for (var key in e.target.dataset) {
                  if (key.indexOf('property-') === 0) {
                    var data = JSON.parse(e.target.dataset[key]);
                    tempForm.innerHTML += '<input type="hidden" name="properties[' + data[0] + ']" value="' + data[1] + '">';
                  }
                }
                addCartItem(tempForm, item);
                tempForm.remove();
              });
            }
            updateCartPanel(response, true);
            if (cartPageContainer != null ) {
              updateCartPage(response);
            }
          } else if (cartPageContainer != null ) {
            updateCartPage(response);
            updateCartPanel(response, false);
          }
        })
        .catch((error) => {
          console.log("removeItem error", error);
        });
  };
  
  updateCartCount = function(count, total) {
    if (!count){
      count = document.querySelector('[data-totalqty]').dataset.totalqty;
    }
    if (countElement) {
      countElement.innerHTML = count;
    }

    if (totalElement) {
      if (!total) {
        total = document.querySelector('[data-totalprice]').dataset.totalprice;
      }
      totalElement.innerHTML = total;
    }
  }

  module = {
    init: init,
    load: updateCartPanel
  };
  return module;

}(ajaxCart || {}));
ajaxCart.init();

window.addEventListener("ajaxCart", function (evt) {
  ajaxCart.init();
});

window.addEventListener("localizationForm", function (evt) {
  // Currency/country/language selector
  var localization_form = document.querySelectorAll('.localization-form a:not(.listening)');
  Array.from(localization_form).forEach(function (el) {
    el.classList.add('listening');
    el.addEventListener("click", function(event) {
      event.preventDefault();
      var form = el.closest('form'),
          input = form.querySelector('input[name="locale_code"], input[name="country_code"]');
      input.value = el.dataset.value;
      form.submit();
    })
  })
});
window.dispatchEvent(localizationFormEvt);

// Collectionpage: sort_by
window.addEventListener("collectionSort", function (evt) {
  var sort_by = document.getElementById('sort_by'),
      sort_by_clone = document.getElementsByClassName('sort_by_clone')[0];
  if (sort_by != null) {
    Shopify.queryParams = [];
    if (location.search.length) {
      for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
        aKeyValue = aCouples[i].split('=');
        if (aKeyValue.length > 1) {
          Shopify.queryParams.push({
            key: decodeURIComponent(aKeyValue[0]),
            value: decodeURIComponent(aKeyValue[1])
          });
        }
      }
    }
    sort_by.addEventListener('change', function() {
      var el = this;
      if (sort_by_clone != null) { sort_by_clone.value == el.value; }
      setTimeout(function () {
        function findIndexByProperty(data, key, value) {
          for (var i = 0; i < data.length; i++) {
            if (data[i][key] == value) {
              return i;
            }
          }
          return -1;
        }
        var sort_by =  {
          key: 'sort_by',
          value: el.value
        };
        var sort_by_index = findIndexByProperty(Shopify.queryParams, 'key', 'sort_by');
        if (sort_by_index > -1) {
          Shopify.queryParams[sort_by_index] = sort_by;
        } else {
          Shopify.queryParams.push(sort_by);
        }
        var url = '';
        for (var i = 0; i < Shopify.queryParams.length; i++) {
          url += encodeURIComponent(Shopify.queryParams[i].key) + '=' + Shopify.queryParams[i].value;
          if (i < Shopify.queryParams.length - 1) {
            url += '&';
          }
        }
        location.search = url;
      },1);
    });
  }
});
window.dispatchEvent(collectionSortEvt);

// Grid or list view
var saveCollectionview = function(attribute, value) {
  const config = {
    method: 'POST',
    body: JSON.stringify({
      attributes: {
        [attribute]: value
      }
    }),
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Accept': 'application/javascript'
    }
  };
  fetch(routes.cart_update_url, config)
      .then((response) => response.json())
      .then((response) => {
        if (response.status) {
          handleErrorMessage(response.description);
          return;
        }
      })
      .catch((error) => {
        console.log("saveCollectionview error", error);
      });
}

var clearRangeInputs = function(minInput, maxInput) {
  var minInput = document.querySelector('#filter input#min'),
      maxInput = document.querySelector('#filter input#max');
  if (minInput && maxInput) {
    minInput.removeAttribute('name');
    maxInput.removeAttribute('name');
  }
}
var clearAllInputs = function() {
  clearRangeInputs();
  var inputs = document.querySelectorAll('#filter input[type="checkbox"]:checked');
  Array.from(inputs).forEach(function (el) {
    el.checked = false;
  });
}

window.addEventListener("collectionLoadMore", function (evt) {
  var collection_load_more = document.querySelectorAll('#load-more-button[data-next], #load-more-button[data-prev]');
  if (collection_load_more) {
    Array.from(collection_load_more).forEach(function (button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        var template = button.getAttribute('data-section'),
            collectionSection = document.getElementById('shopify-section-' + template),
            curr_products = collectionSection.querySelector('.results, .l4cl:not(.bls, .category)'),
            pagination_info = document.getElementById('load-more-info');
        if (button.getAttribute('data-next') != null) {
          var direction = 'next'
        } else {
          var direction = 'prev';
        }
        button.classList.add('loading');
        fetch(button.getAttribute('href'))
            .then((response) => {
              if (!response.ok) {
                var error = new Error(response.status);
                throw error;
              }
              return response.text();
            })
            .then((text) => {
              const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-' + template);
              var	new_products = resultsMarkup.querySelector('.results, .l4cl:not(.bls, .category)'),
                  new_button = resultsMarkup.querySelector('#load-more-button[data-'+ direction +'], #load-more-button[data-top]'),
                  new_pagination_info = resultsMarkup.querySelector('#load-more-info');

              if (direction == 'prev'){
                var lastScrollHeight = curr_products.scrollHeight;
              }
              if (curr_products && new_products) {
                if (direction == 'next') {
                  Array.from(new_products.children).forEach(function (el) {
                    curr_products.appendChild(el);
                  });
                } else {
                  Array.from(new_products.children).reverse().forEach(function (el) {
                    curr_products.insertBefore(el, curr_products.firstChild);
                  });
                }
              }
              if (direction == 'next' && pagination_info && pagination_info.parentNode && new_pagination_info) {
                pagination_info.parentNode.replaceChild(new_pagination_info, pagination_info);
              }
              if (button && button.parentNode && new_button) {
                button.parentNode.replaceChild(new_button, button);
              } else if (button && direction == 'prev') {
                button.remove();
              }
              if (direction == 'prev'){
                var scrollDiff = curr_products.scrollHeight - lastScrollHeight,
                    scrollTo = curr_products.scrollTop += scrollDiff;
                window.scrollTo({
                  top: scrollTo,
                  behavior: 'instant',
                });
              }
              window.history.replaceState({}, '', button.getAttribute('href'));
              saveLoadMoreAnchor();
              window.dispatchEvent(ratingsEvt);
              window.dispatchEvent(semanticInputEvt);
              window.dispatchEvent(schemeTooltipEvt);
              window.dispatchEvent(popupsEvt);
              window.dispatchEvent(collectionLoadMoreEvt);

              window.dispatchEvent(listScrollableEvt);
              window.dispatchEvent(productVariantsEvt);
              window.dispatchEvent(formZindexEvt);
              window.dispatchEvent(semanticSelectEvt);
              ajaxCart.init();
              quickShop.init();
            })
            .catch((error) => {
              console.log("collectionLoadMore error", error);
              throw error;
            });
      });
    });
  }
});
window.dispatchEvent(collectionLoadMoreEvt);

function saveLoadMoreAnchor() {
  let anchors = document.querySelectorAll('#collection > li > figure > a, .m6cl .results > div a, .m6cl .results > .l4ne a');
  if (anchors) {
    Array.from(anchors).forEach(function (el) {
      el.addEventListener('click', function(e) {
        localStorage.setItem('loadMoreItemClicked', el.getAttribute('href'));
      });
    });
  }
}

window.addEventListener("initFilters", function (evt) {
  if (document.getElementById('filter') != null) {
    new_css('form-validation-css', window.filepaths['async_validation_css']);

    // Collectionpage: filters
    var processFilters = function() {
      var filter_form_template = filter_form.dataset.template;
      var collectionSection = document.getElementById('shopify-section-' + filter_form_template);
      let sidebarGlobal = document.querySelector('.filters-aside-initialized');
      filter_form.classList.add('processing');
      if (collectionSection.querySelector('.l4cl:not(.bls)')) {
        collectionSection.querySelector('.l4cl:not(.bls)').classList.add('processing');
      }
      var minInput = document.querySelector('#filter input#min'),
          maxInput = document.querySelector('#filter input#max');
      if ((minInput && maxInput) && minInput.value == minInput.getAttribute('min') && maxInput.value == maxInput.getAttribute('max')) {
        clearRangeInputs();
      }
      var filterFormData = new FormData(document.getElementById('filter'));
      var filterParams = new URLSearchParams(filterFormData).toString();
      const filterUrl = window.location.pathname + '?section_id=' + filter_form_template + '&' + filterParams;
      fetch(filterUrl)
          .then((response) => {
            if (!response.ok) {
              var error = new Error(response.status);
              throw error;
            }
            return response.text();
          })
          .then((text) => {
            const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-' + filter_form_template);
            Array.from(filter_form.querySelectorAll('h4[data-filter-toggle].toggle')).forEach(function (el) {
              resultsMarkup.querySelector('h4[data-filter-toggle="'+ el.dataset.filterToggle +'"]').classList.add('toggle');
            });
            const toggledLinkMore = filter_form.querySelectorAll('ul[data-filter-toggle].link-more-clicked');
            collectionSection.innerHTML = resultsMarkup.innerHTML;

            // check if drawer is enabled
            if (document.querySelector('.filters-aside-initialized')) {

              // replace HTML
              const drawerMarkup = resultsMarkup.querySelector('#filters-aside')
              sidebarGlobal.innerHTML = drawerMarkup.innerHTML;
              sidebarGlobal.classList.add('processed-filter');

              // remove section filters there is always one.
              document.querySelector('#filters-aside:not(.filters-aside-initialized)').remove();
            }
            linkMore();
            Array.from(toggledLinkMore).forEach(function (el) {
              collectionSection.querySelector('ul[data-filter-toggle="'+ el.dataset.filterToggle +'"] a.link-more').click();
            });
            if (document.querySelector('.collection-wrapper')) {
              document.querySelector('.collection-wrapper').scrollIntoView();
            } else {
              window.scrollTo(0, 0);
            }
            history.pushState({ filterParams }, '', `${window.location.pathname}${filterParams && '?'.concat(filterParams)}`);
            window.dispatchEvent(collectionSortEvt);
            window.dispatchEvent(rangeSliderEvt);
            forceFormFilterRender = true;
            window.dispatchEvent(initFiltersEvt);
            window.dispatchEvent(filtersEvt);
            window.dispatchEvent(modulePanelEvt);
            window.dispatchEvent(ratingsEvt);
            window.dispatchEvent(semanticInputEvt);
            window.dispatchEvent(semanticSelectEvt);
            window.dispatchEvent(schemeTooltipEvt);
            window.dispatchEvent(popupsEvt);
            window.dispatchEvent(collectionLoadMoreEvt);
            window.dispatchEvent(listScrollableEvt);
            window.dispatchEvent(modulePanelAnchorEvt);
            window.dispatchEvent(productcardVariantsEvt);
            window.dispatchEvent(listCollectionSliderEvt);
            window.check_limit_event();
            ajaxCart.init();
            quickShop.init();
            window.dispatchEvent(heightLimitEvt);
          })
          .catch((error) => {
            console.log("processFilters error", error);
            throw error;
          });
    };

    let filter_form = document.getElementById('filter');
    var form_filter_input_anchors = filter_form.querySelectorAll('li label a');
    Array.from(form_filter_input_anchors).forEach(function (el) {
      el.classList.add('no-click');
    });

    var form_filter_clear = filter_form.querySelectorAll('a.remove-all, a.clear-range');
    if (form_filter_clear.length) {
      Array.from(form_filter_clear).forEach(function (el) {
        el.addEventListener('click', function(e) {
          e.preventDefault();
          if (el.classList.contains('remove-all')) {
            clearAllInputs();
          } else {
            clearRangeInputs();
          }
          processFilters();
        })
      });
    }
    var form_filter_inputs = document.querySelectorAll('#filter input');
    if (form_filter_inputs.length) {
      Array.from(form_filter_inputs).forEach(function (el) {
        el.addEventListener('change', function(event) {
          processFilters();
        });
      });
    }

    var layout = document.getElementById('filter').dataset.drawer;
    var filters = document.querySelector('.collection-wrapper').dataset.filters;
    if ( (filtersDrawerContent && layout === 'static') || (!filters && layout === 'drawer') ) {
      document.querySelector('#root .filters-aside-initialized').remove();
      hidePanels();
      return
    }

    var filtersDrawerContent = document.querySelector('#filters-aside');
    if (layout === 'drawer') {
      var editor = filtersDrawerContent.dataset.editor
      if(!document.querySelector('#root .filters-aside-initialized')){
        document.querySelector('#root').appendChild(filtersDrawerContent);
        filtersDrawerContent.classList.add('filters-aside-initialized');
      } else {
        if (editor) {
          if(filtersDrawerContent.classList.contains('inv')){
            document.querySelector('#root .filters-aside-initialized').classList.add('inv')
          } else {
            document.querySelector('#root .filters-aside-initialized').classList.remove('inv')
          }
          if (!document.querySelector('#root .filters-aside-initialized').classList.contains('processed-filter')){
            // processFilters();
          }
          document.querySelector('#root .filters-aside-initialized').classList.remove('processed-filter');
        }
      }
      window.dispatchEvent(navAsideEvt);
    }
  }
});
window.dispatchEvent(initFiltersEvt);

// Productpage AR functionality
var model3d = document.querySelectorAll('[data-shopify-xr]');
if (model3d.length) {
  window.ProductModel = {
    loadShopifyXR() {
      Shopify.loadFeatures([
        {
          name: 'shopify-xr',
          version: '1.0',
          onLoad: this.setupShopifyXR.bind(this),
        },
      ]);
    },
    setupShopifyXR(errors) {
      if (errors) return;
      if (!window.ShopifyXR) {
        document.addEventListener('shopify_xr_initialized', () =>
            this.setupShopifyXR()
        );
        return;
      }
      document.querySelectorAll('[id^="ProductJSON-"]').forEach((modelJSON) => {
        window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent));
        modelJSON.remove();
      });
      window.ShopifyXR.setupXRElements();
    },
  };
  if (window.ProductModel) window.ProductModel.loadShopifyXR();
}

// Productcards variant select
window.addEventListener("productcardVariants", function (evt) {
  var card_id_input = document.querySelectorAll('.l4ca > li select[name="id"]:not(.listening), .upsell-items.l4cl > li p:has(select) select:not(.listening)');
  if (card_id_input.length) {
    new_css('form-validation-css', window.filepaths['async_validation_css']);
    Array.from(card_id_input).forEach(function (el) {
      el.classList.add('listening');
      el.addEventListener('change', function() {
        setTimeout(function () {
          var selected_option = el.options[el.selectedIndex],
              productFormSection = el.closest('li'),
              variant_data = JSON.parse(selected_option.dataset.variantinfo);

          if (variant_data.image) {
            productFormSection.querySelector('img').src = variant_data.image;
            productFormSection.querySelector('img').removeAttribute('srcset', 'sizes');
          }
          if (variant_data.price) {
            productFormSection.querySelector('.price').innerHTML = '<span class="old-price"></span>&nbsp;' + variant_data.price;
          }
          if (productFormSection.querySelector('[data-variant-id]')) {
            productFormSection.querySelector('[data-variant-id]').setAttribute('data-variant-id', selected_option.value);
          }
          if (variant_data.price_old) {
            productFormSection.querySelector('.old-price').innerHTML = variant_data.price_old;
            productFormSection.querySelector('.old-price').classList.remove('hidden');
          } else {
            productFormSection.querySelector('.old-price').classList.add('hidden');
          }
          if(productFormSection.querySelector('.check > input')){
            productFormSection.querySelector('.check > input').checked = true;
            productFormSection.querySelector('.check > input').dataset.id = variant_data.id;
          }
          window.dispatchEvent(productcardVariantsEvt);
          window.dispatchEvent(semanticSelectEvt);
          ajaxCart.init();
        },1);
      });
    });
  }
});

// Productpage variant select
window.addEventListener("productVariants", function (evt) {
  let bulk = document.querySelectorAll('#root .l4ml');
  var main_id_input = Array.from(document.querySelectorAll('.m6pr select[name="variant-id"]:not(.listening), .m6pr input[type="radio"][name="variant-id"]:not(.listening), .m6pr-compact select[name="variant-id"]:not(.listening), .m6pr-compact input[type="radio"][name="variant-id"]:not(.listening)'));
  var options_input = Array.from(document.querySelectorAll('.m6pr select[name^="options"]:not(.listening), .m6pr input[type="radio"][name^="options"]:not(.listening), .m6pr-compact select[name^="options"]:not(.listening), .m6pr-compact input[type="radio"][name^="options"]:not(.listening)'));
  var inputs = main_id_input.concat(options_input);
  if (inputs.length) {
    new_css('form-validation-css', window.filepaths['async_validation_css']);
    inputs.forEach(function (el) {
      el.classList.add('listening');
      el.addEventListener('change', function() {
        setTimeout(function (token) {
          var productFormTemplate = el.dataset.template,
              productFormId = el.getAttribute('form'),
              productFormSection = document.querySelector('.m6pr-' + productFormTemplate),
              sticky = document.getElementById('sticky-add-to-cart');
          productFormSection.querySelector('form.f8pr').classList.add('processing');
          if (productFormTemplate.startsWith('quickshop')) {
            productFormTemplate = productFormTemplate.replace('quickshop-', '');
            productFormId = productFormId.replace('-quickshop', '')
            var isQuickshop = true;
          }
          const oldProductUrl = productFormSection.dataset.productUrl,
              selectedOption = el.tagName === 'SELECT' ? el.options[el.selectedIndex] : el.closest('li').querySelector('input[type="radio"]:checked'),
              allSelectedOptions = document.querySelectorAll('.f8pr-variant-selection input:checked, .f8pr-variant-selection select option:checked');
          var newProductUrl = oldProductUrl;
          if (selectedOption.dataset.productUrl) {
            newProductUrl = selectedOption.dataset.productUrl;
          } else if (allSelectedOptions[0].dataset.productUrl) {
            newProductUrl = allSelectedOptions[0].dataset.productUrl;
          }
          const isSameProduct = oldProductUrl === newProductUrl || !newProductUrl;
          var newUrl = newProductUrl,
              fetchUrl = newProductUrl,
              params = '',
              renderSections = productFormTemplate;
          if (!isSameProduct && isQuickshop) {
            quickShop.open(newProductUrl);
            return;
          }
          if (sticky) {
            renderSections += ',sticky-add-to-cart';
            var hasSticky = true;
            sticky.classList.add('processing');
          }
          if (isSameProduct) {
            params = `sections=${renderSections}`;
          }
          if (el.name == 'variant-id') {
            params += `&variant=${el.value}`;
          } else {
            const selectedOptionValues = Array.from(allSelectedOptions).map(({dataset}) => dataset.optionValueId);
            params += selectedOptionValues.length > 0
                ? `&option_values=${selectedOptionValues.join(',')}`
                : '';
          }
          if (params) { fetchUrl = newProductUrl + `?${params}`; }
          fetch(fetchUrl)
              .then((response) => {
                if (!response.ok) {
                  var error = new Error(response.status);
                  throw error;
                }
                return response.text();
              })
              .then((text) => {
                if (isSameProduct) {
                  var sections = JSON.parse(text),
                      resultsMarkupForm = new DOMParser().parseFromString(sections[productFormTemplate], 'text/html');
                } else {
                  var resultsMarkupForm = new DOMParser().parseFromString(text, 'text/html');
                }
                var selected_variant_id = resultsMarkupForm.querySelector('[data-current-variant]').dataset.currentVariant;
                if (!isSameProduct) {
                  document.querySelector('head title').innerHTML = resultsMarkupForm.querySelector('head title').innerHTML;
                  document.getElementById('content').innerHTML = resultsMarkupForm.querySelector('#content').innerHTML;
                } else {
                  productFormSection.querySelector('.f8pr').className = resultsMarkupForm.querySelector('.f8pr').className;
                  if (document.querySelector('.l4pr').dataset.variantImage) {
                    productFormSection.querySelector('.l4pr-container').innerHTML = resultsMarkupForm.querySelector('.l4pr-container').innerHTML;
                  }
                  if (resultsMarkupForm.querySelector('.l4pr .label') != null) {
                    productFormSection.querySelector('.l4pr .label').innerHTML = resultsMarkupForm.querySelector('.l4pr .label').innerHTML;
                  }
                  if (resultsMarkupForm.querySelector('.f8ps') != null && productFormSection.querySelector('.f8ps') != null && general.template == 'product' && (productFormSection == document.getElementById('shopify-section-' + productFormTemplate))) {
                    productFormSection.querySelector('.f8ps').innerHTML = resultsMarkupForm.querySelector('.f8ps').innerHTML;
                  }
                  if (resultsMarkupForm.querySelector('[data-variant-id]') != null && productFormSection.querySelector('[data-variant-id]') != null) {
                    productFormSection.querySelector('[data-variant-id]').setAttribute('data-variant-id', selected_variant_id);
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-stock') != null) {
                    Array.from(productFormSection.getElementsByClassName('f8pr-stock')).forEach(function (el) {
                      el.parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-stock'), el);
                    });
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-variant-selection') != null) {
                    productFormSection.querySelector('.f8pr-variant-selection').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-variant-selection'), productFormSection.querySelector('.f8pr-variant-selection'));
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-selling-plan') != null) {
                    Array.from(productFormSection.getElementsByClassName('f8pr-selling-plan')).forEach(function (el) {
                      var newSellingPlanEl = resultsMarkupForm.querySelector('.f8pr-selling-plan[data-element="' + el.getAttribute('data-element') + '"]');
                      newSellingPlanEl.classList = el.classList;
                      el.parentNode.replaceChild(newSellingPlanEl, el);
                    });
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-pickup') != null) {
                    Array.from(productFormSection.getElementsByClassName('f8pr-pickup')).forEach(function (el) {
                      el.parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-pickup'), el);
                    });
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-codes') != null) {
                    productFormSection.querySelector('.f8pr-codes').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-codes'), productFormSection.querySelector('.f8pr-codes'));
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-price') != null) {
                    productFormSection.querySelector('.f8pr-price').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-price'), productFormSection.querySelector('.f8pr-price'));
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-product-form-installment') != null) {
                    productFormSection.querySelector('.f8pr-product-form-installment').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-product-form-installment'), productFormSection.querySelector('.f8pr-product-form-installment'));
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-fallback-id-input') != null) {
                    productFormSection.querySelector('.f8pr-fallback-id-input').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-fallback-id-input'), productFormSection.querySelector('.f8pr-fallback-id-input'));
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-buy-button') != null) {
                    productFormSection.querySelector('.f8pr-buy-button').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-buy-button'), productFormSection.querySelector('.f8pr-buy-button'));
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-amount') != null) {
                    productFormSection.querySelector('.f8pr-amount').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-amount'), productFormSection.querySelector('.f8pr-amount'));
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-preorder') != null) {
                    productFormSection.querySelector('.f8pr-preorder').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-preorder'), productFormSection.querySelector('.f8pr-preorder'));
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-quantity-rules') != null) {
                    productFormSection.querySelector('.f8pr-quantity-rules').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-quantity-rules'), productFormSection.querySelector('.f8pr-quantity-rules'));
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-volume-pricing') != null) {
                    productFormSection.querySelector('.f8pr-volume-pricing').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-volume-pricing'), productFormSection.querySelector('.f8pr-volume-pricing'));
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-shipping-timer') != null && productFormSection.querySelector('.f8pr-shipping-timer') != null) {
                    productFormSection.querySelector('.f8pr-shipping-timer').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-shipping-timer'), productFormSection.querySelector('.f8pr-shipping-timer'));
                    window.dispatchEvent(countdownEvt);
                  }
                  if (resultsMarkupForm.querySelector('.f8pr-urgency') != null) {
                    productFormSection.querySelector('.f8pr-urgency').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-urgency'), productFormSection.querySelector('.f8pr-urgency'));
                  }
                  if (hasSticky && (productFormTemplate.endsWith('main-product')) && (!isQuickshop)) {
                    const stickyResultsMarkupForm = new DOMParser().parseFromString(sections['sticky-add-to-cart'], 'text/html');
                    sticky.innerHTML = stickyResultsMarkupForm.getElementById('shopify-section-sticky-add-to-cart').innerHTML;
                  }
                  productFormSection.querySelector('form.f8pr').classList.remove('processing', 'unavailable');
                  if (sticky) {
                    sticky.classList.remove('processing', 'unavailable');
                  }
                }
                if (isQuickshop) {
                  if (document.querySelector('.l4pr').dataset.variantImage) {
                    if (productFormSection.querySelector('.l4pr.no-thumbs-mobile')) {
                      productFormSection.querySelector('.l4pr.no-thumbs-mobile').classList.add('no-thumbs-desktop');
                    }
                    if (productFormSection.querySelector('.l4pr.static')) {
                      productFormSection.querySelector('.l4pr.static').classList.remove('static');
                    }
                    if (productFormSection.querySelector('.l4pr li.sticky')) {
                      productFormSection.querySelector('.l4pr li.sticky').remove();
                    }
                  }
                  if (productFormSection.querySelector('.f8pr-variant-selection') != null) {
                    Array.from(productFormSection.querySelectorAll('.mobile-scroll')).forEach(function (el) {
                      el.classList.remove('mobile-scroll');
                    });
                    productFormSection.querySelector('.f8pr-variant-selection').innerHTML = productFormSection.querySelector('.f8pr-variant-selection').innerHTML.replaceAll(productFormTemplate, `quickshop-${productFormTemplate}`).replaceAll(productFormId, `${productFormId}-quickshop`).replaceAll('quickshop-quickshop-', 'quickshop-');
                    if (productFormSection.querySelector('.f8pr-variant-selection a[data-popup].initialized-popup')) {
                      productFormSection.querySelector('.f8pr-variant-selection a[data-popup].initialized-popup').classList.remove('initialized-popup');
                    }
                  }
                  const buyButton = productFormSection.querySelector('.f8pr-buy-button');
                  if (buyButton && buyButton.getAttribute('id')) {
                    let id = buyButton.getAttribute('id');
                    if (!id.includes(`quickshop-${productFormTemplate}`))
                      id = id.replaceAll(productFormTemplate, `quickshop-${productFormTemplate}`);
                    if (!id.includes(`${productFormId}-quickshop`))
                      id = id.replaceAll(productFormId, `${productFormId}-quickshop`);
                    buyButton.id = id.replace(/(quickshop-)+/g, 'quickshop-').replace(/-$/, '');
                  }
                  if (productFormSection.querySelector('.f8pr-product-form-installment') != null) {
                    productFormSection.querySelector('.f8pr-product-form-installment').innerHTML = productFormSection.querySelector('.f8pr-product-form-installment').innerHTML.replaceAll(productFormTemplate, `quickshop-${productFormTemplate}`).replaceAll(productFormId, `${productFormId}-quickshop`).replaceAll('quickshop-quickshop-', 'quickshop-');
                  }
                  if (productFormSection.querySelector('.pickup') != null) {
                    Array.from(productFormSection.getElementsByClassName('pickup')).forEach(function (el) {
                      el.remove();
                    });
                  }
                  if (productFormSection.querySelector('.l4pr-container .m6tb')) {
                    productFormSection.querySelector('.l4pr-container .m6tb').remove();
                  }
                }
                if (document.querySelector('.l4pr').dataset.variantImage) {
                  window.dispatchEvent(listProductSliderEvt);
                  window.dispatchEvent(updateSlidersEvt);
                  window.dispatchEvent(fancyboxEvt);
                }
                if (resultsMarkupForm.querySelector('.l4pr').dataset.featured_media_position > 0 && resultsMarkupForm.querySelector('.l4pr').classList.contains('static') ) {
                  document.querySelector('#section-product-'+resultsMarkupForm.querySelector('.l4pr').dataset.featured_media_position+'').scrollIntoView();
                }
                if (window.Shopify && Shopify.PaymentButton) {
                  Shopify.PaymentButton.init();
                }
                window.dispatchEvent(productVariantsEvt);
                window.dispatchEvent(semanticSelectEvt);
                window.dispatchEvent(showHideDataElementEvt);
                window.dispatchEvent(sellingplansEvt);
                window.dispatchEvent(pickupAvailabilityEvt);
                // window.dispatchEvent(sizechartPopupEvt);
                window.dispatchEvent(modulePanelEvt);
                window.dispatchEvent(modulePanelAnchorEvt);
                window.dispatchEvent(schemeTooltipEvt);
                window.dispatchEvent(popupsEvt);
                window.dispatchEvent(removeSDCcssEvt);
                window.dispatchEvent(semanticInputEvt);
                window.dispatchEvent(formZindexEvt);
                window.dispatchEvent(dataChangeEvt);
                window.dispatchEvent(ratingsEvt);
                window.dispatchEvent(listProductSliderEvt);
                window.dispatchEvent(listDropEvt);
                window.dispatchEvent(fancyboxEvt);
                window.dispatchEvent(rangeSliderEvt);
                window.dispatchEvent(recommendedProductsEvt);
                window.dispatchEvent(accordeonEvt);
                window.dispatchEvent(countdownEvt);
                window.dispatchEvent(moduleTabsEvt);
                window.dispatchEvent(recentlyViewedProductsEvt);
                linkMore();
                ajaxCart.init();
                if (hasSticky && (productFormTemplate.endsWith('main-product')) && (!isQuickshop) ) {
                  window.dispatchEvent(stickyAddToCartEvt);
                }
                window.dispatchEvent(new CustomEvent("themeVariantUpdated"));
                if (general.template == 'product' && (productFormTemplate.endsWith('main-product')) && (!isQuickshop) ) {
                  window.history.replaceState({}, '', `${newUrl}${selected_variant_id ? `?variant=${selected_variant_id}` : ''}`);
                }
              })
              .catch((error) => {
                console.log("Productform variant change error", error);
                throw error;
              });
        },1);
      });
    });
  } else if (bulk.length) {
    bulk.forEach(function (el) {
      let buttonSubmit = el.closest('.f8pr, .popup-a, .f8vl, .l4ml-form') ? el.closest('.f8pr, .popup-a, .f8vl, .l4ml-form').querySelector('button[type="submit"]') : null;
      if(!buttonSubmit) { return; }
      // Change subtotal price

      el.querySelectorAll('input').forEach(function(input) {
        input.addEventListener('blur', function() {
          if (input.value == '') {
            input.value = 0;
          }
        });
        input.addEventListener('change', function() {
          // loop through all inputs and add up the values
          let total = 0;
          let price = 0;
          el.querySelectorAll('input').forEach(function(input) {
            if(input.value == '') { return; }
            total += parseInt(input.value);
            price += parseInt(input.value) * parseInt(input.getAttribute('data-price'));
          });
          let total_el;
          let price_el;
          if(buttonSubmit.closest('form').querySelector('.bulk-qty')) {
            total_el = buttonSubmit.closest('form').querySelector('.bulk-qty');
            price_el = buttonSubmit.closest('form').querySelector('.bulk-price');
          } else if (buttonSubmit.closest('.m6pr').querySelector('.bulk-qty')) {
            total_el = buttonSubmit.closest('.m6pr').querySelector('.bulk-qty');
            price_el = buttonSubmit.closest('.m6pr').querySelector('.bulk-price');
          }
          if(total_el) {
            total_el.innerHTML = total;
            price_el.innerHTML = Shopify.formatMoney(price);
          }
          if(total > 0) {
            buttonSubmit.classList.remove('disabled');
            buttonSubmit.removeAttribute('disabled');
          } else {
            buttonSubmit.classList.add('disabled');
          }
        });
      });

      // Add products to cart
      buttonSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        new_css('form-validation-css', window.filepaths['async_validation_css']);
        this.classList.add('processing');
        this.closest('form').classList.add('processing');
        let productData = [];
        el.querySelectorAll('li').forEach(function(variant) {
          let input = variant.querySelector('input');
          if(input == null) { return; }
          if(input.value > 0) {
            productData.push({'id': input.getAttribute('data-id'), 'quantity': input.value})
            input.value = 0;
          }
          productData.reverse();
        });
        // If there is no variant with quantity selected
        if(productData.length == 0) {
          this.closest('form').classList.remove('processing');
          return;
        }
        // Add variants to cart
        let itemsQueue = {
          items: productData.map((element) => ({
            id: parseInt(element.id),
            quantity: parseInt(element.quantity)
          }))
        };
        const config = {
          method: 'POST',
          credentials: 'same-origin',
          body: JSON.stringify(itemsQueue),
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With':'xmlhttprequest'
          }
        };
        fetch('/cart/add.js', config)
            .then((response) => { return response.json(); })
            .then((response) => {
              this.closest('form').classList.remove('processing');
              if(response.status){
                console.log('response.status: ', response.status)
                let handleErrorMessage = function(errorMessage = false) {
                  if (errorMessage) {
                    var alertAttributes = { message: errorMessage, type: "error" },
                        showAlertEvent = new CustomEvent("showAlert", {detail: alertAttributes});
                    window.dispatchEvent(showAlertEvent);
                  }
                }
                if (typeof response.description == 'object') {
                  let keys = Object.keys(response.description);
                  let messages = Object.values(response.description);
                  for (let i = 0; i < keys.length; i++) {
                    if (document.querySelector('[data-error-key="' + keys[i] + '"]')) {
                      document.querySelector('[data-error-key="' + keys[i] + '"]').classList.add('is-invalid');
                    }
                  }
                  for (let i = 0; i < messages.length; i++) {
                    handleErrorMessage(messages[i]);
                  }
                } else {
                  handleErrorMessage(response.description);
                }
                return;
              } else {
                ajaxCart.load(false, true, false, true);
              }
            }).catch((err) => {
          console.error(err)
        });
      });
    });
  }
});
window.dispatchEvent(productVariantsEvt);

window.addEventListener("stickyAddToCart", function (evt) {
  var stickyAddToCart = document.querySelector('#product_id_sticky:not(.listening)');
  if (stickyAddToCart) {
    stickyAddToCart.classList.add('listening');
    stickyAddToCart.addEventListener('change', function (event) {
      let currentTarget = event.currentTarget
      setTimeout(function () {
        const select = document.querySelector('#main-product select[name="variant-id"]');
        if (select) {
          select.value = currentTarget.value;
          select.dispatchEvent(changeEvent);
        } else {
          const inputs = document.querySelectorAll('#main-product input[type="radio"][name="variant-id"]');
          Array.from(inputs).forEach(function (input) {
            if (input.value == currentTarget.value) {
              input.checked = true;
              input.dispatchEvent(changeEvent);
            } else {
              input.checked = false;
            }
          });
        }
      }, 1);
    })
  }
});
window.dispatchEvent(stickyAddToCartEvt);

// Productpage selling plans
window.addEventListener("sellingplans", function (evt) {
  var selling_plan_group_input = document.querySelectorAll('input[name="selling_plan_group"]');
  var selling_plan_input = document.querySelectorAll('input[name="selling_plan"]');
  if (selling_plan_group_input.length) {
    Array.from(selling_plan_group_input).forEach(function (el) {
      var productFormTemplate = el.dataset.template,
          productForm = document.querySelector('.m6pr-'+ productFormTemplate);
      el.addEventListener('change', function() {
        if (productForm.querySelector('input[id^="purchase_option_single"][name="selling_plan_group"]:checked') != null) {
          changeSellingPlanRequired(false, el.getAttribute('data-enable'));
        } else {
          changeSellingPlanRequired(true, el.getAttribute('data-enable'));
        }
      });
    });
    var changeSellingPlanRequired = function(addAttribute, container) {
      Array.from(selling_plan_input).forEach(function (el) {
        el.checked = false;
        el.removeAttribute('required');
        el.setAttribute('type', 'hidden');
        if (el.getAttribute('name')) {
          el.setAttribute('xname', el.getAttribute('name'));
          el.removeAttribute('name');
        }
        if (addAttribute && (el.closest('[data-element]').getAttribute('data-element') == container)) {
          el.setAttribute('required','required');
          el.setAttribute('type', 'radio');
          if (el.getAttribute('xname')) {
            el.setAttribute('name', el.getAttribute('xname'));
            el.removeAttribute('xname');
          }
        }
      });
    };
  }
});
window.dispatchEvent(sellingplansEvt);

// Productpage pickup availability
window.addEventListener("pickupAvailability", function (evt) {
  var pickup_availability_anchor = document.querySelectorAll('[data-pickup-availability]');
  if (pickup_availability_anchor.length) {
    Array.from(pickup_availability_anchor).forEach(function (el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        var selected_variant_id = el.dataset.id;
        fetch(window.Shopify.routes.root + 'variants/'+ selected_variant_id +'/?section_id=pickup-availability')
            .then((response) => {
              if (!response.ok) {
                var error = new Error(response.status);
                throw error;
              }
              return response.text();
            })
            .then((text) => {
              const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').getElementById('pickup-availability').innerHTML;
              var section = document.getElementById('pickup-availability');
              section.innerHTML = resultsMarkup;
              openPanel('pickup-availability');
            })
            .catch((error) => {
              console.log("pickupAvailability error", error);
              throw error;
            });
      });
    });
  }
});
window.dispatchEvent(pickupAvailabilityEvt);

// window.addEventListener("sizechartPopup", function(evt) {
// 	var sizechart_popup = document.querySelectorAll('.m6pn[id^="sizing-chart-popup-"]:not(.sizechart-popup-initalized)');
// 	var sizechart_popupActive = document.querySelectorAll('.m6pn.sizechart-popup-initalized[id^="sizing-chart-popup-"]');
// 	hidePanels();

// 	if (sizechart_popupActive.length && sizechart_popup.length) {
// 		sizechart_popupActive.forEach(el => el.remove());
// 	}

// 	if (sizechart_popup.length) {
// 		sizechart_popup.forEach(el => {
// 			el.classList.add('sizechart-popup-initalized');
// 			document.querySelector('#root').appendChild(el);
// 		});
// 	}

// });
// window.dispatchEvent(sizechartPopupEvt);

// Productpage recommended products
window.addEventListener("recommendedProducts", function (evt) {
  var product_recommendations = document.querySelectorAll(".product-recommendations:not(.product-recommendations-initialized)");
  if (product_recommendations.length) {
    Array.from(product_recommendations).forEach(function (el) {
      el.classList.add('product-recommendations-initialized');
      var product_id = el.dataset.productId.split(','),
          limit = el.dataset.limit,
          template = el.dataset.template,
          intents = el.dataset.intent.split(','),
          count = 0,
          calls = intents.length * product_id.length;
      if (product_id === undefined) {
        document.getElementById('shopify-section-' + template).classList.remove('hidden');
        return;
      }
      if (el.classList.contains('cart-upsell')) {
        var cart_upsell = true;
      }
      var fetchRecommendedProducts = function(url, intent) {
        fetch(url)
            .then((response) => {
              if (!response.ok) {
                var error = new Error(response.status);
                throw error;
              }
              return response.text();
            })
            .then((text) => {
              count++;
              const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-' + template + ' .product-recommendations');
              if (calls == 1) {
                el.querySelector('article, .l4cl, .l4ca').innerHTML = resultsMarkup.querySelector('article, .l4cl, .l4ca').innerHTML;
              } else {
                Array.from(resultsMarkup.querySelector('article, .l4cl, .l4ca').children).forEach(function (em) {
                  el.querySelector('article, .l4cl, .l4ca').appendChild(em);
                });
              }
              if (count == calls) {
                var seen = {};
                el.querySelectorAll('.l4ca > li[data-product-id]').forEach(function (el) {
                  if (seen[el.dataset.productId]) {
                    el.remove();
                  } else {
                    seen[el.dataset.productId] = true;
                  }
                });
                if (el.querySelector('.l4cl, .l4ca') && el.querySelector('.l4cl, .l4ca').children.length == 0) {
                  el.innerHTML = '';
                  if (el.classList.contains('tab')) {
                    el.closest('.m6tb').querySelector('nav ul li[data-index="'+ el.getAttribute('data-index') +'"]').remove();
                    if (el.closest('.m6tb').querySelector('nav ul li a') != null) {
                      el.closest('.m6tb').querySelector('nav ul li a').click();
                    }
                  }
                  return;
                }
                if (resultsMarkup.getAttribute('data-hide') != null) {
                  document.getElementById('shopify-section-' + template).classList.add('margin-mobile-content');
                  if (intent == 'related') {
                    if (resultsMarkup.getAttribute('data-tab') != null) {
                      document.getElementById('shopify-section-' + template).querySelector('li[data-index="'+ el.closest('[data-index]').getAttribute('data-index') +'"]').remove();
                      el.innerHTML = '';
                    } else {
                      document.getElementById('shopify-section-' + template).innerHTML = '';
                      return;
                    }
                  } else {
                    el.innerHTML = '';
                    return;
                  }
                }
                if (template && document.getElementById('shopify-section-' + template)) {
                  document.getElementById('shopify-section-' + template).classList.remove('hidden');
                }
                el.classList.remove('hidden');
                window.dispatchEvent(listScrollableEvt);
                window.dispatchEvent(listCollectionSliderEvt);
                window.dispatchEvent(formZindexEvt);
                window.dispatchEvent(semanticInputEvt);
                window.dispatchEvent(ratingsEvt);
                window.dispatchEvent(schemeTooltipEvt);
                window.dispatchEvent(popupsEvt);
                window.dispatchEvent(semanticSelectEvt);
                window.dispatchEvent(productcardVariantsEvt);
                window.check_limit_event();
                ajaxCart.init();
                quickShop.init();
              }
            })
            .catch((error) => {
              console.log("recommendedProducts error", error);
              throw error;
            });
      };
      intents.forEach(function (intent) {
        if (el.classList.contains('cart-upsell') && intent == 'related') {
          limit = 4;
        }
        product_id.forEach(function (id) {
          var url = routes.product_recommendations_url + '?section_id=' + template + (limit ? '&limit=' + limit : '') + '&product_id=' + id + '&intent=' + intent;
          fetchRecommendedProducts(url, intent);
        });
      });
    });
  }
  if (document.getElementById('section-related') == null) {
    document.querySelectorAll('a[href="#section-related"]').forEach(function (el) {
      el.parentElement.remove();
    })
  }
});
window.dispatchEvent(recommendedProductsEvt);

// Recently viewed products
window.addEventListener("recentlyViewedProducts", function (evt) {
  var recently_viewed_products = document.getElementsByClassName("recently-viewed-products"),
      currProductData = JSON.parse(localStorage.getItem("recentlyViewedProduct"));
  if (general.viewed_product){
    var numberOfProducts = 8,
        productUrl = general.viewed_product,
        productId = general.viewed_product_id,
        productData =  { productUrl: productUrl, productId: productId },
        pushNewProductData = false,
        currProductData, sameProduct, newProductData, sameProductIndex;
    if (currProductData === null) {
      currProductData = [];
      pushNewProductData = true;
    } else {
      sameProduct = currProductData.filter(e => e.productId === productId).length > 0;
      if (sameProduct) {
        sameProductIndex = currProductData.map(function(e) { return e.productId; }).indexOf(productId);
        currProductData.splice(sameProductIndex, 1);
        pushNewProductData = true;
      }
      if (currProductData.length < numberOfProducts && !sameProduct) {
        pushNewProductData = true;
      } else if (currProductData.length >= numberOfProducts && !sameProduct) {
        currProductData.shift();
        pushNewProductData = true;
      }
    }
    if (pushNewProductData) {
      currProductData.push(productData);
      newProductData = JSON.stringify(currProductData);
      localStorage.setItem("recentlyViewedProduct", newProductData);
    }
  }
  if (recently_viewed_products.length) {
    const productData = JSON.parse(localStorage.getItem("recentlyViewedProduct"));
    if (productData == null) {
      Array.from(recently_viewed_products).forEach(function (el) { el.remove(); });
      return;
    }
    var widthClass = 'w33',
        enable_quick_buy_desktop = recently_viewed_products[0].querySelector('[data-enable_quick_buy_desktop]'),
        enable_quick_buy_mobile = recently_viewed_products[0].querySelector('[data-enable_quick_buy_mobile]'),
        enable_quick_buy_qty_selector = recently_viewed_products[0].querySelector('[data-enable_quick_buy_qty_selector]'),
        quick_buy_compact = recently_viewed_products[0].querySelector('[data-enable_quick_buy_compact]'),
        quick_buy_drawer = recently_viewed_products[0].querySelector('[data-enable_quick_buy_drawer]'),
        enable_color_picker = recently_viewed_products[0].querySelector('[data-enable_color_picker]'),
        number_of_items = parseInt(recently_viewed_products[0].querySelector('[data-number_of_items]').dataset.number_of_items),
        length = productData.length,
        max = number_of_items;
    switch(max) {
      case 2:
        widthClass = 'w50'
        break;
      case 4:
        widthClass = 'w25'
        break;
      case 5:
        widthClass = 'w20'
        break;
      case 6:
        widthClass = 'w16'
        break;
      case 7:
        widthClass = 'w14'
        break;
      case 8:
        widthClass = 'w12'
        break;
    }
    var recentlyViewedHtml = '',
        recentlyViewedProductsObj = {},
        itemsDone = 0,
        data = productData.reverse();
    Array.from(data).forEach(function (product, index, array) {
      fetch(product.productUrl +'/?section_id=product-item')
          .then((response) => {
            if (!response.ok) {
              var error = new Error(response.status);
              throw error;
            }
            return response.text();
          })
          .then((text) => {
            const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').getElementById('shopify-section-product-item').innerHTML;
            recentlyViewedProductsObj[product.productId] = resultsMarkup;
            itemsDone++;
            if (itemsDone === array.length){
              Array.from(productData).forEach(function (product, index, array) {
                recentlyViewedHtml += recentlyViewedProductsObj[product.productId];
              });
              Array.from(recently_viewed_products).forEach(function (el, index, array) {
                var list_collection = el.querySelector('.l4cl');
                list_collection.classList.remove('slider', 's4wi')
                list_collection.innerHTML = recentlyViewedHtml;
                var placeholder_items = list_collection.querySelectorAll('.placeholder-product');
                Array.from(placeholder_items).forEach(function (el, index, array) {
                  el.remove();
                });
                if ((length - placeholder_items.length) > max) {
                  list_collection.classList.add('slider');
                } else {
                  list_collection.classList.add('mobile-compact');
                }
                list_collection.classList.add(widthClass);
                if (enable_quick_buy_desktop == null && enable_quick_buy_mobile == null) {
                  Array.from(list_collection.querySelectorAll('form, .link-btn')).forEach(function (el) {
                    el.remove();
                  });
                } else {
                  if (quick_buy_drawer) {
                    Array.from(list_collection.querySelectorAll('form, .link-btn')).forEach(function (el) {
                      const newItem = document.createElement('p');
                      newItem.classList.add('link-btn');
                      newItem.innerHTML = '<a class="overlay-buy_button" href="'+ el.closest('li').querySelector('a').getAttribute('href') +'" data-quickshop>'+ translations.view_options_text + '</a>';
                      el.parentNode.replaceChild(newItem, el);
                    });
                  }
                  Array.from(list_collection.querySelectorAll('form, .link-btn')).forEach(function (el) {
                    if (enable_quick_buy_desktop == null) {
                      el.classList.add('mobile-only')
                    }
                    if (enable_quick_buy_mobile == null) {
                      el.classList.add('mobile-hide')
                    }
                  });
                  if (enable_quick_buy_qty_selector == null) {
                    Array.from(list_collection.querySelectorAll('.input-amount')).forEach(function (el) {
                      el.remove();
                    });
                  }
                  if (enable_color_picker == null) {
                    Array.from(list_collection.querySelectorAll('.check.color')).forEach(function (el) {
                      el.remove();
                    });
                  }
                  if (quick_buy_compact) {
                    Array.from(list_collection.querySelectorAll('form button')).forEach(function (el) {
                      el.classList.add('compact');
                      el.querySelector('.mobile-hide').remove();
                      el.querySelector('.icon-cart').classList.remove('mobile-only');
                    });
                    Array.from(list_collection.querySelectorAll('.link-btn a')).forEach(function (el) {
                      if (el.querySelector('.icon-cart') != null) {
                        el.classList.add('compact');
                        el.querySelector('.mobile-hide').remove();
                        el.querySelector('.icon-cart').classList.remove('mobile-only');
                      } else {
                        el.textContent = translations.view_text;
                      }
                    });
                  }
                }
                window.dispatchEvent(ratingsEvt);
              });
              window.dispatchEvent(listCollectionSliderEvt);
              window.dispatchEvent(formZindexEvt);
              window.dispatchEvent(semanticInputEvt);
              window.dispatchEvent(schemeTooltipEvt);
              window.dispatchEvent(popupsEvt);
              window.dispatchEvent(listScrollableEvt);
              window.check_limit_event();
              ajaxCart.init();
              quickShop.init();
            }
          })
          .catch((error) => {
            console.log("recentlyViewedProducts error", error);
            throw error;
          });
    });
  }
});
window.dispatchEvent(recentlyViewedProductsEvt);

// Address page
var address_delete_button = document.getElementsByClassName("address-delete-button");
if (address_delete_button.length) {
  Array.from(address_delete_button).forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      if (confirm(el.dataset.confirmMessage)) {
        var form = document.createElement("form");
        form.setAttribute("method", 'post');
        form.setAttribute("action", el.dataset.target);
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", '_method');
        hiddenField.setAttribute("value", 'delete');
        form.appendChild(hiddenField);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
      }
    });
  });
}

// Product reviews button
var add_review_button = document.getElementsByClassName("spr-summary-actions-newreview");
if (add_review_button.length) {
  Array.from(add_review_button).forEach(function (el) {
    el.addEventListener('click', function (e) {
      Array.from(add_review_button).forEach(function (el) {
        el.remove();
      });
      setTimeout(function () {
        if (document.getElementsByClassName("new-review-form").length > 0) {
          document.getElementsByClassName("new-review-form")[0].scrollIntoView(true);
        }
      }, 10);
    });
  });
}

var checkbox_required = document.getElementsByClassName('checkbox-required');
if (checkbox_required.length) {
  Array.from(checkbox_required).forEach(function (form_el) {
    var inputs = form_el.getElementsByTagName('input');
    Array.from(inputs).forEach(function (input_el) {
      input_el.addEventListener('click', function (e) {
        checkIfChecked(form_el);
      });
    });
  });
  var checkIfChecked = function(form) {
    var checked = form.querySelector('input:checked');
    var inputs = form.getElementsByTagName('input');
    if (!checked) {
      if (inputs[0] != null) {
        inputs[0].setAttribute('required', '');
      }
    } else {
      if (inputs != null) {
        Array.from(inputs).forEach(function (el) {
          el.removeAttribute('required');
        });
      }
    }
  }
}

// Focuses the first non-checkbox/radio input inside an accordion section when it’s opened by clicking its label.
const accordionLabel = document.querySelectorAll('.accordion-a summary label');
if (accordionLabel.length) {
  Array.from(accordionLabel).forEach(el => {
    el.closest('summary').addEventListener('click', function (e) {
      const detailsElement = el.closest('details');
      if (detailsElement && !detailsElement.open) {
        const inputElement = detailsElement.querySelector('div input:not([type="checkbox"]):not([type="radio"])');
        if (inputElement) {
          setTimeout(function () {
            inputElement.focus();
          }, 0);
        }
      }
    });
  });
}

// Loads async CSS and JS resources on first user interaction.
let asyncCSSLoaded = false;

function asyncCSS() {
  if (!asyncCSSLoaded) {
    new_css('async-css', window.filepaths['async_css']);
    new_css('hovers-css', window.filepaths['async_hovers_css']);
    asyncCSSLoaded = true;
    loadRes(window.filepaths['plugin_outline_js'], null, 'outline-loaded');

    if (skip_id && nav_bar_id) {
      const link = skip_id.querySelector('a[href="#nav"]');
      if (link) {
        link.setAttribute('href', '#nav-bar');
      }
    }
  }
}

if (!isMobile) {
  document.addEventListener('mouseover', asyncCSS, asyncOnce);
  document.addEventListener('mouseover', customStickyNav, asyncOnce);
}

document.addEventListener('keyup', asyncCSS, asyncOnce);
document.addEventListener('keyup', customStickyNav, asyncOnce);
document.addEventListener('touchstart', asyncCSS, asyncPass);
document.addEventListener('touchstart', customStickyNav, asyncPass);
document.addEventListener('scroll', asyncCSS, asyncPass);
document.addEventListener('scroll', customStickyNav, asyncPass);


document.addEventListener('scroll', function () {
  const m6cl = document.querySelector('.m6cl');
  if (m6cl) {
    html_tag.classList.add('t1cl');
    if (m6cl.classList.contains('sticky') && document.querySelector('.f8sr.mobile-sticky')) {
      html_tag.classList.add('has-m6cl-sticky');
    }
  }
}, asyncPass);



window.addEventListener('resize', throttle(() => {
  customMega();
}, 500));

/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */

// Quickshop
var quickShop = (function(module) {
  var init, quickshopOverride, openQuickshop, handleQuickshopPanel; // Define the functions
  var quickshopButton, quickshopContainer; // Define the data and elements

  init = function () {
    quickshopButton = document.querySelectorAll('[data-quickshop]:not(.quickshop-initialized)');
    quickshopContainer = document.getElementById('quickshop');
    if (quickshopButton.length) { quickshopOverride();	}
  };
  quickshopOverride = function () {
    Array.from(quickshopButton).forEach(function (el) {
      el.classList.add('quickshop-initialized');
      el.addEventListener('click', function (e) {
        el.classList.add('loading');
        e.preventDefault();
        quickshopContainer.innerHTML = '';
        openQuickshop(el.getAttribute('href'), el);
      });
    });
  };

  openQuickshop = function(quickshopUrl, el) {
    fetch(quickshopUrl)
        .then((response) => {
          if (!response.ok) {
            var error = new Error(response.status);
            throw error;
          }
          return response.text();
        })
        .then((text) => {
          const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('div[id$="main-product"]'),
              container = resultsMarkup.querySelector('.m6pr'),
              sectionId = container.getAttribute('data-template'),
              formId = container.getAttribute('data-form-id')
          container.classList.add('m6pr-compact');
          container.classList.remove('m6pr');
          if (resultsMarkup.querySelector('header.mobile-only')) { resultsMarkup.querySelector('header.mobile-only').classList.remove('mobile-only'); }
          if (resultsMarkup.querySelector('.l4pr.no-thumbs-mobile')) { resultsMarkup.querySelector('.l4pr.no-thumbs-mobile').classList.add('no-thumbs-desktop'); }
          if (resultsMarkup.querySelector('.l4pr.static')) { resultsMarkup.querySelector('.l4pr.static').classList.remove('static'); }
          if (resultsMarkup.querySelector('.l4pr-container .m6tb')) { resultsMarkup.querySelector('.l4pr-container .m6tb').remove(); }
          if (resultsMarkup.querySelector('.l4ml.w50')) { resultsMarkup.querySelector('.l4ml.w50').classList.remove('w50'); }
          Array.from(resultsMarkup.querySelectorAll('.mobile-scroll')).forEach(function (el) {
            el.classList.remove('mobile-scroll');
          });
          Array.from(resultsMarkup.querySelectorAll('a[href="#section-info"]')).forEach(function (el) {
            el.setAttribute('href', quickshopUrl + el.getAttribute('href'));
          });
          Array.from(resultsMarkup.querySelectorAll('.pickup, .has-social, .syk-x, .benefit, .true-size, .l4pr li.sticky, .product-recommendations, header.mobile-hide, #section-info')).forEach(function (el) {
            el.remove();
          });
          if (resultsMarkup.querySelector('header > h1, header > h2, header > h3, header > h4, header > h5')) {
            resultsMarkup.querySelector('header > h1, header > h2, header > h3, header > h4, header > h5').innerHTML = '<a href="' + quickshopUrl + '">' + resultsMarkup.querySelector('header > h1, header > h2, header > h3, header > h4, header > h5').innerHTML + '</a>';
          }
          resultsMarkup.innerHTML = resultsMarkup.innerHTML.replaceAll(sectionId, `quickshop-${ sectionId }`);
          resultsMarkup.innerHTML = resultsMarkup.innerHTML.replaceAll(formId, `${ formId }-quickshop`);
          handleQuickshopPanel(resultsMarkup.innerHTML, el);
        })
        .catch((error) => {
          console.log("openQuickshop error", error);
          throw error;
        });
  }

  handleQuickshopPanel = function(resultsMarkup, el = false) {
    quickshopContainer.innerHTML = resultsMarkup;
    window.dispatchEvent(modulePanelEvt);
    window.dispatchEvent(semanticInputEvt);
    window.dispatchEvent(ratingsEvt);
    window.dispatchEvent(productVariantsEvt);
    window.dispatchEvent(listProductSliderEvt);
    window.dispatchEvent(listDropEvt);
    window.dispatchEvent(semanticSelectEvt);
    window.dispatchEvent(showHideDataElementEvt);
    window.dispatchEvent(sellingplansEvt);
    window.dispatchEvent(pickupAvailabilityEvt);
    window.dispatchEvent(modulePanelAnchorEvt);
    window.dispatchEvent(formZindexEvt);
    window.dispatchEvent(fancyboxEvt);
    window.dispatchEvent(accordeonEvt);
    window.dispatchEvent(dataChangeEvt);
    window.dispatchEvent(countdownEvt);
    window.dispatchEvent(schemeTooltipEvt);
    window.dispatchEvent(popupsEvt);
    window.dispatchEvent(moduleTabsEvt);
    linkMore();
    listProductSliderClick();
    window.dispatchEvent(rangeSliderEvt);
    upsellPopup.init();
    if (window.Shopify && Shopify.PaymentButton) {
      Shopify.PaymentButton.init();
    }
    setTimeout(function () {
      window.dispatchEvent(removeSDCcssEvt);
    },1);
    ajaxCart.init();
    if (window.ProductModel) window.ProductModel.loadShopifyXR();
    if (typeof findAndHideShownElements === 'function') {
      findAndHideShownElements();
    }
    window.dispatchEvent(new CustomEvent("themeQuickshopOpened"));
    new_css('product-css', window.filepaths['page_product_css']);
    openPanel('quickshop');
    if (el) { el.classList.remove('loading') }
  }

  module = {
    init: init,
    open: openQuickshop
  };
  return module;
}(quickShop || {}));
quickShop.init();

window.addEventListener("quickShop", function (evt) {
  quickShop.init();
});

if (totop_id) {
  document.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight) {
      totop_id.classList.remove('hidden');
    } else {
      totop_id.classList.add('hidden');
    }
  })
}

if (!general.enable_cart_drawer && document.getElementById('cart-count')) {
  fetch(window.Shopify.routes.root + 'cart.js')
      .then(response => response.json())
      .then(data => {
        document.getElementById('cart-count').innerHTML = data.item_count;
      })
      .catch((error) => {
        console.log("cartCount error", error);
      });
}

var address_form = document.getElementsByClassName('address-form');
if (address_form.length) {
  Array.from(address_form).forEach(function (el) {
    let countryInput = el.getElementsByClassName('address-country-option')[0],
        provinceInput = el.getElementsByClassName('address-province-option')[0],
        provinceInputContainer = el.getElementsByClassName('address-provinces')[0];
    let checkForProvinces = function(input) {
      let selected = input;
      setTimeout(function() {
        if (selected.options[selected.selectedIndex].dataset.provinces) {
          let provinces = JSON.parse(selected.options[selected.selectedIndex].dataset.provinces);
          if (provinces.length) {
            provinceInput.innerHTML = '';
            if (provinceInput.dataset.default) {
              var value = provinceInput.dataset.default;
            }
            Array.from(provinces).forEach(function (province) {
              if (value && (value == province[0] || value == province[1])) {
                provinceInput.innerHTML += '<option selected value="' + province[0] + '">' + province[1] + '</option>';
              } else {
                provinceInput.innerHTML += '<option value="' + province[0] + '">' + province[1] + '</option>';
              }
            });
            provinceInputContainer.style.display = '';
            if (provinceInputContainer.querySelector('.select-wrapper')) {
              provinceInputContainer.querySelector('.select-wrapper').parentNode.replaceChild(provinceInput, provinceInputContainer.querySelector('.select-wrapper'));
              provinceInput.classList.remove('semantic-select-initialized', 'select-init');
              provinceInput.removeAttribute('data-random');
              window.dispatchEvent(semanticSelectEvt);
            }
          } else {
            Array.from(provinceInput.querySelectorAll('options:not([value=""][disabled])')).forEach(function (el) {
              el.remove();
            });
            provinceInputContainer.style.display = 'none';
          }
        }
      }, 10);
    }
    if (countryInput.dataset.default) {
      var value = countryInput.dataset.default;
      for (var i = 0, count = countryInput.options.length; i < count; i++) {
        var option = countryInput.options[i];
        if (value == option.value || value == option.innerHTML) {
          option.setAttribute('selected', 'selected');
        }
      }
    }
    checkForProvinces(countryInput);
    countryInput.addEventListener("change", function() {
      checkForProvinces(this);
    });
  })
}

var upsellPopupOptions = function (el, popup, variantsData) {
  let listItem = el;
  let selects = popup.querySelectorAll('select');
  let btn = popup.querySelector('.link-btn a');
  let variantSelected = null;

  // Function to check if two arrays match
  function arraysMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  // Function to check if two arrays match
  function updateButton(available = true) {
    if (available) {
      btn.textContent = translations.select;
      btn.classList.remove('disabled');
    } else {
      btn.textContent = translations.unavailable_text;
      btn.classList.add('disabled');
    }
  }

  function addSelectChangeEventListeners() {
    Array.from(selects).forEach(function (el) {
      el.addEventListener('change', handleSelectChange);
    });
  }

  function handleSelectChange() {
    setTimeout(function () {

      let options = Array.from(popup.querySelectorAll('select'), (select) => select.value);
      getVariant(options);

      if (variantSelected === null) {
        updateButton(false);
      } else {
        updateButton(true);

        // update popup image, price, old price
        if (variantSelected.image) {
          popup.querySelector('img').src = variantSelected.image;
        }
        if (variantSelected.price) {
          popup.querySelector('.price').innerHTML = '<span class="old-price"></span>&nbsp;' + variantSelected.price;
        }
        if (variantSelected.price_old) {
          popup.querySelector('.old-price').innerHTML = variantSelected.price_old;
          popup.querySelector('.old-price').classList.remove('hidden');
        } else {
          popup.querySelector('.old-price').classList.add('hidden');
        }
      }
    }, 1);
  }

  function addSelectBtnClickEventListener() {
    btn.addEventListener('click', handleSelectBtnClick);
  }

  function handleSelectBtnClick(e) {
    setTimeout(function () {
      e.preventDefault();

      // get current selected variant
      let options = Array.from(popup.querySelectorAll('select'), (select) => select.value);
      getVariant(options);

      listItem.querySelector('select[name="upsell-id"]').value = variantSelected.id;
      listItem.querySelector('a[data-upsell]').setAttribute('data-variant', variantSelected.id);

      // checkbox
      listItem.querySelector('span.check > input').checked = true;
      listItem.querySelector('span.check > input').dataset.id = variantSelected.id;
      // listItem.querySelector('span.check > input').dispatchEvent(new Event('change'));

      //image
      if (variantSelected.image) {
        listItem.querySelector('img').src = variantSelected.image;
        listItem.querySelector('img').removeAttribute('srcset', 'sizes');
      }

      //price
      listItem.querySelector('.price').innerHTML = '<span class="old-price"></span>&nbsp;' + variantSelected.price;
      if (variantSelected.price_old) {
        listItem.querySelector('.old-price').innerHTML = variantSelected.price_old;
        listItem.querySelector('.old-price').classList.remove('hidden');
      } else {
        listItem.querySelector('.old-price').classList.add('hidden');
      }

      // variant title
      listItem.querySelector('h3 + p + p > span').innerText = variantSelected.variant;

      // select option in product item
      // listItem.querySelector('select').innerText = variantSelected.variant;
    }, 1);
  }

  function initialize() {

    // add z-index to form elements
    window.dispatchEvent(semanticSelectEvt);
    var form_children = popup.querySelectorAll('form > *, fieldset > *, .has-select');
    Array.from(form_children).forEach(function (el, index) {
      el.style.zIndex = form_children.length - index;
    });

    // call event listeners
    addSelectChangeEventListeners();
    addSelectBtnClickEventListener();
  }

  var getVariant = function (options) {
    // Loop through the variant objects
    for (const variant of variantsData) {
      // Check if the options in the variant match the given option names
      if (arraysMatch(variant.options, options)) {
        variantSelected = variant;
        break;
      } else {
        variantSelected = null;
      }
    }
  }
  initialize();
}
// upsell popup
var upsellPopup = (function(module) {
  var init, upsellOverride, openUpsell; // Define the functions
  var upsellBtn; // Define the data and elements
  var popup = document.querySelector('article[data-title="upsell-popup"]');

  init = function () {
    upsellBtn = document.querySelectorAll('[data-upsell]:not(.upsell-initialized)');
    if (upsellBtn.length) { upsellOverride(); }
  };

  upsellOverride = function () {
    Array.from(upsellBtn).forEach(function (el) {
      el.classList.add('upsell-initialized');
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openUpsell(el);
      });
    });
  };

  openUpsell = function(el) {

    let productItemEl = el.closest('li');
    let optionLabels = JSON.parse(el.getAttribute('data-options'));
    var variantsData = [];

    // get variants data from product item
    Array.from(productItemEl.querySelectorAll('select[name="upsell-id"] option')).forEach(function (el) {
      variantsData.push(JSON.parse(el.dataset.variantinfo));
    });

    // get current variant
    let currentVariant = variantsData.find((v) => v.id == el.getAttribute('data-variant'));

    // get options list
    let options_list = {};
    variantsData.forEach((v) =>
        v.options.forEach((option, index) => {
          if (!Array.isArray(options_list['option-' + index])) {
            options_list['option-' + index] = [option];
          } else if (!options_list['option-' + index].includes(option)) {
            options_list['option-' + index].push(option);
          }
        })
    );

    // create dropdowns inside popup
    let dropdowns = '';
    Object.keys(options_list).forEach((key, index) => {
      let select = '<p class="m10" data-variant="'+ currentVariant.id +'" data-value="' + options_list[key][0] + '">';
      select += '<label for="' + optionLabels[index] + '">' + optionLabels[index] + '</label>';
      select += '<select id="'+ key + + optionLabels[index] + '" name="' + optionLabels[index] + '">';
      options_list[key].forEach((x, i) => {
        if (x == currentVariant.options[index]) {
          select += '<option value="'+ x +'" selected data-value="' + x + '">' + x + '</option>';
        } else {
          select += '<option value="'+ x +'" data-value="' + x + '">' + x + '</option>';
        }
      });
      select += '</select></p>';
      dropdowns += select;
    });

    // update popup content
    popup.querySelector('fieldset').innerHTML = dropdowns;
    popup.querySelector('.link-btn').innerHTML = '<a>'+ translations.select +'</a>';
    const title = productItemEl.querySelector('h3 > a').innerText;
    if (popup.querySelector('h2')) {
      popup.querySelector('h2').innerText = title;
    } else {
      const containerDiv = popup.querySelector('div');
      const priceElement = containerDiv.querySelector('.price');
      const h2Element = document.createElement('h2');
      h2Element.innerText = title;
      containerDiv.insertBefore(h2Element, priceElement);
    }

    if (currentVariant.image) {
      popup.querySelector('img').parentElement.classList.remove('svg');
      popup.querySelector('img').src = currentVariant.image;
    } else {
      popup.querySelector('img').src = 'data:image/svg+xml;base64,' + btoa(productItemEl.querySelector('svg').outerHTML);
      popup.querySelector('img').parentElement.classList.add('svg');
    }
    if (currentVariant.price) {
      popup.querySelector('.price').innerHTML = '<span class="old-price"></span>&nbsp;' + currentVariant.price;
    }
    if (currentVariant.price_old) {
      popup.querySelector('.old-price').innerHTML = currentVariant.price_old;
      popup.querySelector('.old-price').classList.remove('hidden');
    } else {
      popup.querySelector('.old-price').classList.add('hidden');
    }

    el.classList.add('listening');
    loadPopup('upsell-popup', function () {
      upsellPopupOptions(productItemEl, popup, variantsData);
    });

  }
  module = {
    init: init
  };
  return module;
}(upsellPopup || {}));
upsellPopup.init();

window.addEventListener("navScroll", () => {

  const container = document.querySelector('.nav-scroll-wrapper:has(.nav-scroll)') || null;
  if (!container) { return; }
  const scrollElement = container.querySelector('.nav-scroll');

  function checkOverflow() {

    const isEnd = scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth;
    const isStart = scrollElement.scrollLeft === 0;

    scrollElement.classList.toggle('no-scroll', scrollElement.clientWidth === scrollElement.scrollWidth);
    scrollElement.classList.toggle('end', isEnd);
    scrollElement.classList.toggle('start', isStart);


  }

  function checkDropdown() {
    const menuItems = document.querySelectorAll('.nav-scroll-wrapper.dropdown > ul.nav-scroll:not(.no-scroll) > li:has(ul):not(.promo)');
    const navbar = document.querySelector('.nav-scroll-wrapper > ul.nav-scroll:not(.no-scroll)');
    menuItems.forEach(menuItem => {
      menuItem.addEventListener('mouseover', event => {
        // menuItem.classList.remove('inv');
        const menuItemRect = menuItem.getBoundingClientRect();
        const dropdown = menuItem.querySelector(':scope > ul');
        const navbarWidth = navbar.offsetWidth;
        let leftPosition = calculateLeftPosition(event.currentTarget);
        setTimeout(() => {

          const dropdownWidth = dropdown.offsetWidth; // Get the dropdown width after it's been made visible
          if (dropdownWidth === 0) { return; } // Dropdown is hidden

          leftPosition = leftPosition - (dropdownWidth / 2) + menuItemRect.width / 2; // Center the dropdown under the menu item
          leftPosition = Math.min(leftPosition, navbarWidth - dropdownWidth); // Prevent dropdown from going off the right side of the screen/scroll container
          leftPosition = Math.max(0, leftPosition); // Prevent dropdown from going off the left side of the screen/scroll container
          dropdown.style.left = `${leftPosition}px`; // Set the left position of the dropdown
          setTimeout(() => {
            dropdown.style.visibility = 'visible';
          }, 1);
        }, 1);
      });

      function calculateLeftPosition(element) {
        const elementRect = element.getBoundingClientRect();
        const parentRect = element.parentNode.getBoundingClientRect();
        const parentLeft = parentRect.left;
        return elementRect.left - parentLeft;
      }
    });
  }

  setTimeout(() => {
    checkOverflow();
    checkDropdown();
  }, 1);

  scrollElement.addEventListener('scroll', checkOverflow);
  window.addEventListener('resize', checkOverflow);
  window.addEventListener('resize', checkDropdown);

});
window.dispatchEvent(navScrollEvt);

var inline_modal_close = document.querySelectorAll('.inline-modal a.inline-modal-close:not(.listening)');
Array.from(inline_modal_close).forEach(function (el) {
  el.classList.add('listening');
  el.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var inline_modal = el.closest('.inline-modal');
    if (inline_modal) {
      inline_modal.remove();
    }
  })
})

// ShoptheLook Drawer
var shopTheLookDrawer = (function(module) {
  var init, shopTheLookOverride, openShopTheLook, handleQuickshopPanel; // Define the functions
  var shopTheLookBtn; // Define the data and elements
  var shopTheLookContainer;
  var maxItems ;
  init = function () {
    shopTheLookBtn = document.querySelectorAll('[data-shopthelook]:not(.shopthelook-initialized)');
    shopTheLookContainer = document.querySelector('#add-products-to-banner ul');
    if (shopTheLookContainer) {	maxItems = shopTheLookContainer.dataset.items; }
    if (shopTheLookBtn.length) { shopTheLookOverride(); }
  };
  shopTheLookOverride = function () {
    Array.from(shopTheLookBtn).forEach(function (el) {
      el.classList.add('shopthelook-initialized');
      el.addEventListener('click', function (e) {
        if (el.classList.contains('circle')) {
          el.classList.add('loading');
        }
        e.preventDefault();
        shopTheLookContainer.innerHTML = '';
        let widthClass;
        switch(maxItems) {
          case '4':
            widthClass = 'w25'
            break;
          case '5':
            widthClass = 'w20'
            break;
          default:
            widthClass = 'w16'
            break;
        }
        let blockId = el.closest('li[id^=block-]').id;
        shopTheLookContainer.classList.add(blockId, widthClass, 'mobile-compact');

        openShopTheLook(el);
      });
    });
  };


  openShopTheLook = function(el) {
    let productData = JSON.parse(el.getAttribute('data-products'));
    if (productData.length === 0) { productData = new Array(parseInt(maxItems)); }
    console.log(productData);
    let shopTheLookHTML = ''
    let shopTheLookProductsObj = {}
    let itemsDone = 0;
    var enable_quick_buy_desktop = shopTheLookContainer.dataset.enable_quick_buy_desktop,
        enable_quick_buy_mobile = shopTheLookContainer.dataset.enable_quick_buy_mobile,
        enable_quick_buy_qty_selector = shopTheLookContainer.dataset.enable_quick_buy_qty_selector,
        quick_buy_compact = shopTheLookContainer.dataset.enable_quick_buy_compact,
        quick_buy_drawer = shopTheLookContainer.dataset.enable_quick_buy_drawer,
        enable_color_picker = shopTheLookContainer.dataset.enable_color_picker;
    Array.from(productData).forEach(function (product, index, array) {
      fetch(product + '/?section_id=product-item')
          .then((response) => {
            if (!response.ok) {
              var error = new Error(response.status);
              throw error;
            }
            return response.text();
          })
          .then((text) => {
            const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').getElementById('shopify-section-product-item').innerHTML;
            console.log(resultsMarkup);
            shopTheLookProductsObj[product] = resultsMarkup;
            itemsDone++;
            if (itemsDone === array.length) {
              Array.from(productData).forEach(function (product, index, array) {
                console.log(shopTheLookProductsObj[product]);
                shopTheLookHTML += shopTheLookProductsObj[product];
              });
              let list_collection = shopTheLookContainer
              list_collection.innerHTML = shopTheLookHTML;
              let placeholder_items = list_collection.querySelectorAll('.placeholder-product');
              Array.from(placeholder_items).forEach(function (el, index, array) {
                el.remove();
              });
              if (enable_quick_buy_desktop === undefined && enable_quick_buy_mobile === undefined) {
                Array.from(list_collection.querySelectorAll('form, .link-btn')).forEach(function (el) {
                  el.remove();
                });
              } else {
                console.log(quick_buy_drawer);
                if (quick_buy_drawer !== undefined ) {
                  Array.from(list_collection.querySelectorAll('form, .link-btn')).forEach(function (el) {
                    const newItem = document.createElement('p');
                    newItem.classList.add('link-btn');
                    newItem.innerHTML = '<a class="overlay-buy_button" href="'+ el.closest('li').querySelector('a').getAttribute('href') +'" data-quickshop>'+ translations.view_options_text + '</a>';
                    el.parentNode.replaceChild(newItem, el);
                  });
                }
                Array.from(list_collection.querySelectorAll('form, .link-btn')).forEach(function (el) {
                  if (enable_quick_buy_desktop === undefined) {
                    el.classList.add('mobile-only')
                  }
                  if (enable_quick_buy_mobile === undefined) {
                    el.classList.add('mobile-hide')
                  }
                });
                if (enable_quick_buy_qty_selector === undefined) {
                  Array.from(list_collection.querySelectorAll('.input-amount')).forEach(function (el) {
                    el.remove();
                  });
                }
                if (enable_color_picker === undefined) {
                  Array.from(list_collection.querySelectorAll('.check.color')).forEach(function (el) {
                    el.remove();
                  });
                }
                if (quick_buy_compact !== undefined) {
                  Array.from(list_collection.querySelectorAll('form button')).forEach(function (el) {
                    el.classList.add('compact');
                    el.querySelector('.mobile-hide').remove();
                    el.querySelector('.icon-cart').classList.remove('mobile-only');
                  });
                  Array.from(list_collection.querySelectorAll('.link-btn a')).forEach(function (el) {
                    if (el.querySelector('.icon-cart') != null) {
                      el.classList.add('compact');
                      el.querySelector('.mobile-hide').remove();
                      el.querySelector('.icon-cart').classList.remove('mobile-only');
                    } else {
                      el.textContent = translations.view_text;
                    }
                  });
                }
              }
              el.classList.add('shopthelook-initialized');
              shopTheLookContainer.classList.remove('s4wi');
              shopTheLookContainer.classList.add('slider', 'mobile-compact');
              shopTheLookContainer.style.opacity = 1;
              shopTheLookContainer.innerHTML = list_collection.innerHTML;
              window.dispatchEvent(listCollectionSliderEvt);
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
              // compareProducts.initProducts();
              openPanel('add-products-to-banner');
              if (el.classList.contains('circle')) {
                el.classList.remove('loading');
              }
            }
          })
          .catch((error) => {
            console.log("shopTheLookDrawer error", error);
            throw error;
          });
    });
  }
  module = {
    init: init,
    load: openShopTheLook
  };
  return module;
}(shopTheLookDrawer || {}));
shopTheLookDrawer.init();