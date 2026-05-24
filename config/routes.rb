Rails.application.routes.draw do
  # Auth
  post   "/signup", to: "users#create"
  get    "/me",     to: "users#me"
  post   "/login",  to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get    "/profile", to: "users#profile"

  # Users — nested loan/investor reads
  resources :users, only: [:index, :show, :update, :destroy] do
    get :loans,     on: :member
    get :investors, on: :member
  end

  # Loans — with status transition and nested payments
  resources :loans do
    patch :transition, on: :member
    resources :payments
  end

  # Investors
  resources :investors

  # SPA fallback (must be last)
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
