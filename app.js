'use strict';

function LoadProducts() {
    CheckForTBody();

    // append product to the table
    AppendProductToTable(
        "<tr>" +
            "<td>My First Video</td>" +
            "<td>6/11/2015</td>" +
            "<td>www.pluralsight.com</td>" +
        "</tr>"
    );
    AppendProductToTable(
        "<tr>" +
        "<td>Extending Bootstrap with CSS, JavaScript and jQuery</td>" +
        "<td>6/11/2015</td>" +
        "<td>http://bit.ly/1SNzc0i</td>" +
      "</tr>"
    );
    AppendProductToTable(
        "<tr>" +
        "<td>Build your own Bootstrap Business Application Template in MVC</td>" +
        "<td>1/29/2015</td>" +
        "<td>http://bit.ly/1I8ZqZg</td>" +
      "</tr>"
    );
}

function AppendProductToTable(rowHTML) {
    $("#productTable tbody").append(rowHTML);
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
    $("#updateButton").hide();
}

function cancelUpdate() {
    $("#productPanel").hide();
    $("#updateButton").show();
}

function ClearForm() {
    $("#productname").val("");
    $("#introdate").val("");
    $("#url").val("");
}

function productUpdate() {
    CheckForTBody();

    AppendProductToTable(
        "<tr>" +
        "<td>" + $("#productname").val() + "</td>" +
        "<td>" + $("#introdate").val() + "</td>" +
        "<td>" + $("#url").val() + "</td>" +
      "</tr>"
    );

    ClearForm();

    cancelUpdate();
}