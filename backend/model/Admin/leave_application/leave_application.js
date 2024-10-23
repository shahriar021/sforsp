const connection = require('../../../connection/config/database');

const leave = {
  leave_create: async (req, res) => {
    try {
      const {
        leave_category,
        start_date,
        end_date,
        receiver,
        application_status,
        created_date,
        created_by,
        whose_leave,
      } = req.body;

      const sql = `INSERT INTO leave_application (leave_category, start_date, end_date, receiver, application_status, created_date, created_by, whose_leave)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
      const values = [
        leave_category,
        start_date,
        end_date,
        receiver,
        application_status,
        created_date,
        created_by,
        whose_leave,
      ];

      connection.query(sql, values, (err, result) => {
        // Swap the arguments
        if (err) {
          res.status(500).json({message: 'Leave creation failed.'});
        } else {
          res.status(200).send(result);
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({message: 'Internal server error.'}); // It's a good practice to send a response in case of an error.
    }
  },

  get_leave_cat: async (req, res) => {
    try {
      const sql = `SELECT * FROM leave_category`;
      connection.query(sql, (err, result) => {
        if (err) {
          res.status(500).json({message: 'leave category failed..'});
        } else {
          res.status(200).send(result);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  get_receiver: async (req, res) => {
    try {
      const {id} = req.params;
      const sql = `SELECT *
                        FROM employe_joining
                        LEFT JOIN users ON employe_joining.user_id = users.id
                        LEFT JOIN designation ON employe_joining.designation_id = designation.id
                        `;

      connection.query(sql, (err, result) => {
        if (err) {
          res.status(500).json({message: 'receiver failed..'});
        } else {
          res.status(200).send(result);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  get_receiver_list: async (req, res) => {
    try {
      const sql = `SELECT
                leave_application.*,
                leave_category.name AS leave_category_name,
                created_by_user.full_name AS created_by_name,
                receiver_user.full_name AS receiver_name,
                whose_leave_user.full_name AS whose_leave_name,
                CASE
                    WHEN leave_application.application_status = 0 THEN 'pending'
                    WHEN leave_application.application_status = 2 THEN 'approved'
                    WHEN leave_application.application_status = 1 THEN 'rejected'
                    ELSE 'unknown'
                END AS application_status_name
            FROM
                leave_application
            LEFT JOIN
                leave_category ON leave_application.leave_category = leave_category.id
            LEFT JOIN
                users AS created_by_user ON leave_application.created_by = created_by_user.id
            LEFT JOIN
                users AS receiver_user ON leave_application.receiver = receiver_user.id
            LEFT JOIN
                users AS whose_leave_user ON leave_application.whose_leave = whose_leave_user.id
            ORDER BY
                leave_application.id DESC;
                        `;

      connection.query(sql, (err, result) => {
        if (err) {
          res.status(500).json({message: 'receiver failed..'});
        } else {
          res.status(200).send(result);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = leave;
