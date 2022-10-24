class GenresController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :search_by_genre]
    def index 
        Genre.all
    end 

    def show
    end 

    def search_by_genre
       
        genre = Genre.where("genre = ?", "#{params[:genre]}%"),
        anime = Anime.where("mal_id = ?", anime.mal_id),
        episode = Episode.where("mal_id = ?", anime.mal_id)
         
        render json: {:anime => anime, 
           :episode => episode,
           :genre => genre } 

         Genre.page(params[:page])
      end 


end
