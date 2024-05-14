import React, { useState } from 'react';
import { HiUser, HiOutlineBell, HiLockClosed, HiCog, HiOutlineSave, HiOutlineX } from 'react-icons/hi';

const SettingsPage = () => {
  const [accountSettings, setAccountSettings] = useState({
    username: '',
    email: '',
    password: '',
    profilePicture: ''
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    inAppNotifications: true
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    messagePrivacy: 'everyone'
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    passwordRequirements: {
      minLength: 8,
      requireSpecialChar: true,
      requireNumber: true
    }
  });

  const [preferencesSettings, setPreferencesSettings] = useState({
    language: 'English',
    theme: 'Light'
  });

  const handleSave = () => {
    // Handle saving settings
  };

  const handleCancel = () => {
    // Handle canceling changes
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Account Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <HiUser className="mr-2 w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-semibold">Account</h2>
          </div>
          {/* Individual Account Settings Items */}
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium mb-2">Username</label>
            <input
              id="username"
              type="text"
              className="block w-full border border-gray-300 rounded-md p-2"
              value={accountSettings.username}
              onChange={(e) => setAccountSettings({...accountSettings, username: e.target.value})}
            />
          </div>
          {/* Email, Password, Profile Picture */}
          {/* Repeat similar structure for other account settings */}
        </div>

        {/* Notifications Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <HiOutlineBell className="mr-2 w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          {/* Individual Notification Settings Items */}
          {/* Example Checkbox */}
          {/* Repeat similar structure for other notification settings */}
        </div>

        {/* Privacy Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <HiLockClosed className="mr-2 w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-semibold">Privacy</h2>
          </div>
          {/* Individual Privacy Settings Items */}
          {/* Repeat similar structure for other privacy settings */}
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <HiLockClosed className="mr-2 w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-semibold">Security</h2>
          </div>
          {/* Individual Security Settings Items */}
          {/* Repeat similar structure for other security settings */}
        </div>

        {/* Preferences Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <HiCog className="mr-2 w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-semibold">Preferences</h2>
          </div>
          {/* Individual Preferences Settings Items */}
          {/* Repeat similar structure for other preferences settings */}
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex justify-end mt-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSave}>
          <HiOutlineSave className="mr-2 w-6 h-6" /> Save
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md" onClick={handleCancel}>
          <HiOutlineX className="mr-2 w-6 h-6" /> Cancel
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
