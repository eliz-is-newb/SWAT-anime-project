Rails.application.routes.draw do

  get 'sessions/new'
  resources :followers
  resources :comments
  resources :episodes
  resources :animes
  resources :favorites

  # ฅʕ>ᴥ<ʔฅ  user's routes - handling authentication
  resources :users, only: [:create, :show]
  resources :sessions, only: [:create, :destroy]

  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  # ฅʕ>ᴥ<ʔฅ  anime 
  get '/anime_info', to: "animes#index"
    # this route is for anime data 

 

end
