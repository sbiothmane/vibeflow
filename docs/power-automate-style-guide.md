# Power Automate Style Guide

This guide is the default target style for Vibeflow rewrites and AI-assisted edits.

## Structure

- Use named scopes for validation, data shaping, business decisions, notifications, and persistence.
- Use a Try scope for the main path, a Catch scope configured with failed/timed-out run-after settings, and a Finally scope only when cleanup or final status updates are needed.
- Keep deeply nested conditions rare. If many branches compare the same expression to constants, prefer a Switch.
- Keep long email and HTML templates as reviewed source text when possible, then inject dynamic values with clear aliases.

## Reliability

- Use `result('<ScopeName>')` in Catch scopes to summarize failed actions.
- Use `workflow()` when logging or notifying with flow name, environment, run id, and run URL.
- Add Terminate actions with meaningful status and message when the flow must stop after an unrecoverable error.
- Use exponential retry policies for transient connector failures when retrying is safe for the operation.

## Expressions And Data

- Prefer expressions and data operations over many stateful variables.
- Use `empty()`, `coalesce()`, `contains()`, `length()`, `first()`, `last()`, `join()`, `formatDateTime()`, and `convertTimeZone()` where they make intent clearer.
- Use one object variable such as `Config` for deploy-time constants that cannot be Power Platform environment variables.
- Use Parse JSON after complex payloads so downstream actions reference named properties instead of brittle paths.

## Naming

- Use stable action names without brackets, copy suffixes, punctuation, or misspellings.
- Prefer names that describe business intent, for example `Switch_Request_Type`, `Send_Submission_Confirmation`, or `Update_Main_Dashboard`.
- Rename random Forms response IDs through `aliases.json`; do not ask AI to infer those IDs from memory.

## Constants

- Treat emails, SharePoint URLs, list IDs, Forms IDs, and connector reference names as environment-specific constants.
- Keep trigger IDs and connector host/authentication blocks unchanged unless a user provides an explicit replacement.
- Before AI editing, review generated aliases and replace `form_field_###` placeholders with real question labels.
