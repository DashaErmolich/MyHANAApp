const cds = require('@sap/cds')
module.exports = cds.service.impl(function () {
    this.on('sleep', async () => {
    try {
        let dbQuery = ' Call "sleep"( )';
        const start = Date.now();
        let result = await cds.run(dbQuery, { });
        const end = Date.now();
        cds.log().info((end - start)/1000, 'sec sleep');
        return true;
    } catch (error) {
        cds.log().error(error);
        return false;
    }
    })
})
