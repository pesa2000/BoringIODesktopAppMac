$(function () {
    c3.generate({
        bindto: "#campaign-v2",
        data: {
            columns: [
                ["Direct Sales", 45],
                ["Referral Sales", 15],
                ["Afilliate Sales", 10],
                ["Indirect Sales", 15],
            ],
            type: "donut",
            tooltip: { show: !0 },
        },
        donut: { label: { show: !1 }, title: "", width: 18},
        legend: { hide: !0 },
        color: { pattern: ["#2c7be4", "#27bcfd", "#344050", "#e63757"] },
    });
    d3.select("#campaign-v2 .c3-chart-arcs-title").style("font-family", "Rubik");
    var e = { axisX: { showGrid: !1 }, seriesBarDistance: 1, chartPadding: { top: 15, right: 15, bottom: 5, left: 0 }, plugins: [Chartist.plugins.tooltip()], width: "100%" };
    new Chartist.Bar(".net-income", { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], series: [[5, 4, 3, 7, 5, 10]] }, e, [
        [
            "screen and (max-width: 640px)",
            {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (e) {
                        return e[0];
                    },
                },
            },
        ],
    ]),
        jQuery("#visitbylocate").vectorMap({
            map: "world_mill_en",
            backgroundColor: "transparent",
            borderColor: "#000",
            borderOpacity: 0,
            borderWidth: 0,
            zoomOnScroll: !1,
            color: "#d5dce5",
            regionStyle: { initial: { fill: "#d5dce5", "stroke-width": 1, stroke: "rgba(255, 255, 255, 0.5)" } },
            enableZoom: !0,
            hoverColor: "#bdc9d7",
            hoverOpacity: null,
            normalizeFunction: "linear",
            scaleColors: ["#d5dce5", "#d5dce5"],
            selectedColor: "#bdc9d7",
            selectedRegions: [],
            showTooltip: !0,
            onRegionClick: function (e, t, o) {
                var a = 'You clicked "' + o + '" which has the code: ' + t.toUpperCase();
                alert(a);
            },
        });
    var t = new Chartist.Line(
        ".stats",
        { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], series: [[11, 10, 15, 21, 14, 23, 12]] },
        {
            low: 0,
            high: 28,
            showArea: !0,
            fullWidth: !0,
            plugins: [Chartist.plugins.tooltip()],
            axisY: {
                onlyInteger: !0,
                scaleMinSpace: 40,
                offset: 20,
                labelInterpolationFnc: function (e) {
                    return e / 1 + "k";
                },
            },
        }
    );
    t.on("draw", function (e) {
        "area" === e.type && e.element.attr({ x1: e.x1 + 0.001 });
    }),
        t.on("created", function (e) {
            e.svg
                .elem("defs")
                .elem("linearGradient", { id: "gradient", x1: 0, y1: 1, x2: 0, y2: 0 })
                .elem("stop", { offset: 0, "stop-color": "rgba(255, 255, 255, 1)" })
                .parent()
                .elem("stop", { offset: 1, "stop-color": "rgba(80, 153, 255, 1)" });
        }),
        $(window).on("resize", function () {
            t.update();
        });
});
