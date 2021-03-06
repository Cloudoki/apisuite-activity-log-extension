export interface LogEntry {
  type: string
  userID?: string
  appID?: string
  organizationID?: string
  log?: string
  timestamp: string
}

export abstract class Database {
  abstract writeEntry(entry: LogEntry): Promise<void>
  abstract getEntries(): Promise<LogEntry[]>
}
