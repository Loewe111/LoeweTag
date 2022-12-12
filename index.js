//make a function with the name "download" that downloads the content of the textarea as a json file
function download() {
    //get the content of the textarea
    var text = document.getElementById("json-input").value;
    //make a blob with the content of the textarea
    var blob = new Blob([text], {type: "text/json;charset=utf-8"});
    //save the blob as a file
    saveAs(blob, "data.json");
    }

function saveAs(blob, fileName) {
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