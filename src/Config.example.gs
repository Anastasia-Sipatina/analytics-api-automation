
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
    clientLogin: "your-client-login",
    sheetName: "YD"
  },

  mode: {
    append: true
  }
};


