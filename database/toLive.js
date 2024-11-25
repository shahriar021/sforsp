//sync Start
export const com202021_conslttn_ttndnc_pctre_consultation_attendence_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_ATTENDENCE_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_attendence_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_conslttn_ttndnc_pctre_consultation_attendence_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_ATTENDENCE_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_attendence_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_conslttn_ttndnc_pctre_consultation_attendence_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_ATTENDENCE_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_attendence_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_conslttn_ttndnc_pctre_consultation_attendence_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_ATTENDENCE_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_attendence_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_conslttn_ttndnc_pctre_consultation_attendence_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_ATTENDENCE_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_attendence_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_conslttn_ttndnc_pctre_consultation_attendence_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_ATTENDENCE_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_attendence_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_consultation_picture_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CONSULTATION_PICTURE_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_consultation_picture_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_consultation_picture_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CONSULTATION_PICTURE_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/com202021_consultation_picture_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_consultation_picture_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CONSULTATION_PICTURE_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_consultation_picture_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_consultation_picture_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CONSULTATION_PICTURE_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/com202021_consultation_picture_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_core_audit_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CORE_AUDIT WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('id', dataToSend.id);
formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LOCATION_DATA_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT_TXT);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE);
formData.append('CONSULTATION_GENERATED_NOTE_NAME_11', dataToSend.CONSULTATION_GENERATED_NOTE_NAME_11);
formData.append('CONSULTATION_USER_CELL', dataToSend.CONSULTATION_USER_CELL);
formData.append('LOCATION_DATA_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_TLOC_FD_CHAR);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47);
formData.append('CONSULTATION_CONSULTATION_PLACE', dataToSend.CONSULTATION_CONSULTATION_PLACE);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY);
formData.append('CONSULTATION_DCONSULTATION', dataToSend.CONSULTATION_DCONSULTATION);
formData.append('LOCATION_DATA_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_22', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_22);
formData.append('LOCATION_DATA_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_TLOC_FD_RANGE);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_24', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_24);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION);
formData.append('CONSULTATION_DCONSULTATION_START', dataToSend.CONSULTATION_DCONSULTATION_START);
formData.append('LOCATION_DATA_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2);
formData.append('CONSULTATION_DCONSULTATION_END_RAW', dataToSend.CONSULTATION_DCONSULTATION_END_RAW);
formData.append('LOCATION_DATA_TLOC_ECOZONE', dataToSend.LOCATION_DATA_TLOC_ECOZONE);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51);
formData.append('LOCATION_DATA_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_TLOC_FD_BLOCK);
formData.append('CONSULTATION_DCONSULTATION_END', dataToSend.CONSULTATION_DCONSULTATION_END);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LOCATION_DATA_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_TLOC_FD_DIVISION);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE);
formData.append('END', dataToSend.END);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('CONSULTATION_THOC_UNION', dataToSend.CONSULTATION_THOC_UNION);
formData.append('LOCATION_DATA_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_TLOC_ENTER_RANGE);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('CONSULTATION_USER_EMAIL', dataToSend.CONSULTATION_USER_EMAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('NOTES', dataToSend.NOTES);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS);
formData.append('CONSULTATION_DCONSULTATION_START_RAW', dataToSend.CONSULTATION_DCONSULTATION_START_RAW);
formData.append('CONSULTATION_USER_NAME', dataToSend.CONSULTATION_USER_NAME);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_TLOC_FD_CIR', dataToSend.LOCATION_DATA_TLOC_FD_CIR);
formData.append('START', dataToSend.START);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);
formData.append('UserName', dataToSend.UserName);
formData.append('AdditionTime', dataToSend.AdditionTime);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_core_audit?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_core_audit_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CORE_AUDIT`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('id', dataToSend.id);
formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LOCATION_DATA_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT_TXT);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE);
formData.append('CONSULTATION_GENERATED_NOTE_NAME_11', dataToSend.CONSULTATION_GENERATED_NOTE_NAME_11);
formData.append('CONSULTATION_USER_CELL', dataToSend.CONSULTATION_USER_CELL);
formData.append('LOCATION_DATA_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_TLOC_FD_CHAR);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47);
formData.append('CONSULTATION_CONSULTATION_PLACE', dataToSend.CONSULTATION_CONSULTATION_PLACE);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY);
formData.append('CONSULTATION_DCONSULTATION', dataToSend.CONSULTATION_DCONSULTATION);
formData.append('LOCATION_DATA_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_22', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_22);
formData.append('LOCATION_DATA_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_TLOC_FD_RANGE);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_24', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_24);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION);
formData.append('CONSULTATION_DCONSULTATION_START', dataToSend.CONSULTATION_DCONSULTATION_START);
formData.append('LOCATION_DATA_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2);
formData.append('CONSULTATION_DCONSULTATION_END_RAW', dataToSend.CONSULTATION_DCONSULTATION_END_RAW);
formData.append('LOCATION_DATA_TLOC_ECOZONE', dataToSend.LOCATION_DATA_TLOC_ECOZONE);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51);
formData.append('LOCATION_DATA_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_TLOC_FD_BLOCK);
formData.append('CONSULTATION_DCONSULTATION_END', dataToSend.CONSULTATION_DCONSULTATION_END);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LOCATION_DATA_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_TLOC_FD_DIVISION);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE);
formData.append('END', dataToSend.END);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('CONSULTATION_THOC_UNION', dataToSend.CONSULTATION_THOC_UNION);
formData.append('LOCATION_DATA_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_TLOC_ENTER_RANGE);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('CONSULTATION_USER_EMAIL', dataToSend.CONSULTATION_USER_EMAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('NOTES', dataToSend.NOTES);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS);
formData.append('CONSULTATION_DCONSULTATION_START_RAW', dataToSend.CONSULTATION_DCONSULTATION_START_RAW);
formData.append('CONSULTATION_USER_NAME', dataToSend.CONSULTATION_USER_NAME);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_TLOC_FD_CIR', dataToSend.LOCATION_DATA_TLOC_FD_CIR);
formData.append('START', dataToSend.START);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);
formData.append('UserName', dataToSend.UserName);
formData.append('AdditionTime', dataToSend.AdditionTime);

          }
		  const response = await fetch(
			`${baseApi}/com202021_core_audit?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_core_test_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CORE_TEST WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LOCATION_DATA_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT_TXT);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE);
