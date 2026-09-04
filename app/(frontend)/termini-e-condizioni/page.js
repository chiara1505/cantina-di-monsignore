import Layout from '@/components/layout/Layout'
import LegalDocument from '@/components/sections/legal/LegalDocument'
import {
  TERMS_AND_CONDITIONS_INTRO,
  TERMS_AND_CONDITIONS_SECTIONS,
} from '@/lib/legal/termsAndConditions'
import { PAGE_METADATA } from '@/lib/pageMetadata'

export const metadata = PAGE_METADATA.terms

export default function TermsAndConditionsPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} wrapperCls="legal-page">
      <LegalDocument
        title="Termini e condizioni — Shop"
        intro={TERMS_AND_CONDITIONS_INTRO}
        sections={TERMS_AND_CONDITIONS_SECTIONS}
        relatedHref="/privacy-policy"
        relatedLabel="Privacy Policy"
      />
    </Layout>
  )
}
