import BrazilIcon from '../../public/icons/brazil-icon.svg'
import USAIcon from '../../public/icons/usa-icon.svg'

export interface ILanguages {
  name: 'pt' | 'en'
  icon: string
}
export const languages: ILanguages[] = [
  { name: 'pt', icon: BrazilIcon },
  { name: 'en', icon: USAIcon },
]
