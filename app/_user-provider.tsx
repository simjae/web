'use client';
import { type TUser } from '@/types';
import React from 'react';
import UserContext from '@/contexts/user-context';

export default function UserProvider(props: { user: null | TUser; children: React.ReactNode }) {
  return <UserContext.Provider value={props.user}>{props.children}</UserContext.Provider>;
}
