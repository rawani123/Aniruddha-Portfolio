import Head from "next/head";

import { NextSeo } from "next-seo";

import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import LandingHero from "@/components/landing-hero";
import ProjectShowcase from "@/components/projects/project-showcase";
import SkillsShowcase from "@/components/skills/skills-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { SKILLS_DATA } from "@/data/skills";

export default function Home() {
  return (
    <>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <NextSeo
        title="Aniruddha Rawool | Full Stack Developer Portfolio"
        description="Explore the professional portfolio of Aniruddha Rawool, Full Stack Developer Portfolio. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Aniruddha Rawool - Full Stack Developer Portfolio",
          description:
            "Dive into the world of web development with Aniruddha Rawool. Discover a Full Stack Developer, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Aniruddha Rawool - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
