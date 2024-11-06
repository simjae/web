import { type TUser } from '@/types';
import { cookies } from 'next/headers';

const TOKEN_COOKIE_NAME = 'user-token';

export function getToken() {
  return cookies().get(TOKEN_COOKIE_NAME)?.value;
}

export async function auth(): Promise<null | TUser> {
  const jwt = cookies().get(TOKEN_COOKIE_NAME)?.value;

  if (!jwt) {
    return null;
  }

  const response = await fetch(`${process.env.API_HOST}/api/v1/user/me`, {
    headers: {
      Authorization: `bearer ${jwt}`,
    },
  });
  const result = await response.json();
  return result?.data?.user
    ? {
        email: result.data.user.email,
        nickname: result.data.user.nickname,
        profileImageUrl: result.data.user.profileImageUrl,
      }
    : null;
}

export function setSession(token: string) {
  cookies().set(TOKEN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });
}

export function clearToken() {
  cookies().set(TOKEN_COOKIE_NAME, '', {
    expires: new Date(0),
  });
}
