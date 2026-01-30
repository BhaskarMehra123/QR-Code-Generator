let input = document.querySelector("input");
let btn = document.querySelector("button");
let qr = document.querySelector("#qrcode"); // this is the <img>

function getcode() {
    if(input.value===""){
        alert("enter text please");
    }
    else{
        qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        console.log(qr.src);
    }

}

btn.addEventListener("click", () => {
  getcode();
});