
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Clock, MapPin, Car, User, Home } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const transactions = [
    {
      id: 1,
      date: 'Jun 15, 2023',
      time: '09:32 AM',
      location: 'Highway 101, San Francisco',
      amount: '$3.50',
      distance: '12.5 km',
    },
    {
      id: 2,
      date: 'Jun 13, 2023',
      time: '02:15 PM',
      location: 'Bay Bridge, San Francisco',
      amount: '$6.00',
      distance: '8.2 km',
    },
    {
      id: 3,
      date: 'Jun 10, 2023',
      time: '11:45 AM',
      location: 'Golden Gate Bridge, San Francisco',
      amount: '$8.50',
      distance: '2.7 km',
    },
    {
      id: 4,
      date: 'Jun 07, 2023',
      time: '08:20 AM',
      location: 'Highway 280, San Jose',
      amount: '$4.25',
      distance: '15.3 km',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-lg font-bold">TollEase</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-1 text-sm text-gray-500">
                <User className="w-4 h-4" />
                <span>john.doe@example.com</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="font-medium text-gray-700">JD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid md:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                  activeTab === 'overview'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setActiveTab('transactions')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                  activeTab === 'transactions'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Clock className="w-5 h-5" />
                <span>Transactions</span>
              </button>
              <button
                onClick={() => setActiveTab('payment')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                  activeTab === 'payment'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                <span>Payment Methods</span>
              </button>
              <button
                onClick={() => setActiveTab('vehicles')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                  activeTab === 'vehicles'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Car className="w-5 h-5" />
                <span>My Vehicles</span>
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                  activeTab === 'map'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <MapPin className="w-5 h-5" />
                <span>Map View</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {activeTab === 'overview' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Total Spent This Month</div>
                        <div className="text-3xl font-bold">$42.75</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      <span className="text-green-500 font-medium">↓ 12%</span> from last month
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Total Distance</div>
                        <div className="text-3xl font-bold">182.5 km</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Car className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      <span className="text-green-500 font-medium">↑ 8%</span> from last month
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Toll Crossings</div>
                        <div className="text-3xl font-bold">24</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      <span className="text-green-500 font-medium">↑ 4%</span> from last month
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-gray-500 text-sm border-b">
                          <th className="pb-3 font-medium">Date</th>
                          <th className="pb-3 font-medium">Time</th>
                          <th className="pb-3 font-medium">Location</th>
                          <th className="pb-3 font-medium">Distance</th>
                          <th className="pb-3 font-medium text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((tx) => (
                          <tr key={tx.id} className="border-b last:border-0">
                            <td className="py-4">{tx.date}</td>
                            <td>{tx.time}</td>
                            <td>{tx.location}</td>
                            <td>{tx.distance}</td>
                            <td className="text-right font-medium">{tx.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-right">
                    <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
                      View All Transactions
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Toll Map</h2>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500">Map View Coming Soon</div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'transactions' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
                <div className="text-gray-500">Detailed transactions view coming soon...</div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
                <div className="text-gray-500">Payment methods view coming soon...</div>
              </div>
            )}

            {activeTab === 'vehicles' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">My Vehicles</h2>
                <div className="text-gray-500">Vehicles view coming soon...</div>
              </div>
            )}

            {activeTab === 'map' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Map View</h2>
                <div className="text-gray-500">Map view coming soon...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
