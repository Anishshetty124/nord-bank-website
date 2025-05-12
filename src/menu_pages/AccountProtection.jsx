import { Link } from "react-router-dom";

export default function AccountProtection() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        <Link
          to="/"
          className="mb-6 inline-block text-sm text-gray-600 hover:text-black transition"
        >
          ← Back to Home
        </Link>

        <h1 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-4">
          Account Protection Settings
        </h1>

        {/* Setting Option */}
        <SettingRow
          icon="🔐"
          title="Two-Factor Authentication"
          desc="Add an extra layer of security using 2FA."
          actionText="Enable"
        />
        <SettingRow
          icon="🔄"
          title="Account Recovery"
          desc="Configure backup email and security questions."
          actionText="Update"
        />
        <SettingRow
          icon="🚨"
          title="Security Alerts"
          desc="Be notified about suspicious activities."
          actionText="Enable"
        />
        <SettingRow
          icon="💻"
          title="Trusted Devices"
          desc="Manage devices with saved login access."
          actionText="Manage"
        />
        <SettingRow
          icon="📩"
          title="Login Notifications"
          desc="Receive email or SMS on every login."
          actionText="Enable"
        />
      </div>
    </div>
  );
}

function SettingRow({ icon, title, desc, actionText }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-start gap-4">
        <div className="text-xl">{icon}</div>
        <div>
          <p className="font-medium text-gray-800">{title}</p>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>
      <button className="px-4 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition">
        {actionText}
      </button>
    </div>
  );
}
