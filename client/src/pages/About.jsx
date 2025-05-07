import React from 'react'
export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">Brick & Click - Real Estate Experts</h1>
      <p className="mb-4 text-slate-700">
      Brick & Click is a full-service real estate agency specializing in helping clients achieve their property goals in [City/Area] and surrounding areas. 
        Our team of experienced and passionate agents is dedicated to providing exceptional service 
        and making the buying, selling, or renting process as smooth and stress-free as possible.
      </p>
      <p className="mb-4 text-slate-700">
        We understand that buying or selling a property is a significant life decision. 
        That's why we go above and beyond to provide our clients with expert advice, 
        personalized service, and a deep understanding of the local market. 
        Whether you're a first-time homebuyer, a seasoned investor, or looking to relocate, 
        we're here to guide you every step of the way.
      </p>
      <p className="mb-4 text-slate-700">
        Our team of highly qualified agents possesses extensive experience and knowledge 
        in the local real estate market. We are committed to exceeding your expectations 
        and ensuring a positive and rewarding experience throughout the entire process.
      </p>

      {/* <h2>Meet Our Team</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Replace with your team member details */}
      </div>

      {/* <h2>Our Core Values</h2> */}

      <ul className="list-disc pl-4 space-y-2">
  <li>Client Focus: We prioritize your needs and goals above all else.</li>
  <li>Integrity: We conduct business with honesty and transparency.</li>
  <li>Expertise: We leverage our knowledge to deliver optimal results.</li>
</ul>

<h2 className="text-2xl font-bold mb-4">Proudly Serving [City/Area]</h2>
<p className="text-slate-700 mb-4">
  Brick & Click is committed to giving back to the community we serve. 
  We actively participate in [mention specific activities or partnerships].
</p>

<h2 className="text-2xl font-bold mb-4">Awards & Recognition</h2>
<p className="text-slate-700 mb-4">
  Brick & Click is honored to have received recognition for our dedication 
  to exceptional service. Some of our achievements include [list awards or recognition].
</p>

<p className="text-center mt-8">
  <a href="[link to contact page]" className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white">Contact Us Today</a>
  <a href="[link to property listings]" className="btn btn-secondary bg-gray-700 hover:bg-gray-800 text-white">Browse Properties</a>
</p>


    </div>
  );
}

