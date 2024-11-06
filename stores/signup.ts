import { create } from 'zustand';

interface SignupProps {
  username: string;
  password: string;
  phoneAuthCode: number;
  nickname: string;
}

interface SignupStore extends SignupProps {
  update: (fieldName: string, value: string) => void;
}

const useSignupStore = create<SignupStore>()((set) => ({
  username: '',
  password: '',
  phoneAuthCode: 0,
  nickname: '',
  update: (fieldName, value) => {
    set((state: any) => {
      return state;
    });
  },
}));

export { useSignupStore };
