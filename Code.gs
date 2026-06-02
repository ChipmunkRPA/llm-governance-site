const APP_TITLE = 'CPA Automation - LLM Governance Operating Model';

function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle(APP_TITLE)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
