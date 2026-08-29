import Link from 'next/link'

export default function LegalFormConsent({
  id = 'legal-consent',
  name = 'privacyConsent',
  className = '',
}) {
  return (
    <label className={`legal-form-consent ${className}`.trim()} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value="yes"
        required
      />
      <span className="legal-form-consent__text">
        Ho letto e accetto la{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>
        {' '}e la{' '}
        <Link href="/cookie-policy">Cookie Policy</Link>
        .
      </span>
    </label>
  )
}
