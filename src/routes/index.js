const express = require('express');
const authRoutes = require('./authRoutes');  // Import the authentication routes
const roleRoutes = require('./roleRoutes');
const permissionRoutes = require('./permissionRoutes');
const creditorRoutes = require('./creditorRoutes');
const mainDetailsRoutes = require('./lead/MainDetailsRoute');
const leadDetailsRoutes = require('./lead/leadDetailsRoutes');
const websiteDetailsRoutes = require('./lead/websiteDetailRoutes');
const applicantPersonalDetailRoutes = require('./lead/applicantPersonalDetailRoutes');
const enachDetailRoutes = require('./lead/enachDetailRoute')
const documentUrlRoutes = require('./lead/documentUrlRoutes')
const creditorDebtDetailRoutes = require('./lead/creditorDebtDetailRoutes')
const customerDocumentRoutes = require('./lead/customerDocumentRoutes')
const monthlyExpenditureRoutes = require('./lead/monthlyExpenditureRoutes')
const incomeAndExpenditureRoutes = require('./lead/incomeAndExpenditureRoutes')
const personalDetailRoutes = require('./personalDetailRoutes');

const router = express.Router();

// Define and use all the routes
router.use('/auth', authRoutes);  // Routes for authentication (register, login)
router.use('/roles', roleRoutes);
router.use('/permissions', permissionRoutes);
router.use('/creditors', creditorRoutes);
router.use('/lead', mainDetailsRoutes);
router.use('/lead', leadDetailsRoutes);
router.use('/lead', websiteDetailsRoutes);
router.use('/lead', applicantPersonalDetailRoutes);
router.use('/lead',enachDetailRoutes)
router.use('/lead',documentUrlRoutes)
router.use('/lead',creditorDebtDetailRoutes)
router.use('/lead',customerDocumentRoutes)
router.use('/lead',monthlyExpenditureRoutes)
router.use('/lead',incomeAndExpenditureRoutes)

// Personal Details routes
router.use('/personal-details', personalDetailRoutes);

module.exports = router;
