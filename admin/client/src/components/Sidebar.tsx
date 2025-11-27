import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  ShoppingCart,
  Megaphone,
  Settings,
  ChevronDown,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "Orders", path: "/orders", icon: ShoppingCart },
    { name: "Broadcasts", path: "/broadcasts", icon: Megaphone },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="px-6 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
            </svg>
          </div>
           <span className="font-semibold text-gray-900">Panel Admin</span>
          <ChevronDown className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Search & Inbox */}
      <div className="px-6 py-4 space-y-3 border-b border-gray-200">
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="text-sm">Search</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 text-gray-700 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <span className="text-sm">Inbox</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                active
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Upcoming Events */}
      <div className="px-6 py-4 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
          Upcoming Events
        </h3>
        <div className="space-y-2">
          <div className="text-sm text-gray-900 font-medium hover:text-blue-600 cursor-pointer transition-colors">
            Bear Hug: Live in Concert
          </div>
          <div className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
            Viking People
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center gap-3 cursor-pointer group p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
            alt="Erica"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900">Erica</div>
            <div className="text-xs text-gray-500 truncate">
              erica@example.com
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
