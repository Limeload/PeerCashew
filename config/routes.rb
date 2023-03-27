Rails.application.routes.draw do
  # Routes for users
  resources :users, only: [] do
    get :loans, on: :member
    get :investors, on: :member
  end
  get '/users/:user_id/loans', to: 'loans#index'
  get '/users/:user_id/investors', to: 'investors#index'
  resources :users

  scope '/users/:id' do
    resources :loans, only: [:new, :create, :edit, :update, :destroy]
    resources :investors, only: [:new, :create, :update, :destroy]
  end
  # Routes for sessions
  post "/signup", to: "users#create"
  get "/me", to: "users#me"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/profile', to: 'users#profile'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # Routes for loans
  resources :loans
  get '/loans/:id', to: 'loans#show'
  post '/loans/:id', to: 'loans#create'
  # Routes for investors
  resources :investors
  get '/investors/:id', to: 'investors#show'
  post '/investors/:id', to: 'investors#create'
end
