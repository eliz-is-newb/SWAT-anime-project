class AnimesController < ApplicationController

  skip_before_action :authorize, only: [:show, :search]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 



def index 
  Anime.all

end 


  def show 
    anime = Anime.where("anime_title = ?", params[:anime_title]).first 
    episode = Episode.where("mal_id = ?", anime.mal_id)
    genre = Genre.where("mal_id = ?", anime.mal_id)

    render json: {:anime => anime, 
           :episode => episode,
           :genre => genre }
  end 


 
  








private 

def render_not_found_response
  render json: { error: "Anime not found" }, status: :not_found 
end 

def render_unprocessable_entity_response(exception) 
  render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
end 


end
