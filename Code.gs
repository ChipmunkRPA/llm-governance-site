const APP_TITLE = 'CPA Automation - LLM Governance Operating Model';

function doGet(e) {
  const template = HtmlService.createTemplateFromFile('index');
  template.APP_TITLE = APP_TITLE;

  return template
    .evaluate()
    .setTitle(APP_TITLE)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

