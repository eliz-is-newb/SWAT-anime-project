Rails.application.routes.draw do

  get 'sessions/new'
  resources :followers
  resources :comments, only: [:index, :create, :destroy]
  resources :episodes
  resources :animes
  resources :favorites
  resources :genres
  resources :lr_animes
  resources :weekly_top_animes

  # ʚ♥ɞ user's routes - handling authentication / authorization         
  resources :users, only: [:create, :show]
  resources :sessions, only: [:create, :destroy]
  

  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"


  # ʚ♥ɞ anime                                                            
  get '/anime_info', to: "animes#index"
    # this route was for all the anime data but idk now, it fucking hates me. 

    # the only two tricks my nifty backend can do 
  get '/find/:anime_title', to: "animes#show"
  get '/watch/:mal_id', to: "animes#show_episodes"

  get '/see/popular', to: "animes#show_popular_shows"
  get '/see/new', to: "animes#show_recently_released_episodes"
 
  # ʚ♥ɞ routes that fucking hate me                                       


 

end
