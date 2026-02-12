function fetchDirectCampaign() {
  var cfg = CONFIG.direct;
  var url = "https://api.direct.yandex.com/json/v5/reports";

  var dateFrom = resolveDate(cfg.dateFrom);
  var dateTo = resolveDate(cfg.dateTo);

  cfg.accounts.forEach(function(account) {

    var payload = {
      method: "post",
      params: {
        SelectionCriteria: {
          DateFrom: dateFrom,
          DateTo: dateTo
        },
        FieldNames: cfg.fieldNames,
        ReportName: cfg.reportSettings.reportName,
        ReportType: cfg.reportSettings.reportType,
        DateRangeType: cfg.reportSettings.dateRangeType,
        Format: cfg.reportSettings.format,
        IncludeVAT: cfg.reportSettings.includeVAT
      }
    };

    var headers = {
      Authorization: "Bearer " + cfg.token,
      "Content-Type": "application/json",
      "Client-Login": account.clientLogin,
      skipReportHeader: "true",
      skipReportSummary: "true",
      processingMode: "online",
      returnMoneyInMicros: "false"
    };

    var options = {
      method: "post",
      headers: headers,
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    var response;
    for (var i = 0; i < 3; i++) {
      response = UrlFetchApp.fetch(url, options);
      if (response.getResponseCode() === 200) break;
      Utilities.sleep(3000);
    }

    assertOk(response, "Direct Reports API - " + account.clientLogin);

    var tsv = response.getContentText();
    var rows = Utilities.parseCsv(tsv, "\t").splice(1);

    writeRows(account.sheetName, rows, CONFIG.mode.append);

  });
}
