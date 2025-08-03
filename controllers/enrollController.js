const { logTransaction } = require('../utils/logger');
const { syncToCRM } = require('../utils/crmSync');

exports.handleEnrollment = async (req, res) => {
  const { email, source, targets } = req.body;

  if (!email || !source || !Array.isArray(targets)) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  const transaction = {
    email,
    source,
    targets,
    date: new Date().toISOString(),
  };

  logTransaction(transaction);

  for (const target of targets) {
    await syncToCRM(target, transaction);
  }

  res.json({ status: 'success', syncedTo: targets });
};