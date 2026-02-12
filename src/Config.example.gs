
var CONFIG = {
  metrika: {
    token: "OAUTH_TOKEN",
    counterId: 12345678,
    sheetName: "YM",

    date1: "yesterday",
    date2: "yesterday",
    lang: "ru",
    offset: 1,
    limit: 100000,

    dimensions: [
      "ym:s:date",
      "ym:s:lastsignUTMSource",
      "ym:s:lastsignUTMMedium",
      "ym:s:lastsignUTMCampaign"
    ],

    metricsBase: [
      "ym:s:visits",
      "ym:s:users",
      "ym:s:bounceRate",
      "ym:s:pageDepth",
      "ym:s:avgVisitDurationSeconds"
    ],

    goals: [
      "goal111111111reaches",
      "goal222222222reaches"
    ]
  },

direct: {
  token: "BEARER_TOKEN",

  reportSettings: {
    reportName: "Direct Daily",
    reportType: "CAMPAIGN_PERFORMANCE_REPORT",
    dateRangeType: "CUSTOM_DATE",
    format: "TSV",
    includeVAT: "NO"
  },

  dateFrom: "yesterday",
  dateTo: "yesterday",

  fieldNames: [
    "CampaignName",
    "CampaignId",
    "Date",
    "ClientLogin",
    "Impressions",
    "Clicks",
    "Cost"
  ],

  accounts: [
    { clientLogin: "client-login-1", sheetName: "YD1" },
    { clientLogin: "client-login-2", sheetName: "YD2" }
  ]
}
,

  mode: {
    append: true
  }
};


