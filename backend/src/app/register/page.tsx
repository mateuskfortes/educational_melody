import RegisterForm from '@/components/auth/RegisterForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function RegisterPage() {
  const session = await getServerSession(authOptions);

  return (
    <RegisterForm administratorCheckbox={session?.user?.role !== 'ADMIN'} />
  );
}
