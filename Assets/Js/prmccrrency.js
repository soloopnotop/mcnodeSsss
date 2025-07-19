// currency for minecraft plans

function updatePlans(location) {
    const plans = {
      "USD": ["$7.20", "$10.80", "$15.60", "$19.20", "$25.20", "$31.20", "$39.60","$48.00"],
       "INR": ["₹599", "₹899", "₹1299", "₹1600", "₹2099", "₹2599", "₹3299", "₹3999"]

    };

    const priceElements = document.querySelectorAll(".price");
    if (plans[location]) {
        priceElements[0].innerHTML = plans[location][0] + "<span>/month</span>";
        priceElements[1].innerHTML = plans[location][1] + "<span>/month</span>";
        priceElements[2].innerHTML = plans[location][2] + "<span>/month</span>";
        priceElements[3].innerHTML = plans[location][3] + "<span>/month</span>";
        priceElements[4].innerHTML = plans[location][4] + "<span>/month</span>";
        priceElements[5].innerHTML = plans[location][5] + "<span>/month</span>";
        priceElements[6].innerHTML = plans[location][6] + "<span>/month</span>";
        priceElements[7].innerHTML = plans[location][7] + "<span>/month</span>";

        
    }
}
document.addEventListener("DOMContentLoaded", function () {
const buttons = document.querySelectorAll(".location-btn");

if (buttons.length > 0) {
buttons[0].classList.add("active"); 
}

buttons.forEach(button => {
button.addEventListener("click", function () {

    buttons.forEach(btn => btn.classList.remove("active"));
    
  
    this.classList.add("active");
});
});
});

