import './index.css';

// import { yupResolver } from '@hookform/resolvers/yup';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';
// import { RiEyeLine, RiEyeOffLine, RiLockLine, RiUserLine } from 'react-icons/ri';
// import { useNavigate } from 'react-router-dom';
import {
  HelperI18Next,
  // HelperTime
} from 'universal-helper';

// import * as yup from 'yup';
// import { GetMethodStoreGlobal } from '../../global/store';
// import { GetMethodStoreGlobalPersist } from '../../global/store/persist';
import initI18N from './i18n';

// const testUser = 't@t.com';
// const testPassword = 'testtest1234';

const sI18nDomainName = 'login';
const I18N: HelperI18Next.TypeI18NDomain = initI18N({ name: sI18nDomainName });

// const schema = yup.object({
//   username: yup.string().required('validate.required').email('validate.email'),
//   password: yup
//     .string()
//     .required('validate.required')
//     .min(4, { key: 'validate.min', option: { count: 4 } }),
// });

const JSX = () => {
  // const { t, i18n } = useTranslation([sI18nDomainName]);

  // const {
  //   register,
  //   handleSubmit,
  //   setError,
  //   formState: { errors, isDirty, isValid },
  // } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  // const { setLoading } = GetMethodStoreGlobal();
  // const { setUserData } = GetMethodStoreGlobalPersist();

  // const navigate = useNavigate();

  // const firebaseLogin = async (sEmail: string, sPassword: string) => {
  //   setLoading(true);
  //   await HelperTime.WaitForMilliSecond(300);
  //   setLoading(false);

  //   if (sEmail != testUser) {
  //     setError('username', {
  //       type: 'custom',
  //       message: 'validate.userNotFound',
  //     });
  //     return;
  //   }

  //   if (sPassword == 'global') {
  //     setError('global', {
  //       type: 'custom',
  //       message: 'validate.networkRequestFailed',
  //     });
  //     return;
  //   }

  //   if (sPassword != testPassword) {
  //     setError('password', {
  //       type: 'custom',
  //       message: 'validate.passwordWrong',
  //     });
  //     return;
  //   }

  //   console.log('sign in');
  //   setUserData({});
  //   navigate('/user/dashboard');
  // };

  // const onSubmit = async (data: any) => {
  //   await firebaseLogin(data.username, data.password);
  // };

  // const [isShowPassword, setIsShowPassword] = useState(false);
  // const onClickShowPassword = () => {
  //   setIsShowPassword((state) => !state);
  // };

  return (
    <div className="uh-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      Hello
    </div>
  );
};

export default { I18N, JSX };
