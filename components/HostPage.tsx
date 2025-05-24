"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ThumbsUp,
  Filter,
  Users,
  Calendar,
  Tag,
  ChevronDown,
  Search,
  Sliders,
  Clock,
  Briefcase,
  Globe,
  Star as StarIcon,
  DollarSign,
  X,
} from "lucide-react";

// Host data - in a real application, this would come from an API or database
const hosts = [
  {
    id: 1,
    name: "Anita Wijaya",
    avatar: "/host/ayas.png",
    specialty: "Beauty & Fashion",
    rating: 4.9,
    reviews: 128,
    languages: ["Indonesian", "English"],
    experience: "3+ years",
    engagement: "High",
    bio: "Professional beauty influencer specializing in skincare and makeup tutorials. Known for creating engaging product demonstrations with high conversion rates.",
    availability: "Weekends",
    featuredIn: ["SephoraLive", "BeautyFest Asia"],
    popular: true,
    hourlyRate: "Rp 800.000",
  },
  {
    id: 2,
    name: "Budi Santoso",
    avatar: "/host/sindi.png",
    specialty: "Electronics & Tech",
    rating: 4.8,
    reviews: 97,
    languages: ["Indonesian", "English", "Mandarin"],
    experience: "4+ years",
    engagement: "Very High",
    bio: "Tech expert with background in electronic engineering. Skilled at explaining technical features in simple terms to drive customer interest.",
    availability: "Weekdays/Evenings",
    featuredIn: ["TechWeek Jakarta", "Gadget Show 2024"],
    popular: false,
    hourlyRate: "Rp 900.000",
  },
  {
    id: 3,
    name: "Citra Damayanti",
    avatar: "/host/ayas.png",
    specialty: "Home & Lifestyle",
    rating: 4.7,
    reviews: 83,
    languages: ["Indonesian", "English"],
    experience: "2+ years",
    engagement: "High",
    bio: "Interior designer turned lifestyle host. Creates immersive product experiences focusing on home goods and decorative items.",
    availability: "Flexible",
    featuredIn: ["HomeLiving Expo", "DesignWeek Indonesia"],
    popular: false,
    hourlyRate: "Rp 750.000",
  },
  {
    id: 4,
    name: "Dimas Pramudya",
    avatar: "/host/sindi.png",
    specialty: "Food & Cooking",
    rating: 5.0,
    reviews: 152,
    languages: ["Indonesian", "English", "Japanese"],
    experience: "5+ years",
    engagement: "Very High",
    bio: "Professional chef and culinary educator. Expert at demonstrating cooking equipment and food products with mouthwatering presentations.",
    availability: "Weekends/Evenings",
    featuredIn: ["Jakarta Culinary Festival", "FoodTech Summit"],
    popular: true,
    hourlyRate: "Rp 950.000",
  },
  {
    id: 5,
    name: "Elsa Maharani",
    avatar: "/host/ayas.png",
    specialty: "Health & Wellness",
    rating: 4.8,
    reviews: 76,
    languages: ["Indonesian", "English"],
    experience: "3+ years",
    engagement: "Medium-High",
    bio: "Certified fitness trainer and wellness coach. Specializes in supplements, fitness equipment and wellness products with authentic testimonials.",
    availability: "Mornings/Weekends",
    featuredIn: ["Wellness Summit Asia", "FitFest 2024"],
    popular: false,
    hourlyRate: "Rp 850.000",
  },
  {
    id: 6,
    name: "Fajar Ramadhan",
    avatar: "/host/sindi.png",
    specialty: "Fashion & Accessories",
    rating: 4.9,
    reviews: 112,
    languages: ["Indonesian", "English", "French"],
    experience: "4+ years",
    engagement: "High",
    bio: "Fashion stylist with background in luxury retail. Creates sophisticated presentations for fashion items with styling tips included.",
    availability: "Weekdays/Evenings",
    featuredIn: ["Jakarta Fashion Week", "Style Summit"],
    popular: true,
    hourlyRate: "Rp 900.000",
  },
];

