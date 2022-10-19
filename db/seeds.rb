# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


Episode.destroy_all 
puts "Seed start"



# ʚ♥ɞ Fetching our data from our AnimeAPI   


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
          mal_id = data["mal_id"].to_i
    

          data["episodes"].each do |episode|
           
                Episode.create!(
                              mal_id:                     mal_id,
                              ep_num:                     episode["epNum"],
                              link:                       episode["link"]
                          )           end 
       end
end

get_anime 
#   get_anime_info(data["mal_id"])
# end

# def get_anime_info(mal_id)
#   url = "http://localhost:5005/animix/info/#{mal_id}"
#   if mal_id 
#         response = RestClient.get(url)
#         data = JSON.parse(response)
#         Anime.create!(
#             anime_title:                data["animeTitle"],
#             api_id:                     data["animeId"],
#             mal_id:                     data["mal_id"],
#             anime_image:                data["animeImg"],
#             episode_count:              data["episodes"],
#             status:                     data["status"],
#             score:                      data["score"],
#             synopsis:                   data["synopsis"],
#             genre:                      data["genres"]
#         )
#     end 



# end


# get_anime
                            
# #                       # ฅʕ>ᴥ<ʔฅ iterator for episode table 
#                             anime_episode_links_all.each do |link|
#                             episodes_for_each_anime = Episode.create!( 
            
#                                     ep_num:           link["epNum"],
#                                     link:             link["link"],
#                                     anime_id:         anime_entry.id 
#                                 )

                        

                    # end 


               


  
puts "Seed End"






