const connection = require('../../../connection/config/database');

// const report = {
//   attedance_multiple_month_report: async (req, res) => {
//     try {
//       const sql = `SELECT
//     salary.user_id,
//     payroll.basic AS total_salary,
//     designation.designation_name,
//     DATE_FORMAT(salary.salary_month, '%Y-%m') AS month,
//     COUNT(DISTINCT CASE WHEN attendance.checktime IS NOT NULL THEN attendance.id END) AS present,
//     COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) AS total_holiday,
//     COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END) AS total_leave,
//     (
//         COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
//         COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END)
//     ) AS total_days_off,
//     (
//         DAY(LAST_DAY(salary.salary_month)) - (
//             COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
//             COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END)
//         )
//     ) AS working_days,
//     (
//         DAY(LAST_DAY(salary.salary_month)) - (
//             COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
//             COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END)
//         ) - COUNT(DISTINCT CASE WHEN attendance.checktime IS NOT NULL THEN attendance.id END)
//     ) AS absent
// FROM
//     salary
// LEFT JOIN employee_promotion
//     ON salary.user_id = employee_promotion.user_id
// LEFT JOIN designation
//     ON employee_promotion.designation_id = designation.id
// LEFT JOIN attendance
//     ON salary.user_id = attendance.user_id
//     AND DATE_FORMAT(salary.salary_month, '%Y-%m') = DATE_FORMAT(attendance.checktime, '%Y-%m')
// LEFT JOIN yearly_holiday
//     ON DATE_FORMAT(salary.salary_month, '%Y-%m') = DATE_FORMAT(yearly_holiday.start_date, '%Y-%m')
// LEFT JOIN leave_application
//     ON salary.user_id = leave_application.whose_leave
//     AND leave_application.application_status = 2
// LEFT JOIN leave_application_date
//     ON leave_application_date.leave_application_id = leave_application.id
// LEFT JOIN payroll
//     ON employee_promotion.payroll_id = payroll.id
// WHERE
//     salary.user_id = ?
//     AND DATE_FORMAT(salary.salary_month, '%Y-%m') BETWEEN ? AND ?
// GROUP BY
//     salary.user_id,
//     payroll.basic,
//     designation.designation_name,
//     DATE_FORMAT(salary.salary_month, '%Y-%m')
// ORDER BY
//     DATE_FORMAT(salary.salary_month, '%Y-%m') DESC;`;
//       const {id} = req.body.id;
//       const date = req.body.date;
//       const date2 = req.body.date2;
//       connection.query(sql, [id, date, date2], (err, result) => {
//         if (err) {
//           res.status(500).json({message: 'failed'});
//         }
//         res.status(200).send(result);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   },
// };

const report = {
  attedance_multiple_month_report: async (req, res) => {
    try {
      const sql = `SELECT
        salary.user_id,
        payroll.basic AS total_salary,
        designation.designation_name,
        DATE_FORMAT(salary.salary_month, '%Y-%m') AS month,
        COUNT(DISTINCT CASE WHEN attendance.checktime IS NOT NULL THEN attendance.id END) AS present,
        COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) AS total_holiday,
        COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END) AS total_leave,
        (
            COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
            COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END)
        ) AS total_days_off,
        (
            DAY(LAST_DAY(salary.salary_month)) - (
                COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
                COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END)
            )
        ) AS working_days,
        (
            DAY(LAST_DAY(salary.salary_month)) - (
                COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
                COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END)
            ) - COUNT(DISTINCT CASE WHEN attendance.checktime IS NOT NULL THEN attendance.id END)
        ) AS absent
      FROM
        salary
      LEFT JOIN employee_promotion
        ON salary.user_id = employee_promotion.user_id
      LEFT JOIN designation
        ON employee_promotion.designation_id = designation.id
      LEFT JOIN attendance
        ON salary.user_id = attendance.user_id 
        AND DATE_FORMAT(salary.salary_month, '%Y-%m') = DATE_FORMAT(attendance.checktime, '%Y-%m')
      LEFT JOIN yearly_holiday
        ON DATE_FORMAT(salary.salary_month, '%Y-%m') = DATE_FORMAT(yearly_holiday.start_date, '%Y-%m')
      LEFT JOIN leave_application
        ON salary.user_id = leave_application.whose_leave 
        AND leave_application.application_status = 2
      LEFT JOIN leave_application_date
        ON leave_application_date.leave_application_id = leave_application.id
      LEFT JOIN payroll
        ON employee_promotion.payroll_id = payroll.id
      WHERE
        salary.user_id = ?
        AND DATE_FORMAT(salary.salary_month, '%Y-%m') BETWEEN ? AND ?
      GROUP BY
        salary.user_id,
        payroll.basic,
        designation.designation_name,
        DATE_FORMAT(salary.salary_month, '%Y-%m')
      ORDER BY
        DATE_FORMAT(salary.salary_month, '%Y-%m') DESC;`;

      const {id, date, date2} = req.body;
      connection.query(sql, [id, date, date2], (err, result) => {
        if (err) {
          console.error('Query Error:', err);
          return res.status(500).json({message: 'Failed to retrieve data'});
        }
        if (result.length === 0) {
          return res.status(404).json({message: 'No data found'});
        }
        res.status(200).send(result);
      });
    } catch (err) {
      console.error('Server Error:', err);
      res.status(500).json({message: 'Server Error'});
    }
  },
};

module.exports = report;
