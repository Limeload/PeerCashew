Rails.application.routes.draw do
  # Routes for users
  resources :users

  # Routes for sessions
  post "/signup", to: "users#create"
  get "/me", to: "users#me"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # Routes for loans
  resources :loans

  # Routes for investors
  resources :investors
end
