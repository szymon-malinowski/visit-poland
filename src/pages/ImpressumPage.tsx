import { PageHeader } from '../components/molecules/PageHeader'

export function ImpressumPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:py-24">
      <PageHeader
        description="Legal information about the Visit Poland website and its content."
        eyebrow="Legal notice"
        title="Impressum"
      />

      <div className="grid max-w-4xl gap-6 md:grid-cols-2">
        <div role="note" className="alert alert-warning md:col-span-2">
          <span>
            Placeholder information — replace every item in square brackets
            with the website operator's details before publishing.
          </span>
        </div>

        <section className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title font-serif text-2xl text-primary">
              Website information
            </h2>
            <address className="not-italic leading-relaxed text-base-content/75">
              <strong className="text-base-content">[Full legal name]</strong>
              <br />
              [Street and house number]
              <br />
              [Postal code and city]
              <br />
              [Country]
            </address>
            <p className="leading-relaxed text-base-content/75">
              This website is a demonstration project created for educational
              purposes. It is not an official website of the Republic of Poland
              or a tourism authority.
            </p>
          </div>
        </section>

        <section className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title font-serif text-2xl text-primary">
              Contact
            </h2>
            <address className="not-italic leading-relaxed text-base-content/75">
              Email:{' '}
              <span className="text-base-content">[email@example.com]</span>
              <br />
              Phone: <span className="text-base-content">[Phone number]</span>
            </address>
          </div>
        </section>

        <section className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title font-serif text-2xl text-primary">
              Editorial responsibility
            </h2>
            <address className="not-italic leading-relaxed text-base-content/75">
              [Full name]
              <br />
              [Street and house number]
              <br />
              [Postal code and city]
            </address>
          </div>
        </section>

        <section className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title font-serif text-2xl text-primary">
              Registration details
            </h2>
            <p className="leading-relaxed text-base-content/75">
              Register: [Register name, court, and number, if applicable]
              <br />
              VAT ID: [VAT identification number, if applicable]
            </p>
          </div>
        </section>

        <section className="card border border-base-300 bg-base-100 shadow-sm md:col-span-2">
          <div className="card-body">
            <h2 className="card-title font-serif text-2xl text-primary">
              Content and links
            </h2>
            <p className="leading-relaxed text-base-content/75">
              The content on this website has been prepared with care, but no
              guarantee is made that it is complete, accurate, or current.
              External websites are the responsibility of their respective
              operators.
            </p>
          </div>
        </section>

        <section className="card border border-base-300 bg-base-100 shadow-sm md:col-span-2">
          <div className="card-body">
            <h2 className="card-title font-serif text-2xl text-primary">
              Copyright
            </h2>
            <p className="leading-relaxed text-base-content/75">
              Text, design, and other original material on this website may not
              be reproduced or distributed without permission unless the
              applicable source or licence states otherwise. Third-party images
              and trademarks remain the property of their respective owners.
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}
