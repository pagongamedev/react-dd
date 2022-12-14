import './index.css';

import initI18N from './i18n';
import { useAddToCart, useCartCount, useLogin, useLogout, useUser } from './store';

const i18nDomainName = 'zustand';
const I18N = initI18N({ name: i18nDomainName });

const LoginSection = () => {
  const login = useLogin();
  const logout = useLogout();

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const UserSection = () => {
  const user = useUser();
  return <div>User: {user}</div>;
};

const AddToCartSection = () => {
  const addToCart = useAddToCart();
  return (
    <div>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

const CartCountSection = () => {
  const cartCount = useCartCount();
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
