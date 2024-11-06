import { type TUser } from '@/types';

import React from 'react';

export default React.createContext<null | TUser>(null);
