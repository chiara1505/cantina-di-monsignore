'use client';

import Link from 'next/link';
import { useRestaurantSettings } from '@/components/providers/RestaurantSettingsProvider';

export default function SocialLinks({
  className = 'social-links clearfix',
  useSpan = false,
}) {
  const { social } = useRestaurantSettings();

  if (!social.profiles.length) {
    return null;
  }

  return (
    <ul className={className}>
      {social.profiles.map(({ href, icon, mobileIcon, label }) => (
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
