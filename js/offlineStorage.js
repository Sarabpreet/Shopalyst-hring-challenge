
function hit()
{
    if(typeof(Storage) !== "undefined")
    {
            if (localStorage.clickcount)
        {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            }
        else
        {
                localStorage.clickcount = 0;
            }
            // document.getElementByClassName("hover").innerHTML = localStorage.clickcount;
        }
    else
    {
            console.log('update browser please');
    }
}

hit();