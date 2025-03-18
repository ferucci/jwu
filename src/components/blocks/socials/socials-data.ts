import { SocialPropsType } from '@/components'
import { CONTACTS } from '@/utils'

import s from '@/components/blocks/socials/socials.module.scss'

export const dataSocials: SocialPropsType[] = [
  {
    'aria-label': 'whatsapp',
    className: s.whatsapp,
    href: CONTACTS.whatsapp.href,
    idIcon: 'whatsapp',
  },
  {
    'aria-label': 'email',
    href: CONTACTS.email.href,
    idIcon: 'email',
    stroke: 'white',
  },
  {
    'aria-label': 'instagram',
    href: CONTACTS.instagram.href,
    idIcon: 'instagram',
  },
  {
    'aria-label': 'facebook',
    href: CONTACTS.facebook.href,
    idIcon: 'facebook',
  },
]
