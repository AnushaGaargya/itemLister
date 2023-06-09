var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems );



function addItem(e){
    e.preventDefault();
  
    // get input value
    var newItem = document.getElementById('item').value   
    bold = document.createElement('strong'),
    textnode = document.createTextNode(newItem); 
    bold.appendChild(textnode); 
    
    // create new li element
    var li = document.createElement('li');
    // add classname to it
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(bold);


    var newDesc = document.getElementById('desc').value;
   
    //add text node with input value
    li.appendChild(document.createTextNode(` ${newDesc} `));


    // create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li); 

    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li); 

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement; //the parent element of delete btn is list item. 
            itemList.removeChild(li);
        }


    }

}

function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get lis
    var items = itemList.getElementsByTagName('li');
    // turn html collection to an array
   
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var descName = item.firstChild.nextSibling.textContent;
        
        if(itemName.toLowerCase().indexOf(text) != -1  ){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
       
        }
        if(descName.toLowerCase().indexOf(text) != -1  ){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
       
        }



    });
 
}