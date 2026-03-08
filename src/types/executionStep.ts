export interface ExecutionStep {
  type: "init" | "iteration" | "check" | "match" | "result" | "info";
  iteration?: number;
  content: string;
  highlight?: string;
  color?: "blue" | "green" | "amber" | "red" | "violet";
}
