let cartPrice = JSON.parse(localStorage.getItem("cartPrice")) || {};
let subtotal = document.querySelector("#stprice");
let delivery = document.querySelector("#delCharge");
let total = document.querySelector("#tprice");
delivery.innerText = "$24";
subtotal.innerText = cartPrice.subPrice;
total.innerText = cartPrice.total;
let upi_inp = document.getElementById("upi_inp");
let card_inp = document.getElementById("card_inp");
let cod_inp = document.getElementById("cod_inp");
let flag;

import cartnav from "../Components/cartnav.js";
let nav = document.querySelector("#nav");
nav.innerHTML = cartnav();
window.onload = () => {
  upi_inp.style.display = "none";
  card_inp.style.display = "none";
  cod_inp.style.display = "none";
};

let payment_upi = document.getElementById("payment_upi");
let payment_card = document.getElementById("payment_card");
let payment_cod = document.getElementById("payment_cod");
payment_upi.onclick = () => {
  upi_inp.style.display = "flex";
  card_inp.style.display = "none";
  cod_inp.style.display = "none";
  payment_upi.style.border = "2px solid black";
  payment_cod.style.border = "1px solid rgb(167, 167, 167)";
  payment_card.style.border = "1px solid rgb(167, 167, 167)";
  let save_btn = document.getElementById("checkOut");

  save_btn.onclick = () => {
    console.log("hi");
    flag = true;
    let upi_inp_val = document.getElementById("upi_inp_val").value;
    if (upi_inp_val === "") {
      alert("Please Enter UPI ID");
    } else {
      if (flag === true) {
        let send = {
          upi_inp_val,
          method: "UPI",
        };
        let data = [];
        data.push(send);
        localStorage.setItem("paymentData", JSON.stringify(data));
        window.location.href = "review.html";
      }
    }
  };
  flag = false;
};
payment_card.onclick = () => {
  upi_inp.style.display = "none";
  card_inp.style.display = "grid";
  cod_inp.style.display = "none";
  payment_card.style.border = "2px solid black";
  payment_upi.style.border = "1px solid rgb(167, 167, 167)";
  payment_cod.style.border = "1px solid rgb(167, 167, 167)";
  let save_btn = document.getElementById("checkOut");
  save_btn.onclick = () => {
    flag = true;
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let exp = document.getElementById("exp").value;
    if (name === "" || number === "" || exp == "") {
      alert("Please enter all the details");
    } else {
      if (flag === true) {
        let obj = {
          name,
          number,
          exp,
          method: "Debit / Credit Card",
        };
        let data = [];
        data.push(obj);
        localStorage.setItem("paymentData", JSON.stringify(data));
        window.location.href = "review.html";
      }
    }
  };
  flag = false;
};
payment_cod.onclick = () => {
  payment_cod.style.border = "2px solid black";
  payment_card.style.border = "1px solid rgb(167, 167, 167)";
  payment_upi.style.border = "1px solid rgb(167, 167, 167)";
  cod_inp.style.display = "flex";
  cod_inp.style.justifyContent = "center";
  cod_inp.style.alignSelf = "center";
  upi_inp.style.display = "none";
  card_inp.style.display = "none";
  let save_btn = document.getElementById("checkOut");
  save_btn.onclick = () => {
    flag = true;
    if (flag === true) {
      let send = {
        method: "COD",
      };
      let data = [];
      data.push(send);
      localStorage.setItem("paymentData", JSON.stringify(data));
      window.location.href = "review.html";
    }
  };
  flag = false;
};

let address = JSON.parse(localStorage.getItem("userAddress"));

console.log(address);

const appendData = (data)=>{
    let billing_add = document.getElementById("billing_add");
    billing_add.innerHTML = null;
    data.forEach((data)=>{
        let name = document.createElement("p");
    name.innerText = data.fname+" "+data.lname;
    let address = document.createElement("p");
    address.innerText = data.address+","+data.city+"-"+data.zip+","+data.state+","+data.country;
    let change = document.createElement("a");
    change.innerText = "change";
    change.href = "address.html";
    change.style.color = "black";
    billing_add.append(name,address,change); 
    });
}
appendData(address)
