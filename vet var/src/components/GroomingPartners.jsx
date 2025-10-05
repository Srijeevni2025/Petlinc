export default function GroomingPartners() {
  const partners = [
    { name: "The Seattle Veterinary Hospital", logo: "https://tsvh.in/wp-content/uploads/2025/01/logo.tsvh_20250104_125440_0000-1-1.png" },
    { name: "Pink Paws", logo: "https://www.pinkpaws.co.in/rest/uploads/site/b51a1e8c-88bb-46c5-bdc1-f4a2bd86a9bf-.png" },
    { name: "vetic", logo: "https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/Footer/LogoandLocation.webp" },
    { name: "The Paw story", logo: "https://thepawstory.in/wp-content/uploads/2025/01/THE-PAW-STORY-LOGO.pdf.png" },
    { name: "Pawfect Style", logo: "https://cloud.vetster.com/images/vetster-logo-white-accent-pink.svg" },
  ];

  return (
    <section className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Trusted Grooming Partners ✂️
        </h2>
        <p className="mt-2 text-gray-600">
          Petlinc collaborates with the best grooming centers to care for your pets
        </p>

        {/* Marquee Animation */}
        <div className="overflow-hidden relative mt-12">
          <div className="flex gap-12 animate-scroll">
            {partners.concat(partners).map((p, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[150px] hover:scale-105 transition"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-24 w-24 object-contain mb-2"
                />
                {/* <p className="text-sm font-medium text-gray-700">{p.name}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
