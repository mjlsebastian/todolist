let addNameBtn = document.querySelector("#addBtn");
addNameBtn.addEventListener("click", addName);

function addName() {
    // get value from input
    let thingsTodo = document.querySelector("#thingsTodo").value;

    // get parent node
    let nameList = document.querySelector("#nameList");

    //create child nodes
    let nameItem = document.createElement("div");
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    // nameInput.setAttribute("disabled", ""); //add disabled attribute
    nameInput.value = thingsTodo;
    nameInput.defaultValue = thingsTodo; //to save the defaultValue

    // create edit btn
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList = "editBtn";
    editBtn.addEventListener("click", editValue);

    // // create delete btn
    // let delBtn = document.createElement("button");
    // delBtn.textContent = "Delete";
    // delBtn.classList = "delBtn";
    // delBtn.addEventListener("click", delValue);

    // append child nodes
    nameList.appendChild(nameItem);
    nameItem.appendChild(nameInput);
    nameItem.appendChild(editBtn);

    function editValue() {
        //remove disabled attribute
        nameInput.removeAttribute("disabled", "");

        //disable edit button to avoid multiple save buttons
        editBtn.setAttribute("disabled", "");

        //create save btn 
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList = "saveBtn";
        saveBtn.addEventListener("click", saveValue);

        //append save btn
        nameItem.appendChild(saveBtn);


        function saveValue() {
            let text = "Are you sure you want to save " + nameInput.value + " as name?";

            if (confirm(text) == true) {
                //enable edit button again
                editBtn.removeAttribute("disabled", "");

                //get new value
                let newValue = nameInput.value;

                //to change the default value to the new value
                nameInput.defaultValue = newValue;
                console.log(newValue);

                //disable input type 
                nameInput.setAttribute("disabled", "");

                //hide save button
                // saveBtn.setAttribute("display", "none");
                nameItem.removeChild(saveBtn);

                //add text to alert
                text = "Saved successfully";
            } else {
                text = "Cancelled";
                //enable edit button again
                editBtn.removeAttribute("disabled", "");

                //disable input type 
                nameInput.setAttribute("disabled", "");

                //hide save button
                // saveBtn.setAttribute("display", "none");
                nameItem.removeChild(saveBtn);

                //to change the value to its default value
                nameInput.value = nameInput.defaultValue;
            }
            alert(text);
        }

    }
}



