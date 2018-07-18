$(document).ready(function(){
  $(".entryList").submit(function(event){
    event.preventDefault();

    var inputed = $("input#toDoInput").val();
    console.log(inputed);

    $(".output").prepend("<li>"+"<input type='checkbox'>"+inputed+"</li>")
    $("input#toDoInput").val("");

  });

  $(".remove").click(function(){
    $('li input:checked').parents('li').remove();
  })

  $(".strike").click(function(){
    $('li input:checked').parents('li').css("text-decoration", "line-through");
  })
});
