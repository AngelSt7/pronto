"use server"

import { cookies } from 'next/headers';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export interface CookieItem {
  name: string;
  value: string;
}

export type CookieConfig = Partial<ResponseCookie>;

const configBase: CookieConfig = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  path: '/',
};

export const getCookies = async (names: string[]) => {
  const cookieStore = await cookies();

  return names.map((name) => ({
    name,
    value: cookieStore.get(name)?.value ?? null,
  }));

};

export async function setCookies(
  cookiesParam: CookieItem[],
  customConfig?: CookieConfig
) {
  const cookieStore = await cookies();
  const finalConfig: CookieConfig = { ...configBase, ...customConfig };

  cookiesParam.forEach(({ name, value }) => {
    cookieStore.set(name, value, finalConfig);
  });
}

export async function deleteCookies(names: string[]) {
  const cookieStore = await cookies();
  names.forEach((name) => cookieStore.delete(name));
}