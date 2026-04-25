import React from "react";
import { Link } from "react-router-dom";

/* ---------- DATA ---------- */

const clinicalData = [
  { title: "Comparative Anatomy & Histology", desc: "Gross and microscopic structure, developmental anatomy, and morphological variation with clinical relevance." },
  { title: "Clinical Biochemistry", desc: "Biomarkers, metabolic profiles, enzyme analysis, endocrinology assays, and biochemical diagnostics." },
  { title: "Comparative Oncology", desc: "Tumor biology, carcinogenesis, therapeutics, and naturally occurring cancers as models." },
  { title: "Comparative Internal Medicine", desc: "Cardiology, endocrinology, nephrology, gastroenterology, neurology, and metabolic diseases." },
  { title: "Clinical Nutrition", desc: "Nutritional assessment, dietary management, therapeutic diets, and disease interactions." },
  { title: "Surgery & Anesthesiology", desc: "Surgical techniques, perioperative care, pain management, and innovations." },
  { title: "Pathology", desc: "Histopathology, cytology, hematology, coagulation, and lab medicine mechanisms." },
  { title: "Diagnostic Imaging", desc: "Radiography, ultrasonography, CT, MRI, and translational imaging techniques." },
  { title: "Microbiology & Infectious Agents", desc: "Bacteriology, virology, mycology, parasitology, diagnostics, and pathogenesis." },
  { title: "Immunology & Vaccinology", desc: "Immune responses, immunodiagnostics, vaccine development, and immunotherapies." },
  { title: "Pharmacology & Toxicology", desc: "Drug development, pharmacokinetics, adverse reactions, and environmental toxicants." },
  { title: "Reproductive Health", desc: "Fertility, pregnancy, pediatrics/neonatology, and developmental disorders." },
];

const specialtyData = [
  { title: "Dermatology", desc: "Skin disease, wound healing, and cutaneous manifestations." },
  { title: "Ophthalmology", desc: "Comparative eye disease, vision science, and innovations." },
  { title: "Dentistry & Oral Health", desc: "Periodontal disease, oral surgery, and oral-systemic links." },
  { title: "Orthopedics", desc: "Bone, joint, and soft-tissue disorders and rehabilitation." },
  { title: "Emergency & Critical Care", desc: "Resuscitation, trauma, sepsis, and ICU protocols." },
  { title: "Exotic & Wildlife", desc: "Clinical care and conservation medicine." },
  { title: "Zoo & Livestock Medicine", desc: "Species-specific diagnostics and welfare." },
];

const publicHealthData = [
  { title: "Animal Sciences", desc: "Livestock management, genetics, production health." },
  { title: "Zoonotic Diseases", desc: "Human-animal-environment disease control." },
  { title: "Antimicrobial Resistance (AMR)", desc: "Surveillance and molecular epidemiology." },
  { title: "Environmental Health", desc: "Climate change and ecosystem health impact." },
  { title: "Veterinary Public Health", desc: "Food safety and farm-to-clinic linkages." },
  { title: "Health Systems & Policy", desc: "Governance, economics, and collaboration models." },
];

const crossData = [
  { title: "Translational Biomedical Science", desc: "Diagnostics, therapeutics, and gene therapies." },
  { title: "Epidemiology & Data Science", desc: "Integrated surveillance and analytics." },
  { title: "Behavioral & Mental Health", desc: "Comparative psychiatry and human-animal bond." },
];

/* ---------- COMPONENT ---------- */

export default function JournalScope() {

  const renderGrid = (data, color) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

      {data.map((item, index) => (
        <div
          key={index}
          className={`bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm border-t-4 ${color}
          hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500
          opacity-0 animate-card`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">
            {item.title}
          </h4>

          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc]">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="w-10 md:w-12 h-[3px] bg-blue-600 mx-auto mb-4"></div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Journal Scope
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            J. Comp. Health Sci. welcomes submissions across a broad range of comparative and translational health sciences.
          </p>
        </div>

        {/* Sections */}
        <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-4 md:mb-6">
          Clinical & Biomedical Health Sciences — Human and Veterinary
        </h3>
        {renderGrid(clinicalData, "border-blue-500")}

        <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-4 md:mb-6">
          Specialty Health Sciences — Human and Veterinary
        </h3>
        {renderGrid(specialtyData, "border-green-500")}

        <h3 className="text-lg sm:text-xl font-semibold text-cyan-600 mb-4 md:mb-6">
          Public Health & One Health Sciences
        </h3>
        {renderGrid(publicHealthData, "border-cyan-500")}

        <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 mb-4 md:mb-6">
          Cross-cutting Research
        </h3>
        {renderGrid(crossData, "border-yellow-500")}

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-6 md:py-8 px-4 sm:px-6 rounded-lg shadow-lg text-center">

          <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
            We Particularly Encourage:
          </h3>

          <p className="text-sm sm:text-base md:text-lg mb-5">
            Studies co-authored by human & veterinary teams | Research from LMICs | Policy analyses | Method papers
          </p>

          <Link
            to="/submit-paper"
            className="inline-block bg-white text-blue-600 py-2.5 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Submit Your Work
          </Link>

        </div>

      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes cardFade {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-card {
            animation: cardFade 0.6s ease forwards;
          }
        `}
      </style>

    </section>
  );
}