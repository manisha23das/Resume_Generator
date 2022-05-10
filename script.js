function addNewINTERNField() {

let newNode = document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2");
newNode.setAttribute('placeholder', 'Enter here');

let weObj = document.getElementById("we");
let weAddButtonObj = document.getElementById("weAddButton");

weObj.insertBefore(newNode, weAddButtonObj);
    
}

function addNewAQField(){

let newNode = document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("aqField");
newNode.classList.add("mt-2");
newNode.setAttribute('placeholder', 'Enter here');

let aqObj = document.getElementById("aq");
let aqAddButtonObj = document.getElementById("aqAddButton");

aqObj.insertBefore(newNode, aqAddButtonObj);
    
}

function addNewTRField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("trField");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter here');
    
    let trObj = document.getElementById("tr");
    let trAddButtonObj = document.getElementById("trAddButton");
    
    trObj.insertBefore(newNode, trAddButtonObj);
        
    }
    //generate cv
    function generateCV()
    {
        let nameField = document.getElementById("nameField").value;
        let nameT = document.getElementById("nameT");
        nameT.innerHTML = nameField;
        
        let contactField = document.getElementById("contactField").value;
        document.getElementById("contactT").innerHTML = contactField;

        let dobField = document.getElementById("dobField").value;
        document.getElementById("dobT").innerHTML = dobField;

        let addressField = document.getElementById("addressField").value;
        document.getElementById("addressT").innerHTML = addressField;

        let emailField = document.getElementById("emailField").value;
        document.getElementById("emailT").innerHTML = emailField;

        let linkedField = document.getElementById("linkedField").value;
        document.getElementById("linkedT").innerHTML = linkedField;

        let gitField = document.getElementById("gitField").value;
        document.getElementById("gitT").innerHTML = gitField;

        //objective

        let objectiveField = document.getElementById("objectiveField").value;
        document.getElementById("objectiveT").innerHTML = objectiveField;
        //skills
        let skillsField = document.getElementById("skillsField").value;
        document.getElementById("skillsT").innerHTML = skillsField;
        
         //project
        let wes = document.getElementsByClassName("weField");
        let str = " ";
        for(let e of wes){
            str = str + `<li> ${e.value} </li>`;
        }
        document.getElementById("weT").innerHTML = str;

           //academic
        let aqs = document.getElementsByClassName("aqField");
        let str1 = " ";
        for(let e of aqs){
            str1 = str1 + `<li> ${e.value} </li>`;
        }
        document.getElementById("aqT").innerHTML = str1;


        //training
        let trs = document.getElementsByClassName("trField");
        let str2 = " ";
        for(let e of trs){
            str2 = str2 + `<li> ${e.value} </li>`;
        }
        document.getElementById("trT").innerHTML = str2;

        
        document.getElementById('cv-form').style.display = 'none';
        document.getElementById('cv-template').style.display = 'block';



    }

    //print cv
    function printCV(){
        window.print();
    }
    