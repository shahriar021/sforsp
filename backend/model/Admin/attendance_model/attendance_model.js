const connection = require('../../../connection/config/database');

const attendance = {
  attendance_list: async (req, res) => {
    try {
      const {id} = req.params;
      const sql = `SELECT 
        *,user_id,
        COUNT(DISTINCT DATE(attendance.checktime)) AS total_attendance
        FROM attendance 
        where attendance.user_id=?
        GROUP BY user_id
        order by attendance.id desc
        ;`;

      connection.query(sql, [id], (err, result) => {
        if (err) {
          res.status(500).json({message: 'attendance list failed'});
        } else {
          res.status(200).send(result);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  // attendance_list_date_for_search_box: async (req, res) => {
  //   try {
  //     const {id} = req.params;
  //     const date = req.body.date;
  //     const sql = `SELECT * FROM attendance WHERE  user_id= ? and DATE_FORMAT(attendance.checktime, '%Y-%m')=?;
  //       `;

  //     connection.query(sql, [id], [date], (err, result) => {
  //       if (err) {
  //         res.status(500).json({message: 'attendance list failed'});
  //       } else {
  //         res.status(200).send(result);
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },

  attendance_list_date_for_search_box: async (req, res) => {
    try {
      const id = req.body.id;
      const date = req.body.date;
      const sql = `
      SELECT * FROM attendance 
      WHERE user_id = ? 
      AND DATE_FORMAT(attendance.checktime, '%Y-%m') = ?
       order by attendance.id desc;
    `;

      connection.query(sql, [id, date], (err, result) => {
        if (err) {
          res.status(500).json({message: 'Attendance list failed'});
        } else {
          res.status(200).send(result);
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({message: 'An error occurred'});
    }
  },
  attendance_list_daily: async (req, res) => {
    try {
      const {id} = req.params;
      const sql = `SELECT * FROM attendance WHERE  user_id= ? and DATE_FORMAT(attendance.checktime, '%Y-%m-%d')=CURDATE()  order by attendance.id desc;`;

      connection.query(sql, [id], (err, result) => {
        if (err) {
          res.status(500).json({message: 'attendance list failed'});
        } else {
          res.status(200).send(result);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  attendance_list_monthly: async (req, res) => {
    try {
      const id = req.body.id;
      const date = req.body.date;
      const sql = `SELECT 
    *,
    MAX(attendance.checktime) AS entry_time,
    MIN(attendance.checktime) AS exit_time
FROM 
    attendance 
WHERE 
    user_id = ?
    AND DATE_FORMAT(attendance.checktime, '%Y-%m') = ?
GROUP BY 
    DATE(attendance.checktime), user_id
 order by attendance.id desc;`;

      connection.query(sql, [id, date], (err, result) => {
        if (err) {
          res.status(500).json({message: 'attendance list failed'});
        } else {
          res.status(200).send(result);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  attendance_list_summary: async (req, res) => {
    try {
      const id = req.body.id;
      const date = req.body.date;
      const data = `SELECT *,
      salary.user_id,
      payroll.basic as total_salary,
      designation.designation_name,
      COUNT(DISTINCT CASE WHEN attendance.checktime IS NOT NULL THEN attendance.id END) AS present,
      COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) AS total_holiday,
      COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END) AS total_leave,
      (COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
       COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END)) AS total_days_off,
      (30 -
       (COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
        COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END))
      ) AS working_days,
      (30 -
       (COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
        COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END)) - 
        COUNT(DISTINCT CASE WHEN attendance.checktime IS NOT NULL THEN attendance.id END)
      ) AS absent
      FROM salary
      LEFT JOIN employee_promotion
            ON salary.user_id = employee_promotion.user_id
      LEFT JOIN designation
            ON employee_promotion.designation_id = designation.id
      LEFT JOIN attendance
            ON salary.user_id = attendance.user_id AND DATE_FORMAT(salary.salary_month, '%Y-%m') = DATE_FORMAT(attendance.checktime, '%Y-%m')
      LEFT JOIN yearly_holiday
            ON DATE_FORMAT(salary.salary_month, '%Y-%m') = DATE_FORMAT(yearly_holiday.start_date, '%Y-%m')
      LEFT JOIN leave_application
            ON salary.user_id = leave_application.whose_leave AND leave_application.application_status = 2
      LEFT JOIN leave_application_date
            ON leave_application_date.leave_application_id = leave_application.id
      LEFT JOIN payroll
            ON employee_promotion.payroll_id = payroll.id
      WHERE salary.user_id =? and DATE_FORMAT(salary.salary_month, '%Y-%m')=?
      GROUP BY salary.user_id order by salary.id DESC;`;

      connection.query(data, [id, date], (err, result) => {
        if (err) {
          res.status(500).json({message: 'attendance list failed'});
        } else {
          res.status(200).send(result);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = attendance;
