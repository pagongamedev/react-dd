import {
  addDoc,
  collection,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  QuerySnapshot,
  setDoc,
} from 'firebase/firestore';
import { helperPromise, helperType } from 'universal-helper';

import { middlewareFirebase } from '../../../core/middleware/firebase';
import { GetFirestore } from '../../../core/middleware/firebase/firestore';

export const createUserProfile = async (payload: {
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
}): Promise<helperType.TypeAPIDataGolangResponse> => {
  const { currentUser } = middlewareFirebase.Auth.GetAuth();
  if (!currentUser || !currentUser.uid) {
    console.log('currentUser not find');

    return { res: null, error: null };
  }

  // ======== Organization ========
  const refOrganizationCollection = collection(GetFirestore(), 'organization');
  const refOrganizationDoc = doc(refOrganizationCollection, payload.organizationID);
  const resOrganizationQuery = await helperPromise.GolangResponse(
    getDoc(refOrganizationDoc),
  );
  // const resOrganizationQuery = await getDoc(refOrganizationDoc);

  if (resOrganizationQuery.error) {
    console.log('resOrganizationQuery error :', resOrganizationQuery.error);
    return resOrganizationQuery;
  }

  // const docData = resOrganizationQuery.data();
  const resOrganization = (resOrganizationQuery.res as DocumentSnapshot).data();
  // console.log('docData', docData);
  // return { res: null, error: null };

  // ======== User ========
  const refUserCollection = collection(GetFirestore(), 'users');
  await setDoc(
    doc(refUserCollection, currentUser.uid),
    { profile: { ...payload } },
    { merge: true },
  );

  const res: helperType.TypeAPIData = {
    data: {
      _id: currentUser.uid,
      profile: { ...payload },
      organization: {
        _id: payload.organizationID,
        ...resOrganization,
      },
    },
  };

  // console.log('user profile res :', res);

  return { res, error: null };
};

export const readUserProfile =
  async (): Promise<helperType.TypeAPIDataGolangResponse> => {
    const { currentUser } = middlewareFirebase.Auth.GetAuth();
    if (!currentUser || !currentUser.uid) {
      console.log('currentUser not find');

      return { res: null, error: null };
    }

    // ======== User ========
    const refUserCollection = collection(GetFirestore(), 'users');
    const refUserDoc = doc(refUserCollection, currentUser.uid);
    const resUserQuery = await helperPromise.GolangResponse(getDoc(refUserDoc));
    // const resOrganizationQuery = await getDoc(refOrganizationDoc);

    if (resUserQuery.error) {
      console.log('resOrganizationQuery error :', resUserQuery.error);
      return resUserQuery;
    }
    // const docData = resOrganizationQuery.data();
    const resUser = (resUserQuery.res as DocumentSnapshot).data();
    // console.log('resUser', resUser);

    // ========== if no profile create user
    if (!resUser || (resUser && !('profile' in resUser))) {
      console.log('no profile');
      await setDoc(doc(refUserCollection, currentUser.uid), {}, { merge: true });
      return { res: { data: { _id: currentUser.uid } }, error: null };
    }

    // ======== Organization ========
    const refOrganizationCollection = collection(GetFirestore(), 'organization');
    const refOrganizationDoc = doc(
      refOrganizationCollection,
      resUser?.profile.organizationID,
    );
    const resOrganizationQuery = await helperPromise.GolangResponse(
      getDoc(refOrganizationDoc),
    );
    // const resOrganizationQuery = await getDoc(refOrganizationDoc);

    if (resOrganizationQuery.error) {
      console.log('resOrganizationQuery error :', resOrganizationQuery.error);
      return resOrganizationQuery;
    }
    const resOrganization = (resOrganizationQuery.res as DocumentSnapshot).data();

    const res: helperType.TypeAPIData = {
      data: {
        _id: currentUser.uid,
        ...resUser,
        organization: {
          _id: resUser?.profile.organizationID,
          ...resOrganization,
        },
      },
    };

    return { res, error: null };
  };

export const updateUserAcceptAgreement =
  async (): Promise<helperType.TypeAPIDataGolangResponse> => {
    const { currentUser } = middlewareFirebase.Auth.GetAuth();
    if (!currentUser || !currentUser.uid) {
      console.log('currentUser not find');

      return { res: null, error: null };
    }

    // ======== User ========
    const refUserCollection = collection(GetFirestore(), 'users');
    await setDoc(
      doc(refUserCollection, currentUser.uid),
      { isAcceptAgreement: true },
      { merge: true },
    );
    return { res: { data: { _id: currentUser.uid } }, error: null };
  };
