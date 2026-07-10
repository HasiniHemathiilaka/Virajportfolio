import React from 'react';

const CERT_DATA = [
  {
    title: "IBM DevOps and Software Engineering Professional Certificate",
    issuer: "Coursera",
    // ⬇️ REPLACE THE LINKS BELOW WITH YOUR ACTUAL URLS FROM YOUR CV ⬇️
    link: "https://www.coursera.org/account/accomplishments/specialization/OO8JNI7VM4HG" 
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    link: "https://www.credly.com/badges/2c8cb80d-e923-4ce3-a26f-e2a02f547720/linked_in_profile"
  },
  {
    title: "AWS Academy Training and Certification – Letter of Participation",
    issuer: "University of Moratuwa",
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:c610aace-80f6-4f9f-945a-e5528daa3cfa?viewer%21megaVerb=group-discover"
  },
  {
    title: "DevOps Capstone Project",
    issuer: "IBM / Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/84H4NRNHIA26"
  },
  {
    title: "Java Spring Boot with AI",
    issuer: "Elearning.lk",
    link: "https://elearning.lk/uploads/user/certificates/cbk46ddi2teseavi5zeg1760361967.jpg"
  },
  {
    title: "DevOps 101 Bootcamp",
    issuer: "Elearning.lk",
    link: "https://elearning.lk/uploads/user/certificates/iqnl1a62ylllzj8v7fkw1756885867.jpg"
  },
  {
    title: "GitHub Actions for CI/CD",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/13eb8597baf5d1b5d001548beb0fd69b52c2fc6d39cab1d00a34a01987c1fb08"
  },
  {
    title: "Go Standard Library",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/3a83483f175fa38d2deac7d3c2e118044cf21a0e8419d2b016e21ce1e67ae05b"
  },
  {
    title: "Learning Linux Command Line",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/fa651414451214a40b329bbc1c2b2d35712b7d0643b011c2655c149c465d9eac"
  },
  {
    title: "Azure Service Bus",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/992b7769d948298dc9a18baeb0de0f7472819250fdb3ddd002fdbd8fddb08d7c"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-20 glow-title">
        Licenses & <span className="text-[#00C2FF]">Certifications</span>
      </h2>

      <div className="relative border-l border-cyan-950 ml-4 md:ml-6 space-y-8">
        {CERT_DATA.map((cert, index) => (
          <div key={index} className="relative pl-8 group">
            
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#030712] border-2 border-[#00C2FF] shadow-[0_0_8px_#00C2FF] group-hover:bg-[#00C2FF] transition duration-300" />
            
            <div className="bg-[#111827]/40 border border-gray-900/60 p-5 rounded-2xl hover:border-cyan-500/20 transition-all duration-300">
              <div className="flex flex-wrap justify-between items-center gap-4">
                
                <div className="flex-1 min-w-[250px]">
                  <div className="flex items-center gap-2 text-white font-medium text-base group-hover:text-[#00C2FF] transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00C2FF] shrink-0">
                      <circle cx="12" cy="8" r="7"/>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                    </svg>
                    <h3>{cert.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mt-1 pl-6 font-light">{cert.issuer}</p>
                </div>

                <div className="pl-6 md:pl-0">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-cyan-950/20 text-[#00C2FF] border border-cyan-950 hover:bg-[#00C2FF] hover:text-black transition duration-300 cursor-pointer"
                  >
                    Verify
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" x2="21" y1="14" y2="3"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}