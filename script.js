function compute()
{
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);

    function updateRate()
    {
        var rateval = document.getElementById("rate").value;
        document.getElementsBy("rate_val").innerText=rateval;
    }
    document.getElementById("result").innerHTML="If you deposite "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}
        