class Stock < ApplicationRecord
    def self.new_lookup(ticker_symbol)
        client = IEX::Api::Client.new(publishable_token: 'Tpk_857a36b7f8354558b344b53ba5b911bb',
                                                endpoint: 'https://sandbox.iexapis.com/v1')
        new(ticker: ticker_symbol, name: client.company(ticker_symbol).company_name, last_price: client.price(ticker_symbol) )
        end
end
