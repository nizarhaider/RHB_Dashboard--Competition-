function createCircleChart(percent, color, size, stroke) {
    let svg = `<svg class="mkc_circle-chart" viewbox="0 0 36 36" width="200" height="200" xmlns="http://www.w3.org/2000/svg">

        <path class="mkc_circle" stroke="#35cd3a" stroke-width="${stroke}" stroke-dasharray="25,50" stroke-linecap="round" fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text class="mkc_info" x="50%" y="50%" alignment-baseline="central" text-anchor="middle" font-size="8" >${percent}</text>
    </svg>`;
    return svg;
}

let charts = document.getElementsByClassName('mkCharts');

for(let i=0;i<charts.length;i++) {
    let chart = charts[i];
    let percent = chart.dataset.percent;
    let color = ('color' in chart.dataset) ? chart.dataset.color : "#ffa534";
    let size = ('size' in chart.dataset) ? chart.dataset.size : "100";
    let stroke = ('stroke' in chart.dataset) ? chart.dataset.stroke : "1";
    charts[i].innerHTML = createCircleChart(percent, color, size, stroke);
}
