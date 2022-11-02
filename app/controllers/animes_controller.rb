class AnimesController < ApplicationController

  skip_before_action :authenticate_request
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 



def index 
  Anime.all

  #method to only display the animes that match the mal_id to the entries of lr_anime, weekly_anime 
end 


  def show 
    query = params[:anime_title]

    anime = Anime.where("anime_title ilike ?", "%#{query}%")
    episode = Episode.where("mal_id ilike ?",  "%#{query}%")
    genre = Genre.where("mal_id ilike ?", "%#{query}%")

    render json: {:anime => anime,

           :episode => episode,
           :genre => genre }
  end 

def show_episodes 
  query = params[:mal_id]

  anime = Anime.find_by(mal_id: query)
  episode = Episode.where("mal_id = ?",  anime.mal_id)
  genre = Genre.where("mal_id = ?", anime.mal_id)

  render json: {:anime => anime,
         :episode => episode,
         :genre => genre }
end 

def show_popular_shows
    url = "http://localhost:5005/popular"
    response = RestClient.get(url)
    data = JSON.parse(response)
    render json: data  
end 
 
def show_recently_released_episodes
  url = "http://localhost:5005/animix/recent-episodes"
  response = RestClient.get(url)
  data = JSON.parse(response)
  render json: data  
end 
  

def find_popular_show
  url = "http://localhost:5005/popular"
  response = RestClient.get(url)
  data = JSON.parse(response)
  render json: data  

  query = params[:mal_id]
  anime = data.find_by(mal_id: query)
end 

def find_recently_released_episode
  url = "http://localhost:5005/animix/recent-episodes"
  response = RestClient.get(url)
  data = JSON.parse(response)


  query = params[:mal_id]
  anime = data.find_by(mal_id: query)
  render json: {:data => data}
end 
  






private 

def render_not_found_response
  render json: { error: "Anime not found" }, status: :not_found 
end 

def render_unprocessable_entity_response(exception) 
  render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
end 


end
