// // canvas temperatura;
var gr_temp = document.getElementById("temp");
var gr_umi = document.getElementById("hum");

// buscando os dados do arduino;
setInterval(() => {
    $.ajax({
        url: "/dados",
        type: "POST",
        dataType: "HTML",
        success: (dados) => {
            dados_arduino(dados);
        },
        error: (erro) => {
            console.error(erro);
        }
    });
}, 1000);


// controlando dados do arduino;
function dados_arduino(dados_arduino) {
    temp = parseInt(dados_arduino.split(" ")[0]);
    hum = parseInt(dados_arduino.split(" ")[1]);
    addData(canvas_temp, "", temp);
    addData(canvas_umi, "", hum);
}

// chartjs temperatura;

var canvas_temp = new Chart(gr_temp, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: "Temperatura",
            data: [],
            borderWidth: 3,
            borderColor: 'rgba(77,166,253,.85)',
            backgroundColor: 'transparent'
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Temperatura"
        },
        labels: {
            fontStyle: "bold"
        }
    }
});

// chartjs umidade;

var canvas_umi = new Chart(gr_umi, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: "Umidade",
            data: [],
            borderWidth: 3,
            borderColor: 'rgba(77,166,253,.85)',
            backgroundColor: 'transparent'
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Umidade"
        },
        labels: {
            fontStyle: "bold"
        }
    }
});

// atualizando em tempo real o chartjs;
function addData(chart, label, data) {
    console.log(data);
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}