import EngineThree from 'skillvir-game-core/engine/three';
import HelperZustand from 'skillvir-universal-helper/zustand';
import { create } from 'zustand';
// import APIGlobal from '../api';
// import { GetMethodStoreGamePersist } from './persist';

// ============ State ==============
interface IState {
  engineThree: EngineThree | null;
}

const store = create(
  (): IState => ({
    engineThree: null,
  }),
);
// ============ Method ==============
interface IMethod {
  // gameInitial: (config: IGameCoreConfig) => void;
  setEngineThree: (engineThree: EngineThree) => void;
  // setLoading: (isLoading: boolean) => void;
  // signIn: (sEmail: string, sPassword: string) => Promise<HelperType.TypeGolangResponse>;
  // signOut: () => void;
}

const method: IMethod = {
  // gameInitial: (config: IGameCoreConfig) => {
  //   store.setState(() => ({ gameCore: new GameCore(config) }));
  // },
  setEngineThree: (engineThree: EngineThree) => {
    store.setState(() => ({ engineThree }));
  },

  // setLoading: (isLoading: boolean) => {
  // store.setState((state: store) => ({ isLoading }));
  // store.setState(() => ({ isLoading }));
  // },
  //   signIn: async (
  //     sEmail: string,
  //     sPassword: string,
  //   ): Promise<HelperType.TypeGolangResponse> => {
  //     store.setState({ isLoading: true });
  //     // ======== Auth
  //     const resAuth = await APIGlobal.SetSignIn(sEmail, sPassword);
  //     if (resAuth.error) {
  //       store.setState({ isLoading: false });
  //       return { res: null, error: resAuth.error };
  //     }
  //     // await testGetToken();
  //     // ======== Get User Data
  //     const resReadUser = await APIGlobal.ReadUser();
  //     if (resReadUser.error) {
  //       store.setState({ isLoading: false });
  //       return { res: null, error: resReadUser.error };
  //     }
  //     GetMethodStoreGamePersist().setUserData(resReadUser.res?.data);
  //     store.setState({ isLoading: false });
  //     // setState({ isLoading: false });
  //     return { res: resReadUser.res, error: null };
  //   },
  //   signOut: async () => {
  //     store.setState({ isLoading: true });
  //     await APIGlobal.GetSignOut();
  //     // console.log('setUserData', setUserData);
  //     GetMethodStoreGamePersist().setUserData(null);
  //     store.setState({ isLoading: false });
  //   },
};

// ============ Export ==============
export interface IStoreGame {
  IState: IState;
  IMethod: IMethod;
}
const StoreGame = HelperZustand.ExportStore<IStoreGame['IState'], IStoreGame['IMethod']>(
  store,
  method,
);

export default StoreGame;
