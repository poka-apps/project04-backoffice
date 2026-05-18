import { CardDescription, CardContent, CardHeader, CardTitle, Card, FieldDescription } from '@/components/shadcn';
import { ControlledInputTextGroup } from '@/components/controlled';
import type { IHasEmail, IHasPassword } from '@/interfaces';
import { Button } from '@/components/shadcn/button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { cn, nameof } from '@/functions';
import { ROUTES } from '@/constants';

export const Form = () => {

  const { formState: { isSubmitting, isValid }, control, handleSubmit } = useForm<IHasEmail & IHasPassword>({
    reValidateMode: 'onBlur',
    mode: 'all'
  });
  const navigate = useNavigate();

  const handleOnClick = () =>
    handleSubmit(
      data => {
        console.log(data);
        navigate(ROUTES.dashboard, { state: 12345 });
      }
    )();

  return (
    <div className={cn('flex flex-col gap-6')}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>
            Bon retour
          </CardTitle>
          <CardDescription>
            Se connecter avec votre email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className='flex flex-col gap-5'>
            <ControlledInputTextGroup
              label={{ value: 'Email' }}
              name={nameof<IHasEmail>('email')}
              placeholder='Email'
              disabled={isSubmitting}
              control={control}
              type='email'
              required />
            <ControlledInputTextGroup
              label={{ value: 'Mot de passe' }}
              name={nameof<IHasPassword>('password')}
              placeholder='********'
              disabled={isSubmitting}
              control={control}
              type='password'
              required />
            <Button
              type='button'
              disabled={!isValid}
              onClick={handleOnClick}
              className='cursor-pointer mt-2'>
              Se connecter
            </Button>
            <FieldDescription className='flex justify-center gap-1'>
              <span>
                Vous n'avez pas de compte ?
              </span>
              <Link to={ROUTES.login}>
                S'enregistrer
              </Link>
            </FieldDescription>
          </form>
        </CardContent>
      </Card>
    </div>
  );

};
