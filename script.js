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
    var backgroundImage1 = window.getComputedStyle(draggedDiv).getPropertyValue('background-image');
    var backgroundImage2 = window.getComputedStyle(droppedDiv).getPropertyValue('background-image');
    droppedDiv.style.backgroundImage = `${backgroundImage1}`;
    draggedDiv.style.backgroundImage = `${backgroundImage2}`;
    var temp = draggedDiv.innerText;
    draggedDiv.innerText = droppedDiv.innerText;
    droppedDiv.innerText = temp;
  }