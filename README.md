# CPA Automation LLM Governance Site

This folder is a Google Apps Script web app version of the slide deck.

## Files

- `Code.gs` - Apps Script entrypoint that serves the deck through `HtmlService`.
- `index.html` - The full slide deck, with the CPA Automation logo loaded from `https://cpaautomation.ai/logo.png`.
- `appsscript.json` - Manifest configured for V8 runtime and public web app access.

## Deploy Publicly

1. Go to [script.google.com](https://script.google.com).
2. Create a new Apps Script project.
3. Add `Code.gs`, `index.html`, and `appsscript.json` from this folder.
4. In Project Settings, enable "Show appsscript.json manifest file in editor" if needed.
5. Click `Deploy` > `New deployment`.
6. Select type `Web app`.
7. Set:
   - Execute as: `Me`
   - Who has access: `Anyone` / `Anyone, even anonymous`
8. Click `Deploy` and authorize.

The resulting `/exec` URL is the public site URL.

The manifest is already configured with:

```json
"webapp": {
  "executeAs": "USER_DEPLOYING",
  "access": "ANYONE_ANONYMOUS"
}
```

## Optional `clasp` Deploy

If you prefer command line deployment:

```powershell
npm install -g @google/clasp
clasp login
cd "C:\GWS Automation\output\apps-script\llm-governance-site"
clasp create --type standalone --title "CPA Automation LLM Governance Site"
clasp push
clasp deploy --description "Initial public web app"
```

After deployment, use the `/exec` URL from Apps Script as the public link.
