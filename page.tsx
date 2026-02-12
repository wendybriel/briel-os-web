export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{ marginBottom: "5rem" }}>
        <div
          style={{
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.75,
            marginBottom: "1.5rem",
            fontSize: "0.85rem",
          }}
        >
          BrielOS
        </div>

        <h1
          style={{
            fontSize: "2.4rem",
            fontWeight: 500,
            lineHeight: 1.25,
            marginBottom: "2rem",
          }}
        >
          Decision Architecture for Founders
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.9,
            maxWidth: "640px",
            opacity: 0.9,
          }}
        >
          Clear Signal Design™ — Quiet systems for complex decisions.
          <br />
          Most performance failures are not motivational. They are architectural.
          <br />
          We design operating systems that restore clarity, coherence, and
          authorship.
          <br />
          We do not coach. We diagnose and redesign.
        </p>

        <p style={{ marginTop: "3rem" }}>
          <a
            href="/method"
            style={{
              textDecoration: "none",
              color: "#5271B8",
              fontWeight: 500,
            }}
          >
            View the Method →
          </a>
        </p>
      </section>

      {/* PRINCIPLES */}
      <section style={{ marginBottom: "5rem" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 500, marginBottom: "0.75rem" }}>
            Clarity precedes change
          </h2>
          <p style={{ opacity: 0.8, lineHeight: 1.8, maxWidth: "620px" }}>
            We separate signal from noise to restore decision quality under pressure.
          </p>
        </div>

        <div style={{ marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 500, marginBottom: "0.75rem" }}>
            Architecture before effort
          </h2>
          <p style={{ opacity: 0.8, lineHeight: 1.8, maxWidth: "620px" }}>
            Systems hold when feelings don’t. We redesign structure, not motivation.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 500, marginBottom: "0.75rem" }}>
            Agency is the outcome
          </h2>
          <p style={{ opacity: 0.8, lineHeight: 1.8, maxWidth: "620px" }}>
            Success is measured by restored authorship, not compliance.
          </p>
        </div>
      </section>

      {/* WORK WITH */}
      <section style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          Work with BrielOS
        </h2>

        <p
          style={{
            opacity: 0.85,
            lineHeight: 1.9,
            maxWidth: "640px",
            marginBottom: "2.5rem",
          }}
        >
          We work with founders at inflection points — moments of formation or
          strain where clarity matters most.
        </p>

        <a
          href="mailto:briel.os@outlook.com"
          style={{
            textDecoration: "none",
            color: "#5271B8",
            fontWeight: 500,
          }}
        >
          Initiate a Conversation →
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ opacity: 0.65 }}>
        <p>© 2026 BrielOS. Founded by Wendy Briel.</p>
        <p style={{ marginTop: "0.75rem" }}>
          <a
            href="https://substack.com/@thefilteredfolio?utm_source=user-menu"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontSize: "0.85rem",
              opacity: 0.7,
              color: "#2F3E4D",
            }}
          >
            Method Substack
          </a>
        </p>
      </footer>
    </main>
  );
}
