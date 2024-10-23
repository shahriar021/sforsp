const connection = require('../../../connection/config/database');

const salary = {
  //   get_salary: async (req, res) => {
  //     try {
  //       const data = `SELECT *,
  //     salary.user_id,payroll.basic as total_salary,designation.designation_name,
  //     COUNT(DISTINCT CASE WHEN attendance.checktime IS NOT NULL THEN attendance.id END) AS present,
  //     COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) AS total_holiday,
  //     COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END) AS total_leave,
  //     (COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
  //      COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END)) AS total_days_off,
  //     (30 -
  //      (COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
  //       COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END))
  //     ) AS working_days,
  //     (30 -
  //      (COUNT(DISTINCT CASE WHEN yearly_holiday.holiday_name IS NOT NULL THEN yearly_holiday.id END) +
  //       COUNT(DISTINCT CASE WHEN leave_application_date.leave_application_id IS NOT NULL THEN leave_application_date.id END))-( COUNT(DISTINCT CASE WHEN attendance.checktime IS NOT NULL THEN attendance.id END) )
  //     ) AS absent
  // FROM salary
  // LEFT JOIN employee_promotion
  //     ON salary.user_id = employee_promotion.user_id
  // LEFT JOIN designation
  //     ON employee_promotion.designation_id = designation.id
  // LEFT JOIN attendance
  //     ON salary.user_id = attendance.user_id AND DATE_FORMAT(salary.salary_month, '%Y-%m') = DATE_FORMAT(attendance.checktime, '%Y-%m')
  // LEFT JOIN yearly_holiday
  //     ON DATE_FORMAT(salary.salary_month, '%Y-%m') = DATE_FORMAT(yearly_holiday.start_date, '%Y-%m')
  // LEFT JOIN leave_application
  //     ON salary.user_id = leave_application.whose_leave AND leave_application.application_status = 2
  // LEFT JOIN leave_application_date
  //     ON leave_application_date.leave_application_id = leave_application.id
  // LEFT JOIN payroll
  // 	ON employee_promotion.payroll_id=payroll.id
  // GROUP BY salary.user_id;`;
  //       connection.query(data, (err, result) => {
  //         if (err) {
  //           res.status(500).json({message: 'salary list failed'});
  //         } else {
  //           res.status(200).send(result);
  //         }
  //       });
  //     } catch (err) {
  //       console.error(err);
  //       res.status(500).json({message: 'An unexpected error occurred'});
  //     }
  //   },
  get_salary: async (req, res) => {
    try {
      const {id} = req.params;
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
WHERE salary.user_id =?
GROUP BY salary.user_id order by salary.id DESC;`;
      connection.query(data, [id], (err, result) => {
        if (err) {
          res.status(500).json({message: 'salary list failed'});
        } else {
          res.status(200).send(result);
        }
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({message: 'An unexpected error occurred'});
    }
  },
};

module.exports = salary;
