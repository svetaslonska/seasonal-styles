$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        let season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);


        season = season.toLowerCase();

        switch(season){
            
            case "spring":
                $("html").css("background-color", "#2B7129");
                $("#slogan").text("Spring into spring wear!");
                $("#wear").attr("src", "images/spring-wear.jpg");
                $("#logo").attr("src", "images/spring.gif");
            break;
        }


    });

   




});

