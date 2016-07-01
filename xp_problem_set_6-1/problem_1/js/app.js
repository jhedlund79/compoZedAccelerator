window.onload = function () {
  var billAmt,
      tipAmt,
      totalBill;
  document.getElementById('input').addEventListener("input", function(){
      billAmt = parseFloat(document.getElementById('input').value);
  });

  document.getElementById('dropDown').addEventListener("change", function(){
      tipAmt = parseFloat(document.getElementById('dropDown').value);
      tipAmt = billAmt * tipAmt;
      totalBill = tipAmt + billAmt;
      document.getElementById('tip').innerHTML = "You should tip: $" + tipAmt.toFixed(2);
      document.getElementById('totalBill').innerHTML = "Your Total bill is: $" + totalBill.toFixed(2);
  });
};
