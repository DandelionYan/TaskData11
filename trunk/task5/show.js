    function showdiv(targetid){
        var target=document.getElementById(targetid);

        var box=document.getElementById("box");
        if (target.style.display=="block"){
            target.style.display="none";
            box.style.position="relative";
            box.style.top=0;
            box.style.left=0;

        } else {
            target.style.display="block";
            box.style.position="relative";
            box.style.left="300px";
            box.style.top="8vh";
        }
    }
