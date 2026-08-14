'use client'

export default function StatCounter() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var sc_project=13342604;
            var sc_invisible=1;
            var sc_security="190a6a8b";
          `,
        }}
      />
      <script
        src="https://www.statcounter.com/counter/counter.js"
        async
      />
      <noscript>
        <div className="statcounter">
          <img
            className="statcounter"
            src="https://c.statcounter.com/13342604/0/190a6a8b/1/"
            alt="Web Analytics"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </noscript>
    </>
  )
}