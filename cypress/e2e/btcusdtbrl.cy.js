describe('BTCUSDTBRL price api', () => {
    context('GET /BTCUSDTBRL', () => {
        var btcbrl=0;
        var usdtbrl=0;
        var btcusdt=0;

        it('should return USDTBRL price', () => {
            
            cy.request({
                method: 'GET',
                url: 'https://api.binance.com/api/v3/ticker/price?symbol=USDTBRL'
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.symbol).to.eq("USDTBRL")
                    usdtbrl = Number(response.body.price).toFixed(2);
                });
        });

        it('should return BTCBRL price', () => {

            cy.request({
                method: 'GET',
                url: 'https://api.binance.com/api/v3/ticker/price?symbol=BTCBRL'
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.symbol).to.eq("BTCBRL")
                    btcbrl = Number(response.body.price).toFixed(2);
                });
        });

        it('should return BTCUSDT price', () => {

                cy.request({
                    method: 'GET',
                    url: 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
                })
                    .should((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body.symbol).to.eq("BTCUSDT")
                        btcusdt = Number(response.body.price).toFixed(0);
                    });
                                    
        });

        it('should calculate btcusdtbrl', () => {
            expect(btcbrl).to.eq( (btcusdt*usdtbrl).toFixed(0) );
        });
        
        

    });
  });
