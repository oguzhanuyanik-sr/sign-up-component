import Header from '@/components/header';
import RegisterForm from '@/components/register-form';

export default function Home() {
  return (
    <main className='container py-20 md:flex min-h-screen md:justify-between md:items-center md:gap-11'>
      <Header />
      <RegisterForm />
    </main>
  );
}
