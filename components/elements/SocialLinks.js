import Link from 'next/link';
import { SITE_SOCIAL_PROFILES } from '@/lib/siteNavigation';

export default function SocialLinks({
  className = 'social-links clearfix',
  useSpan = false,
}) {
  return (
    <ul className={className}>
      {SITE_SOCIAL_PROFILES.map(({ href, icon, mobileIcon, label }) => (
        <li key={href}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {useSpan ? (
              <span className={mobileIcon || icon} aria-hidden="true" />
            ) : (
              <i className={icon} aria-hidden="true" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
