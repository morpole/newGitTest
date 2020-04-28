

    function ShowRedo() 
{
        document.getElementById("image").src = "image5.jpeg"; 
        document.getElementById("code").innerHTML = "VoucherCode: BNY-UNH-IUJ-PLO";  
        window.scroll({
            top: 250,
            left: 0,
            behavior: 'smooth'
          });
    }

 

    function ShowUndo1() 
    {
            document.getElementById("image").src = "image1.jpeg"; 
            document.getElementById("code").innerHTML = "";
            window.scroll({
                top: 100,
                left: 0,
                behavior: 'smooth'
              });
        }

        function ShowUndo2() 
        {
                document.getElementById("image").src = "image2.jpeg"; 
                document.getElementById("code").innerHTML = "";
                window.scroll({
                    top: 100,
                    left: 0,
                    behavior: 'smooth'
                  });
            }
            function ShowUndo3() 
        {
                document.getElementById("image").src = "image3.jpeg"; 
                document.getElementById("code").innerHTML = "";
                window.scroll({
                    top: 100,
                    left: 0,
                    behavior: 'smooth'
                  });
            }
            function ShowUndo4() 
            {
                    document.getElementById("image").src = "image4.jpeg"; 
                    document.getElementById("code").innerHTML = "";
                    window.scroll({
                        top: 100,
                        left: 0,
                        behavior: 'smooth'
                      });
                }