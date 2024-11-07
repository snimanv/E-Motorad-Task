import React, { useState } from 'react';

const AddProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to submit profile data
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Add Profile</button>
      {isOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <h3>Add Profile</h3>
            <label>Basic Info</label>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Contact" />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddProfile;