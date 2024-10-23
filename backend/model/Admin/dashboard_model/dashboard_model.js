const connection = require('../../../connection/server');

const dashboard_model = {
  weeklyAllowance: (req, res) => {
    const {id} = req.params;
    const sql = `SELECT 
    transport_allowance.*, 
    mobile_allowance.*, 
    mobile_allowance.amount AS mAmount
FROM 
    transport_allowance 
LEFT JOIN 
    mobile_allowance 
ON 
    mobile_allowance.recharge_user = transport_allowance.user_id
WHERE 
    transport_allowance.created_date >= DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) + 1 DAY)
    AND transport_allowance.created_date < DATE_ADD(DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) + 1 DAY), INTERVAL 5 DAY)
    AND mobile_allowance.created_date >= DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) + 1 DAY)
    AND mobile_allowance.created_date < DATE_ADD(DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) + 1 DAY), INTERVAL 5 DAY)
    AND transport_allowance.user_id = ?
LIMIT 0, 25;
`;

    connection.query(sql, [id], (err, result) => {
      if (err) {
        console.error(error);
        res.status(500).send('Internal server error');
      }
      res.status(200).send(result);
    });
  },
};

module.exports = dashboard_model;
