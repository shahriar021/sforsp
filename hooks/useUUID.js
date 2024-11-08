// import React, {useState, useEffect} from 'react';
// import {stringMd5} from 'react-native-quick-md5';

// const useUUID = () => {
//   const [uuid, setUUID] = useState('');
//   const [md5, setMD] = useState('');

//   const alphabet = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//   ];

//   const lowercaseAlphabet = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//   ];

//   const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   useEffect(() => {
//     const totalArray = [...alphabet, ...lowercaseAlphabet, ...numbers];
//     const shuffledValue = totalArray
//       .map(value => ({value, sort: Math.random()}))
//       .sort((a, b) => a.sort - b.sort)
//       .map(({value}) => value)
//       .slice(0, 62)
//       .join('');

//     const microseconds = (performance.now() * 1000).toString().slice(0, 10);
//     const updatedData = shuffledValue + microseconds;
//     const md5 = stringMd5(updatedData);
//     setUUID(md5);
//   }, []);

//   useEffect(() => {
//     const formatedMd5 = uuid => {
//       if (!uuid) return;
//       const data = `uuid:${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(
//         12,
//         16,
//       )}-${uuid.slice(16, 20)}-${uuid.slice(20, 32)}`;
//       setMD(data);
//     };
//     formatedMd5(uuid);
//   }, [uuid]);
//   return {md5};
// };

// export default useUUID;


























// ---------------------second approach------------------------------
// Custom hook to generate and format UUIDs
import React, {useState, useEffect} from 'react';
import {stringMd5} from 'react-native-quick-md5';

const useUUID = () => {
  const [initialUUID, setInitialUUID] = useState('');
  const [formattedInitialUUID, setFormattedInitialUUID] = useState('');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const numbers = '0123456789'.split('');

  // Pure function to generate a new UUID with "uuid:" prefix
  const generateUUID = () => {
    const totalArray = [...alphabet, ...lowercaseAlphabet, ...numbers];
    const shuffledValue = totalArray
      .map(value => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value)
      .slice(0, 62)
      .join('');

    const microseconds = (performance.now() * 1000).toString().slice(0, 10);
    const updatedData = shuffledValue + microseconds;
    const newUUID = stringMd5(updatedData);

    // Add the "uuid:" prefix to the generated UUID
    return `uuid:${newUUID.slice(0, 8)}-${newUUID.slice(8, 12)}-${newUUID.slice(
      12,
      16,
    )}-${newUUID.slice(16, 20)}-${newUUID.slice(20, 32)}`;
  };

  // Generate initial UUID on mount
  useEffect(() => {
    const uuid = generateUUID();
    setInitialUUID(uuid);

    // Format the initial UUID with "uuid:" prefix
    setFormattedInitialUUID(uuid);
  }, []);

  return {initialUUID: formattedInitialUUID, generateUUID};
};

export default useUUID;



