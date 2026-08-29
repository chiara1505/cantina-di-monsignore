import Layout from '@/components/layout/Layout'
import LegalDocument from '@/components/sections/legal/LegalDocument'
import {
  COOKIE_POLICY_INTRO,
  COOKIE_POLICY_SECTIONS,
} from '@/lib/legal/cookiePolicy'
import { PAGE_METADATA } from '@/lib/pageMetadata'

export const metadata = PAGE_METADATA.cookie

export default function CookiePolicyPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} wrapperCls="legal-page">
      <LegalDocument
        title="Cookie Policy"
        intro={COOKIE_POLICY_INTRO}
        sections={COOKIE_POLICY_SECTIONS}
        relatedHref="/privacy-policy"
        relatedLabel="Privacy Policy"
      />
    </Layout>
  )
}
