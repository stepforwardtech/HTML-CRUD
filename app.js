'use strict';

var _productRow = null;

function LoadProducts() {
    CheckForTBody();

    // append product to the table
    AppendProductToTable(
         "<td>My First Video</td>" +
            "<td>6/11/2015</td>" +
            "<td>www.pluralsight.com</td>"
    );
    AppendProductToTable(
        "<td>Extending Bootstrap with CSS, JavaScript and jQuery</td>" +
        "<td>6/11/2015</td>" +
        "<td>http://bit.ly/1SNzc0i</td>"
    );
    AppendProductToTable(
        
        "<td>Build your own Bootstrap Business Application Template in MVC</td>" +
        "<td>1/29/2015</td>" +
        "<td>http://bit.ly/1I8ZqZg</td>"
     
    );
}

function AppendProductToTable(rowHTML) {
    $("#productTable tbody").append(
        productBuildTableRow(rowHTML)
    );
}

function productBuildTableRow(rowHTML) {
    return "<tr>" +
        "<td>" +
        "<button type='button'" +
            "onclick='productDisplay(this);' " +
            "class='btn btn-default'>" +
            "<span class='glyphicon glyphicon-edit' />" +
            "</button" +
            "</td>" +
        rowHTML +
        "<td>" +
        "<button type='button'" +
            "onclick='productDelete(this);' " +
            "class='btn btn-default'>" +
            "<span class='glyphicon glyphicon-remove' />" +
            "</button" +
            "</td>" +
         "</tr>";
}

function CheckForTBody() {
    // first check if a tbody tag exists, add one if not
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }
}

$(document).ready(function () {
    LoadProducts();
    $("#productPanel").hide();
});

function addProduct() {
    $("#productPanel").show();
    $("#updateButton").text("Save");
    $("#addButton").hide();
}

function cancelUpdate() {
    ClearForm();
    $("#productPanel").hide();
    $("#addButton").show();
}

function ClearForm() {
    $("#productname").val("");
    $("#introdate").val("");
    $("#url").val("");
}

function productUpdate() {
    if ($("#updateButton").text() == "Update") {
        productUpdateInTable();
    }
    else {
        productAddToTable();
    }

    ClearForm();

    cancelUpdate();
}

function productUpdateInTable() {
    $(_productRow).after(productBuildTableRow(
        "<td>" + $("#productname").val() + "</td>" +
        "<td>" + $("#introdate").val() + "</td>" +
        "<td>" + $("#url").val() + "</td>"
    ));

    $(_productRow).remove();

    ClearForm();

    $("#updateButton").text("Save");
}

function productAddToTable() {
    CheckForTBody();

    AppendProductToTable(
        "<td>" + $("#productname").val() + "</td>" +
        "<td>" + $("#introdate").val() + "</td>" +
        "<td>" + $("#url").val() + "</td>"
    );
}



function productDelete(ctl) {
    $(ctl).parents("tr").remove();

    ClearForm();
    cancelUpdate();
}

function productDisplay(ctl) {
    addProduct();

    _productRow = $(ctl).parents("tr");
    var cols = _productRow.children("td");
    $("#productname").val($(cols[1]).text());
    $("#introdate").val($(cols[2]).text());
    $("#url").val($(cols[3]).text());

    // change update button text
    $("#updateButton").text("Update");

}