import React from "react";
import { Card } from "../components/ui/card";

function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back to your dashboard</p>
      </div>

      <Card className="bg-white p-8 border-0 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
          <p className="text-sm text-gray-500 mt-1">Your scheduled events</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
            <div>
              <p className="font-semibold text-gray-900">Event 1</p>
              <p className="text-sm text-gray-500">Today at 2:00 PM</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Scheduled</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
            <div>
              <p className="font-semibold text-gray-900">Event 2</p>
              <p className="text-sm text-gray-500">Tomorrow at 10:00 AM</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Scheduled</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
            <div>
              <p className="font-semibold text-gray-900">Event 3</p>
              <p className="text-sm text-gray-500">Next Friday at 3:00 PM</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Scheduled</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default HomePage;
