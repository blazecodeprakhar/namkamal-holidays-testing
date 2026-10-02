import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Compass, Headphones, Sliders, Star, CheckCircle, MessageSquare, Phone } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PackageCard } from '../components/PackageCard';
import { DestinationCard } from '../components/DestinationCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { DOMESTIC_DESTINATIONS, INTERNATIONAL_DESTINATIONS } from '../data/destinations';
import { PACKAGES_DATA } from '../data/packages';
import { CUSTOMER_REVIEWS } from '../data/reviews';
import { UserAvatar } from '../components/UserAvatar';
import { PcHeroSlider } from '../components/PcHeroSlider';

interface HomePageProps {
  onOpenEnquiry: (prefillDestination?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  const featuredPackages = PACKAGES_DATA.filter(p => p.isFeatured);

  return (
    <div>
      <SEOHead 
        title="Namkamal Holidays™ | Official Website - Your Journey Our Commitment"
        description="Discover India & International holiday packages with Namkamal Holidays. Explore Rajasthan, Kerala, Goa, Kashmir, Gujarat, Himachal, Dubai, Thailand, Bali, Singapore, Maldives & Switzerland."
      />

      {/* PC Hero Section - Image Slider only for PC / Desktop Users */}
      <section className="hidden md:block w-full">
        <PcHeroSlider onOpenEnquiry={onOpenEnquiry} />
      </section>

      {/* Phone/Mobile Hero Section - Kept unchanged for Mobile Users */}
      <section className="block md:hidden relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden bg-gray-950">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85" 
          alt="Namkamal Holidays Travel World"
          className="absolute inset-0 w-full h-full object-cover opacity-45 transform-gpu"
        />
        
        {/* Ambient Gradient Overlays & Light Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-black/30" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#F7941D]/20 to-[#E91E63]/20 rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 z-10">
          
          {/* Floating Savings Badge */}
          <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F7941D] text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 shadow-2xl animate-float">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Save More on Your Holidays
          </div>

          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6 animate-fade-in-up">
            <span className="block">Your Journey,</span>
            <span className="text-brand-gradient block">Our Commitment</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium mb-10 animate-fade-in-up animation-delay-100">
            Discover thoughtfully planned holidays, customized travel experiences, and seamless domestic & international travel assistance with Namkamal Holidays.
          </p>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#F7941D] to-[#E91E63] hover:opacity-95 text-white font-extrabold text-sm uppercase tracking-wider shadow-2xl transition-all hover:scale-105 active:scale-95 hover:shadow-orange-500/25"
            >
              Plan Your Trip Now
            </button>

            <a
              href="#featured-packages"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm border border-white/30 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Explore Packages <ArrowRight className="w-4 h-4 text-[#F7941D]" />
            </a>
          </div>

          {/* Key Stat Pills with Hover Lift */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left animate-fade-in-up animation-delay-300">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 hover-lift transition-all duration-300 hover:bg-white/20 hover:border-white/30 group">
              <span className="text-2xl font-extrabold text-[#F7941D] group-hover:scale-105 transition-transform inline-block">100%</span>
              <span className="text-xs text-gray-300 block font-medium">Customized Plans</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 hover-lift transition-all duration-300 hover:bg-white/20 hover:border-white/30 group">
              <span className="text-2xl font-extrabold text-[#E91E63] group-hover:scale-105 transition-transform inline-block">24/7</span>
              <span className="text-xs text-gray-300 block font-medium">Travel Assistance</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 hover-lift transition-all duration-300 hover:bg-white/20 hover:border-white/30 group">
              <span className="text-2xl font-extrabold text-[#F7941D] group-hover:scale-105 transition-transform inline-block">Best</span>
              <span className="text-xs text-gray-300 block font-medium">Price Guarantee</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 hover-lift transition-all duration-300 hover:bg-white/20 hover:border-white/30 group">
              <span className="text-2xl font-extrabold text-emerald-400 group-hover:scale-105 transition-transform inline-block">4.9★</span>
              <span className="text-xs text-gray-300 block font-medium">Google Rating</span>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Holiday Packages Section */}
      <section id="featured-packages" className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold text-[#E91E63] uppercase tracking-widest block mb-2">
                  Handcrafted Itineraries
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Featured Holiday Packages
                </h2>
              </div>
              <p className="text-sm text-gray-600 max-w-md mt-2 md:mt-0">
                Hand-picked best selling packages with exact named sightseeing points, premium hotels, and transparent pricing.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-8">
            {featuredPackages.map((pkg, idx) => (
              <ScrollReveal 
                key={pkg.id} 
                delay={idx * 40} 
                direction="up" 
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md"
              >
                <PackageCard pkg={pkg} onEnquire={onOpenEnquiry} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Domestic Destinations (India Flagship 6) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
                🇮🇳 Incredible India
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                Popular Domestic Destinations
              </h2>
              <p className="text-sm text-gray-600">
                Explore India's most famous holiday circuits: Rajasthan, Kerala, Goa, Kashmir, Gujarat & Himachal Pradesh.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-6">
            {DOMESTIC_DESTINATIONS.map((dest, idx) => (
              <ScrollReveal 
                key={dest.id} 
                delay={idx * 40} 
                direction="up" 
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm"
              >
                <DestinationCard destination={dest} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular International Destinations (Global Flagship 6) */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E91E63]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F7941D]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#E91E63] uppercase tracking-widest block mb-2">
                🌍 Worldwide Vacations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Popular International Destinations
              </h2>
              <p className="text-sm text-gray-400">
                Fly to exotic holiday spots around the world: Dubai, Thailand, Bali, Singapore, Maldives & Switzerland.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-6">
            {INTERNATIONAL_DESTINATIONS.map((dest, idx) => (
              <ScrollReveal 
                key={dest.id} 
                delay={idx * 40} 
                direction="up" 
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm"
              >
                <DestinationCard destination={dest} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Namkamal Holidays */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
                Our Core Strengths
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Why Choose Namkamal Holidays
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_INFO.whyChooseUs.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 40} direction="up">
                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F7941D] to-[#E91E63] text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    {idx === 0 && <Compass className="w-7 h-7" />}
                    {idx === 1 && <ShieldCheck className="w-7 h-7" />}
                    {idx === 2 && <Headphones className="w-7 h-7" />}
                    {idx === 3 && <Sliders className="w-7 h-7" />}
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-[#F7941D] transition-colors">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services (13 Services Grid) */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold text-[#E91E63] uppercase tracking-widest block mb-2">
                  Comprehensive Travel Assistance
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Our Travel Services
                </h2>
              </div>
              <Link to="/services" className="text-xs font-bold text-[#F7941D] hover:underline flex items-center gap-1 mt-2 md:mt-0">
                View All Travel Services Detailed →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.slice(0, 8).map((svc, idx) => (
              <ScrollReveal key={svc.id} delay={idx * 80} direction="up">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F7941D] group-hover:bg-gradient-to-r group-hover:from-[#F7941D] group-hover:to-[#E91E63] group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300 shadow-sm group-hover:scale-110">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-gray-900 mb-2 group-hover:text-[#F7941D] transition-colors">{svc.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{svc.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-2">
                Verified Google Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                What Our Travelers Say
              </h2>
              <p className="text-xs text-gray-500">
                Real reviews from delighted customers who traveled with Namkamal Holidays.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-8">
            {CUSTOMER_REVIEWS.slice(0, 3).map((rev, idx) => (
              <ScrollReveal 
                key={rev.id} 
                delay={idx * 40} 
                direction="up" 
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md"
              >
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-8 whitespace-pre-line">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <UserAvatar name={rev.author} avatarUrl={rev.avatar} />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{rev.author}</h4>
                      <span className="text-xs text-gray-500">{rev.location}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <a 
              href={COMPANY_INFO.socials.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all hover:scale-105"
            >
              View All Google Reviews <ArrowRight className="w-3.5 h-3.5 text-[#F7941D]" />
            </a>
          </div>
        </div>
      </section>

      {/* Premium CTA & Social Section (Seamless Dark Transition) */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950 text-white overflow-hidden border-t border-gray-800/80">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F7941D]/15 via-amber-500/10 to-[#E91E63]/15 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
          
          <ScrollReveal direction="up" className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold text-[#F7941D] uppercase tracking-widest">
              ✨ START YOUR ADVENTURE • FREE CONSULTATION
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Plan Your <span className="bg-gradient-to-r from-[#F7941D] via-amber-300 to-[#E91E63] bg-clip-text text-transparent">Next Vacation?</span>
            </h2>
            
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
              Direct support from <strong className="text-white">Mr. Shubham Bomble</strong> (<a href="tel:+919545399825" className="text-[#F7941D] hover:underline font-bold">+91 95453 99825</a>) – Contact the team at Namkamal Holidays today for customized itineraries and instant best price quotes!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#F7941D] to-[#E91E63] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Send Free Enquiry Now
              </button>

              <a
                href="tel:+919545399825"
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-black text-white border border-gray-700 font-extrabold text-xs rounded-full shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#F7941D]" /> Call +91 95453 99825
              </a>

              <a
                href={`https://wa.me/919545399825?text=Hello%20Namkamal%20Holidays`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs rounded-full shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp +91 95453 99825
              </a>
            </div>
          </ScrollReveal>

          {/* Social Media Strip */}
          <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h3 className="text-sm font-bold text-white mb-0.5">Follow Namkamal Holidays On Social Media</h3>
              <p className="text-xs text-gray-400">Stay updated with latest package deals, travel photos & holiday videos.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              <a 
                href={COMPANY_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 border border-gray-800 hover:border-pink-500/50 text-gray-200 hover:text-white rounded-full font-bold text-xs flex items-center gap-2 shadow-sm hover:scale-105 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-pink-500" /> Instagram @namkamal_holidays
              </a>

              <a 
                href={COMPANY_INFO.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 border border-gray-800 hover:border-red-500/50 text-gray-200 hover:text-white rounded-full font-bold text-xs flex items-center gap-2 shadow-sm hover:scale-105 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-red-500" /> YouTube Channel
              </a>

              <a 
                href={COMPANY_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 border border-gray-800 hover:border-blue-500/50 text-gray-200 hover:text-white rounded-full font-bold text-xs flex items-center gap-2 shadow-sm hover:scale-105 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500" /> Facebook Page
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
