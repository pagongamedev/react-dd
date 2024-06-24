import { GameCore, IGameCoreConfig } from 'skillvir-game-core/engine/three';
import HelperZustand from 'skillvir-universal-helper/zustand';
import { create } from 'zustand';
// import APIGlobal from '../api';
// import { GetMethodStoreGamePersist } from './persist';

// ============ Store ==============
interface IState {
  gameCore: GameCore | null;
}

const store = create(
  (): IState => ({
    gameCore: null,
  }),
);
// ============ Method ==============
interface IMethod {
  gameInitial: (config: IGameCoreConfig) => void;
  setGameCore: (gameCore: GameCore) => void;
  // setLoading: (isLoading: boolean) => void;
  // signIn: (sEmail: string, sPassword: string) => Promise<HelperType.TypeGolangResponse>;
  // signOut: () => void;
}

const method: IMethod = {
  gameInitial: (config: IGameCoreConfig) => {
    store.setState(() => ({ gameCore: new GameCore(config) }));
  },
  setGameCore: (gameCore: GameCore) => {
    store.setState(() => ({ gameCore }));
  },

  // setLoading: (isLoading: boolean) => {
  //   // StoreGame.setState((state: TypeStoreGame) => ({ isLoading }));
  //   StoreGame.setState(() => ({ isLoading }));
  // },
  //   signIn: async (
  //     sEmail: string,
  //     sPassword: string,
  //   ): Promise<HelperType.TypeGolangResponse> => {
  //     StoreGame.setState({ isLoading: true });
  //     // ======== Auth
  //     const resAuth = await APIGlobal.SetSignIn(sEmail, sPassword);
  //     if (resAuth.error) {
  //       StoreGame.setState({ isLoading: false });
  //       return { res: null, error: resAuth.error };
  //     }
  //     // await testGetToken();
  //     // ======== Get User Data
  //     const resReadUser = await APIGlobal.ReadUser();
  //     if (resReadUser.error) {
  //       StoreGame.setState({ isLoading: false });
  //       return { res: null, error: resReadUser.error };
  //     }
  //     GetMethodStoreGamePersist().setUserData(resReadUser.res?.data);
  //     StoreGame.setState({ isLoading: false });
  //     // setState({ isLoading: false });
  //     return { res: resReadUser.res, error: null };
  //   },
  //   signOut: async () => {
  //     StoreGame.setState({ isLoading: true });
  //     await APIGlobal.GetSignOut();
  //     // console.log('setUserData', setUserData);
  //     GetMethodStoreGamePersist().setUserData(null);
  //     StoreGame.setState({ isLoading: false });
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
