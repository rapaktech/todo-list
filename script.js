// Loading HTML Elements from DOM
const add = document.querySelector('#add-item');
add.addEventListener("click", addTask);


/* Code to add 'enter' event listener  to textbox.
Deprecated method was used, so I commented it out.
const item = document.getElementById("item");
item.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        event.preventDefault();
        add.click();
    }
}); */


// Function to add task to DOM
function addTask () {
  const item = document.getElementById("item");
  if (item.value === "") {
    document.querySelector('.error').innerHTML = "Please input something";
  } else {
    document.querySelector('.error').innerHTML = "*";
    var a = document.createElement("INPUT");
    a.setAttribute("type", "checkbox");
    a.setAttribute("onclick", "strikeThrough(this)");
    a.setAttribute("id", "checkbox-" + item.value);
    a.setAttribute("name", item.value);
    var x = document.createElement("LABEL");
    x.setAttribute("id", "label-" + item.value);
    x.setAttribute("for", "checkbox-" + item.value);
    x.setAttribute("name", item.value);
    x.innerHTML = item.value;
    var y = document.createElement("INPUT");
    y.setAttribute("type", "button");
    y.setAttribute("style", "margin:5px");
    y.setAttribute("onclick", "editTask(this)");
    y.setAttribute("id", "edit-" + item.value);
    y.setAttribute("name", item.value);
    y.value = "Edit";
    var d = document.createElement("INPUT");
    d.setAttribute("type", "text");
    d.setAttribute("id", "value-" + item.value);
    d.setAttribute("disabled", true);
    d.setAttribute("name", item.value);
    d.value = item.value;
    var e = document.createElement("INPUT");
    e.setAttribute("type", "button");
    e.setAttribute("id", "save-" + item.value);
    e.setAttribute("disabled", true);
    e.setAttribute("onclick", "saveTask(this)");
    e.setAttribute("name", item.value);
    e.value = "Save";
    var z = document.createElement("INPUT");
    z.setAttribute("type", "button");
    z.setAttribute("style", "margin:5px");
    z.setAttribute("onclick", "deleteTask(this)");
    z.setAttribute("id", "delete-" + item.value);
    z.setAttribute("name", item.value);
    z.value = "Delete";
    var b = document.createElement("BR");
    b.setAttribute("id", "br1-" + item.value);
    b.setAttribute("name", item.value);
    var c = document.createElement("BR");
    c.setAttribute("id", "br2-" + item.value);
    c.setAttribute("name", item.value);
    var list = document.getElementById("list");
    var p = document.getElementById("no-items");
    if (p) {
        p.remove();
    }
    list.appendChild(a);
    list.appendChild(x);
    list.appendChild(y);
    list.appendChild(d);
    list.appendChild(e);
    list.appendChild(z);
    list.appendChild(b);
    list.appendChild(c);
    item.value = "";
  }
}


// Function to toggle 'disabled' attribute of edit fields
function editTask(task) {
    let valueId = "value-" + task.name;
    let saveId = "save-" + task.name;
    document.getElementById(valueId).disabled = false;
    document.getElementById(saveId).disabled = false;
}


// Function to toggle 'strikethrough' attribute
function strikeThrough(task) {
    let checkboxId = "checkbox-" + task.name;
    let labelId = "label-" + task.name;
    let checkbox = document.getElementById(checkboxId);
    let label = document.getElementById(labelId);
    if (checkbox.checked) { 
      label.setAttribute("style", "text-decoration-line:line-through");
    } else {
      label.setAttribute("style", "text-decoration-line:none");
    }
}


// Function to update modified fields
function saveTask(task) {
    let name = task.name;
    let items = document.getElementsByName(name);
    let valueId = "value-" + name;
    let value = document.getElementById(valueId);
    value.id = "value-" + value.value;
    value.disabled = true; 
    for (let item of items) {
        item.name = value.value;
    }

    let checkboxId = "checkbox-" + name;
    let checkbox = document.getElementById(checkboxId);
    checkbox.id = "checkbox-" + value.value;
    let labelId = "label-" + name;
    let label = document.getElementById(labelId);
    label.for = checkbox.id;
    label.id = "label-" + value.value;
    label.innerHTML = value.value;
    let editId = "edit-" + name;
    let edit = document.getElementById(editId);
    edit.id = "edit-" + value.value;
    let removeId = "delete-" + name;
    let remove = document.getElementById(removeId);
    remove.id = "delete-" + value.value;
    remove.name = value.value;
    let br1Id = "br1-" + name;
    let br1 = document.getElementById(br1Id);
    br1.id = "br1-" + value.value;
    let br2Id = "br2-" + name;
    let br2 = document.getElementById(br2Id);
    br2.id = "br2-" + value.value;
    let saveId = "save-" + name;
    let save = document.getElementById(saveId);
    save.id = "save-" + value.value;
    save.disabled = true;
}


// Function to remove task from DOM
function deleteTask(task) {
    let name = task.name;
    let checkboxId = "checkbox-" + name;
    let checkbox = document.getElementById(checkboxId);
    checkbox.remove();
    let labelId = "label-" + name;
    let label = document.getElementById(labelId);
    label.remove();
    let editId = "edit-" + name;
    let edit = document.getElementById(editId);
    edit.remove();
    let valueId = "value-" + name;
    let value = document.getElementById(valueId);
    value.remove();
    let saveId = "save-" + name;
    let save = document.getElementById(saveId);
    save.remove();
    let br1Id = "br1-" + name;
    let br1 = document.getElementById(br1Id);
    br1.remove();
    let br2Id = "br2-" + name;
    let br2 = document.getElementById(br2Id);
    br2.remove();
    let removeId = "delete-" + name;
    let remove = document.getElementById(removeId);
    remove.remove();
}