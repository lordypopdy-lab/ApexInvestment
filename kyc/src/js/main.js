/*
 * show pass
 * otp input
 * range slider one
 * range slider two
 * clear Item
 * block delete
 * active photo
 * back Page
 * press toggles
 * clear Text
 * message
 * gallery
 * custom select
 * active Suggestions
 * preloader
 */

  // OTP Input
  function otpInput() {
    const digitGroups = document.querySelectorAll(".digit-group input");
    if (digitGroups.length > 0) {
      digitGroups.forEach(input => {
        input.setAttribute("maxlength", 1);
        input.addEventListener("keyup", function (e) {
          const parent = input.closest(".digit-group");

          if (e.key === "Backspace" || e.key === "ArrowLeft") {
            const prevInput = parent.querySelector(`input#${input.dataset.previous}`);
            if (prevInput) prevInput.select();
          } else if (/^[0-9a-zA-Z]$/.test(e.key) || e.key === "ArrowRight") {
            const nextInput = parent.querySelector(`input#${input.dataset.next}`);
            if (!/\d/.test(input.value)) {
              input.value = "";
              return;
            }

            if (nextInput) {
              nextInput.select();
            } else if (parent.dataset.autosubmit) {
              parent.submit();
            }
          }
        });
      });
    }
  }

  // Clear Item
  function clearItem() {
    document.querySelectorAll(".list-favorite .del-item").forEach(el => {
      el.addEventListener("click", function () {
        el.closest(".list-favorite").style.display = "none";
      });
    });
  }

  // Back Page
  function backPage() {
    document.querySelectorAll(".back-btn").forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        window.history.back();
      });
    });
  }

  // Clear Input
  function clearInput() {
    document.querySelectorAll(".icon-close").forEach(icon => {
      icon.addEventListener("click", function () {
        document.querySelector(".clear-ip").value = "";
      });
    });
  }

  // Press Toggle
  function pressToggle() {
    document.querySelectorAll(".press-toggle").forEach(el => {
      el.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
  }

  // Active Suggestions
  function activeSuggest() {
    const actionSheet = document.querySelector(".action-sheet");
    if (actionSheet) {
      actionSheet.querySelectorAll(".item-check").forEach(item => {
        item.addEventListener("click", function () {
          actionSheet.querySelector(".item-check.active")?.classList.remove("active");
          this.classList.add("active");
        });
      });
    }

    const modalRight = document.querySelector(".modalRight");
    if (modalRight) {
      modalRight.querySelectorAll(".item-check-style2").forEach(item => {
        item.addEventListener("click", function () {
          modalRight.querySelector(".item-check-style2.active")?.classList.remove("active");
          this.classList.add("active");
        });
      });
    }
  }

  // Change Value
  function changeValue() {
    document.querySelectorAll(".tag-money").forEach(tag => {
      tag.addEventListener("click", function () {
        const value = tag.textContent.slice(1);
        document.querySelector(".value_input").value = value;
      });
    });

    document.querySelectorAll(".dom-value").forEach(dom => {
      dom.addEventListener("click", function () {
        document.querySelector(".dom-text").textContent = dom.textContent;
      });
    });

    // Other change value functions similarly...
  }

  // Load More
  function loadMore() {
    const loadMoreBtn = document.getElementById("button-loadmore");
    if (loadMoreBtn) {
      document.querySelectorAll(".fl-item").forEach((item, index) => {
        if (index >= 3) item.style.display = "none";
      });

      loadMoreBtn.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll(".fl-item:hidden").forEach((item, index) => {
          if (index < 3) item.style.display = "block";
        });

        if (document.querySelectorAll(".fl-item:hidden").length === 0) {
          loadMoreBtn.style.display = "none";
        }
      });
    }
  }

  // Initialize functions
  otpInput();
  clearItem();
  backPage();
  clearInput();
  pressToggle();
  activeSuggest();
  changeValue();
  loadMore();

