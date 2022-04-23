import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";
import MoneyExchanger from "./money-exchange.js";

$(document).ready(function () {
  $("#rate").click(function (e) {
    e.preventDefault();
    const homeCurr = $("#currency").val();
    const amount = $("#amount").val();
    MoneyExchanger.getRate(homeCurr, amount).then(function (newResponse) {
      showExchangeAmount(newResponse, amount);
    });
  });
});

function showExchangeAmount(response, amount) {
  if (response.result === "success") {
    $("#showCurrency").text(
      `You can buy for ${amount} USD - ${parseFloat(
        response.conversion_result
      ).toFixed(2)} ${response.target_code}`
    );
  } else {
    $(".showErrors").text(`${MoneyExchanger.error}`);
  }
}