formData.append('CONSULTATION_GENERATED_NOTE_NAME_11', dataToSend.CONSULTATION_GENERATED_NOTE_NAME_11);
formData.append('CONSULTATION_USER_CELL', dataToSend.CONSULTATION_USER_CELL);
formData.append('LOCATION_DATA_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_TLOC_FD_CHAR);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47);
formData.append('CONSULTATION_CONSULTATION_PLACE', dataToSend.CONSULTATION_CONSULTATION_PLACE);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY);
formData.append('CONSULTATION_DCONSULTATION', dataToSend.CONSULTATION_DCONSULTATION);
formData.append('LOCATION_DATA_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_22', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_22);
formData.append('LOCATION_DATA_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_TLOC_FD_RANGE);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_24', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_24);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION);
formData.append('CONSULTATION_DCONSULTATION_START', dataToSend.CONSULTATION_DCONSULTATION_START);
formData.append('LOCATION_DATA_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2);
formData.append('CONSULTATION_DCONSULTATION_END_RAW', dataToSend.CONSULTATION_DCONSULTATION_END_RAW);
formData.append('LOCATION_DATA_TLOC_ECOZONE', dataToSend.LOCATION_DATA_TLOC_ECOZONE);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51);
formData.append('LOCATION_DATA_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_TLOC_FD_BLOCK);
formData.append('CONSULTATION_DCONSULTATION_END', dataToSend.CONSULTATION_DCONSULTATION_END);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LOCATION_DATA_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_TLOC_FD_DIVISION);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE);
formData.append('END', dataToSend.END);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('CONSULTATION_THOC_UNION', dataToSend.CONSULTATION_THOC_UNION);
formData.append('LOCATION_DATA_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_TLOC_ENTER_RANGE);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('CONSULTATION_USER_EMAIL', dataToSend.CONSULTATION_USER_EMAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('NOTES', dataToSend.NOTES);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS);
formData.append('CONSULTATION_DCONSULTATION_START_RAW', dataToSend.CONSULTATION_DCONSULTATION_START_RAW);
formData.append('CONSULTATION_USER_NAME', dataToSend.CONSULTATION_USER_NAME);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_TLOC_FD_CIR', dataToSend.LOCATION_DATA_TLOC_FD_CIR);
formData.append('START', dataToSend.START);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_core_test?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_core_test_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CORE_TEST`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LOCATION_DATA_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT_TXT);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE);
formData.append('CONSULTATION_GENERATED_NOTE_NAME_11', dataToSend.CONSULTATION_GENERATED_NOTE_NAME_11);
formData.append('CONSULTATION_USER_CELL', dataToSend.CONSULTATION_USER_CELL);
formData.append('LOCATION_DATA_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_TLOC_FD_CHAR);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47);
formData.append('CONSULTATION_CONSULTATION_PLACE', dataToSend.CONSULTATION_CONSULTATION_PLACE);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY);
formData.append('CONSULTATION_DCONSULTATION', dataToSend.CONSULTATION_DCONSULTATION);
formData.append('LOCATION_DATA_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_22', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_22);
formData.append('LOCATION_DATA_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_TLOC_FD_RANGE);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_24', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_24);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION);
formData.append('CONSULTATION_DCONSULTATION_START', dataToSend.CONSULTATION_DCONSULTATION_START);
formData.append('LOCATION_DATA_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2);
formData.append('CONSULTATION_DCONSULTATION_END_RAW', dataToSend.CONSULTATION_DCONSULTATION_END_RAW);
formData.append('LOCATION_DATA_TLOC_ECOZONE', dataToSend.LOCATION_DATA_TLOC_ECOZONE);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51);
formData.append('LOCATION_DATA_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_TLOC_FD_BLOCK);
formData.append('CONSULTATION_DCONSULTATION_END', dataToSend.CONSULTATION_DCONSULTATION_END);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LOCATION_DATA_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_TLOC_FD_DIVISION);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE);
formData.append('END', dataToSend.END);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('CONSULTATION_THOC_UNION', dataToSend.CONSULTATION_THOC_UNION);
formData.append('LOCATION_DATA_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_TLOC_ENTER_RANGE);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('CONSULTATION_USER_EMAIL', dataToSend.CONSULTATION_USER_EMAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('NOTES', dataToSend.NOTES);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS);
formData.append('CONSULTATION_DCONSULTATION_START_RAW', dataToSend.CONSULTATION_DCONSULTATION_START_RAW);
formData.append('CONSULTATION_USER_NAME', dataToSend.CONSULTATION_USER_NAME);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_TLOC_FD_CIR', dataToSend.LOCATION_DATA_TLOC_FD_CIR);
formData.append('START', dataToSend.START);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

          }
		  const response = await fetch(
			`${baseApi}/com202021_core_test?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_core_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_CORE WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LNG', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LNG);
formData.append('FBLI_FA_TLOC_FD_BEAT', dataToSend.FBLI_FA_TLOC_FD_BEAT);
formData.append('LOGISTICS3_COUNTRYBOAT_CONDITION', dataToSend.LOGISTICS3_COUNTRYBOAT_CONDITION);
formData.append('LOGISTICS4_GFIREARMS_303RIFLE', dataToSend.LOGISTICS4_GFIREARMS_303RIFLE);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA);
formData.append('LOGISTICS4_OTHERS_WATER_TRA', dataToSend.LOGISTICS4_OTHERS_WATER_TRA);
formData.append('BO_INFO_BO_CELL', dataToSend.BO_INFO_BO_CELL);
formData.append('LOGISTICS3_TVESSEL_CONDITION', dataToSend.LOGISTICS3_TVESSEL_CONDITION);
formData.append('RO_INFO_RO_CELL', dataToSend.RO_INFO_RO_CELL);
formData.append('LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL);
formData.append('LOGISTICS3_TVESSEL_AVAIL', dataToSend.LOGISTICS3_TVESSEL_AVAIL);
formData.append('FBLI_FA_TLOC_FD_BEAT_TXT', dataToSend.FBLI_FA_TLOC_FD_BEAT_TXT);
formData.append('LOGISTICS3_SPEEDBOAT_CONDITION', dataToSend.LOGISTICS3_SPEEDBOAT_CONDITION);
formData.append('FBLI_FA_TLOC_FD_DIVISION', dataToSend.FBLI_FA_TLOC_FD_DIVISION);
formData.append('LAND_TRANSPORTS_BICYCLE_AVAIL', dataToSend.LAND_TRANSPORTS_BICYCLE_AVAIL);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GUSER_USER', dataToSend.GUSER_USER);
formData.append('RO_INFO_NAME_OF_RO', dataToSend.RO_INFO_NAME_OF_RO);
formData.append('FBLI_FA_TLOC_FD_BLOCK', dataToSend.FBLI_FA_TLOC_FD_BLOCK);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LAND_TRANSPORTS_MOTORB_CONDITION', dataToSend.LAND_TRANSPORTS_MOTORB_CONDITION);
formData.append('FBLI_GENERATED_NOTE_NAME_18', dataToSend.FBLI_GENERATED_NOTE_NAME_18);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74);
formData.append('LOGISTICS4_CHINESERIFLE_CONDITION', dataToSend.LOGISTICS4_CHINESERIFLE_CONDITION);
formData.append('LOGISTICS3_SPEEDBOAT_AVAIL', dataToSend.LOGISTICS3_SPEEDBOAT_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA);
formData.append('LOGISTICS4_GENERATED_NOTE_NAME_152', dataToSend.LOGISTICS4_GENERATED_NOTE_NAME_152);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('LAND_TRANSPORTS_BICYCLE_CONDITION', dataToSend.LAND_TRANSPORTS_BICYCLE_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA);
formData.append('GUSER_GENERATED_NOTE_NAME_10', dataToSend.GUSER_GENERATED_NOTE_NAME_10);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA);
formData.append('BO_INFO_BO_NID', dataToSend.BO_INFO_BO_NID);
formData.append('LAND_TRANSPORTS_GBI_CYCLE', dataToSend.LAND_TRANSPORTS_GBI_CYCLE);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA);
formData.append('LOGISTICS3_GCOUNTRY_BOAT', dataToSend.LOGISTICS3_GCOUNTRY_BOAT);
formData.append('LOGISTICS4_GFIREARMS_SLR', dataToSend.LOGISTICS4_GFIREARMS_SLR);
formData.append('FBLI_FA_TLOC_FD_CIR', dataToSend.FBLI_FA_TLOC_FD_CIR);
formData.append('LAND_TRANSPORTS_MOTORB_AVAIL', dataToSend.LAND_TRANSPORTS_MOTORB_AVAIL);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION);
formData.append('RO_INFO_RO_JOINING_DATE', dataToSend.RO_INFO_RO_JOINING_DATE);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA);
formData.append('RO_INFO_RO_RANK', dataToSend.RO_INFO_RO_RANK);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA);
formData.append('BO_INFO_BO_JOINING_DATE', dataToSend.BO_INFO_BO_JOINING_DATE);
formData.append('GUSER_USER_CELL', dataToSend.GUSER_USER_CELL);
formData.append('RO_INFO_RO_NID', dataToSend.RO_INFO_RO_NID);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ALT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ALT);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LAT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LAT);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA);
formData.append('LOGISTICS4_RIFLE303_CONDITION', dataToSend.LOGISTICS4_RIFLE303_CONDITION);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('BO_INFO_GENERATED_NOTE_NAME_106', dataToSend.BO_INFO_GENERATED_NOTE_NAME_106);
formData.append('GENERATED_NOTE_NAME_81', dataToSend.GENERATED_NOTE_NAME_81);
formData.append('RO_INFO_GENERATED_NOTE_NAME_97', dataToSend.RO_INFO_GENERATED_NOTE_NAME_97);
formData.append('FBLI_FA_GENERATED_NOTE_NAME_21', dataToSend.FBLI_FA_GENERATED_NOTE_NAME_21);
formData.append('LAND_TRANSPORTS_GENERATED_NOTE_NAME_125', dataToSend.LAND_TRANSPORTS_GENERATED_NOTE_NAME_125);
formData.append('GUSER_BEAT_ADDRESS', dataToSend.GUSER_BEAT_ADDRESS);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA);
formData.append('BO_INFO_BO_JOINING_DATE_RAW', dataToSend.BO_INFO_BO_JOINING_DATE_RAW);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ACC', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ACC);
formData.append('LOGISTICS3_COUNTRYBOAT_AVAIL', dataToSend.LOGISTICS3_COUNTRYBOAT_AVAIL);
formData.append('FBLI_CA_TLOC_AD_DISTRICT', dataToSend.FBLI_CA_TLOC_AD_DISTRICT);
formData.append('BO_INFO_NAME_OF_BO', dataToSend.BO_INFO_NAME_OF_BO);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA);
formData.append('LOGISTICS3_OTHERS_WATER_TRA', dataToSend.LOGISTICS3_OTHERS_WATER_TRA);
formData.append('FBLI_TLOC_ECOZONE', dataToSend.FBLI_TLOC_ECOZONE);
formData.append('BO_INFO_BO_RANK', dataToSend.BO_INFO_BO_RANK);
formData.append('LOGISTICS4_SLR_CONDITION', dataToSend.LOGISTICS4_SLR_CONDITION);
formData.append('END', dataToSend.END);
formData.append('FBLI_FA_TLOC_FD_RANGE', dataToSend.FBLI_FA_TLOC_FD_RANGE);
formData.append('RO_INFO_RO_JOINING_DATE_RAW', dataToSend.RO_INFO_RO_JOINING_DATE_RAW);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('LOGISTICS3_TRAWLER', dataToSend.LOGISTICS3_TRAWLER);
formData.append('LOGISTICS4_GFIREARMS_SHORTGUN', dataToSend.LOGISTICS4_GFIREARMS_SHORTGUN);
formData.append('LOGISTICS4_SHORTGUN_CONDITION', dataToSend.LOGISTICS4_SHORTGUN_CONDITION);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS', dataToSend.LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS);
formData.append('BO_INFO_BO_MAIL', dataToSend.BO_INFO_BO_MAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL);
formData.append('FBLI_CA_GENERATED_NOTE_NAME_33', dataToSend.FBLI_CA_GENERATED_NOTE_NAME_33);
formData.append('FBLI_CA_TLOC_AD_DIVISION', dataToSend.FBLI_CA_TLOC_AD_DIVISION);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_AVAIL);
formData.append('LOGISTICS3_GSPEED_BOAT', dataToSend.LOGISTICS3_GSPEED_BOAT);
formData.append('LOGISTICS4_TFIREARMS_303RIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_303RIFLE_AVAIL);
formData.append('LOGISTICS4_GFIREARMS_CHINESERIFLE', dataToSend.LOGISTICS4_GFIREARMS_CHINESERIFLE);
formData.append('TODAY', dataToSend.TODAY);
formData.append('FBLI_FA_TLOC_FD_CHAR', dataToSend.FBLI_FA_TLOC_FD_CHAR);
formData.append('LAND_TRANSPORTS_GMOTORBIKE', dataToSend.LAND_TRANSPORTS_GMOTORBIKE);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA);
formData.append('FBLI_FA_TLOC_ENTER_RANGE', dataToSend.FBLI_FA_TLOC_ENTER_RANGE);
formData.append('LAND_STATISTICS_AREA_SUM', dataToSend.LAND_STATISTICS_AREA_SUM);
formData.append('RO_INFO_RO_MAIL', dataToSend.RO_INFO_RO_MAIL);
formData.append('GENERATED_NOTE_NAME_123', dataToSend.GENERATED_NOTE_NAME_123);
formData.append('START', dataToSend.START);
formData.append('FBLI_CA_UNION', dataToSend.FBLI_CA_UNION);
formData.append('FBLI_FA_TLOC_ENTER_DIV', dataToSend.FBLI_FA_TLOC_ENTER_DIV);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('GENERATED_NOTE_NAME_94', dataToSend.GENERATED_NOTE_NAME_94);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_AVAIL);
formData.append('GENERATED_NOTE_NAME_95', dataToSend.GENERATED_NOTE_NAME_95);
formData.append('LOGISTICS4_TFIREARMS_SLR_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SLR_AVAIL);
formData.append('LOGISTICS3_GENERATED_NOTE_NAME_137', dataToSend.LOGISTICS3_GENERATED_NOTE_NAME_137);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_SKM', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_SKM);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_SKM', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_SKM);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_SKM', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_SKM);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_core?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_core_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_CORE`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LNG', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LNG);
formData.append('FBLI_FA_TLOC_FD_BEAT', dataToSend.FBLI_FA_TLOC_FD_BEAT);
formData.append('LOGISTICS3_COUNTRYBOAT_CONDITION', dataToSend.LOGISTICS3_COUNTRYBOAT_CONDITION);
formData.append('LOGISTICS4_GFIREARMS_303RIFLE', dataToSend.LOGISTICS4_GFIREARMS_303RIFLE);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA);
formData.append('LOGISTICS4_OTHERS_WATER_TRA', dataToSend.LOGISTICS4_OTHERS_WATER_TRA);
formData.append('BO_INFO_BO_CELL', dataToSend.BO_INFO_BO_CELL);
formData.append('LOGISTICS3_TVESSEL_CONDITION', dataToSend.LOGISTICS3_TVESSEL_CONDITION);
formData.append('RO_INFO_RO_CELL', dataToSend.RO_INFO_RO_CELL);
formData.append('LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL);
formData.append('LOGISTICS3_TVESSEL_AVAIL', dataToSend.LOGISTICS3_TVESSEL_AVAIL);
formData.append('FBLI_FA_TLOC_FD_BEAT_TXT', dataToSend.FBLI_FA_TLOC_FD_BEAT_TXT);
formData.append('LOGISTICS3_SPEEDBOAT_CONDITION', dataToSend.LOGISTICS3_SPEEDBOAT_CONDITION);
formData.append('FBLI_FA_TLOC_FD_DIVISION', dataToSend.FBLI_FA_TLOC_FD_DIVISION);
formData.append('LAND_TRANSPORTS_BICYCLE_AVAIL', dataToSend.LAND_TRANSPORTS_BICYCLE_AVAIL);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GUSER_USER', dataToSend.GUSER_USER);
formData.append('RO_INFO_NAME_OF_RO', dataToSend.RO_INFO_NAME_OF_RO);
formData.append('FBLI_FA_TLOC_FD_BLOCK', dataToSend.FBLI_FA_TLOC_FD_BLOCK);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LAND_TRANSPORTS_MOTORB_CONDITION', dataToSend.LAND_TRANSPORTS_MOTORB_CONDITION);
formData.append('FBLI_GENERATED_NOTE_NAME_18', dataToSend.FBLI_GENERATED_NOTE_NAME_18);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74);
formData.append('LOGISTICS4_CHINESERIFLE_CONDITION', dataToSend.LOGISTICS4_CHINESERIFLE_CONDITION);
formData.append('LOGISTICS3_SPEEDBOAT_AVAIL', dataToSend.LOGISTICS3_SPEEDBOAT_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA);
formData.append('LOGISTICS4_GENERATED_NOTE_NAME_152', dataToSend.LOGISTICS4_GENERATED_NOTE_NAME_152);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('LAND_TRANSPORTS_BICYCLE_CONDITION', dataToSend.LAND_TRANSPORTS_BICYCLE_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA);
formData.append('GUSER_GENERATED_NOTE_NAME_10', dataToSend.GUSER_GENERATED_NOTE_NAME_10);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA);
formData.append('BO_INFO_BO_NID', dataToSend.BO_INFO_BO_NID);
formData.append('LAND_TRANSPORTS_GBI_CYCLE', dataToSend.LAND_TRANSPORTS_GBI_CYCLE);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA);
formData.append('LOGISTICS3_GCOUNTRY_BOAT', dataToSend.LOGISTICS3_GCOUNTRY_BOAT);
formData.append('LOGISTICS4_GFIREARMS_SLR', dataToSend.LOGISTICS4_GFIREARMS_SLR);
formData.append('FBLI_FA_TLOC_FD_CIR', dataToSend.FBLI_FA_TLOC_FD_CIR);
formData.append('LAND_TRANSPORTS_MOTORB_AVAIL', dataToSend.LAND_TRANSPORTS_MOTORB_AVAIL);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION);
formData.append('RO_INFO_RO_JOINING_DATE', dataToSend.RO_INFO_RO_JOINING_DATE);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA);
formData.append('RO_INFO_RO_RANK', dataToSend.RO_INFO_RO_RANK);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA);
formData.append('BO_INFO_BO_JOINING_DATE', dataToSend.BO_INFO_BO_JOINING_DATE);
formData.append('GUSER_USER_CELL', dataToSend.GUSER_USER_CELL);
formData.append('RO_INFO_RO_NID', dataToSend.RO_INFO_RO_NID);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ALT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ALT);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LAT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LAT);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA);
formData.append('LOGISTICS4_RIFLE303_CONDITION', dataToSend.LOGISTICS4_RIFLE303_CONDITION);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('BO_INFO_GENERATED_NOTE_NAME_106', dataToSend.BO_INFO_GENERATED_NOTE_NAME_106);
formData.append('GENERATED_NOTE_NAME_81', dataToSend.GENERATED_NOTE_NAME_81);
formData.append('RO_INFO_GENERATED_NOTE_NAME_97', dataToSend.RO_INFO_GENERATED_NOTE_NAME_97);
formData.append('FBLI_FA_GENERATED_NOTE_NAME_21', dataToSend.FBLI_FA_GENERATED_NOTE_NAME_21);
formData.append('LAND_TRANSPORTS_GENERATED_NOTE_NAME_125', dataToSend.LAND_TRANSPORTS_GENERATED_NOTE_NAME_125);
formData.append('GUSER_BEAT_ADDRESS', dataToSend.GUSER_BEAT_ADDRESS);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA);
formData.append('BO_INFO_BO_JOINING_DATE_RAW', dataToSend.BO_INFO_BO_JOINING_DATE_RAW);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ACC', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ACC);
formData.append('LOGISTICS3_COUNTRYBOAT_AVAIL', dataToSend.LOGISTICS3_COUNTRYBOAT_AVAIL);
formData.append('FBLI_CA_TLOC_AD_DISTRICT', dataToSend.FBLI_CA_TLOC_AD_DISTRICT);
formData.append('BO_INFO_NAME_OF_BO', dataToSend.BO_INFO_NAME_OF_BO);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA);
formData.append('LOGISTICS3_OTHERS_WATER_TRA', dataToSend.LOGISTICS3_OTHERS_WATER_TRA);
formData.append('FBLI_TLOC_ECOZONE', dataToSend.FBLI_TLOC_ECOZONE);
formData.append('BO_INFO_BO_RANK', dataToSend.BO_INFO_BO_RANK);
formData.append('LOGISTICS4_SLR_CONDITION', dataToSend.LOGISTICS4_SLR_CONDITION);
formData.append('END', dataToSend.END);
formData.append('FBLI_FA_TLOC_FD_RANGE', dataToSend.FBLI_FA_TLOC_FD_RANGE);
formData.append('RO_INFO_RO_JOINING_DATE_RAW', dataToSend.RO_INFO_RO_JOINING_DATE_RAW);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('LOGISTICS3_TRAWLER', dataToSend.LOGISTICS3_TRAWLER);
formData.append('LOGISTICS4_GFIREARMS_SHORTGUN', dataToSend.LOGISTICS4_GFIREARMS_SHORTGUN);
formData.append('LOGISTICS4_SHORTGUN_CONDITION', dataToSend.LOGISTICS4_SHORTGUN_CONDITION);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS', dataToSend.LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS);
formData.append('BO_INFO_BO_MAIL', dataToSend.BO_INFO_BO_MAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL);
formData.append('FBLI_CA_GENERATED_NOTE_NAME_33', dataToSend.FBLI_CA_GENERATED_NOTE_NAME_33);
formData.append('FBLI_CA_TLOC_AD_DIVISION', dataToSend.FBLI_CA_TLOC_AD_DIVISION);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_AVAIL);
formData.append('LOGISTICS3_GSPEED_BOAT', dataToSend.LOGISTICS3_GSPEED_BOAT);
formData.append('LOGISTICS4_TFIREARMS_303RIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_303RIFLE_AVAIL);
formData.append('LOGISTICS4_GFIREARMS_CHINESERIFLE', dataToSend.LOGISTICS4_GFIREARMS_CHINESERIFLE);
formData.append('TODAY', dataToSend.TODAY);
formData.append('FBLI_FA_TLOC_FD_CHAR', dataToSend.FBLI_FA_TLOC_FD_CHAR);
formData.append('LAND_TRANSPORTS_GMOTORBIKE', dataToSend.LAND_TRANSPORTS_GMOTORBIKE);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA);
formData.append('FBLI_FA_TLOC_ENTER_RANGE', dataToSend.FBLI_FA_TLOC_ENTER_RANGE);
formData.append('LAND_STATISTICS_AREA_SUM', dataToSend.LAND_STATISTICS_AREA_SUM);
formData.append('RO_INFO_RO_MAIL', dataToSend.RO_INFO_RO_MAIL);
formData.append('GENERATED_NOTE_NAME_123', dataToSend.GENERATED_NOTE_NAME_123);
formData.append('START', dataToSend.START);
formData.append('FBLI_CA_UNION', dataToSend.FBLI_CA_UNION);
formData.append('FBLI_FA_TLOC_ENTER_DIV', dataToSend.FBLI_FA_TLOC_ENTER_DIV);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('GENERATED_NOTE_NAME_94', dataToSend.GENERATED_NOTE_NAME_94);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_AVAIL);
formData.append('GENERATED_NOTE_NAME_95', dataToSend.GENERATED_NOTE_NAME_95);
formData.append('LOGISTICS4_TFIREARMS_SLR_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SLR_AVAIL);
formData.append('LOGISTICS3_GENERATED_NOTE_NAME_137', dataToSend.LOGISTICS3_GENERATED_NOTE_NAME_137);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_SKM', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_SKM);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_SKM', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_SKM);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_SKM', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_SKM);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_core?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_fbli_ca_tloc_ad_upzilla_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_FBLI_CA_TLOC_AD_UPZILLA WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_fbli_ca_tloc_ad_upzilla?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_fbli_ca_tloc_ad_upzilla_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_FBLI_CA_TLOC_AD_UPZILLA`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_fbli_ca_tloc_ad_upzilla?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_others_info1_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_OTHERS_INFO1 WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_115', dataToSend.GENERATED_NOTE_NAME_115);
formData.append('OTHERS_JOINING_DATE', dataToSend.OTHERS_JOINING_DATE);
formData.append('OTHERS_NID', dataToSend.OTHERS_NID);
formData.append('OTHERS_RANK', dataToSend.OTHERS_RANK);
formData.append('OTHERS_CELL', dataToSend.OTHERS_CELL);
formData.append('NAME_OF_OTHERS', dataToSend.NAME_OF_OTHERS);
formData.append('OTHERS_JOINING_DATE_RAW', dataToSend.OTHERS_JOINING_DATE_RAW);
formData.append('OTHERS_MAIL', dataToSend.OTHERS_MAIL);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_others_info1?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_others_info1_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_OTHERS_INFO1`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_115', dataToSend.GENERATED_NOTE_NAME_115);
formData.append('OTHERS_JOINING_DATE', dataToSend.OTHERS_JOINING_DATE);
formData.append('OTHERS_NID', dataToSend.OTHERS_NID);
formData.append('OTHERS_RANK', dataToSend.OTHERS_RANK);
formData.append('OTHERS_CELL', dataToSend.OTHERS_CELL);
formData.append('NAME_OF_OTHERS', dataToSend.NAME_OF_OTHERS);
formData.append('OTHERS_JOINING_DATE_RAW', dataToSend.OTHERS_JOINING_DATE_RAW);
formData.append('OTHERS_MAIL', dataToSend.OTHERS_MAIL);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_others_info1?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_overallnotes_ima_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_OVERALLNOTES_IMA_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_overallnotes_ima_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_overallnotes_ima_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_OVERALLNOTES_IMA_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_overallnotes_ima_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_core_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_CORE WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173);
formData.append('REG_AVG_SEEDLING_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_ALL_PLOTS);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_1', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_1);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_2', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_2);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174);
formData.append('LOCATION_DATA_CA_TLOC_AD_DISTRICT', dataToSend.LOCATION_DATA_CA_TLOC_AD_DISTRICT);
formData.append('MAGROVE_PLANT_WIND_DIR', dataToSend.MAGROVE_PLANT_WIND_DIR);
formData.append('GSITE_HISTORY', dataToSend.GSITE_HISTORY);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_20', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_20);
formData.append('GTRTS_PLANTING_PLANTING_YEAR', dataToSend.GTRTS_PLANTING_PLANTING_YEAR);
formData.append('INTERVENTION_DETAILS_PATCHES_PLANT', dataToSend.INTERVENTION_DETAILS_PATCHES_PLANT);
formData.append('INTERVENTION_DETAILS_SEEDING_PLANT', dataToSend.INTERVENTION_DETAILS_SEEDING_PLANT);
formData.append('PLANTING_PLAN_GPLANTING_SPACING', dataToSend.PLANTING_PLAN_GPLANTING_SPACING);
formData.append('MAGROVE_PLANT_MAN_AFF_CLAY_LAYER', dataToSend.MAGROVE_PLANT_MAN_AFF_CLAY_LAYER);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT);
formData.append('MAGROVE_PLANT_CRABS_HOLE', dataToSend.MAGROVE_PLANT_CRABS_HOLE);
formData.append('REG_AVG_SEEDLING_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_PER_HA_ALL_PLOTS);
formData.append('LOCATION_DATA_CA_UNION', dataToSend.LOCATION_DATA_CA_UNION);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GTRTS_PLANTING_PLANTING_YEAR_RAW', dataToSend.GTRTS_PLANTING_PLANTING_YEAR_RAW);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('PLANTING_PLAN_GENERATED_NOTE_NAME_151', dataToSend.PLANTING_PLAN_GENERATED_NOTE_NAME_151);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_YEAR', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_YEAR);
formData.append('NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179', dataToSend.NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_TYPE', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_TYPE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT);
formData.append('LOCATION_DATA_ECOZONE', dataToSend.LOCATION_DATA_ECOZONE);
formData.append('GTRTS_PLANTATION_SITE_YEAR', dataToSend.GTRTS_PLANTATION_SITE_YEAR);
formData.append('GUSER_TUSER_CELL', dataToSend.GUSER_TUSER_CELL);
formData.append('REG_AVG_TREES_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_TREES_PER_HA_ALL_PLOTS);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT);
formData.append('GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221', dataToSend.GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221);
formData.append('PLANTING_PLAN_SEEDLINGS_PER_HA', dataToSend.PLANTING_PLAN_SEEDLINGS_PER_HA);
formData.append('GTRTS_COMPOST_COMPOST_YEAR_RAW', dataToSend.GTRTS_COMPOST_COMPOST_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_NURSERY_LOCATION', dataToSend.NURSERY_NURSERY_SITE_NURSERY_LOCATION);
formData.append('GSITE_LAND_COV_DESC', dataToSend.GSITE_LAND_COV_DESC);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_GENERATED_NOTE_NAME_13', dataToSend.GUSER_GENERATED_NOTE_NAME_13);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR);
formData.append('GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED', dataToSend.GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND);
formData.append('MAGROVE_PLANT_MAN_AFF_LEVEL_INUND', dataToSend.MAGROVE_PLANT_MAN_AFF_LEVEL_INUND);
formData.append('ALLPATCHES', dataToSend.ALLPATCHES);
formData.append('GENERATED_NOTE_NAME_63', dataToSend.GENERATED_NOTE_NAME_63);
formData.append('GUSER_TUSER_EMAIL', dataToSend.GUSER_TUSER_EMAIL);
formData.append('CHECKED_BY', dataToSend.CHECKED_BY);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CIR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190);
formData.append('LOCATION_DATA_TLOCATION', dataToSend.LOCATION_DATA_TLOCATION);
formData.append('MAGROVE_PLANT_FACING_ISLAND', dataToSend.MAGROVE_PLANT_FACING_ISLAND);
formData.append('GUSER_TUSER', dataToSend.GUSER_TUSER);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME);
formData.append('LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23', dataToSend.LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC);
formData.append('GTRTS_PLANTATION_SITE_YEAR_RAW', dataToSend.GTRTS_PLANTATION_SITE_YEAR_RAW);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_115', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_115);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_114', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_114);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR);
formData.append('GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262', dataToSend.GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_119', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_119);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_118', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_118);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_117', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_117);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_116', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_116);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK);
formData.append('GTRTS_COMPOST_GENERATED_NOTE_NAME_247', dataToSend.GTRTS_COMPOST_GENERATED_NOTE_NAME_247);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION);
formData.append('GTRTS_COMPOST_COMPOST_YEAR', dataToSend.GTRTS_COMPOST_COMPOST_YEAR);
formData.append('GTRTS_PLANTING_GENERATED_NOTE_NAME_231', dataToSend.GTRTS_PLANTING_GENERATED_NOTE_NAME_231);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('CHECKED', dataToSend.CHECKED);
formData.append('GSITE_HIST_OTHER', dataToSend.GSITE_HIST_OTHER);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137);
formData.append('INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122', dataToSend.INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133);
formData.append('PLANTING_PLAN_TXT_BUILD1', dataToSend.PLANTING_PLAN_TXT_BUILD1);
formData.append('PLANTING_PLAN_TXT_BUILD2', dataToSend.PLANTING_PLAN_TXT_BUILD2);
formData.append('GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252', dataToSend.GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS);
formData.append('PLANTING_PLAN_BPLANTING', dataToSend.PLANTING_PLAN_BPLANTING);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC);
formData.append('LOCATION_DATA_CA_GENERATED_NOTE_NAME_36', dataToSend.LOCATION_DATA_CA_GENERATED_NOTE_NAME_36);
formData.append('INTERVENTION_DETAILS_LLOC_PLANT_AREA', dataToSend.INTERVENTION_DETAILS_LLOC_PLANT_AREA);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE);
formData.append('REG_PLOT_NO', dataToSend.REG_PLOT_NO);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4);
formData.append('END', dataToSend.END);
formData.append('PLANTING_PLAN_MAX_SEEDLINGS', dataToSend.PLANTING_PLAN_MAX_SEEDLINGS);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('GTRTS_PLANTATION_GENERATED_NOTE_NAME_226', dataToSend.GTRTS_PLANTATION_GENERATED_NOTE_NAME_226);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_OTHERS', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_OTHERS);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT);
formData.append('MAGROVE_PLANT_FACING_DIR', dataToSend.MAGROVE_PLANT_FACING_DIR);
formData.append('NURSERY_NURSERY_SITE_TPOLYTYPE_NUR', dataToSend.NURSERY_NURSERY_SITE_TPOLYTYPE_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT);
formData.append('MAGROVE_PLANT_MAN_AFF_PIONEERS_SP', dataToSend.MAGROVE_PLANT_MAN_AFF_PIONEERS_SP);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_CA_TLOC_AD_DIVISION', dataToSend.LOCATION_DATA_CA_TLOC_AD_DIVISION);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_CA_VILLAGE', dataToSend.LOCATION_DATA_CA_VILLAGE);
formData.append('MAGROVE_PLANT_WAVE_DIR', dataToSend.MAGROVE_PLANT_WAVE_DIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199);
formData.append('GSITE_GENERATED_NOTE_NAME_72', dataToSend.GSITE_GENERATED_NOTE_NAME_72);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE);
formData.append('START', dataToSend.START);
formData.append('REG_AVG_TREES_ALL_PLOTS', dataToSend.REG_AVG_TREES_ALL_PLOTS);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('APPROVED', dataToSend.APPROVED);
formData.append('MAGROVE_PLANT_GENERATED_NOTE_NAME_131', dataToSend.MAGROVE_PLANT_GENERATED_NOTE_NAME_131);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_core?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_core_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_CORE`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173);
formData.append('REG_AVG_SEEDLING_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_ALL_PLOTS);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_1', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_1);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_2', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_2);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174);
formData.append('LOCATION_DATA_CA_TLOC_AD_DISTRICT', dataToSend.LOCATION_DATA_CA_TLOC_AD_DISTRICT);
formData.append('MAGROVE_PLANT_WIND_DIR', dataToSend.MAGROVE_PLANT_WIND_DIR);
formData.append('GSITE_HISTORY', dataToSend.GSITE_HISTORY);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_20', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_20);
formData.append('GTRTS_PLANTING_PLANTING_YEAR', dataToSend.GTRTS_PLANTING_PLANTING_YEAR);
formData.append('INTERVENTION_DETAILS_PATCHES_PLANT', dataToSend.INTERVENTION_DETAILS_PATCHES_PLANT);
formData.append('INTERVENTION_DETAILS_SEEDING_PLANT', dataToSend.INTERVENTION_DETAILS_SEEDING_PLANT);
formData.append('PLANTING_PLAN_GPLANTING_SPACING', dataToSend.PLANTING_PLAN_GPLANTING_SPACING);
formData.append('MAGROVE_PLANT_MAN_AFF_CLAY_LAYER', dataToSend.MAGROVE_PLANT_MAN_AFF_CLAY_LAYER);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT);
formData.append('MAGROVE_PLANT_CRABS_HOLE', dataToSend.MAGROVE_PLANT_CRABS_HOLE);
formData.append('REG_AVG_SEEDLING_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_PER_HA_ALL_PLOTS);
formData.append('LOCATION_DATA_CA_UNION', dataToSend.LOCATION_DATA_CA_UNION);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GTRTS_PLANTING_PLANTING_YEAR_RAW', dataToSend.GTRTS_PLANTING_PLANTING_YEAR_RAW);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('PLANTING_PLAN_GENERATED_NOTE_NAME_151', dataToSend.PLANTING_PLAN_GENERATED_NOTE_NAME_151);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_YEAR', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_YEAR);
formData.append('NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179', dataToSend.NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_TYPE', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_TYPE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT);
formData.append('LOCATION_DATA_ECOZONE', dataToSend.LOCATION_DATA_ECOZONE);
formData.append('GTRTS_PLANTATION_SITE_YEAR', dataToSend.GTRTS_PLANTATION_SITE_YEAR);
formData.append('GUSER_TUSER_CELL', dataToSend.GUSER_TUSER_CELL);
formData.append('REG_AVG_TREES_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_TREES_PER_HA_ALL_PLOTS);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT);
formData.append('GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221', dataToSend.GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221);
formData.append('PLANTING_PLAN_SEEDLINGS_PER_HA', dataToSend.PLANTING_PLAN_SEEDLINGS_PER_HA);
formData.append('GTRTS_COMPOST_COMPOST_YEAR_RAW', dataToSend.GTRTS_COMPOST_COMPOST_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_NURSERY_LOCATION', dataToSend.NURSERY_NURSERY_SITE_NURSERY_LOCATION);
formData.append('GSITE_LAND_COV_DESC', dataToSend.GSITE_LAND_COV_DESC);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_GENERATED_NOTE_NAME_13', dataToSend.GUSER_GENERATED_NOTE_NAME_13);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR);
formData.append('GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED', dataToSend.GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND);
formData.append('MAGROVE_PLANT_MAN_AFF_LEVEL_INUND', dataToSend.MAGROVE_PLANT_MAN_AFF_LEVEL_INUND);
formData.append('ALLPATCHES', dataToSend.ALLPATCHES);
formData.append('GENERATED_NOTE_NAME_63', dataToSend.GENERATED_NOTE_NAME_63);
formData.append('GUSER_TUSER_EMAIL', dataToSend.GUSER_TUSER_EMAIL);
formData.append('CHECKED_BY', dataToSend.CHECKED_BY);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CIR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190);
formData.append('LOCATION_DATA_TLOCATION', dataToSend.LOCATION_DATA_TLOCATION);
formData.append('MAGROVE_PLANT_FACING_ISLAND', dataToSend.MAGROVE_PLANT_FACING_ISLAND);
formData.append('GUSER_TUSER', dataToSend.GUSER_TUSER);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME);
formData.append('LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23', dataToSend.LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC);
formData.append('GTRTS_PLANTATION_SITE_YEAR_RAW', dataToSend.GTRTS_PLANTATION_SITE_YEAR_RAW);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_115', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_115);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_114', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_114);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR);
formData.append('GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262', dataToSend.GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_119', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_119);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_118', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_118);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_117', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_117);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_116', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_116);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK);
formData.append('GTRTS_COMPOST_GENERATED_NOTE_NAME_247', dataToSend.GTRTS_COMPOST_GENERATED_NOTE_NAME_247);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION);
formData.append('GTRTS_COMPOST_COMPOST_YEAR', dataToSend.GTRTS_COMPOST_COMPOST_YEAR);
formData.append('GTRTS_PLANTING_GENERATED_NOTE_NAME_231', dataToSend.GTRTS_PLANTING_GENERATED_NOTE_NAME_231);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('CHECKED', dataToSend.CHECKED);
formData.append('GSITE_HIST_OTHER', dataToSend.GSITE_HIST_OTHER);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137);
formData.append('INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122', dataToSend.INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133);
formData.append('PLANTING_PLAN_TXT_BUILD1', dataToSend.PLANTING_PLAN_TXT_BUILD1);
formData.append('PLANTING_PLAN_TXT_BUILD2', dataToSend.PLANTING_PLAN_TXT_BUILD2);
formData.append('GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252', dataToSend.GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS);
formData.append('PLANTING_PLAN_BPLANTING', dataToSend.PLANTING_PLAN_BPLANTING);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC);
formData.append('LOCATION_DATA_CA_GENERATED_NOTE_NAME_36', dataToSend.LOCATION_DATA_CA_GENERATED_NOTE_NAME_36);
formData.append('INTERVENTION_DETAILS_LLOC_PLANT_AREA', dataToSend.INTERVENTION_DETAILS_LLOC_PLANT_AREA);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE);
formData.append('REG_PLOT_NO', dataToSend.REG_PLOT_NO);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4);
formData.append('END', dataToSend.END);
formData.append('PLANTING_PLAN_MAX_SEEDLINGS', dataToSend.PLANTING_PLAN_MAX_SEEDLINGS);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('GTRTS_PLANTATION_GENERATED_NOTE_NAME_226', dataToSend.GTRTS_PLANTATION_GENERATED_NOTE_NAME_226);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_OTHERS', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_OTHERS);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT);
formData.append('MAGROVE_PLANT_FACING_DIR', dataToSend.MAGROVE_PLANT_FACING_DIR);
formData.append('NURSERY_NURSERY_SITE_TPOLYTYPE_NUR', dataToSend.NURSERY_NURSERY_SITE_TPOLYTYPE_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT);
formData.append('MAGROVE_PLANT_MAN_AFF_PIONEERS_SP', dataToSend.MAGROVE_PLANT_MAN_AFF_PIONEERS_SP);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_CA_TLOC_AD_DIVISION', dataToSend.LOCATION_DATA_CA_TLOC_AD_DIVISION);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_CA_VILLAGE', dataToSend.LOCATION_DATA_CA_VILLAGE);
formData.append('MAGROVE_PLANT_WAVE_DIR', dataToSend.MAGROVE_PLANT_WAVE_DIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199);
formData.append('GSITE_GENERATED_NOTE_NAME_72', dataToSend.GSITE_GENERATED_NOTE_NAME_72);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE);
formData.append('START', dataToSend.START);
formData.append('REG_AVG_TREES_ALL_PLOTS', dataToSend.REG_AVG_TREES_ALL_PLOTS);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('APPROVED', dataToSend.APPROVED);
formData.append('MAGROVE_PLANT_GENERATED_NOTE_NAME_131', dataToSend.MAGROVE_PLANT_GENERATED_NOTE_NAME_131);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_core?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_filling_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_FILLING_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_filling_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_filling_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_FILLING_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_filling_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_e_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_e_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_e_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_e_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const odk_b39_2022_core_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM ODK_B39_2022_CORE WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('GUSER_USER_CELL', dataToSend.GUSER_USER_CELL);
formData.append('TODAY', dataToSend.TODAY);
formData.append('GUSER_TLOC_ENTER_RANGE', dataToSend.GUSER_TLOC_ENTER_RANGE);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('GUSER_TLOC_FD_DIVISION', dataToSend.GUSER_TLOC_FD_DIVISION);
formData.append('GUSER_TLOC_FD_RANGE', dataToSend.GUSER_TLOC_FD_RANGE);
formData.append('GUSER_USER', dataToSend.GUSER_USER);
formData.append('GUSER_TLOC_FD_BEAT', dataToSend.GUSER_TLOC_FD_BEAT);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('GUSER_DESIGNATION', dataToSend.GUSER_DESIGNATION);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('GUSER_TLOC_FD_BEAT_TXT', dataToSend.GUSER_TLOC_FD_BEAT_TXT);
formData.append('GUSER_GENERATED_NOTE_NAME_10', dataToSend.GUSER_GENERATED_NOTE_NAME_10);
formData.append('START', dataToSend.START);
formData.append('END', dataToSend.END);
formData.append('GUSER_TLOC_ECOZONE', dataToSend.GUSER_TLOC_ECOZONE);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('GUSER_TLOC_FD_CIR', dataToSend.GUSER_TLOC_FD_CIR);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/odk_b39_2022_core?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const odk_b39_2022_core_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM ODK_B39_2022_CORE`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('GUSER_USER_CELL', dataToSend.GUSER_USER_CELL);
formData.append('TODAY', dataToSend.TODAY);
formData.append('GUSER_TLOC_ENTER_RANGE', dataToSend.GUSER_TLOC_ENTER_RANGE);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('GUSER_TLOC_FD_DIVISION', dataToSend.GUSER_TLOC_FD_DIVISION);
formData.append('GUSER_TLOC_FD_RANGE', dataToSend.GUSER_TLOC_FD_RANGE);
formData.append('GUSER_USER', dataToSend.GUSER_USER);
formData.append('GUSER_TLOC_FD_BEAT', dataToSend.GUSER_TLOC_FD_BEAT);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('GUSER_DESIGNATION', dataToSend.GUSER_DESIGNATION);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('GUSER_TLOC_FD_BEAT_TXT', dataToSend.GUSER_TLOC_FD_BEAT_TXT);
formData.append('GUSER_GENERATED_NOTE_NAME_10', dataToSend.GUSER_GENERATED_NOTE_NAME_10);
formData.append('START', dataToSend.START);
formData.append('END', dataToSend.END);
formData.append('GUSER_TLOC_ECOZONE', dataToSend.GUSER_TLOC_ECOZONE);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('GUSER_TLOC_FD_CIR', dataToSend.GUSER_TLOC_FD_CIR);

          }
		  const response = await fetch(
			`${baseApi}/odk_b39_2022_core?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_n_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_n_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_n_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_n_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_n_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_n_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_n_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_n_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gtrts_planting_planting_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_PLANTING_PLANTING_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gtrts_planting_planting_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gtrts_planting_planting_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_PLANTING_PLANTING_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gtrts_planting_planting_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gtrts_vacancy_filling_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_VACANCY_FILLING WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_242', dataToSend.GENERATED_NOTE_NAME_242);
