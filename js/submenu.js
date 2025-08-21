window.addEventListener("load", function () {
  const menuItems = this.document.querySelectorAll(".menu > li");
  menuItems.forEach(function (item) {
    // console.log(item);
    // const submenu = document.querySelector(".submenu");
    const submenu = item.querySelector(".submenu");
    // 해당하는 부모메뉴의 서브메뉴를 찾으라는 명령 document는 전체를 찾는 명령. item은 item 내의 요소를 찾는 명령

    item.addEventListener("mouseenter", function () {
      submenu.style.display = "block";
    });
  });
});
