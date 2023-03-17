Rails.application.routes.draw do
  # Routes for users
  resources :users

  # Routes for sessions
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


  # Routes for loans
  resources :loans

  # Routes for investors
  resources :investors
end
