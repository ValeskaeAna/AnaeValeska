const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

function criarGrafico (data, layout) {
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    const Config = {
        responsiv: true,
        displayayModeBar: false
      }
    Plotly.newPlot (grafico,data, layout, Config);
}

export {getCSS, tickConfig}