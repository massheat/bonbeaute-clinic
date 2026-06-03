
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-bold">Bon Beaute Skin & Medical Clinic</h1>
        <p className="mt-6 text-xl">Advanced Skin & Aesthetic Treatments in DHA Lahore</p>
        <div className="mt-8 flex justify-center gap-4">
          <a className="rounded bg-black px-6 py-3 text-white" href="#contact">Book Appointment</a>
          <a className="rounded border px-6 py-3" href="https://wa.me/923250911113">WhatsApp</a>
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Popular Treatments</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Hydrafacial","Laser Hair Removal","PRP Therapy","Dermal Fillers","Carbon Facial","RF Skin Tightening"].map((t)=>(
            <div key={t} className="border rounded-xl p-6">
              <h3 className="font-semibold text-xl">{t}</h3>
              <p className="mt-2 text-gray-600">Professional treatment tailored to your needs.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">131+ Five-Star Reviews</h2>
          <p className="mt-4">Trusted by patients across DHA Lahore.</p>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="mt-4">DHA Phase 3, Lahore</p>
        <p>+92 325 0911113</p>
      </section>
    </main>
  );
}
