import SQLite from 'react-native-sqlite-storage';
import {baseApi, token} from '../constants/base_api';

const database = SQLite.openDatabase(
  {
    name: 'myDatabase.db',
    location: 'default',
  },
  () => {
    // console.log('Database opened')
  },
  error => console.error('Error opening database', error),
);
//API Start
export const aspects_api = async () => {
  try {
    const response = await fetch(`${baseApi}/aspects?token=${token}`);
    const data = await response.json();
    console.log('Total aspects items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS aspects',
          [],
          () => {
            console.log('aspects table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS aspects (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('aspects table created successfully');
          },
          reject,
        );

        data.forEach(aspects => {
          tx.executeSql(
            'INSERT INTO aspects VALUES (?, ?, ?, ?, ?)',
            [
              aspects.id || null,
              aspects.name || null,
              aspects.name_bn || null,
              aspects.name_short || null,
              aspects.code || null,
            ],
            (_, resultSet) =>
              console.log('aspects data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting aspects data', error, aspects);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching aspects data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const aspects_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM aspects`, // Query the aspects table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying aspects`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start

export const aspects_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM aspects`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from aspects:', resultSet);

          try {
            await aspects_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from aspects`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
// export const aspects_api = () => {
//   fetch(`${baseApi}/aspects?token=${token}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log('Total aspects items from API:', data.length);

//       database.transaction(tx => {
//         // Drop the existing aspects table and recreate it
//         tx.executeSql(
//           'DROP TABLE IF EXISTS aspects',
//           [],
//           () => console.log('aspects Table dropped successfully'),
//           (_, error) => {
//             console.error('Error dropping aspects table', error);
//           },
//         );

//         tx.executeSql(
//           'CREATE TABLE IF NOT EXISTS aspects (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
//           [],
//           () => console.log('aspects table created successfully'),
//           (_, error) => {
//             console.error('Error creating aspects table', error);
//           },
//         );

//         // Insert data into the projectData table
//         data.forEach(aspects => {
//           tx.executeSql(
//             'INSERT INTO aspects VALUES (?, ?, ?, ?, ?)',
//             [
//               aspects.id || null,
//               aspects.name || null,
//               aspects.name_bn || null,
//               aspects.name_short || null,
//               aspects.code || null,
//             ],
//             (_, resultSet) =>
//               console.log('Project data inserted successfully', resultSet),
//             (_, error) => {
//               // console.log('you are offline')
//               console.error('Error inserting project data', error, project);
//             },
//           );
//         });
//       });
//     })
//     .catch(error => {
//       // console.log('you are offline')
//       console.error('Error fetching project data from API', error);
//     });
// };

// export const aspects_api = async () => {
//   try {
//     const response = await fetch(`${baseApi}/aspects?token=${token}`);
//     const data = await response.json();
//     console.log('Total aspects items from API:', data.length);

//     await new Promise((resolve, reject) => {
//       database.transaction(tx => {
//         tx.executeSql(
//           'DROP TABLE IF EXISTS aspects',
//           [],
//           () => {
//             console.log('Aspects table dropped successfully');
//           },
//           reject,
//         );

//         tx.executeSql(
//           'CREATE TABLE IF NOT EXISTS aspects (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
//           [],
//           () => {
//             console.log('Aspects table created successfully');
//           },
//           reject,
//         );

//         data.forEach(aspects => {
//           tx.executeSql(
//             'INSERT INTO aspects VALUES (?, ?, ?, ?, ?)',
//             [
//               aspects.id || null,
//               aspects.name || null,
//               aspects.name_bn || null,
//               aspects.name_short || null,
//               aspects.code || null,
//             ],
//             (_, resultSet) =>
//               console.log('Aspects data inserted successfully', resultSet),
//             (_, error) => {
//               console.error('Error inserting aspects data', error, aspects);
//             },
//           );
//         });
//         resolve();
//       });
//     });
//   } catch (error) {
//     console.error('Error fetching aspects data from API', error);
//   }
// };

// export const aspects_list = async () => {
//   return new Promise((resolve, reject) => {
//     database.transaction(tx => {
//       tx.executeSql(
//         `SELECT * FROM aspects WHERE 1=1`, // Adjust the query based on your schema and condition

//         (_, resultSet) => {
//           const data = [];
//           for (let i = 0; i < resultSet.rows.length; i++) {
//             const row = resultSet.rows.item(i);
//             data.push(row);
//           }
//           resolve(data);
//         },
//         (_, error) => {
//           console.error(`Error querying aspects by condition`, error);
//           reject(error);
//         },
//       );
//     });
//   });
// };

// export const aspects_list = async () => {
//   return new Promise((resolve, reject) => {
//     database.transaction(tx => {
//       tx.executeSql(
//         `SELECT * FROM aspects`, // Query the aspects table
//         [],
//         (_, resultSet) => {
//           console.log('ResultSet:', resultSet); // Log the resultSet to debug
//           const data = [];
//           for (let i = 0; i < resultSet.rows.length; i++) {
//             const row = resultSet.rows.item(i);
//             data.push(row);
//           }
//           resolve(data);
//         },
//         (_, error) => {
//           console.error(`Error querying aspects`, error);
//           reject(error);
//         },
//       );
//     });
//   });
// };

//API START
// export const sources_api = () => {
//   fetch(`${baseApi}/sources?token=${token}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log('Total sources items from API:', data.length);

//       database.transaction(tx => {
//         // Drop the existing sources table and recreate it
//         tx.executeSql('DROP TABLE IF EXISTS sources', [], () =>
//           //console.log('sources Table dropped successfully'),
//           (_, error) => {
//             console.error('Error dropping sources table', error);
//           },
//         );

//         tx.executeSql(
//           'CREATE TABLE IF NOT EXISTS sources (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
//           [],
//           () => console.log('sources table created successfully'),
//           (_, error) => {
//             console.error('Error creating sources table', error);
//           },
//         );

//         // Insert data into the projectData table
//         data.forEach(sources => {
//           tx.executeSql(
//             'INSERT INTO sources VALUES (?, ?, ?, ?, ?)',
//             [
//               sources.id || null,
//               sources.name || null,
//               sources.name_bn || null,
//               sources.name_short || null,
//               sources.code || null,
//             ],
//             (_, resultSet) =>
//               console.log('Project data inserted successfully', resultSet),
//             (_, error) => {
//               // console.log('you are offline')
//               console.error('Error inserting project data', error, project);
//             },
//           );
//         });
//       });
//     })
//     .catch(error => {
//       // console.log('you are offline')
//       console.error('Error fetching project data from API', error);
//     });
// };
//API END
//---------------------------------------------------//
//list start
// export const sources_list = async () => {
//   return new Promise((resolve, reject) => {
//     database.transaction(tx => {
//       tx.executeSql(
//         `SELECT * FROM sources `, // Adjust the query based on your schema and condition

//         (_, resultSet) => {
//           const data = [];
//           console.log(resultSet);
//           for (let i = 0; i < resultSet.rows.length; i++) {
//             const row = resultSet.rows.item(i);
//             data.push(row);
//           }
//           resolve(data);
//         },
//         (_, error) => {
//           console.error(`Error querying sources by condition`, error);
//           reject(error);
//         },
//       );
//     });
//   });
// };
//list end
//---------------------------------------------------//

//API Start
export const jur_fd_ecozones_api = async () => {
  try {
    const response = await fetch(`${baseApi}/jur_fd_ecozones?token=${token}`);
    const data = await response.json();
    console.log('Total jur_fd_ecozones items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS jur_fd_ecozones',
          [],
          () => {
            console.log('jur_fd_ecozones table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS jur_fd_ecozones (id TEXT, name TEXT, name_bn TEXT, code TEXT, raw_code TEXT)',
          [],
          () => {
            console.log('jur_fd_ecozones table created successfully');
          },
          reject,
        );

        data.forEach(jur_fd_ecozones => {
          tx.executeSql(
            'INSERT INTO jur_fd_ecozones VALUES (?, ?, ?, ?, ?)',
            [
              jur_fd_ecozones.id || null,
              jur_fd_ecozones.name || null,
              jur_fd_ecozones.name_bn || null,
              jur_fd_ecozones.code || null,
              jur_fd_ecozones.raw_code || null,
            ],
            (_, resultSet) =>
              console.log(
                'jur_fd_ecozones data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting jur_fd_ecozones data',
                error,
                jur_fd_ecozones,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching jur_fd_ecozones data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const jur_fd_ecozones_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM jur_fd_ecozones`, // Query the jur_fd_ecozones table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying jur_fd_ecozones`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const jur_fd_ecozones_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM jur_fd_ecozones`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from jur_fd_ecozones:', resultSet);

          try {
            await jur_fd_ecozones_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from jur_fd_ecozones`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//

//API Start
export const spatial_ref_sys_api = async () => {
  try {
    const response = await fetch(`${baseApi}/spatial_ref_sys?token=${token}`);
    const data = await response.json();
    console.log('Total spatial_ref_sys items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS spatial_ref_sys',
          [],
          () => {
            console.log('spatial_ref_sys table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS spatial_ref_sys (srid TEXT, auth_name TEXT, auth_srid TEXT, srtext TEXT, proj4text TEXT)',
          [],
          () => {
            console.log('spatial_ref_sys table created successfully');
          },
          reject,
        );

        data.forEach(spatial_ref_sys => {
          tx.executeSql(
            'INSERT INTO spatial_ref_sys VALUES (?, ?, ?, ?, ?)',
            [
              spatial_ref_sys.srid || null,
              spatial_ref_sys.auth_name || null,
              spatial_ref_sys.auth_srid || null,
              spatial_ref_sys.srtext || null,
              spatial_ref_sys.proj4text || null,
            ],
            (_, resultSet) =>
              console.log(
                'spatial_ref_sys data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting spatial_ref_sys data',
                error,
                spatial_ref_sys,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching spatial_ref_sys data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const spatial_ref_sys_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM spatial_ref_sys`, // Query the spatial_ref_sys table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying spatial_ref_sys`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const spatial_ref_sys_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM spatial_ref_sys`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from spatial_ref_sys:', resultSet);

          try {
            await spatial_ref_sys_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from spatial_ref_sys`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const age_plantations_api = async () => {
  try {
    const response = await fetch(`${baseApi}/age_plantations?token=${token}`);
    const data = await response.json();
    console.log('Total age_plantations items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS age_plantations',
          [],
          () => {
            console.log('age_plantations table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS age_plantations (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('age_plantations table created successfully');
          },
          reject,
        );

        data.forEach(age_plantations => {
          tx.executeSql(
            'INSERT INTO age_plantations VALUES (?, ?, ?, ?)',
            [
              age_plantations.id || null,
              age_plantations.name || null,
              age_plantations.name_bn || null,
              age_plantations.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'age_plantations data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting age_plantations data',
                error,
                age_plantations,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching age_plantations data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const age_plantations_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM age_plantations`, // Query the age_plantations table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying age_plantations`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const age_plantations_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM age_plantations`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from age_plantations:', resultSet);

          try {
            await age_plantations_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from age_plantations`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
// export const aspects_api = async () => {
//   try {
// 	const response = await fetch(`${baseApi}/aspects?token=${token}`);
// 	const data = await response.json();
// 	console.log('Total aspects items from API:', data.length);

// 	await new Promise((resolve, reject) => {
// 	  database.transaction(tx => {
// 		tx.executeSql(
// 		  'DROP TABLE IF EXISTS aspects',
// 		  [],
// 		  () => {
// 			console.log('aspects table dropped successfully');
// 		  },
// 		  reject,
// 		);

// 		tx.executeSql(
// 		  'CREATE TABLE IF NOT EXISTS aspects (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
// 		  [],
// 		  () => {
// 			console.log('aspects table created successfully');
// 		  },
// 		  reject,
// 		);

// 		data.forEach(aspects => {
// 		  tx.executeSql(
// 			'INSERT INTO aspects VALUES (?, ?, ?, ?, ?)',
// 			[
// 			  aspects.id || null,
// aspects. name || null,
// aspects. name_bn || null,
// aspects. name_short || null,
// aspects. code || null,

// 			],
// 			(_, resultSet) =>
// 			  console.log('aspects data inserted successfully', resultSet),
// 			(_, error) => {
// 			  console.error('Error inserting aspects data', error, aspects);
// 			},
// 		  );
// 		});
// 		resolve();
// 	  });
// 	});
//   } catch (error) {
// 	console.error('Error fetching aspects data from API', error);
//   }
// };
//API End
//---------------------------------------------------------//
// List Start

// export const aspects_list = async () => {
//   return new Promise((resolve, reject) => {
// 	database.transaction(tx => {
// 	  tx.executeSql(
// 		`SELECT * FROM aspects`, // Query the aspects table
// 		[],
// 		(_, resultSet) => {
// 		  console.log('ResultSet:', resultSet); // Log the resultSet to debug
// 		  const data = [];
// 		  for (let i = 0; i < resultSet.rows.length; i++) {
// 			const row = resultSet.rows.item(i);
// 			data.push(row);
// 		  }
// 		  resolve(data);
// 		},
// 		(_, error) => {
// 		  console.error(`Error querying aspects`, error);
// 		  reject(error);
// 		},
// 	  );
// 	});
//   });
// };
// List End
//---------------------------------------------------------//
// Delete Start
// export const aspects_delete = async () => {
//   return new Promise((resolve, reject) => {
//     database.transaction(tx => {
//       tx.executeSql(
//         `DELETE FROM aspects`, // Correct SQL to delete all rows
//         [],
//         async (_, resultSet) => {
//           console.log('All data deleted from aspects:', resultSet);

//           try {

//             await aspects_api();
//             resolve(resultSet);
//           } catch (apiError) {
//             console.error('Error fetching data from API:', apiError);
//             reject(apiError);
//           }
//         },
//         (_, error) => {
//           console.error(`Error deleting data from aspects`, error);
//           reject(error); // Reject in case of a SQL error
//         },
//       );
//     });
//   });
// };

// Delete End
//---------------------------------------------------------//
//API Start
export const canopycover_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/canopycover_lists?token=${token}`);
    const data = await response.json();
    console.log('Total canopycover_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS canopycover_lists',
          [],
          () => {
            console.log('canopycover_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS canopycover_lists (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('canopycover_lists table created successfully');
          },
          reject,
        );

        data.forEach(canopycover_lists => {
          tx.executeSql(
            'INSERT INTO canopycover_lists VALUES (?, ?, ?, ?, ?)',
            [
              canopycover_lists.id || null,
              canopycover_lists.name || null,
              canopycover_lists.name_bn || null,
              canopycover_lists.name_short || null,
              canopycover_lists.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'canopycover_lists data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting canopycover_lists data',
                error,
                canopycover_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching canopycover_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const canopycover_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM canopycover_lists`, // Query the canopycover_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying canopycover_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const canopycover_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM canopycover_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from canopycover_lists:', resultSet);

          try {
            await canopycover_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from canopycover_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const sources_api = async () => {
  try {
    const response = await fetch(`${baseApi}/sources?token=${token}`);
    const data = await response.json();
    console.log('Total sources items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS sources',
          [],
          () => {
            console.log('sources table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS sources (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('sources table created successfully');
          },
          reject,
        );

        data.forEach(sources => {
          tx.executeSql(
            'INSERT INTO sources VALUES (?, ?, ?, ?, ?)',
            [
              sources.id || null,
              sources.name || null,
              sources.name_bn || null,
              sources.name_short || null,
              sources.code || null,
            ],
            (_, resultSet) =>
              console.log('sources data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting sources data', error, sources);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching sources data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const sources_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM sources`, // Query the sources table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying sources`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const sources_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM sources`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from sources:', resultSet);

          try {
            await sources_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from sources`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const spacing_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/spacing_lists?token=${token}`);
    const data = await response.json();
    console.log('Total spacing_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS spacing_lists',
          [],
          () => {
            console.log('spacing_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS spacing_lists (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('spacing_lists table created successfully');
          },
          reject,
        );

        data.forEach(spacing_lists => {
          tx.executeSql(
            'INSERT INTO spacing_lists VALUES (?, ?, ?, ?, ?)',
            [
              spacing_lists.id || null,
              spacing_lists.name || null,
              spacing_lists.name_bn || null,
              spacing_lists.name_short || null,
              spacing_lists.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'spacing_lists data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting spacing_lists data',
                error,
                spacing_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching spacing_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const spacing_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM spacing_lists`, // Query the spacing_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying spacing_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const spacing_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM spacing_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from spacing_lists:', resultSet);

          try {
            await spacing_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from spacing_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const cardpoints_api = async () => {
  try {
    const response = await fetch(`${baseApi}/cardpoints?token=${token}`);
    const data = await response.json();
    console.log('Total cardpoints items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS cardpoints',
          [],
          () => {
            console.log('cardpoints table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS cardpoints (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('cardpoints table created successfully');
          },
          reject,
        );

        data.forEach(cardpoints => {
          tx.executeSql(
            'INSERT INTO cardpoints VALUES (?, ?, ?, ?, ?)',
            [
              cardpoints.id || null,
              cardpoints.name || null,
              cardpoints.name_bn || null,
              cardpoints.name_short || null,
              cardpoints.code || null,
            ],
            (_, resultSet) =>
              console.log('cardpoints data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting cardpoints data',
                error,
                cardpoints,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching cardpoints data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const cardpoints_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM cardpoints`, // Query the cardpoints table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying cardpoints`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const cardpoints_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM cardpoints`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from cardpoints:', resultSet);

          try {
            await cardpoints_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from cardpoints`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const teams_api = async () => {
  try {
    const response = await fetch(`${baseApi}/teams?token=${token}`);
    const data = await response.json();
    console.log('Total teams items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS teams',
          [],
          () => {
            console.log('teams table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS teams (id TEXT, user_id TEXT, name TEXT, personal_team TEXT, created_at TEXT, updated_at TEXT)',
          [],
          () => {
            console.log('teams table created successfully');
          },
          reject,
        );

        data.forEach(teams => {
          tx.executeSql(
            'INSERT INTO teams VALUES (?, ?, ?, ?, ?, ?)',
            [
              teams.id || null,
              teams.user_id || null,
              teams.name || null,
              teams.personal_team || null,
              teams.created_at || null,
              teams.updated_at || null,
            ],
            (_, resultSet) =>
              console.log('teams data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting teams data', error, teams);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching teams data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const teams_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM teams`, // Query the teams table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying teams`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const teams_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM teams`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from teams:', resultSet);

          try {
            await teams_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from teams`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const polytypetrt_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/polytypetrt_lists?token=${token}`);
    const data = await response.json();
    console.log('Total polytypetrt_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS polytypetrt_lists',
          [],
          () => {
            console.log('polytypetrt_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS polytypetrt_lists (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('polytypetrt_lists table created successfully');
          },
          reject,
        );

        data.forEach(polytypetrt_lists => {
          tx.executeSql(
            'INSERT INTO polytypetrt_lists VALUES (?, ?, ?, ?, ?)',
            [
              polytypetrt_lists.id || null,
              polytypetrt_lists.name || null,
              polytypetrt_lists.name_bn || null,
              polytypetrt_lists.name_short || null,
              polytypetrt_lists.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'polytypetrt_lists data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting polytypetrt_lists data',
                error,
                polytypetrt_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching polytypetrt_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const polytypetrt_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM polytypetrt_lists`, // Query the polytypetrt_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying polytypetrt_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const polytypetrt_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM polytypetrt_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from polytypetrt_lists:', resultSet);

          try {
            await polytypetrt_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from polytypetrt_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const project_lists_audit_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/project_lists_audit?token=${token}`,
    );
    const data = await response.json();
    console.log('Total project_lists_audit items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS project_lists_audit',
          [],
          () => {
            console.log('project_lists_audit table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS project_lists_audit (id TEXT, name_en TEXT, name_bn TEXT, description TEXT, UserName TEXT, PLAdditionTime TEXT)',
          [],
          () => {
            console.log('project_lists_audit table created successfully');
          },
          reject,
        );

        data.forEach(project_lists_audit => {
          tx.executeSql(
            'INSERT INTO project_lists_audit VALUES (?, ?, ?, ?, ?, ?)',
            [
              project_lists_audit.id || null,
              project_lists_audit.name_en || null,
              project_lists_audit.name_bn || null,
              project_lists_audit.description || null,
              project_lists_audit.UserName || null,
              project_lists_audit.PLAdditionTime || null,
            ],
            (_, resultSet) =>
              console.log(
                'project_lists_audit data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting project_lists_audit data',
                error,
                project_lists_audit,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching project_lists_audit data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const project_lists_audit_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM project_lists_audit`, // Query the project_lists_audit table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying project_lists_audit`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const project_lists_audit_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM project_lists_audit`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from project_lists_audit:', resultSet);

          try {
            await project_lists_audit_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from project_lists_audit`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const qtr_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/qtr_lists?token=${token}`);
    const data = await response.json();
    console.log('Total qtr_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS qtr_lists',
          [],
          () => {
            console.log('qtr_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS qtr_lists (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('qtr_lists table created successfully');
          },
          reject,
        );

        data.forEach(qtr_lists => {
          tx.executeSql(
            'INSERT INTO qtr_lists VALUES (?, ?, ?, ?, ?)',
            [
              qtr_lists.id || null,
              qtr_lists.name || null,
              qtr_lists.name_bn || null,
              qtr_lists.name_short || null,
              qtr_lists.code || null,
            ],
            (_, resultSet) =>
              console.log('qtr_lists data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting qtr_lists data', error, qtr_lists);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching qtr_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const qtr_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM qtr_lists`, // Query the qtr_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying qtr_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const qtr_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM qtr_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from qtr_lists:', resultSet);

          try {
            await qtr_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from qtr_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const receptors_api = async () => {
  try {
    const response = await fetch(`${baseApi}/receptors?token=${token}`);
    const data = await response.json();
    console.log('Total receptors items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS receptors',
          [],
          () => {
            console.log('receptors table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS receptors (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('receptors table created successfully');
          },
          reject,
        );

        data.forEach(receptors => {
          tx.executeSql(
            'INSERT INTO receptors VALUES (?, ?, ?, ?, ?)',
            [
              receptors.id || null,
              receptors.name || null,
              receptors.name_bn || null,
              receptors.name_short || null,
              receptors.code || null,
            ],
            (_, resultSet) =>
              console.log('receptors data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting receptors data', error, receptors);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching receptors data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const receptors_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM receptors`, // Query the receptors table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying receptors`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const receptors_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM receptors`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from receptors:', resultSet);

          try {
            await receptors_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from receptors`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const record_points_api = async () => {
  try {
    const response = await fetch(`${baseApi}/record_points?token=${token}`);
    const data = await response.json();
    console.log('Total record_points items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS record_points',
          [],
          () => {
            console.log('record_points table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS record_points (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('record_points table created successfully');
          },
          reject,
        );

        data.forEach(record_points => {
          tx.executeSql(
            'INSERT INTO record_points VALUES (?, ?, ?, ?, ?)',
            [
              record_points.id || null,
              record_points.name || null,
              record_points.name_bn || null,
              record_points.name_short || null,
              record_points.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'record_points data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting record_points data',
                error,
                record_points,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching record_points data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const record_points_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM record_points`, // Query the record_points table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying record_points`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const record_points_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM record_points`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from record_points:', resultSet);

          try {
            await record_points_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from record_points`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const regeneration_photo_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/regeneration_photo?token=${token}`,
    );
    const data = await response.json();
    console.log('Total regeneration_photo items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS regeneration_photo',
          [],
          () => {
            console.log('regeneration_photo table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS regeneration_photo (gid TEXT, core_uri TEXT, lat TEXT, lon TEXT, geom TEXT)',
          [],
          () => {
            console.log('regeneration_photo table created successfully');
          },
          reject,
        );

        data.forEach(regeneration_photo => {
          tx.executeSql(
            'INSERT INTO regeneration_photo VALUES (?, ?, ?, ?, ?)',
            [
              regeneration_photo.gid || null,
              regeneration_photo.core_uri || null,
              regeneration_photo.lat || null,
              regeneration_photo.lon || null,
              regeneration_photo.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'regeneration_photo data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting regeneration_photo data',
                error,
                regeneration_photo,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching regeneration_photo data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const regeneration_photo_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM regeneration_photo`, // Query the regeneration_photo table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying regeneration_photo`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const regeneration_photo_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM regeneration_photo`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from regeneration_photo:', resultSet);

          try {
            await regeneration_photo_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from regeneration_photo`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const directions_api = async () => {
  try {
    const response = await fetch(`${baseApi}/directions?token=${token}`);
    const data = await response.json();
    console.log('Total directions items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS directions',
          [],
          () => {
            console.log('directions table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS directions (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('directions table created successfully');
          },
          reject,
        );

        data.forEach(directions => {
          tx.executeSql(
            'INSERT INTO directions VALUES (?, ?, ?, ?, ?)',
            [
              directions.id || null,
              directions.name || null,
              directions.name_bn || null,
              directions.name_short || null,
              directions.code || null,
            ],
            (_, resultSet) =>
              console.log('directions data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting directions data',
                error,
                directions,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching directions data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const directions_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM directions`, // Query the directions table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying directions`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const directions_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM directions`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from directions:', resultSet);

          try {
            await directions_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from directions`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const dis_nurserys_api = async () => {
  try {
    const response = await fetch(`${baseApi}/dis_nurserys?token=${token}`);
    const data = await response.json();
    console.log('Total dis_nurserys items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS dis_nurserys',
          [],
          () => {
            console.log('dis_nurserys table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS dis_nurserys (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('dis_nurserys table created successfully');
          },
          reject,
        );

        data.forEach(dis_nurserys => {
          tx.executeSql(
            'INSERT INTO dis_nurserys VALUES (?, ?, ?, ?)',
            [
              dis_nurserys.id || null,
              dis_nurserys.name || null,
              dis_nurserys.name_bn || null,
              dis_nurserys.code || null,
            ],
            (_, resultSet) =>
              console.log('dis_nurserys data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting dis_nurserys data',
                error,
                dis_nurserys,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching dis_nurserys data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const dis_nurserys_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM dis_nurserys`, // Query the dis_nurserys table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying dis_nurserys`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const dis_nurserys_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM dis_nurserys`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from dis_nurserys:', resultSet);

          try {
            await dis_nurserys_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from dis_nurserys`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const division_test_api = async () => {
  try {
    const response = await fetch(`${baseApi}/division_test?token=${token}`);
    const data = await response.json();
    console.log('Total division_test items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS division_test',
          [],
          () => {
            console.log('division_test table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS division_test (gid TEXT, __gid TEXT, division TEXT, divcode TEXT, geom TEXT)',
          [],
          () => {
            console.log('division_test table created successfully');
          },
          reject,
        );

        data.forEach(division_test => {
          tx.executeSql(
            'INSERT INTO division_test VALUES (?, ?, ?, ?, ?)',
            [
              division_test.gid || null,
              division_test.__gid || null,
              division_test.division || null,
              division_test.divcode || null,
              division_test.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'division_test data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting division_test data',
                error,
                division_test,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching division_test data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const division_test_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM division_test`, // Query the division_test table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying division_test`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const division_test_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM division_test`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from division_test:', resultSet);

          try {
            await division_test_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from division_test`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const elevations_api = async () => {
  try {
    const response = await fetch(`${baseApi}/elevations?token=${token}`);
    const data = await response.json();
    console.log('Total elevations items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS elevations',
          [],
          () => {
            console.log('elevations table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS elevations (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('elevations table created successfully');
          },
          reject,
        );

        data.forEach(elevations => {
          tx.executeSql(
            'INSERT INTO elevations VALUES (?, ?, ?, ?, ?)',
            [
              elevations.id || null,
              elevations.name || null,
              elevations.name_bn || null,
              elevations.name_short || null,
              elevations.code || null,
            ],
            (_, resultSet) =>
              console.log('elevations data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting elevations data',
                error,
                elevations,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching elevations data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const elevations_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM elevations`, // Query the elevations table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying elevations`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const elevations_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM elevations`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from elevations:', resultSet);

          try {
            await elevations_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from elevations`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const email_notifications_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/email_notifications?token=${token}`,
    );
    const data = await response.json();
    console.log('Total email_notifications items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS email_notifications',
          [],
          () => {
            console.log('email_notifications table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS email_notifications (id TEXT, comp_id TEXT, subject TEXT, message TEXT, from_email_id TEXT, to_email_id TEXT, from_user_id TEXT, to_user_id TEXT, from_role_id TEXT, to_role_id TEXT, status TEXT, request_ip TEXT, is_active TEXT, created_by TEXT, updated_by TEXT, created_at TEXT, updated_at TEXT)',
          [],
          () => {
            console.log('email_notifications table created successfully');
          },
          reject,
        );

        data.forEach(email_notifications => {
          tx.executeSql(
            'INSERT INTO email_notifications VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              email_notifications.id || null,
              email_notifications.comp_id || null,
              email_notifications.subject || null,
              email_notifications.message || null,
              email_notifications.from_email_id || null,
              email_notifications.to_email_id || null,
              email_notifications.from_user_id || null,
              email_notifications.to_user_id || null,
              email_notifications.from_role_id || null,
              email_notifications.to_role_id || null,
              email_notifications.status || null,
              email_notifications.request_ip || null,
              email_notifications.is_active || null,
              email_notifications.created_by || null,
              email_notifications.updated_by || null,
              email_notifications.created_at || null,
              email_notifications.updated_at || null,
            ],
            (_, resultSet) =>
              console.log(
                'email_notifications data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting email_notifications data',
                error,
                email_notifications,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching email_notifications data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const email_notifications_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM email_notifications`, // Query the email_notifications table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying email_notifications`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const email_notifications_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM email_notifications`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from email_notifications:', resultSet);

          try {
            await email_notifications_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from email_notifications`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const failed_jobs_api = async () => {
  try {
    const response = await fetch(`${baseApi}/failed_jobs?token=${token}`);
    const data = await response.json();
    console.log('Total failed_jobs items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS failed_jobs',
          [],
          () => {
            console.log('failed_jobs table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS failed_jobs (id TEXT, uuid TEXT, connection TEXT, queue TEXT, payload TEXT, exception TEXT, failed_at TEXT)',
          [],
          () => {
            console.log('failed_jobs table created successfully');
          },
          reject,
        );

        data.forEach(failed_jobs => {
          tx.executeSql(
            'INSERT INTO failed_jobs VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
              failed_jobs.id || null,
              failed_jobs.uuid || null,
              failed_jobs.connection || null,
              failed_jobs.queue || null,
              failed_jobs.payload || null,
              failed_jobs.exception || null,
              failed_jobs.failed_at || null,
            ],
            (_, resultSet) =>
              console.log('failed_jobs data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting failed_jobs data',
                error,
                failed_jobs,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching failed_jobs data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const failed_jobs_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM failed_jobs`, // Query the failed_jobs table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying failed_jobs`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const failed_jobs_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM failed_jobs`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from failed_jobs:', resultSet);

          try {
            await failed_jobs_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from failed_jobs`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const file_categories_api = async () => {
  try {
    const response = await fetch(`${baseApi}/file_categories?token=${token}`);
    const data = await response.json();
    console.log('Total file_categories items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS file_categories',
          [],
          () => {
            console.log('file_categories table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS file_categories (id TEXT, title TEXT, code TEXT, description TEXT, sort TEXT, status TEXT, created_at TEXT, created_by TEXT, updated_at TEXT, updated_by TEXT, deleted_at TEXT, deleted_by TEXT)',
          [],
          () => {
            console.log('file_categories table created successfully');
          },
          reject,
        );

        data.forEach(file_categories => {
          tx.executeSql(
            'INSERT INTO file_categories VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              file_categories.id || null,
              file_categories.title || null,
              file_categories.code || null,
              file_categories.description || null,
              file_categories.sort || null,
              file_categories.status || null,
              file_categories.created_at || null,
              file_categories.created_by || null,
              file_categories.updated_at || null,
              file_categories.updated_by || null,
              file_categories.deleted_at || null,
              file_categories.deleted_by || null,
            ],
            (_, resultSet) =>
              console.log(
                'file_categories data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting file_categories data',
                error,
                file_categories,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching file_categories data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const file_categories_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM file_categories`, // Query the file_categories table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying file_categories`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const file_categories_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM file_categories`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from file_categories:', resultSet);

          try {
            await file_categories_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from file_categories`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const financial_years_api = async () => {
  try {
    const response = await fetch(`${baseApi}/financial_years?token=${token}`);
    const data = await response.json();
    console.log('Total financial_years items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS financial_years',
          [],
          () => {
            console.log('financial_years table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS financial_years (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('financial_years table created successfully');
          },
          reject,
        );

        data.forEach(financial_years => {
          tx.executeSql(
            'INSERT INTO financial_years VALUES (?, ?, ?, ?)',
            [
              financial_years.id || null,
              financial_years.name || null,
              financial_years.name_bn || null,
              financial_years.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'financial_years data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting financial_years data',
                error,
                financial_years,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching financial_years data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const financial_years_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM financial_years`, // Query the financial_years table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying financial_years`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const financial_years_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM financial_years`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from financial_years:', resultSet);

          try {
            await financial_years_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from financial_years`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const forward_beat_components_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/forward_beat_components?token=${token}`,
    );
    const data = await response.json();
    console.log('Total forward_beat_components items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS forward_beat_components',
          [],
          () => {
            console.log('forward_beat_components table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS forward_beat_components (id TEXT, part_a_uri TEXT, part_b_uri TEXT, part_c_uri TEXT, index_map_id TEXT, created_by TEXT, created_at TEXT, status TEXT, updated_by TEXT, updated_at TEXT, from_role_id TEXT, to_role_id TEXT, from_user_id TEXT, to_user_id TEXT)',
          [],
          () => {
            console.log('forward_beat_components table created successfully');
          },
          reject,
        );

        data.forEach(forward_beat_components => {
          tx.executeSql(
            'INSERT INTO forward_beat_components VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              forward_beat_components.id || null,
              forward_beat_components.part_a_uri || null,
              forward_beat_components.part_b_uri || null,
              forward_beat_components.part_c_uri || null,
              forward_beat_components.index_map_id || null,
              forward_beat_components.created_by || null,
              forward_beat_components.created_at || null,
              forward_beat_components.status || null,
              forward_beat_components.updated_by || null,
              forward_beat_components.updated_at || null,
              forward_beat_components.from_role_id || null,
              forward_beat_components.to_role_id || null,
              forward_beat_components.from_user_id || null,
              forward_beat_components.to_user_id || null,
            ],
            (_, resultSet) =>
              console.log(
                'forward_beat_components data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting forward_beat_components data',
                error,
                forward_beat_components,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error(
      'Error fetching forward_beat_components data from API',
      error,
    );
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const forward_beat_components_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM forward_beat_components`, // Query the forward_beat_components table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying forward_beat_components`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const forward_beat_components_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM forward_beat_components`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log(
            'All data deleted from forward_beat_components:',
            resultSet,
          );

          try {
            await forward_beat_components_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(
            `Error deleting data from forward_beat_components`,
            error,
          );
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const forward_beat_history_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/forward_beat_history?token=${token}`,
    );
    const data = await response.json();
    console.log('Total forward_beat_history items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS forward_beat_history',
          [],
          () => {
            console.log('forward_beat_history table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS forward_beat_history (id TEXT, comment TEXT, comp_id TEXT, status TEXT, created_by TEXT, created_at TEXT, updated_by TEXT, updated_at TEXT, from_role_id TEXT, to_role_id TEXT, from_user_id TEXT, to_user_id TEXT)',
          [],
          () => {
            console.log('forward_beat_history table created successfully');
          },
          reject,
        );

        data.forEach(forward_beat_history => {
          tx.executeSql(
            'INSERT INTO forward_beat_history VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              forward_beat_history.id || null,
              forward_beat_history.comment || null,
              forward_beat_history.comp_id || null,
              forward_beat_history.status || null,
              forward_beat_history.created_by || null,
              forward_beat_history.created_at || null,
              forward_beat_history.updated_by || null,
              forward_beat_history.updated_at || null,
              forward_beat_history.from_role_id || null,
              forward_beat_history.to_role_id || null,
              forward_beat_history.from_user_id || null,
              forward_beat_history.to_user_id || null,
            ],
            (_, resultSet) =>
              console.log(
                'forward_beat_history data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting forward_beat_history data',
                error,
                forward_beat_history,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching forward_beat_history data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const forward_beat_history_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM forward_beat_history`, // Query the forward_beat_history table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying forward_beat_history`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const forward_beat_history_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM forward_beat_history`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from forward_beat_history:', resultSet);

          try {
            await forward_beat_history_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from forward_beat_history`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const forward_status_api = async () => {
  try {
    const response = await fetch(`${baseApi}/forward_status?token=${token}`);
    const data = await response.json();
    console.log('Total forward_status items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS forward_status',
          [],
          () => {
            console.log('forward_status table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS forward_status (id TEXT, name TEXT, to_role_id TEXT)',
          [],
          () => {
            console.log('forward_status table created successfully');
          },
          reject,
        );

        data.forEach(forward_status => {
          tx.executeSql(
            'INSERT INTO forward_status VALUES (?, ?, ?)',
            [
              forward_status.id || null,
              forward_status.name || null,
              forward_status.to_role_id || null,
            ],
            (_, resultSet) =>
              console.log(
                'forward_status data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting forward_status data',
                error,
                forward_status,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching forward_status data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const forward_status_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM forward_status`, // Query the forward_status table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying forward_status`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const forward_status_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM forward_status`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from forward_status:', resultSet);

          try {
            await forward_status_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from forward_status`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_beats_api = async () => {
  try {
    const response = await fetch(`${baseApi}/geo_beats?token=${token}`);
    const data = await response.json();
    console.log('Total geo_beats items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_beats',
          [],
          () => {
            console.log('geo_beats table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_beats (gid TEXT, cox_blk_ TEXT, cox_blk_id TEXT, d_no TEXT, range TEXT, r_no TEXT, beat TEXT, be_no TEXT, block TEXT, bl_no TEXT, forest TEXT, division TEXT, beat_code TEXT, range_code TEXT, div_code TEXT, cir_code TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_beats table created successfully');
          },
          reject,
        );

        data.forEach(geo_beats => {
          tx.executeSql(
            'INSERT INTO geo_beats VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              geo_beats.gid || null,
              geo_beats.cox_blk_ || null,
              geo_beats.cox_blk_id || null,
              geo_beats.d_no || null,
              geo_beats.range || null,
              geo_beats.r_no || null,
              geo_beats.beat || null,
              geo_beats.be_no || null,
              geo_beats.block || null,
              geo_beats.bl_no || null,
              geo_beats.forest || null,
              geo_beats.division || null,
              geo_beats.beat_code || null,
              geo_beats.range_code || null,
              geo_beats.div_code || null,
              geo_beats.cir_code || null,
              geo_beats.geom || null,
            ],
            (_, resultSet) =>
              console.log('geo_beats data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting geo_beats data', error, geo_beats);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_beats data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_beats_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_beats`, // Query the geo_beats table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_beats`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_beats_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_beats`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from geo_beats:', resultSet);

          try {
            await geo_beats_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from geo_beats`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_district_boundary_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/geo_district_boundary?token=${token}`,
    );
    const data = await response.json();
    console.log('Total geo_district_boundary items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_district_boundary',
          [],
          () => {
            console.log('geo_district_boundary table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_district_boundary (gid TEXT, division_c TEXT, district_c TEXT, division_n TEXT, district_n TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_district_boundary table created successfully');
          },
          reject,
        );

        data.forEach(geo_district_boundary => {
          tx.executeSql(
            'INSERT INTO geo_district_boundary VALUES (?, ?, ?, ?, ?, ?)',
            [
              geo_district_boundary.gid || null,
              geo_district_boundary.division_c || null,
              geo_district_boundary.district_c || null,
              geo_district_boundary.division_n || null,
              geo_district_boundary.district_n || null,
              geo_district_boundary.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'geo_district_boundary data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting geo_district_boundary data',
                error,
                geo_district_boundary,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_district_boundary data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_district_boundary_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_district_boundary`, // Query the geo_district_boundary table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_district_boundary`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_district_boundary_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_district_boundary`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log(
            'All data deleted from geo_district_boundary:',
            resultSet,
          );

          try {
            await geo_district_boundary_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(
            `Error deleting data from geo_district_boundary`,
            error,
          );
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_district_pts_api = async () => {
  try {
    const response = await fetch(`${baseApi}/geo_district_pts?token=${token}`);
    const data = await response.json();
    console.log('Total geo_district_pts items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_district_pts',
          [],
          () => {
            console.log('geo_district_pts table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_district_pts (gid TEXT, objectid TEXT, division_c TEXT, district_c TEXT, division_n TEXT, district_n TEXT, orig_fid TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_district_pts table created successfully');
          },
          reject,
        );

        data.forEach(geo_district_pts => {
          tx.executeSql(
            'INSERT INTO geo_district_pts VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              geo_district_pts.gid || null,
              geo_district_pts.objectid || null,
              geo_district_pts.division_c || null,
              geo_district_pts.district_c || null,
              geo_district_pts.division_n || null,
              geo_district_pts.district_n || null,
              geo_district_pts.orig_fid || null,
              geo_district_pts.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'geo_district_pts data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting geo_district_pts data',
                error,
                geo_district_pts,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_district_pts data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_district_pts_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_district_pts`, // Query the geo_district_pts table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_district_pts`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_district_pts_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_district_pts`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from geo_district_pts:', resultSet);

          try {
            await geo_district_pts_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from geo_district_pts`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_division_boundary_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/geo_division_boundary?token=${token}`,
    );
    const data = await response.json();
    console.log('Total geo_division_boundary items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_division_boundary',
          [],
          () => {
            console.log('geo_division_boundary table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_division_boundary (gid TEXT, __gid TEXT, division TEXT, divcode TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_division_boundary table created successfully');
          },
          reject,
        );

        data.forEach(geo_division_boundary => {
          tx.executeSql(
            'INSERT INTO geo_division_boundary VALUES (?, ?, ?, ?, ?)',
            [
              geo_division_boundary.gid || null,
              geo_division_boundary.__gid || null,
              geo_division_boundary.division || null,
              geo_division_boundary.divcode || null,
              geo_division_boundary.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'geo_division_boundary data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting geo_division_boundary data',
                error,
                geo_division_boundary,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_division_boundary data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_division_boundary_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_division_boundary`, // Query the geo_division_boundary table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_division_boundary`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_division_boundary_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_division_boundary`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log(
            'All data deleted from geo_division_boundary:',
            resultSet,
          );

          try {
            await geo_division_boundary_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(
            `Error deleting data from geo_division_boundary`,
            error,
          );
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_division_pts_api = async () => {
  try {
    const response = await fetch(`${baseApi}/geo_division_pts?token=${token}`);
    const data = await response.json();
    console.log('Total geo_division_pts items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_division_pts',
          [],
          () => {
            console.log('geo_division_pts table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_division_pts (gid TEXT, objectid TEXT, division TEXT, divcode TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_division_pts table created successfully');
          },
          reject,
        );

        data.forEach(geo_division_pts => {
          tx.executeSql(
            'INSERT INTO geo_division_pts VALUES (?, ?, ?, ?, ?)',
            [
              geo_division_pts.gid || null,
              geo_division_pts.objectid || null,
              geo_division_pts.division || null,
              geo_division_pts.divcode || null,
              geo_division_pts.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'geo_division_pts data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting geo_division_pts data',
                error,
                geo_division_pts,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_division_pts data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_division_pts_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_division_pts`, // Query the geo_division_pts table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_division_pts`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_division_pts_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_division_pts`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from geo_division_pts:', resultSet);

          try {
            await geo_division_pts_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from geo_division_pts`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_int_boundary_api = async () => {
  try {
    const response = await fetch(`${baseApi}/geo_int_boundary?token=${token}`);
    const data = await response.json();
    console.log('Total geo_int_boundary items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_int_boundary',
          [],
          () => {
            console.log('geo_int_boundary table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_int_boundary (gid TEXT, objectid TEXT, ib TEXT, db TEXT, dsb TEXT, upb TEXT, ub TEXT, mb TEXT, pb TEXT, legend TEXT, shape_leng TEXT, name TEXT, india_myan TEXT, bd TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_int_boundary table created successfully');
          },
          reject,
        );

        data.forEach(geo_int_boundary => {
          tx.executeSql(
            'INSERT INTO geo_int_boundary VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              geo_int_boundary.gid || null,
              geo_int_boundary.objectid || null,
              geo_int_boundary.ib || null,
              geo_int_boundary.db || null,
              geo_int_boundary.dsb || null,
              geo_int_boundary.upb || null,
              geo_int_boundary.ub || null,
              geo_int_boundary.mb || null,
              geo_int_boundary.pb || null,
              geo_int_boundary.legend || null,
              geo_int_boundary.shape_leng || null,
              geo_int_boundary.name || null,
              geo_int_boundary.india_myan || null,
              geo_int_boundary.bd || null,
              geo_int_boundary.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'geo_int_boundary data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting geo_int_boundary data',
                error,
                geo_int_boundary,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_int_boundary data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_int_boundary_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_int_boundary`, // Query the geo_int_boundary table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_int_boundary`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_int_boundary_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_int_boundary`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from geo_int_boundary:', resultSet);

          try {
            await geo_int_boundary_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from geo_int_boundary`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_mauza_boundary_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/geo_mauza_boundary?token=${token}`,
    );
    const data = await response.json();
    console.log('Total geo_mauza_boundary items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_mauza_boundary',
          [],
          () => {
            console.log('geo_mauza_boundary table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_mauza_boundary (gid TEXT, geocode TEXT, divname TEXT, distname TEXT, thaname TEXT, uniname TEXT, mauzname TEXT, uni_code TEXT, upz_code TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_mauza_boundary table created successfully');
          },
          reject,
        );

        data.forEach(geo_mauza_boundary => {
          tx.executeSql(
            'INSERT INTO geo_mauza_boundary VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              geo_mauza_boundary.gid || null,
              geo_mauza_boundary.geocode || null,
              geo_mauza_boundary.divname || null,
              geo_mauza_boundary.distname || null,
              geo_mauza_boundary.thaname || null,
              geo_mauza_boundary.uniname || null,
              geo_mauza_boundary.mauzname || null,
              geo_mauza_boundary.uni_code || null,
              geo_mauza_boundary.upz_code || null,
              geo_mauza_boundary.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'geo_mauza_boundary data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting geo_mauza_boundary data',
                error,
                geo_mauza_boundary,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_mauza_boundary data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_mauza_boundary_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_mauza_boundary`, // Query the geo_mauza_boundary table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_mauza_boundary`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_mauza_boundary_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_mauza_boundary`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from geo_mauza_boundary:', resultSet);

          try {
            await geo_mauza_boundary_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from geo_mauza_boundary`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_ranges_api = async () => {
  try {
    const response = await fetch(`${baseApi}/geo_ranges?token=${token}`);
    const data = await response.json();
    console.log('Total geo_ranges items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_ranges',
          [],
          () => {
            console.log('geo_ranges table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_ranges (gid TEXT, range TEXT, shape_leng TEXT, shape_area TEXT, range_code TEXT, div_code TEXT, cir_code TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_ranges table created successfully');
          },
          reject,
        );

        data.forEach(geo_ranges => {
          tx.executeSql(
            'INSERT INTO geo_ranges VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              geo_ranges.gid || null,
              geo_ranges.range || null,
              geo_ranges.shape_leng || null,
              geo_ranges.shape_area || null,
              geo_ranges.range_code || null,
              geo_ranges.div_code || null,
              geo_ranges.cir_code || null,
              geo_ranges.geom || null,
            ],
            (_, resultSet) =>
              console.log('geo_ranges data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting geo_ranges data',
                error,
                geo_ranges,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_ranges data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_ranges_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_ranges`, // Query the geo_ranges table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_ranges`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_ranges_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_ranges`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from geo_ranges:', resultSet);

          try {
            await geo_ranges_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from geo_ranges`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_ranges_test_api = async () => {
  try {
    const response = await fetch(`${baseApi}/geo_ranges_test?token=${token}`);
    const data = await response.json();
    console.log('Total geo_ranges_test items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_ranges_test',
          [],
          () => {
            console.log('geo_ranges_test table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_ranges_test (gid TEXT, range TEXT, shape_leng TEXT, shape_area TEXT, range_code TEXT, div_code TEXT, cir_code TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_ranges_test table created successfully');
          },
          reject,
        );

        data.forEach(geo_ranges_test => {
          tx.executeSql(
            'INSERT INTO geo_ranges_test VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              geo_ranges_test.gid || null,
              geo_ranges_test.range || null,
              geo_ranges_test.shape_leng || null,
              geo_ranges_test.shape_area || null,
              geo_ranges_test.range_code || null,
              geo_ranges_test.div_code || null,
              geo_ranges_test.cir_code || null,
              geo_ranges_test.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'geo_ranges_test data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting geo_ranges_test data',
                error,
                geo_ranges_test,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_ranges_test data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_ranges_test_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_ranges_test`, // Query the geo_ranges_test table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_ranges_test`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_ranges_test_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_ranges_test`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from geo_ranges_test:', resultSet);

          try {
            await geo_ranges_test_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from geo_ranges_test`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_union_boundary_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/geo_union_boundary?token=${token}`,
    );
    const data = await response.json();
    console.log('Total geo_union_boundary items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_union_boundary',
          [],
          () => {
            console.log('geo_union_boundary table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_union_boundary (gid TEXT, objectid TEXT, divname TEXT, div_code TEXT, distname TEXT, dist_code TEXT, upazname TEXT, upz_code TEXT, psaname TEXT, psa TEXT, uniname TEXT, union_code TEXT, shape_leng TEXT, shape_area TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_union_boundary table created successfully');
          },
          reject,
        );

        data.forEach(geo_union_boundary => {
          tx.executeSql(
            'INSERT INTO geo_union_boundary VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              geo_union_boundary.gid || null,
              geo_union_boundary.objectid || null,
              geo_union_boundary.divname || null,
              geo_union_boundary.div_code || null,
              geo_union_boundary.distname || null,
              geo_union_boundary.dist_code || null,
              geo_union_boundary.upazname || null,
              geo_union_boundary.upz_code || null,
              geo_union_boundary.psaname || null,
              geo_union_boundary.psa || null,
              geo_union_boundary.uniname || null,
              geo_union_boundary.union_code || null,
              geo_union_boundary.shape_leng || null,
              geo_union_boundary.shape_area || null,
              geo_union_boundary.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'geo_union_boundary data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting geo_union_boundary data',
                error,
                geo_union_boundary,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_union_boundary data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_union_boundary_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_union_boundary`, // Query the geo_union_boundary table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_union_boundary`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_union_boundary_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_union_boundary`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from geo_union_boundary:', resultSet);

          try {
            await geo_union_boundary_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from geo_union_boundary`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_union_pts_api = async () => {
  try {
    const response = await fetch(`${baseApi}/geo_union_pts?token=${token}`);
    const data = await response.json();
    console.log('Total geo_union_pts items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_union_pts',
          [],
          () => {
            console.log('geo_union_pts table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_union_pts (gid TEXT, union_code TEXT, upz_code TEXT, union_name TEXT, union_bn TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_union_pts table created successfully');
          },
          reject,
        );

        data.forEach(geo_union_pts => {
          tx.executeSql(
            'INSERT INTO geo_union_pts VALUES (?, ?, ?, ?, ?, ?)',
            [
              geo_union_pts.gid || null,
              geo_union_pts.union_code || null,
              geo_union_pts.upz_code || null,
              geo_union_pts.union_name || null,
              geo_union_pts.union_bn || null,
              geo_union_pts.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'geo_union_pts data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting geo_union_pts data',
                error,
                geo_union_pts,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_union_pts data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_union_pts_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_union_pts`, // Query the geo_union_pts table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_union_pts`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_union_pts_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_union_pts`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from geo_union_pts:', resultSet);

          try {
            await geo_union_pts_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from geo_union_pts`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geo_upazila_boundary_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/geo_upazila_boundary?token=${token}`,
    );
    const data = await response.json();
    console.log('Total geo_upazila_boundary items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geo_upazila_boundary',
          [],
          () => {
            console.log('geo_upazila_boundary table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geo_upazila_boundary (gid TEXT, objectid TEXT, divname TEXT, div_code TEXT, distname TEXT, dist_code TEXT, upazname TEXT, upz_code TEXT, shape_leng TEXT, shape_area TEXT, geom TEXT)',
          [],
          () => {
            console.log('geo_upazila_boundary table created successfully');
          },
          reject,
        );

        data.forEach(geo_upazila_boundary => {
          tx.executeSql(
            'INSERT INTO geo_upazila_boundary VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              geo_upazila_boundary.gid || null,
              geo_upazila_boundary.objectid || null,
              geo_upazila_boundary.divname || null,
              geo_upazila_boundary.div_code || null,
              geo_upazila_boundary.distname || null,
              geo_upazila_boundary.dist_code || null,
              geo_upazila_boundary.upazname || null,
              geo_upazila_boundary.upz_code || null,
              geo_upazila_boundary.shape_leng || null,
              geo_upazila_boundary.shape_area || null,
              geo_upazila_boundary.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'geo_upazila_boundary data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting geo_upazila_boundary data',
                error,
                geo_upazila_boundary,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geo_upazila_boundary data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geo_upazila_boundary_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geo_upazila_boundary`, // Query the geo_upazila_boundary table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geo_upazila_boundary`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geo_upazila_boundary_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geo_upazila_boundary`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from geo_upazila_boundary:', resultSet);

          try {
            await geo_upazila_boundary_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from geo_upazila_boundary`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const geom_vw_ssp_map_api = async () => {
  try {
    const response = await fetch(`${baseApi}/geom_vw_ssp_map?token=${token}`);
    const data = await response.json();
    console.log('Total geom_vw_ssp_map items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS geom_vw_ssp_map',
          [],
          () => {
            console.log('geom_vw_ssp_map table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS geom_vw_ssp_map (_URI TEXT, geom TEXT, TOP_LEVEL_AURI TEXT, CREATION_DATE TEXT, FINANCIAL_YEAR TEXT, BEAT TEXT, RANGE TEXT, DIVISION TEXT, CIRCLE TEXT, beat_code TEXT, range_code TEXT, division_code TEXT, circle_code TEXT, intervention_name TEXT, total_area_ha TEXT, label_name TEXT)',
          [],
          () => {
            console.log('geom_vw_ssp_map table created successfully');
          },
          reject,
        );

        data.forEach(geom_vw_ssp_map => {
          tx.executeSql(
            'INSERT INTO geom_vw_ssp_map VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              geom_vw_ssp_map._URI || null,
              geom_vw_ssp_map.geom || null,
              geom_vw_ssp_map.TOP_LEVEL_AURI || null,
              geom_vw_ssp_map.CREATION_DATE || null,
              geom_vw_ssp_map.FINANCIAL_YEAR || null,
              geom_vw_ssp_map.BEAT || null,
              geom_vw_ssp_map.RANGE || null,
              geom_vw_ssp_map.DIVISION || null,
              geom_vw_ssp_map.CIRCLE || null,
              geom_vw_ssp_map.beat_code || null,
              geom_vw_ssp_map.range_code || null,
              geom_vw_ssp_map.division_code || null,
              geom_vw_ssp_map.circle_code || null,
              geom_vw_ssp_map.intervention_name || null,
              geom_vw_ssp_map.total_area_ha || null,
              geom_vw_ssp_map.label_name || null,
            ],
            (_, resultSet) =>
              console.log(
                'geom_vw_ssp_map data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting geom_vw_ssp_map data',
                error,
                geom_vw_ssp_map,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching geom_vw_ssp_map data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const geom_vw_ssp_map_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM geom_vw_ssp_map`, // Query the geom_vw_ssp_map table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying geom_vw_ssp_map`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const geom_vw_ssp_map_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM geom_vw_ssp_map`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from geom_vw_ssp_map:', resultSet);

          try {
            await geom_vw_ssp_map_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from geom_vw_ssp_map`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const gpx_file_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/gpx_file_lists?token=${token}`);
    const data = await response.json();
    console.log('Total gpx_file_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS gpx_file_lists',
          [],
          () => {
            console.log('gpx_file_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS gpx_file_lists (id TEXT, title TEXT, beat_code TEXT, core_uri TEXT, ssp_uri TEXT, file_name TEXT, file_path TEXT, loc TEXT, sort TEXT, status TEXT, created_at TEXT, created_by TEXT, updated_at TEXT, updated_by TEXT)',
          [],
          () => {
            console.log('gpx_file_lists table created successfully');
          },
          reject,
        );

        data.forEach(gpx_file_lists => {
          tx.executeSql(
            'INSERT INTO gpx_file_lists VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              gpx_file_lists.id || null,
              gpx_file_lists.title || null,
              gpx_file_lists.beat_code || null,
              gpx_file_lists.core_uri || null,
              gpx_file_lists.ssp_uri || null,
              gpx_file_lists.file_name || null,
              gpx_file_lists.file_path || null,
              gpx_file_lists.loc || null,
              gpx_file_lists.sort || null,
              gpx_file_lists.status || null,
              gpx_file_lists.created_at || null,
              gpx_file_lists.created_by || null,
              gpx_file_lists.updated_at || null,
              gpx_file_lists.updated_by || null,
            ],
            (_, resultSet) =>
              console.log(
                'gpx_file_lists data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting gpx_file_lists data',
                error,
                gpx_file_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching gpx_file_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const gpx_file_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM gpx_file_lists`, // Query the gpx_file_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying gpx_file_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const gpx_file_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM gpx_file_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from gpx_file_lists:', resultSet);

          try {
            await gpx_file_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from gpx_file_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const historys_api = async () => {
  try {
    const response = await fetch(`${baseApi}/historys?token=${token}`);
    const data = await response.json();
    console.log('Total historys items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS historys',
          [],
          () => {
            console.log('historys table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS historys (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('historys table created successfully');
          },
          reject,
        );

        data.forEach(historys => {
          tx.executeSql(
            'INSERT INTO historys VALUES (?, ?, ?, ?)',
            [
              historys.id || null,
              historys.name || null,
              historys.name_bn || null,
              historys.code || null,
            ],
            (_, resultSet) =>
              console.log('historys data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting historys data', error, historys);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching historys data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const historys_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM historys`, // Query the historys table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying historys`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const historys_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM historys`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from historys:', resultSet);

          try {
            await historys_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from historys`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const human_issues_api = async () => {
  try {
    const response = await fetch(`${baseApi}/human_issues?token=${token}`);
    const data = await response.json();
    console.log('Total human_issues items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS human_issues',
          [],
          () => {
            console.log('human_issues table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS human_issues (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('human_issues table created successfully');
          },
          reject,
        );

        data.forEach(human_issues => {
          tx.executeSql(
            'INSERT INTO human_issues VALUES (?, ?, ?, ?)',
            [
              human_issues.id || null,
              human_issues.name || null,
              human_issues.name_bn || null,
              human_issues.code || null,
            ],
            (_, resultSet) =>
              console.log('human_issues data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting human_issues data',
                error,
                human_issues,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching human_issues data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const human_issues_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM human_issues`, // Query the human_issues table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying human_issues`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const human_issues_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM human_issues`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from human_issues:', resultSet);

          try {
            await human_issues_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from human_issues`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const index_maps_api = async () => {
  try {
    const response = await fetch(`${baseApi}/index_maps?token=${token}`);
    const data = await response.json();
    console.log('Total index_maps items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS index_maps',
          [],
          () => {
            console.log('index_maps table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS index_maps (id TEXT, file_path TEXT, beat_code TEXT, created_by TEXT, created_at TEXT, updated_by TEXT, updated_at TEXT, map_title TEXT, from_gis_unit TEXT)',
          [],
          () => {
            console.log('index_maps table created successfully');
          },
          reject,
        );

        data.forEach(index_maps => {
          tx.executeSql(
            'INSERT INTO index_maps VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              index_maps.id || null,
              index_maps.file_path || null,
              index_maps.beat_code || null,
              index_maps.created_by || null,
              index_maps.created_at || null,
              index_maps.updated_by || null,
              index_maps.updated_at || null,
              index_maps.map_title || null,
              index_maps.from_gis_unit || null,
            ],
            (_, resultSet) =>
              console.log('index_maps data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting index_maps data',
                error,
                index_maps,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching index_maps data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const index_maps_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM index_maps`, // Query the index_maps table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying index_maps`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const index_maps_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM index_maps`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from index_maps:', resultSet);

          try {
            await index_maps_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from index_maps`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const intervention_lists_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/intervention_lists?token=${token}`,
    );
    const data = await response.json();
    console.log('Total intervention_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS intervention_lists',
          [],
          () => {
            console.log('intervention_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS intervention_lists (id TEXT, name TEXT, name_bn TEXT, code TEXT, ecozone_code TEXT)',
          [],
          () => {
            console.log('intervention_lists table created successfully');
          },
          reject,
        );

        data.forEach(intervention_lists => {
          tx.executeSql(
            'INSERT INTO intervention_lists VALUES (?, ?, ?, ?, ?)',
            [
              intervention_lists.id || null,
              intervention_lists.name || null,
              intervention_lists.name_bn || null,
              intervention_lists.code || null,
              intervention_lists.ecozone_code || null,
            ],
            (_, resultSet) =>
              console.log(
                'intervention_lists data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting intervention_lists data',
                error,
                intervention_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching intervention_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const intervention_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM intervention_lists`, // Query the intervention_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying intervention_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const intervention_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM intervention_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from intervention_lists:', resultSet);

          try {
            await intervention_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from intervention_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const intervention_sites_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/intervention_sites?token=${token}`,
    );
    const data = await response.json();
    console.log('Total intervention_sites items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS intervention_sites',
          [],
          () => {
            console.log('intervention_sites table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS intervention_sites (gid TEXT, et_id TEXT, name TEXT, year TEXT, beat TEXT, range TEXT, division TEXT, circle TEXT, plantation TEXT, beat_code TEXT, range_code TEXT, div_code TEXT, circ_code TEXT, geom TEXT)',
          [],
          () => {
            console.log('intervention_sites table created successfully');
          },
          reject,
        );

        data.forEach(intervention_sites => {
          tx.executeSql(
            'INSERT INTO intervention_sites VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              intervention_sites.gid || null,
              intervention_sites.et_id || null,
              intervention_sites.name || null,
              intervention_sites.year || null,
              intervention_sites.beat || null,
              intervention_sites.range || null,
              intervention_sites.division || null,
              intervention_sites.circle || null,
              intervention_sites.plantation || null,
              intervention_sites.beat_code || null,
              intervention_sites.range_code || null,
              intervention_sites.div_code || null,
              intervention_sites.circ_code || null,
              intervention_sites.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'intervention_sites data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting intervention_sites data',
                error,
                intervention_sites,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching intervention_sites data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const intervention_sites_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM intervention_sites`, // Query the intervention_sites table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying intervention_sites`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const intervention_sites_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM intervention_sites`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from intervention_sites:', resultSet);

          try {
            await intervention_sites_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from intervention_sites`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const intervention_sites_2d_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/intervention_sites_2d?token=${token}`,
    );
    const data = await response.json();
    console.log('Total intervention_sites_2d items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS intervention_sites_2d',
          [],
          () => {
            console.log('intervention_sites_2d table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS intervention_sites_2d (gid TEXT, et_id TEXT, name TEXT, year TEXT, beat TEXT, range TEXT, division TEXT, circle TEXT, plantation TEXT, beat_code TEXT, range_code TEXT, div_code TEXT, circ_code TEXT, geom TEXT)',
          [],
          () => {
            console.log('intervention_sites_2d table created successfully');
          },
          reject,
        );

        data.forEach(intervention_sites_2d => {
          tx.executeSql(
            'INSERT INTO intervention_sites_2d VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              intervention_sites_2d.gid || null,
              intervention_sites_2d.et_id || null,
              intervention_sites_2d.name || null,
              intervention_sites_2d.year || null,
              intervention_sites_2d.beat || null,
              intervention_sites_2d.range || null,
              intervention_sites_2d.division || null,
              intervention_sites_2d.circle || null,
              intervention_sites_2d.plantation || null,
              intervention_sites_2d.beat_code || null,
              intervention_sites_2d.range_code || null,
              intervention_sites_2d.div_code || null,
              intervention_sites_2d.circ_code || null,
              intervention_sites_2d.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'intervention_sites_2d data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting intervention_sites_2d data',
                error,
                intervention_sites_2d,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching intervention_sites_2d data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const intervention_sites_2d_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM intervention_sites_2d`, // Query the intervention_sites_2d table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying intervention_sites_2d`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const intervention_sites_2d_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM intervention_sites_2d`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log(
            'All data deleted from intervention_sites_2d:',
            resultSet,
          );

          try {
            await intervention_sites_2d_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(
            `Error deleting data from intervention_sites_2d`,
            error,
          );
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const intervention_sites_bk_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/intervention_sites_bk?token=${token}`,
    );
    const data = await response.json();
    console.log('Total intervention_sites_bk items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS intervention_sites_bk',
          [],
          () => {
            console.log('intervention_sites_bk table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS intervention_sites_bk (gid TEXT, et_id TEXT, name TEXT, year TEXT, beat TEXT, range TEXT, division TEXT, circle TEXT, plantation TEXT, beat_code TEXT, range_code TEXT, div_code TEXT, circ_code TEXT, geom TEXT)',
          [],
          () => {
            console.log('intervention_sites_bk table created successfully');
          },
          reject,
        );

        data.forEach(intervention_sites_bk => {
          tx.executeSql(
            'INSERT INTO intervention_sites_bk VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              intervention_sites_bk.gid || null,
              intervention_sites_bk.et_id || null,
              intervention_sites_bk.name || null,
              intervention_sites_bk.year || null,
              intervention_sites_bk.beat || null,
              intervention_sites_bk.range || null,
              intervention_sites_bk.division || null,
              intervention_sites_bk.circle || null,
              intervention_sites_bk.plantation || null,
              intervention_sites_bk.beat_code || null,
              intervention_sites_bk.range_code || null,
              intervention_sites_bk.div_code || null,
              intervention_sites_bk.circ_code || null,
              intervention_sites_bk.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'intervention_sites_bk data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting intervention_sites_bk data',
                error,
                intervention_sites_bk,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching intervention_sites_bk data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const intervention_sites_bk_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM intervention_sites_bk`, // Query the intervention_sites_bk table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying intervention_sites_bk`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const intervention_sites_bk_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM intervention_sites_bk`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log(
            'All data deleted from intervention_sites_bk:',
            resultSet,
          );

          try {
            await intervention_sites_bk_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(
            `Error deleting data from intervention_sites_bk`,
            error,
          );
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const land_cover_api = async () => {
  try {
    const response = await fetch(`${baseApi}/land_cover?token=${token}`);
    const data = await response.json();
    console.log('Total land_cover items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS land_cover',
          [],
          () => {
            console.log('land_cover table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS land_cover (gid TEXT, fid_lc_201 TEXT, code_r TEXT, class_r TEXT, cd_class_r TEXT, area_sqk TEXT, id TEXT, code_lc15 TEXT, desc_lc15_ TEXT, f_nf TEXT, f_s_nf TEXT, categories TEXT, fid_distri TEXT, distname TEXT, divname_1 TEXT, shape_leng TEXT, shape_le_1 TEXT, shape_area TEXT, geom TEXT)',
          [],
          () => {
            console.log('land_cover table created successfully');
          },
          reject,
        );

        data.forEach(land_cover => {
          tx.executeSql(
            'INSERT INTO land_cover VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              land_cover.gid || null,
              land_cover.fid_lc_201 || null,
              land_cover.code_r || null,
              land_cover.class_r || null,
              land_cover.cd_class_r || null,
              land_cover.area_sqk || null,
              land_cover.id || null,
              land_cover.code_lc15 || null,
              land_cover.desc_lc15_ || null,
              land_cover.f_nf || null,
              land_cover.f_s_nf || null,
              land_cover.categories || null,
              land_cover.fid_distri || null,
              land_cover.distname || null,
              land_cover.divname_1 || null,
              land_cover.shape_leng || null,
              land_cover.shape_le_1 || null,
              land_cover.shape_area || null,
              land_cover.geom || null,
            ],
            (_, resultSet) =>
              console.log('land_cover data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting land_cover data',
                error,
                land_cover,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching land_cover data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const land_cover_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM land_cover`, // Query the land_cover table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying land_cover`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const land_cover_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM land_cover`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from land_cover:', resultSet);

          try {
            await land_cover_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from land_cover`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const inundations_api = async () => {
  try {
    const response = await fetch(`${baseApi}/inundations?token=${token}`);
    const data = await response.json();
    console.log('Total inundations items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS inundations',
          [],
          () => {
            console.log('inundations table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS inundations (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('inundations table created successfully');
          },
          reject,
        );

        data.forEach(inundations => {
          tx.executeSql(
            'INSERT INTO inundations VALUES (?, ?, ?, ?, ?)',
            [
              inundations.id || null,
              inundations.name || null,
              inundations.name_bn || null,
              inundations.name_short || null,
              inundations.code || null,
            ],
            (_, resultSet) =>
              console.log('inundations data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting inundations data',
                error,
                inundations,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching inundations data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const inundations_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM inundations`, // Query the inundations table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying inundations`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const inundations_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM inundations`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from inundations:', resultSet);

          try {
            await inundations_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from inundations`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const jur_ad_districts_api = async () => {
  try {
    const response = await fetch(`${baseApi}/jur_ad_districts?token=${token}`);
    const data = await response.json();
    console.log('Total jur_ad_districts items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS jur_ad_districts',
          [],
          () => {
            console.log('jur_ad_districts table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS jur_ad_districts (id TEXT, name TEXT, name_bn TEXT, code TEXT, division_code TEXT)',
          [],
          () => {
            console.log('jur_ad_districts table created successfully');
          },
          reject,
        );

        data.forEach(jur_ad_districts => {
          tx.executeSql(
            'INSERT INTO jur_ad_districts VALUES (?, ?, ?, ?, ?)',
            [
              jur_ad_districts.id || null,
              jur_ad_districts.name || null,
              jur_ad_districts.name_bn || null,
              jur_ad_districts.code || null,
              jur_ad_districts.division_code || null,
            ],
            (_, resultSet) =>
              console.log(
                'jur_ad_districts data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting jur_ad_districts data',
                error,
                jur_ad_districts,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching jur_ad_districts data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const jur_ad_districts_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM jur_ad_districts`, // Query the jur_ad_districts table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying jur_ad_districts`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const jur_ad_districts_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM jur_ad_districts`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from jur_ad_districts:', resultSet);

          try {
            await jur_ad_districts_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from jur_ad_districts`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const jur_ad_divisions_api = async () => {
  try {
    const response = await fetch(`${baseApi}/jur_ad_divisions?token=${token}`);
    const data = await response.json();
    console.log('Total jur_ad_divisions items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS jur_ad_divisions',
          [],
          () => {
            console.log('jur_ad_divisions table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS jur_ad_divisions (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('jur_ad_divisions table created successfully');
          },
          reject,
        );

        data.forEach(jur_ad_divisions => {
          tx.executeSql(
            'INSERT INTO jur_ad_divisions VALUES (?, ?, ?, ?)',
            [
              jur_ad_divisions.id || null,
              jur_ad_divisions.name || null,
              jur_ad_divisions.name_bn || null,
              jur_ad_divisions.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'jur_ad_divisions data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting jur_ad_divisions data',
                error,
                jur_ad_divisions,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching jur_ad_divisions data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const jur_ad_divisions_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM jur_ad_divisions`, // Query the jur_ad_divisions table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying jur_ad_divisions`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const jur_ad_divisions_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM jur_ad_divisions`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from jur_ad_divisions:', resultSet);

          try {
            await jur_ad_divisions_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from jur_ad_divisions`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const jur_ad_upazillas_api = async () => {
  try {
    const response = await fetch(`${baseApi}/jur_ad_upazillas?token=${token}`);
    const data = await response.json();
    console.log('Total jur_ad_upazillas items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS jur_ad_upazillas',
          [],
          () => {
            console.log('jur_ad_upazillas table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS jur_ad_upazillas (id TEXT, name TEXT, name_bn TEXT, code TEXT, district_code TEXT)',
          [],
          () => {
            console.log('jur_ad_upazillas table created successfully');
          },
          reject,
        );

        data.forEach(jur_ad_upazillas => {
          tx.executeSql(
            'INSERT INTO jur_ad_upazillas VALUES (?, ?, ?, ?, ?)',
            [
              jur_ad_upazillas.id || null,
              jur_ad_upazillas.name || null,
              jur_ad_upazillas.name_bn || null,
              jur_ad_upazillas.code || null,
              jur_ad_upazillas.district_code || null,
            ],
            (_, resultSet) =>
              console.log(
                'jur_ad_upazillas data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting jur_ad_upazillas data',
                error,
                jur_ad_upazillas,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching jur_ad_upazillas data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const jur_ad_upazillas_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM jur_ad_upazillas`, // Query the jur_ad_upazillas table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying jur_ad_upazillas`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const jur_ad_upazillas_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM jur_ad_upazillas`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from jur_ad_upazillas:', resultSet);

          try {
            await jur_ad_upazillas_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from jur_ad_upazillas`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const jur_fd_beats_api = async () => {
  try {
    const response = await fetch(`${baseApi}/jur_fd_beats?token=${token}`);
    const data = await response.json();
    console.log('Total jur_fd_beats items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS jur_fd_beats',
          [],
          () => {
            console.log('jur_fd_beats table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS jur_fd_beats (id TEXT, name TEXT, name_bn TEXT, code TEXT, range_code TEXT)',
          [],
          () => {
            console.log('jur_fd_beats table created successfully');
          },
          reject,
        );

        data.forEach(jur_fd_beats => {
          tx.executeSql(
            'INSERT INTO jur_fd_beats VALUES (?, ?, ?, ?, ?)',
            [
              jur_fd_beats.id || null,
              jur_fd_beats.name || null,
              jur_fd_beats.name_bn || null,
              jur_fd_beats.code || null,
              jur_fd_beats.range_code || null,
            ],
            (_, resultSet) =>
              console.log('jur_fd_beats data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting jur_fd_beats data',
                error,
                jur_fd_beats,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching jur_fd_beats data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const jur_fd_beats_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM jur_fd_beats`, // Query the jur_fd_beats table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying jur_fd_beats`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const jur_fd_beats_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM jur_fd_beats`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from jur_fd_beats:', resultSet);

          try {
            await jur_fd_beats_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from jur_fd_beats`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const jur_fd_circles_api = async () => {
  try {
    const response = await fetch(`${baseApi}/jur_fd_circles?token=${token}`);
    const data = await response.json();
    console.log('Total jur_fd_circles items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS jur_fd_circles',
          [],
          () => {
            console.log('jur_fd_circles table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS jur_fd_circles (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('jur_fd_circles table created successfully');
          },
          reject,
        );

        data.forEach(jur_fd_circles => {
          tx.executeSql(
            'INSERT INTO jur_fd_circles VALUES (?, ?, ?, ?)',
            [
              jur_fd_circles.id || null,
              jur_fd_circles.name || null,
              jur_fd_circles.name_bn || null,
              jur_fd_circles.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'jur_fd_circles data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting jur_fd_circles data',
                error,
                jur_fd_circles,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching jur_fd_circles data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const jur_fd_circles_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM jur_fd_circles`, // Query the jur_fd_circles table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying jur_fd_circles`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const jur_fd_circles_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM jur_fd_circles`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from jur_fd_circles:', resultSet);

          try {
            await jur_fd_circles_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from jur_fd_circles`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const jur_fd_divisions_api = async () => {
  try {
    const response = await fetch(`${baseApi}/jur_fd_divisions?token=${token}`);
    const data = await response.json();
    console.log('Total jur_fd_divisions items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS jur_fd_divisions',
          [],
          () => {
            console.log('jur_fd_divisions table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS jur_fd_divisions (id TEXT, name TEXT, name_bn TEXT, code TEXT, circle_code TEXT)',
          [],
          () => {
            console.log('jur_fd_divisions table created successfully');
          },
          reject,
        );

        data.forEach(jur_fd_divisions => {
          tx.executeSql(
            'INSERT INTO jur_fd_divisions VALUES (?, ?, ?, ?, ?)',
            [
              jur_fd_divisions.id || null,
              jur_fd_divisions.name || null,
              jur_fd_divisions.name_bn || null,
              jur_fd_divisions.code || null,
              jur_fd_divisions.circle_code || null,
            ],
            (_, resultSet) =>
              console.log(
                'jur_fd_divisions data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting jur_fd_divisions data',
                error,
                jur_fd_divisions,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching jur_fd_divisions data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const jur_fd_divisions_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM jur_fd_divisions`, // Query the jur_fd_divisions table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying jur_fd_divisions`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const jur_fd_divisions_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM jur_fd_divisions`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from jur_fd_divisions:', resultSet);

          try {
            await jur_fd_divisions_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from jur_fd_divisions`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
// export const jur_fd_ecozones_api = async () => {
//   try {
// 	const response = await fetch(`${baseApi}/jur_fd_ecozones?token=${token}`);
// 	const data = await response.json();
// 	console.log('Total jur_fd_ecozones items from API:', data.length);

// 	await new Promise((resolve, reject) => {
// 	  database.transaction(tx => {
// 		tx.executeSql(
// 		  'DROP TABLE IF EXISTS jur_fd_ecozones',
// 		  [],
// 		  () => {
// 			console.log('jur_fd_ecozones table dropped successfully');
// 		  },
// 		  reject,
// 		);

// 		tx.executeSql(
// 		  'CREATE TABLE IF NOT EXISTS jur_fd_ecozones (id TEXT, name TEXT, name_bn TEXT, code TEXT, raw_code TEXT)',
// 		  [],
// 		  () => {
// 			console.log('jur_fd_ecozones table created successfully');
// 		  },
// 		  reject,
// 		);

// 		data.forEach(jur_fd_ecozones => {
// 		  tx.executeSql(
// 			'INSERT INTO jur_fd_ecozones VALUES (?, ?, ?, ?, ?)',
// 			[
// 			  jur_fd_ecozones.id || null,
// jur_fd_ecozones. name || null,
// jur_fd_ecozones. name_bn || null,
// jur_fd_ecozones. code || null,
// jur_fd_ecozones. raw_code || null,

// 			],
// 			(_, resultSet) =>
// 			  console.log('jur_fd_ecozones data inserted successfully', resultSet),
// 			(_, error) => {
// 			  console.error('Error inserting jur_fd_ecozones data', error, jur_fd_ecozones);
// 			},
// 		  );
// 		});
// 		resolve();
// 	  });
// 	});
//   } catch (error) {
// 	console.error('Error fetching jur_fd_ecozones data from API', error);
//   }
// };
//API End
//---------------------------------------------------------//
// List Start

// export const jur_fd_ecozones_list = async () => {
//   return new Promise((resolve, reject) => {
// 	database.transaction(tx => {
// 	  tx.executeSql(
// 		`SELECT * FROM jur_fd_ecozones`, // Query the jur_fd_ecozones table
// 		[],
// 		(_, resultSet) => {
// 		  console.log('ResultSet:', resultSet); // Log the resultSet to debug
// 		  const data = [];
// 		  for (let i = 0; i < resultSet.rows.length; i++) {
// 			const row = resultSet.rows.item(i);
// 			data.push(row);
// 		  }
// 		  resolve(data);
// 		},
// 		(_, error) => {
// 		  console.error(`Error querying jur_fd_ecozones`, error);
// 		  reject(error);
// 		},
// 	  );
// 	});
//   });
// };
// List End
//---------------------------------------------------------//
// Delete Start
// export const jur_fd_ecozones_delete = async () => {
//   return new Promise((resolve, reject) => {
//     database.transaction(tx => {
//       tx.executeSql(
//         `DELETE FROM jur_fd_ecozones`, // Correct SQL to delete all rows
//         [],
//         async (_, resultSet) => {
//           console.log('All data deleted from jur_fd_ecozones:', resultSet);

//           try {

//             await jur_fd_ecozones_api();
//             resolve(resultSet);
//           } catch (apiError) {
//             console.error('Error fetching data from API:', apiError);
//             reject(apiError);
//           }
//         },
//         (_, error) => {
//           console.error(`Error deleting data from jur_fd_ecozones`, error);
//           reject(error); // Reject in case of a SQL error
//         },
//       );
//     });
//   });
// };

// Delete End
//---------------------------------------------------------//
//API Start
export const jur_fd_levels_api = async () => {
  try {
    const response = await fetch(`${baseApi}/jur_fd_levels?token=${token}`);
    const data = await response.json();
    console.log('Total jur_fd_levels items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS jur_fd_levels',
          [],
          () => {
            console.log('jur_fd_levels table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS jur_fd_levels (id TEXT, name TEXT)',
          [],
          () => {
            console.log('jur_fd_levels table created successfully');
          },
          reject,
        );

        data.forEach(jur_fd_levels => {
          tx.executeSql(
            'INSERT INTO jur_fd_levels VALUES (?, ?)',
            [jur_fd_levels.id || null, jur_fd_levels.name || null],
            (_, resultSet) =>
              console.log(
                'jur_fd_levels data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting jur_fd_levels data',
                error,
                jur_fd_levels,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching jur_fd_levels data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const jur_fd_levels_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM jur_fd_levels`, // Query the jur_fd_levels table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying jur_fd_levels`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const jur_fd_levels_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM jur_fd_levels`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from jur_fd_levels:', resultSet);

          try {
            await jur_fd_levels_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from jur_fd_levels`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const jur_fd_ranges_api = async () => {
  try {
    const response = await fetch(`${baseApi}/jur_fd_ranges?token=${token}`);
    const data = await response.json();
    console.log('Total jur_fd_ranges items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS jur_fd_ranges',
          [],
          () => {
            console.log('jur_fd_ranges table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS jur_fd_ranges (id TEXT, name TEXT, name_bn TEXT, code TEXT, division_code TEXT)',
          [],
          () => {
            console.log('jur_fd_ranges table created successfully');
          },
          reject,
        );

        data.forEach(jur_fd_ranges => {
          tx.executeSql(
            'INSERT INTO jur_fd_ranges VALUES (?, ?, ?, ?, ?)',
            [
              jur_fd_ranges.id || null,
              jur_fd_ranges.name || null,
              jur_fd_ranges.name_bn || null,
              jur_fd_ranges.code || null,
              jur_fd_ranges.division_code || null,
            ],
            (_, resultSet) =>
              console.log(
                'jur_fd_ranges data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting jur_fd_ranges data',
                error,
                jur_fd_ranges,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching jur_fd_ranges data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const jur_fd_ranges_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM jur_fd_ranges`, // Query the jur_fd_ranges table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying jur_fd_ranges`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const jur_fd_ranges_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM jur_fd_ranges`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from jur_fd_ranges:', resultSet);

          try {
            await jur_fd_ranges_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from jur_fd_ranges`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const landcover_class_lists_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/landcover_class_lists?token=${token}`,
    );
    const data = await response.json();
    console.log('Total landcover_class_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS landcover_class_lists',
          [],
          () => {
            console.log('landcover_class_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS landcover_class_lists (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('landcover_class_lists table created successfully');
          },
          reject,
        );

        data.forEach(landcover_class_lists => {
          tx.executeSql(
            'INSERT INTO landcover_class_lists VALUES (?, ?, ?, ?)',
            [
              landcover_class_lists.id || null,
              landcover_class_lists.name || null,
              landcover_class_lists.name_bn || null,
              landcover_class_lists.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'landcover_class_lists data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting landcover_class_lists data',
                error,
                landcover_class_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching landcover_class_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const landcover_class_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM landcover_class_lists`, // Query the landcover_class_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying landcover_class_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const landcover_class_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM landcover_class_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log(
            'All data deleted from landcover_class_lists:',
            resultSet,
          );

          try {
            await landcover_class_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(
            `Error deleting data from landcover_class_lists`,
            error,
          );
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const lmvh_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/lmvh_lists?token=${token}`);
    const data = await response.json();
    console.log('Total lmvh_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS lmvh_lists',
          [],
          () => {
            console.log('lmvh_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS lmvh_lists (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('lmvh_lists table created successfully');
          },
          reject,
        );

        data.forEach(lmvh_lists => {
          tx.executeSql(
            'INSERT INTO lmvh_lists VALUES (?, ?, ?, ?)',
            [
              lmvh_lists.id || null,
              lmvh_lists.name || null,
              lmvh_lists.name_bn || null,
              lmvh_lists.code || null,
            ],
            (_, resultSet) =>
              console.log('lmvh_lists data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting lmvh_lists data',
                error,
                lmvh_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching lmvh_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const lmvh_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM lmvh_lists`, // Query the lmvh_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying lmvh_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const lmvh_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM lmvh_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from lmvh_lists:', resultSet);

          try {
            await lmvh_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from lmvh_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const logistic_conditions_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/logistic_conditions?token=${token}`,
    );
    const data = await response.json();
    console.log('Total logistic_conditions items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS logistic_conditions',
          [],
          () => {
            console.log('logistic_conditions table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS logistic_conditions (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('logistic_conditions table created successfully');
          },
          reject,
        );

        data.forEach(logistic_conditions => {
          tx.executeSql(
            'INSERT INTO logistic_conditions VALUES (?, ?, ?, ?)',
            [
              logistic_conditions.id || null,
              logistic_conditions.name || null,
              logistic_conditions.name_bn || null,
              logistic_conditions.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'logistic_conditions data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting logistic_conditions data',
                error,
                logistic_conditions,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching logistic_conditions data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const logistic_conditions_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM logistic_conditions`, // Query the logistic_conditions table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying logistic_conditions`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const logistic_conditions_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM logistic_conditions`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from logistic_conditions:', resultSet);

          try {
            await logistic_conditions_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from logistic_conditions`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const migrations_api = async () => {
  try {
    const response = await fetch(`${baseApi}/migrations?token=${token}`);
    const data = await response.json();
    console.log('Total migrations items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS migrations',
          [],
          () => {
            console.log('migrations table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS migrations (id TEXT, migration TEXT, batch TEXT)',
          [],
          () => {
            console.log('migrations table created successfully');
          },
          reject,
        );

        data.forEach(migrations => {
          tx.executeSql(
            'INSERT INTO migrations VALUES (?, ?, ?)',
            [
              migrations.id || null,
              migrations.migration || null,
              migrations.batch || null,
            ],
            (_, resultSet) =>
              console.log('migrations data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting migrations data',
                error,
                migrations,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching migrations data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const migrations_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM migrations`, // Query the migrations table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying migrations`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const migrations_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM migrations`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from migrations:', resultSet);

          try {
            await migrations_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from migrations`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const month_inun_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/month_inun_lists?token=${token}`);
    const data = await response.json();
    console.log('Total month_inun_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS month_inun_lists',
          [],
          () => {
            console.log('month_inun_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS month_inun_lists (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('month_inun_lists table created successfully');
          },
          reject,
        );

        data.forEach(month_inun_lists => {
          tx.executeSql(
            'INSERT INTO month_inun_lists VALUES (?, ?, ?, ?)',
            [
              month_inun_lists.id || null,
              month_inun_lists.name || null,
              month_inun_lists.name_bn || null,
              month_inun_lists.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'month_inun_lists data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting month_inun_lists data',
                error,
                month_inun_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching month_inun_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const month_inun_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM month_inun_lists`, // Query the month_inun_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying month_inun_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const month_inun_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM month_inun_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from month_inun_lists:', resultSet);

          try {
            await month_inun_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from month_inun_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const months_api = async () => {
  try {
    const response = await fetch(`${baseApi}/months?token=${token}`);
    const data = await response.json();
    console.log('Total months items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS months',
          [],
          () => {
            console.log('months table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS months (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('months table created successfully');
          },
          reject,
        );

        data.forEach(months => {
          tx.executeSql(
            'INSERT INTO months VALUES (?, ?, ?, ?)',
            [
              months.id || null,
              months.name || null,
              months.name_bn || null,
              months.code || null,
            ],
            (_, resultSet) =>
              console.log('months data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting months data', error, months);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching months data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const months_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM months`, // Query the months table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying months`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const months_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM months`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from months:', resultSet);

          try {
            await months_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from months`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const mouza_types_api = async () => {
  try {
    const response = await fetch(`${baseApi}/mouza_types?token=${token}`);
    const data = await response.json();
    console.log('Total mouza_types items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS mouza_types',
          [],
          () => {
            console.log('mouza_types table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS mouza_types (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('mouza_types table created successfully');
          },
          reject,
        );

        data.forEach(mouza_types => {
          tx.executeSql(
            'INSERT INTO mouza_types VALUES (?, ?, ?, ?)',
            [
              mouza_types.id || null,
              mouza_types.name || null,
              mouza_types.name_bn || null,
              mouza_types.code || null,
            ],
            (_, resultSet) =>
              console.log('mouza_types data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting mouza_types data',
                error,
                mouza_types,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching mouza_types data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const mouza_types_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM mouza_types`, // Query the mouza_types table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying mouza_types`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const mouza_types_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM mouza_types`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from mouza_types:', resultSet);

          try {
            await mouza_types_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from mouza_types`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const natural_issues_api = async () => {
  try {
    const response = await fetch(`${baseApi}/natural_issues?token=${token}`);
    const data = await response.json();
    console.log('Total natural_issues items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS natural_issues',
          [],
          () => {
            console.log('natural_issues table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS natural_issues (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('natural_issues table created successfully');
          },
          reject,
        );

        data.forEach(natural_issues => {
          tx.executeSql(
            'INSERT INTO natural_issues VALUES (?, ?, ?, ?)',
            [
              natural_issues.id || null,
              natural_issues.name || null,
              natural_issues.name_bn || null,
              natural_issues.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'natural_issues data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting natural_issues data',
                error,
                natural_issues,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching natural_issues data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const natural_issues_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM natural_issues`, // Query the natural_issues table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying natural_issues`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const natural_issues_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM natural_issues`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from natural_issues:', resultSet);

          try {
            await natural_issues_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from natural_issues`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const nursery_location_api = async () => {
  try {
    const response = await fetch(`${baseApi}/nursery_location?token=${token}`);
    const data = await response.json();
    console.log('Total nursery_location items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS nursery_location',
          [],
          () => {
            console.log('nursery_location table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS nursery_location (gid TEXT, core_uri TEXT, lat TEXT, lng TEXT, geom TEXT)',
          [],
          () => {
            console.log('nursery_location table created successfully');
          },
          reject,
        );

        data.forEach(nursery_location => {
          tx.executeSql(
            'INSERT INTO nursery_location VALUES (?, ?, ?, ?, ?)',
            [
              nursery_location.gid || null,
              nursery_location.core_uri || null,
              nursery_location.lat || null,
              nursery_location.lng || null,
              nursery_location.geom || null,
            ],
            (_, resultSet) =>
              console.log(
                'nursery_location data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting nursery_location data',
                error,
                nursery_location,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching nursery_location data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const nursery_location_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM nursery_location`, // Query the nursery_location table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying nursery_location`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const nursery_location_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM nursery_location`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from nursery_location:', resultSet);

          try {
            await nursery_location_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from nursery_location`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const occupation_coms_api = async () => {
  try {
    const response = await fetch(`${baseApi}/occupation_coms?token=${token}`);
    const data = await response.json();
    console.log('Total occupation_coms items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS occupation_coms',
          [],
          () => {
            console.log('occupation_coms table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS occupation_coms (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('occupation_coms table created successfully');
          },
          reject,
        );

        data.forEach(occupation_coms => {
          tx.executeSql(
            'INSERT INTO occupation_coms VALUES (?, ?, ?, ?)',
            [
              occupation_coms.id || null,
              occupation_coms.name || null,
              occupation_coms.name_bn || null,
              occupation_coms.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'occupation_coms data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting occupation_coms data',
                error,
                occupation_coms,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching occupation_coms data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const occupation_coms_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM occupation_coms`, // Query the occupation_coms table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying occupation_coms`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const occupation_coms_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM occupation_coms`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from occupation_coms:', resultSet);

          try {
            await occupation_coms_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from occupation_coms`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const origins_api = async () => {
  try {
    const response = await fetch(`${baseApi}/origins?token=${token}`);
    const data = await response.json();
    console.log('Total origins items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS origins',
          [],
          () => {
            console.log('origins table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS origins (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('origins table created successfully');
          },
          reject,
        );

        data.forEach(origins => {
          tx.executeSql(
            'INSERT INTO origins VALUES (?, ?, ?, ?, ?)',
            [
              origins.id || null,
              origins.name || null,
              origins.name_bn || null,
              origins.name_short || null,
              origins.code || null,
            ],
            (_, resultSet) =>
              console.log('origins data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting origins data', error, origins);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching origins data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const origins_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM origins`, // Query the origins table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying origins`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const origins_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM origins`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from origins:', resultSet);

          try {
            await origins_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from origins`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const password_resets_api = async () => {
  try {
    const response = await fetch(`${baseApi}/password_resets?token=${token}`);
    const data = await response.json();
    console.log('Total password_resets items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS password_resets',
          [],
          () => {
            console.log('password_resets table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS password_resets (email TEXT, token TEXT, created_at TEXT)',
          [],
          () => {
            console.log('password_resets table created successfully');
          },
          reject,
        );

        data.forEach(password_resets => {
          tx.executeSql(
            'INSERT INTO password_resets VALUES (?, ?, ?)',
            [
              password_resets.email || null,
              password_resets.token || null,
              password_resets.created_at || null,
            ],
            (_, resultSet) =>
              console.log(
                'password_resets data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting password_resets data',
                error,
                password_resets,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching password_resets data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const password_resets_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM password_resets`, // Query the password_resets table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying password_resets`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const password_resets_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM password_resets`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from password_resets:', resultSet);

          try {
            await password_resets_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from password_resets`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const pct10_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/pct10_lists?token=${token}`);
    const data = await response.json();
    console.log('Total pct10_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS pct10_lists',
          [],
          () => {
            console.log('pct10_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS pct10_lists (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('pct10_lists table created successfully');
          },
          reject,
        );

        data.forEach(pct10_lists => {
          tx.executeSql(
            'INSERT INTO pct10_lists VALUES (?, ?, ?, ?, ?)',
            [
              pct10_lists.id || null,
              pct10_lists.name || null,
              pct10_lists.name_bn || null,
              pct10_lists.name_short || null,
              pct10_lists.code || null,
            ],
            (_, resultSet) =>
              console.log('pct10_lists data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting pct10_lists data',
                error,
                pct10_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching pct10_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const pct10_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM pct10_lists`, // Query the pct10_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying pct10_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const pct10_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM pct10_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from pct10_lists:', resultSet);

          try {
            await pct10_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from pct10_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const percents_api = async () => {
  try {
    const response = await fetch(`${baseApi}/percents?token=${token}`);
    const data = await response.json();
    console.log('Total percents items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS percents',
          [],
          () => {
            console.log('percents table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS percents (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('percents table created successfully');
          },
          reject,
        );

        data.forEach(percents => {
          tx.executeSql(
            'INSERT INTO percents VALUES (?, ?, ?, ?, ?)',
            [
              percents.id || null,
              percents.name || null,
              percents.name_bn || null,
              percents.name_short || null,
              percents.code || null,
            ],
            (_, resultSet) =>
              console.log('percents data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting percents data', error, percents);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching percents data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const percents_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM percents`, // Query the percents table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying percents`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const percents_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM percents`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from percents:', resultSet);

          try {
            await percents_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from percents`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const personal_access_tokens_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/personal_access_tokens?token=${token}`,
    );
    const data = await response.json();
    console.log('Total personal_access_tokens items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS personal_access_tokens',
          [],
          () => {
            console.log('personal_access_tokens table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS personal_access_tokens (id TEXT, tokenable_type TEXT, tokenable_id TEXT, name TEXT, token TEXT, abilities TEXT, last_used_at TEXT, created_at TEXT, updated_at TEXT)',
          [],
          () => {
            console.log('personal_access_tokens table created successfully');
          },
          reject,
        );

        data.forEach(personal_access_tokens => {
          tx.executeSql(
            'INSERT INTO personal_access_tokens VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              personal_access_tokens.id || null,
              personal_access_tokens.tokenable_type || null,
              personal_access_tokens.tokenable_id || null,
              personal_access_tokens.name || null,
              personal_access_tokens.token || null,
              personal_access_tokens.abilities || null,
              personal_access_tokens.last_used_at || null,
              personal_access_tokens.created_at || null,
              personal_access_tokens.updated_at || null,
            ],
            (_, resultSet) =>
              console.log(
                'personal_access_tokens data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting personal_access_tokens data',
                error,
                personal_access_tokens,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching personal_access_tokens data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const personal_access_tokens_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM personal_access_tokens`, // Query the personal_access_tokens table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying personal_access_tokens`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const personal_access_tokens_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM personal_access_tokens`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log(
            'All data deleted from personal_access_tokens:',
            resultSet,
          );

          try {
            await personal_access_tokens_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(
            `Error deleting data from personal_access_tokens`,
            error,
          );
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const plantation_journals_api = async () => {
  try {
    const response = await fetch(
      `${baseApi}/plantation_journals?token=${token}`,
    );
    const data = await response.json();
    console.log('Total plantation_journals items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS plantation_journals',
          [],
          () => {
            console.log('plantation_journals table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS plantation_journals (id TEXT, title TEXT, description TEXT, file_name TEXT, file_path TEXT, file_type TEXT, file_cat TEXT, plantation_type TEXT, plantation_year TEXT, area_hactor TEXT, project TEXT, sort TEXT, status TEXT, circle_code TEXT, division_code TEXT, range_code TEXT, beat_code TEXT, created_at TEXT, created_by TEXT, updated_at TEXT, updated_by TEXT, deleted_at TEXT, deleted_by TEXT)',
          [],
          () => {
            console.log('plantation_journals table created successfully');
          },
          reject,
        );

        data.forEach(plantation_journals => {
          tx.executeSql(
            'INSERT INTO plantation_journals VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              plantation_journals.id || null,
              plantation_journals.title || null,
              plantation_journals.description || null,
              plantation_journals.file_name || null,
              plantation_journals.file_path || null,
              plantation_journals.file_type || null,
              plantation_journals.file_cat || null,
              plantation_journals.plantation_type || null,
              plantation_journals.plantation_year || null,
              plantation_journals.area_hactor || null,
              plantation_journals.project || null,
              plantation_journals.sort || null,
              plantation_journals.status || null,
              plantation_journals.circle_code || null,
              plantation_journals.division_code || null,
              plantation_journals.range_code || null,
              plantation_journals.beat_code || null,
              plantation_journals.created_at || null,
              plantation_journals.created_by || null,
              plantation_journals.updated_at || null,
              plantation_journals.updated_by || null,
              plantation_journals.deleted_at || null,
              plantation_journals.deleted_by || null,
            ],
            (_, resultSet) =>
              console.log(
                'plantation_journals data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting plantation_journals data',
                error,
                plantation_journals,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching plantation_journals data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const plantation_journals_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM plantation_journals`, // Query the plantation_journals table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying plantation_journals`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const plantation_journals_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM plantation_journals`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from plantation_journals:', resultSet);

          try {
            await plantation_journals_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from plantation_journals`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const planting_modes_api = async () => {
  try {
    const response = await fetch(`${baseApi}/planting_modes?token=${token}`);
    const data = await response.json();
    console.log('Total planting_modes items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS planting_modes',
          [],
          () => {
            console.log('planting_modes table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS planting_modes (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('planting_modes table created successfully');
          },
          reject,
        );

        data.forEach(planting_modes => {
          tx.executeSql(
            'INSERT INTO planting_modes VALUES (?, ?, ?, ?)',
            [
              planting_modes.id || null,
              planting_modes.name || null,
              planting_modes.name_bn || null,
              planting_modes.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'planting_modes data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting planting_modes data',
                error,
                planting_modes,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching planting_modes data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const planting_modes_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM planting_modes`, // Query the planting_modes table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying planting_modes`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const planting_modes_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM planting_modes`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from planting_modes:', resultSet);

          try {
            await planting_modes_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from planting_modes`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const plot_types_api = async () => {
  try {
    const response = await fetch(`${baseApi}/plot_types?token=${token}`);
    const data = await response.json();
    console.log('Total plot_types items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS plot_types',
          [],
          () => {
            console.log('plot_types table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS plot_types (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('plot_types table created successfully');
          },
          reject,
        );

        data.forEach(plot_types => {
          tx.executeSql(
            'INSERT INTO plot_types VALUES (?, ?, ?, ?, ?)',
            [
              plot_types.id || null,
              plot_types.name || null,
              plot_types.name_bn || null,
              plot_types.name_short || null,
              plot_types.code || null,
            ],
            (_, resultSet) =>
              console.log('plot_types data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting plot_types data',
                error,
                plot_types,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching plot_types data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const plot_types_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM plot_types`, // Query the plot_types table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying plot_types`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const plot_types_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM plot_types`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from plot_types:', resultSet);

          try {
            await plot_types_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from plot_types`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const polytypes_api = async () => {
  try {
    const response = await fetch(`${baseApi}/polytypes?token=${token}`);
    const data = await response.json();
    console.log('Total polytypes items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS polytypes',
          [],
          () => {
            console.log('polytypes table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS polytypes (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('polytypes table created successfully');
          },
          reject,
        );

        data.forEach(polytypes => {
          tx.executeSql(
            'INSERT INTO polytypes VALUES (?, ?, ?, ?, ?)',
            [
              polytypes.id || null,
              polytypes.name || null,
              polytypes.name_bn || null,
              polytypes.name_short || null,
              polytypes.code || null,
            ],
            (_, resultSet) =>
              console.log('polytypes data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting polytypes data', error, polytypes);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching polytypes data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const polytypes_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM polytypes`, // Query the polytypes table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying polytypes`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const polytypes_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM polytypes`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from polytypes:', resultSet);

          try {
            await polytypes_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from polytypes`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const repro_types_api = async () => {
  try {
    const response = await fetch(`${baseApi}/repro_types?token=${token}`);
    const data = await response.json();
    console.log('Total repro_types items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS repro_types',
          [],
          () => {
            console.log('repro_types table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS repro_types (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('repro_types table created successfully');
          },
          reject,
        );

        data.forEach(repro_types => {
          tx.executeSql(
            'INSERT INTO repro_types VALUES (?, ?, ?, ?, ?)',
            [
              repro_types.id || null,
              repro_types.name || null,
              repro_types.name_bn || null,
              repro_types.name_short || null,
              repro_types.code || null,
            ],
            (_, resultSet) =>
              console.log('repro_types data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting repro_types data',
                error,
                repro_types,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching repro_types data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const repro_types_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM repro_types`, // Query the repro_types table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying repro_types`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const repro_types_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM repro_types`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from repro_types:', resultSet);

          try {
            await repro_types_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from repro_types`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const resources_api = async () => {
  try {
    const response = await fetch(`${baseApi}/resources?token=${token}`);
    const data = await response.json();
    console.log('Total resources items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS resources',
          [],
          () => {
            console.log('resources table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS resources (id TEXT, title TEXT, description TEXT, file_name TEXT, file_path TEXT, file_type TEXT, file_cat TEXT, sort TEXT, status TEXT, circle_code TEXT, division_code TEXT, range_code TEXT, beat_code TEXT, created_at TEXT, created_by TEXT, updated_at TEXT, updated_by TEXT, deleted_at TEXT, deleted_by TEXT)',
          [],
          () => {
            console.log('resources table created successfully');
          },
          reject,
        );

        data.forEach(resources => {
          tx.executeSql(
            'INSERT INTO resources VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              resources.id || null,
              resources.title || null,
              resources.description || null,
              resources.file_name || null,
              resources.file_path || null,
              resources.file_type || null,
              resources.file_cat || null,
              resources.sort || null,
              resources.status || null,
              resources.circle_code || null,
              resources.division_code || null,
              resources.range_code || null,
              resources.beat_code || null,
              resources.created_at || null,
              resources.created_by || null,
              resources.updated_at || null,
              resources.updated_by || null,
              resources.deleted_at || null,
              resources.deleted_by || null,
            ],
            (_, resultSet) =>
              console.log('resources data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting resources data', error, resources);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching resources data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const resources_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM resources`, // Query the resources table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying resources`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const resources_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM resources`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from resources:', resultSet);

          try {
            await resources_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from resources`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const roles_api = async () => {
  try {
    const response = await fetch(`${baseApi}/roles?token=${token}`);
    const data = await response.json();
    console.log('Total roles items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS roles',
          [],
          () => {
            console.log('roles table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS roles (id TEXT, name TEXT, code TEXT, order TEXT, is_active TEXT)',
          [],
          () => {
            console.log('roles table created successfully');
          },
          reject,
        );

        data.forEach(roles => {
          tx.executeSql(
            'INSERT INTO roles VALUES (?, ?, ?, ?, ?)',
            [
              roles.id || null,
              roles.name || null,
              roles.code || null,
              roles.order || null,
              roles.is_active || null,
            ],
            (_, resultSet) =>
              console.log('roles data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting roles data', error, roles);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching roles data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const roles_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM roles`, // Query the roles table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying roles`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const roles_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM roles`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from roles:', resultSet);

          try {
            await roles_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from roles`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const sessions_api = async () => {
  try {
    const response = await fetch(`${baseApi}/sessions?token=${token}`);
    const data = await response.json();
    console.log('Total sessions items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS sessions',
          [],
          () => {
            console.log('sessions table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS sessions (id TEXT, user_id TEXT, ip_address TEXT, user_agent TEXT, payload TEXT, last_activity TEXT)',
          [],
          () => {
            console.log('sessions table created successfully');
          },
          reject,
        );

        data.forEach(sessions => {
          tx.executeSql(
            'INSERT INTO sessions VALUES (?, ?, ?, ?, ?, ?)',
            [
              sessions.id || null,
              sessions.user_id || null,
              sessions.ip_address || null,
              sessions.user_agent || null,
              sessions.payload || null,
              sessions.last_activity || null,
            ],
            (_, resultSet) =>
              console.log('sessions data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting sessions data', error, sessions);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching sessions data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const sessions_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM sessions`, // Query the sessions table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying sessions`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const sessions_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM sessions`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from sessions:', resultSet);

          try {
            await sessions_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from sessions`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const slopes_api = async () => {
  try {
    const response = await fetch(`${baseApi}/slopes?token=${token}`);
    const data = await response.json();
    console.log('Total slopes items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS slopes',
          [],
          () => {
            console.log('slopes table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS slopes (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('slopes table created successfully');
          },
          reject,
        );

        data.forEach(slopes => {
          tx.executeSql(
            'INSERT INTO slopes VALUES (?, ?, ?, ?, ?)',
            [
              slopes.id || null,
              slopes.name || null,
              slopes.name_bn || null,
              slopes.name_short || null,
              slopes.code || null,
            ],
            (_, resultSet) =>
              console.log('slopes data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting slopes data', error, slopes);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching slopes data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const slopes_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM slopes`, // Query the slopes table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying slopes`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const slopes_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM slopes`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from slopes:', resultSet);

          try {
            await slopes_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from slopes`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const soils_api = async () => {
  try {
    const response = await fetch(`${baseApi}/soils?token=${token}`);
    const data = await response.json();
    console.log('Total soils items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS soils',
          [],
          () => {
            console.log('soils table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS soils (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('soils table created successfully');
          },
          reject,
        );

        data.forEach(soils => {
          tx.executeSql(
            'INSERT INTO soils VALUES (?, ?, ?, ?, ?)',
            [
              soils.id || null,
              soils.name || null,
              soils.name_bn || null,
              soils.name_short || null,
              soils.code || null,
            ],
            (_, resultSet) =>
              console.log('soils data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting soils data', error, soils);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching soils data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const soils_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM soils`, // Query the soils table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying soils`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const soils_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM soils`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from soils:', resultSet);

          try {
            await soils_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from soils`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const project_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/project_lists?token=${token}`);
    const data = await response.json();
    console.log('Total project_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS project_lists',
          [],
          () => {
            console.log('project_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS project_lists (id TEXT, name_en TEXT, name_bn TEXT, description TEXT, logo TEXT, project_type TEXT, extra1 TEXT, extra2 TEXT, sort TEXT, status TEXT, created_at TEXT, created_by TEXT, updated_at TEXT, updated_by TEXT)',
          [],
          () => {
            console.log('project_lists table created successfully');
          },
          reject,
        );

        data.forEach(project_lists => {
          tx.executeSql(
            'INSERT INTO project_lists VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              project_lists.id || null,
              project_lists.name_en || null,
              project_lists.name_bn || null,
              project_lists.description || null,
              project_lists.logo || null,
              project_lists.project_type || null,
              project_lists.extra1 || null,
              project_lists.extra2 || null,
              project_lists.sort || null,
              project_lists.status || null,
              project_lists.created_at || null,
              project_lists.created_by || null,
              project_lists.updated_at || null,
              project_lists.updated_by || null,
            ],
            (_, resultSet) =>
              console.log(
                'project_lists data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting project_lists data',
                error,
                project_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching project_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const project_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM project_lists`, // Query the project_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying project_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const project_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM project_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from project_lists:', resultSet);

          try {
            await project_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from project_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const ssp_gpx_upload_api = async () => {
  try {
    const response = await fetch(`${baseApi}/ssp_gpx_upload?token=${token}`);
    const data = await response.json();
    console.log('Total ssp_gpx_upload items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS ssp_gpx_upload',
          [],
          () => {
            console.log('ssp_gpx_upload table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS ssp_gpx_upload (id TEXT, beat_code TEXT, ssp_uri TEXT, file_name TEXT, loc TEXT, created_by TEXT, created_at TEXT, updated_by TEXT, updated_at TEXT)',
          [],
          () => {
            console.log('ssp_gpx_upload table created successfully');
          },
          reject,
        );

        data.forEach(ssp_gpx_upload => {
          tx.executeSql(
            'INSERT INTO ssp_gpx_upload VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              ssp_gpx_upload.id || null,
              ssp_gpx_upload.beat_code || null,
              ssp_gpx_upload.ssp_uri || null,
              ssp_gpx_upload.file_name || null,
              ssp_gpx_upload.loc || null,
              ssp_gpx_upload.created_by || null,
              ssp_gpx_upload.created_at || null,
              ssp_gpx_upload.updated_by || null,
              ssp_gpx_upload.updated_at || null,
            ],
            (_, resultSet) =>
              console.log(
                'ssp_gpx_upload data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting ssp_gpx_upload data',
                error,
                ssp_gpx_upload,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching ssp_gpx_upload data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const ssp_gpx_upload_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM ssp_gpx_upload`, // Query the ssp_gpx_upload table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying ssp_gpx_upload`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const ssp_gpx_upload_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM ssp_gpx_upload`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from ssp_gpx_upload:', resultSet);

          try {
            await ssp_gpx_upload_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from ssp_gpx_upload`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const structures_api = async () => {
  try {
    const response = await fetch(`${baseApi}/structures?token=${token}`);
    const data = await response.json();
    console.log('Total structures items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS structures',
          [],
          () => {
            console.log('structures table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS structures (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('structures table created successfully');
          },
          reject,
        );

        data.forEach(structures => {
          tx.executeSql(
            'INSERT INTO structures VALUES (?, ?, ?, ?, ?)',
            [
              structures.id || null,
              structures.name || null,
              structures.name_bn || null,
              structures.name_short || null,
              structures.code || null,
            ],
            (_, resultSet) =>
              console.log('structures data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting structures data',
                error,
                structures,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching structures data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const structures_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM structures`, // Query the structures table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying structures`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const structures_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM structures`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from structures:', resultSet);

          try {
            await structures_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from structures`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const survey_types_api = async () => {
  try {
    const response = await fetch(`${baseApi}/survey_types?token=${token}`);
    const data = await response.json();
    console.log('Total survey_types items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS survey_types',
          [],
          () => {
            console.log('survey_types table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS survey_types (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('survey_types table created successfully');
          },
          reject,
        );

        data.forEach(survey_types => {
          tx.executeSql(
            'INSERT INTO survey_types VALUES (?, ?, ?, ?, ?)',
            [
              survey_types.id || null,
              survey_types.name || null,
              survey_types.name_bn || null,
              survey_types.name_short || null,
              survey_types.code || null,
            ],
            (_, resultSet) =>
              console.log('survey_types data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting survey_types data',
                error,
                survey_types,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching survey_types data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const survey_types_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM survey_types`, // Query the survey_types table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying survey_types`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const survey_types_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM survey_types`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from survey_types:', resultSet);

          try {
            await survey_types_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from survey_types`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const team_user_api = async () => {
  try {
    const response = await fetch(`${baseApi}/team_user?token=${token}`);
    const data = await response.json();
    console.log('Total team_user items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS team_user',
          [],
          () => {
            console.log('team_user table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS team_user (id TEXT, team_id TEXT, user_id TEXT, role TEXT, created_at TEXT, updated_at TEXT)',
          [],
          () => {
            console.log('team_user table created successfully');
          },
          reject,
        );

        data.forEach(team_user => {
          tx.executeSql(
            'INSERT INTO team_user VALUES (?, ?, ?, ?, ?, ?)',
            [
              team_user.id || null,
              team_user.team_id || null,
              team_user.user_id || null,
              team_user.role || null,
              team_user.created_at || null,
              team_user.updated_at || null,
            ],
            (_, resultSet) =>
              console.log('team_user data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting team_user data', error, team_user);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching team_user data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const team_user_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM team_user`, // Query the team_user table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying team_user`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const team_user_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM team_user`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from team_user:', resultSet);

          try {
            await team_user_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from team_user`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const th_plants_api = async () => {
  try {
    const response = await fetch(`${baseApi}/th_plants?token=${token}`);
    const data = await response.json();
    console.log('Total th_plants items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS th_plants',
          [],
          () => {
            console.log('th_plants table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS th_plants (id TEXT, name TEXT, name_bn TEXT, code TEXT)',
          [],
          () => {
            console.log('th_plants table created successfully');
          },
          reject,
        );

        data.forEach(th_plants => {
          tx.executeSql(
            'INSERT INTO th_plants VALUES (?, ?, ?, ?)',
            [
              th_plants.id || null,
              th_plants.name || null,
              th_plants.name_bn || null,
              th_plants.code || null,
            ],
            (_, resultSet) =>
              console.log('th_plants data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting th_plants data', error, th_plants);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching th_plants data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const th_plants_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM th_plants`, // Query the th_plants table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying th_plants`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const th_plants_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM th_plants`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from th_plants:', resultSet);

          try {
            await th_plants_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from th_plants`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const topographies_api = async () => {
  try {
    const response = await fetch(`${baseApi}/topographies?token=${token}`);
    const data = await response.json();
    console.log('Total topographies items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS topographies',
          [],
          () => {
            console.log('topographies table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS topographies (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('topographies table created successfully');
          },
          reject,
        );

        data.forEach(topographies => {
          tx.executeSql(
            'INSERT INTO topographies VALUES (?, ?, ?, ?, ?)',
            [
              topographies.id || null,
              topographies.name || null,
              topographies.name_bn || null,
              topographies.name_short || null,
              topographies.code || null,
            ],
            (_, resultSet) =>
              console.log('topographies data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting topographies data',
                error,
                topographies,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching topographies data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const topographies_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM topographies`, // Query the topographies table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying topographies`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const topographies_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM topographies`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from topographies:', resultSet);

          try {
            await topographies_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from topographies`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const treesperha_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/treesperha_lists?token=${token}`);
    const data = await response.json();
    console.log('Total treesperha_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS treesperha_lists',
          [],
          () => {
            console.log('treesperha_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS treesperha_lists (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('treesperha_lists table created successfully');
          },
          reject,
        );

        data.forEach(treesperha_lists => {
          tx.executeSql(
            'INSERT INTO treesperha_lists VALUES (?, ?, ?, ?, ?)',
            [
              treesperha_lists.id || null,
              treesperha_lists.name || null,
              treesperha_lists.name_bn || null,
              treesperha_lists.name_short || null,
              treesperha_lists.code || null,
            ],
            (_, resultSet) =>
              console.log(
                'treesperha_lists data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting treesperha_lists data',
                error,
                treesperha_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching treesperha_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const treesperha_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM treesperha_lists`, // Query the treesperha_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying treesperha_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const treesperha_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM treesperha_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from treesperha_lists:', resultSet);

          try {
            await treesperha_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from treesperha_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const user_logs_api = async () => {
  try {
    const response = await fetch(`${baseApi}/user_logs?token=${token}`);
    const data = await response.json();
    console.log('Total user_logs items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS user_logs',
          [],
          () => {
            console.log('user_logs table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS user_logs (id TEXT, log_types TEXT, work_parts TEXT, description TEXT, table_name TEXT, table_uri TEXT, table_id TEXT, ip_address TEXT, mac_address TEXT, sort TEXT, status TEXT, status_id TEXT, created_at TEXT, created_by TEXT, updated_at TEXT, updated_by TEXT)',
          [],
          () => {
            console.log('user_logs table created successfully');
          },
          reject,
        );

        data.forEach(user_logs => {
          tx.executeSql(
            'INSERT INTO user_logs VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              user_logs.id || null,
              user_logs.log_types || null,
              user_logs.work_parts || null,
              user_logs.description || null,
              user_logs.table_name || null,
              user_logs.table_uri || null,
              user_logs.table_id || null,
              user_logs.ip_address || null,
              user_logs.mac_address || null,
              user_logs.sort || null,
              user_logs.status || null,
              user_logs.status_id || null,
              user_logs.created_at || null,
              user_logs.created_by || null,
              user_logs.updated_at || null,
              user_logs.updated_by || null,
            ],
            (_, resultSet) =>
              console.log('user_logs data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting user_logs data', error, user_logs);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching user_logs data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const user_logs_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM user_logs`, // Query the user_logs table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying user_logs`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const user_logs_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM user_logs`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from user_logs:', resultSet);

          try {
            await user_logs_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from user_logs`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const users_api = async () => {
  try {
    const response = await fetch(`${baseApi}/users?token=${token}`);
    const data = await response.json();
    console.log('Total users items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS users',
          [],
          () => {
            console.log('users table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS users (id TEXT, name TEXT, email TEXT, email_verified_at TEXT, password TEXT, remember_token TEXT, current_team_id TEXT, profile_photo_path TEXT, created_at TEXT, updated_at TEXT, two_factor_secret TEXT, two_factor_recovery_codes TEXT, role_id TEXT, office_level_id TEXT, is_active TEXT, beat_code TEXT, range_code TEXT, division_code TEXT, circle_code TEXT, created_by TEXT, updated_by TEXT)',
          [],
          () => {
            console.log('users table created successfully');
          },
          reject,
        );

        data.forEach(users => {
          tx.executeSql(
            'INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              users.id || null,
              users.name || null,
              users.email || null,
              users.email_verified_at || null,
              users.password || null,
              users.remember_token || null,
              users.current_team_id || null,
              users.profile_photo_path || null,
              users.created_at || null,
              users.updated_at || null,
              users.two_factor_secret || null,
              users.two_factor_recovery_codes || null,
              users.role_id || null,
              users.office_level_id || null,
              users.is_active || null,
              users.beat_code || null,
              users.range_code || null,
              users.division_code || null,
              users.circle_code || null,
              users.created_by || null,
              users.updated_by || null,
            ],
            (_, resultSet) =>
              console.log('users data inserted successfully', resultSet),
            (_, error) => {
              console.error('Error inserting users data', error, users);
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching users data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const users_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM users`, // Query the users table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying users`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const users_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM users`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from users:', resultSet);

          try {
            await users_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from users`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const vegpct_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/vegpct_lists?token=${token}`);
    const data = await response.json();
    console.log('Total vegpct_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS vegpct_lists',
          [],
          () => {
            console.log('vegpct_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS vegpct_lists (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('vegpct_lists table created successfully');
          },
          reject,
        );

        data.forEach(vegpct_lists => {
          tx.executeSql(
            'INSERT INTO vegpct_lists VALUES (?, ?, ?, ?, ?)',
            [
              vegpct_lists.id || null,
              vegpct_lists.name || null,
              vegpct_lists.name_bn || null,
              vegpct_lists.name_short || null,
              vegpct_lists.code || null,
            ],
            (_, resultSet) =>
              console.log('vegpct_lists data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting vegpct_lists data',
                error,
                vegpct_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching vegpct_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const vegpct_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM vegpct_lists`, // Query the vegpct_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying vegpct_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const vegpct_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM vegpct_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from vegpct_lists:', resultSet);

          try {
            await vegpct_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from vegpct_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const yes_no_lists_api = async () => {
  try {
    const response = await fetch(`${baseApi}/yes_no_lists?token=${token}`);
    const data = await response.json();
    console.log('Total yes_no_lists items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS yes_no_lists',
          [],
          () => {
            console.log('yes_no_lists table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS yes_no_lists (id TEXT, name TEXT, name_bn TEXT, name_short TEXT, code TEXT)',
          [],
          () => {
            console.log('yes_no_lists table created successfully');
          },
          reject,
        );

        data.forEach(yes_no_lists => {
          tx.executeSql(
            'INSERT INTO yes_no_lists VALUES (?, ?, ?, ?, ?)',
            [
              yes_no_lists.id || null,
              yes_no_lists.name || null,
              yes_no_lists.name_bn || null,
              yes_no_lists.name_short || null,
              yes_no_lists.code || null,
            ],
            (_, resultSet) =>
              console.log('yes_no_lists data inserted successfully', resultSet),
            (_, error) => {
              console.error(
                'Error inserting yes_no_lists data',
                error,
                yes_no_lists,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching yes_no_lists data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const yes_no_lists_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM yes_no_lists`, // Query the yes_no_lists table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying yes_no_lists`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const yes_no_lists_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM yes_no_lists`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from yes_no_lists:', resultSet);

          try {
            await yes_no_lists_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from yes_no_lists`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
//API Start
export const team_invitations_api = async () => {
  try {
    const response = await fetch(`${baseApi}/team_invitations?token=${token}`);
    const data = await response.json();
    console.log('Total team_invitations items from API:', data.length);

    await new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS team_invitations',
          [],
          () => {
            console.log('team_invitations table dropped successfully');
          },
          reject,
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS team_invitations (id TEXT, team_id TEXT, email TEXT, role TEXT, created_at TEXT, updated_at TEXT)',
          [],
          () => {
            console.log('team_invitations table created successfully');
          },
          reject,
        );

        data.forEach(team_invitations => {
          tx.executeSql(
            'INSERT INTO team_invitations VALUES (?, ?, ?, ?, ?, ?)',
            [
              team_invitations.id || null,
              team_invitations.team_id || null,
              team_invitations.email || null,
              team_invitations.role || null,
              team_invitations.created_at || null,
              team_invitations.updated_at || null,
            ],
            (_, resultSet) =>
              console.log(
                'team_invitations data inserted successfully',
                resultSet,
              ),
            (_, error) => {
              console.error(
                'Error inserting team_invitations data',
                error,
                team_invitations,
              );
            },
          );
        });
        resolve();
      });
    });
  } catch (error) {
    console.error('Error fetching team_invitations data from API', error);
  }
};
//API End
//---------------------------------------------------------//
// List Start

export const team_invitations_list = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM team_invitations`, // Query the team_invitations table
        [],
        (_, resultSet) => {
          console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, error) => {
          console.error(`Error querying team_invitations`, error);
          reject(error);
        },
      );
    });
  });
};
// List End
//---------------------------------------------------------//
// Delete Start
export const team_invitations_delete = async () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM team_invitations`, // Correct SQL to delete all rows
        [],
        async (_, resultSet) => {
          console.log('All data deleted from team_invitations:', resultSet);

          try {
            await team_invitations_api();
            resolve(resultSet);
          } catch (apiError) {
            console.error('Error fetching data from API:', apiError);
            reject(apiError);
          }
        },
        (_, error) => {
          console.error(`Error deleting data from team_invitations`, error);
          reject(error); // Reject in case of a SQL error
        },
      );
    });
  });
};

// Delete End
//---------------------------------------------------------//
