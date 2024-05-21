//your code here
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    var draggedDiv = document.getElementById(data);
    var droppedDiv = event.target;
    let temp = draggedDiv.id;
    draggedDiv.id = droppedDiv.id;
    droppedDiv.id = temp;
  }