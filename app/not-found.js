
'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
export default function Error404() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}  breadcrumbTitle="404">
           
    <section className="error-section centred">
      <div className="auto-container">
        <div className="inner-box">
          <h1>404</h1>
          <h2>Page is not found. <br />The page doesn’t exist or has been deleted</h2>
          <Link href="/" className="theme-btn-one">
            Go To Home
          </Link>
        </div>
      </div>
    </section>
            </Layout>
        </>
    )
}
