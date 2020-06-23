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
        amb = (document.getElementById("metro").value * document.getElementById("metro1").value) * 440;
    } else if (document.getElementById("sol").value == 2) {
        amb = (document.getElementById("metro").value * document.getElementById("metro1").value) * 640;
    }
    else {
        amb = (document.getElementById("metro").value * document.getElementById("metro1").value) * 840;
    }

    people = document.getElementById("people").value * 450 - 450;


    document.getElementById("texto").innerHTML = "";
    document.getElementById("opcao").innerHTML = "";
    document.getElementById("total").innerHTML = "";

    if (form.metro.value == "") {
        document.getElementById("texto").innerHTML += "Fill in the Length field";
        form.metro.focus();
        return false;
    }
    if (form.metro.value === '0') {
        document.getElementById("texto").innerHTML += "Please Try Number higher than 0";
        form.metro.focus();
        return false;
    }
    if (form.metro1.value == "") {
        document.getElementById("texto").innerHTML += "Fill in the Width field";
        form.metro.focus();
        return false;
    }
    if (form.metro1.value === '0') {
        document.getElementById("texto").innerHTML += "Please Try Number higher than 0";
        form.metro.focus();
        return false;
    }

    if (form.people.value == "") {
        document.getElementById("texto").innerHTML += "Fill in the number of people";
        form.people.focus();
        return false;
    }
    if (form.people.value === '0') {
        document.getElementById("texto").innerHTML += "Please Try Number higher than 0";
        form.people.focus();
        return false;
    }
    else {

        document.getElementById("total").innerHTML += parseFloat(amb + people) + " BTUs";
        document.getElementById("sol").value = 1;
        document.getElementById("metro").value = "";
        document.getElementById("metro1").value = "";
        document.getElementById("people").value = "";

    }


    total = (amb + people);
    $('div#resposta').addClass('opa');

    document.getElementById("opcao").innerHTML = "";
    document.getElementById("rodape").innerHTML = "";


    if (total <= 7000) {

        $('div#resposta').addClass('opa');
        document.getElementById("opcao").innerHTML = "<a href=\"https://york.com.sa/en/producttag/43/12000-btu\">View suitable products</a>";
        document.getElementById("rodape").innerHTML = "<a >Recalculate again</a>";

    }
    if (total > 7000 && total < 18099) {

        $('div#resposta').addClass('opa');
        document.getElementById("opcao").innerHTML = "<a href=\"https://york.com.sa/en/producttag/23/18000-btu\">View suitable products</a>";
        document.getElementById("rodape").innerHTML = "<a >Recalculate again</a>";
    }

    if (total > 18100 && total < 24099) {

        $('div#resposta').addClass('opa');

        document.getElementById("opcao").innerHTML = "<a href=\"https://york.com.sa/en/producttag/30/24000-btu\"> View suitable products</a>";
        document.getElementById("rodape").innerHTML = "<a >Recalculate again</a>";
    }

    if (total > 24100 && total < 30099) {

        $('div#resposta').addClass('opa');
        document.getElementById("opcao").innerHTML = "<a href=\"https://york.com.sa/en/producttag/52/30000-btu\">View suitable products</a>";
        document.getElementById("rodape").innerHTML = "<a > Recalculate again</a>";
    }

    if (total > 30100 && total < 55099) {

        $('div#resposta').addClass('opa');
        document.getElementById("opcao").innerHTML = "<a href=\"https://york.com.sa/en/producttag/64/55000-btu\">View suitable products</a>";
        document.getElementById("rodape").innerHTML = "<a >Recalculate again</a>";
    }

    if (total > 60000) {
        $('div#resposta').addClass('opa');
        $('div#total').addClass('totaldois');
        $('div#rodape').addClass('rodapedois');
        document.getElementById("opcao").innerHTML = "<span>Your environment needs a special project. Contact our technical team through telesales: <b> <a class='tel-link' href='tel:920003588'>920003588</a> </b></span>";
        document.getElementById("rodape").innerHTML += "<a > Recalculate again</a>";
    }

}