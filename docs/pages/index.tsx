import Link from "next/link";
import Logo from "../components/Logo.svg";
import { SITE } from "../config";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        <Link href="/">
          <Logo />
        </Link>
      </h1>

      <h2 className={styles.description}>{SITE.description}</h2>

      <div className={styles.divider}></div>

      <section className={styles.about}>
        <p>
          OpenNext takes the Next.js build output and converts it into a package
          that can be deployed to any functions as a service platform.
        </p>
        <p>
          It supports all Next.js 13 features including, SSG, ISR, SSR, Image
          Optimization, and Middleware.
        </p>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.about}>
        <p>
          OpenNext is what allows{" "}
          <a href={SITE.sst} target="_blank">
            SST
          </a>{" "}
          to{" "}
          <a href="https://sst.dev/examples/how-to-create-a-nextjs-app-with-serverless.html">
            deploy Next.js apps
          </a>{" "}
          to AWS using Lambda, Lambda@Edge, CloudFront, and S3.
        </p>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.about}>
        <p>
          While Vercel is great, it's not a good option if all your
          infrastructure is on AWS. Hosting it in your AWS account makes it easy
          to integrate with your backend. And it's a lot cheaper than Vercel.
        </p>
        <p>
          Next.js, unlike Remix or Astro, doesn't have a way to self-host using
          serverless. You can only run it in a Docker container. Containers are
          expensive and need to be scaled.
        </p>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.about}>
        <p>
          There have been several attempts to fix this. Broadly falling into two
          categories; open source framework specific implementations, or closed
          source SaaS products.
        </p>
        <p>
          Most of the open source options, like{" "}
          <a
            href="https://github.com/serverless-nextjs/serverless-next.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            serverless-nextjs
          </a>{" "}
          are dead. Their implementation can also be specific to the framework
          they are targeting.
        </p>
        <p>
          Closed source SaaS products like{" "}
          <a
            href="https://aws.amazon.com/amplify/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amplify
          </a>{" "}
          have incomplete or incorrect implementations. And because they are
          closed source, you'll need to file a support ticket to get them
          updated.
        </p>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.about}>
        <p>
          The goal of OpenNext is to create an open source, framework agnostic,
          serverless adapter for Next.js.
        </p>
        <p>
          We need your help keeping it up to date and feature complete. Make
          sure to{" "}
          <a href={SITE.discord} target="_blank" rel="noopener noreferrer">
            <b>join us on Discord</b>
          </a>{" "}
          and{" "}
          <a href={SITE.github} target="_blank" rel="noopener noreferrer">
            <b>star us on GitHub</b>
          </a>
          .
        </p>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.tech}>
        <h3>Background</h3>
        <p>Modern SSR applications like Next.js are made up of two parts.</p>
        <ol>
          <li>
            <p>
              The infrastructure necessary to run your app. Typically this
              includes things like serverless functions, an S3 bucket, a CDN,
              and serverless edge functions.
            </p>
          </li>
          <li>
            <p>
              The code, called the adapter, that wraps around your Next.js app
              and translates function requests and responses to your app.
            </p>
          </li>
        </ol>
        <p>OpenNext is the adapter.</p>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.tech}>
        <h3>Problem</h3>
        <p>
          In the past, library authors have ended up duplicating the adapter
          implementation across various projects. Meaning that they also need to
          upgrade them separately to support new Next.js features. This is hard
          to do. And not surprisingly these efforts tend to fizzle out.
        </p>
        <p>
          It makes more sense to put together a community effort to maintain a
          single, feature complete, implementation that can be used across
          projects.
        </p>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.tech}>
        <h3>Usage</h3>
        <p>
          OpenNext is meant to be used by library authors and currently only
          supports AWS. Here's what you'll need to implement in your library to
          deploy a serverless Next.js app to AWS.
        </p>
        <ol>
          <li>
            <p>
              Run <code>next build</code> to generate the <code>.next</code>{" "}
              directory.
            </p>
          </li>
          <li>
            <p>
              Run <code>open-next</code>. This'll in turn generate the an{" "}
              <code>.open-next</code> directory. This directory contains a zip
              file of your app that'll run in a Lambda function, a zip file
              that'll run the image optimization Lambda, and a zip file
              containing your static assets that'll go to S3.
            </p>
          </li>
          <li>
            <p>
              Create the infrastructure for your app with your preferred tool —
              SST, CDK, Serverless Framework, Terraform, etc. SST has the{" "}
              <a href="https://docs.sst.dev/constructs/NextjsSite">
                <code>NextjsSite</code>
              </a>{" "}
              construct for this. You can look at the{" "}
              <a href="https://github.com/serverless-stack/sst/blob/master/packages/resources/src/NextjsSite.ts">
                source of the SST construct
              </a>
              to see what infrastructure you need. We'll document this in detail
              soon.
            </p>
          </li>
          <li>
            <p>
              Finally, upload the generated assets in step 2 to the
              infrastructure you created.
            </p>
          </li>
        </ol>
        <p>
          Note that, if you are not a library author and are just looking for a
          way to deploy your serverless Next.js app to AWS,{" "}
          <a href="https://sst.dev/examples/how-to-create-a-nextjs-app-with-serverless.html">
            follow this tutorial
          </a>
          .
        </p>
      </section>
    </>
  );
}
