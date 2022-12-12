
function saveJSON(object, fileName) {
    var json = JSON.stringify(object);
    var blob = new Blob([json], {type: "text/json;charset=utf-8"});
    var link = document.createElement("a");
    if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function download(){
    var object = {
        name: document.getElementById("input-name").value,
        description: document.getElementById("input-description").value,
        hasTeams: document.getElementById("input-teams").value
    }
    var fileName = document.getElementById("input-game-id").value + ".json";
    saveJSON(object, fileName);
}
