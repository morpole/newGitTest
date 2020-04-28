

    function ShowRedo() 
{
        document.getElementById("image").src = "goodjob.png"; 
        document.getElementById("code").innerHTML = "VoucherCode: BNY-UNH-IUJ-PLO";  
        window.scroll({
            top: 100,
            left: 0,
            behavior: 'smooth'
          });
    }

    function ShowUndo() 
{
        document.getElementById("image").src = "nope.gif"; 
        document.getElementById("code").innerHTML = "";
        window.scroll({
            top: 100,
            left: 0,
            behavior: 'smooth'
          });
    }

    

