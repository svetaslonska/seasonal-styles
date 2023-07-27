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

            case "summer":
                $("html").css("background-color", "#EBA52B");
                $("#slogan").text("Hot and fun days ahead!");
                $("#wear").attr("src", "images/summer-wear.jpg");
                $("#logo").attr("src", "images/summer.gif");
            break;

            case "fall":
                $("html").css("background-color", "#A81124");
                $("#slogan").text("Follow The Flow Of The Autumn Wind!");
                $("#wear").attr("src", "images/fall-wear.jpg");
                $("#logo").attr("src", "images/fall.gif");
            break;

            case "winter":
                $("html").css("background-color", "#005393");
                $("#slogan").text("Nothing burns like the cold!");
                $("#wear").attr("src", "images/winter-wear.jpg");
                $("#logo").attr("src", "images/winter.gif");
            break;

            case "default":
                $("html").css("background-color", "pink");
                $("#slogan").text("Outfitter for All Seasons!");
                $("#wear").attr("src", "images/four-seasones.jpg");
                $("#logo").attr("src", "images/four-seasons.gif");
            break;
        }


    });

   




});

