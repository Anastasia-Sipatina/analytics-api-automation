function writeRows(sheetName, rows, append) {
  if (!rows || rows.length === 0) return;

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) sheet = ss.insertSheet(sheetName);

  if (!append) sheet.clearContents();

  var startRow = append ? sheet.getLastRow() + 1 : 1;
  var numRows = rows.length;
  var numCols = rows[0].length;

  sheet.getRange(startRow, 1, numRows, numCols).setValues(rows);
}

function assertOk(response, context) {
  var code = response.getResponseCode();
  if (code >= 200 && code < 300) return;

  var body = response.getContentText();
  throw new Error(context + " failed. HTTP " + code + ". Body: " + body.slice(0, 500));
}

function toQueryString(params) {
  var parts = [];
  for (var key in params) {
    if (params[key] === undefined || params[key] === null) continue;
    parts.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(String(params[key]))
    );
  }
  return parts.join("&");
}

function resolveDate(value) {
  if (!value) return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd");

  if (value === "yesterday") {
    var today = new Date();
    var y = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    return Utilities.formatDate(y, Session.getScriptTimeZone(), "yyyy-MM-dd");
  }

  return value; // если передана конкретная дата YYYY-MM-DD
}

