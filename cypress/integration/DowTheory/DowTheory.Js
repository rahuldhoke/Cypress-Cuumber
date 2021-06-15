

describe('Dow Theory', () => {


    it('TestCase1', () => {
        var arrNSEStocks = ['tata motors','escorts'];
        var i
    for(i=0;i<=2;i++){
    
        cy.visit('https://www.indiainfoline.com/')
        //cy.get("input["id='searchInputBox'"]").type('tata motors')
        cy.get("input[id='searchInputBox']").type(arrNSEStocks[i])
        cy.wait(3000)
        cy.get("input[id='searchInputBox']").type('{leftarrow}')
        cy.get("input[id='searchInputBox']").type('{downarrow}')
        
        cy.get('#auto_drop_hp').find("li:first-of-type").eq(0).trigger('click')
        //cy.get('#auto_drop_hp').find("li:first-of-type").eq(0).click({ force: true })
        //cy.get('#auto_drop_hp').find("li:first-of-type").eq(0).trigger('mouseenter')
        cy.wait(2000)
        cy.get("button[name='searchsubmit']").click({ force: true })
     
        cy.get("h2[class='inline-block txt_normal compSymbol']").then(($headerText) =>{
            const headerText = $headerText.text()
            cy.log('Stock Name :' + headerText)
            
            
        })

        cy.get('.card_np.primary_contnent_bg.pl0.plrm_0 ').contains('Financials').click({ force: true })
        cy.get("a[href='#balance_sheet']").click({ force: true })
        cy.wait(3000)
        //*********************** */
        var userdetails = [];
        cy.get('.col-lg-12.col-md-12.col-sm-12.col-xs-12.tablestyle.balancesheetConsolidateTabular td')
        .each(($el, index, $list) => {
                
            userdetails[index] = $el.text();
        }).then(() => {
            const headerText = $headerText.text()
            cy.log(headerText + userdetails[15]  + userdetails[16] )
            cy.log(headerText + userdetails[25]  + userdetails[26] )
         
        })
    }
    
    })
})
/*
var i;
            // for(i=0;i<userdetails.length;i++){
            for (i = 15; i <= 16; i++) {
                cy.log(userdetails[15] + userdetails[16])
            }

            for (i = 25; i <= 26; i++) {
                cy.log(userdetails[25] + userdetails[26])
            }
            */