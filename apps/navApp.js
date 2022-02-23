$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    // console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});


// funcion para cambiar color al llegar a ciertos pixeles


// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    // console.log("mobile");

        // console.log
    // document.getElementById('.btn-container').style.gridTemplateColumns = "50% 50%";
    // document.getElementById('.btn-container').style.fontsize = "1rem"
    // document.getElementsByClassName('.btn-container').style.backgroundColor = "black";
    // document.getElementById('.logo').style.width = "10.5rem"
  // }else{
    // false for not mobile device
    // console.log("not mobile device");
  // }



  