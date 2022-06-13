function compute()
{
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposite <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"

    if (principal == "") { //Here Check is empty
        alert("Amount can't by empty or alphabet character");
        document.getElementById("principal").focus();
        return false;
    }else{
        if (principal <= 0) { //Here check is a positive number
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }
    }

}
    function updateRate()
    {
        var rateval = document.getElementById("rate").value;
        document.getElementsById("rate_val").innerText=rateval;
    }

        