import { FirebaseApp } from 'firebase/app';
import {
  Functions,
  getFunctions,
  httpsCallable,
  // connectFunctionsEmulator,
} from 'firebase/functions';

let functions: Functions;
export const FuncionsInit = (app: FirebaseApp, region?: string) => {
  functions = getFunctions(app, region);
};
export const CallFunction = (sFunctionName: string) => {
  return httpsCallable(functions, sFunctionName);
};

export default { CallFunction };
