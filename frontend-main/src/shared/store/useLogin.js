import create from "zustand";

const useLogin = create((set) => ({
  isLogin: false,
  setIsLogin: (title) => set({ isLogin: title }),
}));

export default useLogin;
