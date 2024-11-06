import BackgroundImage from './login-bg.png';

import Form from './_form';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function LoginPage() {
  const user = await auth();

  if (user) {
    return redirect('/');
  }

  return (
    <div className="h-full relative">
      <Image className="absolute h-full inset-0 object-cover opacity-50" src={BackgroundImage} alt="" />
      <div className="absolute inset-0">
        <Form />
      </div>
    </div>
  );
}
