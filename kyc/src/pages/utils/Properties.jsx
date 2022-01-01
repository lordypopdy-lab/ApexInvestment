export const Preloader = () => {
  const preloaderTimeout = setTimeout(() => {
    const preloaderElement = document.querySelector(".preload");
    if (preloaderElement) {
      preloaderElement.style.transition = "opacity 0.6s";
      preloaderElement.style.opacity = 0;

      setTimeout(() => {
        preloaderElement.remove();
      }, 600);
    }
  }, 500);

  return () => clearTimeout(preloaderTimeout);
}

//ShowNot
export const showNoti = () => {
  const modalNoti = document.getElementById('modalNoti');
  if (modalNoti) {
    const showPopup = sessionStorage.getItem('showPopup');
    if (!JSON.parse(showPopup)) {
      setTimeout(() => {
        modalNoti.style.display = 'block';
      }, 1000);
    }
  }
};

/* clear Item 
------------------------------------------------------------------------------------- */
export const clearItem = function () {
  const favoriteItems = document.querySelectorAll(".list-favorite");
  favoriteItems.forEach(function (item) {
    const deleteButton = item.querySelector(".del-item");
    deleteButton.addEventListener("click", function () {
      item.style.display = "none";
    });
  });
};

/* back Page
 ------------------------------------------------------------------------------------- */
export const backPage = () => {
  document.querySelectorAll(".back-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      window.history.go(-1);
    });
  });
};


/* press toggles
------------------------------------------------------------------------------------- */
export const pressToggle = () => {
  const elements = document.querySelectorAll(".press-toggle");

  elements.forEach((element) => {
    element.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
};

/* clear Text
------------------------------------------------------------------------------------- */
export const clearInput = () => {
  const closeIcon = document.querySelector(".icon-close");
  const inputField = document.querySelector(".clear-ip");

  if (closeIcon && inputField) {
    closeIcon.addEventListener("click", () => {
      inputField.value = "";
    });
  }
};

/* custom select 
------------------------------------------------------------------------------------- */
export const cusSelect = () => {
  if (document.querySelectorAll('.cus-select, .lo-select, .time-select').length > 0) {
    const elements = document.querySelectorAll('.cus-select, .lo-select, .time-select');
    elements.forEach(element => {
      niceSelect(element);
    });
  }
};

/* active Suggestions
------------------------------------------------------------------------------------- */
export const activeSuggest = () => {
  const actionSheet = document.querySelector('div.action-sheet');
  const modalRight = document.querySelector('div.modalRight');

  if (actionSheet) {
    actionSheet.addEventListener('click', (event) => {
      if (event.target.classList.contains('item-check')) {
        const activeItem = actionSheet.querySelector('.item-check.active');
        if (activeItem) {
          activeItem.classList.remove('active');
        }
        event.target.classList.add('active');
      }
    });
  }

  if (modalRight) {
    modalRight.addEventListener('click', (event) => {
      if (event.target.classList.contains('item-check-style2')) {
        const activeItem = modalRight.querySelector('.item-check-style2.active');
        if (activeItem) {
          activeItem.classList.remove('active');
        }
        event.target.classList.add('active');
      }
    });
  }

  const tags = document.querySelectorAll('.tag-money, .accent-box-v5, .item-time');
  tags.forEach(tag => {
    tag.addEventListener('click', (event) => {
      tags.forEach(t => t.classList.remove('active'));
      event.target.classList.add('active');
    });
  });

  const categories = document.querySelectorAll('.item-category');
  categories.forEach(category => {
    category.addEventListener('click', (event) => {
      categories.forEach(c => c.classList.remove('active'));
      event.target.classList.add('active');
    });
  });
};

/* change value
------------------------------------------------------------------------------------- */
export const changeValue = () => {
  document.querySelectorAll('.tag-money').forEach(tag => {
    tag.addEventListener('click', function () {
      const val = this.textContent;
      const str = val.slice(1);
      document.querySelector('.value_input').value = str;
    });
  });

  document.querySelectorAll('.dom-value').forEach(domValue => {
    domValue.addEventListener('click', function () {
      document.querySelector('.dom-text').textContent = this.textContent;
    });
  });

  document.querySelectorAll('.color-val').forEach(colorVal => {
    colorVal.addEventListener('click', function () {
      document.querySelector('.text-val-color').textContent = this.textContent;
    });
  });

  document.querySelectorAll('.time-val').forEach(timeVal => {
    timeVal.addEventListener('click', function () {
      document.querySelector('.text-val-time').textContent = this.textContent;
    });
  });

  document.querySelectorAll('.market-val').forEach(marketVal => {
    marketVal.addEventListener('click', function () {
      document.querySelector('.text-val-market').textContent = this.textContent;
    });
  });

  document.querySelectorAll('.language-val').forEach(languageVal => {
    languageVal.addEventListener('click', function () {
      document.querySelector('.text-val-language').textContent = this.textContent;
    });
  });

  document.querySelectorAll('.currency-val').forEach(currencyVal => {
    currencyVal.addEventListener('click', function () {
      document.querySelector('.text-val-currency').textContent = this.textContent;
    });
  });
};

/* modal second bootstrap
------------------------------------------------------------------------------------- */
export const clickModalSecond = () => {
  const filterButtons = document.querySelectorAll('.btn-filter-history');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.getElementById('filterHistory');
      if (modal) {
        modal.classList.add('show');
        modal.style.display = 'block';
      }
    });
  });
};

/* load more
------------------------------------------------------------------------------------- */
export const loadMoreItems = () => {
  const ulElement = document.querySelector("ul");
  if (ulElement.classList.contains("loadmore-item")) {
    const items = document.querySelectorAll(".fl-item");

    for (let i = 0; i < 3 && i < items.length; i++) {
      items[i].style.display = 'block';
    }

    const buttonLoadMore = document.getElementById("button-loadmore");

    buttonLoadMore.addEventListener("click", function (e) {
      e.preventDefault();
      const hiddenItems = Array.from(items).filter(item => item.style.display === 'none');

      for (let i = 0; i < 3 && i < hiddenItems.length; i++) {
        hiddenItems[i].style.display = 'block';
      }

      if (hiddenItems.length <= 3) {
        buttonLoadMore.style.display = 'none';
      }
    });
  }
};

/* tab Slide 
------------------------------------------------------------------------------------- */
export const tabSlide = () => {
  const tabSlideElement = document.querySelector('.tab-slide');

  if (tabSlideElement) {
    const activeTab = tabSlideElement.querySelector('li.active');
    const activeWidth = activeTab.offsetWidth;
    const activePosition = activeTab.getBoundingClientRect().left - tabSlideElement.getBoundingClientRect().left;

    const navItemSlide = document.querySelector('.nav-item-slide');
    navItemSlide.style.width = `${activeWidth}px`;
    navItemSlide.style.transform = `translateX(${activePosition}px)`;

    const tabs = tabSlideElement.querySelectorAll('li');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const newWidth = this.offsetWidth;
        const newPosition = this.getBoundingClientRect().left - tabSlideElement.getBoundingClientRect().left;
        const sideEffect = this.parentNode.querySelector('.item-slide-effect');

        sideEffect.style.width = `${newWidth}px`;
        sideEffect.style.transform = `translateX(${newPosition}px)`;
      });
    });
  }
};

/* hide popup 
------------------------------------------------------------------------------------- */
export const hidePopupNoti = () => {
  const btnHideModal = document.querySelector('.btn-hide-modal');

  if (btnHideModal) {
    btnHideModal.addEventListener('click', () => {
      sessionStorage.setItem('showPopup', true);
    });
  }
};










