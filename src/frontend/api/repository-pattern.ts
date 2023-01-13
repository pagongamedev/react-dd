import { helperType } from 'universal-helper';

export type TypeRepositoryPattern = {
  readUserProfile: () => Promise<helperType.TypeAPIDataGolangResponse>;
  createUserProfile: (payload: {
    title: string;
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    tel: string | null;
    experience: string;
    organizationID: string;
    signInFrom: string | null;
    photoURL: string | null;
  }) => Promise<helperType.TypeAPIDataGolangResponse>;
  updateUserAcceptAgreement: () => Promise<helperType.TypeAPIDataGolangResponse>;
};
