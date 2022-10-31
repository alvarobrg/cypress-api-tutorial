describe('USDTBRL price api', () => {
    context('GET /USDTBRL', () => {
        it('should return USDTBRL price', () => {
            cy.request({
                method: 'GET',
                url: 'https://api.binance.com/api/v3/ticker/price?symbol=USDTBRL'
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.symbol).to.eq("USDTBRL")
                    var price = Number(response.body.price).toFixed(0);
                    expect(price).to.eq("5");
                });
        });
    });
  });
