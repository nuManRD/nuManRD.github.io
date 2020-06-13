/*                              <tr>
                                <td>1</td>
                                <td>Kiss</td>
                                <td>János</td>
                                <td>55</td>
                                <td>
                                    <div class="btn-group">
                                       <button class="btn-info btn">
                                           <i class="fas fa-sync-alt"></i>
                                       </button>
                                       <button class="btn-danger btn">
                                           <i class="fas fa-trash-alt"></i>
                                       </button>
                                    </div>
                                </td>
                                */


let users = [
        {surname: "Berger", firstname: "Whitney", age: 22},
        {surname: "Nagy", firstname: "Árpád", age: 32},
        {surname: "Bence", firstname: "Kiss", age: 42},
        {surname: "John", firstname: "Don", age: 21},
        {surname: "Péter", firstname: "Fehér", age: 44},
        {surname: "Márió", firstname: "Rostás", age: 33},
        {surname: "Piros", firstname: "Mária", age: 33},
        {surname: "Piros", firstname: "Behemo", age: 33}
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-info btn";
    btnDanger.innerHTML = '<i class="fas fa-sync-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}


for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k]) ) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}