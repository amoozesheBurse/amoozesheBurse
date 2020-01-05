function showBigSizeImg(myImgIconId,myImgId)
{
  var modal = document.getElementById("exampleModal");

  var img = document.getElementById("myImg"+myImgId);
  var modalImg = document.getElementById("img01");
 
  var myImgIcon =$("#myImgIcon" + myImgIconId); 

    
    modal.style.display = "block";
    modalImg.src = img.src;
}