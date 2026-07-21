import { DM_Sans, Poppins, Libre_Baskerville,Rouge_Script } from 'next/font/google'

export const poppins = Poppins({
    weight: ['300','400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--poppins",
    display: 'swap',
})
export const dm_sans = DM_Sans({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: "--dm_sans",
    display: 'swap',
})
export const libre_baskerville = Libre_Baskerville({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: "--libre_baskerville",
    display: 'swap',
})
export const rouge_script = Rouge_Script({
    weight: ['400',],
    subsets: ['latin'],
    variable: "--rouge_script",
    display: 'swap',
})
