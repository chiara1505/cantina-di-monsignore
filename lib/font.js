import { Inter, Playfair_Display, Lora } from 'next/font/google'

// Inter Regular — sostituisce Poppins (body, nav, form)
export const poppins = Inter({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--poppins',
    display: 'swap',
})

// Inter Medium — sostituisce DM Sans (bottoni, breadcrumb, UI)
export const dm_sans = Inter({
    weight: ['500'],
    subsets: ['latin'],
    variable: '--dm_sans',
    display: 'swap',
})

// Playfair Display Medium — sostituisce Libre Baskerville (titoli)
export const libre_baskerville = Playfair_Display({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--libre_baskerville',
    display: 'swap',
})

// Lora Italic — sostituisce Rouge Script (sottotitoli decorativi)
export const rouge_script = Lora({
    weight: ['400'],
    style: ['italic'],
    subsets: ['latin'],
    variable: '--rouge_script',
    display: 'swap',
})
