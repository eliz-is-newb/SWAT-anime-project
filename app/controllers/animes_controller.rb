class AnimesController < ApplicationController
  before_action :set_anime, only: %i[ show ]
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 
  require 'rest-client'


  def index 
    Anime.all 
  end 
 











# def get_anime
#   url = "http://localhost:5005/animix/all"
#   response = RestClient.get(url)
#     data = JSON.parse(response).each do |item| 
#     get_animes(item["animeId"])
    
#     end
  
# end

# def get_animes(animeId)
#   url = "http://localhost:5005/animix/episodes/#{animeId}"
#   response = RestClient.get(url)
#   data = JSON.parse(response)

#   get_anime_info(data["mal_id"])
# end

# def get_anime_info(mal_id)
#   url = "http://localhost:5005/animix/info/#{mal_id}"
#   response = RestClient.get(url)
#   data = JSON.parse(response)
  
#   Anime.create!(
#     anime_title:                data["animeTitle"],
#     api_id:                     data["animeId"],
#     mal_id:                     data["mal_id"],
#     anime_image:                data["animeImg"],
#     episode_count:              data["episodes"],
#     status:                     data["status"],
#     score:                      data["score"],
#     synopsis:                   data["synopsis"],
#     genre:                      data["genres"]
#   )
# end





# def index 
#   anime = Anime.all 
#   render json: anime
# end 


private 

def render_not_found_response
  render json: { error: "Anime not found" }, status: :not_found 
end 

def render_unprocessable_entity_response(exception) 
  render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
end 


end
