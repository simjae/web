import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type User = {
  email: string;
  nickname: string;
  avatarImageUrl: string;
};

interface userProps {
  user: User | null;
}

interface UserStore extends userProps {
  updateUser: (user: User) => void;
  clear: () => void;
}

const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        updateUser: (user) => {
          set({ user });
        },
        clear: () => {
          set({ user: null });
        },
      }),
      {
        name: 'user-storage',
      },
    ),
  ),
);

export { useUserStore };
