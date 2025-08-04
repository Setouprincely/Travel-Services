"use client";

import { useLanguage, LanguageSwitcher } from "@/contexts/language-context";

export default function TestI18nPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Internationalization Test
            </h1>
            <LanguageSwitcher />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Current Language: {language.toUpperCase()}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Navigation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t.nav.home}</li>
                  <li>• {t.nav.services}</li>
                  <li>• {t.nav.about}</li>
                  <li>• {t.nav.contact}</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600">Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t.services.visa.title}</li>
                  <li>• {t.services.study.title}</li>
                  <li>• {t.services.flights.title}</li>
                  <li>• {t.services.housing.title}</li>
                  <li>• {t.services.jobs.title}</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-600">Hero Section</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">{t.hero.title}</h4>
                <p className="text-gray-600 mt-2">{t.hero.description}</p>
                <div className="flex space-x-4 mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    {t.hero.cta1}
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                    {t.hero.cta2}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-600">Common Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                  {t.common.learnMore}
                </button>
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                  {t.common.getStarted}
                </button>
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                  {t.common.contactUs}
                </button>
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                  {t.common.apply}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-red-600">Contact Information</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>{t.contact.address}:</strong> {t.contact.address}</p>
                <p><strong>{t.contact.phone}:</strong> +237 123 456 789</p>
                <p><strong>{t.contact.email}:</strong> info@patricktravel.cm</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Instructions:</h4>
              <p className="text-blue-700">
                Click the language switcher above to toggle between English (EN) and French (FR). 
                All text should update immediately to reflect the selected language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
