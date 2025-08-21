window.addEventListener("load", function () {
  const menus = this.document.querySelectorAll(".menu");
  const subMenus = this.document.querySelectorAll(".submenu");
  //   forEach는 매개변수가 있어야한다.
  menus.forEach(function (menu, index) {
    console.log(menu, index);
    menu.addEventListener("click", function () {
      // console.log("메뉴클릭")
      const subcurrent = subMenus[index];
      //   console.log(subcurrent);
      // 이미 열려있으면 닫기
      if (subcurrent.classList.contains("active")) {
        subcurrent.classList.remove("active");
      } else {
        // 열려있는 메뉴는 닫기
        subMenus.forEach(function (sub, index) {
        //   console.log(sub);
          sub.classList.remove("active")
        });
        // active가 없으면 열기
        subcurrent.classList.add("active");
      }
    });
  });
});
