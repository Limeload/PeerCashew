Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :update, :destroy] do
    resources :loans, only: [:index, :create]
  end

  resources :loans, only: [:show, :update, :destroy] do
    resources :investors, only: [:index, :create]
  end

  resources :investors, only: [:show, :update, :destroy]
end
