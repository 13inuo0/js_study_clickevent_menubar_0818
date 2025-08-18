window.addEventListener("load", function () {
  const menu = this.document.querySelector(".menu");
  const submenus = this.document.querySelectorAll(".submenu");
  const hBg = this.document.querySelector(".header_bg");
  menu.addEventListener("mouseenter", function () {
    // 확인용    // alert("mouseenter");
    // console.log((submenus));
    submenus.forEach(function (sub) {
      //   console.log(sub);
      sub.classList.add("active");
    });
    hBg.classList.add("open");
  });
  menu.addEventListener("mouseleave", function () {
    submenus.forEach(function (sub) {
      sub.classList.remove("active");
    });
    hBg.classList.remove("open");
  });
});
