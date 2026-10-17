console.log("File script.js đã chạy!");
// Menu Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-menu-mobile");

if (buttonMenuMobile) {
  const menu = document.querySelector("header .inner-menu");
  //Khi click vào button mở menu
  buttonMenuMobile.addEventListener("click", () => {
    menu.classList.add("active");
  });
  //Khi click vào overlay đóng menu
  const overlay = document.querySelector(".header .inner-overlay");
  if (overlay) {
    overlay.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  }
  //Click vào icon mũi tên mở sub menu
  const listButtonSubMenu = menu.querySelectorAll("ul > li > i");
  listButtonSubMenu.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentNode.classList.toggle("active");
    });
  });
}
//End Menu Mobile

// Box Address Section-1
const boxAddressSection1 = document.querySelector(".section-1 .inner-form .inner-address");
if (boxAddressSection1) {
  // Ẩn hiện box suggest
  const input = boxAddressSection1.querySelector(".inner-input");

  input.addEventListener("focus", () => {
    boxAddressSection1.classList.add("active");
  });
  input.addEventListener("blur", () => {
    boxAddressSection1.classList.remove("active");
  });

  //Sự kiện click vào từng tiem
  const listItem = document.querySelectorAll(".section-1 .inner-suggest-list .inner-item");
  listItem.forEach((item) => {
    item.addEventListener("mousedown", () => {
      const title = item.querySelector(".inner-item-title").innerHTML.trim();
      input.value = title;
    });
  });
}
//End Box Address Section-1

// Box User Quannity Section-1
const boxUserSection1 = document.querySelector(".section-1 .inner-form .inner-user");
if (boxUserSection1) {
  //Hiện box quanity
  const input = boxUserSection1.querySelector(".inner-input");
  input.addEventListener("focus", () => {
    boxUserSection1.classList.add("active");
  });
  //Ẩn box quantity
  document.addEventListener("click", (event) => {
    if (!boxUserSection1.contains(event.target)) {
      boxUserSection1.classList.remove("active");
    }
  });
  /* Hàm thêm số lượng vào ô input */
  const updateQuantityInput = () => {
    const listBoxNumber = boxUserSection1.querySelectorAll(".inner-count .inner-number");
    const listNumber = [];

    listBoxNumber.forEach((boxNumber) => {
      const number = parseInt(boxNumber.innerHTML);
      listNumber.push(number);
    });

    const value = `NL: ${listNumber[0]}, TE: ${listNumber[1]}, EB: ${listNumber[2]}`;

    input.value = value;
  };
  //Bắt sự kiện click nút up
  const listButtonUp = boxUserSection1.querySelectorAll(".inner-count .inner-up");
  listButtonUp.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.parentNode;
      const boxNumber = parent.querySelector(".inner-number");
      const number = parseInt(boxNumber.innerHTML);
      const numberUpadte = number + 1;
      boxNumber.innerHTML = numberUpadte;
      updateQuantityInput();
    });
  });
  //Sự kiện nút down
  const listButtonDown = boxUserSection1.querySelectorAll(".inner-count .inner-down");
  listButtonDown.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.parentNode;
      const boxNumber = parent.querySelector(".inner-number");
      const number = parseInt(boxNumber.innerHTML);
      if (number > 0) {
        const numberDown = number - 1;
        boxNumber.innerHTML = numberDown;
        updateQuantityInput();
      }
    });
  });
}

// End Box User Quannity Section-1

// Clock Expire Section-2
const clockExpire = document.querySelector("[clock-expire]");
if (clockExpire) {
  const expireDateTimeString = clockExpire.getAttribute("clock-expire");
  console.log(expireDateTimeString);

  //Chuyển đổi chuỗi thời gian thành đối tượng date
  const expireDateTime = new Date(expireDateTimeString);
  const updateClock = () => {
    const now = new Date();
    const remaningTime = expireDateTime - now; //quy về đơn vị mili giây
    if (remaningTime > 0) {
      //Tính số ngày
      const days = Math.floor(remaningTime / (24 * 60 * 60 * 1000));

      //Tính số giờ
      const hours = Math.floor((remaningTime / (60 * 60 * 100)) % 24);

      //Tính số phút
      const minutes = Math.floor((remaningTime / (60 * 100)) % 60);

      //Tính số giây
      const seconds = Math.floor((remaningTime / 1000) % 60);

      const listBoxNumber = clockExpire.querySelectorAll(".inner-number");
      listBoxNumber[0].innerHTML = `${days}`.padStart(2, "0");
      listBoxNumber[1].innerHTML = `${hours}`.padStart(2, "0");
      listBoxNumber[2].innerHTML = `${minutes}`.padStart(2, "0");
      listBoxNumber[3].innerHTML = `${seconds}`.padStart(2, "0");
    } else {
      clearInterval(intervalClock);
    }
  };
  // Gọi hàm cập nhật đồng hồ sau mỗi giây
  const intervalClock = setInterval(updateClock, 1000);
}
//End Clock Expire Section-2

