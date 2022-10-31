describe('Health api', () => {
    context('GET /Health', () => {
        it('should return processando', () => {
            cy.request({
                method: 'GET',
                url: 'https://useallcloud.com.br/apim2/compras/api/health'
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.Success).to.eq(true)
                    expect(response.body.Content.Mensagem).to.eq("Executando")
                });
        });
    });
  });
