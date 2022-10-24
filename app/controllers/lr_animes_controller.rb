class LrAnimesController < ApplicationController

    def index 
        LrAnime.all 
    end 

    def show 
        lranime = LrAnime.where("lr_anime_title = ?", params[:lr_anime_title]).first
        anime = Anime.where("mal_id = ?", anime.mal_id)
        episode = Episode.where("mal_id = ?", anime.mal_id)
        render json: {:lranime => lranime, 
                         :anime => anime,
                         :episode => episode }

       end 

end
