var btn = document.getElementById("btn");

btn.onclick = function(){
  var text = document.getElementById("txt").value;

  var entries = text.trim().split("\n");  
  var names = [];
  
  for (var entry of entries) {
    if (entry[entry.length - 1] == ")")  {
      var parts = entry.split("(");
      var name = parts[0].trim();
      var count = parseInt(parts[1]);
      for (var i = 0; i < count; i++) {
        names.push(name);
      }
    } else {
      names.push(entry);
    }
  }
  
  var winner = names[Math.floor(Math.random() * names.length)]; 
  
  document.getElementById("winner").textContent = winner;
 }
