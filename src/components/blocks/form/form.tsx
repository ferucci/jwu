import { TypographyVariant } from '@/common'
import {
  Button,
  ControlledRadioGroup,
  ControlledTextField,
  RadioItem,
  Typography,
} from '@/components'
import { APP_ROUTES } from '@/utils'

import s from './form.module.scss'

import { useHookForm } from './hooks/useForm/useForm'

type Props = {
  className?: string
}

export const Form = ({ className }: Props) => {
  const { control, errors, formRef, submitFormHandler } = useHookForm()

  return (
    <form className={`${className} ${s.form} card`} onSubmit={submitFormHandler} ref={formRef}>
      <Typography as={'h3'} variant={TypographyVariant.title2}>
        Fill out the form and we will contact you shortly
      </Typography>
      <div className={s.content}>
        <fieldset className={`${s.fields} ${s.fieldsBase}`}>
          <legend className={'sr-only'}>Your personal information</legend>
          <div className={s.item}>
            <ControlledTextField
              control={control}
              id={'contacts-name'}
              label={'Enter your name'}
              name={'name'}
              placeholder={'John'}
            />
          </div>

          <div className={s.item}>
            <ControlledTextField
              control={control}
              id={'contacts-email'}
              label={'Enter email'}
              name={'email'}
              placeholder={'john@gmail.com'}
            />
          </div>
          <div className={s.item}>
            <ControlledTextField
              control={control}
              id={'contacts-phone'}
              label={'Enter phone number '}
              name={'phone'}
              placeholder={'7123456789'}
            />
          </div>
        </fieldset>
        <fieldset className={s.fields}>
          <legend className={'sr-only'}>Information about your aims</legend>
          <div>
            <Typography as={'span'} className={s.subtitle} variant={TypographyVariant.strong2}>
              We need JWU’s Media services for your...
            </Typography>
            <ControlledRadioGroup control={control} name={'aim'}>
              <RadioItem label={'Business'} value={'business'} />
              <RadioItem label={'Event'} value={'event'} />
            </ControlledRadioGroup>
          </div>
          <ControlledTextField
            control={control}
            id={'contacts-kind-of-business'}
            label={'What kind of business do you have?'}
            name={'kindBusiness'}
            placeholder={'Restaurant'}
          />
          <ControlledTextField
            as={'textarea'}
            control={control}
            label={'Your message'}
            name={'message'}
            placeholder={'Include a message...'}
          />
        </fieldset>
      </div>
      <Typography variant={TypographyVariant.caption1}>
        By clicking on the button, I agree to the JWU’s{' '}
        <Typography
          as={'a'}
          className={s.link}
          href={APP_ROUTES.privacyPolicy}
          variant={TypographyVariant.caption1}
        >
          Privacy Policy
        </Typography>
      </Typography>
      <Button disabled={!!Object.keys(errors).length} type={'submit'}>
        Submit
      </Button>
    </form>
  )
}
