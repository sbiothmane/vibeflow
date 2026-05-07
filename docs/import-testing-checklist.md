# Import And Testing Checklist

Use this checklist after generating a rewritten export.

## Before Import

- Confirm the original export folder was not modified.
- Open `vibeflow-rewrite-report.json`.
- Confirm `validationErrors` is empty.
- Review `aliases.json` and make sure edited aliases match the intended business language.
- Search for any raw values you expected to move into `Config`.

## Import

- Import the generated export copy, not the original example.
- Rebind all required connections.
- Do not edit trigger IDs, connector host blocks, or authentication blocks during import unless you intentionally changed environments.

## Test Runs

- Run one happy-path case.
- Run one branch for each major request type or Switch/If path.
- Run an empty or optional-field case.
- Run a connector failure or bad-address case when safe to do so.
- Confirm Catch/Error notifications include enough run detail to troubleshoot.

## Acceptance

- The flow imports successfully.
- Every connector reference resolves.
- Run history shows expected action ordering.
- Catch scopes run on failure and do not run on success.
- SharePoint, Outlook, Approvals, and Forms actions read and write the expected records.
