$(".delete").click(function(){
    console.log("delete button clicked");
    var name = $(this).attr("name");
    
    fetch(`planets/planets_name:${name}`, {
      method:"delete",
      headers: {'Content-Type': 'applications/json'}
    })
  
  })
  
  $(".update").click(function(){
    console.log("update button clicked");
    var name = $(this).attr("name");
  
    fetch(`planets/planets_name:${name}`, {
      method: "put",
      header: {'Content-Type': 'applications/json'}
    })
  
  })