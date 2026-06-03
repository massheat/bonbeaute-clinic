export default function Home() {
  const services = [
    "Hydrafacial",
    "Laser Hair Removal",
    "PRP Therapy",
    "Dermal Fillers",
    "Carbon Facial",
    "RF Skin Tightening",
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-pink-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Bon Beaute Skin & Medical Clinic
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Advanced Skin, Aesthetic & Medical Treatments in DHA Lahore
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="bg-black text-white px-8 py-4 rounded-full"
            >
              Book Appointment
            </a>

            <a
              href="https://wa.me/923250911113"
              target="_blank"
              className="border border-black px-8 py-4 rounded-full"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="mt-10 text-lg">
            ⭐ 5.0 Rating | 131+ Reviews | DHA Lahore
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our Popular Treatments
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {service}
                </h3>

                <p className="text-gray-600">
                  Personalized treatment plans designed for optimal results.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Real Patient Transformations
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white h-64 rounded-3xl shadow flex items-center justify-center">
              Before / After
            </div>

            <div className="bg-white h-64 rounded-3xl shadow flex items-center justify-center">
              Before / After
            </div>

            <div className="bg-white h-64 rounded-3xl shadow flex items-center justify-center">
              Before / After
            </div>
          </div>

        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">
            What Our Patients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-6">
              ⭐⭐⭐⭐⭐
              <p className="mt-4">
                Amazing Hydrafacial results and very professional team.
              </p>
            </div>

            <div className="border rounded-3xl p-6">
              ⭐⭐⭐⭐⭐
              <p className="mt-4">
                Excellent laser hair removal experience.
              </p>
            </div>

            <div className="border rounded-3xl p-6">
              ⭐⭐⭐⭐⭐
              <p className="mt-4">
                Highly recommended for skin rejuvenation treatments.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-black text-white py-24"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Book Your Consultation
          </h2>

          <p className="text-xl mb-8">
            DHA Phase 3, Lahore
          </p>

          <p className="text-lg mb-10">
            +92 325 0911113
          </p>

          <a
            href="https://wa.me/923250911113"
            target="_blank"
            className="bg-white text-black px-8 py-4 rounded-full"
          >
            Chat on WhatsApp
          </a>

        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/923250911113"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-xl"
      >
        WhatsApp
      </a>

    </main>
  );
}
