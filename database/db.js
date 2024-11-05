import SQLite from 'react-native-sqlite-storage';

export const database = SQLite.openDatabase(
  {
    name: 'myDatabase.db',
    location: 'default',
  },
  () => {
    console.log('Database opened');
  },
  error => console.error('Error opening database', error),
);
