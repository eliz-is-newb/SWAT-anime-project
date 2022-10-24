# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

puts "deleting any past seed data"
Episode.destroy_all
Genre.destroy_all
Anime.destroy_all 
puts "Seed start"



# ʚ♥ɞ Fetching our data from our AnimeAPI   




# #  ฅʕ>ᴥ<ʔฅ latest released anime 
# def get_LR_anime 
#   url = "http://localhost:5005/animix/recent-episodes"
#   response = RestClient.get(url)
#   data = JSON.parse(response)


#   LrAnime.create!(
#     episodes:       data[0][:episodes],
#     mal_id:         data[0][:mal_id],
#     anime_image:    data[0][:animeImg],
#     lr_anime_title: data[0][:episodeTitle]
#     )
   

# end 

#  get_LR_anime 


# #  ฅʕ>ᴥ<ʔฅ weekly most viewed anime 
# def get_weekly_top_anime 
#   url = "http://localhost:5005/popular"
#   response = RestClient.get(url)
#     data = JSON.parse(response)

#     WeeklyTopAnime.create!(
#       animeTitle:  data[0][:animeTitle],
#       mal_id:      data[0][:mal_id],
#       animeImg:    data[0][:animeImg],
#       score:       data[0][:score]
#       )
#  end


#  get_weekly_top_anime 

 
#  ʚ♥ɞ anime database 

def get_anime
  url = "http://localhost:5005/animix/all"
  response = RestClient.get(url)
    data = JSON.parse(response).each do |item| 
    get_animes(item["animeId"])
 end
  
end

def get_animes(animeId)
  url = "http://localhost:5005/animix/episodes/#{animeId}"
  response = RestClient.get(url)
  data = JSON.parse(response)
  if data && data["mal_id"]
          mal_id = data["mal_id"]
    

          data["episodes"].each do |episode|
           
           Episode.create!(
              mal_id:                     mal_id,
              ep_num:                     episode["epNum"],
              link:                       episode["link"]
           )          
       end
end

 
  get_anime_info(data["mal_id"])
end

def get_anime_info(mal_id)
  url = "http://localhost:5005/animix/info/#{mal_id}"
  if mal_id 
        response = RestClient.get(url)
        data = JSON.parse(response)
      
        Genre.create!(
        genres:  data["genres"],
        mal_id: data["mal_id"]
        )
      
       
        



        Anime.create!(
            anime_title:                data["animeTitle"],
            api_id:                     data["animeId"],
            mal_id:                     data["mal_id"],
            anime_image:                data["animeImg"],
            episode_count:              data["episodes"],
            status:                     data["status"],
            score:                      data["score"],
            synopsis:                   data["synopsis"]
        
        )
            
    end

end


get_anime
                            



               


  
puts "Seed End"






