interface IFailureAction extends Action<string> {
  type: ActionTypesFailures;
  error: string;
}