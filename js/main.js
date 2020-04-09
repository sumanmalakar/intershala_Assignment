// console.log("Hello_Console")

$(document).ready(function () {
    let specialElementHandlers = {
        "#editor": function (element, renderer) {
            return true;
        }
    };

    $("#pdf").click(function () {
        let doc = new jsPDF();

        doc.fromHTML($("#target").html(), 15, 15, {
            "width": 170,
            "elementHandlers": specialElementHandlers
        });

        doc.save("sample-file.pdf");
    })
});