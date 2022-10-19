class Anime < ApplicationRecord
    has_many :favorites 
    has_many :episodes 

      

# Class Methods

  # def self.retrieve_full_data
  #   url1 = "http://localhost:5005/animix/all"
  #   response = RestClient.get(url1)
  #   data = JSON.parse(response.body).each do |item| 
  #           get_helper_data_1(item["animeId"])
  #           end
  # end 
  
  # def self.get_helper_data_1(animeId)
  #   url2 = "http://localhost:5005/animix/episodes/#{animeId}"
  #   response = RestClient.get(url2)
  #   data = JSON.parse(response.body)
   
   
  #   get_helper_data_2(data["mal_id"])
  # end 
  
  # def self.get_helper_data_2(mal_id)
  #   url3 = "http://localhost:5005/animix/info/#{mal_id}"
  #   response = RestClient.get(url3)
  #   data = JSON.parse(response.body)
    
  #       Anime.create!(
  #       anime_title:               data["animeTitle"],
  #       api_id:                    data["animeId"],
  #       mal_id:                    data["mal_id"],
  #       anime_image:               data["animeImg"],
  #       episode_count:             data["episodes"],
  #       status:                    data["status"],
  #       score:                     data["score"],
  #       synopsis:                  data["synopsis"],
  #       genre:                     data["genres"]
  #       )
  #   end 
    
end