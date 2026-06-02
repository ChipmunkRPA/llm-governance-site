# CPA Automation LLM Governance Site

This folder is a Google Apps Script web app version of the slide deck.

## Files

- `Code.gs` - Apps Script entrypoint that serves the deck through `HtmlService`.
- `index.html` - The full slide deck, with the CPA Automation logo loaded from `https://cpaautomation.ai/logo.png`.
- `appsscript.json` - Manifest configured for V8 runtime and public web app access.

## Deploy Publicly

1. Go to [script.google.com](https://script.google.com).
2. Make sure you are signed into the Google Workspace account that should own the deployment, for example `cpaautomation.ai`.
3. Create a new Apps Script project.
4. Add `Code.gs`, `index.html`, and `appsscript.json` from this folder.
   - `Code.gs` must be a script file.
   - `index.html` must be an HTML file. Do not paste the HTML into `Code.gs`.
5. In Project Settings, enable "Show appsscript.json manifest file in editor" if needed.
6. Click `Deploy` > `New deployment`.
7. Select type `Web app`.
8. Set:
   - Execute as: `Me`
   - Who has access: `Anyone` / `Anyone, even anonymous`
9. Click `Deploy` and authorize.

The resulting `/exec` URL is the public site URL.

After changing any file in this repo, redeploy the Apps Script web app or update the existing deployment to a new version. Apps Script serves the deployed version, not the latest GitHub commit.

For a public link, prefer the clean deployment URL:

```text
https://script.google.com/macros/s/<DEPLOYMENT_ID>/exec
```

If Google rewrites the URL into a domain-scoped route, the domain must match the account that owns the deployment:

```text
https://script.google.com/a/macros/cpaautomation.ai/s/<DEPLOYMENT_ID>/exec
```

Do not share a URL rewritten to another Workspace domain, such as:

```text
https://script.google.com/a/macros/chipmunkrpa.com/s/<DEPLOYMENT_ID>/exec
```

That domain mismatch can show a Google Drive "unable to open the file" / "Page Not Found" error even when the script deployment itself is valid.

The site includes a canonical route guard that redirects account-scoped URLs back to the clean public URL when the request reaches the web app. It cannot redirect a request that Google rejects before Apps Script runs, so a Drive error page still means the browser is using the wrong Google account/domain or the Workspace admin has blocked anonymous web app access.

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
