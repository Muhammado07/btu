$("div#rodape").click(function () {
    $(this).each(function () {
        $("div#resposta").removeClass("opa");
    });
});
$("div#rodape").click(function () {
    $(this).each(function () {
        $("div#total").removeClass("totaldois");
    });
});
$("div#rodape").click(function () {
    $(this).each(function () {
        $("div#rodape").removeClass("rodapedois");
    });
});
function calcular() {
    if (document.getElementById("sol").value == 1) {
        amb = document.getElementById("metro").value * document.getElementById("metro1").value * 600;
    } else if (document.getElementById("sol").value == 2) {
        amb = document.getElementById("metro").value * document.getElementById("metro1").value * 800;
    }
    else {
        amb = document.getElementById("metro").value * document.getElementById("metro1").value * 1000;
    }

    people = document.getElementById("people").value * 600 - 600;
    equipment = document.getElementById("equipment").value * 600;


    document.getElementById("texto").innerHTML = "";
    document.getElementById("opcao").innerHTML = "";
    document.getElementById("total").innerHTML = "";

    if (form.metro.value == "") {
        document.getElementById("texto").innerHTML += "Fill in the Width * Length field";
        form.metro.focus();
        return false;
    }

    if (form.people.value == "") {
        document.getElementById("texto").innerHTML += "Fill in the number of people";
        form.people.focus();
        return false;
    }
    if (form.equipment.value == "") {
        document.getElementById("texto").innerHTML += "Fill in the number of devices";
        form.equipment.focus();
        return false;
    }
    else {

        document.getElementById("total").innerHTML += parseFloat(amb + people + equipment) + " BTUs";

    }


    total = (amb + people + equipment);
    $('div#resposta').addClass('opa');

    document.getElementById("opcao").innerHTML = "";
    document.getElementById("rodape").innerHTML = "";


    if (total <= 7000) {

        $('div#resposta').addClass('opa');
        document.getElementById("opcao").innerHTML = "<a href=\"https://york.com.sa/en/online-store-york\">View suitable products</a>";
        document.getElementById("rodape").innerHTML = "<a >To calculate click here</a>";

    }
    if (total > 7000 && total < 9099) {

        $('div#resposta').addClass('opa');
        document.getElementById("opcao").innerHTML = "<a href=\"https://york.com.sa/en/producttag/43/12000-btu\">View suitable products</a>";
        document.getElementById("rodape").innerHTML = "<a >To calculate click here</a>";
    }

    if (total > 9100 && total < 12099) {

        $('div#resposta').addClass('opa');

        document.getElementById("opcao").innerHTML = "<a href=\"https://york.com.sa/en/online-store-york\"> View suitable products</a>";
        document.getElementById("rodape").innerHTML = "<a >To calculate click here</a>";
    }

    if (total > 12100 && total < 18099) {

        $('div#resposta').addClass('opa');
        document.getElementById("opcao").innerHTML = "<a href=\"https://york.com.sa/en/online-store-york\">View suitable products</a>";
        document.getElementById("rodape").innerHTML = "<a > To calculate click here</a>";
    }

    if (total > 18100 && total < 24099) {

        $('div#resposta').addClass('opa');
        document.getElementById("opcao").innerHTML = "<a href=\"https://york.com.sa/en/online-store-york\">View suitable products</a>";
        document.getElementById("rodape").innerHTML = "<a >To calculate click here</a>";
    }

    if (total > 24100) {
        $('div#resposta').addClass('opa');
        $('div#total').addClass('totaldois');
        $('div#rodape').addClass('rodapedois');
        document.getElementById("opcao").innerHTML = "<span>Your environment needs a special project. Contact our technical team through telesales: <b> <a class='tel-link' href='tel:920003588'>920003588</a> </b></span>";
        document.getElementById("rodape").innerHTML += "<a > To calculate click here</a>";
    }

}