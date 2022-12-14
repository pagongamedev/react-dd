import './index.css';

import initI18N from './i18n';
import { setStore, useStore } from './store';

const i18nDomainName = 'zustand-helper';
const I18N = initI18N({ name: i18nDomainName });

const LoginSection = () => {
  // const { login, logout }: any = useStoreHelper(['login', 'logout']);
  const { setUser }: any = useStore(['setUser']);
  const login = () => setUser('Jack');
  const logout = () => setStore({ user: '', cartCount: 0 });

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const UserSection = () => {
  const { user }: any = useStore(['user']);
  return <div>User: {user}</div>;
};

const AddToCartSection = () => {
  const { addToCart }: any = useStore(['addToCart']);

  return (
    <div>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

const CartCountSection = () => {
  const { cartCount }: any = useStore(['cartCount']);

  return <div>Cart count: {cartCount}</div>;
};

const JSX = () => {
  return (
    <div className="box">
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  );
};

export default { I18N, JSX };
