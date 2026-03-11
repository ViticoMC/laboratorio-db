export interface State {
  state: "idele" | "loading" | "error" | "sucess";
  message?: string;
}
