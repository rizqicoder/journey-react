import { Link } from "react-router";

export default function Home() {
  return <>
    <div className="w-full bg-linear-to-b from-blue-50/60 to-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          Platform Karir Impianmu
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          Temukan Pekerjaan Ideal & <br className="hidden sm:inline" />
          <span className="text-blue-600">Kembangkan Karirmu</span> Hari Ini
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Jelajahi ribuan lowongan kerja terbaru dari perusahaan terkemuka. Mulai langkah pertama menuju masa depan yang lebih cerah.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            to="/list-job"
            className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all text-center"
          >
            Cari Lowongan
          </Link>
          <Link
            to="/create-job"
            className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all text-center"
          >
            Pasang Lowongan Kerja
          </Link>
        </div>

        {/* Key Features / Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200/80 max-w-3xl mx-auto">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">10,000+</p>
            <p className="text-sm text-gray-500 font-medium mt-1">Lowongan Aktif</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">500+</p>
            <p className="text-sm text-gray-500 font-medium mt-1">Perusahaan Mitranya</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">24/7</p>
            <p className="text-sm text-gray-500 font-medium mt-1">Update Harian</p>
          </div>
        </div>
      </div>
    </div>
  </>
}