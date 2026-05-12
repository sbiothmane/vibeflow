export type Severity = "error" | "warning";

export interface ValidationIssue {
  severity: Severity;
  /** Stable rule code, e.g. "run-after-unknown". */
  rule: string;
  message: string;
  /** Dot path to the offending site inside the workflow definition. */
  path?: string;
  /** Action name if the issue is scoped to one action. */
  actionName?: string;
  /** Connector id when relevant. */
  connectorId?: string;
  /** Operation id when relevant. */
  operationId?: string;
}

export interface ValidationResult {
  issues: ValidationIssue[];
  errorCount: number;
  warningCount: number;
}

export function emptyResult(): ValidationResult {
  return { issues: [], errorCount: 0, warningCount: 0 };
}

export function pushIssue(result: ValidationResult, issue: ValidationIssue): void {
  result.issues.push(issue);
  if (issue.severity === "error") result.errorCount += 1;
  else result.warningCount += 1;
}
