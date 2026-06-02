const APP_TITLE = 'CPA Automation - LLM Governance Operating Model';
const WORKSPACE_DOMAIN = 'cpaautomation.ai';

function doGet(e) {
  const template = HtmlService.createTemplateFromFile('index');
  template.APP_TITLE = APP_TITLE;
  template.CANONICAL_URL = getCanonicalWebAppUrl_();
  template.WORKSPACE_DOMAIN = WORKSPACE_DOMAIN;

  return template
    .evaluate()
    .setTitle(APP_TITLE)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getCanonicalWebAppUrl_() {
  const deployedUrl = ScriptApp.getService().getUrl();
  if (!deployedUrl) return '';

  return deployedUrl
    .replace(/\/macros\/u\/\d+\/s\//, '/macros/s/')
    .replace(/\/a\/macros\/[^/]+\/s\//, '/macros/s/');
}

function logPublicWebAppUrl() {
  Logger.log(getCanonicalWebAppUrl_());
}
