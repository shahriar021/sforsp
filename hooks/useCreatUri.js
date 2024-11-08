import React, {useState, useEffect} from 'react';

const useCreateUri = () => {
  const [uri, setUri] = useState('');

  useEffect(() => {
    const generateUri = () => {
      const uid = 'sufalcollector'; // Fixed UID
      const timestamp = new Date().toISOString(); // Get the current timestamp
      const formattedUri = `uid:${uid}|${timestamp}`; // Combine the fixed UID and timestamp
      setUri(formattedUri); // Set the generated URI to state
    };

    generateUri(); // Call the function to generate the URI when the component mounts
  }, []); // Empty dependency array means this effect runs once on mount

  return uri; // Return the generated URI
};

export default useCreateUri;
