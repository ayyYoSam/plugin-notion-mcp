export interface ClientDetection {
  id: string;
  name: string;

  detected: boolean;

  configPath: string;
  hasConfig: boolean;

  scope: "global" | "project";
}