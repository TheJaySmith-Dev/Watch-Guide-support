import { 
  Clapperboard, 
  Play, 
  List, 
  Globe, 
  HelpCircle, 
  Smartphone, 
  Shield, 
  Zap,
  Info
} from "lucide-react";
import { DocCategory, NavLink } from "./types";

export const APP_VERSION = "1.2.0";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "How-To", path: "/how-to" },
  { label: "Troubleshooting", path: "/troubleshooting" },
  { label: "FAQ", path: "/faq" },
  { label: "Support", path: "/contact" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Privacy & Data", path: "/privacy" },
  { label: "Regional Availability", path: "/regional" },
];

export const DOCS_DATA: Record<string, DocCategory> = {
  "features": {
    id: "features",
    title: "Features Deep Dive",
    description: "Explore the powerful tools built into WatchGuide.",
    type: "grid",
    items: [
      {
        id: "trailers",
        title: "Trailers & Teasers",
        description: "Watch high-quality trailers inline without leaving the app.",
        icon: Play,
        content: "Trailers play automatically (if enabled in settings). Tap the video to toggle sound. You can swipe left or right on the video player to switch between different trailers and teasers available for that title."
      },
      {
        id: "ratings",
        title: "Dual Ratings System",
        description: "Aggregated scores from TMDb and OMDb.",
        icon: Zap,
        content: "We combine TMDb user scores with OMDb critical consensus to give you a balanced view. If a rating is missing, it usually means the data hasn't been aggregated yet for that specific title."
      },
      {
        id: "providers",
        title: "Where to Watch",
        description: "Regional streaming availability.",
        icon: Globe,
        content: "See exactly which services are streaming a title in your country. WatchGuide aggregates data from regional providers to help you decide where to watch."
      },
      {
        id: "seasons",
        title: "Seasons & Episodes",
        description: "Comprehensive guides for TV shows.",
        icon: List,
        content: "Browse by season. Tap a season card to view a detailed episode list, complete with air dates, runtimes, and individual episode ratings."
      },
      {
        id: "lists",
        title: "Lists & Tracking",
        description: "Save items for later.",
        icon: List,
        content: "Tap the bookmark icon on any movie or show card to add it to your Watchlist. You can access your saved items from the 'My List' tab in the bottom navigation bar."
      }
    ]
  },
  "how-to": {
    id: "how-to",
    title: "How-To Guides",
    description: "Step-by-step instructions for common tasks.",
    type: "list",
    items: [
      {
        id: "find-stream",
        title: "Find where to stream a movie or show",
        steps: [
          "Search for a title or select one from the home screen.",
          "Scroll down to the 'Where to Watch' section.",
          "Ensure your region is set correctly in Settings if options look wrong.",
          "View the list of available streaming services for your region."
        ]
      },
      {
        id: "check-ratings",
        title: "Check ratings and decide faster",
        steps: [
          "Open a movie detail page.",
          "Look below the title for the circular TMDb score and the star-based OMDb score.",
          "Tap the rating to read a short summary if available."
        ]
      },
      {
        id: "browse-cast",
        title: "Browse cast, crew, and person details",
        steps: [
          "On the detail page, scroll horizontally through the 'Cast' section.",
          "Tap on any actor's face to open their Profile.",
          "View their biography and other known credits."
        ]
      }
    ]
  },
  "troubleshooting": {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Solutions for common issues.",
    type: "list",
    items: [
      {
        id: "trailer-issues",
        title: "Trailers not playing or no audio",
        content: "If trailers fail to load, check your internet connection first. For audio issues, ensure your device is not in Silent Mode (switch on the side of iPhone) or tap the volume icon on the video player overlay."
      },
      {
        id: "missing-ratings",
        title: "Missing ratings or provider links",
        content: "Sometimes metadata providers update slower than real-time. Try pulling down on the screen to refresh the data. Check your Region Settings in the 'Settings' tab to ensure provider links match your location."
      },
      {
        id: "images-loading",
        title: "Images not loading",
        content: "This is usually a network connectivity issue. Toggle your Wi-Fi off and on again. If the problem persists, the image server (TMDb) might be experiencing a temporary outage."
      }
    ]
  },
  "faq": {
    id: "faq",
    title: "Frequently Asked Questions",
    description: "Common questions about WatchGuide.",
    type: "faq",
    items: [
      {
        id: "data-source",
        title: "Where does the data come from?",
        content: "WatchGuide uses The Movie Database (TMDb) for media details, images, and credits. Ratings summaries are supplemented by the Open Movie Database (OMDb). Streaming availability is powered by JustWatch via TMDb."
      },
      {
        id: "account",
        title: "Does the app require an account?",
        content: "No. WatchGuide stores your Watchlist and favorites locally on your device using on-device storage. We do not require a login."
      },
      {
        id: "incorrect-data",
        title: "How do I report incorrect data?",
        content: "Since we source data from TMDb, the best way to fix a typo or incorrect cast member is to contribute directly to The Movie Database at themoviedb.org."
      },
      {
        id: "privacy-brief",
        title: "Does the app collect personal data?",
        content: "We prioritize privacy. We do not track your search history or watchlist contents on our servers. See our Privacy Policy for details."
      }
    ]
  },
  "privacy": {
    id: "privacy",
    title: "Privacy & Data",
    description: "Your privacy is our priority.",
    type: "article",
    items: [
      {
        id: "privacy-overview",
        title: "Data Collection Overview",
        content: "WatchGuide is designed to be privacy-first. We do not store your watchlist, viewing history, or search queries on external servers. All personal preferences are stored locally on your device (iOS/iPadOS)."
      },
      {
        id: "third-party",
        title: "Third-Party Services",
        content: "The app communicates with TMDb and OMDb APIs to fetch content. When you play a trailer, the app embeds a YouTube player which may collect usage data subject to Google's privacy policy."
      }
    ]
  },
  "regional": {
    id: "regional",
    title: "Regional Availability",
    description: "How regions affect your experience.",
    type: "article",
    items: [
      {
        id: "region-impact",
        title: "Watch Providers",
        content: "Streaming rights vary by country. The 'Where to Watch' section is filtered based on the region you select in Settings. If you travel, remember to update this setting to see accurate local providers."
      }
    ]
  }
};