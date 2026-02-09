export default function Home() {
  return (
    <main style={{ maxWidth: "960px", margin: "0 auto", padding: "6rem 2rem" }}>
      <h1>Clear Signal Design™</h1>

      <p style={{ marginTop: "1rem", fontSize: "1.1rem", opacity: 0.8 }}>
        A Diagnostic and Design Method for Organizational Operating Systems
      </p>

      <p style={{ marginTop: "3rem" }}>
        Clear Signal Design™ is the proprietary diagnostic and redesign method behind
        every Briel OS Studio engagement.
      </p>

      <p>
        It identifies how an organization’s current operating system is producing its
        outcomes—then redesigns the architecture that governs decisions, roles, time,
        authority, and accountability.
      </p>

      <p style={{ marginTop: "2rem", fontWeight: 500 }}>
        This method does not motivate.
        <br />
        It diagnoses, designs, and stabilizes systems.
      </p>

      <div style={{ marginTop: "4rem", display: "flex", gap: "1.5rem" }}>
        <a href="/diagnostic">Begin with a Diagnostic</a>
        <a href="/">Return Home</a>
      </div>
    </main>
  );
}
.site {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-md);
  background-color: var(--color-bg-primary);
}
section {
  margin-bottom: var(--space-xl);
}
h1 {
  margin-bottom: var(--space-md);
}

h2 {
  margin-top: var(--space-lg);
  margin-bottom: var(--space-sm);
}


