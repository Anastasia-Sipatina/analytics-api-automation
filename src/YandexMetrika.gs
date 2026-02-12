function fetchYandexMetrika() {
  var cfg = CONFIG.metrika;

  var baseUrl = "https://api-metrika.yandex.net/stat/v1/data.csv";

  var metrics = cfg.metricsBase
    .concat((cfg.goals || []).map(function(g){ return "ym:s:" + g; }));

  var params = {
    ids: cfg.counterId,
    date1: cfg.date1 || "yesterday",
    date2: cfg.date2 || "yesterday",
    dimensions: (cfg.dimensions || []).join(","),
    metrics: metrics.join(","),
    lang: cfg.lang || "ru",
    offset: cfg.offset || 1,
    limit: cfg.limit || 100000
  };

  var url = baseUrl + "?" + toQueryString(params);

  var response = UrlFetchApp.fetch(url, {
    method: "GET",
    headers: {
      Authorization: "OAuth " + cfg.token,
      "Content-Type": "application/csv"
    },
    muteHttpExceptions: true
  });

  assertOk(response, "Metrika API");

  var csv = response.getContentText();
  var rows = Utilities.parseCsv(csv).splice(2);

  writeRows(cfg.sheetName, rows, CONFIG.mode.append);
}
