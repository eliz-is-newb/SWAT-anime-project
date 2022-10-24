class WeeklyTopAnimesController < ApplicationController
    def index 
        WeeklyTopAnime.all 
    end 

    def show 
     wklyanime = WeeklyTopAnime.where("animeTitle = ?", params[:animeTitle]).first
     anime = Anime.where("mal_id = ?", anime.mal_id)
     episode = Episode.where("mal_id = ?", anime.mal_id)
     
     render json: {:wklyanime => wklyanime, 
        :anime => anime,
        :episode => episode }
    end 
end
