Rails.application.routes.draw do
  # Routes for users
  resources :users do
    resources :loans, only: [:new, :create]
  end

  scope '/users/:id' do
    resources :loans, only: [:new, :create, :edit, :update, :destroy]
  end
  # Routes for sessions
  post "/signup", to: "users#create"
  get "/me", to: "users#me"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/profile', to: 'users#profile'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # Routes for loans
  resources :loans, only: [:create, :update]
   get '/loans/:id', to: 'loans#show'
  post '/loans/:id', to: 'loans#create'
  # Routes for investors
  resources :investors
end
