/* Creates 5 balls */
for(let i = 0; i<=4; i++)
{
var Left = Math.floor(Math.random() * (90 - 10)) + 10;
var Top = Math.floor(Math.random() * (85 - 7)) + 7;
while(Top > 40 && Top < 65)
  Top = Math.floor(Math.random() * (85 - 7)) + 7;

/* Constructs the ball */
$("body").append("<div class='circle' id=circle" + i + "></div>");
$("#circle" + i).css({
  "position": "absolute",
  "top": Top + "%",
  "left": Left + "%"
});

$("#circle" + i).append("<div class='innerCircle' id=innerCircle" + i + "></div>");
$("#innerCircle" + i).append("<div class='innerDownCircle' id=innerDownCircle" + i + "></div>");
$("#innerCircle" + i).append("<div class='innerUpCircle' id=innerUpCircle" + i + "></div>");
$("#innerCircle" + i).append("<div class='innerLeftCircle' id=innerLeftCircle" + i + "></div>");
$("#innerCircle" + i).append("<div class='innerRightCircle' id=innerRightCircle" + i + "></div>");

$("#circle" + i).append("<div class='downCircle' id=downCircle" + i + "></div>");
$("#circle" + i).append("<div class='upCircle' id=upCircle" + i + "></div>");
$("#circle" + i).append("<div class='leftCircle' id=leftCircle" + i + "></div>");
$("#circle" + i).append("<div class='rightCircle' id=rightCircle" + i + "></div>");

/* Whenever the ball is touched close to the center, move ball slightly */
$("#innerDownCircle" + i).click(
  function(){
  $("#circle" + i).animate({ 
      top: "+=5%"
  }, 500 );
});
$("#innerUpCircle" + i).click(
  function(){
  $("#circle" + i).animate({ 
      top: "-=5%"
  }, 500 );
});
$("#innerRightCircle" + i).click(
  function(){
  $("#circle" + i).animate({ 
      left: "+=1%"
  }, 500 );
});
$("#innerLeftCircle" + i).click(
  function(){
  $("#circle" + i).animate({ 
      left: "-=1%"
  }, 500 );
});

$("#downCircle" + i).click(
  function(){
    $("#circle" + i).animate({
      top: "+=10%"
    }, 500);
  }
)

/* Whenever the ball is touched close to their edges, move ball further */
$("#upCircle" + i).click(
  function(){
    $("#circle" + i).animate({
      top: "-=10%"
    }, 500);
  }
)
$("#rightCircle" + i).click(
  function(){
    $("#circle" + i).animate({
      left: "+=5%"
    }, 500);
  }
)
$("#leftCircle" + i).click(
  function(){
    $("#circle" + i).animate({
      left: "-=5%"
    }, 500);
  }
)

/* Checks positioning of ball if in hole or not */
setInterval(function() 
  {
    var val = $("#circle" + i).offset().top - $('#hole').offset().top;
    var val2 = $("#circle" + i).offset().left - $('#hole').offset().left;
  
      if((val >= 0 && val <= 50) && (val2 >= 0 && val2 <= 50))  {
        //$("#circle" + i).fadeOut();
        $("#circle" + i).animate({width:0, height:0}, 500, function(){
          $(this).remove();
          });
      }
  }, 100);
}

