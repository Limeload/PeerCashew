# config/routes.rb
Rails.application.routes.draw do
  resources :payments
  resources :investments
  resources :loans
  resources :users
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
