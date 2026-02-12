Page · TSX
Copy

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8E4DC]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-serif text-[#2F32ED] leading-tight">
            BrielOS
          </h1>
          
          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl text-[#52718B8E] font-light max-w-2xl">
            Decision Architecture for Founders
          </h2>
          
          {/* Tagline */}
          <p className="text-xl text-[#2F32ED] max-w-xl">
            Clear Signal Design™ — Quiet systems for complex decisions
          </p>
          
          {/* Divider */}
          <div className="w-24 h-px bg-[#52718B8E] my-12"></div>
          
          {/* Description */}
          <div className="max-w-2xl space-y-6 text-[#2F32ED]/80 text-lg leading-relaxed">
            <p>
              Most performance failures are not motivational. They are architectural.
            </p>
            <p>
              BrielOS exists to design operating systems that restore clarity, coherence, 
              and authorship in founder and organizational systems.
            </p>
            <p>
              We do not coach. We diagnose and redesign.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Link 
              href="/method"
              className="inline-block px-8 py-4 bg-[#52718B8E] text-white text-lg font-medium hover:bg-[#2F32ED] transition-colors duration-200"
            >
              Explore the Method
            </Link>
          </div>
        </div>
      </section>
      
      {/* Three Principles Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-[#52718B8E]/20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#52718B8E]">
              Clarity precedes change
            </h3>
            <p className="text-[#2F32ED]/70 leading-relaxed">
              We separate signal from noise to restore decision quality under pressure.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#52718B8E]">
              Architecture before effort
            </h3>
            <p className="text-[#2F32ED]/70 leading-relaxed">
              Systems hold when feelings don't. We redesign structure, not motivation.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#52718B8E]">
              Agency is the outcome
            </h3>
            <p className="text-[#2F32ED]/70 leading-relaxed">
              Success is measured by restored authorship, not compliance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-[#52718B8E]/20">
        <div className="space-y-6">
          <h3 className="text-2xl text-[#52718B8E]">
            Work with BrielOS
          </h3>
          <p className="text-[#2F32ED]/70 text-lg max-w-2xl">
            We work with founders at inflection points—moments of formation or strain 
            where clarity matters most.
          </p>
          <div className="pt-4">
            <a 
              href="mailto:hello@brielos.com"
              className="inline-block px-8 py-4 border-2 border-[#52718B8E] text-[#52718B8E] text-lg font-medium hover:bg-[#52718B8E] hover:text-white transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-[#52718B8E]/20">
        <div className="flex flex-col md:flex-row justify-between items-center text-[#2F32ED]/60 text-sm">
          <p>© 2026 BrielOS. Founded by Wendy Briel.</p>