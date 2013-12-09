function onChangeInput(input)
{
    var form = document.getElementById("ccTipperForm");
    for(i = 0; i< form.childNodes.length; i++)
    {
        if (input.id != form[i].id)
        {
            calculateNewValue(form[i]);
        }
    }
}

function calculateNewValue(input)
{
    var checkTotal = Number(document.getElementById("checkTotal").value);
    var percentTips = Number(document.getElementById("percentTips").value);
  
    if ("percentTips" == input.id)
    {
        
    }
    else if ("totalTips" == input.id)
    {
        var totalTips = checkTotal * (percentTips/100);
        input.value = Math.round(totalTips * 100) / 100;
    }
    else if ("grandTotal" == input.id)
    {
        var grandTotal = checkTotal * (1 + percentTips/100);
        input.value = Math.round(grandTotal * 100) / 100;
    }
    else if ("totalPerPerson" == input.id)
    {
    }
}
