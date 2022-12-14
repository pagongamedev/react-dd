import create from 'zustand';

const useStore = create((set) => ({
  user: '',
  cartCount: 0,
  login: () => set(() => ({ user: 'Jack' })),
  logout: () => set(() => ({ user: '' })),
  addToCart: () => set((state: any) => ({ cartCount: state.cartCount + 1 })),
}));

export const useLogin = () => useStore((state: any) => state.login);
export const useLogout = () => useStore((state: any) => state.logout);
export const useAddToCart = () => useStore((state: any) => state.addToCart);
export const useUser = () => useStore((state: any) => state.user);
export const useCartCount = () => useStore((state: any) => state.cartCount);
