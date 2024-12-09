import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>© {new Date().getFullYear()}Muhaimin Asif. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
