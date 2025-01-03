// src/middlewares/tenantMiddleware.js
const tenantMiddleware = (req, res, next) => {
    const tenantId = req.subdomains[0]; // Extract from subdomain (e.g., 'dubai' or 'india')
    if (!tenantId) {
        return res.status(400).json({ error: 'Tenant not specified in subdomain' });
    }

    // Validate tenantId 
    const allowedTenants = ['dubai', 'india'];
    if (!allowedTenants.includes(tenantId)) {
        return res.status(404).json({ error: 'Invalid tenant' });
    }

    req.tenantId = tenantId; // Attach tenantId to the request object
    next();
};

module.exports = tenantMiddleware;