formData.append('FILLING_YEAR_RAW', dataToSend.FILLING_YEAR_RAW);
formData.append('FILLING_YEAR', dataToSend.FILLING_YEAR);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gtrts_vacancy_filling?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gtrts_vacancy_filling_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_VACANCY_FILLING`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_242', dataToSend.GENERATED_NOTE_NAME_242);
formData.append('FILLING_YEAR_RAW', dataToSend.FILLING_YEAR_RAW);
formData.append('FILLING_YEAR', dataToSend.FILLING_YEAR);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gtrts_vacancy_filling?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gtrts_weeding_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_WEEDING WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_236', dataToSend.GENERATED_NOTE_NAME_236);
formData.append('WEEDING_CYCLE', dataToSend.WEEDING_CYCLE);
formData.append('WEEDING_YEAR', dataToSend.WEEDING_YEAR);
formData.append('WEEDING_YEAR_RAW', dataToSend.WEEDING_YEAR_RAW);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gtrts_weeding?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gtrts_weeding_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_WEEDING`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_236', dataToSend.GENERATED_NOTE_NAME_236);
formData.append('WEEDING_CYCLE', dataToSend.WEEDING_CYCLE);
formData.append('WEEDING_YEAR', dataToSend.WEEDING_YEAR);
formData.append('WEEDING_YEAR_RAW', dataToSend.WEEDING_YEAR_RAW);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gtrts_weeding?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_overallnotes_ima_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_OVERALLNOTES_IMA_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_overallnotes_ima_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_overallnotes_ima_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_OVERALLNOTES_IMA_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_overallnotes_ima_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_overallnotes_ima_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_OVERALLNOTES_IMA_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_overallnotes_ima_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_overallnotes_ima_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_OVERALLNOTES_IMA_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_overallnotes_ima_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_planting_plan_gplanting_gspp_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_PLANTING_PLAN_GPLANTING_GSPP WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PREF_SOURCE', dataToSend.PREF_SOURCE);
formData.append('PREF_OTHER_SOURCE', dataToSend.PREF_OTHER_SOURCE);
formData.append('PREF_SPECIES', dataToSend.PREF_SPECIES);
formData.append('PREF_REPRO_TYPE', dataToSend.PREF_REPRO_TYPE);
formData.append('PREF_NRSEEDLINGS', dataToSend.PREF_NRSEEDLINGS);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_planting_plan_gplanting_gspp?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_planting_plan_gplanting_gspp_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_PLANTING_PLAN_GPLANTING_GSPP`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PREF_SOURCE', dataToSend.PREF_SOURCE);
formData.append('PREF_OTHER_SOURCE', dataToSend.PREF_OTHER_SOURCE);
formData.append('PREF_SPECIES', dataToSend.PREF_SPECIES);
formData.append('PREF_REPRO_TYPE', dataToSend.PREF_REPRO_TYPE);
formData.append('PREF_NRSEEDLINGS', dataToSend.PREF_NRSEEDLINGS);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_planting_plan_gplanting_gspp?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_plantngplngplntnggnrsry_spp_repeat_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_PLANTNGPLNGPLNTNGGNRSRY_SPP_REPEAT WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GNURS_SPP_GSPP_NAME', dataToSend.GNURS_SPP_GSPP_NAME);
formData.append('GNURS_SPP_SPP_NR', dataToSend.GNURS_SPP_SPP_NR);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_plantngplngplntnggnrsry_spp_repeat?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_plantngplngplntnggnrsry_spp_repeat_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_PLANTNGPLNGPLNTNGGNRSRY_SPP_REPEAT`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GNURS_SPP_GSPP_NAME', dataToSend.GNURS_SPP_GSPP_NAME);
formData.append('GNURS_SPP_SPP_NR', dataToSend.GNURS_SPP_SPP_NR);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_plantngplngplntnggnrsry_spp_repeat?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_rphotoextra_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_RPHOTOEXTRA WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PPICLOCATIONEXTRA_ALT', dataToSend.PPICLOCATIONEXTRA_ALT);
formData.append('XPIC_BEARING', dataToSend.XPIC_BEARING);
formData.append('PPICLOCATIONEXTRA_LNG', dataToSend.PPICLOCATIONEXTRA_LNG);
formData.append('PPICLOCATIONEXTRA_ACC', dataToSend.PPICLOCATIONEXTRA_ACC);
formData.append('PPICLOCATIONEXTRA_LAT', dataToSend.PPICLOCATIONEXTRA_LAT);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_rphotoextra?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_rphotoextra_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_RPHOTOEXTRA`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PPICLOCATIONEXTRA_ALT', dataToSend.PPICLOCATIONEXTRA_ALT);
formData.append('XPIC_BEARING', dataToSend.XPIC_BEARING);
formData.append('PPICLOCATIONEXTRA_LNG', dataToSend.PPICLOCATIONEXTRA_LNG);
formData.append('PPICLOCATIONEXTRA_ACC', dataToSend.PPICLOCATIONEXTRA_ACC);
formData.append('PPICLOCATIONEXTRA_LAT', dataToSend.PPICLOCATIONEXTRA_LAT);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_rphotoextra?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_s_site_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_S_SITE WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('TRACE_GPX', dataToSend.TRACE_GPX);
formData.append('POLYLINE', dataToSend.POLYLINE);
formData.append('TOTAREA_HA', dataToSend.TOTAREA_HA);
formData.append('TMAIN_POLYTYPE', dataToSend.TMAIN_POLYTYPE);
formData.append('POLYTRACE', dataToSend.POLYTRACE);
formData.append('TOTAREA_AC', dataToSend.TOTAREA_AC);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_s_site?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_s_site_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_S_SITE`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('TRACE_GPX', dataToSend.TRACE_GPX);
formData.append('POLYLINE', dataToSend.POLYLINE);
formData.append('TOTAREA_HA', dataToSend.TOTAREA_HA);
formData.append('TMAIN_POLYTYPE', dataToSend.TMAIN_POLYTYPE);
formData.append('POLYTRACE', dataToSend.POLYTRACE);
formData.append('TOTAREA_AC', dataToSend.TOTAREA_AC);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_s_site?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _form_info_xform_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _form_info_xform_blb WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_form_info_xform_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _form_info_xform_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _form_info_xform_blb`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/_form_info_xform_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _form_info_manifest_bin_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _form_info_manifest_bin WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_form_info_manifest_bin?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _form_info_manifest_bin_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _form_info_manifest_bin`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/_form_info_manifest_bin?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _form_info_manifest_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _form_info_manifest_blb WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_form_info_manifest_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _form_info_manifest_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _form_info_manifest_blb`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/_form_info_manifest_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _form_info_manifest_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _form_info_manifest_ref WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_form_info_manifest_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _form_info_manifest_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _form_info_manifest_ref`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/_form_info_manifest_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_w_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_W_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_w_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_w_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_W_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_w_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_w_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_W_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_w_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_w_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_W_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_w_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_conslttn_ttndnc_pctre_consultation_notes_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_NOTES_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_notes_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_conslttn_ttndnc_pctre_consultation_notes_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_NOTES_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_notes_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_s_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_w_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_spp_regen_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_SPP_REGEN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('NUM_TREES', dataToSend.NUM_TREES);
formData.append('GENERATED_NOTE_NAME_43', dataToSend.GENERATED_NOTE_NAME_43);
formData.append('RSPP_NAME', dataToSend.RSPP_NAME);
formData.append('RSPP_NR_NAT', dataToSend.RSPP_NR_NAT);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_spp_regen?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_spp_regen_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_SPP_REGEN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('NUM_TREES', dataToSend.NUM_TREES);
formData.append('GENERATED_NOTE_NAME_43', dataToSend.GENERATED_NOTE_NAME_43);
formData.append('RSPP_NAME', dataToSend.RSPP_NAME);
formData.append('RSPP_NR_NAT', dataToSend.RSPP_NR_NAT);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_spp_regen?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gr_regen_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GR_REGEN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('REG_AVG_SEEDLING_PER_HA_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_HA_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_CROWN_CLOSURE', dataToSend.GREGEN_GREGEN_PLOT_CROWN_CLOSURE);
formData.append('REG_AVG_SEEDLING_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_PLOT);
formData.append('REG_AVG_TREES_PER_HA_PER_PLOT', dataToSend.REG_AVG_TREES_PER_HA_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_ALT', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_ALT);
formData.append('GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_EAST', dataToSend.GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_EAST);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_LNG', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_LNG);
formData.append('GENERATED_NOTE_NAME_54', dataToSend.GENERATED_NOTE_NAME_54);
formData.append('GREGEN_GREGEN_PLOT_REGEN_PLOT_NO', dataToSend.GREGEN_GREGEN_PLOT_REGEN_PLOT_NO);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_LAT', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_LAT);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_ACC', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_ACC);
formData.append('GREGEN_GREGEN_PLOT_GENERATED_NOTE_NAME_28', dataToSend.GREGEN_GREGEN_PLOT_GENERATED_NOTE_NAME_28);
formData.append('GENERATED_NOTE_NAME_51', dataToSend.GENERATED_NOTE_NAME_51);
formData.append('REG_AVG_TREES_PER_PLOT', dataToSend.REG_AVG_TREES_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_RRECORD_HOW', dataToSend.GREGEN_GREGEN_PLOT_RRECORD_HOW);
formData.append('GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_NORTH', dataToSend.GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_NORTH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gr_regen?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gr_regen_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GR_REGEN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('REG_AVG_SEEDLING_PER_HA_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_HA_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_CROWN_CLOSURE', dataToSend.GREGEN_GREGEN_PLOT_CROWN_CLOSURE);
formData.append('REG_AVG_SEEDLING_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_PLOT);
formData.append('REG_AVG_TREES_PER_HA_PER_PLOT', dataToSend.REG_AVG_TREES_PER_HA_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_ALT', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_ALT);
formData.append('GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_EAST', dataToSend.GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_EAST);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_LNG', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_LNG);
formData.append('GENERATED_NOTE_NAME_54', dataToSend.GENERATED_NOTE_NAME_54);
formData.append('GREGEN_GREGEN_PLOT_REGEN_PLOT_NO', dataToSend.GREGEN_GREGEN_PLOT_REGEN_PLOT_NO);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_LAT', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_LAT);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_ACC', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_ACC);
formData.append('GREGEN_GREGEN_PLOT_GENERATED_NOTE_NAME_28', dataToSend.GREGEN_GREGEN_PLOT_GENERATED_NOTE_NAME_28);
formData.append('GENERATED_NOTE_NAME_51', dataToSend.GENERATED_NOTE_NAME_51);
formData.append('REG_AVG_TREES_PER_PLOT', dataToSend.REG_AVG_TREES_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_RRECORD_HOW', dataToSend.GREGEN_GREGEN_PLOT_RRECORD_HOW);
formData.append('GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_NORTH', dataToSend.GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_NORTH);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gr_regen?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _backend_actions_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _backend_actions WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('LAST_REVISION', dataToSend.LAST_REVISION);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_backend_actions?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _backend_actions_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _backend_actions`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('LAST_REVISION', dataToSend.LAST_REVISION);

          }
		  const response = await fetch(
			`${baseApi}/_backend_actions?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _filter_group_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _filter_group WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('FORM_ID', dataToSend.FORM_ID);
formData.append('NAME', dataToSend.NAME);
formData.append('URI_USER', dataToSend.URI_USER);
formData.append('IS_PUBLIC', dataToSend.IS_PUBLIC);
formData.append('INCLUDE_METADATA', dataToSend.INCLUDE_METADATA);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_filter_group?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _filter_group_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _filter_group`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('FORM_ID', dataToSend.FORM_ID);
formData.append('NAME', dataToSend.NAME);
formData.append('URI_USER', dataToSend.URI_USER);
formData.append('IS_PUBLIC', dataToSend.IS_PUBLIC);
formData.append('INCLUDE_METADATA', dataToSend.INCLUDE_METADATA);

          }
		  const response = await fetch(
			`${baseApi}/_filter_group?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _form_data_model_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _form_data_model WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('URI_SUBMISSION_DATA_MODEL', dataToSend.URI_SUBMISSION_DATA_MODEL);
formData.append('PARENT_URI_FORM_DATA_MODEL', dataToSend.PARENT_URI_FORM_DATA_MODEL);
formData.append('ORDINAL_NUMBER', dataToSend.ORDINAL_NUMBER);
formData.append('ELEMENT_TYPE', dataToSend.ELEMENT_TYPE);
formData.append('ELEMENT_NAME', dataToSend.ELEMENT_NAME);
formData.append('PERSIST_AS_COLUMN_NAME', dataToSend.PERSIST_AS_COLUMN_NAME);
formData.append('PERSIST_AS_TABLE_NAME', dataToSend.PERSIST_AS_TABLE_NAME);
formData.append('PERSIST_AS_SCHEMA_NAME', dataToSend.PERSIST_AS_SCHEMA_NAME);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_form_data_model?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _form_data_model_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _form_data_model`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('URI_SUBMISSION_DATA_MODEL', dataToSend.URI_SUBMISSION_DATA_MODEL);
formData.append('PARENT_URI_FORM_DATA_MODEL', dataToSend.PARENT_URI_FORM_DATA_MODEL);
formData.append('ORDINAL_NUMBER', dataToSend.ORDINAL_NUMBER);
formData.append('ELEMENT_TYPE', dataToSend.ELEMENT_TYPE);
formData.append('ELEMENT_NAME', dataToSend.ELEMENT_NAME);
formData.append('PERSIST_AS_COLUMN_NAME', dataToSend.PERSIST_AS_COLUMN_NAME);
formData.append('PERSIST_AS_TABLE_NAME', dataToSend.PERSIST_AS_TABLE_NAME);
formData.append('PERSIST_AS_SCHEMA_NAME', dataToSend.PERSIST_AS_SCHEMA_NAME);

          }
		  const response = await fetch(
			`${baseApi}/_form_data_model?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _form_info_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _form_info WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('FORM_ID', dataToSend.FORM_ID);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_form_info?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _form_info_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _form_info`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('FORM_ID', dataToSend.FORM_ID);

          }
		  const response = await fetch(
			`${baseApi}/_form_info?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _form_info_fileset_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _form_info_fileset WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('ROOT_ELEMENT_MODEL_VERSION', dataToSend.ROOT_ELEMENT_MODEL_VERSION);
formData.append('IS_ENCRYPTED_FORM', dataToSend.IS_ENCRYPTED_FORM);
formData.append('IS_DOWNLOAD_ALLOWED', dataToSend.IS_DOWNLOAD_ALLOWED);
formData.append('LANGUAGE_CODE', dataToSend.LANGUAGE_CODE);
formData.append('FORM_NAME', dataToSend.FORM_NAME);
formData.append('DESCRIPTION', dataToSend.DESCRIPTION);
formData.append('DESCRIPTION_URL', dataToSend.DESCRIPTION_URL);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_form_info_fileset?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _form_info_fileset_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _form_info_fileset`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('ROOT_ELEMENT_MODEL_VERSION', dataToSend.ROOT_ELEMENT_MODEL_VERSION);
formData.append('IS_ENCRYPTED_FORM', dataToSend.IS_ENCRYPTED_FORM);
formData.append('IS_DOWNLOAD_ALLOWED', dataToSend.IS_DOWNLOAD_ALLOWED);
formData.append('LANGUAGE_CODE', dataToSend.LANGUAGE_CODE);
formData.append('FORM_NAME', dataToSend.FORM_NAME);
formData.append('DESCRIPTION', dataToSend.DESCRIPTION);
formData.append('DESCRIPTION_URL', dataToSend.DESCRIPTION_URL);

          }
		  const response = await fetch(
			`${baseApi}/_form_info_fileset?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _form_info_submission_association_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _form_info_submission_association WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('URI_MD5_SUBMISSION_FORM_ID', dataToSend.URI_MD5_SUBMISSION_FORM_ID);
formData.append('URI_MD5_FORM_ID', dataToSend.URI_MD5_FORM_ID);
formData.append('SUBMISSION_FORM_ID', dataToSend.SUBMISSION_FORM_ID);
formData.append('IS_PERSISTENCE_MODEL_COMPLETE', dataToSend.IS_PERSISTENCE_MODEL_COMPLETE);
formData.append('IS_SUBMISSION_ALLOWED', dataToSend.IS_SUBMISSION_ALLOWED);
formData.append('URI_SUBMISSION_DATA_MODEL', dataToSend.URI_SUBMISSION_DATA_MODEL);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_form_info_submission_association?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _form_info_submission_association_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _form_info_submission_association`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('URI_MD5_SUBMISSION_FORM_ID', dataToSend.URI_MD5_SUBMISSION_FORM_ID);
formData.append('URI_MD5_FORM_ID', dataToSend.URI_MD5_FORM_ID);
formData.append('SUBMISSION_FORM_ID', dataToSend.SUBMISSION_FORM_ID);
formData.append('IS_PERSISTENCE_MODEL_COMPLETE', dataToSend.IS_PERSISTENCE_MODEL_COMPLETE);
formData.append('IS_SUBMISSION_ALLOWED', dataToSend.IS_SUBMISSION_ALLOWED);
formData.append('URI_SUBMISSION_DATA_MODEL', dataToSend.URI_SUBMISSION_DATA_MODEL);

          }
		  const response = await fetch(
			`${baseApi}/_form_info_submission_association?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _form_info_xform_bin_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _form_info_xform_bin WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_form_info_xform_bin?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _form_info_xform_bin_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _form_info_xform_bin`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/_form_info_xform_bin?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _form_info_xform_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _form_info_xform_ref WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_form_info_xform_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _form_info_xform_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _form_info_xform_ref`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/_form_info_xform_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _form_service_cursor_2_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _form_service_cursor_2 WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('URI_MD5_FORM_ID', dataToSend.URI_MD5_FORM_ID);
formData.append('AURI_SERVICE', dataToSend.AURI_SERVICE);
formData.append('EXT_SERVICE_TYPE', dataToSend.EXT_SERVICE_TYPE);
formData.append('EXTERNAL_SERVICE_OPTION', dataToSend.EXTERNAL_SERVICE_OPTION);
formData.append('IS_EXTERNAL_SERVICE_PREPARED', dataToSend.IS_EXTERNAL_SERVICE_PREPARED);
formData.append('OPERATIONAL_STATUS', dataToSend.OPERATIONAL_STATUS);
formData.append('RETRY_STATUS', dataToSend.RETRY_STATUS);
formData.append('ESTABLISHMENT_DATETIME', dataToSend.ESTABLISHMENT_DATETIME);
formData.append('UPLOAD_COMPLETED', dataToSend.UPLOAD_COMPLETED);
formData.append('LAST_UPLOAD_PERSISTENCE_CURSOR', dataToSend.LAST_UPLOAD_PERSISTENCE_CURSOR);
formData.append('LAST_UPLOAD_KEY', dataToSend.LAST_UPLOAD_KEY);
formData.append('LAST_STREAMING_PERSISTENCE_CURSOR', dataToSend.LAST_STREAMING_PERSISTENCE_CURSOR);
formData.append('LAST_STREAMING_KEY', dataToSend.LAST_STREAMING_KEY);
formData.append('FORM_ID', dataToSend.FORM_ID);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_form_service_cursor_2?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _form_service_cursor_2_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _form_service_cursor_2`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('URI_MD5_FORM_ID', dataToSend.URI_MD5_FORM_ID);
formData.append('AURI_SERVICE', dataToSend.AURI_SERVICE);
formData.append('EXT_SERVICE_TYPE', dataToSend.EXT_SERVICE_TYPE);
formData.append('EXTERNAL_SERVICE_OPTION', dataToSend.EXTERNAL_SERVICE_OPTION);
formData.append('IS_EXTERNAL_SERVICE_PREPARED', dataToSend.IS_EXTERNAL_SERVICE_PREPARED);
formData.append('OPERATIONAL_STATUS', dataToSend.OPERATIONAL_STATUS);
formData.append('RETRY_STATUS', dataToSend.RETRY_STATUS);
formData.append('ESTABLISHMENT_DATETIME', dataToSend.ESTABLISHMENT_DATETIME);
formData.append('UPLOAD_COMPLETED', dataToSend.UPLOAD_COMPLETED);
formData.append('LAST_UPLOAD_PERSISTENCE_CURSOR', dataToSend.LAST_UPLOAD_PERSISTENCE_CURSOR);
formData.append('LAST_UPLOAD_KEY', dataToSend.LAST_UPLOAD_KEY);
formData.append('LAST_STREAMING_PERSISTENCE_CURSOR', dataToSend.LAST_STREAMING_PERSISTENCE_CURSOR);
formData.append('LAST_STREAMING_KEY', dataToSend.LAST_STREAMING_KEY);
formData.append('FORM_ID', dataToSend.FORM_ID);

          }
		  const response = await fetch(
			`${baseApi}/_form_service_cursor_2?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _granted_authority_hierarchy_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _granted_authority_hierarchy WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('DOMINATING_GRANTED_AUTHORITY', dataToSend.DOMINATING_GRANTED_AUTHORITY);
formData.append('SUBORDINATE_GRANTED_AUTHORITY', dataToSend.SUBORDINATE_GRANTED_AUTHORITY);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_granted_authority_hierarchy?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _granted_authority_hierarchy_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _granted_authority_hierarchy`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('DOMINATING_GRANTED_AUTHORITY', dataToSend.DOMINATING_GRANTED_AUTHORITY);
formData.append('SUBORDINATE_GRANTED_AUTHORITY', dataToSend.SUBORDINATE_GRANTED_AUTHORITY);

          }
		  const response = await fetch(
			`${baseApi}/_granted_authority_hierarchy?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _misc_tasks_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _misc_tasks WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('FORM_ID', dataToSend.FORM_ID);
formData.append('REQUESTING_USER', dataToSend.REQUESTING_USER);
formData.append('REQUEST_DATE', dataToSend.REQUEST_DATE);
formData.append('REQUEST_PARAMETERS', dataToSend.REQUEST_PARAMETERS);
formData.append('LAST_ACTIVITY_DATE', dataToSend.LAST_ACTIVITY_DATE);
formData.append('ATTEMPT_COUNT', dataToSend.ATTEMPT_COUNT);
formData.append('STATUS', dataToSend.STATUS);
formData.append('TASK_TYPE', dataToSend.TASK_TYPE);
formData.append('COMPLETION_DATE', dataToSend.COMPLETION_DATE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_misc_tasks?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _misc_tasks_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _misc_tasks`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('FORM_ID', dataToSend.FORM_ID);
formData.append('REQUESTING_USER', dataToSend.REQUESTING_USER);
formData.append('REQUEST_DATE', dataToSend.REQUEST_DATE);
formData.append('REQUEST_PARAMETERS', dataToSend.REQUEST_PARAMETERS);
formData.append('LAST_ACTIVITY_DATE', dataToSend.LAST_ACTIVITY_DATE);
formData.append('ATTEMPT_COUNT', dataToSend.ATTEMPT_COUNT);
formData.append('STATUS', dataToSend.STATUS);
formData.append('TASK_TYPE', dataToSend.TASK_TYPE);
formData.append('COMPLETION_DATE', dataToSend.COMPLETION_DATE);

          }
		  const response = await fetch(
			`${baseApi}/_misc_tasks?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _persistent_result_file_bin_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _persistent_result_file_bin WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_persistent_result_file_bin?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _persistent_result_file_bin_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _persistent_result_file_bin`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/_persistent_result_file_bin?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _persistent_result_file_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _persistent_result_file_blb WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_persistent_result_file_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _persistent_result_file_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _persistent_result_file_blb`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/_persistent_result_file_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _persistent_result_file_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _persistent_result_file_ref WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_persistent_result_file_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _persistent_result_file_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _persistent_result_file_ref`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/_persistent_result_file_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _persistent_results_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _persistent_results WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('REQUESTING_USER', dataToSend.REQUESTING_USER);
formData.append('REQUEST_DATE', dataToSend.REQUEST_DATE);
formData.append('REQUEST_PARAMETERS', dataToSend.REQUEST_PARAMETERS);
formData.append('LAST_RETRY_DATE', dataToSend.LAST_RETRY_DATE);
formData.append('ATTEMPT_COUNT', dataToSend.ATTEMPT_COUNT);
formData.append('STATUS', dataToSend.STATUS);
formData.append('RESULT_TYPE', dataToSend.RESULT_TYPE);
formData.append('COMPLETION_DATE', dataToSend.COMPLETION_DATE);
formData.append('FORM_ID_KEY', dataToSend.FORM_ID_KEY);
formData.append('URI_FILTER_GROUP', dataToSend.URI_FILTER_GROUP);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_persistent_results?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _persistent_results_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _persistent_results`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('REQUESTING_USER', dataToSend.REQUESTING_USER);
formData.append('REQUEST_DATE', dataToSend.REQUEST_DATE);
formData.append('REQUEST_PARAMETERS', dataToSend.REQUEST_PARAMETERS);
formData.append('LAST_RETRY_DATE', dataToSend.LAST_RETRY_DATE);
formData.append('ATTEMPT_COUNT', dataToSend.ATTEMPT_COUNT);
formData.append('STATUS', dataToSend.STATUS);
formData.append('RESULT_TYPE', dataToSend.RESULT_TYPE);
formData.append('COMPLETION_DATE', dataToSend.COMPLETION_DATE);
formData.append('FORM_ID_KEY', dataToSend.FORM_ID_KEY);
formData.append('URI_FILTER_GROUP', dataToSend.URI_FILTER_GROUP);

          }
		  const response = await fetch(
			`${baseApi}/_persistent_results?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _registered_users_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _registered_users WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('LOCAL_USERNAME', dataToSend.LOCAL_USERNAME);
formData.append('OPENID_EMAIL', dataToSend.OPENID_EMAIL);
formData.append('FULL_NAME', dataToSend.FULL_NAME);
formData.append('BASIC_AUTH_PASSWORD', dataToSend.BASIC_AUTH_PASSWORD);
formData.append('BASIC_AUTH_SALT', dataToSend.BASIC_AUTH_SALT);
formData.append('DIGEST_AUTH_PASSWORD', dataToSend.DIGEST_AUTH_PASSWORD);
formData.append('IS_REMOVED', dataToSend.IS_REMOVED);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_registered_users?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _registered_users_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _registered_users`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('LOCAL_USERNAME', dataToSend.LOCAL_USERNAME);
formData.append('OPENID_EMAIL', dataToSend.OPENID_EMAIL);
formData.append('FULL_NAME', dataToSend.FULL_NAME);
formData.append('BASIC_AUTH_PASSWORD', dataToSend.BASIC_AUTH_PASSWORD);
formData.append('BASIC_AUTH_SALT', dataToSend.BASIC_AUTH_SALT);
formData.append('DIGEST_AUTH_PASSWORD', dataToSend.DIGEST_AUTH_PASSWORD);
formData.append('IS_REMOVED', dataToSend.IS_REMOVED);

          }
		  const response = await fetch(
			`${baseApi}/_registered_users?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _security_revisions_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _security_revisions WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('LAST_REVISION', dataToSend.LAST_REVISION);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_security_revisions?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _security_revisions_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _security_revisions`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('LAST_REVISION', dataToSend.LAST_REVISION);

          }
		  const response = await fetch(
			`${baseApi}/_security_revisions?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _server_preferences_properties_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _server_preferences_properties WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('KEY', dataToSend.KEY);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_server_preferences_properties?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _server_preferences_properties_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _server_preferences_properties`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('KEY', dataToSend.KEY);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/_server_preferences_properties?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _task_lock_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _task_lock WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('FORM_ID', dataToSend.FORM_ID);
formData.append('TASK_TYPE', dataToSend.TASK_TYPE);
formData.append('EXPIRATION_DATETIME', dataToSend.EXPIRATION_DATETIME);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_task_lock?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _task_lock_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _task_lock`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('FORM_ID', dataToSend.FORM_ID);
formData.append('TASK_TYPE', dataToSend.TASK_TYPE);
formData.append('EXPIRATION_DATETIME', dataToSend.EXPIRATION_DATETIME);

          }
		  const response = await fetch(
			`${baseApi}/_task_lock?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_core_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CORE WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LOCATION_DATA_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT_TXT);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE);
formData.append('CONSULTATION_GENERATED_NOTE_NAME_11', dataToSend.CONSULTATION_GENERATED_NOTE_NAME_11);
formData.append('CONSULTATION_USER_CELL', dataToSend.CONSULTATION_USER_CELL);
formData.append('LOCATION_DATA_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_TLOC_FD_CHAR);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47);
formData.append('CONSULTATION_CONSULTATION_PLACE', dataToSend.CONSULTATION_CONSULTATION_PLACE);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY);
formData.append('CONSULTATION_DCONSULTATION', dataToSend.CONSULTATION_DCONSULTATION);
formData.append('LOCATION_DATA_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_22', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_22);
formData.append('LOCATION_DATA_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_TLOC_FD_RANGE);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_24', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_24);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION);
formData.append('CONSULTATION_DCONSULTATION_START', dataToSend.CONSULTATION_DCONSULTATION_START);
formData.append('LOCATION_DATA_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2);
formData.append('CONSULTATION_DCONSULTATION_END_RAW', dataToSend.CONSULTATION_DCONSULTATION_END_RAW);
formData.append('LOCATION_DATA_TLOC_ECOZONE', dataToSend.LOCATION_DATA_TLOC_ECOZONE);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51);
formData.append('LOCATION_DATA_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_TLOC_FD_BLOCK);
formData.append('CONSULTATION_DCONSULTATION_END', dataToSend.CONSULTATION_DCONSULTATION_END);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LOCATION_DATA_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_TLOC_FD_DIVISION);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE);
formData.append('END', dataToSend.END);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('CONSULTATION_THOC_UNION', dataToSend.CONSULTATION_THOC_UNION);
formData.append('LOCATION_DATA_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_TLOC_ENTER_RANGE);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('CONSULTATION_USER_EMAIL', dataToSend.CONSULTATION_USER_EMAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('NOTES', dataToSend.NOTES);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS);
formData.append('CONSULTATION_DCONSULTATION_START_RAW', dataToSend.CONSULTATION_DCONSULTATION_START_RAW);
formData.append('CONSULTATION_USER_NAME', dataToSend.CONSULTATION_USER_NAME);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_TLOC_FD_CIR', dataToSend.LOCATION_DATA_TLOC_FD_CIR);
formData.append('START', dataToSend.START);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_core?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_core_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CORE`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LOCATION_DATA_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT_TXT);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_MALE);
formData.append('CONSULTATION_GENERATED_NOTE_NAME_11', dataToSend.CONSULTATION_GENERATED_NOTE_NAME_11);
formData.append('CONSULTATION_USER_CELL', dataToSend.CONSULTATION_USER_CELL);
formData.append('LOCATION_DATA_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_TLOC_FD_CHAR);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_GENERATED_NOTE_NAME_47);
formData.append('CONSULTATION_CONSULTATION_PLACE', dataToSend.CONSULTATION_CONSULTATION_PLACE);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_HIGH_BIODIVERSITY);
formData.append('CONSULTATION_DCONSULTATION', dataToSend.CONSULTATION_DCONSULTATION);
formData.append('LOCATION_DATA_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_22', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_22);
formData.append('LOCATION_DATA_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_TLOC_FD_RANGE);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_24', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_24);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_COMMUNITY_RESTORATION);
formData.append('CONSULTATION_DCONSULTATION_START', dataToSend.CONSULTATION_DCONSULTATION_START);
formData.append('LOCATION_DATA_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_TLOC_FD_BEAT);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_8);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_5);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_6);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_3);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_4);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_1);
formData.append('CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES', dataToSend.CONSULTATION_ISSUES_LIVELIHOODS_AIGAS_CONSERVATION_ACTIVITIES);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_SEI_2);
formData.append('CONSULTATION_DCONSULTATION_END_RAW', dataToSend.CONSULTATION_DCONSULTATION_END_RAW);
formData.append('LOCATION_DATA_TLOC_ECOZONE', dataToSend.LOCATION_DATA_TLOC_ECOZONE);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_GENERATED_NOTE_NAME_51);
formData.append('LOCATION_DATA_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_TLOC_FD_BLOCK);
formData.append('CONSULTATION_DCONSULTATION_END', dataToSend.CONSULTATION_DCONSULTATION_END);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LOCATION_DATA_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_TLOC_FD_DIVISION);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_PARTICIPANTS_FEMALE);
formData.append('END', dataToSend.END);
formData.append('CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79', dataToSend.CONSULTATION_ATTENDENCE_PICTURE_GENERATED_NOTE_NAME_79);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('CONSULTATION_THOC_UNION', dataToSend.CONSULTATION_THOC_UNION);
formData.append('LOCATION_DATA_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_TLOC_ENTER_RANGE);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('CONSULTATION_USER_EMAIL', dataToSend.CONSULTATION_USER_EMAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('NOTES', dataToSend.NOTES);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_BIODIVERSITY_LOSS);
formData.append('CONSULTATION_DCONSULTATION_START_RAW', dataToSend.CONSULTATION_DCONSULTATION_START_RAW);
formData.append('CONSULTATION_USER_NAME', dataToSend.CONSULTATION_USER_NAME);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_RESTORED_BIO);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_TLOC_FD_CIR', dataToSend.LOCATION_DATA_TLOC_FD_CIR);
formData.append('START', dataToSend.START);
formData.append('CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41', dataToSend.CONSLTTON_ISSUES_BIODIVERSITY_CONSRVTON_GENERATED_NOTE_NAME_41);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69', dataToSend.SOCIAL_ENVIRONMENTAL_IMPACTS_GENERATED_NOTE_NAME_69);
formData.append('CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT', dataToSend.CONSULTATION_ISSUES_FOREST_RESTORATION_JOINT_EFFORT);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

          }
		  const response = await fetch(
			`${baseApi}/com202021_core?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_core_audit_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_CORE_AUDIT WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('id', dataToSend.id);
formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LNG', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LNG);
formData.append('FBLI_FA_TLOC_FD_BEAT', dataToSend.FBLI_FA_TLOC_FD_BEAT);
formData.append('LOGISTICS3_COUNTRYBOAT_CONDITION', dataToSend.LOGISTICS3_COUNTRYBOAT_CONDITION);
formData.append('LOGISTICS4_GFIREARMS_303RIFLE', dataToSend.LOGISTICS4_GFIREARMS_303RIFLE);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA);
formData.append('LOGISTICS4_OTHERS_WATER_TRA', dataToSend.LOGISTICS4_OTHERS_WATER_TRA);
formData.append('BO_INFO_BO_CELL', dataToSend.BO_INFO_BO_CELL);
formData.append('LOGISTICS3_TVESSEL_CONDITION', dataToSend.LOGISTICS3_TVESSEL_CONDITION);
formData.append('RO_INFO_RO_CELL', dataToSend.RO_INFO_RO_CELL);
formData.append('LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL);
formData.append('LOGISTICS3_TVESSEL_AVAIL', dataToSend.LOGISTICS3_TVESSEL_AVAIL);
formData.append('FBLI_FA_TLOC_FD_BEAT_TXT', dataToSend.FBLI_FA_TLOC_FD_BEAT_TXT);
formData.append('LOGISTICS3_SPEEDBOAT_CONDITION', dataToSend.LOGISTICS3_SPEEDBOAT_CONDITION);
formData.append('FBLI_FA_TLOC_FD_DIVISION', dataToSend.FBLI_FA_TLOC_FD_DIVISION);
formData.append('LAND_TRANSPORTS_BICYCLE_AVAIL', dataToSend.LAND_TRANSPORTS_BICYCLE_AVAIL);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GUSER_USER', dataToSend.GUSER_USER);
formData.append('RO_INFO_NAME_OF_RO', dataToSend.RO_INFO_NAME_OF_RO);
formData.append('FBLI_FA_TLOC_FD_BLOCK', dataToSend.FBLI_FA_TLOC_FD_BLOCK);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LAND_TRANSPORTS_MOTORB_CONDITION', dataToSend.LAND_TRANSPORTS_MOTORB_CONDITION);
formData.append('FBLI_GENERATED_NOTE_NAME_18', dataToSend.FBLI_GENERATED_NOTE_NAME_18);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74);
formData.append('LOGISTICS4_CHINESERIFLE_CONDITION', dataToSend.LOGISTICS4_CHINESERIFLE_CONDITION);
formData.append('LOGISTICS3_SPEEDBOAT_AVAIL', dataToSend.LOGISTICS3_SPEEDBOAT_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA);
formData.append('LOGISTICS4_GENERATED_NOTE_NAME_152', dataToSend.LOGISTICS4_GENERATED_NOTE_NAME_152);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('LAND_TRANSPORTS_BICYCLE_CONDITION', dataToSend.LAND_TRANSPORTS_BICYCLE_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA);
formData.append('GUSER_GENERATED_NOTE_NAME_10', dataToSend.GUSER_GENERATED_NOTE_NAME_10);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA);
formData.append('BO_INFO_BO_NID', dataToSend.BO_INFO_BO_NID);
formData.append('LAND_TRANSPORTS_GBI_CYCLE', dataToSend.LAND_TRANSPORTS_GBI_CYCLE);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA);
formData.append('LOGISTICS3_GCOUNTRY_BOAT', dataToSend.LOGISTICS3_GCOUNTRY_BOAT);
formData.append('LOGISTICS4_GFIREARMS_SLR', dataToSend.LOGISTICS4_GFIREARMS_SLR);
formData.append('FBLI_FA_TLOC_FD_CIR', dataToSend.FBLI_FA_TLOC_FD_CIR);
formData.append('LAND_TRANSPORTS_MOTORB_AVAIL', dataToSend.LAND_TRANSPORTS_MOTORB_AVAIL);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION);
formData.append('RO_INFO_RO_JOINING_DATE', dataToSend.RO_INFO_RO_JOINING_DATE);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA);
formData.append('RO_INFO_RO_RANK', dataToSend.RO_INFO_RO_RANK);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA);
formData.append('BO_INFO_BO_JOINING_DATE', dataToSend.BO_INFO_BO_JOINING_DATE);
formData.append('GUSER_USER_CELL', dataToSend.GUSER_USER_CELL);
formData.append('RO_INFO_RO_NID', dataToSend.RO_INFO_RO_NID);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ALT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ALT);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LAT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LAT);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA);
formData.append('LOGISTICS4_RIFLE303_CONDITION', dataToSend.LOGISTICS4_RIFLE303_CONDITION);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('BO_INFO_GENERATED_NOTE_NAME_106', dataToSend.BO_INFO_GENERATED_NOTE_NAME_106);
formData.append('GENERATED_NOTE_NAME_81', dataToSend.GENERATED_NOTE_NAME_81);
formData.append('RO_INFO_GENERATED_NOTE_NAME_97', dataToSend.RO_INFO_GENERATED_NOTE_NAME_97);
formData.append('FBLI_FA_GENERATED_NOTE_NAME_21', dataToSend.FBLI_FA_GENERATED_NOTE_NAME_21);
formData.append('LAND_TRANSPORTS_GENERATED_NOTE_NAME_125', dataToSend.LAND_TRANSPORTS_GENERATED_NOTE_NAME_125);
formData.append('GUSER_BEAT_ADDRESS', dataToSend.GUSER_BEAT_ADDRESS);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA);
formData.append('BO_INFO_BO_JOINING_DATE_RAW', dataToSend.BO_INFO_BO_JOINING_DATE_RAW);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ACC', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ACC);
formData.append('LOGISTICS3_COUNTRYBOAT_AVAIL', dataToSend.LOGISTICS3_COUNTRYBOAT_AVAIL);
formData.append('FBLI_CA_TLOC_AD_DISTRICT', dataToSend.FBLI_CA_TLOC_AD_DISTRICT);
formData.append('BO_INFO_NAME_OF_BO', dataToSend.BO_INFO_NAME_OF_BO);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA);
formData.append('LOGISTICS3_OTHERS_WATER_TRA', dataToSend.LOGISTICS3_OTHERS_WATER_TRA);
formData.append('FBLI_TLOC_ECOZONE', dataToSend.FBLI_TLOC_ECOZONE);
formData.append('BO_INFO_BO_RANK', dataToSend.BO_INFO_BO_RANK);
formData.append('LOGISTICS4_SLR_CONDITION', dataToSend.LOGISTICS4_SLR_CONDITION);
formData.append('END', dataToSend.END);
formData.append('FBLI_FA_TLOC_FD_RANGE', dataToSend.FBLI_FA_TLOC_FD_RANGE);
formData.append('RO_INFO_RO_JOINING_DATE_RAW', dataToSend.RO_INFO_RO_JOINING_DATE_RAW);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('LOGISTICS3_TRAWLER', dataToSend.LOGISTICS3_TRAWLER);
formData.append('LOGISTICS4_GFIREARMS_SHORTGUN', dataToSend.LOGISTICS4_GFIREARMS_SHORTGUN);
formData.append('LOGISTICS4_SHORTGUN_CONDITION', dataToSend.LOGISTICS4_SHORTGUN_CONDITION);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS', dataToSend.LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS);
formData.append('BO_INFO_BO_MAIL', dataToSend.BO_INFO_BO_MAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL);
formData.append('FBLI_CA_GENERATED_NOTE_NAME_33', dataToSend.FBLI_CA_GENERATED_NOTE_NAME_33);
formData.append('FBLI_CA_TLOC_AD_DIVISION', dataToSend.FBLI_CA_TLOC_AD_DIVISION);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_AVAIL);
formData.append('LOGISTICS3_GSPEED_BOAT', dataToSend.LOGISTICS3_GSPEED_BOAT);
formData.append('LOGISTICS4_TFIREARMS_303RIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_303RIFLE_AVAIL);
formData.append('LOGISTICS4_GFIREARMS_CHINESERIFLE', dataToSend.LOGISTICS4_GFIREARMS_CHINESERIFLE);
formData.append('TODAY', dataToSend.TODAY);
formData.append('FBLI_FA_TLOC_FD_CHAR', dataToSend.FBLI_FA_TLOC_FD_CHAR);
formData.append('LAND_TRANSPORTS_GMOTORBIKE', dataToSend.LAND_TRANSPORTS_GMOTORBIKE);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA);
formData.append('FBLI_FA_TLOC_ENTER_RANGE', dataToSend.FBLI_FA_TLOC_ENTER_RANGE);
formData.append('LAND_STATISTICS_AREA_SUM', dataToSend.LAND_STATISTICS_AREA_SUM);
formData.append('RO_INFO_RO_MAIL', dataToSend.RO_INFO_RO_MAIL);
formData.append('GENERATED_NOTE_NAME_123', dataToSend.GENERATED_NOTE_NAME_123);
formData.append('START', dataToSend.START);
formData.append('FBLI_CA_UNION', dataToSend.FBLI_CA_UNION);
formData.append('FBLI_FA_TLOC_ENTER_DIV', dataToSend.FBLI_FA_TLOC_ENTER_DIV);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('GENERATED_NOTE_NAME_94', dataToSend.GENERATED_NOTE_NAME_94);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_AVAIL);
formData.append('GENERATED_NOTE_NAME_95', dataToSend.GENERATED_NOTE_NAME_95);
formData.append('LOGISTICS4_TFIREARMS_SLR_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SLR_AVAIL);
formData.append('LOGISTICS3_GENERATED_NOTE_NAME_137', dataToSend.LOGISTICS3_GENERATED_NOTE_NAME_137);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);
formData.append('UserName', dataToSend.UserName);
formData.append('AdditionTime', dataToSend.AdditionTime);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_core_audit?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_core_audit_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_CORE_AUDIT`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('id', dataToSend.id);
formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LNG', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LNG);
formData.append('FBLI_FA_TLOC_FD_BEAT', dataToSend.FBLI_FA_TLOC_FD_BEAT);
formData.append('LOGISTICS3_COUNTRYBOAT_CONDITION', dataToSend.LOGISTICS3_COUNTRYBOAT_CONDITION);
formData.append('LOGISTICS4_GFIREARMS_303RIFLE', dataToSend.LOGISTICS4_GFIREARMS_303RIFLE);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA);
formData.append('LOGISTICS4_OTHERS_WATER_TRA', dataToSend.LOGISTICS4_OTHERS_WATER_TRA);
formData.append('BO_INFO_BO_CELL', dataToSend.BO_INFO_BO_CELL);
formData.append('LOGISTICS3_TVESSEL_CONDITION', dataToSend.LOGISTICS3_TVESSEL_CONDITION);
formData.append('RO_INFO_RO_CELL', dataToSend.RO_INFO_RO_CELL);
formData.append('LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL);
formData.append('LOGISTICS3_TVESSEL_AVAIL', dataToSend.LOGISTICS3_TVESSEL_AVAIL);
formData.append('FBLI_FA_TLOC_FD_BEAT_TXT', dataToSend.FBLI_FA_TLOC_FD_BEAT_TXT);
formData.append('LOGISTICS3_SPEEDBOAT_CONDITION', dataToSend.LOGISTICS3_SPEEDBOAT_CONDITION);
formData.append('FBLI_FA_TLOC_FD_DIVISION', dataToSend.FBLI_FA_TLOC_FD_DIVISION);
formData.append('LAND_TRANSPORTS_BICYCLE_AVAIL', dataToSend.LAND_TRANSPORTS_BICYCLE_AVAIL);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GUSER_USER', dataToSend.GUSER_USER);
formData.append('RO_INFO_NAME_OF_RO', dataToSend.RO_INFO_NAME_OF_RO);
formData.append('FBLI_FA_TLOC_FD_BLOCK', dataToSend.FBLI_FA_TLOC_FD_BLOCK);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LAND_TRANSPORTS_MOTORB_CONDITION', dataToSend.LAND_TRANSPORTS_MOTORB_CONDITION);
formData.append('FBLI_GENERATED_NOTE_NAME_18', dataToSend.FBLI_GENERATED_NOTE_NAME_18);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74);
formData.append('LOGISTICS4_CHINESERIFLE_CONDITION', dataToSend.LOGISTICS4_CHINESERIFLE_CONDITION);
formData.append('LOGISTICS3_SPEEDBOAT_AVAIL', dataToSend.LOGISTICS3_SPEEDBOAT_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA);
formData.append('LOGISTICS4_GENERATED_NOTE_NAME_152', dataToSend.LOGISTICS4_GENERATED_NOTE_NAME_152);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('LAND_TRANSPORTS_BICYCLE_CONDITION', dataToSend.LAND_TRANSPORTS_BICYCLE_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA);
formData.append('GUSER_GENERATED_NOTE_NAME_10', dataToSend.GUSER_GENERATED_NOTE_NAME_10);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA);
formData.append('BO_INFO_BO_NID', dataToSend.BO_INFO_BO_NID);
formData.append('LAND_TRANSPORTS_GBI_CYCLE', dataToSend.LAND_TRANSPORTS_GBI_CYCLE);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA);
formData.append('LOGISTICS3_GCOUNTRY_BOAT', dataToSend.LOGISTICS3_GCOUNTRY_BOAT);
formData.append('LOGISTICS4_GFIREARMS_SLR', dataToSend.LOGISTICS4_GFIREARMS_SLR);
formData.append('FBLI_FA_TLOC_FD_CIR', dataToSend.FBLI_FA_TLOC_FD_CIR);
formData.append('LAND_TRANSPORTS_MOTORB_AVAIL', dataToSend.LAND_TRANSPORTS_MOTORB_AVAIL);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION);
formData.append('RO_INFO_RO_JOINING_DATE', dataToSend.RO_INFO_RO_JOINING_DATE);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA);
formData.append('RO_INFO_RO_RANK', dataToSend.RO_INFO_RO_RANK);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA);
formData.append('BO_INFO_BO_JOINING_DATE', dataToSend.BO_INFO_BO_JOINING_DATE);
formData.append('GUSER_USER_CELL', dataToSend.GUSER_USER_CELL);
formData.append('RO_INFO_RO_NID', dataToSend.RO_INFO_RO_NID);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ALT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ALT);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LAT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LAT);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA);
formData.append('LOGISTICS4_RIFLE303_CONDITION', dataToSend.LOGISTICS4_RIFLE303_CONDITION);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('BO_INFO_GENERATED_NOTE_NAME_106', dataToSend.BO_INFO_GENERATED_NOTE_NAME_106);
formData.append('GENERATED_NOTE_NAME_81', dataToSend.GENERATED_NOTE_NAME_81);
formData.append('RO_INFO_GENERATED_NOTE_NAME_97', dataToSend.RO_INFO_GENERATED_NOTE_NAME_97);
formData.append('FBLI_FA_GENERATED_NOTE_NAME_21', dataToSend.FBLI_FA_GENERATED_NOTE_NAME_21);
formData.append('LAND_TRANSPORTS_GENERATED_NOTE_NAME_125', dataToSend.LAND_TRANSPORTS_GENERATED_NOTE_NAME_125);
formData.append('GUSER_BEAT_ADDRESS', dataToSend.GUSER_BEAT_ADDRESS);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA);
formData.append('BO_INFO_BO_JOINING_DATE_RAW', dataToSend.BO_INFO_BO_JOINING_DATE_RAW);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ACC', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ACC);
formData.append('LOGISTICS3_COUNTRYBOAT_AVAIL', dataToSend.LOGISTICS3_COUNTRYBOAT_AVAIL);
formData.append('FBLI_CA_TLOC_AD_DISTRICT', dataToSend.FBLI_CA_TLOC_AD_DISTRICT);
formData.append('BO_INFO_NAME_OF_BO', dataToSend.BO_INFO_NAME_OF_BO);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA);
formData.append('LOGISTICS3_OTHERS_WATER_TRA', dataToSend.LOGISTICS3_OTHERS_WATER_TRA);
formData.append('FBLI_TLOC_ECOZONE', dataToSend.FBLI_TLOC_ECOZONE);
formData.append('BO_INFO_BO_RANK', dataToSend.BO_INFO_BO_RANK);
formData.append('LOGISTICS4_SLR_CONDITION', dataToSend.LOGISTICS4_SLR_CONDITION);
formData.append('END', dataToSend.END);
formData.append('FBLI_FA_TLOC_FD_RANGE', dataToSend.FBLI_FA_TLOC_FD_RANGE);
formData.append('RO_INFO_RO_JOINING_DATE_RAW', dataToSend.RO_INFO_RO_JOINING_DATE_RAW);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('LOGISTICS3_TRAWLER', dataToSend.LOGISTICS3_TRAWLER);
formData.append('LOGISTICS4_GFIREARMS_SHORTGUN', dataToSend.LOGISTICS4_GFIREARMS_SHORTGUN);
formData.append('LOGISTICS4_SHORTGUN_CONDITION', dataToSend.LOGISTICS4_SHORTGUN_CONDITION);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS', dataToSend.LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS);
formData.append('BO_INFO_BO_MAIL', dataToSend.BO_INFO_BO_MAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL);
formData.append('FBLI_CA_GENERATED_NOTE_NAME_33', dataToSend.FBLI_CA_GENERATED_NOTE_NAME_33);
formData.append('FBLI_CA_TLOC_AD_DIVISION', dataToSend.FBLI_CA_TLOC_AD_DIVISION);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_AVAIL);
formData.append('LOGISTICS3_GSPEED_BOAT', dataToSend.LOGISTICS3_GSPEED_BOAT);
formData.append('LOGISTICS4_TFIREARMS_303RIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_303RIFLE_AVAIL);
formData.append('LOGISTICS4_GFIREARMS_CHINESERIFLE', dataToSend.LOGISTICS4_GFIREARMS_CHINESERIFLE);
formData.append('TODAY', dataToSend.TODAY);
formData.append('FBLI_FA_TLOC_FD_CHAR', dataToSend.FBLI_FA_TLOC_FD_CHAR);
formData.append('LAND_TRANSPORTS_GMOTORBIKE', dataToSend.LAND_TRANSPORTS_GMOTORBIKE);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA);
formData.append('FBLI_FA_TLOC_ENTER_RANGE', dataToSend.FBLI_FA_TLOC_ENTER_RANGE);
formData.append('LAND_STATISTICS_AREA_SUM', dataToSend.LAND_STATISTICS_AREA_SUM);
formData.append('RO_INFO_RO_MAIL', dataToSend.RO_INFO_RO_MAIL);
formData.append('GENERATED_NOTE_NAME_123', dataToSend.GENERATED_NOTE_NAME_123);
formData.append('START', dataToSend.START);
formData.append('FBLI_CA_UNION', dataToSend.FBLI_CA_UNION);
formData.append('FBLI_FA_TLOC_ENTER_DIV', dataToSend.FBLI_FA_TLOC_ENTER_DIV);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('GENERATED_NOTE_NAME_94', dataToSend.GENERATED_NOTE_NAME_94);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_AVAIL);
formData.append('GENERATED_NOTE_NAME_95', dataToSend.GENERATED_NOTE_NAME_95);
formData.append('LOGISTICS4_TFIREARMS_SLR_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SLR_AVAIL);
formData.append('LOGISTICS3_GENERATED_NOTE_NAME_137', dataToSend.LOGISTICS3_GENERATED_NOTE_NAME_137);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);
formData.append('UserName', dataToSend.UserName);
formData.append('AdditionTime', dataToSend.AdditionTime);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_core_audit?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_core_test_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_CORE_TEST WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LNG', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LNG);
formData.append('FBLI_FA_TLOC_FD_BEAT', dataToSend.FBLI_FA_TLOC_FD_BEAT);
formData.append('LOGISTICS3_COUNTRYBOAT_CONDITION', dataToSend.LOGISTICS3_COUNTRYBOAT_CONDITION);
formData.append('LOGISTICS4_GFIREARMS_303RIFLE', dataToSend.LOGISTICS4_GFIREARMS_303RIFLE);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA);
formData.append('LOGISTICS4_OTHERS_WATER_TRA', dataToSend.LOGISTICS4_OTHERS_WATER_TRA);
formData.append('BO_INFO_BO_CELL', dataToSend.BO_INFO_BO_CELL);
formData.append('LOGISTICS3_TVESSEL_CONDITION', dataToSend.LOGISTICS3_TVESSEL_CONDITION);
formData.append('RO_INFO_RO_CELL', dataToSend.RO_INFO_RO_CELL);
formData.append('LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL);
formData.append('LOGISTICS3_TVESSEL_AVAIL', dataToSend.LOGISTICS3_TVESSEL_AVAIL);
formData.append('FBLI_FA_TLOC_FD_BEAT_TXT', dataToSend.FBLI_FA_TLOC_FD_BEAT_TXT);
formData.append('LOGISTICS3_SPEEDBOAT_CONDITION', dataToSend.LOGISTICS3_SPEEDBOAT_CONDITION);
formData.append('FBLI_FA_TLOC_FD_DIVISION', dataToSend.FBLI_FA_TLOC_FD_DIVISION);
formData.append('LAND_TRANSPORTS_BICYCLE_AVAIL', dataToSend.LAND_TRANSPORTS_BICYCLE_AVAIL);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GUSER_USER', dataToSend.GUSER_USER);
formData.append('RO_INFO_NAME_OF_RO', dataToSend.RO_INFO_NAME_OF_RO);
formData.append('FBLI_FA_TLOC_FD_BLOCK', dataToSend.FBLI_FA_TLOC_FD_BLOCK);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LAND_TRANSPORTS_MOTORB_CONDITION', dataToSend.LAND_TRANSPORTS_MOTORB_CONDITION);
formData.append('FBLI_GENERATED_NOTE_NAME_18', dataToSend.FBLI_GENERATED_NOTE_NAME_18);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74);
formData.append('LOGISTICS4_CHINESERIFLE_CONDITION', dataToSend.LOGISTICS4_CHINESERIFLE_CONDITION);
formData.append('LOGISTICS3_SPEEDBOAT_AVAIL', dataToSend.LOGISTICS3_SPEEDBOAT_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA);
formData.append('LOGISTICS4_GENERATED_NOTE_NAME_152', dataToSend.LOGISTICS4_GENERATED_NOTE_NAME_152);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('LAND_TRANSPORTS_BICYCLE_CONDITION', dataToSend.LAND_TRANSPORTS_BICYCLE_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA);
formData.append('GUSER_GENERATED_NOTE_NAME_10', dataToSend.GUSER_GENERATED_NOTE_NAME_10);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA);
formData.append('BO_INFO_BO_NID', dataToSend.BO_INFO_BO_NID);
formData.append('LAND_TRANSPORTS_GBI_CYCLE', dataToSend.LAND_TRANSPORTS_GBI_CYCLE);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA);
formData.append('LOGISTICS3_GCOUNTRY_BOAT', dataToSend.LOGISTICS3_GCOUNTRY_BOAT);
formData.append('LOGISTICS4_GFIREARMS_SLR', dataToSend.LOGISTICS4_GFIREARMS_SLR);
formData.append('FBLI_FA_TLOC_FD_CIR', dataToSend.FBLI_FA_TLOC_FD_CIR);
formData.append('LAND_TRANSPORTS_MOTORB_AVAIL', dataToSend.LAND_TRANSPORTS_MOTORB_AVAIL);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION);
formData.append('RO_INFO_RO_JOINING_DATE', dataToSend.RO_INFO_RO_JOINING_DATE);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA);
formData.append('RO_INFO_RO_RANK', dataToSend.RO_INFO_RO_RANK);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA);
formData.append('BO_INFO_BO_JOINING_DATE', dataToSend.BO_INFO_BO_JOINING_DATE);
formData.append('GUSER_USER_CELL', dataToSend.GUSER_USER_CELL);
formData.append('RO_INFO_RO_NID', dataToSend.RO_INFO_RO_NID);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ALT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ALT);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LAT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LAT);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA);
formData.append('LOGISTICS4_RIFLE303_CONDITION', dataToSend.LOGISTICS4_RIFLE303_CONDITION);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('BO_INFO_GENERATED_NOTE_NAME_106', dataToSend.BO_INFO_GENERATED_NOTE_NAME_106);
formData.append('GENERATED_NOTE_NAME_81', dataToSend.GENERATED_NOTE_NAME_81);
formData.append('RO_INFO_GENERATED_NOTE_NAME_97', dataToSend.RO_INFO_GENERATED_NOTE_NAME_97);
formData.append('FBLI_FA_GENERATED_NOTE_NAME_21', dataToSend.FBLI_FA_GENERATED_NOTE_NAME_21);
formData.append('LAND_TRANSPORTS_GENERATED_NOTE_NAME_125', dataToSend.LAND_TRANSPORTS_GENERATED_NOTE_NAME_125);
formData.append('GUSER_BEAT_ADDRESS', dataToSend.GUSER_BEAT_ADDRESS);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA);
formData.append('BO_INFO_BO_JOINING_DATE_RAW', dataToSend.BO_INFO_BO_JOINING_DATE_RAW);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ACC', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ACC);
formData.append('LOGISTICS3_COUNTRYBOAT_AVAIL', dataToSend.LOGISTICS3_COUNTRYBOAT_AVAIL);
formData.append('FBLI_CA_TLOC_AD_DISTRICT', dataToSend.FBLI_CA_TLOC_AD_DISTRICT);
formData.append('BO_INFO_NAME_OF_BO', dataToSend.BO_INFO_NAME_OF_BO);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA);
formData.append('LOGISTICS3_OTHERS_WATER_TRA', dataToSend.LOGISTICS3_OTHERS_WATER_TRA);
formData.append('FBLI_TLOC_ECOZONE', dataToSend.FBLI_TLOC_ECOZONE);
formData.append('BO_INFO_BO_RANK', dataToSend.BO_INFO_BO_RANK);
formData.append('LOGISTICS4_SLR_CONDITION', dataToSend.LOGISTICS4_SLR_CONDITION);
formData.append('END', dataToSend.END);
formData.append('FBLI_FA_TLOC_FD_RANGE', dataToSend.FBLI_FA_TLOC_FD_RANGE);
formData.append('RO_INFO_RO_JOINING_DATE_RAW', dataToSend.RO_INFO_RO_JOINING_DATE_RAW);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('LOGISTICS3_TRAWLER', dataToSend.LOGISTICS3_TRAWLER);
formData.append('LOGISTICS4_GFIREARMS_SHORTGUN', dataToSend.LOGISTICS4_GFIREARMS_SHORTGUN);
formData.append('LOGISTICS4_SHORTGUN_CONDITION', dataToSend.LOGISTICS4_SHORTGUN_CONDITION);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS', dataToSend.LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS);
formData.append('BO_INFO_BO_MAIL', dataToSend.BO_INFO_BO_MAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL);
formData.append('FBLI_CA_GENERATED_NOTE_NAME_33', dataToSend.FBLI_CA_GENERATED_NOTE_NAME_33);
formData.append('FBLI_CA_TLOC_AD_DIVISION', dataToSend.FBLI_CA_TLOC_AD_DIVISION);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_AVAIL);
formData.append('LOGISTICS3_GSPEED_BOAT', dataToSend.LOGISTICS3_GSPEED_BOAT);
formData.append('LOGISTICS4_TFIREARMS_303RIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_303RIFLE_AVAIL);
formData.append('LOGISTICS4_GFIREARMS_CHINESERIFLE', dataToSend.LOGISTICS4_GFIREARMS_CHINESERIFLE);
formData.append('TODAY', dataToSend.TODAY);
formData.append('FBLI_FA_TLOC_FD_CHAR', dataToSend.FBLI_FA_TLOC_FD_CHAR);
formData.append('LAND_TRANSPORTS_GMOTORBIKE', dataToSend.LAND_TRANSPORTS_GMOTORBIKE);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA);
formData.append('FBLI_FA_TLOC_ENTER_RANGE', dataToSend.FBLI_FA_TLOC_ENTER_RANGE);
formData.append('LAND_STATISTICS_AREA_SUM', dataToSend.LAND_STATISTICS_AREA_SUM);
formData.append('RO_INFO_RO_MAIL', dataToSend.RO_INFO_RO_MAIL);
formData.append('GENERATED_NOTE_NAME_123', dataToSend.GENERATED_NOTE_NAME_123);
formData.append('START', dataToSend.START);
formData.append('FBLI_CA_UNION', dataToSend.FBLI_CA_UNION);
formData.append('FBLI_FA_TLOC_ENTER_DIV', dataToSend.FBLI_FA_TLOC_ENTER_DIV);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('GENERATED_NOTE_NAME_94', dataToSend.GENERATED_NOTE_NAME_94);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_AVAIL);
formData.append('GENERATED_NOTE_NAME_95', dataToSend.GENERATED_NOTE_NAME_95);
formData.append('LOGISTICS4_TFIREARMS_SLR_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SLR_AVAIL);
formData.append('LOGISTICS3_GENERATED_NOTE_NAME_137', dataToSend.LOGISTICS3_GENERATED_NOTE_NAME_137);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_core_test?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_core_test_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_CORE_TEST`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LNG', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LNG);
formData.append('FBLI_FA_TLOC_FD_BEAT', dataToSend.FBLI_FA_TLOC_FD_BEAT);
formData.append('LOGISTICS3_COUNTRYBOAT_CONDITION', dataToSend.LOGISTICS3_COUNTRYBOAT_CONDITION);
formData.append('LOGISTICS4_GFIREARMS_303RIFLE', dataToSend.LOGISTICS4_GFIREARMS_303RIFLE);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA);
formData.append('LOGISTICS4_OTHERS_WATER_TRA', dataToSend.LOGISTICS4_OTHERS_WATER_TRA);
formData.append('BO_INFO_BO_CELL', dataToSend.BO_INFO_BO_CELL);
formData.append('LOGISTICS3_TVESSEL_CONDITION', dataToSend.LOGISTICS3_TVESSEL_CONDITION);
formData.append('RO_INFO_RO_CELL', dataToSend.RO_INFO_RO_CELL);
formData.append('LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL);
formData.append('LOGISTICS3_TVESSEL_AVAIL', dataToSend.LOGISTICS3_TVESSEL_AVAIL);
formData.append('FBLI_FA_TLOC_FD_BEAT_TXT', dataToSend.FBLI_FA_TLOC_FD_BEAT_TXT);
formData.append('LOGISTICS3_SPEEDBOAT_CONDITION', dataToSend.LOGISTICS3_SPEEDBOAT_CONDITION);
formData.append('FBLI_FA_TLOC_FD_DIVISION', dataToSend.FBLI_FA_TLOC_FD_DIVISION);
formData.append('LAND_TRANSPORTS_BICYCLE_AVAIL', dataToSend.LAND_TRANSPORTS_BICYCLE_AVAIL);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GUSER_USER', dataToSend.GUSER_USER);
formData.append('RO_INFO_NAME_OF_RO', dataToSend.RO_INFO_NAME_OF_RO);
formData.append('FBLI_FA_TLOC_FD_BLOCK', dataToSend.FBLI_FA_TLOC_FD_BLOCK);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('LAND_TRANSPORTS_MOTORB_CONDITION', dataToSend.LAND_TRANSPORTS_MOTORB_CONDITION);
formData.append('FBLI_GENERATED_NOTE_NAME_18', dataToSend.FBLI_GENERATED_NOTE_NAME_18);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_GENERATED_NOTE_NAME_74);
formData.append('LOGISTICS4_CHINESERIFLE_CONDITION', dataToSend.LOGISTICS4_CHINESERIFLE_CONDITION);
formData.append('LOGISTICS3_SPEEDBOAT_AVAIL', dataToSend.LOGISTICS3_SPEEDBOAT_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA);
formData.append('LOGISTICS4_GENERATED_NOTE_NAME_152', dataToSend.LOGISTICS4_GENERATED_NOTE_NAME_152);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('LAND_TRANSPORTS_BICYCLE_CONDITION', dataToSend.LAND_TRANSPORTS_BICYCLE_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA);
formData.append('GUSER_GENERATED_NOTE_NAME_10', dataToSend.GUSER_GENERATED_NOTE_NAME_10);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA);
formData.append('BO_INFO_BO_NID', dataToSend.BO_INFO_BO_NID);
formData.append('LAND_TRANSPORTS_GBI_CYCLE', dataToSend.LAND_TRANSPORTS_GBI_CYCLE);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA);
formData.append('LOGISTICS3_GCOUNTRY_BOAT', dataToSend.LOGISTICS3_GCOUNTRY_BOAT);
formData.append('LOGISTICS4_GFIREARMS_SLR', dataToSend.LOGISTICS4_GFIREARMS_SLR);
formData.append('FBLI_FA_TLOC_FD_CIR', dataToSend.FBLI_FA_TLOC_FD_CIR);
formData.append('LAND_TRANSPORTS_MOTORB_AVAIL', dataToSend.LAND_TRANSPORTS_MOTORB_AVAIL);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION);
formData.append('RO_INFO_RO_JOINING_DATE', dataToSend.RO_INFO_RO_JOINING_DATE);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_CONDITION', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_CONDITION);
formData.append('LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA);
formData.append('RO_INFO_RO_RANK', dataToSend.RO_INFO_RO_RANK);
formData.append('LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL', dataToSend.LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA);
formData.append('BO_INFO_BO_JOINING_DATE', dataToSend.BO_INFO_BO_JOINING_DATE);
formData.append('GUSER_USER_CELL', dataToSend.GUSER_USER_CELL);
formData.append('RO_INFO_RO_NID', dataToSend.RO_INFO_RO_NID);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ALT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ALT);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_LAT', dataToSend.GUSER_TLOC_FD_BEAT_POINT_LAT);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA);
formData.append('LOGISTICS4_RIFLE303_CONDITION', dataToSend.LOGISTICS4_RIFLE303_CONDITION);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('BO_INFO_GENERATED_NOTE_NAME_106', dataToSend.BO_INFO_GENERATED_NOTE_NAME_106);
formData.append('GENERATED_NOTE_NAME_81', dataToSend.GENERATED_NOTE_NAME_81);
formData.append('RO_INFO_GENERATED_NOTE_NAME_97', dataToSend.RO_INFO_GENERATED_NOTE_NAME_97);
formData.append('FBLI_FA_GENERATED_NOTE_NAME_21', dataToSend.FBLI_FA_GENERATED_NOTE_NAME_21);
formData.append('LAND_TRANSPORTS_GENERATED_NOTE_NAME_125', dataToSend.LAND_TRANSPORTS_GENERATED_NOTE_NAME_125);
formData.append('GUSER_BEAT_ADDRESS', dataToSend.GUSER_BEAT_ADDRESS);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA);
formData.append('BO_INFO_BO_JOINING_DATE_RAW', dataToSend.BO_INFO_BO_JOINING_DATE_RAW);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA);
formData.append('GUSER_TLOC_FD_BEAT_POINT_ACC', dataToSend.GUSER_TLOC_FD_BEAT_POINT_ACC);
formData.append('LOGISTICS3_COUNTRYBOAT_AVAIL', dataToSend.LOGISTICS3_COUNTRYBOAT_AVAIL);
formData.append('FBLI_CA_TLOC_AD_DISTRICT', dataToSend.FBLI_CA_TLOC_AD_DISTRICT);
formData.append('BO_INFO_NAME_OF_BO', dataToSend.BO_INFO_NAME_OF_BO);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_GENERATED_NOTE_NAME_53);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA);
formData.append('LOGISTICS3_OTHERS_WATER_TRA', dataToSend.LOGISTICS3_OTHERS_WATER_TRA);
formData.append('FBLI_TLOC_ECOZONE', dataToSend.FBLI_TLOC_ECOZONE);
formData.append('BO_INFO_BO_RANK', dataToSend.BO_INFO_BO_RANK);
formData.append('LOGISTICS4_SLR_CONDITION', dataToSend.LOGISTICS4_SLR_CONDITION);
formData.append('END', dataToSend.END);
formData.append('FBLI_FA_TLOC_FD_RANGE', dataToSend.FBLI_FA_TLOC_FD_RANGE);
formData.append('RO_INFO_RO_JOINING_DATE_RAW', dataToSend.RO_INFO_RO_JOINING_DATE_RAW);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('LOGISTICS3_TRAWLER', dataToSend.LOGISTICS3_TRAWLER);
formData.append('LOGISTICS4_GFIREARMS_SHORTGUN', dataToSend.LOGISTICS4_GFIREARMS_SHORTGUN);
formData.append('LOGISTICS4_SHORTGUN_CONDITION', dataToSend.LOGISTICS4_SHORTGUN_CONDITION);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS', dataToSend.LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS);
formData.append('BO_INFO_BO_MAIL', dataToSend.BO_INFO_BO_MAIL);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL);
formData.append('FBLI_CA_GENERATED_NOTE_NAME_33', dataToSend.FBLI_CA_GENERATED_NOTE_NAME_33);
formData.append('FBLI_CA_TLOC_AD_DIVISION', dataToSend.FBLI_CA_TLOC_AD_DIVISION);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_GENERATED_NOTE_NAME_65);
formData.append('LOGISTICS4_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS4_OTHERS_WATER_TRA_AVAIL);
formData.append('LOGISTICS3_GSPEED_BOAT', dataToSend.LOGISTICS3_GSPEED_BOAT);
formData.append('LOGISTICS4_TFIREARMS_303RIFLE_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_303RIFLE_AVAIL);
formData.append('LOGISTICS4_GFIREARMS_CHINESERIFLE', dataToSend.LOGISTICS4_GFIREARMS_CHINESERIFLE);
formData.append('TODAY', dataToSend.TODAY);
formData.append('FBLI_FA_TLOC_FD_CHAR', dataToSend.FBLI_FA_TLOC_FD_CHAR);
formData.append('LAND_TRANSPORTS_GMOTORBIKE', dataToSend.LAND_TRANSPORTS_GMOTORBIKE);
formData.append('LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA', dataToSend.LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA);
formData.append('LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA', dataToSend.LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA);
formData.append('FBLI_FA_TLOC_ENTER_RANGE', dataToSend.FBLI_FA_TLOC_ENTER_RANGE);
formData.append('LAND_STATISTICS_AREA_SUM', dataToSend.LAND_STATISTICS_AREA_SUM);
formData.append('RO_INFO_RO_MAIL', dataToSend.RO_INFO_RO_MAIL);
formData.append('GENERATED_NOTE_NAME_123', dataToSend.GENERATED_NOTE_NAME_123);
formData.append('START', dataToSend.START);
formData.append('FBLI_CA_UNION', dataToSend.FBLI_CA_UNION);
formData.append('FBLI_FA_TLOC_ENTER_DIV', dataToSend.FBLI_FA_TLOC_ENTER_DIV);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('GENERATED_NOTE_NAME_94', dataToSend.GENERATED_NOTE_NAME_94);
formData.append('LOGISTICS3_OTHERS_WATER_TRA_AVAIL', dataToSend.LOGISTICS3_OTHERS_WATER_TRA_AVAIL);
formData.append('GENERATED_NOTE_NAME_95', dataToSend.GENERATED_NOTE_NAME_95);
formData.append('LOGISTICS4_TFIREARMS_SLR_AVAIL', dataToSend.LOGISTICS4_TFIREARMS_SLR_AVAIL);
formData.append('LOGISTICS3_GENERATED_NOTE_NAME_137', dataToSend.LOGISTICS3_GENERATED_NOTE_NAME_137);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_core_test?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_fbli_m_sh1_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_FBLI_M_SH1 WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('MOUZA1', dataToSend.MOUZA1);
formData.append('SURVEY_TYPES', dataToSend.SURVEY_TYPES);
formData.append('OTHERS_S_TYPES', dataToSend.OTHERS_S_TYPES);
formData.append('SHEET1', dataToSend.SHEET1);
formData.append('GENERATED_NOTE_NAME_40', dataToSend.GENERATED_NOTE_NAME_40);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_fbli_m_sh1?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_fbli_m_sh1_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_FBLI_M_SH1`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('MOUZA1', dataToSend.MOUZA1);
formData.append('SURVEY_TYPES', dataToSend.SURVEY_TYPES);
formData.append('OTHERS_S_TYPES', dataToSend.OTHERS_S_TYPES);
formData.append('SHEET1', dataToSend.SHEET1);
formData.append('GENERATED_NOTE_NAME_40', dataToSend.GENERATED_NOTE_NAME_40);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_fbli_m_sh1?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_stakeholder_engagement_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_STAKEHOLDER_ENGAGEMENT WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('OCCUPATION_COM', dataToSend.OCCUPATION_COM);
formData.append('OCCUPATION_OTHER', dataToSend.OCCUPATION_OTHER);
formData.append('FD_SUPPORTS_COMMUNITY_1', dataToSend.FD_SUPPORTS_COMMUNITY_1);
formData.append('GENERATED_NOTE_NAME_62', dataToSend.GENERATED_NOTE_NAME_62);
formData.append('COMMUNITY_SUPPORTS_FOREST_1', dataToSend.COMMUNITY_SUPPORTS_FOREST_1);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_stakeholder_engagement?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_stakeholder_engagement_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_STAKEHOLDER_ENGAGEMENT`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('OCCUPATION_COM', dataToSend.OCCUPATION_COM);
formData.append('OCCUPATION_OTHER', dataToSend.OCCUPATION_OTHER);
formData.append('FD_SUPPORTS_COMMUNITY_1', dataToSend.FD_SUPPORTS_COMMUNITY_1);
formData.append('GENERATED_NOTE_NAME_62', dataToSend.GENERATED_NOTE_NAME_62);
formData.append('COMMUNITY_SUPPORTS_FOREST_1', dataToSend.COMMUNITY_SUPPORTS_FOREST_1);

          }
		  const response = await fetch(
			`${baseApi}/com202021_stakeholder_engagement?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_e_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_e_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_e_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_e_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_core_audit_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_CORE_AUDIT WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('id', dataToSend.id);
formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173);
formData.append('REG_AVG_SEEDLING_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_ALL_PLOTS);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_1', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_1);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_2', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_2);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174);
formData.append('LOCATION_DATA_CA_TLOC_AD_DISTRICT', dataToSend.LOCATION_DATA_CA_TLOC_AD_DISTRICT);
formData.append('MAGROVE_PLANT_WIND_DIR', dataToSend.MAGROVE_PLANT_WIND_DIR);
formData.append('GSITE_HISTORY', dataToSend.GSITE_HISTORY);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_20', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_20);
formData.append('GTRTS_PLANTING_PLANTING_YEAR', dataToSend.GTRTS_PLANTING_PLANTING_YEAR);
formData.append('INTERVENTION_DETAILS_PATCHES_PLANT', dataToSend.INTERVENTION_DETAILS_PATCHES_PLANT);
formData.append('INTERVENTION_DETAILS_SEEDING_PLANT', dataToSend.INTERVENTION_DETAILS_SEEDING_PLANT);
formData.append('PLANTING_PLAN_GPLANTING_SPACING', dataToSend.PLANTING_PLAN_GPLANTING_SPACING);
formData.append('MAGROVE_PLANT_MAN_AFF_CLAY_LAYER', dataToSend.MAGROVE_PLANT_MAN_AFF_CLAY_LAYER);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT);
formData.append('MAGROVE_PLANT_CRABS_HOLE', dataToSend.MAGROVE_PLANT_CRABS_HOLE);
formData.append('REG_AVG_SEEDLING_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_PER_HA_ALL_PLOTS);
formData.append('LOCATION_DATA_CA_UNION', dataToSend.LOCATION_DATA_CA_UNION);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GTRTS_PLANTING_PLANTING_YEAR_RAW', dataToSend.GTRTS_PLANTING_PLANTING_YEAR_RAW);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('PLANTING_PLAN_GENERATED_NOTE_NAME_151', dataToSend.PLANTING_PLAN_GENERATED_NOTE_NAME_151);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_YEAR', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_YEAR);
formData.append('NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179', dataToSend.NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_TYPE', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_TYPE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT);
formData.append('LOCATION_DATA_ECOZONE', dataToSend.LOCATION_DATA_ECOZONE);
formData.append('GTRTS_PLANTATION_SITE_YEAR', dataToSend.GTRTS_PLANTATION_SITE_YEAR);
formData.append('GUSER_TUSER_CELL', dataToSend.GUSER_TUSER_CELL);
formData.append('REG_AVG_TREES_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_TREES_PER_HA_ALL_PLOTS);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT);
formData.append('GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221', dataToSend.GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221);
formData.append('PLANTING_PLAN_SEEDLINGS_PER_HA', dataToSend.PLANTING_PLAN_SEEDLINGS_PER_HA);
formData.append('GTRTS_COMPOST_COMPOST_YEAR_RAW', dataToSend.GTRTS_COMPOST_COMPOST_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_NURSERY_LOCATION', dataToSend.NURSERY_NURSERY_SITE_NURSERY_LOCATION);
formData.append('GSITE_LAND_COV_DESC', dataToSend.GSITE_LAND_COV_DESC);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_GENERATED_NOTE_NAME_13', dataToSend.GUSER_GENERATED_NOTE_NAME_13);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR);
formData.append('GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED', dataToSend.GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND);
formData.append('MAGROVE_PLANT_MAN_AFF_LEVEL_INUND', dataToSend.MAGROVE_PLANT_MAN_AFF_LEVEL_INUND);
formData.append('ALLPATCHES', dataToSend.ALLPATCHES);
formData.append('GENERATED_NOTE_NAME_63', dataToSend.GENERATED_NOTE_NAME_63);
formData.append('GUSER_TUSER_EMAIL', dataToSend.GUSER_TUSER_EMAIL);
formData.append('CHECKED_BY', dataToSend.CHECKED_BY);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CIR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190);
formData.append('LOCATION_DATA_TLOCATION', dataToSend.LOCATION_DATA_TLOCATION);
formData.append('MAGROVE_PLANT_FACING_ISLAND', dataToSend.MAGROVE_PLANT_FACING_ISLAND);
formData.append('GUSER_TUSER', dataToSend.GUSER_TUSER);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME);
formData.append('LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23', dataToSend.LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC);
formData.append('GTRTS_PLANTATION_SITE_YEAR_RAW', dataToSend.GTRTS_PLANTATION_SITE_YEAR_RAW);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_115', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_115);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_114', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_114);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR);
formData.append('GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262', dataToSend.GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_119', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_119);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_118', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_118);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_117', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_117);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_116', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_116);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK);
formData.append('GTRTS_COMPOST_GENERATED_NOTE_NAME_247', dataToSend.GTRTS_COMPOST_GENERATED_NOTE_NAME_247);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION);
formData.append('GTRTS_COMPOST_COMPOST_YEAR', dataToSend.GTRTS_COMPOST_COMPOST_YEAR);
formData.append('GTRTS_PLANTING_GENERATED_NOTE_NAME_231', dataToSend.GTRTS_PLANTING_GENERATED_NOTE_NAME_231);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('CHECKED', dataToSend.CHECKED);
formData.append('GSITE_HIST_OTHER', dataToSend.GSITE_HIST_OTHER);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137);
formData.append('INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122', dataToSend.INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133);
formData.append('PLANTING_PLAN_TXT_BUILD1', dataToSend.PLANTING_PLAN_TXT_BUILD1);
formData.append('PLANTING_PLAN_TXT_BUILD2', dataToSend.PLANTING_PLAN_TXT_BUILD2);
formData.append('GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252', dataToSend.GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS);
formData.append('PLANTING_PLAN_BPLANTING', dataToSend.PLANTING_PLAN_BPLANTING);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC);
formData.append('LOCATION_DATA_CA_GENERATED_NOTE_NAME_36', dataToSend.LOCATION_DATA_CA_GENERATED_NOTE_NAME_36);
formData.append('INTERVENTION_DETAILS_LLOC_PLANT_AREA', dataToSend.INTERVENTION_DETAILS_LLOC_PLANT_AREA);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE);
formData.append('REG_PLOT_NO', dataToSend.REG_PLOT_NO);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4);
formData.append('END', dataToSend.END);
formData.append('PLANTING_PLAN_MAX_SEEDLINGS', dataToSend.PLANTING_PLAN_MAX_SEEDLINGS);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('GTRTS_PLANTATION_GENERATED_NOTE_NAME_226', dataToSend.GTRTS_PLANTATION_GENERATED_NOTE_NAME_226);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_OTHERS', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_OTHERS);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT);
formData.append('MAGROVE_PLANT_FACING_DIR', dataToSend.MAGROVE_PLANT_FACING_DIR);
formData.append('NURSERY_NURSERY_SITE_TPOLYTYPE_NUR', dataToSend.NURSERY_NURSERY_SITE_TPOLYTYPE_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT);
formData.append('MAGROVE_PLANT_MAN_AFF_PIONEERS_SP', dataToSend.MAGROVE_PLANT_MAN_AFF_PIONEERS_SP);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_CA_TLOC_AD_DIVISION', dataToSend.LOCATION_DATA_CA_TLOC_AD_DIVISION);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_CA_VILLAGE', dataToSend.LOCATION_DATA_CA_VILLAGE);
formData.append('MAGROVE_PLANT_WAVE_DIR', dataToSend.MAGROVE_PLANT_WAVE_DIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199);
formData.append('GSITE_GENERATED_NOTE_NAME_72', dataToSend.GSITE_GENERATED_NOTE_NAME_72);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE);
formData.append('START', dataToSend.START);
formData.append('REG_AVG_TREES_ALL_PLOTS', dataToSend.REG_AVG_TREES_ALL_PLOTS);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('APPROVED', dataToSend.APPROVED);
formData.append('MAGROVE_PLANT_GENERATED_NOTE_NAME_131', dataToSend.MAGROVE_PLANT_GENERATED_NOTE_NAME_131);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);
formData.append('UserName', dataToSend.UserName);
formData.append('AdditionTime', dataToSend.AdditionTime);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_core_audit?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_core_audit_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_CORE_AUDIT`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('id', dataToSend.id);
formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173);
formData.append('REG_AVG_SEEDLING_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_ALL_PLOTS);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_1', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_1);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_2', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_2);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174);
formData.append('LOCATION_DATA_CA_TLOC_AD_DISTRICT', dataToSend.LOCATION_DATA_CA_TLOC_AD_DISTRICT);
formData.append('MAGROVE_PLANT_WIND_DIR', dataToSend.MAGROVE_PLANT_WIND_DIR);
formData.append('GSITE_HISTORY', dataToSend.GSITE_HISTORY);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_20', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_20);
formData.append('GTRTS_PLANTING_PLANTING_YEAR', dataToSend.GTRTS_PLANTING_PLANTING_YEAR);
formData.append('INTERVENTION_DETAILS_PATCHES_PLANT', dataToSend.INTERVENTION_DETAILS_PATCHES_PLANT);
formData.append('INTERVENTION_DETAILS_SEEDING_PLANT', dataToSend.INTERVENTION_DETAILS_SEEDING_PLANT);
formData.append('PLANTING_PLAN_GPLANTING_SPACING', dataToSend.PLANTING_PLAN_GPLANTING_SPACING);
formData.append('MAGROVE_PLANT_MAN_AFF_CLAY_LAYER', dataToSend.MAGROVE_PLANT_MAN_AFF_CLAY_LAYER);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT);
formData.append('MAGROVE_PLANT_CRABS_HOLE', dataToSend.MAGROVE_PLANT_CRABS_HOLE);
formData.append('REG_AVG_SEEDLING_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_PER_HA_ALL_PLOTS);
formData.append('LOCATION_DATA_CA_UNION', dataToSend.LOCATION_DATA_CA_UNION);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GTRTS_PLANTING_PLANTING_YEAR_RAW', dataToSend.GTRTS_PLANTING_PLANTING_YEAR_RAW);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('PLANTING_PLAN_GENERATED_NOTE_NAME_151', dataToSend.PLANTING_PLAN_GENERATED_NOTE_NAME_151);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_YEAR', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_YEAR);
formData.append('NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179', dataToSend.NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_TYPE', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_TYPE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT);
formData.append('LOCATION_DATA_ECOZONE', dataToSend.LOCATION_DATA_ECOZONE);
formData.append('GTRTS_PLANTATION_SITE_YEAR', dataToSend.GTRTS_PLANTATION_SITE_YEAR);
formData.append('GUSER_TUSER_CELL', dataToSend.GUSER_TUSER_CELL);
formData.append('REG_AVG_TREES_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_TREES_PER_HA_ALL_PLOTS);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT);
formData.append('GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221', dataToSend.GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221);
formData.append('PLANTING_PLAN_SEEDLINGS_PER_HA', dataToSend.PLANTING_PLAN_SEEDLINGS_PER_HA);
formData.append('GTRTS_COMPOST_COMPOST_YEAR_RAW', dataToSend.GTRTS_COMPOST_COMPOST_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_NURSERY_LOCATION', dataToSend.NURSERY_NURSERY_SITE_NURSERY_LOCATION);
formData.append('GSITE_LAND_COV_DESC', dataToSend.GSITE_LAND_COV_DESC);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_GENERATED_NOTE_NAME_13', dataToSend.GUSER_GENERATED_NOTE_NAME_13);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR);
formData.append('GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED', dataToSend.GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND);
formData.append('MAGROVE_PLANT_MAN_AFF_LEVEL_INUND', dataToSend.MAGROVE_PLANT_MAN_AFF_LEVEL_INUND);
formData.append('ALLPATCHES', dataToSend.ALLPATCHES);
formData.append('GENERATED_NOTE_NAME_63', dataToSend.GENERATED_NOTE_NAME_63);
formData.append('GUSER_TUSER_EMAIL', dataToSend.GUSER_TUSER_EMAIL);
formData.append('CHECKED_BY', dataToSend.CHECKED_BY);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CIR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190);
formData.append('LOCATION_DATA_TLOCATION', dataToSend.LOCATION_DATA_TLOCATION);
formData.append('MAGROVE_PLANT_FACING_ISLAND', dataToSend.MAGROVE_PLANT_FACING_ISLAND);
formData.append('GUSER_TUSER', dataToSend.GUSER_TUSER);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME);
formData.append('LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23', dataToSend.LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC);
formData.append('GTRTS_PLANTATION_SITE_YEAR_RAW', dataToSend.GTRTS_PLANTATION_SITE_YEAR_RAW);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_115', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_115);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_114', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_114);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR);
formData.append('GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262', dataToSend.GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_119', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_119);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_118', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_118);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_117', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_117);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_116', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_116);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK);
formData.append('GTRTS_COMPOST_GENERATED_NOTE_NAME_247', dataToSend.GTRTS_COMPOST_GENERATED_NOTE_NAME_247);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION);
formData.append('GTRTS_COMPOST_COMPOST_YEAR', dataToSend.GTRTS_COMPOST_COMPOST_YEAR);
formData.append('GTRTS_PLANTING_GENERATED_NOTE_NAME_231', dataToSend.GTRTS_PLANTING_GENERATED_NOTE_NAME_231);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('CHECKED', dataToSend.CHECKED);
formData.append('GSITE_HIST_OTHER', dataToSend.GSITE_HIST_OTHER);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137);
formData.append('INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122', dataToSend.INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133);
formData.append('PLANTING_PLAN_TXT_BUILD1', dataToSend.PLANTING_PLAN_TXT_BUILD1);
formData.append('PLANTING_PLAN_TXT_BUILD2', dataToSend.PLANTING_PLAN_TXT_BUILD2);
formData.append('GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252', dataToSend.GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS);
formData.append('PLANTING_PLAN_BPLANTING', dataToSend.PLANTING_PLAN_BPLANTING);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC);
formData.append('LOCATION_DATA_CA_GENERATED_NOTE_NAME_36', dataToSend.LOCATION_DATA_CA_GENERATED_NOTE_NAME_36);
formData.append('INTERVENTION_DETAILS_LLOC_PLANT_AREA', dataToSend.INTERVENTION_DETAILS_LLOC_PLANT_AREA);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE);
formData.append('REG_PLOT_NO', dataToSend.REG_PLOT_NO);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4);
formData.append('END', dataToSend.END);
formData.append('PLANTING_PLAN_MAX_SEEDLINGS', dataToSend.PLANTING_PLAN_MAX_SEEDLINGS);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('GTRTS_PLANTATION_GENERATED_NOTE_NAME_226', dataToSend.GTRTS_PLANTATION_GENERATED_NOTE_NAME_226);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_OTHERS', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_OTHERS);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT);
formData.append('MAGROVE_PLANT_FACING_DIR', dataToSend.MAGROVE_PLANT_FACING_DIR);
formData.append('NURSERY_NURSERY_SITE_TPOLYTYPE_NUR', dataToSend.NURSERY_NURSERY_SITE_TPOLYTYPE_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT);
formData.append('MAGROVE_PLANT_MAN_AFF_PIONEERS_SP', dataToSend.MAGROVE_PLANT_MAN_AFF_PIONEERS_SP);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_CA_TLOC_AD_DIVISION', dataToSend.LOCATION_DATA_CA_TLOC_AD_DIVISION);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_CA_VILLAGE', dataToSend.LOCATION_DATA_CA_VILLAGE);
formData.append('MAGROVE_PLANT_WAVE_DIR', dataToSend.MAGROVE_PLANT_WAVE_DIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199);
formData.append('GSITE_GENERATED_NOTE_NAME_72', dataToSend.GSITE_GENERATED_NOTE_NAME_72);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE);
formData.append('START', dataToSend.START);
formData.append('REG_AVG_TREES_ALL_PLOTS', dataToSend.REG_AVG_TREES_ALL_PLOTS);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('APPROVED', dataToSend.APPROVED);
formData.append('MAGROVE_PLANT_GENERATED_NOTE_NAME_131', dataToSend.MAGROVE_PLANT_GENERATED_NOTE_NAME_131);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);
formData.append('UserName', dataToSend.UserName);
formData.append('AdditionTime', dataToSend.AdditionTime);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_core_audit?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_core_test_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_CORE_TEST WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173);
formData.append('REG_AVG_SEEDLING_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_ALL_PLOTS);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_1', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_1);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_2', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_2);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174);
formData.append('LOCATION_DATA_CA_TLOC_AD_DISTRICT', dataToSend.LOCATION_DATA_CA_TLOC_AD_DISTRICT);
formData.append('MAGROVE_PLANT_WIND_DIR', dataToSend.MAGROVE_PLANT_WIND_DIR);
formData.append('GSITE_HISTORY', dataToSend.GSITE_HISTORY);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_20', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_20);
formData.append('GTRTS_PLANTING_PLANTING_YEAR', dataToSend.GTRTS_PLANTING_PLANTING_YEAR);
formData.append('INTERVENTION_DETAILS_PATCHES_PLANT', dataToSend.INTERVENTION_DETAILS_PATCHES_PLANT);
formData.append('INTERVENTION_DETAILS_SEEDING_PLANT', dataToSend.INTERVENTION_DETAILS_SEEDING_PLANT);
formData.append('PLANTING_PLAN_GPLANTING_SPACING', dataToSend.PLANTING_PLAN_GPLANTING_SPACING);
formData.append('MAGROVE_PLANT_MAN_AFF_CLAY_LAYER', dataToSend.MAGROVE_PLANT_MAN_AFF_CLAY_LAYER);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT);
formData.append('MAGROVE_PLANT_CRABS_HOLE', dataToSend.MAGROVE_PLANT_CRABS_HOLE);
formData.append('REG_AVG_SEEDLING_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_PER_HA_ALL_PLOTS);
formData.append('LOCATION_DATA_CA_UNION', dataToSend.LOCATION_DATA_CA_UNION);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GTRTS_PLANTING_PLANTING_YEAR_RAW', dataToSend.GTRTS_PLANTING_PLANTING_YEAR_RAW);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('PLANTING_PLAN_GENERATED_NOTE_NAME_151', dataToSend.PLANTING_PLAN_GENERATED_NOTE_NAME_151);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_YEAR', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_YEAR);
formData.append('NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179', dataToSend.NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_TYPE', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_TYPE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT);
formData.append('LOCATION_DATA_ECOZONE', dataToSend.LOCATION_DATA_ECOZONE);
formData.append('GTRTS_PLANTATION_SITE_YEAR', dataToSend.GTRTS_PLANTATION_SITE_YEAR);
formData.append('GUSER_TUSER_CELL', dataToSend.GUSER_TUSER_CELL);
formData.append('REG_AVG_TREES_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_TREES_PER_HA_ALL_PLOTS);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT);
formData.append('GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221', dataToSend.GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221);
formData.append('PLANTING_PLAN_SEEDLINGS_PER_HA', dataToSend.PLANTING_PLAN_SEEDLINGS_PER_HA);
formData.append('GTRTS_COMPOST_COMPOST_YEAR_RAW', dataToSend.GTRTS_COMPOST_COMPOST_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_NURSERY_LOCATION', dataToSend.NURSERY_NURSERY_SITE_NURSERY_LOCATION);
formData.append('GSITE_LAND_COV_DESC', dataToSend.GSITE_LAND_COV_DESC);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_GENERATED_NOTE_NAME_13', dataToSend.GUSER_GENERATED_NOTE_NAME_13);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR);
formData.append('GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED', dataToSend.GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND);
formData.append('MAGROVE_PLANT_MAN_AFF_LEVEL_INUND', dataToSend.MAGROVE_PLANT_MAN_AFF_LEVEL_INUND);
formData.append('ALLPATCHES', dataToSend.ALLPATCHES);
formData.append('GENERATED_NOTE_NAME_63', dataToSend.GENERATED_NOTE_NAME_63);
formData.append('GUSER_TUSER_EMAIL', dataToSend.GUSER_TUSER_EMAIL);
formData.append('CHECKED_BY', dataToSend.CHECKED_BY);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CIR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190);
formData.append('LOCATION_DATA_TLOCATION', dataToSend.LOCATION_DATA_TLOCATION);
formData.append('MAGROVE_PLANT_FACING_ISLAND', dataToSend.MAGROVE_PLANT_FACING_ISLAND);
formData.append('GUSER_TUSER', dataToSend.GUSER_TUSER);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME);
formData.append('LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23', dataToSend.LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC);
formData.append('GTRTS_PLANTATION_SITE_YEAR_RAW', dataToSend.GTRTS_PLANTATION_SITE_YEAR_RAW);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_115', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_115);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_114', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_114);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR);
formData.append('GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262', dataToSend.GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_119', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_119);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_118', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_118);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_117', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_117);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_116', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_116);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK);
formData.append('GTRTS_COMPOST_GENERATED_NOTE_NAME_247', dataToSend.GTRTS_COMPOST_GENERATED_NOTE_NAME_247);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION);
formData.append('GTRTS_COMPOST_COMPOST_YEAR', dataToSend.GTRTS_COMPOST_COMPOST_YEAR);
formData.append('GTRTS_PLANTING_GENERATED_NOTE_NAME_231', dataToSend.GTRTS_PLANTING_GENERATED_NOTE_NAME_231);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('CHECKED', dataToSend.CHECKED);
formData.append('GSITE_HIST_OTHER', dataToSend.GSITE_HIST_OTHER);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137);
formData.append('INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122', dataToSend.INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133);
formData.append('PLANTING_PLAN_TXT_BUILD1', dataToSend.PLANTING_PLAN_TXT_BUILD1);
formData.append('PLANTING_PLAN_TXT_BUILD2', dataToSend.PLANTING_PLAN_TXT_BUILD2);
formData.append('GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252', dataToSend.GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS);
formData.append('PLANTING_PLAN_BPLANTING', dataToSend.PLANTING_PLAN_BPLANTING);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC);
formData.append('LOCATION_DATA_CA_GENERATED_NOTE_NAME_36', dataToSend.LOCATION_DATA_CA_GENERATED_NOTE_NAME_36);
formData.append('INTERVENTION_DETAILS_LLOC_PLANT_AREA', dataToSend.INTERVENTION_DETAILS_LLOC_PLANT_AREA);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE);
formData.append('REG_PLOT_NO', dataToSend.REG_PLOT_NO);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4);
formData.append('END', dataToSend.END);
formData.append('PLANTING_PLAN_MAX_SEEDLINGS', dataToSend.PLANTING_PLAN_MAX_SEEDLINGS);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('GTRTS_PLANTATION_GENERATED_NOTE_NAME_226', dataToSend.GTRTS_PLANTATION_GENERATED_NOTE_NAME_226);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_OTHERS', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_OTHERS);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT);
formData.append('MAGROVE_PLANT_FACING_DIR', dataToSend.MAGROVE_PLANT_FACING_DIR);
formData.append('NURSERY_NURSERY_SITE_TPOLYTYPE_NUR', dataToSend.NURSERY_NURSERY_SITE_TPOLYTYPE_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT);
formData.append('MAGROVE_PLANT_MAN_AFF_PIONEERS_SP', dataToSend.MAGROVE_PLANT_MAN_AFF_PIONEERS_SP);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_CA_TLOC_AD_DIVISION', dataToSend.LOCATION_DATA_CA_TLOC_AD_DIVISION);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_CA_VILLAGE', dataToSend.LOCATION_DATA_CA_VILLAGE);
formData.append('MAGROVE_PLANT_WAVE_DIR', dataToSend.MAGROVE_PLANT_WAVE_DIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199);
formData.append('GSITE_GENERATED_NOTE_NAME_72', dataToSend.GSITE_GENERATED_NOTE_NAME_72);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE);
formData.append('START', dataToSend.START);
formData.append('REG_AVG_TREES_ALL_PLOTS', dataToSend.REG_AVG_TREES_ALL_PLOTS);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('APPROVED', dataToSend.APPROVED);
formData.append('MAGROVE_PLANT_GENERATED_NOTE_NAME_131', dataToSend.MAGROVE_PLANT_GENERATED_NOTE_NAME_131);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_core_test?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_core_test_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_CORE_TEST`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_173);
formData.append('REG_AVG_SEEDLING_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_ALL_PLOTS);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_1', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_1);
formData.append('PLANTING_PLAN_GRPSTOCKS_NTE_2', dataToSend.PLANTING_PLAN_GRPSTOCKS_NTE_2);
formData.append('PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174', dataToSend.PLANTING_PLAN_SEEDLING_NUM_GENERATED_NOTE_NAME_174);
formData.append('LOCATION_DATA_CA_TLOC_AD_DISTRICT', dataToSend.LOCATION_DATA_CA_TLOC_AD_DISTRICT);
formData.append('MAGROVE_PLANT_WIND_DIR', dataToSend.MAGROVE_PLANT_WIND_DIR);
formData.append('GSITE_HISTORY', dataToSend.GSITE_HISTORY);
formData.append('LOCATION_DATA_GENERATED_NOTE_NAME_20', dataToSend.LOCATION_DATA_GENERATED_NOTE_NAME_20);
formData.append('GTRTS_PLANTING_PLANTING_YEAR', dataToSend.GTRTS_PLANTING_PLANTING_YEAR);
formData.append('INTERVENTION_DETAILS_PATCHES_PLANT', dataToSend.INTERVENTION_DETAILS_PATCHES_PLANT);
formData.append('INTERVENTION_DETAILS_SEEDING_PLANT', dataToSend.INTERVENTION_DETAILS_SEEDING_PLANT);
formData.append('PLANTING_PLAN_GPLANTING_SPACING', dataToSend.PLANTING_PLAN_GPLANTING_SPACING);
formData.append('MAGROVE_PLANT_MAN_AFF_CLAY_LAYER', dataToSend.MAGROVE_PLANT_MAN_AFF_CLAY_LAYER);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE_TXT);
formData.append('MAGROVE_PLANT_CRABS_HOLE', dataToSend.MAGROVE_PLANT_CRABS_HOLE);
formData.append('REG_AVG_SEEDLING_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_PER_HA_ALL_PLOTS);
formData.append('LOCATION_DATA_CA_UNION', dataToSend.LOCATION_DATA_CA_UNION);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('GTRTS_PLANTING_PLANTING_YEAR_RAW', dataToSend.GTRTS_PLANTING_PLANTING_YEAR_RAW);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('PLANTING_PLAN_GENERATED_NOTE_NAME_151', dataToSend.PLANTING_PLAN_GENERATED_NOTE_NAME_151);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_YEAR', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_YEAR);
formData.append('NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179', dataToSend.NURSERY_NURSERY_SITE_GENERATED_NOTE_NAME_179);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_TYPE', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_TYPE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGHT);
formData.append('LOCATION_DATA_ECOZONE', dataToSend.LOCATION_DATA_ECOZONE);
formData.append('GTRTS_PLANTATION_SITE_YEAR', dataToSend.GTRTS_PLANTATION_SITE_YEAR);
formData.append('GUSER_TUSER_CELL', dataToSend.GUSER_TUSER_CELL);
formData.append('REG_AVG_TREES_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_TREES_PER_HA_ALL_PLOTS);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ALT);
formData.append('GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221', dataToSend.GTRTS_NUERSERY_RAISING_GENERATED_NOTE_NAME_221);
formData.append('PLANTING_PLAN_SEEDLINGS_PER_HA', dataToSend.PLANTING_PLAN_SEEDLINGS_PER_HA);
formData.append('GTRTS_COMPOST_COMPOST_YEAR_RAW', dataToSend.GTRTS_COMPOST_COMPOST_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_NURSERY_LOCATION', dataToSend.NURSERY_NURSERY_SITE_NURSERY_LOCATION);
formData.append('GSITE_LAND_COV_DESC', dataToSend.GSITE_LAND_COV_DESC);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('GUSER_GENERATED_NOTE_NAME_13', dataToSend.GUSER_GENERATED_NOTE_NAME_13);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_EAST_NUR);
formData.append('GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED', dataToSend.GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND);
formData.append('MAGROVE_PLANT_MAN_AFF_LEVEL_INUND', dataToSend.MAGROVE_PLANT_MAN_AFF_LEVEL_INUND);
formData.append('ALLPATCHES', dataToSend.ALLPATCHES);
formData.append('GENERATED_NOTE_NAME_63', dataToSend.GENERATED_NOTE_NAME_63);
formData.append('GUSER_TUSER_EMAIL', dataToSend.GUSER_TUSER_EMAIL);
formData.append('CHECKED_BY', dataToSend.CHECKED_BY);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CIR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_GENERATED_NOTE_NAME_190);
formData.append('LOCATION_DATA_TLOCATION', dataToSend.LOCATION_DATA_TLOCATION);
formData.append('MAGROVE_PLANT_FACING_ISLAND', dataToSend.MAGROVE_PLANT_FACING_ISLAND);
formData.append('GUSER_TUSER', dataToSend.GUSER_TUSER);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME);
formData.append('LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23', dataToSend.LOCATION_DATA_FOREST_AD_GENERATED_NOTE_NAME_23);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_ACC);
formData.append('GTRTS_PLANTATION_SITE_YEAR_RAW', dataToSend.GTRTS_PLANTATION_SITE_YEAR_RAW);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_115', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_115);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_114', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_114);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR);
formData.append('GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262', dataToSend.GTRTS_OTHER_TREATMENT_GENERATED_NOTE_NAME_262);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_119', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_119);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_118', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_118);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_117', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_117);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_116', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_116);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK);
formData.append('GTRTS_COMPOST_GENERATED_NOTE_NAME_247', dataToSend.GTRTS_COMPOST_GENERATED_NOTE_NAME_247);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION);
formData.append('GTRTS_COMPOST_COMPOST_YEAR', dataToSend.GTRTS_COMPOST_COMPOST_YEAR);
formData.append('GTRTS_PLANTING_GENERATED_NOTE_NAME_231', dataToSend.GTRTS_PLANTING_GENERATED_NOTE_NAME_231);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('CHECKED', dataToSend.CHECKED);
formData.append('GSITE_HIST_OTHER', dataToSend.GSITE_HIST_OTHER);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_137);
formData.append('INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122', dataToSend.INTERVENTION_DETAILS_GENERATED_NOTE_NAME_122);
formData.append('MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133', dataToSend.MAGROVE_PLANT_MAN_AFF_GENERATED_NOTE_NAME_133);
formData.append('PLANTING_PLAN_TXT_BUILD1', dataToSend.PLANTING_PLAN_TXT_BUILD1);
formData.append('PLANTING_PLAN_TXT_BUILD2', dataToSend.PLANTING_PLAN_TXT_BUILD2);
formData.append('GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252', dataToSend.GTRTS_CLIMBER_CUTTING_GENERATED_NOTE_NAME_252);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS);
formData.append('PLANTING_PLAN_BPLANTING', dataToSend.PLANTING_PLAN_BPLANTING);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC);
formData.append('LOCATION_DATA_CA_GENERATED_NOTE_NAME_36', dataToSend.LOCATION_DATA_CA_GENERATED_NOTE_NAME_36);
formData.append('INTERVENTION_DETAILS_LLOC_PLANT_AREA', dataToSend.INTERVENTION_DETAILS_LLOC_PLANT_AREA);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_GENERATED_NOTE_NAME_140);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE);
formData.append('REG_PLOT_NO', dataToSend.REG_PLOT_NO);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3);
formData.append('MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE', dataToSend.MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4);
formData.append('END', dataToSend.END);
formData.append('PLANTING_PLAN_MAX_SEEDLINGS', dataToSend.PLANTING_PLAN_MAX_SEEDLINGS);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('GTRTS_PLANTATION_GENERATED_NOTE_NAME_226', dataToSend.GTRTS_PLANTATION_GENERATED_NOTE_NAME_226);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE);
formData.append('NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212', dataToSend.NURSERY_OTHERS_INFO_CARETAKER_INFO_GENERATED_NOTE_NAME_212);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_OTHERS', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_OTHERS);
formData.append('NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG', dataToSend.NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG);
formData.append('NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR', dataToSend.NURSERY_NURSERY_SITE_GCOORDS_NUR_SITE_NORTH_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT);
formData.append('MAGROVE_PLANT_FACING_DIR', dataToSend.MAGROVE_PLANT_FACING_DIR);
formData.append('NURSERY_NURSERY_SITE_TPOLYTYPE_NUR', dataToSend.NURSERY_NURSERY_SITE_TPOLYTYPE_NUR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT);
formData.append('MAGROVE_PLANT_MAN_AFF_PIONEERS_SP', dataToSend.MAGROVE_PLANT_MAN_AFF_PIONEERS_SP);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_CA_TLOC_AD_DIVISION', dataToSend.LOCATION_DATA_CA_TLOC_AD_DIVISION);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV);
formData.append('LOCATION_DATA_CA_VILLAGE', dataToSend.LOCATION_DATA_CA_VILLAGE);
formData.append('MAGROVE_PLANT_WAVE_DIR', dataToSend.MAGROVE_PLANT_WAVE_DIR);
formData.append('NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199', dataToSend.NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_GENERATED_NOTE_NAME_199);
formData.append('GSITE_GENERATED_NOTE_NAME_72', dataToSend.GSITE_GENERATED_NOTE_NAME_72);
formData.append('NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE', dataToSend.NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE);
formData.append('START', dataToSend.START);
formData.append('REG_AVG_TREES_ALL_PLOTS', dataToSend.REG_AVG_TREES_ALL_PLOTS);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('APPROVED', dataToSend.APPROVED);
formData.append('MAGROVE_PLANT_GENERATED_NOTE_NAME_131', dataToSend.MAGROVE_PLANT_GENERATED_NOTE_NAME_131);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_core_test?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_xpic_beat_index_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_XPIC_BEAT_INDEX_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_xpic_beat_index_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_xpic_beat_index_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_XPIC_BEAT_INDEX_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_xpic_beat_index_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_core_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_CORE WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('REG_AVG_SEEDLING_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_ALL_PLOTS);
formData.append('GTRTS_COMMUNITY_PROTECTION_COMMUNITY_YEAR', dataToSend.GTRTS_COMMUNITY_PROTECTION_COMMUNITY_YEAR);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NAME_CAR', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NAME_CAR);
formData.append('PLANTING_PLAN_GPLANTING_BNURSERY', dataToSend.PLANTING_PLAN_GPLANTING_BNURSERY);
formData.append('LOCATION_DATA_CA_TLOC_AD_DISTRICT', dataToSend.LOCATION_DATA_CA_TLOC_AD_DISTRICT);
formData.append('GUSER_SURVEY_TYPE', dataToSend.GUSER_SURVEY_TYPE);
formData.append('GTRTS_LAYOUT_LAYOUT_YEAR_RAW', dataToSend.GTRTS_LAYOUT_LAYOUT_YEAR_RAW);
formData.append('GTRTS_PLANTING_PLANTING_YEAR', dataToSend.GTRTS_PLANTING_PLANTING_YEAR);
formData.append('MAN_AFF_CLAY_LAYER', dataToSend.MAN_AFF_CLAY_LAYER);
formData.append('GUSER_REASON_4_CHANGE', dataToSend.GUSER_REASON_4_CHANGE);
formData.append('GTRTS_COMPOSTS_PIT_COMPOSTS_PIT_YEAR_RAW', dataToSend.GTRTS_COMPOSTS_PIT_COMPOSTS_PIT_YEAR_RAW);
formData.append('PLANTING_PLAN_GPLANTING_SPACING', dataToSend.PLANTING_PLAN_GPLANTING_SPACING);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_LAT', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_LAT);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_107', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_107);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_106', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_106);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_105', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_105);
formData.append('INTERVENTION_DETAILS_TYPE_PLANT_TLOC_PLANT_OTHERS', dataToSend.INTERVENTION_DETAILS_TYPE_PLANT_TLOC_PLANT_OTHERS);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_NURSERY_ESTAB', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_NURSERY_ESTAB);
formData.append('REG_AVG_SEEDLING_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_PER_HA_ALL_PLOTS);
formData.append('LOCATION_DATA_CA_UNION', dataToSend.LOCATION_DATA_CA_UNION);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NUR_CAR_MO_NO', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NUR_CAR_MO_NO);
formData.append('GUSER_PREVIOUS_RECORD', dataToSend.GUSER_PREVIOUS_RECORD);
formData.append('GTRTS_PLANTING_PLANTING_YEAR_RAW', dataToSend.GTRTS_PLANTING_PLANTING_YEAR_RAW);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_NURS_NOTES', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_NURS_NOTES);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_YEAR', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_YEAR);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_TOTNURSEEDLINGS', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_TOTNURSEEDLINGS);
formData.append('GTRTS_PLANTATION_SITE_YEAR', dataToSend.GTRTS_PLANTATION_SITE_YEAR);
formData.append('GUSER_TUSER_CELL', dataToSend.GUSER_TUSER_CELL);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_ACC', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_ACC);
formData.append('PLANTING_PLAN_GPLANTING_SEEDLING_NUM_GENERATED_NOTE_NAME_152', dataToSend.PLANTING_PLAN_GPLANTING_SEEDLING_NUM_GENERATED_NOTE_NAME_152);
formData.append('PLANTING_PLAN_GPLANTING_SEEDLING_NUM_GENERATED_NOTE_NAME_151', dataToSend.PLANTING_PLAN_GPLANTING_SEEDLING_NUM_GENERATED_NOTE_NAME_151);
formData.append('MAN_AFF_WIND_DIR', dataToSend.MAN_AFF_WIND_DIR);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_SITE_EAST_NUR', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_SITE_EAST_NUR);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_NURSERY_ESTAB_RAW', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_NURSERY_ESTAB_RAW);
formData.append('GTRTS_COMPOST_COMPOST_YEAR_RAW', dataToSend.GTRTS_COMPOST_COMPOST_YEAR_RAW);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('MAN_AFF_WAVE_DIR', dataToSend.MAN_AFF_WAVE_DIR);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('PLANTING_PLAN_GPLANTING_MAX_SEEDLINGS', dataToSend.PLANTING_PLAN_GPLANTING_MAX_SEEDLINGS);
formData.append('GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED', dataToSend.GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED);
formData.append('GTRTS_COMPOSTS_PIT_COMPOSTS_PIT_YEAR', dataToSend.GTRTS_COMPOSTS_PIT_COMPOSTS_PIT_YEAR);
formData.append('ALLPATCHES', dataToSend.ALLPATCHES);
formData.append('GSITE_ECOLOGICAL_ATTRIBUTES_SF_PROG', dataToSend.GSITE_ECOLOGICAL_ATTRIBUTES_SF_PROG);
formData.append('CHECKED_BY', dataToSend.CHECKED_BY);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CIR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CIR);
formData.append('GENERATED_NOTE_NAME_62', dataToSend.GENERATED_NOTE_NAME_62);
formData.append('GSITE_ECOLOGICAL_ATTRIBUTES_HIST_OTHER', dataToSend.GSITE_ECOLOGICAL_ATTRIBUTES_HIST_OTHER);
formData.append('MAN_AFF_FACING_ISLAND', dataToSend.MAN_AFF_FACING_ISLAND);
formData.append('LOCATION_DATA_TLOCATION', dataToSend.LOCATION_DATA_TLOCATION);
formData.append('GUSER_TUSER', dataToSend.GUSER_TUSER);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_SEEDLING_SUM', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_SEEDLING_SUM);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW);
formData.append('INTERVENTION_DETAILS_TYPE_PLANT_PATCHES_PLANT', dataToSend.INTERVENTION_DETAILS_TYPE_PLANT_PATCHES_PLANT);
formData.append('INTERVENTION_DETAILS_TYPE_PLANT_TLOC_PLANT_TYPE', dataToSend.INTERVENTION_DETAILS_TYPE_PLANT_TLOC_PLANT_TYPE);
formData.append('GTRTS_PLANTATION_SITE_YEAR_RAW', dataToSend.GTRTS_PLANTATION_SITE_YEAR_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR);
formData.append('ECOZONE', dataToSend.ECOZONE);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_SITE_NORTH_NUR', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_SITE_NORTH_NUR);
formData.append('REGIN_NOTE_REGEN_NOTES', dataToSend.REGIN_NOTE_REGEN_NOTES);
formData.append('MAN_AFF_PIONEERS_SP', dataToSend.MAN_AFF_PIONEERS_SP);
formData.append('GTRTS_CLEANING_CUTTING_CUTTING_YEAR', dataToSend.GTRTS_CLEANING_CUTTING_CUTTING_YEAR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION);
formData.append('GTRTS_COMPOST_COMPOST_YEAR', dataToSend.GTRTS_COMPOST_COMPOST_YEAR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CAMP', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CAMP);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('CHECKED', dataToSend.CHECKED);
formData.append('GTRTS_CLEANING_CUTTING_CUTTING_YEAR_RAW', dataToSend.GTRTS_CLEANING_CUTTING_CUTTING_YEAR_RAW);
formData.append('GTRTS_PIT_DIGGING_DIGGING_YEAR', dataToSend.GTRTS_PIT_DIGGING_DIGGING_YEAR);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE);
formData.append('OVERALLNOTES', dataToSend.OVERALLNOTES);
formData.append('INTERVENTION_DETAILS_TYPE_PLANT_AREA_ACIVITY', dataToSend.INTERVENTION_DETAILS_TYPE_PLANT_AREA_ACIVITY);
formData.append('GTRTS_VACANCY_FILLING_FILLING_YEAR_RAW', dataToSend.GTRTS_VACANCY_FILLING_FILLING_YEAR_RAW);
formData.append('PLANTING_PLAN_BPLANTING', dataToSend.PLANTING_PLAN_BPLANTING);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_LNG', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_LNG);
formData.append('GTRTS_LAYOUT_LAYOUT_YEAR', dataToSend.GTRTS_LAYOUT_LAYOUT_YEAR);
formData.append('INTERVENTION_DETAILS_LLOC_PLANT_AREA', dataToSend.INTERVENTION_DETAILS_LLOC_PLANT_AREA);
formData.append('TINTERVENTION', dataToSend.TINTERVENTION);
formData.append('REG_PLOT_NO', dataToSend.REG_PLOT_NO);
formData.append('PLANTING_PLAN_GPLANTING_GRPSTOCKS_NTE_2', dataToSend.PLANTING_PLAN_GPLANTING_GRPSTOCKS_NTE_2);
formData.append('END', dataToSend.END);
formData.append('PLANTING_PLAN_GPLANTING_GRPSTOCKS_NTE_1', dataToSend.PLANTING_PLAN_GPLANTING_GRPSTOCKS_NTE_1);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_TPOLYTYPE_NUR', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_TPOLYTYPE_NUR);
formData.append('INTERVENTION_DETAILS_TYPE_PLANT_SEEDING_PLANT', dataToSend.INTERVENTION_DETAILS_TYPE_PLANT_SEEDING_PLANT);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('MAN_AFF_FACING_DIR', dataToSend.MAN_AFF_FACING_DIR);
formData.append('GSITE_ECOLOGICAL_ATTRIBUTES_LAND_COV_DESC', dataToSend.GSITE_ECOLOGICAL_ATTRIBUTES_LAND_COV_DESC);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE);
formData.append('GTRTS_VACANCY_FILLING_FILLING_YEAR', dataToSend.GTRTS_VACANCY_FILLING_FILLING_YEAR);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('PLANTING_PLAN_GPLANTING_SEEDLINGS_PER_HA', dataToSend.PLANTING_PLAN_GPLANTING_SEEDLINGS_PER_HA);
formData.append('GSITE_ECOLOGICAL_ATTRIBUTES_TLANDCOVERCLASS', dataToSend.GSITE_ECOLOGICAL_ATTRIBUTES_TLANDCOVERCLASS);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NUR_CAR_NID', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NUR_CAR_NID);
formData.append('PLANTING_PLAN_GPLANTING_TXT_BUILD2', dataToSend.PLANTING_PLAN_GPLANTING_TXT_BUILD2);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_ALT', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_ALT);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT);
formData.append('GSITE_ECOLOGICAL_ATTRIBUTES_HISTORY', dataToSend.GSITE_ECOLOGICAL_ATTRIBUTES_HISTORY);
formData.append('PLANTING_PLAN_GPLANTING_TXT_BUILD1', dataToSend.PLANTING_PLAN_GPLANTING_TXT_BUILD1);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_CA_TLOC_AD_DIVISION', dataToSend.LOCATION_DATA_CA_TLOC_AD_DIVISION);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV);
formData.append('PLANTING_PLAN_GPLANTING_DAREA_PLANTING', dataToSend.PLANTING_PLAN_GPLANTING_DAREA_PLANTING);
formData.append('GTRTS_COMMUNITY_PROTECTION_COMMUNITY_YEAR_RAW', dataToSend.GTRTS_COMMUNITY_PROTECTION_COMMUNITY_YEAR_RAW);
formData.append('START', dataToSend.START);
formData.append('GTRTS_PIT_DIGGING_DIGGING_YEAR_RAW', dataToSend.GTRTS_PIT_DIGGING_DIGGING_YEAR_RAW);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('APPROVED', dataToSend.APPROVED);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_core?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_core_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_CORE`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('REG_AVG_SEEDLING_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_ALL_PLOTS);
formData.append('GTRTS_COMMUNITY_PROTECTION_COMMUNITY_YEAR', dataToSend.GTRTS_COMMUNITY_PROTECTION_COMMUNITY_YEAR);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NAME_CAR', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NAME_CAR);
formData.append('PLANTING_PLAN_GPLANTING_BNURSERY', dataToSend.PLANTING_PLAN_GPLANTING_BNURSERY);
formData.append('LOCATION_DATA_CA_TLOC_AD_DISTRICT', dataToSend.LOCATION_DATA_CA_TLOC_AD_DISTRICT);
formData.append('GUSER_SURVEY_TYPE', dataToSend.GUSER_SURVEY_TYPE);
formData.append('GTRTS_LAYOUT_LAYOUT_YEAR_RAW', dataToSend.GTRTS_LAYOUT_LAYOUT_YEAR_RAW);
formData.append('GTRTS_PLANTING_PLANTING_YEAR', dataToSend.GTRTS_PLANTING_PLANTING_YEAR);
formData.append('MAN_AFF_CLAY_LAYER', dataToSend.MAN_AFF_CLAY_LAYER);
formData.append('GUSER_REASON_4_CHANGE', dataToSend.GUSER_REASON_4_CHANGE);
formData.append('GTRTS_COMPOSTS_PIT_COMPOSTS_PIT_YEAR_RAW', dataToSend.GTRTS_COMPOSTS_PIT_COMPOSTS_PIT_YEAR_RAW);
formData.append('PLANTING_PLAN_GPLANTING_SPACING', dataToSend.PLANTING_PLAN_GPLANTING_SPACING);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_LAT', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_LAT);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_107', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_107);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_106', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_106);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_105', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_105);
formData.append('INTERVENTION_DETAILS_TYPE_PLANT_TLOC_PLANT_OTHERS', dataToSend.INTERVENTION_DETAILS_TYPE_PLANT_TLOC_PLANT_OTHERS);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_NURSERY_ESTAB', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_NURSERY_ESTAB);
formData.append('REG_AVG_SEEDLING_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_PER_HA_ALL_PLOTS);
formData.append('LOCATION_DATA_CA_UNION', dataToSend.LOCATION_DATA_CA_UNION);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NUR_CAR_MO_NO', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NUR_CAR_MO_NO);
formData.append('GUSER_PREVIOUS_RECORD', dataToSend.GUSER_PREVIOUS_RECORD);
formData.append('GTRTS_PLANTING_PLANTING_YEAR_RAW', dataToSend.GTRTS_PLANTING_PLANTING_YEAR_RAW);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_NURS_NOTES', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_NURS_NOTES);
formData.append('GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW', dataToSend.GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('INTERVENTION_DETAILS_TLOC_PLANT_YEAR', dataToSend.INTERVENTION_DETAILS_TLOC_PLANT_YEAR);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_TOTNURSEEDLINGS', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_TOTNURSEEDLINGS);
formData.append('GTRTS_PLANTATION_SITE_YEAR', dataToSend.GTRTS_PLANTATION_SITE_YEAR);
formData.append('GUSER_TUSER_CELL', dataToSend.GUSER_TUSER_CELL);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_ACC', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_ACC);
formData.append('PLANTING_PLAN_GPLANTING_SEEDLING_NUM_GENERATED_NOTE_NAME_152', dataToSend.PLANTING_PLAN_GPLANTING_SEEDLING_NUM_GENERATED_NOTE_NAME_152);
formData.append('PLANTING_PLAN_GPLANTING_SEEDLING_NUM_GENERATED_NOTE_NAME_151', dataToSend.PLANTING_PLAN_GPLANTING_SEEDLING_NUM_GENERATED_NOTE_NAME_151);
formData.append('MAN_AFF_WIND_DIR', dataToSend.MAN_AFF_WIND_DIR);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_SITE_EAST_NUR', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_SITE_EAST_NUR);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_NURSERY_ESTAB_RAW', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_NURSERY_ESTAB_RAW);
formData.append('GTRTS_COMPOST_COMPOST_YEAR_RAW', dataToSend.GTRTS_COMPOST_COMPOST_YEAR_RAW);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('MAN_AFF_WAVE_DIR', dataToSend.MAN_AFF_WAVE_DIR);
formData.append('GUSER_DCOLLECTION_RAW', dataToSend.GUSER_DCOLLECTION_RAW);
formData.append('PLANTING_PLAN_GPLANTING_MAX_SEEDLINGS', dataToSend.PLANTING_PLAN_GPLANTING_MAX_SEEDLINGS);
formData.append('GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED', dataToSend.GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED);
formData.append('GTRTS_COMPOSTS_PIT_COMPOSTS_PIT_YEAR', dataToSend.GTRTS_COMPOSTS_PIT_COMPOSTS_PIT_YEAR);
formData.append('ALLPATCHES', dataToSend.ALLPATCHES);
formData.append('GSITE_ECOLOGICAL_ATTRIBUTES_SF_PROG', dataToSend.GSITE_ECOLOGICAL_ATTRIBUTES_SF_PROG);
formData.append('CHECKED_BY', dataToSend.CHECKED_BY);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CIR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CIR);
formData.append('GENERATED_NOTE_NAME_62', dataToSend.GENERATED_NOTE_NAME_62);
formData.append('GSITE_ECOLOGICAL_ATTRIBUTES_HIST_OTHER', dataToSend.GSITE_ECOLOGICAL_ATTRIBUTES_HIST_OTHER);
formData.append('MAN_AFF_FACING_ISLAND', dataToSend.MAN_AFF_FACING_ISLAND);
formData.append('LOCATION_DATA_TLOCATION', dataToSend.LOCATION_DATA_TLOCATION);
formData.append('GUSER_TUSER', dataToSend.GUSER_TUSER);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_SEEDLING_SUM', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_SEEDLING_SUM);
formData.append('GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW', dataToSend.GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW);
formData.append('INTERVENTION_DETAILS_TYPE_PLANT_PATCHES_PLANT', dataToSend.INTERVENTION_DETAILS_TYPE_PLANT_PATCHES_PLANT);
formData.append('INTERVENTION_DETAILS_TYPE_PLANT_TLOC_PLANT_TYPE', dataToSend.INTERVENTION_DETAILS_TYPE_PLANT_TLOC_PLANT_TYPE);
formData.append('GTRTS_PLANTATION_SITE_YEAR_RAW', dataToSend.GTRTS_PLANTATION_SITE_YEAR_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR);
formData.append('ECOZONE', dataToSend.ECOZONE);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_SITE_NORTH_NUR', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_SITE_NORTH_NUR);
formData.append('REGIN_NOTE_REGEN_NOTES', dataToSend.REGIN_NOTE_REGEN_NOTES);
formData.append('MAN_AFF_PIONEERS_SP', dataToSend.MAN_AFF_PIONEERS_SP);
formData.append('GTRTS_CLEANING_CUTTING_CUTTING_YEAR', dataToSend.GTRTS_CLEANING_CUTTING_CUTTING_YEAR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION);
formData.append('GTRTS_COMPOST_COMPOST_YEAR', dataToSend.GTRTS_COMPOST_COMPOST_YEAR);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_CAMP', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_CAMP);
formData.append('GUSER_DCOLLECTION', dataToSend.GUSER_DCOLLECTION);
formData.append('CHECKED', dataToSend.CHECKED);
formData.append('GTRTS_CLEANING_CUTTING_CUTTING_YEAR_RAW', dataToSend.GTRTS_CLEANING_CUTTING_CUTTING_YEAR_RAW);
formData.append('GTRTS_PIT_DIGGING_DIGGING_YEAR', dataToSend.GTRTS_PIT_DIGGING_DIGGING_YEAR);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_RANGE);
formData.append('OVERALLNOTES', dataToSend.OVERALLNOTES);
formData.append('INTERVENTION_DETAILS_TYPE_PLANT_AREA_ACIVITY', dataToSend.INTERVENTION_DETAILS_TYPE_PLANT_AREA_ACIVITY);
formData.append('GTRTS_VACANCY_FILLING_FILLING_YEAR_RAW', dataToSend.GTRTS_VACANCY_FILLING_FILLING_YEAR_RAW);
formData.append('PLANTING_PLAN_BPLANTING', dataToSend.PLANTING_PLAN_BPLANTING);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_LNG', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_LNG);
formData.append('GTRTS_LAYOUT_LAYOUT_YEAR', dataToSend.GTRTS_LAYOUT_LAYOUT_YEAR);
formData.append('INTERVENTION_DETAILS_LLOC_PLANT_AREA', dataToSend.INTERVENTION_DETAILS_LLOC_PLANT_AREA);
formData.append('TINTERVENTION', dataToSend.TINTERVENTION);
formData.append('REG_PLOT_NO', dataToSend.REG_PLOT_NO);
formData.append('PLANTING_PLAN_GPLANTING_GRPSTOCKS_NTE_2', dataToSend.PLANTING_PLAN_GPLANTING_GRPSTOCKS_NTE_2);
formData.append('END', dataToSend.END);
formData.append('PLANTING_PLAN_GPLANTING_GRPSTOCKS_NTE_1', dataToSend.PLANTING_PLAN_GPLANTING_GRPSTOCKS_NTE_1);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_TPOLYTYPE_NUR', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_TPOLYTYPE_NUR);
formData.append('INTERVENTION_DETAILS_TYPE_PLANT_SEEDING_PLANT', dataToSend.INTERVENTION_DETAILS_TYPE_PLANT_SEEDING_PLANT);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('MAN_AFF_FACING_DIR', dataToSend.MAN_AFF_FACING_DIR);
formData.append('GSITE_ECOLOGICAL_ATTRIBUTES_LAND_COV_DESC', dataToSend.GSITE_ECOLOGICAL_ATTRIBUTES_LAND_COV_DESC);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE);
formData.append('GTRTS_VACANCY_FILLING_FILLING_YEAR', dataToSend.GTRTS_VACANCY_FILLING_FILLING_YEAR);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('PLANTING_PLAN_GPLANTING_SEEDLINGS_PER_HA', dataToSend.PLANTING_PLAN_GPLANTING_SEEDLINGS_PER_HA);
formData.append('GSITE_ECOLOGICAL_ATTRIBUTES_TLANDCOVERCLASS', dataToSend.GSITE_ECOLOGICAL_ATTRIBUTES_TLANDCOVERCLASS);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NUR_CAR_NID', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_GCOORDS_NUR_NUR_CAR_NID);
formData.append('PLANTING_PLAN_GPLANTING_TXT_BUILD2', dataToSend.PLANTING_PLAN_GPLANTING_TXT_BUILD2);
formData.append('PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_ALT', dataToSend.PLANTING_PLAN_GPLANTING_GNURSERY_PSITEPOINT_NUR_ALT);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT_TXT);
formData.append('GSITE_ECOLOGICAL_ATTRIBUTES_HISTORY', dataToSend.GSITE_ECOLOGICAL_ATTRIBUTES_HISTORY);
formData.append('PLANTING_PLAN_GPLANTING_TXT_BUILD1', dataToSend.PLANTING_PLAN_GPLANTING_TXT_BUILD1);
formData.append('TODAY', dataToSend.TODAY);
formData.append('LOCATION_DATA_CA_TLOC_AD_DIVISION', dataToSend.LOCATION_DATA_CA_TLOC_AD_DIVISION);
formData.append('GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW', dataToSend.GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW);
formData.append('LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV', dataToSend.LOCATION_DATA_FOREST_AD_TLOC_ENTER_DIV);
formData.append('PLANTING_PLAN_GPLANTING_DAREA_PLANTING', dataToSend.PLANTING_PLAN_GPLANTING_DAREA_PLANTING);
formData.append('GTRTS_COMMUNITY_PROTECTION_COMMUNITY_YEAR_RAW', dataToSend.GTRTS_COMMUNITY_PROTECTION_COMMUNITY_YEAR_RAW);
formData.append('START', dataToSend.START);
formData.append('GTRTS_PIT_DIGGING_DIGGING_YEAR_RAW', dataToSend.GTRTS_PIT_DIGGING_DIGGING_YEAR_RAW);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('APPROVED', dataToSend.APPROVED);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_core?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_e_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_E_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_e_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_e_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_E_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_e_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_e_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_E_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_e_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_e_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_E_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_e_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_e_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_E_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_e_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_e_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_E_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_e_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_n_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_N_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_n_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_n_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_N_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_n_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_n_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_N_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_n_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_n_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_N_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_n_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_n_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_N_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_n_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_n_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_N_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_n_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_s_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_S_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_s_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_s_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_S_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_s_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_s_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_S_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_s_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_s_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_S_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_s_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_s_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_S_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_s_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_s_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_S_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_s_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_reg_cen_to_w_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_W_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_reg_cen_to_w_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_reg_cen_to_w_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_REG_CEN_TO_W_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_reg_cen_to_w_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gregen_spp_regen_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_SPP_REGEN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('RSPP_NAME', dataToSend.RSPP_NAME);
formData.append('RSPP_NR_NAT', dataToSend.RSPP_NR_NAT);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gregen_spp_regen?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gregen_spp_regen_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GREGEN_SPP_REGEN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('RSPP_NAME', dataToSend.RSPP_NAME);
formData.append('RSPP_NR_NAT', dataToSend.RSPP_NR_NAT);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gregen_spp_regen?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gr_regen_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GR_REGEN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GREGEN_RSITEPOINT_ALT', dataToSend.GREGEN_RSITEPOINT_ALT);
formData.append('REG_AVG_SEEDLING_PER_HA_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_HA_PER_PLOT);
formData.append('GREGEN_REGEN_PLOT_NO', dataToSend.GREGEN_REGEN_PLOT_NO);
formData.append('GREGEN_RSITEPOINT_ACC', dataToSend.GREGEN_RSITEPOINT_ACC);
formData.append('GENERATED_NOTE_NAME_99', dataToSend.GENERATED_NOTE_NAME_99);
formData.append('GREGEN_RSITEPOINT_LNG', dataToSend.GREGEN_RSITEPOINT_LNG);
formData.append('REG_AVG_SEEDLING_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_PLOT);
formData.append('GREGEN_GRCOORDS_RE_RSITE_NORTH', dataToSend.GREGEN_GRCOORDS_RE_RSITE_NORTH);
formData.append('GREGEN_RSITEPOINT_LAT', dataToSend.GREGEN_RSITEPOINT_LAT);
formData.append('GREGEN_GRCOORDS_RE_RSITE_EAST', dataToSend.GREGEN_GRCOORDS_RE_RSITE_EAST);
formData.append('GREGEN_RRECORD_HOW', dataToSend.GREGEN_RRECORD_HOW);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gr_regen?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gr_regen_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GR_REGEN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GREGEN_RSITEPOINT_ALT', dataToSend.GREGEN_RSITEPOINT_ALT);
formData.append('REG_AVG_SEEDLING_PER_HA_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_HA_PER_PLOT);
formData.append('GREGEN_REGEN_PLOT_NO', dataToSend.GREGEN_REGEN_PLOT_NO);
formData.append('GREGEN_RSITEPOINT_ACC', dataToSend.GREGEN_RSITEPOINT_ACC);
formData.append('GENERATED_NOTE_NAME_99', dataToSend.GENERATED_NOTE_NAME_99);
formData.append('GREGEN_RSITEPOINT_LNG', dataToSend.GREGEN_RSITEPOINT_LNG);
formData.append('REG_AVG_SEEDLING_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_PLOT);
formData.append('GREGEN_GRCOORDS_RE_RSITE_NORTH', dataToSend.GREGEN_GRCOORDS_RE_RSITE_NORTH);
formData.append('GREGEN_RSITEPOINT_LAT', dataToSend.GREGEN_RSITEPOINT_LAT);
formData.append('GREGEN_GRCOORDS_RE_RSITE_EAST', dataToSend.GREGEN_GRCOORDS_RE_RSITE_EAST);
formData.append('GREGEN_RRECORD_HOW', dataToSend.GREGEN_RRECORD_HOW);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gr_regen?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gsit_cological_attrbtes_land_cov_desc_image_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GSIT_COLOGICAL_ATTRBTES_LAND_COV_DESC_IMAGE_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gsit_cological_attrbtes_land_cov_desc_image_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gsit_cological_attrbtes_land_cov_desc_image_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GSIT_COLOGICAL_ATTRBTES_LAND_COV_DESC_IMAGE_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gsit_cological_attrbtes_land_cov_desc_image_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gsit_cological_attrbtes_land_cov_desc_image_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GSIT_COLOGICAL_ATTRBTES_LAND_COV_DESC_IMAGE_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gsit_cological_attrbtes_land_cov_desc_image_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gsit_cological_attrbtes_land_cov_desc_image_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GSIT_COLOGICAL_ATTRBTES_LAND_COV_DESC_IMAGE_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gsit_cological_attrbtes_land_cov_desc_image_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gsit_cological_attrbtes_land_cov_desc_image_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GSIT_COLOGICAL_ATTRBTES_LAND_COV_DESC_IMAGE_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gsit_cological_attrbtes_land_cov_desc_image_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gsit_cological_attrbtes_land_cov_desc_image_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GSIT_COLOGICAL_ATTRBTES_LAND_COV_DESC_IMAGE_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gsit_cological_attrbtes_land_cov_desc_image_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_cleaning_cutting_cutting_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_CLEANING_CUTTING_CUTTING_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_cleaning_cutting_cutting_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_cleaning_cutting_cutting_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_CLEANING_CUTTING_CUTTING_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_cleaning_cutting_cutting_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_climber_cutting_climber_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_CLIMBER_CUTTING_CLIMBER_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_climber_cutting_climber_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_climber_cutting_climber_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_CLIMBER_CUTTING_CLIMBER_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_climber_cutting_climber_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_commnty_protcton_community_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_COMMNTY_PROTCTON_COMMUNITY_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_commnty_protcton_community_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_commnty_protcton_community_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_COMMNTY_PROTCTON_COMMUNITY_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_commnty_protcton_community_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_composts_pit_composts_pit_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_COMPOSTS_PIT_COMPOSTS_PIT_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_composts_pit_composts_pit_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_composts_pit_composts_pit_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_COMPOSTS_PIT_COMPOSTS_PIT_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_composts_pit_composts_pit_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_compost_compost_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_COMPOST_COMPOST_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_compost_compost_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_compost_compost_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_COMPOST_COMPOST_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_compost_compost_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_layout_layout_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_LAYOUT_LAYOUT_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_layout_layout_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_layout_layout_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_LAYOUT_LAYOUT_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_layout_layout_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_nuersery_raising_nursery_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_NUERSERY_RAISING_NURSERY_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_nuersery_raising_nursery_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_nuersery_raising_nursery_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_NUERSERY_RAISING_NURSERY_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_nuersery_raising_nursery_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_other_treatment_other_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_OTHER_TREATMENT_OTHER_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_other_treatment_other_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_other_treatment_other_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_OTHER_TREATMENT_OTHER_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_other_treatment_other_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_pit_digging_digging_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_PIT_DIGGING_DIGGING_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_pit_digging_digging_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_pit_digging_digging_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_PIT_DIGGING_DIGGING_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_pit_digging_digging_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_plantation_site_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_PLANTATION_SITE_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_plantation_site_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_plantation_site_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_PLANTATION_SITE_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_plantation_site_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_planting_planting_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_PLANTING_PLANTING_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_planting_planting_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_planting_planting_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_PLANTING_PLANTING_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_planting_planting_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_vacancy_filling_filling_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_VACANCY_FILLING_FILLING_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_vacancy_filling_filling_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_vacancy_filling_filling_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_VACANCY_FILLING_FILLING_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_vacancy_filling_filling_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_gtrts_weeding_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_WEEDING WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('WEEDING_CYCLE', dataToSend.WEEDING_CYCLE);
formData.append('WEEDING_YEAR', dataToSend.WEEDING_YEAR);
formData.append('WEEDING_YEAR_RAW', dataToSend.WEEDING_YEAR_RAW);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_gtrts_weeding?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_gtrts_weeding_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_GTRTS_WEEDING`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('WEEDING_CYCLE', dataToSend.WEEDING_CYCLE);
formData.append('WEEDING_YEAR', dataToSend.WEEDING_YEAR);
formData.append('WEEDING_YEAR_RAW', dataToSend.WEEDING_YEAR_RAW);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_gtrts_weeding?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_location_data_ca_tloc_ad_upzilla_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_LOCATION_DATA_CA_TLOC_AD_UPZILLA WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_location_data_ca_tloc_ad_upzilla?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_location_data_ca_tloc_ad_upzilla_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_LOCATION_DATA_CA_TLOC_AD_UPZILLA`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_location_data_ca_tloc_ad_upzilla?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_location_data_m_sh1_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_LOCATION_DATA_M_SH1 WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('MOUZA_SHEET1_SHEETS_OTHERS_S_TYPES', dataToSend.MOUZA_SHEET1_SHEETS_OTHERS_S_TYPES);
formData.append('MOUZA_SHEET1_SURVEY_TYPES', dataToSend.MOUZA_SHEET1_SURVEY_TYPES);
formData.append('MOUZA_SHEET1_SHEETS_MOUZA1', dataToSend.MOUZA_SHEET1_SHEETS_MOUZA1);
formData.append('MOUZA_SHEET1_SHEETS_SHEET1', dataToSend.MOUZA_SHEET1_SHEETS_SHEET1);
formData.append('MOUZA_SHEET1_SHEETS_PLOT_NO', dataToSend.MOUZA_SHEET1_SHEETS_PLOT_NO);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_location_data_m_sh1?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_location_data_m_sh1_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_LOCATION_DATA_M_SH1`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('MOUZA_SHEET1_SHEETS_OTHERS_S_TYPES', dataToSend.MOUZA_SHEET1_SHEETS_OTHERS_S_TYPES);
formData.append('MOUZA_SHEET1_SURVEY_TYPES', dataToSend.MOUZA_SHEET1_SURVEY_TYPES);
formData.append('MOUZA_SHEET1_SHEETS_MOUZA1', dataToSend.MOUZA_SHEET1_SHEETS_MOUZA1);
formData.append('MOUZA_SHEET1_SHEETS_SHEET1', dataToSend.MOUZA_SHEET1_SHEETS_SHEET1);
formData.append('MOUZA_SHEET1_SHEETS_PLOT_NO', dataToSend.MOUZA_SHEET1_SHEETS_PLOT_NO);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_location_data_m_sh1?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_overallnotes_ima_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_OVERALLNOTES_IMA_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_overallnotes_ima_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_overallnotes_ima_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_OVERALLNOTES_IMA_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_overallnotes_ima_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_weeding_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_WEEDING_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_weeding_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_weeding_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_WEEDING_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_weeding_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_xpictureextra_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_XPICTUREEXTRA_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_xpictureextra_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_xpictureextra_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_XPICTUREEXTRA_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_xpictureextra_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_xpictureextra_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_XPICTUREEXTRA_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_xpictureextra_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_xpictureextra_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_XPICTUREEXTRA_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_xpictureextra_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal192020_xpictureextra_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL192020_XPICTUREEXTRA_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal192020_xpictureextra_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal192020_xpictureextra_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL192020_XPICTUREEXTRA_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/sufal192020_xpictureextra_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_core_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_CORE WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('FOREST_AD_TLOC_FD_DIVISION', dataToSend.FOREST_AD_TLOC_FD_DIVISION);
formData.append('FOREST_AD_TLOC_PLANT_TYPE', dataToSend.FOREST_AD_TLOC_PLANT_TYPE);
formData.append('FOREST_AD_TLOC_PLANT_YEAR', dataToSend.FOREST_AD_TLOC_PLANT_YEAR);
formData.append('REG_AVG_SEEDLING_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_ALL_PLOTS);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('FOREST_AD_TLOC_FD_BEAT', dataToSend.FOREST_AD_TLOC_FD_BEAT);
formData.append('FOREST_AD_TLOC_FD_CIR', dataToSend.FOREST_AD_TLOC_FD_CIR);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_62', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_62);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_63', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_63);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_64', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_64);
formData.append('CHECKED', dataToSend.CHECKED);
formData.append('FOREST_AD_TLOC_ENTER_DIV', dataToSend.FOREST_AD_TLOC_ENTER_DIV);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_65', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_65);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_66', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_66);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_67', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_67);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('CHECKED_BY', dataToSend.CHECKED_BY);
formData.append('TODAY', dataToSend.TODAY);
formData.append('REG_AVG_SEEDLING_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_PER_HA_ALL_PLOTS);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('FOREST_AD_TLOC_FD_BEAT_TXT', dataToSend.FOREST_AD_TLOC_FD_BEAT_TXT);
formData.append('FOREST_AD_TLOC_FD_RANGE', dataToSend.FOREST_AD_TLOC_FD_RANGE);
formData.append('REG_PLOT_NO', dataToSend.REG_PLOT_NO);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('FOREST_AD_GENERATED_NOTE_NAME_13', dataToSend.FOREST_AD_GENERATED_NOTE_NAME_13);
formData.append('FOREST_AD_TLOC_ENTER_RANGE', dataToSend.FOREST_AD_TLOC_ENTER_RANGE);
formData.append('FOREST_AD_TLOC_FD_RANGE_TXT', dataToSend.FOREST_AD_TLOC_FD_RANGE_TXT);
formData.append('REG_AVG_TREES_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_TREES_PER_HA_ALL_PLOTS);
formData.append('START', dataToSend.START);
formData.append('END', dataToSend.END);
formData.append('REG_AVG_TREES_ALL_PLOTS', dataToSend.REG_AVG_TREES_ALL_PLOTS);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('APPROVED', dataToSend.APPROVED);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_core?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_core_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_CORE`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_MODEL_VERSION', dataToSend._MODEL_VERSION);
formData.append('_UI_VERSION', dataToSend._UI_VERSION);
formData.append('_IS_COMPLETE', dataToSend._IS_COMPLETE);
formData.append('_SUBMISSION_DATE', dataToSend._SUBMISSION_DATE);
formData.append('_MARKED_AS_COMPLETE_DATE', dataToSend._MARKED_AS_COMPLETE_DATE);
formData.append('FOREST_AD_TLOC_FD_DIVISION', dataToSend.FOREST_AD_TLOC_FD_DIVISION);
formData.append('FOREST_AD_TLOC_PLANT_TYPE', dataToSend.FOREST_AD_TLOC_PLANT_TYPE);
formData.append('FOREST_AD_TLOC_PLANT_YEAR', dataToSend.FOREST_AD_TLOC_PLANT_YEAR);
formData.append('REG_AVG_SEEDLING_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_ALL_PLOTS);
formData.append('PHONENUMBER', dataToSend.PHONENUMBER);
formData.append('FOREST_AD_TLOC_FD_BEAT', dataToSend.FOREST_AD_TLOC_FD_BEAT);
formData.append('FOREST_AD_TLOC_FD_CIR', dataToSend.FOREST_AD_TLOC_FD_CIR);
formData.append('START_RAW', dataToSend.START_RAW);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_62', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_62);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_63', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_63);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_64', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_64);
formData.append('CHECKED', dataToSend.CHECKED);
formData.append('FOREST_AD_TLOC_ENTER_DIV', dataToSend.FOREST_AD_TLOC_ENTER_DIV);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_65', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_65);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_66', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_66);
formData.append('REGIN_NOTE_GENERATED_NOTE_NAME_67', dataToSend.REGIN_NOTE_GENERATED_NOTE_NAME_67);
formData.append('META_INSTANCE_ID', dataToSend.META_INSTANCE_ID);
formData.append('SIMSERIAL', dataToSend.SIMSERIAL);
formData.append('END_RAW', dataToSend.END_RAW);
formData.append('CHECKED_BY', dataToSend.CHECKED_BY);
formData.append('TODAY', dataToSend.TODAY);
formData.append('REG_AVG_SEEDLING_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_SEEDLING_PER_HA_ALL_PLOTS);
formData.append('SUBSCRIBERID', dataToSend.SUBSCRIBERID);
formData.append('FOREST_AD_TLOC_FD_BEAT_TXT', dataToSend.FOREST_AD_TLOC_FD_BEAT_TXT);
formData.append('FOREST_AD_TLOC_FD_RANGE', dataToSend.FOREST_AD_TLOC_FD_RANGE);
formData.append('REG_PLOT_NO', dataToSend.REG_PLOT_NO);
formData.append('DEVICEID', dataToSend.DEVICEID);
formData.append('FOREST_AD_GENERATED_NOTE_NAME_13', dataToSend.FOREST_AD_GENERATED_NOTE_NAME_13);
formData.append('FOREST_AD_TLOC_ENTER_RANGE', dataToSend.FOREST_AD_TLOC_ENTER_RANGE);
formData.append('FOREST_AD_TLOC_FD_RANGE_TXT', dataToSend.FOREST_AD_TLOC_FD_RANGE_TXT);
formData.append('REG_AVG_TREES_PER_HA_ALL_PLOTS', dataToSend.REG_AVG_TREES_PER_HA_ALL_PLOTS);
formData.append('START', dataToSend.START);
formData.append('END', dataToSend.END);
formData.append('REG_AVG_TREES_ALL_PLOTS', dataToSend.REG_AVG_TREES_ALL_PLOTS);
formData.append('TODAY_RAW', dataToSend.TODAY_RAW);
formData.append('APPROVED', dataToSend.APPROVED);
formData.append('project_id', dataToSend.project_id);
formData.append('sort', dataToSend.sort);
formData.append('last_log_id', dataToSend.last_log_id);
formData.append('restore_id', dataToSend.restore_id);
formData.append('created_at', dataToSend.created_at);
formData.append('created_by', dataToSend.created_by);
formData.append('updated_at', dataToSend.updated_at);
formData.append('updated_by', dataToSend.updated_by);
formData.append('deleted_at', dataToSend.deleted_at);
formData.append('deleted_by', dataToSend.deleted_by);
formData.append('deleted_status', dataToSend.deleted_status);
formData.append('status', dataToSend.status);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_core?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_conslttn_ttndnc_pctre_consultation_notes_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_NOTES_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_notes_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_conslttn_ttndnc_pctre_consultation_notes_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_NOTES_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_notes_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_conslttn_ttndnc_pctre_consultation_notes_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_NOTES_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_notes_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_conslttn_ttndnc_pctre_consultation_notes_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CONSLTTN_TTNDNC_PCTRE_CONSULTATION_NOTES_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/com202021_conslttn_ttndnc_pctre_consultation_notes_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_consultation_issues_others_ques_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CONSULTATION_ISSUES_OTHERS_QUES WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_56', dataToSend.GENERATED_NOTE_NAME_56);
formData.append('OTHERS_ISSUES', dataToSend.OTHERS_ISSUES);
formData.append('OTHERS_ISSUES_ANS', dataToSend.OTHERS_ISSUES_ANS);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_consultation_issues_others_ques?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_consultation_issues_others_ques_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CONSULTATION_ISSUES_OTHERS_QUES`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_56', dataToSend.GENERATED_NOTE_NAME_56);
formData.append('OTHERS_ISSUES', dataToSend.OTHERS_ISSUES);
formData.append('OTHERS_ISSUES_ANS', dataToSend.OTHERS_ISSUES_ANS);

          }
		  const response = await fetch(
			`${baseApi}/com202021_consultation_issues_others_ques?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_consultation_photo_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CONSULTATION_PHOTO WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_36', dataToSend.GENERATED_NOTE_NAME_36);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_consultation_photo?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_consultation_photo_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CONSULTATION_PHOTO`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_36', dataToSend.GENERATED_NOTE_NAME_36);

          }
		  const response = await fetch(
			`${baseApi}/com202021_consultation_photo?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const com202021_consultation_picture_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM COM202021_CONSULTATION_PICTURE_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/com202021_consultation_picture_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const com202021_consultation_picture_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM COM202021_CONSULTATION_PICTURE_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/com202021_consultation_picture_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_beat_index_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_BEAT_INDEX WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_48', dataToSend.GENERATED_NOTE_NAME_48);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_beat_index?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_beat_index_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_BEAT_INDEX`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_48', dataToSend.GENERATED_NOTE_NAME_48);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_beat_index?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_ghumissues_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_GHUMISSUES WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_89', dataToSend.GENERATED_NOTE_NAME_89);
formData.append('HUMISSUES', dataToSend.HUMISSUES);
formData.append('HUM_LEVEL', dataToSend.HUM_LEVEL);
formData.append('HUM_OTHER', dataToSend.HUM_OTHER);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_ghumissues?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_ghumissues_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_GHUMISSUES`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_89', dataToSend.GENERATED_NOTE_NAME_89);
formData.append('HUMISSUES', dataToSend.HUMISSUES);
formData.append('HUM_LEVEL', dataToSend.HUM_LEVEL);
formData.append('HUM_OTHER', dataToSend.HUM_OTHER);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_ghumissues?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_gnatissues_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_GNATISSUES WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('NATISSUES', dataToSend.NATISSUES);
formData.append('NAT_LEVEL', dataToSend.NAT_LEVEL);
formData.append('GENERATED_NOTE_NAME_83', dataToSend.GENERATED_NOTE_NAME_83);
formData.append('NAT_OTHER', dataToSend.NAT_OTHER);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_gnatissues?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_gnatissues_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_GNATISSUES`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('NATISSUES', dataToSend.NATISSUES);
formData.append('NAT_LEVEL', dataToSend.NAT_LEVEL);
formData.append('GENERATED_NOTE_NAME_83', dataToSend.GENERATED_NOTE_NAME_83);
formData.append('NAT_OTHER', dataToSend.NAT_OTHER);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_gnatissues?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_gvillages_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_GVILLAGES WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('SOCFOR_PARTIC', dataToSend.SOCFOR_PARTIC);
formData.append('VRECORD_HOW', dataToSend.VRECORD_HOW);
formData.append('VILLA_AD_UNION', dataToSend.VILLA_AD_UNION);
formData.append('FOREST_VILGRS', dataToSend.FOREST_VILGRS);
formData.append('TOT_HH', dataToSend.TOT_HH);
formData.append('VSITEPOINT_ACC', dataToSend.VSITEPOINT_ACC);
formData.append('VSITEPOINT_LAT', dataToSend.VSITEPOINT_LAT);
formData.append('FCV_PARTC', dataToSend.FCV_PARTC);
formData.append('TVILLAGE_NAME', dataToSend.TVILLAGE_NAME);
formData.append('VSITEPOINT_ALT', dataToSend.VSITEPOINT_ALT);
formData.append('GRCOORDS_VSITE_EAST', dataToSend.GRCOORDS_VSITE_EAST);
formData.append('VILLA_AD_UPZILLA', dataToSend.VILLA_AD_UPZILLA);
formData.append('GENERATED_NOTE_NAME_170', dataToSend.GENERATED_NOTE_NAME_170);
formData.append('GRCOORDS_VSITE_NORTH', dataToSend.GRCOORDS_VSITE_NORTH);
formData.append('VSITEPOINT_LNG', dataToSend.VSITEPOINT_LNG);
formData.append('VILLA_DIST', dataToSend.VILLA_DIST);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_gvillages?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_gvillages_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_GVILLAGES`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('SOCFOR_PARTIC', dataToSend.SOCFOR_PARTIC);
formData.append('VRECORD_HOW', dataToSend.VRECORD_HOW);
formData.append('VILLA_AD_UNION', dataToSend.VILLA_AD_UNION);
formData.append('FOREST_VILGRS', dataToSend.FOREST_VILGRS);
formData.append('TOT_HH', dataToSend.TOT_HH);
formData.append('VSITEPOINT_ACC', dataToSend.VSITEPOINT_ACC);
formData.append('VSITEPOINT_LAT', dataToSend.VSITEPOINT_LAT);
formData.append('FCV_PARTC', dataToSend.FCV_PARTC);
formData.append('TVILLAGE_NAME', dataToSend.TVILLAGE_NAME);
formData.append('VSITEPOINT_ALT', dataToSend.VSITEPOINT_ALT);
formData.append('GRCOORDS_VSITE_EAST', dataToSend.GRCOORDS_VSITE_EAST);
formData.append('VILLA_AD_UPZILLA', dataToSend.VILLA_AD_UPZILLA);
formData.append('GENERATED_NOTE_NAME_170', dataToSend.GENERATED_NOTE_NAME_170);
formData.append('GRCOORDS_VSITE_NORTH', dataToSend.GRCOORDS_VSITE_NORTH);
formData.append('VSITEPOINT_LNG', dataToSend.VSITEPOINT_LNG);
formData.append('VILLA_DIST', dataToSend.VILLA_DIST);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_gvillages?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_overallnotes_ima_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_OVERALLNOTES_IMA_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_overallnotes_ima_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_overallnotes_ima_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_OVERALLNOTES_IMA_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_overallnotes_ima_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_overallnotes_ima_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_OVERALLNOTES_IMA_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_overallnotes_ima_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_overallnotes_ima_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_OVERALLNOTES_IMA_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_overallnotes_ima_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_xpic_beat_index_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_XPIC_BEAT_INDEX_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_xpic_beat_index_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_xpic_beat_index_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_XPIC_BEAT_INDEX_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_xpic_beat_index_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const gener43_2021_xpic_beat_index_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM GENER43_2021_XPIC_BEAT_INDEX_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/gener43_2021_xpic_beat_index_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const gener43_2021_xpic_beat_index_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM GENER43_2021_XPIC_BEAT_INDEX_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/gener43_2021_xpic_beat_index_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_community_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_COMMUNITY_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_community_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_community_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_COMMUNITY_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_community_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_e_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_e_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_e_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_e_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_n_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_n_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_n_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_n_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_s_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_s_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_s_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_s_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_s_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_s_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_s_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_s_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_s_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_s_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_s_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_S_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_s_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_w_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_w_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_w_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_w_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_w_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_w_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_w_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_w_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_w_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_w_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_gregen_plot_reg_cen_to_w_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_W_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_gregen_plot_reg_cen_to_w_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gregen_spp_regen_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_SPP_REGEN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('NUM_TREES', dataToSend.NUM_TREES);
formData.append('RSPP_NAME', dataToSend.RSPP_NAME);
formData.append('GENERATED_NOTE_NAME_95', dataToSend.GENERATED_NOTE_NAME_95);
formData.append('RSPP_NR_NAT', dataToSend.RSPP_NR_NAT);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gregen_spp_regen?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gregen_spp_regen_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GREGEN_SPP_REGEN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('NUM_TREES', dataToSend.NUM_TREES);
formData.append('RSPP_NAME', dataToSend.RSPP_NAME);
formData.append('GENERATED_NOTE_NAME_95', dataToSend.GENERATED_NOTE_NAME_95);
formData.append('RSPP_NR_NAT', dataToSend.RSPP_NR_NAT);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gregen_spp_regen?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gr_regen_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GR_REGEN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('REG_AVG_SEEDLING_PER_HA_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_HA_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_CROWN_CLOSURE', dataToSend.GREGEN_GREGEN_PLOT_CROWN_CLOSURE);
formData.append('REG_AVG_SEEDLING_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_GENERATED_NOTE_NAME_80', dataToSend.GREGEN_GREGEN_PLOT_GENERATED_NOTE_NAME_80);
formData.append('REG_AVG_TREES_PER_HA_PER_PLOT', dataToSend.REG_AVG_TREES_PER_HA_PER_PLOT);
formData.append('GENERATED_NOTE_NAME_106', dataToSend.GENERATED_NOTE_NAME_106);
formData.append('GENERATED_NOTE_NAME_103', dataToSend.GENERATED_NOTE_NAME_103);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_ALT', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_ALT);
formData.append('GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_EAST', dataToSend.GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_EAST);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_LNG', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_LNG);
formData.append('GREGEN_GREGEN_PLOT_REGEN_PLOT_NO', dataToSend.GREGEN_GREGEN_PLOT_REGEN_PLOT_NO);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_LAT', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_LAT);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_ACC', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_ACC);
formData.append('REG_AVG_TREES_PER_PLOT', dataToSend.REG_AVG_TREES_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_RRECORD_HOW', dataToSend.GREGEN_GREGEN_PLOT_RRECORD_HOW);
formData.append('GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_NORTH', dataToSend.GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_NORTH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gr_regen?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gr_regen_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GR_REGEN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('REG_AVG_SEEDLING_PER_HA_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_HA_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_CROWN_CLOSURE', dataToSend.GREGEN_GREGEN_PLOT_CROWN_CLOSURE);
formData.append('REG_AVG_SEEDLING_PER_PLOT', dataToSend.REG_AVG_SEEDLING_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_GENERATED_NOTE_NAME_80', dataToSend.GREGEN_GREGEN_PLOT_GENERATED_NOTE_NAME_80);
formData.append('REG_AVG_TREES_PER_HA_PER_PLOT', dataToSend.REG_AVG_TREES_PER_HA_PER_PLOT);
formData.append('GENERATED_NOTE_NAME_106', dataToSend.GENERATED_NOTE_NAME_106);
formData.append('GENERATED_NOTE_NAME_103', dataToSend.GENERATED_NOTE_NAME_103);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_ALT', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_ALT);
formData.append('GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_EAST', dataToSend.GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_EAST);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_LNG', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_LNG);
formData.append('GREGEN_GREGEN_PLOT_REGEN_PLOT_NO', dataToSend.GREGEN_GREGEN_PLOT_REGEN_PLOT_NO);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_LAT', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_LAT);
formData.append('GREGEN_GREGEN_PLOT_RSITEPOINT_ACC', dataToSend.GREGEN_GREGEN_PLOT_RSITEPOINT_ACC);
formData.append('REG_AVG_TREES_PER_PLOT', dataToSend.REG_AVG_TREES_PER_PLOT);
formData.append('GREGEN_GREGEN_PLOT_RRECORD_HOW', dataToSend.GREGEN_GREGEN_PLOT_RRECORD_HOW);
formData.append('GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_NORTH', dataToSend.GREGEN_GREGEN_PLOT_GRCOORDS_RE_RSITE_NORTH);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gr_regen?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gtrts_climber_cutting_climber_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_CLIMBER_CUTTING_CLIMBER_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gtrts_climber_cutting_climber_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gtrts_climber_cutting_climber_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_CLIMBER_CUTTING_CLIMBER_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gtrts_climber_cutting_climber_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gtrts_community_protection_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_COMMUNITY_PROTECTION WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_257', dataToSend.GENERATED_NOTE_NAME_257);
formData.append('COMMUNITY_YEAR_RAW', dataToSend.COMMUNITY_YEAR_RAW);
formData.append('COMMUNITY_YEAR', dataToSend.COMMUNITY_YEAR);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gtrts_community_protection?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gtrts_community_protection_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_COMMUNITY_PROTECTION`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('GENERATED_NOTE_NAME_257', dataToSend.GENERATED_NOTE_NAME_257);
formData.append('COMMUNITY_YEAR_RAW', dataToSend.COMMUNITY_YEAR_RAW);
formData.append('COMMUNITY_YEAR', dataToSend.COMMUNITY_YEAR);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gtrts_community_protection?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gtrts_compost_compost_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_COMPOST_COMPOST_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gtrts_compost_compost_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gtrts_compost_compost_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_COMPOST_COMPOST_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gtrts_compost_compost_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gtrts_nuersery_raising_nursery_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_NUERSERY_RAISING_NURSERY_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gtrts_nuersery_raising_nursery_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gtrts_nuersery_raising_nursery_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_NUERSERY_RAISING_NURSERY_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gtrts_nuersery_raising_nursery_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gtrts_other_treatment_other_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_OTHER_TREATMENT_OTHER_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gtrts_other_treatment_other_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gtrts_other_treatment_other_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_OTHER_TREATMENT_OTHER_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gtrts_other_treatment_other_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_gtrts_plantation_site_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_PLANTATION_SITE_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_gtrts_plantation_site_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_gtrts_plantation_site_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_GTRTS_PLANTATION_SITE_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_gtrts_plantation_site_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_location_data_ca_tloc_ad_upzilla_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_LOCATION_DATA_CA_TLOC_AD_UPZILLA WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_location_data_ca_tloc_ad_upzilla?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_location_data_ca_tloc_ad_upzilla_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_LOCATION_DATA_CA_TLOC_AD_UPZILLA`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_location_data_ca_tloc_ad_upzilla?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_location_data_m_sh1_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_LOCATION_DATA_M_SH1 WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('MOUZA1', dataToSend.MOUZA1);
formData.append('GENERATED_NOTE_NAME_45', dataToSend.GENERATED_NOTE_NAME_45);
formData.append('SURVEY_TYPES', dataToSend.SURVEY_TYPES);
formData.append('OTHERS_S_TYPES', dataToSend.OTHERS_S_TYPES);
formData.append('SHEET1', dataToSend.SHEET1);
formData.append('PLOT_NO', dataToSend.PLOT_NO);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_location_data_m_sh1?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_location_data_m_sh1_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_LOCATION_DATA_M_SH1`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('MOUZA1', dataToSend.MOUZA1);
formData.append('GENERATED_NOTE_NAME_45', dataToSend.GENERATED_NOTE_NAME_45);
formData.append('SURVEY_TYPES', dataToSend.SURVEY_TYPES);
formData.append('OTHERS_S_TYPES', dataToSend.OTHERS_S_TYPES);
formData.append('SHEET1', dataToSend.SHEET1);
formData.append('PLOT_NO', dataToSend.PLOT_NO);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_location_data_m_sh1?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_overallnotes_ima_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_OVERALLNOTES_IMA_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_overallnotes_ima_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_overallnotes_ima_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_OVERALLNOTES_IMA_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_overallnotes_ima_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_overallnotes_ima_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_OVERALLNOTES_IMA_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_overallnotes_ima_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_overallnotes_ima_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_OVERALLNOTES_IMA_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_overallnotes_ima_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_overallnotes_ima_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_OVERALLNOTES_IMA_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_overallnotes_ima_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_overallnotes_ima_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_OVERALLNOTES_IMA_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_overallnotes_ima_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_planting_plan_gplanting_gspp_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_PLANTING_PLAN_GPLANTING_GSPP WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PREF_SOURCE', dataToSend.PREF_SOURCE);
formData.append('GENERATED_NOTE_NAME_156', dataToSend.GENERATED_NOTE_NAME_156);
formData.append('PREF_OTHER_SOURCE', dataToSend.PREF_OTHER_SOURCE);
formData.append('PREF_SPECIES', dataToSend.PREF_SPECIES);
formData.append('PREF_REPRO_TYPE', dataToSend.PREF_REPRO_TYPE);
formData.append('PREF_NRSEEDLINGS', dataToSend.PREF_NRSEEDLINGS);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_planting_plan_gplanting_gspp?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_planting_plan_gplanting_gspp_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_PLANTING_PLAN_GPLANTING_GSPP`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PREF_SOURCE', dataToSend.PREF_SOURCE);
formData.append('GENERATED_NOTE_NAME_156', dataToSend.GENERATED_NOTE_NAME_156);
formData.append('PREF_OTHER_SOURCE', dataToSend.PREF_OTHER_SOURCE);
formData.append('PREF_SPECIES', dataToSend.PREF_SPECIES);
formData.append('PREF_REPRO_TYPE', dataToSend.PREF_REPRO_TYPE);
formData.append('PREF_NRSEEDLINGS', dataToSend.PREF_NRSEEDLINGS);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_planting_plan_gplanting_gspp?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_rphotoextra_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_RPHOTOEXTRA WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PPICLOCATIONEXTRA_ALT', dataToSend.PPICLOCATIONEXTRA_ALT);
formData.append('XPIC_BEARING', dataToSend.XPIC_BEARING);
formData.append('GENERATED_NOTE_NAME_65', dataToSend.GENERATED_NOTE_NAME_65);
formData.append('PPICLOCATIONEXTRA_LNG', dataToSend.PPICLOCATIONEXTRA_LNG);
formData.append('PPICLOCATIONEXTRA_ACC', dataToSend.PPICLOCATIONEXTRA_ACC);
formData.append('PPICLOCATIONEXTRA_LAT', dataToSend.PPICLOCATIONEXTRA_LAT);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_rphotoextra?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_rphotoextra_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_RPHOTOEXTRA`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PPICLOCATIONEXTRA_ALT', dataToSend.PPICLOCATIONEXTRA_ALT);
formData.append('XPIC_BEARING', dataToSend.XPIC_BEARING);
formData.append('GENERATED_NOTE_NAME_65', dataToSend.GENERATED_NOTE_NAME_65);
formData.append('PPICLOCATIONEXTRA_LNG', dataToSend.PPICLOCATIONEXTRA_LNG);
formData.append('PPICLOCATIONEXTRA_ACC', dataToSend.PPICLOCATIONEXTRA_ACC);
formData.append('PPICLOCATIONEXTRA_LAT', dataToSend.PPICLOCATIONEXTRA_LAT);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_rphotoextra?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_s_site_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_S_SITE WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('TRACE_GPX', dataToSend.TRACE_GPX);
formData.append('POLYLINE', dataToSend.POLYLINE);
formData.append('TOTAREA_HA', dataToSend.TOTAREA_HA);
formData.append('TMAIN_POLYTYPE', dataToSend.TMAIN_POLYTYPE);
formData.append('POLYTRACE', dataToSend.POLYTRACE);
formData.append('GENERATED_NOTE_NAME_54', dataToSend.GENERATED_NOTE_NAME_54);
formData.append('TOTAREA_AC', dataToSend.TOTAREA_AC);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_s_site?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_s_site_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_S_SITE`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('TRACE_GPX', dataToSend.TRACE_GPX);
formData.append('POLYLINE', dataToSend.POLYLINE);
formData.append('TOTAREA_HA', dataToSend.TOTAREA_HA);
formData.append('TMAIN_POLYTYPE', dataToSend.TMAIN_POLYTYPE);
formData.append('POLYTRACE', dataToSend.POLYTRACE);
formData.append('GENERATED_NOTE_NAME_54', dataToSend.GENERATED_NOTE_NAME_54);
formData.append('TOTAREA_AC', dataToSend.TOTAREA_AC);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_s_site?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_weeding_month_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_WEEDING_MONTH WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_weeding_month?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_weeding_month_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_WEEDING_MONTH`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_weeding_month?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_xpictureextra_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_XPICTUREEXTRA_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_xpictureextra_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_xpictureextra_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_XPICTUREEXTRA_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_xpictureextra_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_xpictureextra_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_XPICTUREEXTRA_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_xpictureextra_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_xpictureextra_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_XPICTUREEXTRA_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_xpictureextra_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const plant27_2021_xpictureextra_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_XPICTUREEXTRA_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/plant27_2021_xpictureextra_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const plant27_2021_xpictureextra_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM PLANT27_2021_XPICTUREEXTRA_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/plant27_2021_xpictureextra_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_ref_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_REF WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_ref?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_ref_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_E_REF`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_DOM_AURI', dataToSend._DOM_AURI);
formData.append('_SUB_AURI', dataToSend._SUB_AURI);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('PART', dataToSend.PART);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_e_ref?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_blb_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_BLB WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_blb?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_blb_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_BLB`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('VALUE', dataToSend.VALUE);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_blb?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_bn_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_BN WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_bn?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_bn_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM SUFAL_13_2021_GREGEN_GREGEN_PLOT_REG_CEN_TO_N_BN`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('_PARENT_AURI', dataToSend._PARENT_AURI);
formData.append('_ORDINAL_NUMBER', dataToSend._ORDINAL_NUMBER);
formData.append('_TOP_LEVEL_AURI', dataToSend._TOP_LEVEL_AURI);
formData.append('UNROOTED_FILE_PATH', dataToSend.UNROOTED_FILE_PATH);
formData.append('CONTENT_TYPE', dataToSend.CONTENT_TYPE);
formData.append('CONTENT_LENGTH', dataToSend.CONTENT_LENGTH);
formData.append('CONTENT_HASH', dataToSend.CONTENT_HASH);

          }
		  const response = await fetch(
			`${baseApi}/sufal_13_2021_gregen_gregen_plot_reg_cen_to_n_bn?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//

//sync Start
export const _user_granted_authority_sync = async uri => {
  return new Promise((resolve, reject) => {
    console.log('Starting database transaction for URI:', uri);

    // Begin database transaction
    database.transaction(tx => {
      console.log('Executing SQL query...');

      // Execute SQL query to fetch data
      tx.executeSql(
        `SELECT * FROM _user_granted_authority WHERE _URI = ?`,
        [uri],
        async (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            const dataToSend = resultSet.rows.item(0);
            console.log('Data to be sent:', dataToSend._URI);

            // Create FormData instance and append data
            const formData = new FormData();
            formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('USER', dataToSend.USER);
formData.append('GRANTED_AUTHORITY', dataToSend.GRANTED_AUTHORITY);

            console.log('FormData to be sent:', formData);
            // Send data to the API using FormData
            try {
              const response = await fetch(
                `${baseApi}/_user_granted_authority?token=${token}`,
				{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    // Note: 'Content-Type' should NOT be set when using FormData
                  },
                  body: formData,
                },
              );

              if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              console.log('API response:', result);
              resolve(result);
            } catch (error) {
              console.error('Error sending data to API:', error);
              reject(error);
            }
          } else {
            console.error('No data found for the given URI:', uri);
            reject(new Error('No data found.'));
          }
        },
        (_, error) => {
          console.error('Error executing SQL query:', error);
          reject(error);
        },
      );
    });
  });
};
// sync end
//---------------------------------------------------------//
//sync2 Start
export const _user_granted_authority_sync2 = async uri => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM _user_granted_authority`, // Query the aspects table
        [],
        (_, resultSet) => {
          //console.log('ResultSet:', resultSet); // Log the resultSet to debug
          const data = [];
		  const formData = new FormData();
            
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            data.push(row);
			formData.append('_URI', dataToSend._URI);
formData.append('_CREATOR_URI_USER', dataToSend._CREATOR_URI_USER);
formData.append('_CREATION_DATE', dataToSend._CREATION_DATE);
formData.append('_LAST_UPDATE_URI_USER', dataToSend._LAST_UPDATE_URI_USER);
formData.append('_LAST_UPDATE_DATE', dataToSend._LAST_UPDATE_DATE);
formData.append('USER', dataToSend.USER);
formData.append('GRANTED_AUTHORITY', dataToSend.GRANTED_AUTHORITY);

          }
		  const response = await fetch(
			`${baseApi}/_user_granted_authority?token=${token}`,
			{
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				// Note: 'Content-Type' should NOT be set when using FormData
			  },
			  body: formData,
			},
		  );
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
// sync2 end
//---------------------------------------------------------//
