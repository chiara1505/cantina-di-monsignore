import Layout from '@/components/layout/Layout'
import LegalDocument from '@/components/sections/legal/LegalDocument'
import {
  PRIVACY_POLICY_INTRO,
  PRIVACY_POLICY_SECTIONS,
} from '@/lib/legal/privacyPolicy'
import { PAGE_METADATA } from '@/lib/pageMetadata'

export const metadata = PAGE_METADATA.privacy

export default function PrivacyPolicyPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} wrapperCls="legal-page">
      <LegalDocument
        title="Privacy Policy"
        intro={PRIVACY_POLICY_INTRO}
        sections={PRIVACY_POLICY_SECTIONS}
        relatedHref="/cookie-policy"
        relatedLabel="Cookie Policy"
      />
    </Layout>
  )
}
