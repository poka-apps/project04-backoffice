import img from '@/assets/images/jpeg/logo-fpm-1056x972.jpeg';
import { Form } from './components';

const LoginPage = () => (
  <div className='bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
    <div className='flex w-full max-w-sm flex-col gap-6'>
      <a href='#' className='flex items-center gap-2 self-center font-medium'>
        <div className='bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md'>
          <img
            src={img}
            alt='FP-MOSELLE-237'
            className='size-4 rounded-md' />
        </div>
        FP-MOSELLE-237
      </a>
      <Form />
    </div>
  </div>
);

export default LoginPage;