//Box Fitter Mobile Section-9
const buttonFitterMobile = document.querySelector(".section-9 .inner-right .inner-fitter-mobile");
if (buttonFitterMobile) {
  const boxLeft = document.querySelector(".section-9 .inner-left");
  buttonFitterMobile.addEventListener("click", () => {
    boxLeft.classList.add("active");
  });

  const overlay = document.querySelector(".section-9 .inner-left .inner-overlay");
  overlay.addEventListener("click", () => {
    boxLeft.classList.remove("active");
  });
}
//End Box Fitter Mobile Section-9

//Box Tour Infor
const boxTourInfor = document.querySelector(".box-tour-infor");
if (boxTourInfor) {
  const buttonReadMore = boxTourInfor.querySelector(".inner-read-more button");
  buttonReadMore.addEventListener("click", () => {
    if (boxTourInfor.classList.contains("active")) {
      boxTourInfor.classList.remove("active");
      buttonReadMore.innerHTML = `Xem tất cả`;
    } else {
      boxTourInfor.classList.add("active");
      buttonReadMore.innerHTML = `Ẩn bớt`;
    }
  });
  new Viewer(boxTourInfor);
}
// End Box Tour Infor

//Khởi tạo thư viện AOS
AOS.init();

//Swiper Section-2
const swiperSection2 = document.querySelector(".swiper-section-2");
if (swiperSection2) {
  new Swiper(".swiper-section-2", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
}
//End Swiper Section-2
//Swiper Section-3
const swiperSection3 = document.querySelector(".swiper-section-3");
if (swiperSection3) {
  new Swiper(".swiper-section-3", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
}
//End Swiper Section-3

// Swiper-box-images
const boxImages = document.querySelector(".box-images");
if (boxImages) {
  const swiperBoxImagesThumb = new Swiper(".swiper-box-images-thumb", {
    spaceBetween: 5,
    slidesPerView: 4,
    breakpoints: {
      576: {
        spaceBetween: 10,
      },
    },
  });

  var swiperBoxImagesMain = new Swiper(".swiper-box-images-main", {
    spaceBetween: 0,
    thumbs: {
      swiper: swiperBoxImagesThumb,
    },
  });
}

// End Swiper-box-images

// Zoom Box Images Main
const boxImagesMain = document.querySelector(".box-images .inner-images-main");
if (boxImagesMain) {
  new Viewer(boxImagesMain);
}
//End Zoom Box Images Main

//Zoom Box Tour Schedule
const boxTourSchedule = document.querySelector(".box-tour-schedule");
if (boxTourSchedule) {
  new Viewer(boxTourSchedule);
}
//End Zoom Box Tour Schedule

//Tích hợp thư viện validate cho form
const emailForm = document.querySelector("#email-form");
if (emailForm) {
  const validator = new JustValidate("#email-form");

  validator
    .addField("#email-input", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập email của bạn!",
      },
      {
        rule: "email",
        errorMessage: "Email không đúng định dạng",
      },
    ])
    .onSuccess((event) => {
      const email = event.target.email.value;
      console.log(email);
    });
}
//Tích hợp thư viện validate cho form-coupon
const couponForm = document.querySelector("#coupon-form");
if (couponForm) {
  const validator = new JustValidate("#coupon-form");

  validator
    .addField("#coupon-input", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập mã coupon!",
      },
    ])
    .onSuccess((event) => {
      const coupon = event.target.coupon.value;
      console.log(coupon);
    });
}
//Tích hợp thư viện validate cho form-order
const orderForm = document.querySelector("#order-form");
if (orderForm) {
  const validator = new JustValidate("#order-form");

  validator
    .addField("#full-name-input", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập họ và tên!",
      },
      {
        rule: "minLength",
        value: 5,
        errorMessage: "Họ và tên phải có ít nhất 5 ký tự!",
      },
      {
        rule: "maxLength",
        value: 50,
        errorMessage: "Họ và tên không được vượt quá 50 ký tự!",
      },
    ])
    .onSuccess((event) => {});
  validator
    .addField("#phone-input", [
      {
        rule: "required",
        errorMessage: "Vui lòng số điện thoại!",
      },
      {
        rule: "customRegexp",
        value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
        errorMessage: "Số điện thoại không đúng định dạng!",
      },
    ])
    .onSuccess((event) => {
      const phone = event.target.phone.value;
      const fullName = event.target.fullName.value;
      const note = event.target.note.value;
      const method = event.target.method.value;
      console.log(fullName);
      console.log(phone);
      console.log(note);
      console.log(method);
    });

  const listInputMethod = orderForm.querySelectorAll(`input[name="method"]`);
  const elementInforBank = orderForm.querySelector(".inner-infor-bank");
  listInputMethod.forEach((inputMethod) => {
    inputMethod.addEventListener("change", () => {
      if (inputMethod.value == "bank") {
        elementInforBank.classList.add("active");
      } else {
        elementInforBank.classList.remove("active");
      }
    });
  });
}
