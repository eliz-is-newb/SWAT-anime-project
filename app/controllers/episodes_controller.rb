class EpisodesController < ApplicationController
  before_action :set_episode, only: %i[ show ]
  
  rescue_from ActiveRecord::RecordNotFound, with:, :render_not_found_response 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 


  # def index
  #   @episodes = Episode.all.order(created_at: :animes)
  #   render json: episode 
  # end

  def show
  end



  end

  private
    def set_episode
      @episode = Episode.find(params[:mal_id])
    end


    # Only allow a list of trusted parameters through.
    def episode_params
      params.require(:episode).permit(:mal_id, :ep_num, :link)
    end
    
    def render_not_found_response 
      render json: { error: "Episode not found" }, status: :not_found 
    end 
  
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
    end 



end
