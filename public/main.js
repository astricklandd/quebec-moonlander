$(".delete").click(function(){
    console.log("delete button clicked");
    var id = $(this).attr("id");
    
    fetch(`planets/name:${name}`, {
      method:"delete",
      headers: {'Content-Type': 'applications/json'}
    })
  
  })
  
  $(".update").click(function(){
    console.log("update button clicked");
    var id2 = $(this).attr("id");
  
    fetch(`teams/team_id:{id2}`, {
      method: "put",
      header: {'Content-Type': 'applications/json'}
    })
  
  })