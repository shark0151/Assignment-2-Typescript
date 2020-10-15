let button = document.getElementById("button");
let list = document.getElementById("list");

button.addEventListener("click",addtolist);

function addtolist()
{
    let option = (<HTMLSelectElement>document.getElementById("DropBar")).value;
    let input = (<HTMLInputElement>document.getElementById("InputBar")).value;
    switch(parseInt(option))
    {
        case 1:
            {   
                input = input.toUpperCase();   
                 break;
            }
        case 2:
            {   
                input = input.toLowerCase();    
                break;
            }
        case 3:
            {   input = input[0].toUpperCase() +  input.slice(1,input.length).toLowerCase();
                break;
            }
        case 4:
            {   input = input[0].toLowerCase() +  input.slice(1,input.length).toUpperCase();
                break;
            }
        default: break;
    }

    var Row = document.createElement("tr");
    var node1 = document.createElement("td");
    var node2 = document.createElement("td");
    Row.setAttribute("id","Element"+(list.childElementCount+1).toString());
    node1.textContent = (list.childElementCount+1).toString();
    node2.textContent = input;
    Row.appendChild(node1);
    Row.appendChild(node2);           
    list.appendChild(Row);
}