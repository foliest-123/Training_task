$(document).ready(function(){
    $(".hide-element button").click(function(){
                $(".hide-element p").fadeTo(500 , 0.15);
    });
    $(".sample-form input").hover(function(){
                $(this).css("background-color" , "grey")
    });
    $(".animate-image").click(function(){
               var image_div = $(".animate-image img")
                image_div.animate({ height:'toggle' , opacity: '0.5'} ,'slow');
    });
    $(".load-data button").click(function(){
       $(".load-data p").load("sample.txt" , function(responseTxt, statusTxt, xhr){
       if(statusTxt == "success"){
        console.log(statusTxt)
       }
       else{
        console.log(statusTxt)
       }
       })
    })
    $(".api-call button").dblclick(function(){
      $.get("http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/yesterday", function(data, status){
        console.log(status)
        $.each(data , function(k , v) {
           $(".api-call ul").append("<li>" + k + ": " + v + "</li>");
        })
      });
    });
});


// event methods
/*
click - when click element 
dblclcik - when double click the element
mouseenter - when mouse point the element
mouseleave - when mouse hover and leave the element
hover - as same as mouse enter event
focus - when focus to the element 
blur - element lose the focus
on - add multiple event to the element
*/


// jQuery Effects

/*
hide() - hide the element
show() - show the element
toggle() - it will do hide and show
fadeIn() , fadeOut() , fadeToggle()
slideUp() ,slideDown() , slideToggle()

*/

