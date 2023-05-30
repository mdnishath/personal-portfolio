import React from "react";

const ContactBox = ({ contact, icon: Icon }) => {
  return (
    <div className="flex items-center gap-4">
      <Icon className="text-2xl flex-shrink-0" />
      <p className="text-lg font-semibold break-all">{contact}</p>
    </div>
  );
};

export default ContactBox;
