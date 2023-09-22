/**
 * @return {PaymentRequest} The PaymentRequest oject.
 **/

 function initPaymentRequest() {
  let supportedInstruments = [
     {
        supportedMethods: "https://bobbucks.dev/pay"
     }
  ];

  let details = {
     total: { label: "Donation", amount: { currency: "USD", value: "55.00" } },
     displayItems: [
        {
           label: "confirmed!",
           amount: { currency: "USD", value: "65.00" }
        },
        {
           label: "Total",
           amount: { currency: "USD", value: "11.00" }
        }
     ]
  };

  return new PaymentRequest(supportedInstruments, details);
}

/**
* @param {PaymentRequest} request The PaymentRequest object.
*/
function onBuyClicked(request) {
  request
     .show()
     .then(function (instrumentResponse) {
        sendPaymentToServer(instrumentResponse);
     })
     .catch(function (err) {
        ChromeSamples.setStatus(err);
     });
}

/**
* Simulates processing the payment data on the server.
*/
function sendPaymentToServer(instrumentResponse) {
  window.setTimeout(function () {
     instrumentResponse
        .complete("success")
        .then(function () {
           document.getElementById(
              "result"
           ).innerHTML = instrumentToJsonString(instrumentResponse);
        })
        .catch(function (err) {
           ChromeSamples.setStatus(err);
        });
  }, 2000);
}

/**
* Converts the payment instrument into a JSON string.
*/
function instrumentToJsonString(instrument) {
  let details = instrument.details;

  return JSON.stringify(
     {
        methodName: instrument.methodName,
        details: details
     },
     undefined,
     2
  );
}

const payButton = document.getElementById("buyButton");
payButton.setAttribute("style", "display: none;");
if (window.PaymentRequest) {
  let request = initPaymentRequest();
  payButton.setAttribute("style", "display: inline;");
  payButton.addEventListener("click", function () {
     onBuyClicked(request);
     request = initPaymentRequest();
  });
} else {
  ChromeSamples.setStatus("This browser does not support web payments");
}
