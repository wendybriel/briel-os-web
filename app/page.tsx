export default function Home() {
  return (
    <main>
      <h1>BrielOS</h1>

      <h2>Decision Architecture for Founders</h2>

      <p>Clear Signal Design™ — Quiet systems for complex decisions</p>

      <p>
        Most performance failures are not motivational. They are architectural.
      </p>

      <p>
        BrielOS exists to design operating systems that restore clarity,
        coherence, and authorship in founder and organizational systems.
      </p>

      <p>We do not coach. We diagnose and redesign.</p>

      <p>
        <a href="/method">View the Method</a>
      </p>

      <h3>Clarity precedes change</h3>

      <p>
        We separate signal from noise to restore decision quality under pressure.
      </p>

      <h3>Architecture before effort</h3>

      <p>
        Systems hold when feelings don’t. We redesign structure, not motivation.
      </p>

      <h3>Agency is the outcome</h3>

      <p>
        Success is measured by restored authorship, not compliance.
      </p>

      <h3>Work with BrielOS</h3>

      <p>
        We work with founders at inflection points — moments of formation or
        strain where clarity matters most.
      </p>

      <p>
        <a
          href="mailto:briel.os@outlook.com"
          aria-label="Email BrielOS"
        >
          Initiate a Conversation
        </a>
      </p>

      <footer>
        <p>© 2026 BrielOS. Founded by Wendy Briel.</p>

        <p>
          <a
            href="https://substack.com/@thefilteredfolio?utm_source=user-menu"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.875rem",
              opacity: 0.65,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Method Substack
          </a>
        </p>
      </footer>
    </main>
  );
}
