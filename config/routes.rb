Rails.application.routes.draw do
  get 'sessions/new'
  resources :followers
  resources :comments
  resources :episodes
  resources :animes
  resources :favorites

  # ฅʕ>ᴥ<ʔฅ  user's routes - handling authentication
  resources :users, only: [:create, :show]
  
        get   "/signup",       to: "users#new"
        get   "/login",           to: "sessions#new"
        post  "/sessions",   to: "sessions#destroy"




 

end
