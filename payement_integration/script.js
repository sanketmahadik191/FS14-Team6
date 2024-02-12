let div = document.querySelector(".gearServices");
div.addEventListener("click", function(event){
    if(event.target.nodeName=="SPAN"){
        var amount = event.target.attributes.value.value;
        var options = {
            "key": "rzp_test_Q0YG8kegTRkqhR",
            "amount": amount*100,
            "currency": "INR",
            "name": "@AutoMobilesBooking",
            "description": "Test Transaction",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQ2jSs2AaF1eCi7xQPSNSW_tJglCaNtJbJg&usqp=CAU",
            "handler": function (response){
                alert('Payment Successfull \nPayment ID: ' + response.razorpay_payment_id);
            },
            "prefill": {
                "name": "Jayendra Prakash",
                "email": "jayendraprakash733@gmail.com",
                "contact": "8840320539"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp = new Razorpay(options);
        rzp.open();
    }
});