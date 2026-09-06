export type ClientMethod = "oauth" | "config" | "cli";

export interface ClientDetection {
  id: string;
  name: string;

  detected: boolean;

  method: ClientMethod;

  configPath: string;

  hasConfig: boolean;

  scope: "global" | "project";
}