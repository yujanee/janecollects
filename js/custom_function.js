$(function () {
    // This button will increment the value
    $('.qtyplus').click(function (e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=' + fieldName + ']').val());
      // If is not undefined
      if (!isNaN(currentVal)) {
        // Increment
        $('input[name=' + fieldName + ']').val(currentVal + 1);
      } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
      }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function (e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=' + fieldName + ']').val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
        // Decrement one
        $('input[name=' + fieldName + ']').val(currentVal - 1);
      } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
      }
    });

  });
  // 清除
  function zero(e) {
    $('input[name=quantity' + e.id.replace("clear", "") + ']').val(0);
  }


  function ShowonValue() {
    var price1 = parseInt($('#quantity_price01').attr("value"));
    var itemCount1 = parseInt($('input[name=quantity1]').val());
    var price2 = parseInt($('#quantity_price02').attr("value"));
    var itemCount2 = parseInt($('input[name=quantity2]').val());
    var price3 = parseInt($('#quantity_price03').attr("value"));
    var itemCount3 = parseInt($('input[name=quantity3]').val());
    var price4 = parseInt($('#quantity_price04').attr("value"));
    var itemCount4 = parseInt($('input[name=quantity4]').val());
    var price5 = parseInt($('#quantity_price05').attr("value"));
    var itemCount5 = parseInt($('input[name=quantity5]').val());
    var price6 = parseInt($('#quantity_price06').attr("value"));
    var itemCount6 = parseInt($('input[name=quantity6]').val());
    var price7 = parseInt($('#quantity_price07').attr("value"));
    var itemCount7 = parseInt($('input[name=quantity7]').val());
    var price8 = parseInt($('#quantity_price08').attr("value"));
    var itemCount8 = parseInt($('input[name=quantity8]').val());
    var price9 = parseInt($('#quantity_price09').attr("value"));
    var itemCount9 = parseInt($('input[name=quantity9]').val());

    var show_result = '';
    var table_data='<table class=\"table\"><thead><tr><th scope=\"col\">名稱</th><th scope=\"col\">單價</th><th scope=\"col\">數量</th><th scope=\"col\">總額</th></tr></thead><tbody>';
    if (itemCount1 != 0) {
      
        table_data+="<tr><td>牛肉麵</td><td>"+price1+"</td><td>"+itemCount1+"</td><td>"+ (price1 * itemCount1) +"</td></tr>";
    }
    if (itemCount2 != 0) {
      show_result += '滷肉飯單價:' + price2 + '<br/>' + '總價:' + (price2 * itemCount2) + '<br/>';
      table_data+="<tr><td>滷肉飯</td><td>"+price2+"</td><td>"+itemCount2+"</td><td>"+ (price2 * itemCount2) +"</td></tr>";
    }
    if (itemCount3 != 0) {
      show_result += '廣東粥單價:' + price3 + '<br/>' + '總價:' + (price3 * itemCount3) + '<br/>';
      table_data+="<tr><td>廣東粥</td><td>"+price3+"</td><td>"+itemCount3+"</td><td>"+ (price3 * itemCount3) +"</td></tr>";
    }
    if (itemCount4 != 0) {
      show_result += '草莓巧達單價:' + price4 + '<br/>' + '總價:' + (price4 * itemCount4) + '<br/>';
      table_data+="<tr><td>草莓巧達</td><td>"+price4+"</td><td>"+itemCount4+"</td><td>"+ (price4 * itemCount4) +"</td></tr>";
    }
    if (itemCount5 != 0) {
      show_result += '經典檸檬塔單價:' + price5 + '<br/>' + '總價:' + (price5 * itemCount5) + '<br/>';
      table_data+="<tr><td>經典檸檬塔</td><td>"+price5+"</td><td>"+itemCount5+"</td><td>"+ (price5 * itemCount5) +"</td></tr>";
    }
    if (itemCount6 != 0) {
      show_result += '提拉米蘇單價:' + price6 + '<br/>' + '總價:' + (price6 * itemCount6) + '<br/>';
      table_data+="<tr><td>提拉米蘇</td><td>"+price6+"</td><td>"+itemCount6+"</td><td>"+ (price6 * itemCount6) +"</td></tr>";
    }
    if (itemCount7 != 0) {
      show_result += '拿鐵單價:' + price7 + '<br/>' + '總價:' + (price7 * itemCount7) + '<br/>';
      table_data+="<tr><td>拿鐵</td><td>"+price7+"</td><td>"+itemCount7+"</td><td>"+ (price7 * itemCount7) +"</td></tr>";
    }
    if (itemCount8 != 0) {
      show_result += '瑪格麗特披薩單價:' + price8 + '<br/>' + '總價:' + (price8 * itemCount8) + '<br/>';
      table_data+="<tr><td>瑪格麗特披薩</td><td>"+price8+"</td><td>"+itemCount8+"</td><td>"+ (price8 * itemCount8) +"</td></tr>";
    }
    if (itemCount9 != 0) {
      show_result += '雙層起司堡單價:' + price9 + '<br/>' + '總價:' + (price9 * itemCount9) + '<br/>';
      table_data+="<tr><td>雙層起司堡</td><td>"+price9+"</td><td>"+itemCount9+"</td><td>"+ (price9 * itemCount9) +"</td></tr>";
    }

    var totalPrice =(price1 * itemCount1) + (price2 * itemCount2) + (price3 * itemCount3) +
      (price4 * itemCount4) + (price5 * itemCount5) + (price6 * itemCount6) +
      (price7 * itemCount7) + (price8 * itemCount8) + (price9 * itemCount9);
    var totalnum =itemCount1+itemCount2+itemCount3+itemCount4+itemCount5+itemCount6+
                   itemCount7+itemCount8+itemCount9;        
    table_data+="<tr><td>總計</td><td>"+"</td><td>"+totalnum+"</td><td>"+totalPrice

    if (totalPrice == 0) {
      $('#OrderConfirm').html('尚無選購餐點');
    }
    else {
      $('#OrderConfirm').html(table_data+"</tbody></table>");
    }

  }
function clearAll(){
for(var i=1;i<=9;i++){
  $("input[name=quantity"+i+"]").val('0');
}

}
 
function choosePic(){
clearAll();
var numid=Math.floor(Math.random()*9+1);
$('input[name=quantity'+numid+']').val("1");
$("#staticBackdrop0"+numid).modal();
}

function bnC(){
  alert("已送出");
}


function StapleArea(){
  $('#n1')[0].scrollIntoView();
}

function DessertArea(){
  $('#n4')[0].scrollIntoView();
}
function OtherArea(){
  $('#n7')[0].scrollIntoView();
}








  

  // function ShowonValue() {
  //  var price2 = parseInt($('#quantity_price02').attr("value"));
  //   var itemCount2 = parseInt($('input[name=quantity2]').val());
  //   $('#OrderConfirm').html('燒肉飯單價:'+price2+'<br/>'+'總價:'+(price2 * itemCount2));
  // } 

