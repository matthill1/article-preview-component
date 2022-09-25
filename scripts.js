var show_share_modal = function(){
    console.log('hit');
    document.getElementsByClassName('share_modal')[0].classList.toggle("hide");
    document.getElementsByClassName('share')[0].classList.toggle("active");
    document.getElementsByClassName('share')[1].classList.toggle("active");
}
var share_icon = document.getElementsByClassName('share');
share_icon[0].addEventListener("click", show_share_modal);

