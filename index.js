let QRInput=document.querySelector("#qrInput");
let generateBtn=document.querySelector("#generateBtn");
let qrContainer=document.querySelector("#qrContainer");
let downloadBtn=document.querySelector("#downloadBtn");

generateBtn.addEventListener("click",function(){
    if(QRInput.value.trim()===" "){
        alert("Enter Text or Url");
    }
    else{
        qrContainer.innerHTML="";
     new QRCode(qrContainer,{
     text:QRInput.value,
     width:200,
     height:200,

   });
    }
});


downloadBtn.addEventListener("click", function () {
    let canvas = qrContainer.querySelector("canvas");
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "QRCode.png";
    link.click();
});