export default function HostsPage() {
  const [filteredHosts, setFilteredHosts] = useState(hosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

  // Filter states
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [priceRange, setPriceRange] = useState([700000, 1000000]);
  const [showPopularOnly, setShowPopularOnly] = useState(false);
  const [activeFilters, setActiveFilters] = useState(0);

  // NEW: Sort state
  const [sortOption, setSortOption] = useState("Relevance");

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  // Get unique values for filters
  const specialties = ["All", ...new Set(hosts.map((host) => host.specialty))];
  const availabilities = [
    "All",
    ...new Set(hosts.map((host) => host.availability)),
  ];
  const allLanguages = Array.from(
    new Set(hosts.flatMap((host) => host.languages))
  );
  const languages = ["All", ...allLanguages];
  const experiences = [
    "All",
    "1+ years",
    "2+ years",
    "3+ years",
    "4+ years",
    "5+ years",
  ];
  const ratings = ["All", "4.5+", "4.7+", "4.8+", "4.9+", "5.0"];

  // Function to convert price string to number
  const priceToNumber = (priceStr: any) => {
    return parseInt(priceStr.replace(/\D/g, ""));
  };

  // Function to convert number to price string
  const numberToPrice = (num: any) => {
    return `Rp ${num.toLocaleString("id-ID")}`;
  };

  // Format price range for display
  const formatPriceRange = () => {
    return `${numberToPrice(priceRange[0])} - ${numberToPrice(priceRange[1])}`;
  };

  // Count active filters
  useEffect(() => {
    let count = 0;
    if (selectedSpecialty !== "All") count++;
    if (selectedAvailability !== "All") count++;
    if (selectedLanguage !== "All") count++;
    if (selectedExperience !== "All") count++;
    if (selectedRating !== "All") count++;
    if (priceRange[0] !== 700000 || priceRange[1] !== 1000000) count++;
    if (showPopularOnly) count++;
    setActiveFilters(count);
  }, [
    selectedSpecialty,
    selectedAvailability,
    selectedLanguage,
    selectedExperience,
    selectedRating,
    priceRange,
    showPopularOnly,
  ]);

  // Reset all filters
  const resetFilters = () => {
    setSelectedSpecialty("All");
    setSelectedAvailability("All");
    setSelectedLanguage("All");
    setSelectedExperience("All");
    setSelectedRating("All");
    setPriceRange([700000, 1000000]);
    setShowPopularOnly(false);
    setSearchTerm(""); // Also reset search term
    setSortOption("Relevance"); // Reset sort option
  };

  // Filter and Sort hosts based on all criteria
  useEffect(() => {
    let results = [...hosts]; // Create a mutable copy

    // 1. Filter by search term
    if (searchTerm) {
      results = results.filter(
        (host) =>
          host.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          host.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
          host.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Filter by specialty
    if (selectedSpecialty !== "All") {
      results = results.filter((host) => host.specialty === selectedSpecialty);
    }

    // 3. Filter by availability
    if (selectedAvailability !== "All") {
      results = results.filter((host) =>
        host.availability.includes(selectedAvailability)
      );
    }

    // 4. Filter by language
    if (selectedLanguage !== "All") {
      results = results.filter((host) =>
        host.languages.includes(selectedLanguage)
      );
    }

    // 5. Filter by experience
    if (selectedExperience !== "All") {
      const requiredYears = parseInt(selectedExperience);
      results = results.filter((host) => {
        const hostYears = parseInt(host.experience);
        return hostYears >= requiredYears;
      });
    }

    // 6. Filter by rating
    if (selectedRating !== "All") {
      const minRating = parseFloat(selectedRating);
      results = results.filter((host) => host.rating >= minRating);
    }

    // 7. Filter by price range
    results = results.filter((host) => {
      const hostPrice = priceToNumber(host.hourlyRate);
      return hostPrice >= priceRange[0] && hostPrice <= priceRange[1];
    });

    // 8. Filter by popular status
    if (showPopularOnly) {
      results = results.filter((host) => host.popular);
    }

    // 9. Apply Sorting
    results.sort((a, b) => {
      switch (sortOption) {
        case "Rating (High to Low)":
          return b.rating - a.rating;
        case "Price (Low to High)":
          return priceToNumber(a.hourlyRate) - priceToNumber(b.hourlyRate);
        case "Price (High to Low)":
          return priceToNumber(b.hourlyRate) - priceToNumber(a.hourlyRate);
        case "Experience":
          // Assuming "X+ years" where X is a number
          return parseInt(b.experience) - parseInt(a.experience);
        case "Relevance":
        default:
          // For relevance, you might keep the original order or apply
          // a more complex relevance score based on search term matches, etc.
          // For now, it simply maintains the filtered order.
          return 0; // No change in order for "Relevance"
      }
    });

    setFilteredHosts(results);
  }, [
    searchTerm,
    selectedSpecialty,
    selectedAvailability,
    selectedLanguage,
    selectedExperience,
    selectedRating,
    priceRange,
    showPopularOnly,
    sortOption, // IMPORTANT: Add sortOption to dependencies
  ]);

  // Filter Components
  type RenderFilterSectionProps = {
    title: string;
    icon: React.ReactNode;
    options: string[];
    selectedValue: string;
    setterFunction: (value: string) => void;
  };

  const renderFilterSection = (
    title: RenderFilterSectionProps["title"],
    icon: RenderFilterSectionProps["icon"],
    options: RenderFilterSectionProps["options"],
    selectedValue: RenderFilterSectionProps["selectedValue"],
    setterFunction: RenderFilterSectionProps["setterFunction"]
  ) => {
    return (
      <div className="mb-6">
        <div className="flex items-center text-white mb-3">
          {icon}
          <span className="ml-2 font-medium">{title}</span>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => setterFunction(option)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedValue === option
                    ? "bg-yellow-500 text-emerald-900 font-medium"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                } transition-colors`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render filter panel (now always for the sidebar)
  const renderFilterPanelContent = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-emerald-700/30 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Filter Hosts</h3>
        {activeFilters > 0 && (
          <button
            onClick={resetFilters}
            className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center"
          >
            <span>Reset All</span>
            <span className="ml-2 bg-yellow-500 text-emerald-900 rounded-full px-2 py-0.5 text-xs font-medium">
              {activeFilters}
            </span>
          </button>
        )}
        <button
          onClick={() => setIsFilterSidebarOpen(false)}
          className="lg:hidden text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Active Filters Display */}
      {activeFilters > 0 && (
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">Active filters:</p>
          <div className="flex flex-wrap gap-2">
            {selectedSpecialty !== "All" && (
              <div className="bg-emerald-700/40 text-white text-xs rounded-full px-3 py-1 flex items-center">
                <span>{selectedSpecialty}</span>
                <button
                  onClick={() => setSelectedSpecialty("All")}
                  className="ml-2 hover:text-yellow-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {selectedAvailability !== "All" && (
              <div className="bg-emerald-700/40 text-white text-xs rounded-full px-3 py-1 flex items-center">
                <span>{selectedAvailability}</span>
                <button
                  onClick={() => setSelectedAvailability("All")}
                  className="ml-2 hover:text-yellow-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {selectedLanguage !== "All" && (
              <div className="bg-emerald-700/40 text-white text-xs rounded-full px-3 py-1 flex items-center">
                <span>{selectedLanguage}</span>
                <button
                  onClick={() => setSelectedLanguage("All")}
                  className="ml-2 hover:text-yellow-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {selectedExperience !== "All" && (
              <div className="bg-emerald-700/40 text-white text-xs rounded-full px-3 py-1 flex items-center">
                <span>{selectedExperience}</span>
                <button
                  onClick={() => setSelectedExperience("All")}
                  className="ml-2 hover:text-yellow-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {selectedRating !== "All" && (
              <div className="bg-emerald-700/40 text-white text-xs rounded-full px-3 py-1 flex items-center">
                <span>{selectedRating}+ rating</span>
                <button
                  onClick={() => setSelectedRating("All")}
                  className="ml-2 hover:text-yellow-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {(priceRange[0] !== 700000 || priceRange[1] !== 1000000) && (
              <div className="bg-emerald-700/40 text-white text-xs rounded-full px-3 py-1 flex items-center">
                <span>{formatPriceRange()}</span>
                <button
                  onClick={() => setPriceRange([700000, 1000000])}
                  className="ml-2 hover:text-yellow-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {showPopularOnly && (
              <div className="bg-emerald-700/40 text-white text-xs rounded-full px-3 py-1 flex items-center">
                <span>Top Performers</span>
                <button
                  onClick={() => setShowPopularOnly(false)}
                  className="ml-2 hover:text-yellow-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Specialty Filter */}
      {renderFilterSection(
        "Specialty",
        <Briefcase className="h-4 w-4" />,
        specialties,
        selectedSpecialty,
        setSelectedSpecialty
      )}

      {/* Availability Filter */}
      {renderFilterSection(
        "Availability",
        <Clock className="h-4 w-4" />,
        availabilities,
        selectedAvailability,
        setSelectedAvailability
      )}

      {/* Language Filter */}
      {renderFilterSection(
        "Language",
        <Globe className="h-4 w-4" />,
        languages,
        selectedLanguage,
        setSelectedLanguage
      )}

      {/* Experience Filter */}
      {renderFilterSection(
        "Experience",
        <Briefcase className="h-4 w-4" />,
        experiences,
        selectedExperience,
        setSelectedExperience
      )}

      {/* Rating Filter */}
      {renderFilterSection(
        "Rating",
        <StarIcon className="h-4 w-4" />,
        ratings,
        selectedRating,
        setSelectedRating
      )}

      {/* Price Range Filter */}
      <div className="mb-6">
        <div className="flex items-center text-white mb-3">
          <DollarSign className="h-4 w-4" />
          <span className="ml-2 font-medium">Price Range</span>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex justify-between text-sm mb-3">
            <span className="text-gray-300">
              {numberToPrice(priceRange[0])}
            </span>
            <span className="text-gray-300">
              {numberToPrice(priceRange[1])}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setPriceRange([700000, 800000])}
              className={`px-3 py-1 rounded-full text-sm ${
                priceRange[0] === 700000 && priceRange[1] === 800000
                  ? "bg-yellow-500 text-emerald-900 font-medium"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              } transition-colors`}
            >
              &lt; Rp 800K
            </button>
            <button
              onClick={() => setPriceRange([800000, 900000])}
              className={`px-3 py-1 rounded-full text-sm ${
                priceRange[0] === 800000 && priceRange[1] === 900000
                  ? "bg-yellow-500 text-emerald-900 font-medium"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              } transition-colors`}
            >
              Rp 800K - 900K
            </button>
            <button
              onClick={() => setPriceRange([900000, 1000000])}
              className={`px-3 py-1 rounded-full text-sm ${
                priceRange[0] === 900000 && priceRange[1] === 1000000
                  ? "bg-yellow-500 text-emerald-900 font-medium"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              } transition-colors`}
            >
              &gt; Rp 900K
            </button>
            <button
              onClick={() => setPriceRange([700000, 1000000])}
              className={`px-3 py-1 rounded-full text-sm ${
                priceRange[0] === 700000 && priceRange[1] === 1000000
                  ? "bg-yellow-500 text-emerald-900 font-medium"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              } transition-colors`}
            >
              All
            </button>
          </div>
        </div>
      </div>

      {/* Popular Only Toggle */}
      <div className="mb-6">
        <div className="flex items-center text-white mb-3">
          <Star className="h-4 w-4" />
          <span className="ml-2 font-medium">Top Performers</span>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <button
            onClick={() => setShowPopularOnly(!showPopularOnly)}
            className={`px-3 py-1 rounded-full text-sm ${
              showPopularOnly
                ? "bg-yellow-500 text-emerald-900 font-medium"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            } transition-colors`}
          >
            {showPopularOnly ? "Show All" : "Show Top Performers Only"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-emerald-900 to-emerald-950 min-h-screen relative">
      {/* Hero Section */}
      <motion.div
        className="container mx-auto px-4 md:px-8 text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Professional Hosts
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          Browse our curated selection of trained live commerce hosts ready to
          elevate your brand's online presence and boost your sales through
          engaging live streams.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Search Bar and Filter Button */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, specialty or keywords..."
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Filter Button */}
          <button
            onClick={() => setIsFilterSidebarOpen(true)}
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-medium py-3 px-5 rounded-lg transition-colors flex-shrink-0"
          >
            <Filter className="h-5 w-5" />
            <span>Filter</span>
            {activeFilters > 0 && (
              <span className="ml-1 bg-yellow-500 text-emerald-900 rounded-full px-2 py-0.5 text-xs font-medium">
                {activeFilters}
              </span>
            )}
          </button>
        </motion.div>

        {/* Main Content - Hosts Grid */}
        <motion.div
          className="w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Results Count and Sort Dropdown */}
          <div className="flex justify-between items-center mb-6 text-white">
            <p className="text-lg">
              Showing <span className="font-bold">{filteredHosts.length}</span>{" "}
              hosts
            </p>

            <div className="hidden lg:block">
              <select
                className="bg-white/10 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={sortOption} // Bind value to state
                onChange={(e) => setSortOption(e.target.value)} // Update state on change
              >
                <option>Relevance</option>
                <option>Rating (High to Low)</option>
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
                <option>Experience</option>
              </select>
            </div>
          </div>

          {/* Host Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHosts.map((host) => (
              <motion.div
                key={host.id}
                variants={cardVariants}
                className={`bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border ${
                  host.popular ? "border-yellow-500" : "border-emerald-700/30"
                }`}
              >
                {host.popular && (
                  <div className="bg-yellow-500 text-emerald-900 text-xs font-bold px-3 py-1 text-center">
                    TOP PERFORMER
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {/* Avatar with placeholder */}
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-yellow-500">
                      <Image
                        src={host.avatar}
                        alt={`${host.name}'s avatar`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {host.name}
                      </h3>
                      <p className="text-yellow-400 font-medium">
                        {host.specialty}
                      </p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 text-white">{host.rating}</span>
                        <span className="mx-1 text-gray-400">•</span>
                        <span className="text-gray-300">
                          {host.reviews} reviews
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{host.bio}</p>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-300 text-sm">Languages: </span>
                      <span className="ml-1 text-white text-sm">
                        {host.languages.join(", ")}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-300 text-sm">
                        Experience:{" "}
                      </span>
                      <span className="ml-1 text-white text-sm">
                        {host.experience}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <Tag className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-300 text-sm">Rate: </span>
                      <span className="ml-1 text-white font-medium text-sm">
                        {host.hourlyRate}/hour
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href={`/hosts/${host.id}`}
                      className="flex-1 block bg-transparent border border-white text-white hover:bg-white hover:text-emerald-900 font-medium py-2 px-4 rounded-lg transition-colors text-center text-sm"
                    >
                      View Profile
                    </Link>

                    <Link
                      href={`/hire?host=${host.id}`}
                      className="flex-1 block bg-yellow-500 hover:bg-yellow-600 text-emerald-900 font-medium py-2 px-4 rounded-lg transition-colors text-center text-sm"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredHosts.length === 0 && (
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-2">
                  No hosts found
                </h3>
                <p className="text-gray-300">
                  Try adjusting your search or filters to find the perfect host
                  for your needs.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 bg-yellow-500 text-emerald-900 px-4 py-2 rounded-lg font-medium"
                >
                  Reset All Filters
                </button>
              </div>
            </motion.div>
          )}

          {/* Custom Request Section */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold text-white">
                    Can't find what you're looking for?
                  </h3>
                  <p className="mt-2 text-sm text-gray-200">
                    We can help you find the perfect host for your specific
                    needs. Our team will work with you to understand your
                    requirements and match you with the ideal talent.
                  </p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                  <Link
                    href="/contact"
                    className="bg-yellow-500 hover:bg-yellow-600 text-emerald-900 font-medium py-2 px-5 rounded-lg transition-colors text-sm"
                  >
                    Request Custom Match
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Filter Sidebar (Off-canvas) */}
      <AnimatePresence>
        {isFilterSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-emerald-900 z-50 p-6 shadow-xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {renderFilterPanelContent()}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
